import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Layout = () => {
	const { user, signOut } = useAuth(); // ✅ include user
	const navigate = useNavigate();

	const logout = async () => {
		const confirmed = window.confirm("Are you sure you want to log out?");
		if (!confirmed) return;

		try {
			await signOut();
			window.alert("You have been logged out successfully.");
			navigate("/login"); // ✅ redirect to login
		} catch (err) {
			console.error(err);
			window.alert("Something went wrong while logging out.");
		}
	};

	return (
		<div className="relative">
			<div className="floating-elements">
				<div className="floating-circle circle-1"></div>
				<div className="floating-circle circle-2"></div>
				<div className="floating-circle circle-3"></div>
			</div>


			<header className="header">
				<div className="!max-w-7xl !mx-auto px-4">
					<div className="flex justify-between items-center">
						<div className="w-full">

							<Link to="/">
								<div className="logo">
									<img className="h-16 md:h-20" src="assets/images/logo.png" alt="logo" />
								</div>
							</Link>
						</div>

						<div className="flex gap-2 items-center">
							{user ? (
								<>
									<Link to="/admin" className="admin-btn">
										Admin
									</Link>
									<button className="admin-btn" onClick={logout}>
										Logout
									</button>
								</>
							) : (
								<Link to="/login" className="admin-btn">
									Login
								</Link>
							)}
						</div>
					</div>
				</div>
			</header>


			<div className="!max-w-7xl mx-auto px-4 my-8">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
