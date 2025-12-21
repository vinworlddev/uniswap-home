import React from 'react';
import './RefundPolicy.css';

const RefundPolicy: React.FC = () => {
  return (
    <div className="refund-policy-container">
      <div className="refund-policy-header">
        <h1>REFUND POLICY</h1>
        <p className="effective-date">Effective Date: December 2025</p>
      </div>

      <div className="refund-policy-content">
        <div className="refund-policy-intro">
          <p>
            This General Refund Policy ("Policy") sets out how refunds are handled across all Uniswapng products and services, including the Uniswapng mobile application and website (collectively, the "Platform").
          </p>
          <p>
            This Policy forms part of the Uniswapng Terms & Conditions.
          </p>
          <p className="intro-agreement">
            By using the Platform, you agree to this Policy.
          </p>
        </div>

        <section className="refund-section">
          <h2>1. Wallet Funding Refunds</h2>
          
          <div className="subsection">
            <h3>1.1 Wallet deposits are generally non-refundable</h3>
            <p>
              Adding funds to your Uniswapng Wallet ("Wallet") creates stored value, not a product purchase.
            </p>
            <p>
              Therefore, Wallet deposits are not refundable to your bank account, except as required under Section 1.3.
            </p>
            <p>
              You may withdraw your Wallet balance at any time, subject to withdrawal fees and verification requirements.
            </p>
          </div>

          <div className="subsection">
            <h3>1.2 Wallet funding fees are non-refundable</h3>
            <p>Wallet deposits may include:</p>
            <ul>
              <li>Payment processor fees</li>
              <li>Bank transfer or card charges</li>
              <li>Uniswapng wallet-funding fees (if applicable)</li>
              <li>Applicable taxes</li>
            </ul>
            <p>These are never refundable, unless a failed or duplicate deposit occurs.</p>
          </div>

          <div className="subsection important-subsection">
            <h3>1.3 When Wallet funding is refundable</h3>
            <p>Refunds to the original payment method may be issued only when:</p>
            <ul>
              <li>A duplicate wallet deposit was charged</li>
              <li>A deposit failed but your bank still debited you</li>
              <li>A fraudulent or unauthorized wallet funding is proven</li>
              <li>Required by financial regulators, card schemes, or law</li>
              <li>A technical error by Uniswapng or a payment provider occurred</li>
            </ul>
            <p className="highlight-text">
              Refunds under this clause do not credit the Wallet. They go back to the original payment method.
            </p>
          </div>
        </section>

        <section className="refund-section">
          <h2>2. Wallet Withdrawals</h2>
          <p>You may withdraw funds from your Wallet to your bank at any time.</p>
          <p>Withdrawals may require:</p>
          <ul>
            <li>Identity or KYC verification</li>
            <li>Fraud or security checks</li>
            <li>Transaction history review</li>
          </ul>
          <p>
            Withdrawal fees and external bank or processor charges may apply.
          </p>
          <p>
            Uniswapng may delay or restrict withdrawals if suspicious activity is detected under Section 13.
          </p>
        </section>

        <section className="refund-section">
          <h2>3. Ticketing Refunds</h2>
          
          <div className="subsection">
            <h3>3.1 Automatic Refunds</h3>
            <p>A refund is issued automatically (to your Wallet) if:</p>
            <ul>
              <li>An event is canceled</li>
              <li>An event is postponed and not rescheduled within 60 days</li>
              <li>Uniswapng determines a material portion of the advertised experience was not delivered</li>
              <li>The Organizer requests or approves the refund</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>3.2 Non-Refundable Situations</h3>
            <p>Refunds are not issued for:</p>
            <ul>
              <li>Change of plans</li>
              <li>Missing the event</li>
              <li>Weather conditions</li>
              <li>Travel or accommodation expenses</li>
              <li>Attendee dissatisfaction with event quality</li>
              <li>Refund requests outside Organizer policy</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>3.3 Taxes and fees</h3>
            <ul>
              <li>Ticket prices may include VAT or other taxes where applicable</li>
              <li>Wallet funding fees and withdrawal fees remain non-refundable</li>
            </ul>
            <p>Refunds always return to your Wallet, except where law requires otherwise.</p>
          </div>
        </section>

        <section className="refund-section">
          <h2>4. Escrow Refunds</h2>
          
          <div className="subsection">
            <h3>4.1 Automatic Escrow Refunds</h3>
            <p>An escrow payment is automatically refunded to the Buyer's Wallet when:</p>
            <ul>
              <li>Seller declines the escrow request</li>
              <li>Seller fails to accept within the time limit</li>
              <li>Buyer declines to release the swap code</li>
              <li>The 24-hour escrow countdown expires</li>
              <li>Buyer cancels prior to swap code release</li>
              <li>System or payment failure occurs</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>4.2 Appeals (within 24 hours)</h3>
            <p>Appeals may be filed only if:</p>
            <ul>
              <li>Buyer claims fraud</li>
              <li>Seller claims deceptive conduct</li>
              <li>Swap code was released due to verified technical or identity compromise</li>
              <li>Evidence supports the claim</li>
            </ul>
            <p>Uniswapng may freeze funds during investigation.</p>
          </div>

          <div className="subsection">
            <h3>4.3 Non-Refundable Escrow Situations</h3>
            <p>No refund is issued where:</p>
            <ul>
              <li>Buyer regrets transaction after swap code release</li>
              <li>Buyer is dissatisfied after confirming transaction</li>
              <li>Seller errors unrelated to fraud occur</li>
              <li>Buyers misuse the escrow timer to avoid legitimate transactions</li>
            </ul>
          </div>
        </section>

        <section className="refund-section">
          <h2>5. Fees and Service Charges</h2>
          
          <div className="subsection">
            <h3>5.1 All fees are non-refundable</h3>
            <p>The following charges are never refundable, unless law requires otherwise:</p>
            <ul>
              <li>Payment provider fees</li>
              <li>Bank or card charges</li>
              <li>Wallet funding fees</li>
              <li>Withdrawal fees</li>
              <li>Organizer service fees</li>
              <li>Taxes applied to any of the above</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>5.2 Stored-Value Explanation</h3>
            <p>Wallet funds represent stored digital value, not a retail purchase.</p>
            <p>Accordingly, fees for processing, storing, or transferring value are non-refundable, except in cases of:</p>
            <ul>
              <li>Duplicate charges</li>
              <li>Failed transactions</li>
              <li>Proven unauthorized activity</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>5.3 Fee Transparency</h3>
            <p>All applicable fees will always be disclosed at:</p>
            <ul>
              <li>Wallet funding</li>
              <li>Ticket purchase</li>
              <li>Escrow creation</li>
              <li>Withdrawals</li>
              <li>Organizer payouts (where applicable)</li>
            </ul>
          </div>
        </section>

        <section className="refund-section">
          <h2>6. Organizer Responsibility for Refunds</h2>
          <p>Organizers are fully responsible for event-related obligations, including:</p>
          <ul>
            <li>Event delivery</li>
            <li>Ticket validity</li>
            <li>Refund approvals</li>
            <li>Safety, access, and admission</li>
          </ul>
          <p>Uniswapng may process refunds on behalf of Organizers only when:</p>
          <ul>
            <li>Required under these Terms</li>
            <li>The Organizer has sufficient Wallet/Payout balance</li>
            <li>Fraud or regulatory non-compliance is identified</li>
          </ul>
          <p>
            Uniswapng may deduct refund amounts from Organizer payouts or freeze Organizer balances pending resolution.
          </p>
        </section>

        <section className="refund-section warning-section">
          <h2>7. Chargebacks & Payment Disputes</h2>
          
          <div className="subsection">
            <h3>7.1 Chargebacks on Wallet Deposits</h3>
            <p>If a user initiates a chargeback for a Wallet deposit:</p>
            <ul>
              <li>The corresponding Wallet amount will be reversed</li>
              <li>Account may be suspended</li>
              <li>All pending transactions may be cancelled</li>
              <li>Uniswapng may recover associated losses, including penalties</li>
            </ul>
            <p>Uniswapng will supply banks with evidence such as:</p>
            <ul>
              <li>Device logs</li>
              <li>Transaction history</li>
              <li>Chat records</li>
              <li>KYC data</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>7.2 Improper Chargebacks</h3>
            <p>Users agree not to dispute transactions relating to:</p>
            <ul>
              <li>Event dissatisfaction</li>
              <li>Missed events</li>
              <li>Organizer delays</li>
              <li>Escrow transactions after swap code release</li>
              <li>Wallet fees or withdrawal fees</li>
            </ul>
            <p className="warning-text">
              Uniswapng may permanently ban accounts involved in improper or fraudulent chargebacks.
            </p>
          </div>

          <div className="subsection">
            <h3>7.3 Bank and Regulator Compliance</h3>
            <p>If a bank or regulator requires a refund:</p>
            <ul>
              <li>Uniswapng will comply</li>
              <li>Wallet or bank refund method will follow legal requirements</li>
              <li>Users may remain liable for sums withdrawn or spent before the decision</li>
            </ul>
          </div>
        </section>

        <section className="refund-section">
          <h2>8. Refund Method</h2>
          <p>Refunds are issued to the Uniswapng Wallet by default unless:</p>
          <ul>
            <li>The refund relates to a failed or duplicate wallet funding</li>
            <li>Law or a payment processor requires refund to the original payment method</li>
            <li>Uniswapng determines an exception is necessary</li>
          </ul>
          <p>
            Wallet refunds may later be withdrawn (subject to withdrawal fees and verification).
          </p>
        </section>

        <section className="refund-section">
          <h2>9. Force Majeure</h2>
          <p>Uniswapng is not liable for delays or failures caused by events outside its control, including:</p>
          <ul>
            <li>Network outages</li>
            <li>Payment processor failures</li>
            <li>Government actions</li>
            <li>Natural disasters</li>
            <li>War or unrest</li>
            <li>Other force majeure circumstances</li>
          </ul>
          <p>
            Force majeure applies only to Uniswapng operations, not Organizer obligations unless their policies explicitly state so.
          </p>
        </section>

        <section className="refund-section">
          <h2>10. Finality of Refund Decisions</h2>
          
          <div className="subsection">
            <h3>10.1 Refund Decision Review</h3>
            <p>Refund decisions are generally final.</p>
            <p>However, users may request reconsideration within 48 hours by emailing:</p>
            <p className="contact-email">
              <a href="mailto:support@uniswapng.com">support@uniswapng.com</a>
            </p>
          </div>

          <div className="subsection">
            <h3>10.2 Grounds for Reconsideration</h3>
            <p>Uniswapng may review a decision if:</p>
            <ul>
              <li>New evidence is provided</li>
              <li>Mistaken identity, fraud, or technical error is proven</li>
              <li>A regulator or court orders review</li>
              <li>Organizer consents</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>10.3 Final Refund Outcome</h3>
            <p>
              Once a refund is credited to the Wallet, it becomes part of the Wallet balance and cannot be reversed except as legally required.
            </p>
          </div>
        </section>

        <section className="refund-section">
          <h2>11. Refund Processing Time</h2>
          <p>Unless stated otherwise:</p>
          <ul>
            <li>Refunds are processed within 3–7 business days</li>
            <li>Refunds involving banks or payment partners may take up to 14 business days</li>
            <li>Refunds under fraud or compliance investigation may require more time</li>
          </ul>
          <p>Refunds will appear in your Wallet once processed.</p>
        </section>

        <section className="refund-section">
          <h2>12. Policy Updates</h2>
          <p>Uniswapng may update this Policy periodically.</p>
          <p>Continued use of the Platform constitutes acceptance of updated terms.</p>
        </section>

        <footer className="refund-policy-footer">
          <p>© 2025 Uniswap NG. All rights reserved.</p>
          <p>This Refund Policy is effective as of December 2025.</p>
        </footer>
      </div>
    </div>
  );
};

export default RefundPolicy;
