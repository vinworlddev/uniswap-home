import { useState, useEffect } from 'react';
import { getWaitlistCount, joinWaitlist, unsubscribeFromWaitlist } from '../../supabase/waitlist';
import { Helmet } from 'react-helmet-async';

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
			<Helmet>
				<title>UniswapNG - Trusted Marketplace | Buy & Sell Safely with Escrow</title>
				<meta name="description" content="Join UniswapNG's waitlist for Nigeria's safest student marketplace. Buy and sell textbooks, electronics, and more with secure escrow protection and built-in wallet." />
				<meta name="keywords" content="student marketplace, buy sell Nigeria, university trading platform, textbooks marketplace, electronics buy sell, secure escrow Nigeria, student trading app" />
				<link rel="canonical" href="https://uniswapng.com/" />
			</Helmet>
			<section className="hero">
				<div className="hero-badge">🚀 Coming Soon</div>
				<h1 className="hero-title">Less Clutter. More Value. No Stress</h1>
				{/* <p className="hero-subtitle">Buy and sell new or used products with confidence. Secure escrow payments,
					built-in wallet, and dedicated account numbers make trading safe and simple.
				</p> */}
				<p className="hero-subtitle">
					Turn things you don't need into cash, or something better safely, simply and securely
				</p>
				
			</section>

			<section className="waitlist-section">
				<h2 className="waitlist-title">Join the Waitlist</h2>
				<p className="waitlist-subtitle">Be the first to make room and get value</p>

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
					<div className="feature-icon">🔐</div>
					<h3 className="feature-title">Protected Swaps</h3>
					<p className="feature-description">
						Your money stays secure while both sides complete the exchange.
						Only release when everyone’s good.
					</p>
				</div>

				<div className="feature-card">
					<div className="feature-icon">💼</div>
					<h3 className="feature-title">Secure Payments</h3>
					<p className="feature-description">
						Add funds easily, receive payments, and keep track of your value all in one place.
					</p>
				</div>

				<div className="feature-card">
					<div className="feature-icon">📦</div>
					<h3 className="feature-title">Post Anything</h3>
					<p className="feature-description">
						List items you’re done with new or used.
						Get offers fast and choose what works for you.
					</p>
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