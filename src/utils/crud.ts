import { supabase } from '../service/supabase'
import type { CrudOptions } from '../types/auth'

export class CrudService {
	static async create<T>(table: string, data: Partial<T>): Promise<T> {
		const { data: result, error } = await supabase
			.from(table)
			.insert(data)
			.select()
			.single()

		if (error) throw error
		return result
	}

	static async read<T>(
		table: string,
		options: Partial<CrudOptions> = {}
	): Promise<T[]> {
		let query = supabase
			.from(table)
			.select(options.select || '*');

		if (options.orderBy) {
			query = query.order(
				options.orderBy.column,
				{ ascending: options.orderBy.ascending ?? true }
			);
		}

		if (options.limit) {
			query = query.limit(options.limit);
		}
		if (options.offset !== undefined && options.limit) {
			query = query.range(options.offset, options.offset + options.limit - 1);
		}

		const { data, error } = await query;

		if (error) throw error;
		return Array.isArray(data) ? (data as T[]) : [];
	}


	static async readById<T>(table: string, id: string): Promise<T | null> {
		const { data, error } = await supabase
			.from(table)
			.select('*')
			.eq('id', id)
			.single();

		if (error) {
			if (error.code === 'PGRST116') return null; // Not found
			throw error; // Other errors
		}

		return data ?? null; // Ensure we return null if data is undefined
	}


	static async update<T>(
		table: string,
		id: string,
		data: Partial<T>
	): Promise<T> {
		const { data: result, error } = await supabase
			.from(table)
			.update(data)
			.eq('id', id)
			.select()
			.single()

		if (error) throw error
		return result
	}

	static async delete(table: string, id: string): Promise<void> {
		const { error } = await supabase
			.from(table)
			.delete()
			.eq('id', id)

		if (error) throw error
	}

	// static async query<T>(
	// 	table: string,
	// 	filters: Record<string, any> = {},
	// 	options: Partial<CrudOptions> = {}
	// ): Promise<T[]> {
	// 	let query = supabase
	// 		.from(table)
	// 		.select(options.select || '*')

	// 	// Apply filters
	// 	Object.entries(filters).forEach(([key, value]) => {
	// 		if (Array.isArray(value)) {
	// 			query = query.in(key, value)
	// 		} else if (typeof value === 'string' && value.includes('%')) {
	// 			query = query.like(key, value)
	// 		} else {
	// 			query = query.eq(key, value)
	// 		}
	// 	})

	// 	if (options.orderBy) {
	// 		query = query.order(
	// 			options.orderBy.column,
	// 			{ ascending: options.orderBy.ascending ?? true }
	// 		)
	// 	}

	// 	if (options.limit) {
	// 		query = query.limit(options.limit);
	// 	}
	// 	if (options.offset !== undefined && options.limit) {
	// 		query = query.range(options.offset, options.offset + options.limit - 1);
	// 	}


	// 	const { data, error } = await query

	// 	if (error) throw error
	// 	return Array.isArray(data) ? (data as T[]) : ([] as T[])
	// }

		// ...existing code...
	    static async query<T>(
		   table: string,
		   filters: Record<string, any> = {},
		   options: Partial<CrudOptions> = {}
	    ): Promise<{ data: T[]; count: number }> {
		   let query = supabase
			  .from(table)
			  .select(options.select || '*', { count: 'exact' });
	
		   // Apply filters
		   Object.entries(filters).forEach(([key, value]) => {
			  if (Array.isArray(value)) {
				 query = query.in(key, value)
			  } else if (typeof value === 'string' && value.includes('%')) {
				 query = query.like(key, value)
			  } else {
				 query = query.eq(key, value)
			  }
		   })
	
		   if (options.orderBy) {
			  query = query.order(
				 options.orderBy.column,
				 { ascending: options.orderBy.ascending ?? true }
			  )
		   }
	
		   if (options.limit) {
			  query = query.limit(options.limit);
		   }
		   if (options.offset !== undefined && options.limit) {
			  query = query.range(options.offset, options.offset + options.limit - 1);
		   }
	
		   const { data, error, count } = await query
	
		   if (error) throw error
		   return { data: Array.isArray(data) ? (data as T[]) : ([] as T[]), count: count ?? 0 }
	    }
	// ...existing code...
}