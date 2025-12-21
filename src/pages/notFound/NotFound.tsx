import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="notfound-animation">
          <div className="number-404">
            <span className="four">4</span>
            <span className="zero">0</span>
            <span className="four">4</span>
          </div>
          <div className="sad-face">😕</div>
        </div>

        <h1 className="notfound-title">Page Not Found</h1>
        <p className="notfound-description">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="notfound-actions">
          <button onClick={handleGoBack} className="btn-back">
            <span className="btn-icon">←</span>
            Go Back
          </button>
          <Link to="/" className="btn-home">
            <span className="btn-icon">🏠</span>
            Go Home
          </Link>
        </div>

        <div className="notfound-links">
          <h3>Popular Pages</h3>
          <div className="quick-links">
            <Link to="/" className="quick-link">
              <span className="link-icon">🏠</span>
              Home
            </Link>
            <Link to="/marketplace" className="quick-link">
              <span className="link-icon">🛒</span>
              Marketplace
            </Link>
            <Link to="/swap" className="quick-link">
              <span className="link-icon">🔄</span>
              Swapping
            </Link>
            <Link to="/tickets" className="quick-link">
              <span className="link-icon">🎫</span>
              Ticketing
            </Link>
            <Link to="/escrow-guide" className="quick-link">
              <span className="link-icon">🛡️</span>
              Escrow Guide
            </Link>
            <Link to="/contact" className="quick-link">
              <span className="link-icon">📧</span>
              Contact Us
            </Link>
          </div>
        </div>

        <div className="notfound-help">
          <p>Need help? <a href="mailto:support@uniswapng.com">Contact Support</a></p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
