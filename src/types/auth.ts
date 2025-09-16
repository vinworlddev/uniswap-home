export interface User {
	id: string
	email: string
	role?: string
	created_at: string
}

export interface AuthContextType {
	user: User | null
	loading: boolean
	signIn: (email: string, password: string) => Promise<void>
	signUp: (email: string, password: string) => Promise<void>
	signOut: () => Promise<void>
	resetPassword: (email: string) => Promise<void>
}

// export interface CrudOptions {
// 	table: string
// 	select: string
// 	orderBy?: { column: string; ascending? : boolean}
	
// }

export interface CrudOptions {
	select?: string;
	orderBy?: {
		column: string;
		ascending?: boolean;
	};
	limit?: number;
	offset?: number;
}

export interface Profile {
	id: string
	name: string | null
	email: string | null
	photo: string | null
	avatar: string | null
	address: string | null
	pincode: string | null
	phone: string | null
	biometric: boolean
	basic_progress: boolean
	is_validated: boolean
	dob: string | null
	gender: string | null
	bio: string | null
	link: string | null
	bvn: string | null
	bank_name: string | null
	account_name: string | null
	account_number: string | null
	created_at: string
	updated_at: string
}

