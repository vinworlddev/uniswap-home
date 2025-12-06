import './ServiceLevelAgreement.css';

const ServiceLevelAgreement = () => { 
  return (
    <div className="sla-container">
      <div className="sla-header">
        <h1>SERVICE LEVEL/DATA PROCESSING AGREEMENT</h1>
        <div className="parties">
          <h2>DOJAH TECHNOLOGIES LIMITED</h2>
          <p>AND</p>
          <h2>UNISWAP LIMITED</h2>
        </div>
      </div>

      <div className="sla-content">
        <section className="agreement-intro">
          <p>This Agreement is made this [3rd] day of December, 2025.</p>
          
          <h3>BETWEEN</h3>
          <p>
            <strong>DOJAH TECHNOLOGIES LIMITED</strong>, a company incorporated under the laws of the 
            Federal Republic of Nigeria, with RC Number: 1885308 whose registered address is 
            at No 3-8 Koleosho Street off Medical Road, Ikeja, Lagos State, Nigeria (hereinafter 
            referred to as '<strong>THE COMPANY</strong>' which expression shall where the context so admits, 
            include its successors-in-title, assigns and affiliates) of the first part.
          </p>

          <h3>AND</h3>
          <p>
            <strong>UNISWAPNG</strong>, a company incorporated under the laws of the Federal Republic of 
            Nigeria, with RC Number: ………… whose registered address is at No 7 Dosumu Aina 
            Estate, Gbagada, Lagos State, Nigeria (hereinafter referred to as '<strong>THE CLIENT</strong>' 
            which expression shall where the context so admits, include its successors-in-title, 
            assigns and affiliates) of the second part.
          </p>

          <p>
            For the purposes of this Agreement and any alteration/modification hereto, the 
            Company and the Client shall, wherever the context requires, be referred to 
            individually as a "Party" or collectively as "Parties".
          </p>

          <h3>WHEREAS:</h3>
          <ol type="a">
            <li>The Company owns and operates a cross-industry API platform called Dojah API, which allows developers and businesses to access multiple services in one integration, including KYC and Identity verification.</li>
            <li>The Client has engaged the Company for the purpose of providing API integration for KYC/identity verification services for the Client.</li>
            <li>Accordingly, both Parties have agreed to enter into and be bound by the terms and conditions set out in this Agreement.</li>
          </ol>

          <p>The Parties hereby agree as follows: -</p>
        </section>

        <section className="definitions">
          <h2>1. DEFINITIONS AND INTERPRETATIONS</h2>
          
          <h3>1.1 Definitions</h3>
          <p>In this Agreement, the following expressions shall have the meanings ascribed to them below, unless the context clearly indicates the contrary:</p>
          
          <table className="definitions-table">
            <tbody>
              <tr>
                <td><strong>"Agreement"</strong></td>
                <td>means this Service Level/Data Processing Agreement.</td>
              </tr>
              <tr>
                <td><strong>"API" "Dojah API"</strong></td>
                <td>means the Application Programming Interface, herein referred to as Dojah API, that allows the Company to share and process KYC and identity verification of the Customer's with the Client.</td>
              </tr>
              <tr>
                <td><strong>"API Keys"</strong></td>
                <td>means the unique alphanumeric strings provided by Dojah, serving as authentication credentials for the purpose of accessing and utilizing Dojah's services.</td>
              </tr>
              <tr>
                <td><strong>"Applicable Law"</strong></td>
                <td>means but is not limited to, all Nigerian laws applicable to both Parties in a particular context and applicable in relation to this Agreement.</td>
              </tr>
              <tr>
                <td><strong>"Business Day"</strong></td>
                <td>means a day other than Saturday, Sunday or Public Holiday declared by the Federal Government of Nigeria on which banks are open for business in Nigeria.</td>
              </tr>
              <tr>
                <td><strong>"Confidential Information"</strong></td>
                <td>means any confidential, proprietary, or sensitive information, whether tangible or intangible, oral or written, belonging to either Party. It also includes any information relating to and or including released or unreleased software or hardware products, the marketing or promotion of products, business plans, practices or policies, and information received from either Party, including trade secrets, source codes, object codes, patents, inventions, firmware, designs, formulas, specifications, financial information and projections, numbers, lists of suppliers and potential suppliers, lists of customers and potential customers, equipment lists, employee lists, management methods, know-how, working methods, manufacturing techniques, operating techniques, and all manuals, documents, reports, spreadsheets, files, market information, computer disks and tapes (whether machine or user readable) and other written or electronic information pertaining thereto.</td>
              </tr>
              <tr>
                <td><strong>"Customers"</strong></td>
                <td>means the Client's customer whose KYC and identification are being verified with Dojah API.</td>
              </tr>
              <tr>
                <td><strong>"Customer's Data"</strong></td>
                <td>means all data of the Customer which the Client provides to the Company for the facilitation of the Service.</td>
              </tr>
              <tr>
                <td><strong>"Data Protection Laws"</strong></td>
                <td>means all data protection laws and regulations applicable to a Party's processing of Personal Data under the Agreement, including the Nigeria Data Protection Act 2023 or any modification or amendment thereof.</td>
              </tr>
              <tr>
                <td><strong>"Data Subject"</strong></td>
                <td>means the Customers whose data would be subject to data processing.</td>
              </tr>
              <tr>
                <td><strong>"Effective Date"</strong></td>
                <td>means the date when the Client executes this Agreement.</td>
              </tr>
              <tr>
                <td><strong>"Intellectual Property"</strong></td>
                <td>means all present and future worldwide patents, trademarks, service marks, trade names, trade secrets, goodwill, registered designs, design rights, database rights, copyrights, inventions, rights in computer software, and other forms of intellectual or industrial property and all registrations, applications, renewals, extensions, combinations, divisions or reissues of the foregoing.</td>
              </tr>
              <tr>
                <td><strong>"KYC"</strong></td>
                <td>means Know Your Customer.</td>
              </tr>
              <tr>
                <td><strong>"Sensitive Data"</strong></td>
                <td>means the definition given to it under the Nigeria Data Protection Act 2023 (NDPA).</td>
              </tr>
              <tr>
                <td><strong>"Services"</strong></td>
                <td>means the provision of Dojah API to the Client for the processing of KYC/identity verification of its Customers as outlined in Clause 3 of this Agreement.</td>
              </tr>
            </tbody>
          </table>

          <h3>1.2 Interpretation</h3>
          <p>The headings used in this Agreement are for convenience only and do not affect the interpretation. The following rules apply unless the context requires otherwise:</p>
          <ol>
            <li value="1.2.1">The singular includes the plural and vice-versa.</li>
            <li value="1.2.2">If a word or phrase is defined, its other grammatical forms have a corresponding meaning.</li>
            <li value="1.2.3">Reference to a paragraph is a reference to a paragraph of this Agreement.</li>
            <li value="1.2.4">References to gender include any other gender.</li>
            <li value="1.2.5">References to a "person" are to any natural or legal person, including individuals, companies, corporations, and partnerships.</li>
            <li value="1.2.6">References to a law, rule or regulation are to such law, rule or regulation as amended, supplemented, consolidated or repealed from time to time.</li>
            <li value="1.2.7">References to any agreement or contract are to such agreement or contract as amended, supplemented, novated or replaced from time to time.</li>
            <li value="1.2.8">References to time are to local time in Nigeria.</li>
          </ol>
        </section>

        <section className="term">
          <h2>2. COMMENCEMENT AND DURATION</h2>
          <p><strong>2.1</strong> This Agreement shall commence and become effective on the Effective Date and shall subsist for an initial term of one (1) year ("Initial Term"), which term shall be automatically renewed for subsequent terms of one (1) year each, unless terminated in accordance with the provisions of Clause 20.</p>
          <p><strong>2.2</strong> Upon the expiration of the Initial Term, this Agreement may be renewed on same terms or varied terms to be agreed to in writing by Parties.</p>
        </section>

        <section className="service">
          <h2>3. THE SERVICE</h2>
          <p><strong>3.1</strong> The Company has agreed to provide the Dojah API to the Client for processing of KYC/identity verification of its Customers.</p>
          <p><strong>3.2</strong> The Company shall, in furtherance of the above, grant a revocable, non-exclusive, non-transferable right to the Client to use the Dojah API during the term of this Agreement.</p>
        </section>

        <section className="company-obligations">
          <h2>4. OBLIGATIONS OF THE COMPANY</h2>
          <p>The Company shall:</p>
          <p><strong>4.1</strong> Ensure the correct and prompt execution of each API request made in accordance with the requirements of this Agreement.</p>
          <p><strong>4.2</strong> Grant a non-exclusive and non-transferable right to the Client to use the Dojah API ONLY in relation to the Services agreed and for the duration of this Agreement.</p>
          <p><strong>4.3</strong> Provide appropriate notification to the Client for all scheduled maintenance or downtime and make reasonable efforts to ensure that the service is restored without delay. The Company does not warrant that the platforms of third-party service providers directly necessary for the Services shall be uninterrupted or error-free (either due to a downtime or scheduled maintenance). Accordingly, the availability of services applies strictly to the platform provided by the Company with exception to third party hardware, software or connectivity owned by such third-party service providers beyond the Company's control.</p>
          <p><strong>4.4</strong> Implement safeguards to prevent unauthorised access to, use of, or disclosure of data provided by the Client or any virus or code capable of damaging the Client's systems.</p>
          <p><strong>4.5</strong> Provide Support Services to the Client in accordance with the terms outlined in Schedule 2 of this Agreement.</p>
        </section>

        <section className="client-obligations">
          <h2>5. OBLIGATIONS OF THE CLIENT</h2>
          <p>The Client shall:</p>
          <p><strong>5.1</strong> Use Dojah API for legal purposes and ONLY in relation to the Services agreed and for the duration of this Agreement. The Company shall be entitled to withdraw the Client's access to the service due to breach of this provision and other provisions in this Agreement.</p>
          <p><strong>5.2</strong> Pre-fund its wallet created on the Dojah API. The Company shall charge on each API call made in accordance with the pricing structure agreed by the Parties.</p>
          <p><strong>5.3</strong> Give accurate information and full explanations of any matter as may be reasonably required for the effective execution of the Services.</p>
          <p><strong>5.4</strong> Obtain prior authorisation/consent from the Customers for the sharing of their Personal Data or information with the Company for the provision of the Services.</p>
          <p><strong>5.5</strong> Conduct thorough due diligence as well as request the necessary KYC documentation on all customers who utilize the Service, ensuring compliance with applicable laws and regulations.</p>
          <p><strong>5.6</strong> Maintain accurate records of all customer documentation and verification procedures in accordance with regulatory requirements. Such records shall be made available to the Company upon request for compliance purposes.</p>
          <p><strong>5.7</strong> Implement liveness checks on all customer interactions to ensure the authenticity of customer identity and prevent fraudulent activity. Liveness checks may include biometric verification, BVN verification, or other suitable methods as deemed necessary by Dojah.</p>
          <p><strong>5.8</strong> Not alter, decompile, or reverse engineer Dojah's API in any way.</p>
          <p><strong>5.9</strong> Not take any action that jeopardises the Company's proprietary rights or acquires any right in the Company's services.</p>
          <p><strong>5.10</strong> Not own the rights in any copy, translation, modification, adaptation or derivation of Company's Product and services, including any improvement or development thereof unless otherwise agreed on a case-by-case basis.</p>
          <p><strong>5.11</strong> Ensure that it implements reasonable measures designed to prevent the introduction of malicious code or software into its proprietary software, including firewall protections and regular virus scans.</p>
          <p><strong>5.12</strong> Keep its login credentials secure and not disclose same to any third-party.</p>
          <p><strong>5.13</strong> Unconditionally and irrevocably indemnify and keep indemnified the Company against all losses, damages, liabilities, claims, suits, fines, charges, expenses, costs (including attorney fees and expenses) whatsoever, which the Company may incur or suffer, or which may be brought against the Company by any person as a result of misuse of data by the client.</p>
          <p><strong>5.14</strong> Nominate an officer as liaison officer and at least two team members who shall be tasked with the responsibility of liaising with the Company.</p>
          <p><strong>5.15</strong> At expiration or termination of this Agreement, immediately cease all use of Dojah API including access granted to any part of the API as at the termination or expiration date.</p>
        </section>

        <section className="fees">
          <h2>6. FEES</h2>
          <p><strong>6.1</strong> In consideration of the provision of the Services, the Company shall be entitled to the compensation as agreed by Parties on each API call for KYC verification and identification of the Client's Customer ('Fees').</p>
          <p><strong>6.2</strong> The Client may choose to switch to volume-based pricing by notifying the Company via email. Where the Client opts for volume-based pricing, the Client shall be required to pay upfront for the specified quantity of API calls for KYC verification and identification of the Client's customers.</p>
          <p><strong>6.3</strong> The Fees for each API call due to the Company shall be deducted from the wallet per API call.</p>
          <p><strong>6.4</strong> The Company's Fees shall be free and clear of all present and future levies, taxes, duties, withholdings, or other deductions of whatever nature. The Fees shall be grossed up if mandatory holdings or deductions are made. Where the Company makes such taxes or incurs such additional costs, the Client shall be obligated to reimburse the Company.</p>
          <p><strong>6.5</strong> The Parties agree that the Client shall be given access to a dashboard to view all transactions for the purpose of billing and reconciliations. The dashboard record shall be final in determining the accuracy of invoices representing the transactions performed monthly.</p>
          <p><strong>6.6</strong> The Fees may be subject to review over the duration of this Agreement. Such review may occur periodically, based on factors including inflation, market conditions, or changes in the cost of goods and services. Any adjustments to the Fees will be communicated to the Client as soon as possible. The Company reserves the right to suspend the provision of Services to the Client until the Parties agree on the revised Fees.</p>
          <p><strong>6.7</strong> The Parties hereby agree that within 5 (five) Business Days from the end of each calendar month, they shall reconcile the transactions, including Dojah API calls and Fees accrued for the preceding month. Where there is any disagreement or disparity on records, the dashboard's record shall prevail.</p>
          <p><strong>6.8</strong> All payments shall be made in Naira.</p>
        </section>

        <section className="data-protection">
          <h2>7. DATA PROTECTION AND PROCESSING</h2>
          <p>Parties hereby agree to:</p>
          <p><strong>7.1</strong> Comply with the requirements of all relevant Data Protection Laws or any subsequent amendment of same in relation to this Agreement and Schedule 1 herein.</p>
          <p><strong>7.2</strong> Ensure the implementation of technical, operational and organisational safeguards to prevent loss, destruction, damage, unauthorised access, use, modification, disclosure, or other misuse of data processed in relation to this agreement.</p>
          <p><strong>7.3</strong> In the event of any data breach, notify the other party immediately it becomes aware and cooperate with the other party to remedy the breach.</p>
        </section>

        <section className="customer-data">
          <h2>8. CUSTOMERS DATA</h2>
          <p><strong>8.1</strong> The Client acknowledges that it does not own the personal data of its Customers but retains all rights, title, and interest in and to its trade secrets and other confidential information provided under this Agreement. As the data controller, the Client shall bear sole responsibility and liability for obtaining Customer Data and for ensuring the legality, reliability, authenticity, integrity, accuracy, content, completeness, availability, and quality of such data in accordance with applicable data protection laws.</p>
          
          <p><strong>8.2</strong> The Client represents and warrants that it will not create, edit, store, post, upload, distribute or transmit, while using Dojah API, or otherwise make available through Dojah API, any Customer Data that:</p>
          <ul>
            <li><strong>8.2.1</strong> is unlawful, harmful, threatening, defamatory, offensive, obscene, infringing, harassing or racially or ethnically offensive; and/or</li>
            <li><strong>8.2.2</strong> facilitates or relates to illegal activity; and/or</li>
            <li><strong>8.2.3</strong> is discriminatory based on race, gender, colour, religious belief, sexual orientation, disability, or any other illegal activity; and/or</li>
            <li><strong>8.2.4</strong> relates to any third party under the age of 16.</li>
          </ul>

          <p><strong>8.3</strong> The Client shall remain exclusively responsible for all acts or omissions in connection with the Customer's Data that it creates, edits, stores, posts, uploads, distributes or transmits, while using Dojah API, or otherwise made available through Dojah API.</p>

          <p><strong>8.4</strong> The Client acknowledges, represents and warrants that:</p>
          <ul>
            <li><strong>8.4.1</strong> the Company does not control, and is not responsible for the Customer's Data that the Client makes available through Dojah API;</li>
            <li><strong>8.4.2</strong> the Company reserves the right to remove any Customer Data which it deems to be in violation of the terms set forth herein, at the Company's sole discretion, and shall promptly notify the Client thereafter. The Company may also take such further action as it deems appropriate, including, without limitation, disabling, suspending, or terminating any or all use of the Dojah API; provided that such action shall be proportionate to the severity of the violation;</li>
            <li><strong>8.4.3</strong> the Company makes no representations or warranties as to the Customer's Data, and all express, implied and statutory warranties in connection with the Customer's Data, including without limitation with respect to the legality, reliability, authenticity, integrity, accuracy, content, completeness, availability and quality thereof, are all expressly disclaimed to the fullest extent permitted by law.</li>
          </ul>

          <p><strong>8.5</strong> The Client undertakes to evaluate and bear all risks associated with the collection, storage, use, distribution of any such Customer's Data and/or the provision to the Company and the transmission through Dojah API of any such Customer's Data. Under no circumstances will the Company be liable in any way for any Customer's Data or for any loss or damage of any kind incurred by the Client as a result of the use and/or distribution and/or the provision to the Company and/or the transmission through Dojah API of any Customer's Data.</p>

          <p><strong>8.6</strong> The Client hereby declares towards the Company that it has legally acquired and/or owns all rights and interests in and to all copies of the Customer Data and that it has the right to use, distribute, provide to the Company, and transmit through the Dojah API such Customer Data. By using the Dojah API, the Client gives its consent to the Company, and grants the Company a limited, worldwide, royalty-free, and non-exclusive license to collect, store, and process such Customer Data on the Company's servers or third-party cloud services solely for the purpose of providing, maintaining, and securing the Dojah API and complying with applicable legal and regulatory obligations.</p>
        </section>

        <section className="representations">
          <h2>9. REPRESENTATIONS AND WARRANTIES</h2>
          <p>The Parties respectively represent and warrant that:</p>
          <p><strong>9.1</strong> They validly exist under the laws of Nigeria and have all the necessary power, approvals, and authority to enter into this Agreement and have in addition obtained all necessary permits, licences, authorisations, and consent from the necessary regulatory authorities.</p>
          <p><strong>9.2</strong> The execution, delivery and performance of this Agreement will not conflict with or breach any other agreement, judgement, injunctions, orders, regulation, or obligation to which they are party to or bound.</p>
        </section>

        <section className="api-keys">
          <h2>10. API KEY CONFIDENTIALITY AND USAGE</h2>
          <p><strong>10.1</strong> The Client acknowledges that the API keys provided by Dojah ("API Keys") are confidential information and proprietary to the Company.</p>
          <p><strong>10.2</strong> The Client agrees not to disclose, share, or provide access to the API Keys to any third party without the prior written consent of the Company.</p>
          <p><strong>10.3</strong> The Client shall use the API Keys exclusively for the purpose of accessing and utilizing the Company's services as outlined in the Agreement.</p>
          <p><strong>10.4</strong> The Client shall not share, distribute, or provide access to the API Keys with any third party without the explicit written consent of the Company. In the event that the Client requires the involvement of third parties, the Client shall obtain written authorization from the Company before sharing API Keys, and such third parties must adhere to these confidentiality and usage guidelines.</p>
          <p><strong>10.5</strong> The Client shall implement reasonable security measures to prevent unauthorized access, disclosure, or use of the API Keys.</p>
          <p><strong>10.6</strong> In the event of any suspected or actual unauthorized access or breach related to the API Keys, the Client shall promptly notify Dojah.</p>
          <p><strong>10.7</strong> The Client shall be responsible and shall indemnify the Company for any actions, breaches, or misuse of the API Keys, Dojah API, Customer's data by third parties to whom the Client has provided access, with or without the Company's consent.</p>
          <p><strong>10.8</strong> Upon termination of the Agreement or upon the Company's request, the Client shall promptly return or destroy all copies of the API Keys.</p>
          <p><strong>10.9</strong> The Client and the third parties shall comply with all applicable laws and regulations regarding the confidentiality and protection of Customer's data.</p>
        </section>

        <section className="independence">
          <h2>11. INDEPENDENCE OF PARTIES</h2>
          <p>The terms of this Agreement create an independent contractor status and cannot in any circumstances be interpreted as creating a joint entity or an employer/employee relationship between the Parties. It is understood that the Parties have no authority to bind each other in any matters of any nature or kind whatsoever, save as provided under this Agreement or subject to other mutually agreed terms in writing.</p>
        </section>

        <section className="force-majeure">
          <h2>12. FORCE MAJEURE</h2>
          <p><strong>12.1</strong> No failure by any Party to fulfill its obligation(s) under this Agreement shall be deemed to be a breach of this Agreement if and to the extent such failure arises from a Force Majeure Event. In the event that a Party is unable to perform its obligation(s) under this Agreement as a result of a Force Majeure Event (such Party, the "Affected Party") shall notify the other Party (the "Non-Affected Party") in writing within 3 (three) days of the occurrence of such event, stating the cause of such event, the obligation(s) under this Agreement which will be affected and an estimate of the time period for which the Affected Party is likely to be prevented from performing such obligation(s).</p>

          <p><strong>12.2</strong> Within 2 (two) days of the Non-Affected Party's receipt of the notice specified in Clause 22 the Parties shall discuss, at a meeting or otherwise, measures required to be taken by the Affected Party; (i) to resolve the Force Majeure Event and resume the performance of its obligation(s) hereunder; and (ii) to mitigate the effects and consequences of the Force Majeure Event.</p>

          <p><strong>12.3</strong> In addition to the measures specified in Clause 12.2, the Affected Party shall, at all times following the occurrence of a Force Majeure Event, take all reasonable steps to mitigate the consequences of the Force Majeure Event, including accepting assistance from third parties and resume full performance of such obligation(s) as soon as possible after the cessation of such Force Majeure Event.</p>

          <p><strong>12.4</strong> For the purposes of this Agreement, "Force Majeure Event" shall mean an event or circumstance which is beyond the control and without the fault or negligence of the Affected Party, including the following events in each case occurring within the Federal Republic of Nigeria:</p>
          <ul>
            <li>a. act of war, invasion, armed conflict, blockade, embargo, revolution, riot, insurrection, civil commotion, an act of terrorism or sabotage, cyber-attacks, ransomware;</li>
            <li>b. action by any governmental authority;</li>
            <li>c. national or regional emergency;</li>
            <li>d. shortage of adequate technology equipment;</li>
            <li>e. power or transportation facilities;</li>
            <li>f. faults or deficiencies originating from third-party service providers;</li>
            <li>g. fault or error of the API beyond the control of the Company;</li>
            <li>h. emergency, strikes, lockouts or other labour action that affects the Affected Party's ability to fulfil its obligations under this Agreement;</li>
            <li>i. flood or earthquake;</li>
            <li>j. Pandemics or epidemics;</li>
            <li>k. fire or explosion; and</li>
            <li>l. an act of God.</li>
          </ul>

          <p><strong>12.5</strong> Upon the end of the Force Majeure Event, the contractual obligations of the Parties shall be reinstated with such reasonable modifications to take account of the consequences of the Force Majeure.</p>
        </section>

        <section className="indemnification">
          <h2>13. INDEMNIFICATION</h2>
          <p><strong>13.1</strong> The Client agrees to defend, indemnify and hold harmless the Company against any and all claims, losses, penalties, causes of action, damages, liability, costs, expenses (including but not limited to legal fees and costs) or claims caused by or resulting directly or indirectly from the Client's use or its Customer's use of the API, without limitation or exception, including but not limited to the Client or its Customer's violation of any third-party's rights, (including, without limitation, infringement of any Data protection rights, copyright, trademark, service mark, trade secrets, right of privacy or publicity or any other third party right).</p>

          <p><strong>13.2</strong> The Client accepts that upon integration to the API for access to the Services, the Client shall be solely responsible to its Customers for the use of the API and shall indemnify the Company of any claims whatsoever from its Customers, including but not limited to any breaches and fraud perpetrated via the API or any third-party claims including but not limited to data protection breaches in line with applicable law. The terms of this section shall survive the termination of this Agreement.</p>
        </section>

        <section className="limitation">
          <h2>14. LIMITATION OF LIABILITY</h2>
          <p><strong>14.1</strong> The Company shall not be liable for any loss or damage arising from errors, acts, or omissions (including those of third parties) in the performance of the activities or procedures contemplated herein, where such errors, acts, or omissions are reasonably unforeseeable, or result from the wrongful act and/or omission of the Client or the Client's representatives.</p>

          <p><strong>14.2</strong> In no event shall the Company be liable for any loss of profits, loss of savings, loss of data, loss of business, business interruption, or any special, incidental, indirect, consequential, punitive, or exemplary damages, whether foreseeable or not, arising out of or in connection with the use or inability to use the Dojah API or services, even if the Company has been advised of the possibility of such damages.</p>

          <p><strong>14.3</strong> The Company's total aggregate liability to the Client for any claim arising out of or relating to this Agreement or the use of the Dojah API shall not exceed the total fees paid by the Client to the Company in the twelve (12) months preceding the event giving rise to the claim.</p>
        </section>

        <section className="non-exclusivity">
          <h2>15. NON- EXCLUSIVITY</h2>
          <p>The Client understands and agrees that the Company shall not be exclusively devoted to providing Services to the Client and that the Company shall have duties and responsibilities to other customers, provided that any such duties and responsibilities shall be subject to the Confidentiality Obligations of the Company.</p>
        </section>

        <section className="non-solicitation">
          <h2>16. NON - SOLICITATION</h2>
          <p>The Client agrees not to recruit, hire, engage or attempt to recruit, hire or engage, discuss employment with, or otherwise utilise the services in any capacity of any person who shall have been an employee of the Company at any time during the term of this Agreement or induce any person who shall have been an employee of the Company at any time during the term of this contract to terminate their relationship with the Company. However, nothing in this clause shall prevent the Client from employing, discussing employment, or utilising the services of a person who had been an employee of the Company during the term of this Agreement but who had left such employment at least one year prior to his proposed employment by the Company.</p>
        </section>

        <section className="intellectual-property">
          <h2>17. INTELLECTUAL PROPERTY RIGHT</h2>
          <p><strong>17.1</strong> All Intellectual Property Rights existing or belonging to a Party prior to this Agreement or created or acquired by it after the Effective Date and intended to be used in relation to this Agreement, shall remain the sole property of that Party, and the Parties agree not to question nor dispute the ownership of such rights at any time.</p>

          <p><strong>17.2</strong> All patents, copyrights, circuit layouts, mask works, trade secrets and other proprietary rights in or related to the Dojah API are and shall remain the exclusive property of the Company whether specifically recognised or perfected under the laws of the jurisdiction in which the API is used or licenced. The Client shall not take any action that jeopardises the Company's proprietary rights or acquire any right in the Dojah API. Unless otherwise agreed on a case-by-case basis, the Company will own all rights in any copy, translation, modification, adaptation, or derivation of the Dojah API, including any improvement or development thereof. The Client will obtain, at the Company's request, the execution of any instrument that may be appropriate to assign these rights to or perfect these rights in the Company's name.</p>
        </section>

        <section className="confidentiality">
          <h2>18. CONFIDENTIALITY</h2>
          <p><strong>18.1</strong> Each Party shall, during the term of this Agreement and thereafter, treat as confidential and hold in confidence all documents and information (whether technical or commercial) supplied in connection with this Agreement and shall not disclose Confidential Information to a third party without the prior written consent of the other Party, such consent not to be unreasonably withheld.</p>

          <p><strong>18.2</strong> The Client shall treat Dojah API, any customisations, updates and any maintenance releases as confidential and shall not during the term of this Agreement provide or make available Dojah API to any person or entity other than the employees of the Client who have a need to know consistent with the Client's use pursuant to the provisions of this Agreement.</p>

          <p><strong>18.3</strong> The Parties shall ensure that where possible the Party gives the other Party not less than 5 (five) business days' written notice of such disclosure and shall to the extent possible only disclose:</p>
          <ul>
            <li><strong>18.3.1</strong> information necessary; or</li>
            <li><strong>18.3.2</strong> information that is or has become publicly available (by means other than by breach of the terms of this Agreement); or</li>
            <li><strong>18.3.3</strong> such confidential information to its employees on a need-to-know basis.</li>
          </ul>

          <p><strong>18.4</strong> Nothing shall prohibit the disclosure or use of any information by a Party to the extent that the disclosure or use is required by any law, statute, rule, regulation or governmental authority provided that the disclosure or use is required by such authority.</p>

          <p><strong>18.5</strong> The Parties shall only make use of confidential information of the other Party only for lawful purposes and in relation to this Agreement and immediately inform the other Party in the event that it becomes aware that the other Party's confidential information may have been compromised.</p>

          <p><strong>18.6</strong> Parties shall ensure that their employees are aware of and comply with the confidentiality obligations under this Agreement.</p>
        </section>

        <section className="governing-law">
          <h2>19. GOVERNING LAW AND DISPUTE RESOLUTION</h2>
          <p><strong>19.1</strong> The construction, performance, execution and enforcement of this Agreement shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. If any dispute arises between the Parties relating to or arising out of this Agreement (a "Dispute"), the Parties undertake to settle the Dispute amicably among themselves.</p>

          <p><strong>19.2</strong> The Parties shall do all within their efforts to settle any dispute arising between them amicably, utilising discussions, within 15 (fifteen) days of written notification of any dispute by the affected Party.</p>

          <p><strong>19.3</strong> Where the Parties are unable to resolve the Disputes themselves amicably through discussions, all Disputes shall first be referred to Mediation under the Arbitration and Mediation Act 2023.</p>
          <ul>
            <li><strong>19.3.1</strong> The mediator shall be appointed by both Parties in Agreement and, where both parties cannot agree, by the Chairman of Lagos Multi-Door Courthouse (LMDC) upon written request of either Party.</li>
            <li><strong>19.3.2</strong> The mediation seat, or legal place, shall be Lagos, Nigeria. The language to be used in the mediation proceedings shall be English.</li>
          </ul>

          <p><strong>19.4</strong> If the Parties are unable to reach a settlement through mediation within thirty (30) days from the appointment of the mediator, the Dispute shall be referred to and finally resolved by Arbitration under the Arbitration and Mediation Act 2023.</p>
          <ul>
            <li><strong>19.4.1</strong> The arbitrator(s) shall be appointed by mutual agreement of the Parties, or, failing such agreement, by the Chairman of the Lagos Multi-Door Courthouse (LMDC) upon the request of either Party.</li>
            <li><strong>19.4.2</strong> The seat, or legal place, of arbitration shall be Lagos, Nigeria. The language to be used in the arbitration proceedings shall be English.</li>
            <li><strong>19.4.3</strong> The arbitration award shall be final and binding on the Parties. Any competent court may enter judgement on the arbitration award.</li>
          </ul>

          <p><strong>19.5</strong> Nothing in this clause shall limit or be construed to limit the right of either Party to take proceedings against the other Party in any court of competent jurisdiction to obtain security for its claim or injunctive relief against the other Party.</p>

          <p><strong>19.6</strong> When a dispute arises and is under mediation, except for the matter under Dispute, the Parties shall continue to exercise their respective rights and fulfil their remaining obligations under this Agreement.</p>

          <p><strong>19.7</strong> Notice of mediation and service of any legal proceedings permitted by this clause or at law may be validly effected by or under cover of any Notice sent in conformity with Clause 22 of this Agreement and neither Party shall contest service effected by these means.</p>
        </section>

        <section className="termination">
          <h2>20. TERMINATION</h2>
          <p><strong>20.1</strong> Notwithstanding any other provision of this Agreement, either Party (the "First Party") shall be entitled to terminate this Agreement upon giving 30 (thirty) days prior written notice to the other party (the "Other Party").</p>

          <p><strong>20.2</strong> Either Party shall be entitled to terminate this Agreement immediately upon giving 7 days' notice in the event:</p>
          <ul>
            <li><strong>20.2.1</strong> of any material breach by the Other Party of any of the terms of this Agreement; or</li>
            <li><strong>20.2.2</strong> of a change of control of the Other Party which is in the reasonable opinion of the First Party, detrimental to the First Party's interests; or</li>
            <li><strong>20.2.3</strong> any material breach of the Trademarks or other intellectual property rights.</li>
          </ul>

          <p><strong>20.3</strong> Notwithstanding anything to the contrary contained in this Agreement, should any Party (the "Defaulting Party") commit a breach of any provision of this Agreement and fail to remedy such breach within 14 (fourteen) days of receiving written notice from the other Party (the "Aggrieved Party") requiring the Defaulting Party to do so, the Aggrieved Party shall be entitled, in addition to its other remedies in law or in terms of this Agreement, to cancel this Agreement immediately and without prejudice to its right to claim damages.</p>

          <p><strong>20.4</strong> Upon the termination of this Agreement, each Party shall immediately return to the other Party all papers, materials, data and other property of the other Party in its possession or held by it in connection with the performance of this Agreement. Notwithstanding the above, either Party shall be entitled to retain information concerning the other Party if and to the extent that it is required to do so in terms of its reasonable retention of records policy or in terms of any applicable law, subject at all times to the confidentiality obligations as set out in Clause 18 above.</p>

          <p><strong>20.5</strong> Termination of this Agreement will be subject to and not affect the obligations of the respective Parties incurred or arising prior to such termination becoming effective.</p>
        </section>

        <section className="effect-of-termination">
          <h2>21. EFFECT OF TERMINATION</h2>
          <p><strong>21.1</strong> Upon the termination of this Agreement, all the provisions of this Agreement shall cease to have effect, save that the following provisions of this Agreement shall survive and continue to have effect (in accordance with their express terms or otherwise indefinitely): Clauses 6 (to the extent that there are any outstanding or unpaid fees by the client), 13, 14, 17 and 18.</p>

          <p><strong>21.2</strong> Except to the extent expressly provided otherwise in this Agreement, the termination of this Agreement shall not affect the accrued rights of either party.</p>
        </section>

        <section className="notices">
          <h2>22. NOTICES</h2>
          <p>Any notice, approval or request required or permitted to be given or made under this Agreement shall be in writing and in English Language. Such notice, approval or request shall be deemed to be duly given or made when it shall have been delivered by email, or hand delivery to the other Party and marked for the attention of the person set out below or such address, number electronic mail address or person as that Party may notify the other from time to time in accordance with this clause;</p>

          <table className="contact-table">
            <thead>
              <tr>
                <th colSpan={2}>COMPANY</th>
                <th colSpan={2}>CLIENT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Attention</td>
                <td>Tobi Ololade</td>
                <td>Attention</td>
                <td>Akinbobola Ainnah</td>
              </tr>
              <tr>
                <td>Email</td>
                <td><a href="mailto:support@dojah.io">support@dojah.io</a></td>
                <td>Email</td>
                <td><a href="mailto:support@uniswapng.com">support@uniswapng.com</a></td>
              </tr>
              <tr>
                <td>Address</td>
                <td>3-8, Koleosho Street, Off Medical Road, Ikeja, Lagos State, Nigeria.</td>
                <td>Address</td>
                <td>7 Dosumu Aina Estate, Gbagada, Lagos State, Nigeria</td>
              </tr>
              <tr>
                <td>Phone No</td>
                <td></td>
                <td>Phone No</td>
                <td>09028839189</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="compliance">
          <h2>23. COMPLIANCE WITH APPLICABLE LAWS</h2>
          <p><strong>23.1</strong> The Client shall comply, and procure that its staff, appointed representative, competent personnel, agents as well as sub-contractors, during the performance of the Services, comply with:</p>
          <p><strong>23.2</strong> all Applicable Laws; and</p>
          <p><strong>23.3</strong> all policies, rules, codes of conducts, standard operating procedures, and other documentation as communicated in writing from time to time by the Company, including any amendments thereto.</p>
          <p><strong>23.4</strong> Parties shall use commercially reasonable efforts to perform the Services regardless of changes in Applicable Law. If such changes prevent the Parties from performing its obligations under this Agreement, the Parties shall develop and upon the other party's approval, implement a temporary suitable work plan until such time as the parties can perform its obligations under this Agreement.</p>
        </section>

        <section className="anti-bribery">
          <h2>24. ANTI-BRIBERY AND CORRUPTION</h2>
          <p><strong>24.1</strong> The Client shall not offer, promise, give, authorize, request, accept or agree to receive a payment or other business advantage for or on behalf of the Company while carrying out its obligations under the Agreement.</p>

          <p><strong>24.2</strong> The Client shall not accept or give "PR; "Public Relations" or facilitation payments of any kind to any government official or third party in the name of the Company to facilitate the fulfilment of its obligations under this agreement. "Public Relations" for the purposes of this agreement includes but is not limited to overpayment of invoices or fees, providing free products, offering gifts or one-off "unofficial" payment to government officials for the purposes of getting a business advantage or avoiding a business disadvantage.</p>

          <p><strong>24.3</strong> The Client agrees to follow due process of law in dealing with any government official, public official, or third party in relation to this agreement.</p>

          <p><strong>24.4</strong> In the event that the Client is asked to make such a facilitation payment or kickback on behalf of the Company, the Client shall by all reasonable means explain to the request maker that it is against the Company's Policy to make such payments and direct the request maker to the respective party.</p>

          <p><strong>24.5</strong> The Client shall ensure that it complies with the Anti-Bribery and Corruption (ABAC) Policy or such other anti-bribery related policy of its organization as it may issue from time to time and accordingly ensure that it subscribes to and executes any document required to be in compliance with the policy of the Company.</p>

          <p><strong>24.6</strong> The Client shall indemnify, hold harmless, and defend the Company for any loss or damage which may arise as a result of its failure to carry out the obligations stated in this Clause 24.</p>

          <p><strong>24.7</strong> All complaints on solicitation in breach of this clause should be reported by sending a mail to <a href="mailto:frauddesk@dojah.io">frauddesk@dojah.io</a>.</p>
        </section>

        <section className="general">
          <h2>25. GENERAL</h2>
          <p><strong>25.1 Finality:</strong> This Agreement is the complete and exclusive statement of the parties' mutual understanding and supersedes all prior agreements, negotiations, and discussions. It cancels all previous written and oral agreements, communications, and other understandings relating to the subject matter of this Agreement and all waivers and modifications must be in writing signed by both Parties, except as otherwise provided herein.</p>

          <p><strong>25.2 Severability:</strong> If any provision of this Agreement is unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that this Agreement shall otherwise remain in full force and effect and enforceable.</p>

          <p><strong>25.3 Online Terms:</strong> The Client's access to and use of the Dojah platform, including the website, web application, dashboard, APIs, and related services, shall be subject to Dojah's Terms of Use and Privacy Policy available at <a href="https://www.dojah.io" target="_blank" rel="noopener noreferrer">www.dojah.io</a>, which are incorporated into this Agreement by reference. In the event of any conflict between this Agreement and the Terms of Use and Privacy Policy, the provisions of this Agreement shall prevail.</p>

          <p><strong>25.4 Assignment:</strong> This Agreement is not assignable or transferable by a Party except with the other Party's prior written consent, provided that a Party may transfer and assign its rights and obligations under this Agreement without consent to a successor to all or substantially all its assets or business to which this Agreement relates, by giving the other Party written notice before the assignment or transfer.</p>

          <p><strong>25.5 Counterparts & Electronic Signatures:</strong> This Agreement may be executed in several counterparts; each instrument is deemed an original. Signature by fax or via email is legally binding and deemed original signature.</p>

          <p><strong>25.6 Contract Execution:</strong> The Parties agree that for the purpose of executing this Agreement, electronic signatures of the Parties' authorized signatories shall be sufficient evidence of the consent of both parties and such signatures shall be as valid as the handwritten/wet ink signatures. The Parties further agree that any electronic signature used for the purpose of this clause shall be valid even if it differs in any respect whatsoever from the signatories' ordinary handwritten signatures.</p>
        </section>

        <section className="schedules">
          <h2>SCHEDULE 1 - DATA PROCESSING REQUIREMENTS</h2>
          
          <h3>1. ROLES AND RESPONSIBILITIES</h3>
          
          <h4>1.1 Responsibility of Parties</h4>
          <p><strong>1.1.1</strong> The Parties shall at all times during the Term of this Agreement maintain appropriate technical and security measures to protect any Customer's Data, or each Party's Data which the Parties collects, accesses or processes in connection with this Agreement against unauthorised or unlawful use, disclosure, processing or alteration ("Security Incidents"). The Parties shall act only on with the agreed terms between each other in relation to the collection, use, disclosure and processing of any data, but in all instances in accordance with all Applicable Laws, rules and regulations including the Nigeria Data Protection Act, 2023 (NDPA).</p>

          <p><strong>1.1.2</strong> Each Party shall ensure it implements a process for regularly testing, assessing and evaluating the effectiveness of its technical and security measures.</p>

          <p><strong>1.1.3</strong> Each Party shall observe all Applicable Laws on Personal Data protection and/or privacy requirements of the Federal Republic of Nigeria, including, without limitation, the Constitution of the Federal Republic of Nigeria and the Nigerian Data Protection Act 2023 (NDPA).</p>

          <p><strong>1.1.4</strong> The Parties shall take reasonable steps to ensure the reliability of any employee, agent or contractor of any contracted processor ("Representatives") who may have access to Personal/ Customer's Data, ensuring in each case that access is strictly limited to those individuals who need to know/access the relevant Personal Data, as strictly necessary for the purposes of this Agreement, and to comply with applicable laws in the context of that individual's duties to the contracted Processor, ensuring that all such individuals are subject to confidentiality undertakings or professional or statutory obligations of confidentiality.</p>

          <p><strong>1.1.5</strong> With the execution of this Agreement, Parties shall not process Personal Data pursuant to this Agreement without the appropriate legal basis for such Processing. All Personal/ Customer's Data acquired by Parties pursuant to the performance of obligations under this Agreement shall only be used for the purposes of this Agreement and shall not be further processed or disclosed without the consent of the Data Subject.</p>

          <p><strong>1.1.6</strong> The Parties shall ensure that the obligations imposed under this clause shall be imposed on any third party/partners providing services in relation to this Agreement and shall provide evidence of compliance upon request from the other party.</p>

          <h4>1.2 Responsibilities of the Controller</h4>
          <p><strong>1.2.1</strong> The Controller will not provide (or cause to be provided) any Sensitive Data to the Processor for processing under this Agreement without the express consent of the Data Subject. The Parties understand that Sensitive Data merits specific protection as the context of their processing could create significant risks to the fundamental rights and freedoms of the Data Subject.</p>

          <p><strong>1.2.2</strong> The Controller represents and warrants that:</p>
          <ul>
            <li><strong>1.2.2.1</strong> it has complied, and will continue to comply, with all Applicable Laws, including but not limited to the Nigerian Data Protection Act 2023 (NDPA), Data Protection Laws in respect of its processing of Personal Data and any processing instructions it issues to Processor; and</li>
            <li><strong>1.2.2.2</strong> it has obtained and will continue to obtain, all consents and rights necessary under Data Protection Laws to enable the Processor to process Personal Data for the purposes described in this Agreement.</li>
          </ul>

          <p><strong>1.2.3</strong> The Controller shall have sole responsibility for the accuracy, quality, and legality of Personal Data and the means by which the Controller acquired Personal Data.</p>

          <p><strong>1.2.4</strong> The Controller will ensure that the Processor's processing of the Data following the Controller's instructions will not cause the Processor to violate any applicable law, regulation, or rule, including, without limitation, Nigerian Data Protection Act 2023 (NDPA).</p>

          <h4>1.3 Responsibility of the Processor</h4>
          <p><strong>1.3.1</strong> The Processor shall adopt such measures to ensure a level of appropriate security measure to the sensitivity of the Data transferred to the Processor.</p>

          <p><strong>1.3.2</strong> The Processor shall notify the Controller in writing within 48 (forty-eight) hours, if it becomes aware or believes that any data processing instruction from the Controller violates the Nigerian Data Protection Act.</p>

          <p><strong>1.3.3</strong> The Processor shall ensure that all its agents, staff or subcontractors who have access to Personal Data shall be under a contractual or statutory obligation of confidentiality as regards the Data it has access to.</p>

          <p><strong>1.3.4</strong> Processor shall in updating or modifying its security measures, ensure that such updates and modifications do not result in the degradation of the existing security measures.</p>

          <p><strong>1.3.5</strong> Upon becoming aware of a Security Incident, the Processor shall:</p>
          <ul>
            <li><strong>1.3.6</strong> notify Controller without undue delay, and where feasible, in any event no later than 48 hours from becoming aware of the Security Incident;</li>
            <li><strong>1.3.7</strong> provide timely information relating to the Security Incident as it becomes known or as is reasonably requested by the Controller;</li>
            <li><strong>1.3.8</strong> promptly take reasonable steps to contain and investigate any Security Incident; and</li>
            <li><strong>1.3.9</strong> ensure it can restore the availability to Personal Data promptly.</li>
          </ul>

          <p><strong>1.3.10</strong> The Processor's notification of or response to a Security Incident under clause 1.3.5 above shall not be construed as an acknowledgement by the Processor of any fault or liability concerning the Security Incident.</p>

          <p><strong>1.3.11</strong> Notwithstanding the above, the Controller agrees that except as provided in this Agreement, the Controller is responsible for protecting the security of Personal Data when in transit to the Processor while the Processor is responsible for protecting the security of Personal Data it receives and transfers to any party including any Sub-Processor.</p>

          <h3>2. Sub-Processor</h3>
          <p><strong>2.1</strong> Controller agrees that the Processor may engage Sub-processors to process Personal Data on Controller's behalf.</p>
          <p><strong>2.2</strong> Processor shall notify Controller of any engagement or disengagement of a Sub-processor.</p>
          <p><strong>2.3</strong> Processor shall:</p>
          <p><strong>2.4</strong> enter into a written agreement with each Sub-processor containing data protection obligations that provide at least the same level of protection for Controller's Data as those in this Agreement; and</p>
          <p><strong>2.5</strong> remain responsible for the Sub-processor's compliance with the obligations of this Agreement and for the acts or omissions of such Sub-processor that cause the Processor to breach any of its obligations under this Agreement.</p>

          <h3>3. Return or Deletion of Data</h3>
          <p>Upon termination or expiration of this Agreement, the Processor shall delete or return to the Controller all Personal Data (including copies) in its possession or control, except that this requirement shall not apply to the extent that the Processor is required by Applicable Law to retain some or all of the Personal Data, or the Personal Data is archived on back-up systems, which Personal Data the Processor shall securely isolate, protect from any further processing and eventually delete in accordance with the Controller's policies, except to the extent required by applicable laws.</p>

          <h3>4. International Transfers</h3>
          <p>The Controller acknowledges that the Processor may transfer and process Personal Data outside of Nigeria where the Processor, its Affiliates or its sub-processors maintain data processing operations. The Processors shall at all times ensure that such transfers are made in compliance with the requirements of Data Protection Laws.</p>

          <h3>5. Data Subject Rights and Cooperation</h3>
          <p><strong>5.1</strong> The Processor shall, taking into account the nature of the processing, provide reasonable additional assistance to the Controller to the extent possible to enable Controller to comply with its data protection obligations with respect to a Data Subject's rights under Data Protection Laws.</p>

          <p><strong>5.2</strong> If any request is made by a Data Subject to the Processor directly, the Processor shall not respond to such communication directly except as appropriate (for example, to direct the Data Subject to contact the Controller) without the Controller's prior authorisation except as legally required.</p>

          <p><strong>5.3</strong> If the Processor is required to respond to a request made under clause 5.2, the Processor shall promptly notify the Controller and provide the Controller with a copy of the request unless the Processor is legally prohibited from doing so. For the avoidance of doubt, nothing in this Agreement shall restrict or prevent the Processor from responding to any Data Subject or data protection authority requests concerning Personal Data for which Processor is a controller.</p>

          <p><strong>5.4</strong> If a law enforcement agency requests access to Personal Data (for example, through a subpoena or court order), the Processor shall use every reasonable means to redirect the request to the controller.</p>

          <p><strong>5.5</strong> Where the Processor is unable to redirect the request to the Controller, the Processor shall give the Controller reasonable notice of the demand to allow Controller to seek a protective order or other appropriate remedies, unless Processor is legally prohibited from doing so.</p>

          <p><strong>5.6</strong> As part of this effort, where reasonable the Processor may provide the Controller's contact information to the law enforcement agency.</p>
        </section>

        <section className="schedule2">
          <h2>SCHEDULE 2 - SUPPORT AND RESOLUTION TIMELINES</h2>
          <p>The table below shows the priority assigned to issues and service requests according to the perceived importance of the reported situation. The "Response Time" refers to how long it will take the Company to give a reply to the Client pending when a resolution is gotten. The resolution time refers to how long it would take the Company to provide a resolution to a complaint.</p>

          <table className="support-table">
            <thead>
              <tr>
                <th>Issue Category</th>
                <th>Issue Sub-Category</th>
                <th>Response Timelines</th>
                <th>Issue Resolution Time</th>
                <th>Contact Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Technical Issues</td>
                <td>Bugs and Fixes</td>
                <td>The client shall receive an acknowledgement response fifteen (15) minutes after receipt of each request. Dojah shall respond promptly to all requests for support services made by the client through the helpdesk.</td>
                <td>1-3 hours (Dojah shall communicate to the client if the issue cannot be resolved within this timeline)</td>
                <td><a href="mailto:support@dojah.io">support@dojah.io</a></td>
              </tr>
              <tr>
                <td>New feature requests</td>
                <td></td>
                <td></td>
                <td>Dependent on request</td>
                <td><a href="mailto:support@dojah.io">support@dojah.io</a></td>
              </tr>
            </tbody>
          </table>

          <p className="note">*Support services will be provided from 9am-5pm on Business Days.</p>
        </section>

        <section className="signature-section">
          <h2>EXECUTION</h2>
          
          <div className="signature-block">
            <h3>Signed for and on behalf of DOJAH TECHNOLOGIES LIMITED</h3>
            <div className="signature-lines">
              <div className="signature-line">
                <p>Signature: _______________________</p>
                <p>Name: _______________________</p>
                <p>Designation: _______________________</p>
                <p>Date: _______________________</p>
              </div>
              <div className="signature-line">
                <p>Signature: _______________________</p>
                <p>Name: _______________________</p>
                <p>Designation: _______________________</p>
                <p>Date: _______________________</p>
              </div>
            </div>
          </div>

          <div className="signature-block">
            <h3>Signed for and on behalf of UNISWAPNG LIMITED</h3>
            <div className="signature-lines">
              <div className="signature-line">
                <p>Signature: _______________________</p>
                <p>Name: AKINBOBOLA AINNAH</p>
                <p>Designation: CHIEF EXECUTIVE OFFICER</p>
                <p>Date: 4/12/25</p>
              </div>
              <div className="signature-line">
                <p>Signature: _______________________</p>
                <p>Name: _______________________</p>
                <p>Designation: _______________________</p>
                <p>Date: _______________________</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="sla-footer">
          <p>www.dojah.io</p>
        </footer>
      </div>
    </div>
  );
};

export default ServiceLevelAgreement;
