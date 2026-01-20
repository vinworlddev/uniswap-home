import './ElectronicConsent.css';

const ElectronicConsent = () => {




  return (
    <div className="consent-wrapper">
      <div className="hero">
        <div className="hero-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14,2 14,8 20,8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        </div>
        <h1>E-Signature Consent Agreement</h1>
        <p className="subtitle">ESIGN Act Compliant</p>
      </div>

      {/* <!-- Content Sections --> */}
      <div className="content">
        <div className="item">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2>Electronic Communications</h2>
          </div>
          <p>By providing your consent, you agree to receive all communications, agreements, documents, notices, and disclosures electronically. This includes but is not limited to:</p>
          <ul className="feature-list">
            <li>Account opening documents</li>
            <li>Transaction confirmations</li>
            <li>Terms of service updates</li>
            <li>Privacy policy changes</li>
            <li>Payment authorizations</li>
            <li>Escrow agreements</li>
          </ul>
        </div>

        <div className="item">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2>Electronic Signatures</h2>
          </div>
          <p>You agree that your electronic signature on agreements and documents has the same legal effect as a handwritten signature. Your electronic signature will be used for:</p>
          <ul className="feature-list">
            <li>Escrow transaction agreements</li>
            <li>Payment authorizations</li>
            <li>Identity verification consents</li>
            <li>Terms of service acceptance</li>
          </ul>
        </div>

        <div className="item">
          <div className="section-header">
            <span className="section-number">03</span>
            <h2>Hardware & Software Requirements</h2>
          </div>
          <p>To access and retain electronic documents, you need:</p>
          <ul className="feature-list">
            <li>A smartphone with iOS 12+ or Android 8+</li>
            <li>Internet connection</li>
            <li>The Uniswap mobile application</li>
            <li>Sufficient storage space for documents</li>
          </ul>
        </div>

        {/* <!-- Info Cards --> */}
        <div className="info-cards">
          <div className="info-card">
            <div className="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
                <path d="M12 9v6" />
                <path d="M9 12h6" />
              </svg>
            </div>
            <div className="info-content">
              <h3>Right to Paper Copies</h3>
              <p>You may request paper copies of any electronic document. Contact <a href="mailto:support@uniswapng.com">support@uniswapng.com</a> for assistance. Processing fees may apply.</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon warning">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M4.93 4.93l14.14 14.14" />
              </svg>
            </div>
            <div className="info-content">
              <h3>Right to Withdraw Consent</h3>
              <p>You may withdraw this consent at any time through the app settings. <strong>Note:</strong> Withdrawing consent will restrict access to escrow, wallet, trading, and other critical features until you re-consent.</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="info-content">
              <h3>Contact Information</h3>
              <p>You are responsible for keeping your email and phone number up to date. Update your contact information in your profile settings.</p>
            </div>
          </div>
        </div>

        {/* <!-- Legal Notice --> */}
        <div className="legal-notice">
          <div className="legal-header">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <h3>Legal Notice</h3>
          </div>
          <p>This consent is provided in accordance with the <strong>Electronic Signatures in Global and National Commerce Act (ESIGN Act)</strong> and applicable local regulations. By consenting, you acknowledge that:</p>
          <ul className="legal-list">
            <li>Electronic signatures are legally binding</li>
            <li>You have read and understood this agreement</li>
            <li>Your consent will be recorded with timestamp and device information</li>
            <li>You can access this agreement at any time in the app</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ElectronicConsent;
