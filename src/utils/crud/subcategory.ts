import { supabase } from "../../service/supabase";


export interface Category {
	id: number;        // int8 → number
	title: string;
	created_at: string;
	updated_at: string;
}

export interface Subcategory {
	id: number;        // int8 → number
	cat_id: number;    // int8 → number (FK to categories.id)
	title: string;
	created_at: string;
	updated_at: string;
}

export const getSubcategories = async (): Promise<Subcategory[]> => {
	const { data, error } = await supabase
		.from('subcategories')
		.select('*')
		.order('title');

	if (error) {
		throw new Error(error.message);
	}

	return data as Subcategory[];
};

export const createSubcategory = async (subcategoryData: { title: string; cat_id: number }): Promise<Subcategory> => {
	// Convert cat_id to number for bigint column
	const dataToInsert = {
		...subcategoryData,
		cat_id: subcategoryData.cat_id,
	};

	const { data, error } = await supabase
		.from('subcategories')
		.insert([dataToInsert])
		.select()
		.single();

	if (error) {
		throw new Error(error.message);
	}

	return data as Subcategory;
};

// export const createSubcategory = async (
// 	subcategoryData: { title: string; cat_id: number }
// ): Promise<Subcategory> => {
// 	const { data, error } = await supabase
// 		.from('subcategories')
// 		.insert([subcategoryData])   // cat_id is number
// 		.select()
// 		.single();
// 	if (error) throw new Error(error.message);
// 	return data as Subcategory;
// };

export const updateSubcategory = async (id: number, subcategoryData: { title: string; cat_id: number }): Promise<Subcategory> => {
	// Convert cat_id to number for bigint column
	const dataToUpdate = {
		...subcategoryData,
		cat_id: subcategoryData.cat_id,
	};

	const { data, error } = await supabase
		.from('subcategories')
		.update(dataToUpdate)
		.eq('id', id)
		.select()
		.single();

	if (error) {
		throw new Error(error.message);
	}

	return data as Subcategory;
};

export const deleteSubcategory = async (id: number): Promise<void> => {
	const { error } = await supabase
		.from('subcategories')
		.delete()
		.eq('id', id);

	if (error) {
		throw new Error(error.message);
	}
};

// export const updateSubcategory = async (
// 	id: number,
// 	subcategoryData: { title: string; cat_id: number }
// ): Promise<Subcategory> => {
// 	const { data, error } = await supabase
// 		.from('subcategories')
// 		.update(subcategoryData)     // cat_id is number
// 		.eq('id', id)                // id is number
// 		.select()
// 		.single();
// 	if (error) throw new Error(error.message);
// 	return data as Subcategory;
// };

// export const deleteSubcategory = async (id: number): Promise<void> => {
// 	const { error } = await supabase
// 		.from('subcategories')
// 		.delete()
// 		.eq('id', id);
// 	if (error) throw new Error(error.message);
// };