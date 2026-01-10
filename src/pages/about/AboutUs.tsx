import React from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
	return (
		<div className="about-container">
			{/* Hero Section */}
			<section className="hero-section">
				<div className="hero-content">
					<div className="hero-label">About UniswapNG</div>
					<h1 className="hero-title">
						Got stuff you don't need?<br />
						<span className="hero-highlight">Swap it.</span>
					</h1>
					<p className="hero-description">
						We all have things we don't use anymore and someone else probably really needs them.
						UniswapNG makes it easy to swap, pass things on, and clear space without the stress.
					</p>
				</div>
			</section>

			{/* What We Help You Do */}
			<section className="section features-section">
				<div className="container">
					<h2 className="section-title">What we help you do</h2>
					<div className="features-grid">
						<div className="feature-card">
							<div className="feature-icon">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
								</svg>
							</div>
							<h3>Swap items for value</h3>
							<p>Turn unused items into something valuable</p>
						</div>
						<div className="feature-card">
							<div className="feature-icon">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<path d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
							</div>
							<h3>Get buyers fast and easy</h3>
							<p>Connect with interested buyers quickly</p>
						</div>
						<div className="feature-card">
							<div className="feature-icon">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
								</svg>
							</div>
							<h3>Exchange safely</h3>
							<p>Built-in protection for every transaction</p>
						</div>
					</div>
					<div className="features-tagline">
						It's decluttering, but smarter.
					</div>
				</div>
			</section>

			{/* What We're About */}
			<section className="section philosophy-section">
				<div className="container">
					<h2 className="section-title">What we're about</h2>
					<div className="philosophy-grid">
						<div className="philosophy-item">
							<div className="philosophy-number">01</div>
							<p>We believe swapping should feel <strong>easy</strong></p>
						</div>
						<div className="philosophy-item">
							<div className="philosophy-number">02</div>
							<p>Decluttering should feel <strong>good</strong></p>
						</div>
						<div className="philosophy-item">
							<div className="philosophy-number">03</div>
							<p>Letting go shouldn't be <strong>complicated</strong></p>
						</div>
					</div>
					<div className="philosophy-highlight">
						<p>
							We built a place that helps value move from where it's stuck to where it's desired
						</p>
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section className="section process-section">
				<div className="container">
					<h2 className="section-title">Make Room. Get Value</h2>
					<div className="process-steps">
						<div className="process-step">
							<div className="step-number">1</div>
							<h3>Post something</h3>
							<p>List what you don't need</p>
						</div>
						<div className="process-arrow">→</div>
						<div className="process-step">
							<div className="step-number">2</div>
							<h3>Find something</h3>
							<p>Browse what you want</p>
						</div>
						<div className="process-arrow">→</div>
						<div className="process-step">
							<div className="step-number">3</div>
							<h3>Swap</h3>
							<p>Exchange securely</p>
						</div>
					</div>
					<p className="process-tagline">That's it!</p>
					<div className="cta-buttons">
						<button className="btn-primary">Get Started</button>
						<button className="btn-secondary">Learn More</button>
					</div>
				</div>
			</section>

			{/* Stats */}
			<section className="section stats-section">
				<div className="container">
					<div className="stats-grid">
						<div className="stat-item">
							<div className="stat-value">003+</div>
							<div className="stat-label">Active Users</div>
						</div>
						<div className="stat-item">
							<div className="stat-value">005+</div>
							<div className="stat-label">Items Swapped</div>
						</div>
						<div className="stat-item">
							<div className="stat-value">99%</div>
							<div className="stat-label">Satisfaction</div>
						</div>
						<div className="stat-item">
							<div className="stat-value">24/7</div>
							<div className="stat-label">Support</div>
						</div>
					</div>
				</div>
			</section>

			{/* Final CTA */}
			<section className="section final-section">
				<div className="container">
					<h2 className="final-title">Ready to start swapping?</h2>
					<p className="final-description">
						Clear your space. Find what you need. It's that simple.
					</p>
					<button className="btn-primary btn-large">Start Swapping Now</button>
				</div>
			</section>
		</div>
	);
};

export default AboutUs;