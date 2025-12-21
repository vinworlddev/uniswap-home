import React from 'react';
import './EscrowPolicyUserFriendly.css';

const EscrowPolicyUserFriendly: React.FC = () => {
  return (
    <div className="escrow-friendly-container">
      <div className="escrow-friendly-header">
        <h1>UNISWAPNG — ESCROW POLICY</h1>
        <p className="last-updated">Last Updated: December, 2025</p>
      </div>

      <div className="escrow-friendly-content">
        <div className="escrow-friendly-intro">
          <p>
            This Escrow Policy explains how Uniswapng's optional escrow feature ("Escrow Service") works. When you choose to use escrow, your payment is held securely until the transaction is completed. This Policy is part of the Uniswapng Terms and Conditions, and by using the Escrow Service, you agree to everything written here.
          </p>
        </div>

        <section className="escrow-friendly-section">
          <div className="section-number">1</div>
          <div className="section-content">
            <h2>What the Escrow Service Does</h2>
            <p>
              The Escrow Service helps Buyers and Sellers complete transactions safely.
            </p>
            <p>
              Funds are held securely by our authorised payment partner until:
            </p>
            <ul className="check-list">
              <li>the Buyer confirms they are satisfied, and</li>
              <li>the Seller enters the correct Swap Code.</li>
            </ul>
            <p className="highlight-text">
              Using escrow is optional. Both Buyer and Seller must agree before escrow starts.
            </p>
          </div>
        </section>

        <section className="escrow-friendly-section">
          <div className="section-number">2</div>
          <div className="section-content">
            <h2>When Escrow Can Be Used</h2>
            <p>You can use the Escrow Service only when:</p>
            <ul className="check-list">
              <li>The Buyer has enough wallet balance to cover the full amount.</li>
              <li>The Buyer clicks "Use Escrow" and sends an escrow request.</li>
              <li>The Seller accepts the request.</li>
              <li>The transaction is not for event tickets (tickets do not use escrow).</li>
            </ul>
          </div>
        </section>

        <section className="escrow-friendly-section">
          <div className="section-number">3</div>
          <div className="section-content">
            <h2>Starting an Escrow Transaction</h2>
            
            <div className="subsection-card">
              <h3>3.1 Buyer Sends a Request</h3>
              <p>The Buyer sends an escrow request. No money is locked yet.</p>
            </div>

            <div className="subsection-card">
              <h3>3.2 Seller Must Accept</h3>
              <p>Escrow begins only after the Seller accepts the request.</p>
            </div>

            <div className="subsection-card important-card">
              <h3>3.3 1-Hour Acceptance Window</h3>
              <p>
                If the Seller does not accept the escrow request within 1 hour, the request expires automatically.
              </p>
              <ul className="simple-list">
                <li>No funds are locked.</li>
                <li>No transaction begins.</li>
                <li>The Buyer may send another request later.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="escrow-friendly-section highlight-section">
          <div className="section-number">4</div>
          <div className="section-content">
            <h2>What Happens When Escrow Begins</h2>
            <p>Once the Seller accepts:</p>
            <ol className="numbered-list">
              <li>The Buyer's funds are locked ("processing to go out").</li>
              <li>The Seller sees the incoming amount as pending ("processing to come in").</li>
              <li>A 24-hour timer ("Escrow Window") starts.</li>
            </ol>
            <p className="highlight-text">
              The Buyer and Seller must complete the transaction within this 24-hour window.
            </p>
          </div>
        </section>

        <section className="escrow-friendly-section highlight-section">
          <div className="section-number">5</div>
          <div className="section-content">
            <h2>Completing the Transaction (Swap Code System)</h2>
            
            <div className="subsection-card">
              <h3>5.1 What is the Swap Code?</h3>
              <p>
                Each escrow transaction generates a one-time Swap Code.
              </p>
              <p>
                The Buyer gives this code to the Seller only when they are satisfied with the item/service.
              </p>
            </div>

            <div className="subsection-card">
              <h3>5.2 Buyer Responsibility</h3>
              <p>Before giving the Swap Code, the Buyer must:</p>
              <ul className="check-list">
                <li>check the item,</li>
                <li>inspect it properly,</li>
                <li>confirm they are satisfied.</li>
              </ul>
              <p className="highlight-text">
                Giving the Swap Code means the Buyer accepts the transaction as complete.
              </p>
            </div>

            <div className="subsection-card">
              <h3>5.3 Seller Responsibility</h3>
              <p>
                The Seller must not hand over the item or provide the service until they receive the Swap Code.
              </p>
              <p className="highlight-text">
                This protects the Seller from fraud and misunderstandings.
              </p>
            </div>

            <div className="subsection-card success-card">
              <h3>5.4 Completing Escrow</h3>
              <p>When the Seller enters the correct Swap Code:</p>
              <ul className="check-list">
                <li>the transaction is completed instantly</li>
                <li>funds are released to the Seller</li>
                <li>escrow ends</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="escrow-friendly-section">
          <div className="section-number">6</div>
          <div className="section-content">
            <h2>Refunds, Cancellations, and Expiry</h2>
            
            <div className="subsection-card">
              <h3>6.1 If the Swap Code Is Not Entered</h3>
              <p>If the Seller does not enter the Swap Code within 24 hours:</p>
              <ul className="simple-list">
                <li>escrow ends automatically</li>
                <li>the Buyer receives a full refund</li>
                <li>the Seller receives nothing</li>
              </ul>
            </div>

            <div className="subsection-card">
              <h3>6.2 If the Buyer Refuses to Release the Swap Code</h3>
              <p>
                If the Buyer is not satisfied, they may refuse to give the Swap Code.
              </p>
              <p>
                When the 24-hour timer expires, the Buyer is refunded automatically.
              </p>
            </div>

            <div className="subsection-card">
              <h3>6.3 If Either Party Cancels Early</h3>
              <p>
                Before the Swap Code is entered, either party may cancel the transaction.
              </p>
              <p className="highlight-text">
                All cancellations result in an automatic refund to the Buyer.
              </p>
            </div>

            <div className="subsection-card warning-card">
              <h3>6.4 Swap Code After Expiry</h3>
              <p>
                If a Seller enters the Swap Code after the 24-hour window has already expired, it will not complete the payment.
              </p>
            </div>
          </div>
        </section>

        <section className="escrow-friendly-section">
          <div className="section-number">7</div>
          <div className="section-content">
            <h2>Appeals (For Completed Transactions Only)</h2>
            <p>Appeals apply only when a transaction has already been completed (i.e., Swap Code was used).</p>
            
            <div className="subsection-card">
              <h3>7.1 Appeal Window</h3>
              <p>Appeals must be submitted within 24 hours after completion.</p>
            </div>

            <div className="subsection-card">
              <h3>7.2 How to Submit</h3>
              <p>
                Email <a href="mailto:support@uniswapng.com">support@uniswapng.com</a> with clear evidence, such as:
              </p>
              <ul className="check-list">
                <li>Photos or videos</li>
                <li>Screenshots of chats</li>
                <li>Proof of defect or misrepresentation</li>
                <li>Any other relevant information</li>
              </ul>
              <p className="warning-text">Appeals without evidence may be declined.</p>
            </div>

            <div className="subsection-card info-card">
              <h3>7.3 Important</h3>
              <p>Appeals do not stop or delay:</p>
              <ul className="simple-list">
                <li>expiry of the 1-hour request window</li>
                <li>expiry of the 24-hour escrow timer</li>
                <li>automatic refunds</li>
              </ul>
              <p className="highlight-text">
                Appeals are a support review only, not formal dispute resolution.
              </p>
            </div>
          </div>
        </section>

        <section className="escrow-friendly-section prohibited-section">
          <div className="section-number">8</div>
          <div className="section-content">
            <h2>What Escrow Cannot Be Used For</h2>
            <p>You cannot use the Escrow Service for:</p>
            <ul className="cross-list">
              <li>event tickets</li>
              <li>transactions outside the Uniswapng app</li>
              <li>illegal or prohibited items</li>
              <li>partial or milestone payments</li>
              <li>transactions with insufficient wallet balance</li>
            </ul>
          </div>
        </section>

        <section className="escrow-friendly-section">
          <div className="section-number">9</div>
          <div className="section-content">
            <h2>Fees</h2>
            <ul className="simple-list">
              <li>The Escrow Service is free.</li>
              <li>Wallet funding or withdrawals may have fees charged by the payment partner.</li>
              <li>If we ever introduce escrow fees, we will notify you in advance.</li>
            </ul>
          </div>
        </section>

        <section className="escrow-friendly-section info-section">
          <div className="section-number">10</div>
          <div className="section-content">
            <h2>Our Role</h2>
            <p>Uniswapng:</p>
            <ul className="simple-list">
              <li>does not hold your money</li>
              <li>does not guarantee the quality or accuracy of items</li>
              <li>does not get involved in transactions outside escrow</li>
              <li>does not investigate user claims as a court or arbitrator</li>
              <li>is not responsible for user behaviour or in-person meetings</li>
            </ul>
            <p className="highlight-text">
              Funds are held and processed only by our authorised payment partner.
            </p>
            <p className="highlight-text">
              Uniswapng simply provides the technology that powers the escrow process.
            </p>
          </div>
        </section>

        <section className="escrow-friendly-section">
          <div className="section-number">11</div>
          <div className="section-content">
            <h2>Fraud, Abuse, and Safety</h2>
            <p>
              Uniswapng may suspend or restrict access to the Escrow Service if we detect:
            </p>
            <ul className="cross-list">
              <li>fraud</li>
              <li>abuse</li>
              <li>misuse of Swap Codes</li>
              <li>attempts to bypass escrow rules</li>
              <li>violation of our Terms</li>
            </ul>
            <p className="warning-text">
              We may also report suspicious activity when required by law.
            </p>
          </div>
        </section>

        <section className="escrow-friendly-section">
          <div className="section-number">12</div>
          <div className="section-content">
            <h2>Changes to This Policy</h2>
            <p>We may update this Policy occasionally.</p>
            <p>If we make changes, we will update the date at the top of this page.</p>
            <p className="highlight-text">
              Continuing to use the Escrow Service means you accept the new Policy.
            </p>
          </div>
        </section>

        <section className="escrow-friendly-section final-section">
          <div className="section-number">13</div>
          <div className="section-content">
            <h2>Governing Law</h2>
            <p>This Policy is governed by the laws of the Federal Republic of Nigeria.</p>
            <p>Any disputes relating to this Policy will be handled by the courts in Lagos State, Nigeria.</p>
          </div>
        </section>

        <footer className="escrow-friendly-footer">
          <p>© 2025 Uniswap NG. All rights reserved.</p>
          <p>This Escrow Policy is effective as of December 2025.</p>
        </footer>
      </div>
    </div>
  );
};

export default EscrowPolicyUserFriendly;
