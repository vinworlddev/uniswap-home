import React from 'react';
import './OrganizerTerms.css';

const OrganizerTerms: React.FC = () => {
  return (
    <div className="organizer-terms-container">
      <div className="organizer-terms-header">
        <h1>ORGANIZER TERMS</h1>
        <p className="effective-date">Effective Date: December 2025</p>
      </div>

      <div className="organizer-terms-content">
        <div className="organizer-terms-intro">
          <p>
            These Organizer Terms ("Terms") govern your listing, management, and sale of tickets for events ("Events") on Uniswapng. These terms supplement the Uniswapng Terms & Conditions and apply to all Event Organizers ("Organizers," "you," or "your").
          </p>
          <p className="intro-agreement">
            By creating an event, listing tickets, or receiving payouts, you agree to these Terms.
          </p>
        </div>

        <section className="organizer-section">
          <h2>1. Organizer Eligibility & Verification</h2>
          
          <div className="subsection">
            <h3>1.1 Verification Requirement</h3>
            <p>
              To create or manage events, you must complete all KYC/KYB verification steps requested by Uniswapng or its payment provider (including identity, business, and bank verification).
            </p>
          </div>

          <div className="subsection">
            <h3>1.2 Accuracy of Information</h3>
            <p>
              You represent and warrant that all information you provide—including legal name, business registration, tax information, venue details, and settlement account—is complete, accurate, and legally valid.
            </p>
          </div>

          <div className="subsection">
            <h3>1.3 Authority to Organize Events</h3>
            <p>
              You warrant that you have full authority to host, promote, and sell tickets for the Event, including rights to use intellectual property (e.g., artist images, brand assets).
            </p>
          </div>

          <div className="subsection warning-subsection">
            <h3>1.4 Ongoing Compliance</h3>
            <p>Uniswapng may require updated documents at any time. Failure to provide them may result in:</p>
            <ul>
              <li>event suspension</li>
              <li>payout withholding</li>
              <li>account termination</li>
            </ul>
          </div>
        </section>

        <section className="organizer-section">
          <h2>2. Event Creation & Content Requirements</h2>
          
          <div className="subsection">
            <h3>2.1 Accurate Event Information</h3>
            <p>Organizer must accurately describe the Event, including:</p>
            <ul>
              <li>date, time, and venue</li>
              <li>age restrictions</li>
              <li>performer lineup</li>
              <li>seating or standing arrangements</li>
              <li>ticket categories</li>
              <li>refund policy</li>
              <li>prohibited items or restrictions</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>2.2 Duty to Update Information</h3>
            <p>You must promptly update attendees and Uniswapng of:</p>
            <ul>
              <li>schedule changes</li>
              <li>venue changes</li>
              <li>performer changes</li>
              <li>safety or capacity issues</li>
            </ul>
          </div>

          <div className="subsection warning-subsection">
            <h3>2.3 Prohibited Content</h3>
            <p>You may not list events that:</p>
            <ul>
              <li>violate law</li>
              <li>are fraudulent, misleading, or unsafe</li>
              <li>use copyrighted material without permission</li>
              <li>impersonate brands or artists</li>
              <li>encourage harmful conduct</li>
            </ul>
          </div>
        </section>

        <section className="organizer-section important-section">
          <h2>3. Ticket Pricing, Fees & Free Events</h2>
          
          <div className="subsection">
            <h3>3.1 Organizer Sets Ticket Prices</h3>
            <p>Organizer determines the ticket price for each category.</p>
          </div>

          <div className="subsection">
            <h3>3.2 Uniswapng Fees</h3>
            <p>For paid tickets, Uniswapng charges:</p>
            <div className="fee-box">
              <p className="fee-amount">3.3% + ₦30 per ticket sold</p>
              <p className="fee-note">(Automatically deducted from payout.)</p>
            </div>
          </div>

          <div className="subsection highlight-subsection">
            <h3>3.3 Free Events</h3>
            <p className="highlight-text">Uniswapng charges ₦0 for free events.</p>
            <p>No fees apply to ticket creation, issuance, or attendee check-in for free events.</p>
          </div>

          <div className="subsection">
            <h3>3.4 Taxes</h3>
            <p>Where required, taxes may apply to ticket sales. Organizers are solely responsible for compliance with tax laws.</p>
          </div>
        </section>

        <section className="organizer-section">
          <h2>4. Ticket Delivery & Check-In</h2>
          
          <div className="subsection">
            <h3>4.1 Digital Ticketing</h3>
            <p>Uniswapng issues tickets as QR codes via the app (and email if available).</p>
            <p className="warning-text">
              Organizer may not request manual ticketing outside Uniswapng for any paid ticket.
            </p>
          </div>

          <div className="subsection">
            <h3>4.2 Check-In Tools</h3>
            <p>
              Organizer is responsible for scanning and validating QR codes using the Uniswapng event dashboard or approved methods.
            </p>
          </div>
        </section>

        <section className="organizer-section responsibility-section">
          <h2>5. Organizer Responsibilities</h2>
          <p className="section-intro">Organizer is fully responsible for:</p>
          <ul>
            <li>event planning, safety, security, and compliance</li>
            <li>venue operations</li>
            <li>crowd control and admission management</li>
            <li>accurate scanning of QR codes</li>
            <li>delivering the advertised experience</li>
            <li>ensuring adequate staffing and safety</li>
            <li>complying with all laws, permits, and venue rules</li>
          </ul>
          <p className="highlight-text">
            Uniswapng is not responsible for event performance, safety, or attendee experience.
          </p>
        </section>

        <section className="organizer-section">
          <h2>6. Refunds & Event Issues</h2>
          
          <div className="subsection">
            <h3>6.1 Mandatory Refund Situations</h3>
            <p>Organizer must authorize and fund refunds for:</p>
            <ul>
              <li>canceled events</li>
              <li>events postponed and not rescheduled within 60 days</li>
              <li>failure to deliver the main advertised experience</li>
              <li>inability of attendees to enter due to organizer error</li>
            </ul>
          </div>

          <div className="subsection warning-subsection">
            <h3>6.2 Refund Funding</h3>
            <p>Refunds are paid to attendees' Uniswapng Wallets.</p>
            <p>Uniswapng may:</p>
            <ul>
              <li>deduct refund amounts from Organizer payouts,</li>
              <li>freeze future payouts until refund obligations are met,</li>
              <li>claw back previously paid-out funds if necessary.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>6.3 Refund Disputes</h3>
            <p>Uniswapng may decide refund disputes based on:</p>
            <ul>
              <li>attendee complaints</li>
              <li>event failure evidence</li>
              <li>platform safety</li>
              <li>compliance requirements</li>
            </ul>
            <p>Organizer agrees to be bound by Uniswapng's final determination.</p>
          </div>
        </section>

        <section className="organizer-section">
          <h2>7. Payouts</h2>
          
          <div className="subsection">
            <h3>7.1 Payout Timing</h3>
            <p>Payouts are released 3 business days after event completion, unless withheld under these Terms.</p>
          </div>

          <div className="subsection warning-subsection">
            <h3>7.2 Payout Withholding</h3>
            <p>Uniswapng may pause or withhold payouts if:</p>
            <ul>
              <li>refund obligations exist</li>
              <li>fraud or safety concerns arise</li>
              <li>chargebacks are likely</li>
              <li>excessive complaints are received</li>
              <li>Organizer account information is incomplete or unverifiable</li>
            </ul>
          </div>
        </section>

        <section className="organizer-section chargeback-section">
          <h2>8. Chargebacks</h2>
          
          <div className="subsection">
            <h3>8.1 Organizer Liability for Chargebacks</h3>
            <p>Organizer is responsible for all chargebacks arising from:</p>
            <ul>
              <li>attendee claims</li>
              <li>unauthorized transactions</li>
              <li>fraudulent events</li>
              <li>non-performance</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>8.2 Recovery of Chargeback Losses</h3>
            <p>Uniswapng may recover chargeback losses by:</p>
            <ul>
              <li>deducting from unpaid payouts</li>
              <li>offsetting future earnings</li>
              <li>invoicing the Organizer</li>
              <li>suspending events until debts are cleared</li>
            </ul>
          </div>
        </section>

        <section className="organizer-section">
          <h2>9. Fraud, Misuse & Platform Protection</h2>
          
          <div className="subsection">
            <h3>9.1 Fraudulent Activity</h3>
            <p>
              Uniswapng may suspend or remove events that appear fraudulent, unsafe, or misleading.
            </p>
          </div>

          <div className="subsection">
            <h3>9.2 Audit and Documentation Requests</h3>
            <p>Uniswapng may request:</p>
            <ul>
              <li>venue confirmation</li>
              <li>artist/performer agreements</li>
              <li>safety permits</li>
              <li>proof of authority</li>
            </ul>
            <p>Organizer must supply documents upon request.</p>
          </div>

          <div className="subsection warning-subsection">
            <h3>9.3 Right to Suspend Ticket Sales</h3>
            <p>Uniswapng may suspend or close ticket sales at any time for:</p>
            <ul>
              <li>fraud detection</li>
              <li>safety concerns</li>
              <li>non-compliance</li>
              <li>legal obligations</li>
            </ul>
          </div>
        </section>

        <section className="organizer-section">
          <h2>10. Limitation of Liability</h2>
          <p>Uniswapng is not liable for:</p>
          <ul>
            <li>event performance or quality</li>
            <li>venue safety or capacity</li>
            <li>admission issues</li>
            <li>financial loss suffered by Organizer</li>
            <li>indirect or consequential damages</li>
          </ul>
          <p className="highlight-text">
            Organizer indemnifies Uniswapng for attendee claims arising from the Event.
          </p>
        </section>

        <section className="organizer-section">
          <h2>11. Termination & Survival</h2>
          <p>Upon termination:</p>
          <ul>
            <li>outstanding refund obligations survive</li>
            <li>chargeback liabilities survive</li>
            <li>payout clawback rights survive</li>
            <li>Organizer debts remain enforceable</li>
          </ul>
        </section>

        <section className="organizer-section">
          <h2>12. Governing Law</h2>
          <p>
            These Terms are governed by the same governing law and jurisdiction provisions in the Uniswapng General Terms & Conditions.
          </p>
        </section>

        <footer className="organizer-terms-footer">
          <p>© 2025 Uniswap NG. All rights reserved.</p>
          <p>These Organizer Terms are effective as of December 2025.</p>
          <p>For organizer support, contact: <a href="mailto:support@uniswapng.com">support@uniswapng.com</a></p>
        </footer>
      </div>
    </div>
  );
};

export default OrganizerTerms;
