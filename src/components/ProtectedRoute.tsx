import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Spinner } from "flowbite-react";
import { supabase } from "../service/supabase";
import { useEffect, useState } from "react";

interface ProtectedRouteProps {
	children: React.ReactNode;
	requireAdmin?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requireAdmin }) => {
	const { user, loading } = useAuth();
	const location = useLocation();
	const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

	useEffect(() => {
		const checkAdmin = async () => {
			if (requireAdmin && user) {
				const { data, error } = await supabase
					.from("admin_users")
					.select("id")
					.eq("id", user.id)
					.maybeSingle();

				if (error) {
					console.error("Admin check error:", error);
					setIsAdmin(false);
				} else {
					setIsAdmin(!!data);
				}
			} else {
				setIsAdmin(true); // no admin requirement
			}
		};

		checkAdmin();
	}, [requireAdmin, user]);

	if (loading || (requireAdmin && isAdmin === null)) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<Spinner />
			</div>
		);
	}

	if (!user) {
		return <Navigate to="/admin/login" state={{ from: location }} replace />;
	}

	if (requireAdmin && !isAdmin) {
		return <Navigate to="/unauthorized" replace />;
	}

	return <>{children}</>;
};

export default ProtectedRoute;
