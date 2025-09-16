import { supabase } from "../service/supabase";



export interface Category {
  id: string;
  title: string;
  image?: string;
  image_id?: string;
}

// Create category
export async function createCategory(category: Omit<Category, "id">): Promise<Category> {
  const { data, error } = await supabase
    .from("categories")
    .insert(category)
    .select()
    .single();

  if (error) throw error;
  return data;
}

// Get all categories
export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase.from("categories").select("*");
  if (error) throw error;
  return data || [];
}

// Get single category
export async function getCategory(id: string): Promise<Category> {
  const { data, error } = await supabase.from("categories").select("*").eq("id", id).single();
  if (error) throw error;
  return data;
}

// Update category
export async function updateCategory(id: string, updates: Partial<Category>): Promise<Category> {
  const { data, error } = await supabase
    .from("categories")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

// Delete category
export async function deleteCategory(id: string): Promise<void> {
  const { error } = await supabase.from("categories").delete().eq("id", id);
  if (error) throw error;
}

// Upload image
export async function uploadCategoryImage(file: File): Promise<{ image: string; image_id: string }> {
  const fileExt = file.name.split(".").pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const { data, error } = await supabase.storage.from("categories").upload(fileName, file);

  if (error) throw error;

  const { data: publicUrl } = supabase.storage.from("categories").getPublicUrl(data.path);

  return {
    image: publicUrl.publicUrl,
    image_id: data.path,
  };
}

// Delete image
export async function deleteCategoryImage(imageId: string): Promise<void> {
  const { error } = await supabase.storage.from("categories").remove([imageId]);
  if (error) throw error;
}
