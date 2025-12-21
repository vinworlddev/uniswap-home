import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1>UNISWAPNG — TERMS AND CONDITIONS</h1>
        <p className="last-updated">Last Updated: DECEMBER 2025</p>
      </div>

      <div className="terms-content">
        <section className="terms-intro">
          <p>
            These Terms and Conditions ("Terms") govern your access to and use of the Uniswapng online 
            platform, including its mobile application, marketplace, listing tools, auction features, ticketing 
            functionalities, payment and wallet interfaces, and optional escrow services (collectively, the 
            "Platform"). By creating an account or using the Platform, you acknowledge that you have read, 
            understood, and agree to be legally bound by these Terms.
          </p>
          <p className="important-notice">
            If you do not agree to these Terms, you must not use the Platform.
          </p>
        </section>

        <section className="terms-section">
          <h2>1. DEFINITIONS</h2>
          <div className="definitions-list">
            <p><strong>"Buyer"</strong> means a User purchasing goods, services, or event tickets from another User on the Platform.</p>
            
            <p><strong>"Seller"</strong> means a User listing goods or services for sale on the Platform.</p>
            
            <p><strong>"Organizer"</strong> means a User offering event tickets through the Platform.</p>
            
            <p><strong>"Payment Partner"</strong> means the authorised third-party financial institution or payment processor that holds User wallet balances and conducts all settlements and withdrawals.</p>
            
            <p><strong>"Verification Provider"</strong> means the third-party service used for identity and compliance checks.</p>
            
            <p><strong>"Escrow Services"</strong> means the optional facility through which funds are temporarily held by the Payment Partner until specified conditions are met.</p>
            
            <p><strong>"Ticketing Terms"</strong> refers to the separate terms governing event ticketing, incorporated herein by reference.</p>
            
            <p><strong>"Escrow Policy"</strong> refers to the separate terms governing escrow operations, incorporated herein by reference.</p>
            
            <p><strong>"User"</strong> refers to any person accessing or using the Platform.</p>
          </div>
        </section>

        <section className="terms-section">
          <h2>2. ELIGIBILITY AND ACCOUNT REGISTRATION</h2>
          
          <h3>Account Creation</h3>
          <p>
            Users must be at least eighteen (18) years of age and have legal capacity to enter binding 
            contracts. Users must provide accurate, complete, and current information during registration 
            and keep such information updated.
          </p>

          <h3>Identity Verification</h3>
          <p>
            The Platform may require Users to undergo identity verification conducted by a Verification 
            Provider. Users authorize the Platform and its Verification Provider to collect and process 
            identification data for fraud prevention and compliance purposes.
          </p>

          <h3>Account Security</h3>
          <p>
            Users are solely responsible for maintaining the confidentiality of their login credentials. 
            Uniswapng shall not be liable for unauthorized access resulting from the User's failure to secure 
            their account.
          </p>

          <h3>Suspension or Termination</h3>
          <p>
            Uniswapng may suspend or terminate any account for suspected fraud, regulatory 
            non-compliance, security concerns, or violation of these Terms.
          </p>
        </section>

        <section className="terms-section">
          <h2>3. USE OF THE PLATFORM</h2>
          
          <h3>Permitted Use</h3>
          <p>
            Users may access and use the Platform solely for lawful purposes, including posting listings, 
            browsing marketplace content, conducting transactions, communicating with other Users, and 
            purchasing event tickets.
          </p>

          <h3>Prohibited Conduct</h3>
          <p>Users must not:</p>
          <ul>
            <li>engage in fraudulent, deceptive, or unlawful acts;</li>
            <li>post illegal, harmful, or prohibited items;</li>
            <li>interfere with Platform operations or security;</li>
            <li>misrepresent identity or impersonate others;</li>
            <li>manipulate bidding processes or pricing;</li>
            <li>circumvent or attempt to bypass the Platform's wallet or escrow processes.</li>
          </ul>
          <p>
            Uniswapng may remove content, restrict access, or take corrective action where prohibited 
            conduct is suspected.
          </p>

          <h3>User Representations and Warranties</h3>
          <p>
            When using the Platform, including creating any event or item listing, the User represents and 
            warrants that:
          </p>
          <ul>
            <li><strong>Ownership/Authority:</strong> They lawfully own, or have full authority to offer, any item or event they list.</li>
            <li><strong>Legitimacy:</strong> The listed item or event is not fraudulent, unauthorized, restricted, or subject to any third-party claim.</li>
            <li><strong>Accuracy:</strong> All information, descriptions, images, and content included in the listing are accurate and not misleading.</li>
            <li><strong>IP Rights:</strong> They have the right to use any images, branding, or content uploaded.</li>
            <li><strong>Legal Compliance:</strong> The listing complies with all applicable laws and industry requirements.</li>
            <li><strong>Responsibility:</strong> They are fully responsible for their listings and any consequences arising from them.</li>
          </ul>
          <p>
            Uniswapng does not investigate or verify the ownership, authenticity, legality, or accuracy of any listing.
          </p>
        </section>

        <section className="terms-section">
          <h2>4. PAYMENTS AND WALLETS</h2>
          
          <h3>Wallet Structure</h3>
          <p>
            User wallet balances displayed on the Platform represent funds held on the User's behalf by the 
            Payment Partner. Uniswapng does not hold or safeguard User funds, and at no time assumes 
            custody or control over such funds. All deposits, settlements, and withdrawals are executed 
            solely by the Payment Partner in accordance with its regulatory obligations and contractual 
            terms.
          </p>

          <h3>Funding the Wallet</h3>
          <p>
            Users may add funds to their wallet using payment methods supported by the Payment Partner. 
            Uniswapng does not guarantee the availability, processing time, or performance of any payment 
            method.
          </p>

          <h3>Withdrawals</h3>
          <p>
            Withdrawals from the wallet are subject to verification requirements, settlement timelines, and 
            any limitations imposed by the Payment Partner.
          </p>

          <h3>Transaction Failures</h3>
          <p>
            Uniswapng is not responsible for payment delays, reversals, errors, or failures caused by banks, 
            the Payment Partner, or telecommunications providers.
          </p>

          <h3>Paid Services; General</h3>
          <p>
            Use of the Platform is generally free. Certain optional features may be offered for a fee ("Paid 
            Services"). Any applicable fee will be disclosed prior to use. Paid Services do not alter 
            Uniswapng's intermediary role.
          </p>
        </section>

        <section className="terms-section">
          <h2>5. ESCROW SERVICES</h2>
          <p>
            Uniswapng may offer optional Escrow Services to facilitate secure exchanges between Users. 
            Escrow Services involve the temporary holding of funds by the Payment Partner until certain 
            release conditions are met.
          </p>
          <p>
            Use of Escrow Services is voluntary and subject to the Escrow Policy, which is incorporated by 
            reference. The Escrow Policy governs operational details including deposit procedures, 
            evidence requirements, refund triggers, and release timelines.
          </p>
          <p>
            Uniswapng acts solely as an intermediary in relation to escrow and does not warrant the 
            performance, legality, quality, or fulfilment of any transaction between Users. Uniswapng's 
            involvement is limited to administrative actions required to operate the escrow facility.
          </p>
        </section>

        <section className="terms-section">
          <h2>6. EVENTS AND TICKETING</h2>
          <p>
            The Platform allows Organizers to list and sell event tickets. Organizers bear full responsibility 
            for event quality, legality, safety, accuracy of descriptions, delivery of tickets, and compliance 
            with applicable laws.
          </p>
          <p>
            Ticket purchases may be completed using the User's wallet or any other payment method made 
            available from time to time.
          </p>
          <p>
            Use of ticketing functionalities is subject to the Ticketing Terms, incorporated herein by 
            reference. The Ticketing Terms govern refunds, cancellations, delivery procedures, and 
            Organizer obligations.
          </p>
          <p>
            Uniswapng is not a party to ticket transactions and shall not be liable for event changes, 
            cancellations, non-performance, or the conduct of Organizers or attendees.
          </p>
        </section>

        <section className="terms-section">
          <h2>7. MARKETPLACE RULES</h2>
          
          <h3>Listings</h3>
          <p>
            Sellers are solely responsible for the legality, accuracy, and completeness of their listings. 
            Uniswapng does not endorse, verify, or guarantee any listing.
          </p>

          <h3>Auctions</h3>
          <p>
            Bids placed on auction listings constitute binding offers. The highest valid bid at auction close 
            forms the winning offer, subject to any reserve price.
          </p>

          <h3>Prohibited Items</h3>
          <p>
            Users must not list illegal, restricted, hazardous, counterfeit, stolen, or otherwise prohibited 
            items under Nigerian law or Platform policy.
          </p>
        </section>

        <section className="terms-section">
          <h2>8. ASSUMPTION OF RISK</h2>
          <p>
            Uniswapng does not encourage, facilitate, supervise, or arrange in-person meetings between 
            Users. Users who elect to meet offline do so voluntarily and at their sole risk.
          </p>
          <p>
            Uniswapng does not conduct background checks or screen Users. Users must take appropriate 
            precautions, including meeting in public places and exercising due care.
          </p>
          <p>
            Uniswapng, its affiliates, directors, officers, employees, agents, and service providers shall bear 
            no liability for any loss, harm, injury, fraud, or damage arising out of interactions between Users, 
            whether online or offline.
          </p>
        </section>

        <section className="terms-section">
          <h2>9. DISPUTE ASSISTANCE</h2>
          <p>
            Uniswapng is not a party to any transaction between Users and does not provide mediation, 
            arbitration, or legal dispute resolution services. However, where Escrow Services are used, 
            Uniswapng may provide limited administrative assistance to determine whether escrowed funds 
            should be released or refunded.
          </p>
          <p>
            Any determination made by Uniswapng in connection with escrow administration is final solely 
            for the purposes of the Platform. Users retain all legal rights to pursue claims independently 
            outside the Platform.
          </p>
        </section>

        <section className="terms-section">
          <h2>10. FEES</h2>
          <p>
            Uniswapng may charge fees for certain optional features or services. All applicable fees will be 
            disclosed at the point of use. Fees are subject to change.
          </p>
        </section>

        <section className="terms-section">
          <h2>11. INTELLECTUAL PROPERTY</h2>
          <p>
            All Platform content, software, logos, trademarks, and proprietary materials are the property of 
            Uniswapng or its licensors. Users receive a limited, revocable licence to use the Platform for its 
            intended purpose.
          </p>
          <p>
            Users may not copy, modify, distribute, reverse engineer, commercialize, or exploit any part of 
            the Platform.
          </p>
        </section>

        <section className="terms-section">
          <h2>12. LIMITATION OF LIABILITY</h2>
          <p>
            To the fullest extent permitted by law, Uniswapng, its affiliates, directors, officers, employees, 
            agents, licensors, and service providers ("Protected Parties") shall not be liable for any:
          </p>
          <ul>
            <li>indirect, incidental, special, consequential, punitive, or exemplary damages;</li>
            <li>loss of profits, revenue, goodwill, or data;</li>
            <li>delays or failures caused by banks, Payment Partners, Verification Providers, telecommunications networks, or other third parties;</li>
            <li>actions, omissions, misrepresentations, or failures of other Users;</li>
            <li>offline meetups, events, or in-person interactions;</li>
            <li>event cancellations or Organizer breaches;</li>
            <li>quality, safety, legality, or delivery of any item or service.</li>
          </ul>
          <p>
            If liability cannot be excluded, the total aggregate liability of the Protected Parties shall not 
            exceed the lesser of:
          </p>
          <ol type="a">
            <li>the amount paid by the User for the transaction giving rise to the claim, or</li>
            <li>NGN 50,000.</li>
          </ol>
        </section>

        <section className="terms-section">
          <h2>13. INDEMNIFICATION</h2>
          <p>
            Users agree to indemnify and hold harmless the Protected Parties from all claims, losses, 
            liabilities, damages, or expenses arising from:
          </p>
          <ul>
            <li>User breach of these Terms;</li>
            <li>User misuse of the Platform;</li>
            <li>User interactions or disputes with other Users;</li>
            <li>User listings, events, or transactions;</li>
            <li>violations of applicable law.</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>14. TERMINATION</h2>
          <p>
            Uniswapng may suspend or terminate access to the Platform at its discretion, including for 
            fraud, misuse, violation of these Terms, or regulatory concerns.
          </p>
          <p>
            Upon termination, any remaining wallet balance shall be settled in accordance with Payment 
            Partner rules, subject to identity verification and applicable restrictions.
          </p>
        </section>

        <section className="terms-section">
          <h2>15. GOVERNING LAW AND JURISDICTION</h2>
          <p>
            These Terms shall be governed by the laws of the Federal Republic of Nigeria.
          </p>
          <p>
            Any disputes not subject to the Platform's limited Dispute Assistance process shall be submitted 
            to the exclusive jurisdiction of the courts of Lagos State, Nigeria.
          </p>
        </section>

        <section className="terms-section">
          <h2>16. AMENDMENTS</h2>
          <p>
            Uniswapng may amend these Terms from time to time. The updated Terms will be posted on the 
            Platform and will take effect upon publication. Continued use of the Platform constitutes 
            acceptance of the amended Terms.
          </p>
        </section>

        <section className="terms-section">
          <h2>17. CONTACT INFORMATION</h2>
          <p>
            For inquiries, notices, or support requests, Users may contact:
          </p>
          <p className="contact-email">
            <a href="mailto:support@uniswapng.com">support@uniswapng.com</a>
          </p>
        </section>

        <footer className="terms-footer">
          <p>© 2025 Uniswap NG. All rights reserved.</p>
          <p>These Terms and Conditions are legally binding.</p>
        </footer>
      </div>
    </div>
  );
};

export default TermsAndConditions;
