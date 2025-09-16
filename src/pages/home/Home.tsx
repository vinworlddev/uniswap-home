import { useState, useEffect } from 'react';
import { getWaitlistCount, joinWaitlist, unsubscribeFromWaitlist } from '../../supabase/waitlist';

const Home = () => {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [waitlistCount, setWaitlistCount] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	// Check if we're on the unsubscribe page
	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const emailParam = urlParams.get('email');
		const unsubscribe = urlParams.get('unsubscribe');

		if (unsubscribe && emailParam) {
			handleUnsubscribe(emailParam);
		}
	}, []);

	// Fetch waitlist count on component mount
	useEffect(() => {
		fetchWaitlistCount();
	}, []);

	const fetchWaitlistCount = async () => {
		try {
			const count = await getWaitlistCount();
			setWaitlistCount(count);

			// Update the count in the DOM
			const countElement = document.getElementById('waitlistCount');
			if (countElement) {
				countElement.textContent = count.toString();
			}
		} catch (error) {
			console.error('Error fetching waitlist count:', error);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setMessage('');

		try {
			const result = await joinWaitlist(email);

			if (result.success) {
				setMessage(result.message);
				setEmail('');
				fetchWaitlistCount(); // Refresh count
			} else {
				setMessage(result.message);
			}
		} catch (error) {
			setMessage('An error occurred. Please try again.');
		} finally {
			setIsLoading(false);
		}
	};

	const handleUnsubscribe = async (email: string) => {
		try {
			const result = await unsubscribeFromWaitlist(email);

			if (result.success) {
				// Show the unsubscribe page
				const unsubscribePage = document.getElementById('unsubscribePage');
				const mainContent = document.querySelector('.container');

				if (unsubscribePage && mainContent) {
					unsubscribePage.classList.remove('hidden');
					mainContent.classList.add('hidden');
				}
			} else {
				setMessage(result.message || 'Failed to unsubscribe');
			}
		} catch (error) {
			setMessage('An error occurred while unsubscribing.');
		}
	};



	return (
		<>
			<section className="hero">
				<div className="hero-badge">🚀 Coming Soon</div>
				<h1 className="hero-title">Your Trusted Marketplace</h1>
				<p className="hero-subtitle">Buy and sell new or used products with confidence. Secure escrow payments, built-in wallet, and dedicated account numbers make trading safe and simple.</p>
			</section>

			<section className="waitlist-section">
				<h2 className="waitlist-title">Join the Waitlist</h2>
				<p className="waitlist-subtitle">Be the first to know when we launch!</p>

				<form className="email-form" onSubmit={handleSubmit}>
					<input
						type="email"
						className="email-input"
						placeholder="Enter your email address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<button
						type="submit"
						className="subscribe-btn"
						disabled={isLoading}
					>
						{isLoading ? 'Joining...' : 'Join Waitlist'}
					</button>
				</form>

				{message && (
					<div className={`message ${message.includes('already') ? 'error' : 'success'}`}>
						{message}
					</div>
				)}
			</section>

			<section className="stats">
				<div className="stat-card">
					<span className="stat-number" id="waitlistCount">{waitlistCount}</span>
					<span className="stat-label">Waitlist Members</span>
				</div>
				<div className="stat-card">
					<span className="stat-number">98%</span>
					<span className="stat-label">Success Rate</span>
				</div>
				<div className="stat-card">
					<span className="stat-number">24/7</span>
					<span className="stat-label">Support</span>
				</div>
			</section>

			<section className="features">
				<div className="feature-card">
					<div className="feature-icon">🛡️</div>
					<h3 className="feature-title">Escrow Protection</h3>
					<p className="feature-description">Your money stays safe in escrow until you confirm receipt. Both buyers and sellers are protected throughout every transaction.</p>
				</div>

				<div className="feature-card">
					<div className="feature-icon">💳</div>
					<h3 className="feature-title">Built-in Wallet</h3>
					<p className="feature-description">Get your dedicated account number for easy wallet top-ups. Make instant transfers and manage your funds with complete control.</p>
				</div>

				<div className="feature-card">
					<div className="feature-icon">📦</div>
					<h3 className="feature-title">List Anything</h3>
					<p className="feature-description">Upload new or used products with photos and descriptions. From electronics to fashion, sell anything quickly and safely.</p>
				</div>
			</section>
			

			{/* Unsubscribe Page (Hidden by default) */}
			<div className="hidden" id="unsubscribePage">
				<div className="container pt-[100px] text-center">
					<h1>Unsubscribe</h1>
					<p>You have been successfully unsubscribed from our waitlist.</p>
				</div>
			</div>
		</>
	);
};

export default Home;