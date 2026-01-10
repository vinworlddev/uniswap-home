import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./Footer.css"; // ✅ Import Footer CSS
import Footer from "./Footer";
import ScrollToTop from "../components/toTop/ScrollToTop";
import FloatingNav from "../components/floatingNav/FloatingNav";

const Layout = () => {
	const { user, signOut } = useAuth();
	const navigate = useNavigate();

	const logout = async () => {
		const confirmed = window.confirm("Are you sure you want to log out?");
		if (!confirmed) return;

		try {
			await signOut();
			window.alert("You have been logged out successfully.");
			navigate("/login");
		} catch (err) {
			console.error(err);
			window.alert("Something went wrong while logging out.");
		}
	};

	return (
		<div className="relative min-h-screen flex flex-col">
			<div className="floating-elements">
				<div className="floating-circle circle-1"></div>
				<div className="floating-circle circle-2"></div>
				<div className="floating-circle circle-3"></div>
			</div>

			<header className="header">
				<div className="!max-w-7xl !mx-auto px-4">
					<div className="flex justify-between items-center py-6">
						<div className="w-full">
							<Link to="/">
								<div className="logo flex items-center gap-2">
									{/* <svg width="40" height="40" viewBox="0 0 100 100" className="flex-shrink-0">
										
										<path
											d="M 30 10 L 30 50 Q 30 75 50 75 Q 70 75 70 50 L 70 10 L 85 10 L 85 50 Q 85 90 50 90 Q 15 90 15 50 L 15 10 Z"
											fill="url(#gradient-light)"
										/>
										
										<path
											d="M 30 10 L 30 50 Q 30 70 50 70 L 50 55 Q 40 55 40 50 L 40 10 Z"
											fill="url(#gradient-dark)"
											opacity="0.6"
										/>
										
										<path
											d="M 70 10 L 85 25 L 85 10 Z"
											fill="url(#gradient-accent)"
										/>
										<defs>
											<linearGradient id="gradient-light" x1="0%" y1="0%" x2="100%" y2="100%">
												<stop offset="0%" stopColor="#5eead4" />
												<stop offset="100%" stopColor="#2dd4bf" />
											</linearGradient>
											<linearGradient id="gradient-dark" x1="0%" y1="0%" x2="100%" y2="100%">
												<stop offset="0%" stopColor="#14b8a6" />
												<stop offset="100%" stopColor="#0d9488" />
											</linearGradient>
											<linearGradient id="gradient-accent" x1="0%" y1="0%" x2="100%" y2="0%">
												<stop offset="0%" stopColor="#2dd4bf" />
												<stop offset="100%" stopColor="#5eead4" />
											</linearGradient>
										</defs>
									</svg> */}
									<img src="/assets/images/logo_icon.png" alt="Uniswapng Logo" className="w-10 h-10 rounded-full object-cover" />
									<span className="text-2xl md:text-3xl font-bold">
										<span className="text-gray-900">Uni</span>
										<span className="text-green-500">swap</span>
										<span className="text-gray-900">ng</span>
									</span>
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
								// <Link to="/login" className="admin-btn">
								// 	Login
									// </Link>
								<div></div>
							)}
						</div>
					</div>
				</div>
			</header>

			{/* Main content with flex-1 to push footer down */}
			<main className="flex-1">
				<div className="!max-w-7xl mx-auto px-4 my-8">
					<Outlet />
				</div>
			</main>

			{/* ✅ Add Footer */}
			<Footer />
			{/* Add Scroll to Top Button */}
			<ScrollToTop />

			{/* Add Floating Navigation */}
			<FloatingNav />
		</div>
	);
};

export default Layout;
