"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { v4 as uuidv4 } from "uuid"
import { cookies } from "next/headers"

// Helper function to check if Supabase is configured
const checkSupabaseConfig = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      success: false,
      error:
        "Supabase credentials are missing. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.",
    }
  }

  return { success: true }
}

// Helper function to get the current admin ID from cookies
const getCurrentAdminId = async () => {
  try {
    const cookieStore = await cookies()
    const adminData = cookieStore.get("admin")

    if (!adminData || !adminData.value) {
      return null
    }

    const parsedData = JSON.parse(adminData.value)
    return parsedData.id || null
  } catch (error) {
    console.error("Error getting admin ID from cookies:", error)
    return null
  }
}

// Helper function to generate a random tracking number
export async function generatetracking_number(): Promise<string> {
  const supabase = createClient()
  let trackingNumber: string
  let isUnique = false
  let attempts = 0
  const maxAttempts = 20

  while (!isUnique && attempts < maxAttempts) {
    // Generate a unique tracking number
    const prefix = "DEL"
    const timestamp = Date.now().toString().slice(-6)
    const random = Math.random().toString(36).substring(2, 6).toUpperCase()
    trackingNumber = `${prefix}${timestamp}${random}`

    // Check if it already exists in the database
    const { data, error } = await supabase
      .from("packages")
      .select("tracking_number")
      .eq("tracking_number", trackingNumber)
      .single()

    // If no data is found, the tracking number is unique
    if (!data && error?.code === "PGRST116") {
      isUnique = true
    }
    
    attempts++
    
    // Add a small delay to ensure timestamp changes
    if (!isUnique) {
      await new Promise(resolve => setTimeout(resolve, 10))
    }
  }

  if (!isUnique) {
    // Fallback to UUID-based tracking number if we couldn't generate a unique one
    trackingNumber = `DEL${uuidv4().split('-')[0].toUpperCase()}`
  }

  return trackingNumber!
}

// Create a new package
export async function createPackage(packageData: any) {
  try {
    // Check if Supabase is configured
    const configCheck = checkSupabaseConfig()
    if (!configCheck.success) {
      return configCheck
    }
    
    const supabase = createClient()
    
    // Get the current logged-in admin ID
    const adminId = await getCurrentAdminId()
    
    if (!adminId) {
      return { success: false, error: "Admin not authenticated" }
    }
    
    // Add admin_id to the package data
    const packageWithAdminId = {
      ...packageData,
      admin_id: adminId
    }
    
    const { data, error } = await supabase
      .from("packages")
      .insert([packageWithAdminId])
      .select()
      .single()

    if (error) {
      console.error("Error creating package:", error)
      return { success: false, error: error.message }
    }

    // Revalidate the packages page
    revalidatePath("/admin/packages")
    
    return { success: true, data }
  } catch (error) {
    console.error("Error creating package:", error)
    return { success: false, error: "Failed to create package" }
  }
}

// Get all packages
export async function getAllPackages() {
  try {
    // Check if Supabase is configured
    const configCheck = checkSupabaseConfig()
    if (!configCheck.success) {
      return { success: false, error: configCheck.error, packages: [] }
    }

    const supabase = createClient()

    // Get the current logged-in admin ID
    const adminId = await getCurrentAdminId()
    
    if (!adminId) {
      return { success: false, error: "Admin not authenticated", packages: [] }
    }

    // Filter packages by current admin ID
    const { data, error } = await supabase
      .from("packages")
      .select("*")
      .eq("admin_id", adminId)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching packages:", error)
      return { success: false, error: error.message, packages: [] }
    }

    console.log(`Fetched ${data?.length || 0} packages for admin ${adminId}`)
    
    return { success: true, packages: data, error: null }
  } catch (error: any) {
    console.error("Error fetching packages:", error)
    return { success: false, error: error.message, packages: [] }
  }
}

// Get a package by ID
export async function getPackageById(id: string) {
  try {
    // Check if Supabase is configured
    const configCheck = checkSupabaseConfig()
    if (!configCheck.success) {
      return { success: false, error: configCheck.error }
    }

    const supabase = createClient()
    const { data, error } = await supabase
      .from("packages")
      .select("*")
      .eq("tracking_number", id)
      .single()

    if (error) {
      console.error("Error fetching package:", error)
      return { success: false, error: error.message }
    }

    return { success: true, package: data }
  } catch (error: any) {
    console.error("Error fetching package:", error)
    return { success: false, error: error.message }
  }
}

// Update a package
export async function updatePackage(tracking_number: string, packageData: any) {
  try {
    const supabase = createClient()
    
    // Check if tracking number is being updated
    const isTrackingNumberChanged = 
      packageData.tracking_number && 
      packageData.tracking_number !== tracking_number
    
    if (isTrackingNumberChanged) {
      console.log(`Updating tracking number from ${tracking_number} to ${packageData.tracking_number}`)
      
      // Get current admin_id from the existing package
      const { data: existingPkg } = await supabase
        .from("packages")
        .select("admin_id")
        .eq("tracking_number", tracking_number)
        .single()
      
      // We need to create a new record with the new tracking number and delete the old one
      // First, create a new record with the new tracking number
      const { data: newData, error: createError } = await supabase
        .from("packages")
        .insert([{ ...packageData, admin_id: existingPkg?.admin_id }])
        .select()
        .single()
      
      if (createError) {
        console.error("Error creating package with new tracking number:", createError)
        return { success: false, error: createError.message }
      }
      
      // Then delete the old record
      const { error: deleteError } = await supabase
        .from("packages")
        .delete()
        .eq("tracking_number", tracking_number)
      
      if (deleteError) {
        console.error("Error deleting package with old tracking number:", deleteError)
        return { success: false, error: deleteError.message }
      }
      
      return { success: true, data: newData }
    } else {
      // Regular update without tracking number change
      const { data, error } = await supabase
        .from("packages")
        .update(packageData)
        .eq("tracking_number", tracking_number)
        .select()
        .single()

      if (error) {
        console.error("Error updating package:", error)
        return { success: false, error: error.message }
      }

      return { success: true, data }
    }
  } catch (error) {
    console.error("Error updating package:", error)
    return { success: false, error: "Failed to update package" }
  }
}

// Delete a package
export async function deletePackage(tracking_number: string) {
  try {
    // Check if Supabase is configured
    const configCheck = checkSupabaseConfig()
    if (!configCheck.success) {
      return configCheck
    }

    const supabase = createClient()

    // Delete the package from the database
    const { error } = await supabase
      .from("packages")
      .delete()
      .eq("tracking_number", tracking_number)

    if (error) {
      console.error("Error deleting package:", error)
      return { success: false, error: error.message }
    }

    // Revalidate the packages page
    revalidatePath("/admin/packages")

    return { success: true }
  } catch (error: any) {
    console.error("Error deleting package:", error)
    return { success: false, error: error.message }
  }
}

// Add a checkpoint to a package
export async function addCheckpoint(tracking_number: string, checkpointData: any) {
  try {
    // Check if Supabase is configured
    const configCheck = checkSupabaseConfig()
    if (!configCheck.success) {
      return configCheck
    }

    const supabase = createClient()

    // Get the current package
    const { data: packageData, error: packageError } = await supabase
      .from("packages")
      .select("checkpoints")
      .eq("tracking_number", tracking_number)
      .single()

    if (packageError) {
      console.error("Error fetching package:", packageError)
      return { success: false, error: packageError.message }
    }

    // Prepare the checkpoint data
    const newCheckpoint = {
      id: checkpointData.id || uuidv4(),
      location: checkpointData.location,
      description: checkpointData.description,
      timestamp: checkpointData.timestamp || new Date().toISOString(),
      status: checkpointData.status,
      coordinates: checkpointData.coordinates || null,
    }

    // Add the checkpoint to the package
    const checkpoints = [...(packageData.checkpoints || []), newCheckpoint]

    // Update the package in the database
    const { error } = await supabase
      .from("packages")
      .update({ checkpoints, status: checkpointData.status })
      .eq("tracking_number", tracking_number)

    if (error) {
      console.error("Error adding checkpoint:", error)
      return { success: false, error: error.message }
    }

    // Revalidate the package page
    revalidatePath(`/admin/packages/${tracking_number}`)
    revalidatePath("/admin/packages")

    return { success: true, checkpoint: newCheckpoint }
  } catch (error: any) {
    console.error("Error adding checkpoint:", error)
    return { success: false, error: error.message }
  }
}

// Update a checkpoint
export async function updateCheckpoint(tracking_number: string, checkpointId: string, checkpointData: any) {
  try {
    // Check if Supabase is configured
    const configCheck = checkSupabaseConfig()
    if (!configCheck.success) {
      return configCheck
    }

    const supabase = createClient()

    // Get the current package
    const { data: packageData, error: packageError } = await supabase
      .from("packages")
      .select("checkpoints")
      .eq("tracking_number", tracking_number)
      .single()

    if (packageError) {
      console.error("Error fetching package:", packageError)
      return { success: false, error: packageError.message }
    }

    // Find the checkpoint to update
    const checkpoints = packageData.checkpoints || []
    const checkpointIndex = checkpoints.findIndex((checkpoint: any) => checkpoint.id === checkpointId)

    if (checkpointIndex === -1) {
      return { success: false, error: "Checkpoint not found" }
    }

    // Update the checkpoint
    checkpoints[checkpointIndex] = {
      ...checkpoints[checkpointIndex],
      ...checkpointData,
    }

    // AdminDice admin ID for Cargo Logistics
    const ADMIN_DICE_ID = "28cd6ec5-910c-4f29-b43d-bc0fc51e4aab"

    // Update the package in the database
    const { error } = await supabase
      .from("packages")
      .update({ checkpoints })
      .eq("tracking_number", tracking_number)
      .eq("admin_id", ADMIN_DICE_ID)

    if (error) {
      console.error("Error updating checkpoint:", error)
      return { success: false, error: error.message }
    }

    // Revalidate the package page
    revalidatePath(`/admin/packages/${tracking_number}`)
    revalidatePath("/admin/packages")

    return { success: true }
  } catch (error: any) {
    console.error("Error updating checkpoint:", error)
    return { success: false, error: error.message }
  }
}

// Delete a checkpoint
export async function deleteCheckpoint(tracking_number: string, checkpointId: string) {
  try {
    // Check if Supabase is configured
    const configCheck = checkSupabaseConfig()
    if (!configCheck.success) {
      return configCheck
    }

    const supabase = createClient()

    // AdminDice admin ID for Cargo Logistics
    const ADMIN_DICE_ID = "28cd6ec5-910c-4f29-b43d-bc0fc51e4aab"

    // Get the current package
    const { data: packageData, error: packageError } = await supabase
      .from("packages")
      .select("checkpoints")
      .eq("tracking_number", tracking_number)
      .eq("admin_id", ADMIN_DICE_ID)
      .single()

    if (packageError) {
      console.error("Error fetching package:", packageError)
      return { success: false, error: packageError.message }
    }

    // Filter out the checkpoint to delete
    const checkpoints = (packageData.checkpoints || []).filter((checkpoint: any) => checkpoint.id !== checkpointId)

    // Update the package in the database
    const { error } = await supabase
      .from("packages")
      .update({ checkpoints })
      .eq("tracking_number", tracking_number)
      .eq("admin_id", ADMIN_DICE_ID)

    if (error) {
      console.error("Error deleting checkpoint:", error)
      return { success: false, error: error.message }
    }

    // Revalidate the package page
    revalidatePath(`/admin/packages/${tracking_number}`)
    revalidatePath("/admin/packages")

    return { success: true }
  } catch (error: any) {
    console.error("Error deleting checkpoint:", error)
    return { success: false, error: error.message }
  }
}

// Update checkpoints
export async function updateCheckpoints(tracking_number: string, checkpoints: any[]) {
  try {
    // Check if Supabase is configured
    const configCheck = checkSupabaseConfig()
    if (!configCheck.success) {
      return configCheck
    }

    const supabase = createClient()

    // AdminDice admin ID for Cargo Logistics
    const ADMIN_DICE_ID = "28cd6ec5-910c-4f29-b43d-bc0fc51e4aab"

    // Update the package in the database
    const { error } = await supabase
      .from("packages")
      .update({ checkpoints })
      .eq("tracking_number", tracking_number)
      .eq("admin_id", ADMIN_DICE_ID)

    if (error) {
      console.error("Error updating checkpoints:", error)
      return { success: false, error: error.message }
    }

    // Revalidate the package page
    revalidatePath(`/admin/packages/${tracking_number}`)
    revalidatePath("/admin/packages")

    return { success: true }
  } catch (error: any) {
    console.error("Error updating checkpoints:", error)
    return { success: false, error: error.message }
  }
}

// Update package location
export async function updatePackageLocation(tracking_number: string, location: any) {
  try {
    const supabase = createClient()

    // AdminDice admin ID for Cargo Logistics
    const ADMIN_DICE_ID = "28cd6ec5-910c-4f29-b43d-bc0fc51e4aab"

    const { data, error } = await supabase
      .from("packages")
      .update({
        current_location: location,
      })
      .eq("tracking_number", tracking_number)
      .eq("admin_id", ADMIN_DICE_ID)

    if (error) {
      console.error("Error updating package location:", error)
      return { success: false, error: error.message }
    }

    // Use revalidatePath only in app directory components
    try {
      revalidatePath(`/admin/packages/${tracking_number}`)
      revalidatePath(`/track`)
    } catch (e) {
      // Silently catch errors if revalidatePath is not supported
      console.log("Note: revalidatePath not supported in this context")
    }

    return { success: true }
  } catch (error: any) {
    console.error("Unexpected error updating package location:", error)
    return { success: false, error: error.message || "An unexpected error occurred" }
  }
}
