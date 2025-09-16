import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { AuthContextType, User } from "../types/auth";
import { supabase } from "../service/supabase";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);
	if (!context) throw new Error("useAuth must be used within an AuthProvider");
	return context;
};

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getSession = async () => {
			const { data: { session } } = await supabase.auth.getSession();
			if (session?.user) {
				setUser({
					id: session.user.id,
					email: session.user.email!,
					created_at: session.user.created_at
				});
			}
			setLoading(false);
		};

		getSession();

		const { data: { subscription } } = supabase.auth.onAuthStateChange(
			async (_, session) => {
				if (session?.user) {
					setUser({
						id: session.user.id,
						email: session.user.email!,
						created_at: session.user.created_at
					});
				} else {
					setUser(null);
				}
				setLoading(false);
			}
		);

		return () => subscription.unsubscribe();
	}, []);

	const signIn = async (email: string, password: string): Promise<void> => {
		const { error } = await supabase.auth.signInWithPassword({ email, password });
		if (error) throw error;
	};

	const signUp = async () => {
		throw new Error("Sign up is disabled. Contact admin.");
	};

	const signOut = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) throw error;
	};

	const resetPassword = async (email: string): Promise<void> => {
		const { error } = await supabase.auth.resetPasswordForEmail(email);
		if (error) throw error;
	};

	const value: AuthContextType = {
		user,
		loading,
		signIn,
		signUp,
		signOut,
		resetPassword,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
