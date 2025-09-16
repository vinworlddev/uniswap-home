import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Card, Label, TextInput, Button, Spinner, Alert } from "flowbite-react";

const Login: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const { signIn } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || "/";

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		try {
			await signIn(email, password);
			navigate(from, { replace: true }); // ✅ successful login
		} catch (err: any) {
			setError(err.message || "Login failed");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center px-4">
			{/* <Card className="w-full max-w-md shadow-xl">
				<h2 className="text-2xl font-bold text-center text-white mb-2">
					Admin Dashboard
				</h2>
				<p className="text-sm text-center text-gray-500 mb-6">
					Sign in to your account
				</p>

				{error && (
					<Alert color="failure" className="mb-4 text-sm text-center">
						{error}
					</Alert>
				)}

				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<Label htmlFor="email" />
						<TextInput
							id="email"
							type="email"
							placeholder="you@example.com"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div>
						<Label htmlFor="password" />
						<TextInput
							id="password"
							type="password"
							placeholder="••••••••"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<Button
						type="submit"
						className="w-full"
						disabled={loading}
					>
						{loading ? (
							<>
								<Spinner size="sm" light className="mr-2" />
								Signing in...
							</>
						) : (
							"Sign in"
						)}
					</Button>
				</form>
			</Card> */}

			<Card className="max-w-lg ">
				<form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8">
					<div>
						<div className="mb-2 block">
							<Label htmlFor="email1">Your email</Label>
						</div>
						<TextInput id="email"
							type="email"
							placeholder="you@example.com"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)} />
					</div>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="password1">Your password</Label>
						</div>
						<TextInput id="password"
							type="password"
							placeholder="••••••••"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)} />
					</div>

					<Button
						type="submit"
						className="w-full"
						disabled={loading}
					>
						{loading ? (
							<>
								<Spinner size="sm" light className="mr-2" />
								Signing in...
							</>
						) : (
							"Sign in"
						)}
					</Button>

					{error && (
						<Alert color="failure" className="mb-4 text-sm text-center">
							{error}
						</Alert>
					)}

				</form>
			</Card>
		</div>
	);
};

export default Login;
