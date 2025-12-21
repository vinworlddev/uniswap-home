import React from 'react';
import './TicketingTerms.css';

const TicketingTerms: React.FC = () => {
  return (
    <div className="ticketing-terms-container">
      <div className="ticketing-terms-header">
        <h1>TICKETING TERMS</h1>
        <p className="effective-date">Effective Date: December 2025</p>
      </div>

      <div className="ticketing-terms-content">
        <div className="ticketing-terms-intro">
          <p>
            These Ticketing Terms ("Terms") govern your purchase and use of tickets on Uniswapng and supplement the Uniswapng Terms & Conditions. By purchasing or using a ticket, you agree to these Terms.
          </p>
        </div>

        <section className="ticketing-section">
          <h2>1. Overview</h2>
          <p>
            Uniswapng provides digital ticketing tools that allow event organizers ("Organizers") to list and sell tickets for their events.
          </p>
          <p className="highlight-text">
            Uniswapng does not host, manage, or produce events and is not responsible for event performance, security, venue management, or safety.
          </p>
        </section>

        <section className="ticketing-section">
          <h2>2. Purchasing Tickets</h2>
          
          <div className="subsection">
            <h3>2.1 Wallet-Funded Purchases Only</h3>
            <p>All ticket purchases must be made using your Uniswapng Wallet balance.</p>
            <p>Wallet funding may incur:</p>
            <ul>
              <li>third-party payment provider fees,</li>
              <li>Uniswapng wallet-funding fees where applicable,</li>
              <li>statutory taxes or charges imposed by law.</li>
            </ul>
            <p>Any applicable fees will be displayed at the point of deposit.</p>
          </div>

          <div className="subsection important-subsection">
            <h3>2.2 No Ticketing Fees Charged to Attendees</h3>
            <p>Uniswapng does not charge attendees booking fees or ticketing surcharges.</p>
            <p>Attendees pay only:</p>
            <ul>
              <li>the ticket price set by the Organizer, and</li>
              <li>any applicable taxes disclosed at checkout.</li>
            </ul>
          </div>
        </section>

        <section className="ticketing-section">
          <h2>3. Ticket Pricing and Taxes</h2>
          <p>Ticket prices are determined solely by Organizers.</p>
          <p>
            Ticket prices may be subject to VAT, sales tax, withholding tax, event levies, or other local charges depending on regulations for the event location.
          </p>
          <p>Applicable taxes will be displayed clearly at checkout.</p>
        </section>

        <section className="ticketing-section">
          <h2>4. Ticket Delivery</h2>
          
          <div className="subsection">
            <h3>4.1 Digital Ticket Delivery</h3>
            <p>
              Tickets are primarily delivered as QR-code digital tickets inside the Uniswapng mobile app.
            </p>
            <p>
              Uniswapng may also send tickets by email or other supported electronic methods.
            </p>
            <p>
              The delivery method will be shown at purchase or when the ticket becomes available.
            </p>
          </div>
        </section>

        <section className="ticketing-section warning-section">
          <h2>5. Ticket Use, QR Codes, and Admission</h2>
          
          <div className="subsection">
            <h3>5.1 QR Code Security & Responsibility</h3>
            <ul>
              <li>Each QR code is unique and valid for a single admission scan.</li>
              <li>If a QR code is duplicated, forwarded, screenshotted, or compromised, only the first successful scan will be honored.</li>
              <li>You are solely responsible for protecting your QR code.</li>
              <li>Uniswapng is not liable for fraud, unauthorized duplication, or misuse of QR-code tickets.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>5.2 Identity & Compliance Requirements</h3>
            <p>Organizers or venues may require:</p>
            <ul>
              <li>identification matching the ticket name,</li>
              <li>proof of age,</li>
              <li>compliance with venue rules.</li>
            </ul>
            <p className="warning-text">
              Failure to meet entry requirements does not entitle you to a refund.
            </p>
          </div>

          <div className="subsection">
            <h3>5.3 Event & Venue Rules</h3>
            <p>Admission is controlled solely by the Organizer and the venue.</p>
            <p>Uniswapng has no responsibility for:</p>
            <ul>
              <li>entry decisions,</li>
              <li>security checks,</li>
              <li>prohibited items,</li>
              <li>seating changes or reassignments.</li>
            </ul>
          </div>
        </section>

        <section className="ticketing-section">
          <h2>6. Organizer Responsibilities</h2>
          <p>Organizers are solely responsible for:</p>
          <ul>
            <li>event planning, safety, and lawful conduct,</li>
            <li>accurate event descriptions,</li>
            <li>admission and QR-code validation,</li>
            <li>delivering the advertised experience,</li>
            <li>compliance with local laws, venue requirements, and safety regulations.</li>
          </ul>
          <p className="highlight-text">
            Uniswapng is not liable for any aspect of event performance, safety, or venue operations.
          </p>
        </section>

        <section className="ticketing-section">
          <h2>7. Refunds</h2>
          
          <div className="subsection">
            <h3>7.1 Automatic Refunds</h3>
            <p>A full refund will be issued automatically if:</p>
            <ul>
              <li>the event is canceled,</li>
              <li>or postponed and not rescheduled within 60 days.</li>
            </ul>
            <p>Refunds are credited exclusively to your Uniswapng Wallet.</p>
          </div>

          <div className="subsection">
            <h3>7.2 Additional Refund Circumstances</h3>
            <p>Uniswapng or the Organizer may approve refunds if:</p>
            <ul>
              <li>the main advertised experience is not delivered,</li>
              <li>the event materially differs from its description,</li>
              <li>attendees cannot access the venue due to Organizer operational failure.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>7.3 Non-Refundable Situations</h3>
            <p>Refunds will not be issued for:</p>
            <ul>
              <li>personal change of plans,</li>
              <li>late arrival,</li>
              <li>refusal of admission due to attendee fault or missing requirements,</li>
              <li>weather conditions,</li>
              <li>travel or accommodation expenses.</li>
            </ul>
          </div>
        </section>

        <section className="ticketing-section">
          <h2>8. Errors, Corrections, and System Issues</h2>
          <p>Uniswapng may cancel or correct any order affected by:</p>
          <ul>
            <li>pricing errors,</li>
            <li>technical errors,</li>
            <li>system malfunctions.</li>
          </ul>
          <p>Where possible, Uniswapng will:</p>
          <ul>
            <li>cancel and refund the order, or</li>
            <li>offer you the option to proceed at the corrected price.</li>
          </ul>
          <p>Uniswapng is not liable for losses caused by such errors.</p>
        </section>

        <section className="ticketing-section">
          <h2>9. Assumption of Risk</h2>
          <p>By attending an event, you acknowledge and accept risks including:</p>
          <ul>
            <li>injury, illness, and communicable diseases,</li>
            <li>loud environments,</li>
            <li>crowd-related incidents,</li>
            <li>environmental or weather hazards.</li>
          </ul>
          <p className="warning-text">You attend at your own risk.</p>
        </section>

        <section className="ticketing-section">
          <h2>10. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Uniswapng is not liable for:</p>
          <ul>
            <li>event operations, performance, or quality,</li>
            <li>venue conditions or security screening,</li>
            <li>actions of other attendees, staff, or organizers,</li>
            <li>property loss or theft,</li>
            <li>indirect, incidental, or consequential damages,</li>
            <li>travel or accommodation expenses.</li>
          </ul>
          <p className="highlight-text">
            Your exclusive remedy for an eligible issue is a refund to your Wallet.
          </p>
        </section>

        <section className="ticketing-section">
          <h2>11. Amendments</h2>
          <p>Uniswapng may update these Terms at any time.</p>
          <p>Material changes will be communicated through the Platform.</p>
          <p>Continued use constitutes acceptance of the updated Terms.</p>
        </section>

        <section className="ticketing-section chargeback-section">
          <h2>12. Chargebacks and Unauthorized Payment Disputes</h2>
          
          <div className="subsection">
            <h3>12.1 Chargebacks Apply Only to Wallet Funding</h3>
            <p>
              Chargebacks may be initiated only for the external payment used to fund your Wallet—not for internal ticket purchases.
            </p>
          </div>

          <div className="subsection">
            <h3>12.2 Improper Chargebacks Are Prohibited</h3>
            <p>
              You must not dispute or reverse any Wallet funding transaction if the associated funds have already been used in the Platform.
            </p>
            <p className="warning-text">
              Filing a chargeback for funds already spent constitutes a breach of these Terms.
            </p>
          </div>

          <div className="subsection">
            <h3>12.3 Consequences of Filing a Chargeback</h3>
            <p>If you file an improper chargeback, Uniswapng may:</p>
            <ul>
              <li>cancel any related ticket(s) and void QR codes,</li>
              <li>suspend or close your account,</li>
              <li>reverse access to upcoming events,</li>
              <li>deduct the disputed amount from your Wallet or future deposits,</li>
              <li>pursue reimbursement or collections.</li>
            </ul>
            <p className="warning-text">
              These actions may occur even if your bank decides in your favor.
            </p>
          </div>

          <div className="subsection">
            <h3>12.4 Genuine Unauthorized Transactions</h3>
            <p>Report unauthorized Wallet funding immediately to:</p>
            <p className="contact-email">
              <a href="mailto:support@uniswapng.com">support@uniswapng.com</a>
            </p>
            <p>You must cooperate with all investigations.</p>
          </div>

          <div className="subsection">
            <h3>12.5 Recovery of Losses</h3>
            <p>
              Uniswapng may recover losses from chargebacks via lawful means and may report abusive chargeback behavior to financial partners or authorities.
            </p>
          </div>
        </section>

        <section className="ticketing-section">
          <h2>13. Non-Transferability & Anti-Scalping</h2>
          <ul>
            <li>Tickets may not be transferred, resold, or used for commercial purposes unless Uniswapng introduces such functionality.</li>
            <li>Creating multiple accounts or using bots to acquire tickets is prohibited.</li>
            <li>Tickets obtained through fraud, resale, or unauthorized transfer may be canceled without refund.</li>
          </ul>
        </section>

        <section className="ticketing-section">
          <h2>14. Force Majeure</h2>
          <p>
            Uniswapng and Organizers are not liable for failure to perform due to events beyond reasonable control, including natural disasters, strikes, government restrictions, civil unrest, or emergencies.
          </p>
          <p>Refunds in such cases follow Organizer policy or applicable law.</p>
        </section>

        <section className="ticketing-section">
          <h2>15. Governing Law</h2>
          <p>
            These Terms are governed by the same governing law and dispute-resolution terms specified in the Uniswapng General Terms & Conditions.
          </p>
          <p>
            Venue, jurisdiction, and governing law for disputes are determined by those General Terms.
          </p>
        </section>

        <footer className="ticketing-terms-footer">
          <p>© 2025 Uniswap NG. All rights reserved.</p>
          <p>These Ticketing Terms are effective as of December 2025.</p>
          <p>For support or inquiries, contact: <a href="mailto:support@uniswapng.com">support@uniswapng.com</a></p>
        </footer>
      </div>
    </div>
  );
};

export default TicketingTerms;
