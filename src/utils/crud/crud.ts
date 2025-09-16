import { supabase } from "../../service/supabase";



interface Item {
  id: string;
  name: string;
  description: string;
}

// Create
export async function createItem(item: Omit<Item, 'id'>): Promise<Item> {
  const { data, error } = await supabase.from('items').insert(item).select().single();
  if (error) throw error;
  return data;
}

// Read (all)
export async function getItems(): Promise<Item[]> {
  const { data, error } = await supabase.from('items').select('*');
  if (error) throw error;
  return data;
}

// Read (single)
export async function getItem(id: string): Promise<Item> {
  const { data, error } = await supabase.from('items').select('*').eq('id', id).single();
  if (error) throw error;
  return data;
}

// Update
export async function updateItem(id: string, updates: Partial<Item>): Promise<Item> {
  const { data, error } = await supabase.from('items').update(updates).eq('id', id).select().single();
  if (error) throw error;
  return data;
}

// Delete
export async function deleteItem(id: string): Promise<void> {
  const { error } = await supabase.from('items').delete().eq('id', id);
  if (error) throw error;
}