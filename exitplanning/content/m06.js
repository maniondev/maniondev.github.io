FBE.add([
/* =====================================================================
   6.1 THE MAP OF EXIT OPTIONS
   ===================================================================== */
{
id: 'm06-l01', minutes: 25,
objectives: [
  'List the main internal, external, partial, and non-sale exit options',
  'Compare options on price, cash at close, speed, control, and legacy',
  'Explain why the highest price is not always the best outcome'
],
body: `
<div class="call plain"><span class="tag">Summary</span>
<p>Owners usually picture two exits: sell to someone or hand it to the kids. There are more options than that, and each one trades off money, speed, certainty, control, and what happens to the people and legacy the owner cares about. Your job is to make sure the owner sees all the realistic options before choosing, and understands the trade-offs of each.</p>
</div>

<h2>The options</h2>
<table>
<tr><th>Category</th><th>Option</th><th>Brief description</th></tr>
<tr><td rowspan="4"><b>Internal</b></td><td>Family transfer</td><td>Gift, sale, or a mix to children or other relatives</td></tr>
<tr><td>Management buyout (MBO)</td><td>Sale to the existing management team, usually financed with debt and seller notes</td></tr>
<tr><td>ESOP</td><td>Sale to an employee stock ownership plan</td></tr>
<tr><td>Co-owner buyout</td><td>Sale to existing partners, often under the buy-sell agreement</td></tr>
<tr><td rowspan="3"><b>External</b></td><td>Strategic buyer</td><td>A company in the same or a related industry</td></tr>
<tr><td>Financial buyer</td><td>Private equity firm, family office, independent sponsor, or search fund</td></tr>
<tr><td>Individual buyer</td><td>A person buying a business to run, usually for smaller companies</td></tr>
<tr><td rowspan="2"><b>Partial</b></td><td>Recapitalization</td><td>Selling a majority or minority stake to an investor, taking some cash off the table while keeping a stake</td></tr>
<tr><td>Dividend recapitalization</td><td>Borrowing against the business to pay the owner a large distribution</td></tr>
<tr><td rowspan="3"><b>Other</b></td><td>Keep and professionalize</td><td>Hire a CEO, keep ownership, and become a passive owner</td></tr>
<tr><td>Orderly wind-down</td><td>Stop operating and sell assets, when there is little transferable value</td></tr>
<tr><td>IPO</td><td>Rarely relevant for your clients</td></tr>
</table>

<h2>How they compare</h2>
<p>These are general tendencies, not rules. Every deal is different.</p>
<table>
<tr><th>Option</th><th>Price</th><th>Cash at close</th><th>Time to complete</th><th>Owner control of legacy</th></tr>
<tr><td>Strategic buyer</td><td>Often highest</td><td>High</td><td>6 to 12 months</td><td>Low: integration is the buyer\'s call</td></tr>
<tr><td>Private equity</td><td>High</td><td>Medium to high; rollover common</td><td>6 to 12 months</td><td>Medium: management usually stays, with a plan to resell</td></tr>
<tr><td>Individual buyer</td><td>Lower</td><td>Medium; seller notes common</td><td>6 to 12 months</td><td>Medium</td></tr>
<tr><td>Management buyout</td><td>Moderate</td><td>Low to medium; seller notes typical</td><td>Months, plus years of payments</td><td>High</td></tr>
<tr><td>ESOP</td><td>Fair market value</td><td>Varies; often part seller-financed</td><td>6 to 12 months to set up</td><td>High</td></tr>
<tr><td>Family transfer</td><td>Often below market by design</td><td>Low</td><td>Years</td><td>Highest</td></tr>
<tr><td>Recapitalization</td><td>Market for the stake sold</td><td>Partial</td><td>6 to 12 months</td><td>Shared with the investor</td></tr>
</table>

<h2>Financial and non-financial outcomes</h2>
<p>Consider two ways an owner can "win":</p>
<ul>
<li><b>Financial outcome:</b> after-tax proceeds, certainty of payment, and risk after closing.</li>
<li><b>Personal outcome:</b> legacy, treatment of employees, family relationships, role after the sale, and how the owner feels about it five years later.</li>
</ul>
<p>An owner who sells to a strategic buyer for the most money and watches the company\'s name disappear and long-time employees lose their jobs may regret it, even though the financial result was excellent. Another owner who sells to managers for 20% less, over five years, may be very satisfied. Neither choice is wrong. The advisor\'s job is to make the trade-offs visible before the choice is made.</p>

<div class="call hawaii"><span class="tag">Hawaii context</span>
<p>Legacy considerations tend to weigh heavily here. Owners often care about keeping the business locally owned, keeping jobs on-island, and protecting a name the community knows. Internal options (family, management, ESOP) and local buyers often align with those goals, while mainland strategic buyers often pay the most. Understanding how much the owner values each goal is essential before comparing offers.</p>
</div>

<h2>Relevance to the role</h2>
<div class="call why"><span class="tag">Application</span>
<p>EPI emphasizes that owners should understand all their options before deciding, and that the right option depends on the owner\'s goals and readiness. In the job description, "planning pathways" often begin with this map: which paths are realistic given the business, the family, and the owner\'s goals.</p></div>
`,
terms: [
  ['Internal transfer', 'A transfer to insiders: family, management, employees, or co-owners.'],
  ['External sale', 'A sale to an outside buyer: strategic, financial, or individual.'],
  ['Recapitalization', 'Selling part of the company to an investor, allowing the owner to take cash while keeping a stake.'],
  ['Dividend recapitalization', 'Borrowing against the business to fund a large distribution to owners.'],
  ['Strategic buyer', 'A company in the same or a related business that buys for operational or market reasons.'],
  ['Financial buyer', 'An investor such as a private equity firm that buys for financial return.']
],
quiz: [
  {q: 'Which option usually gives an owner the most control over legacy and employees?',
   options: ['Family transfer or management buyout', 'Strategic buyer', 'Private equity majority sale', 'Dividend recapitalization'], a: 0,
   why: 'Internal buyers are known to the owner and typically keep the business as it is.'},
  {q: 'What is a recapitalization?',
   options: ['Selling part of the company to an investor, taking some cash while keeping a stake', 'Refinancing a mortgage', 'Closing the business', 'Gifting shares to children'], a: 0,
   why: 'It lets the owner take some chips off the table and keep upside.'},
  {q: 'Which buyer is typically able to pay the highest price?',
   options: ['A strategic buyer that can capture synergies', 'An individual buyer', 'Management', 'A child of the owner'], a: 0,
   why: 'Synergies can justify prices other buyers cannot match.'},
  {q: 'Why should the advisor present all realistic options before the owner chooses?',
   options: ['The best option depends on the owner\'s goals, which may favor legacy, timing, or certainty over price', 'Because the highest price is always best', 'Because regulations require it', 'To delay the process'], a: 0,
   why: 'Owners regret decisions made without understanding the trade-offs.'},
  {q: 'When is an orderly wind-down a reasonable option?',
   options: ['When the business has little transferable value beyond its assets', 'When the business is growing quickly', 'When many buyers are interested', 'Never'], a: 0,
   why: 'If no buyer will pay more than the assets are worth, selling the assets may be best.'}
],
exercise: `
<p>Take the landscaping owner, Leilani, from Lesson 1.1 (61, $4 million business, building leased to the company). Rank the exit options you think are realistic for her, from most to least likely, and write one sentence for each explaining why. Then list three things you would need to learn about her goals before recommending any path.</p>`,
discussion: `
<p>What would you do if an owner\'s stated goals conflict: for example, "I want the highest price" and "I want my employees protected"? How would you help them rank those goals?</p>`,
resources: [
  {title: 'The $10 Trillion Opportunity', by: 'Richard Jackim and Peter Christman', note: 'Chapters on the range of exit options and how to compare them.'},
  {title: 'Finish Big', by: 'Bo Burlingham', note: 'Stories of owners who chose different exit paths and how they felt afterward.'}
]
},

/* =====================================================================
   6.2 TRANSFERRING TO FAMILY
   ===================================================================== */
{
id: 'm06-l02', minutes: 30,
objectives: [
  'Assess whether a family successor is ready',
  'Compare gifting, selling, and blending the two',
  'Design a transfer that meets the parent\'s income needs',
  'Test whether the business can support the transfer financially'
],
body: `
<div class="call plain"><span class="tag">Summary</span>
<p>Passing the business to a child sounds simple and is often the hardest option to get right. Three questions have to be answered together: Is the child ready and willing to lead? How will the parents be paid, if at all? And how will the other children be treated? A plan that answers only one of these usually fails.</p>
</div>

<h2>Successor readiness</h2>
<p>Family business advisors often look at three qualities:</p>
<ul>
<li><b>Competence:</b> can they actually run the business? Have they led people, managed customers, and made financial decisions?</li>
<li><b>Commitment:</b> do they want it, or do they feel obligated? A reluctant successor is a serious risk.</li>
<li><b>Credibility:</b> will employees, customers, lenders, and suppliers accept them as the leader?</li>
</ul>
<p>Common practices that build readiness: working outside the family business for several years first, starting in a real role rather than at the top, having clear performance reviews from someone other than a parent, and taking over responsibilities gradually with authority to match. Module 10 goes deeper.</p>

<h2>Gift, sale, or combination</h2>
<table>
<tr><th>Approach</th><th>Parent receives</th><th>Tax considerations</th><th>Fits when</th></tr>
<tr><td><b>Gift</b></td><td>Nothing directly</td><td>Uses gift exemption; child takes the parent\'s low basis</td><td>Parents are financially independent of the business</td></tr>
<tr><td><b>Sale</b></td><td>Payments, usually over time</td><td>Parent pays tax on gain (possibly through an installment sale)</td><td>Parents need the value for retirement</td></tr>
<tr><td><b>Blend</b></td><td>Partial payment</td><td>Part gift, part sale; techniques like a sale to an IDGT (Lesson 4.3)</td><td>Most common in practice</td></tr>
</table>
<p>Parents who need retirement income from the business have several sources besides a sale price:</p>
<ul>
<li>A seller note paid over time</li>
<li>Rent from real estate they keep and lease to the business</li>
<li>A consulting or deferred compensation arrangement (taxed as ordinary income and deductible to the business)</li>
<li>Retained preferred or non-voting shares that pay distributions</li>
</ul>

<div class="call example"><span class="tag">Worked example: testing a family transfer</span>
<p>Parents need $250,000 a year before tax for 10 years from the business, beyond their other savings. The business is worth $6 million and produces $1.1 million of cash flow before owner compensation. Their daughter will run it.</p>
<p><b>Plan:</b> sell 50% of the business to the daughter for $3 million with a 10-year note at 5%, gift the remaining 50% over time through trusts, and keep the building, leasing it to the company at market rent of $180,000 a year.</p>
<table>
<tr><th>Annual cash flows</th><th class="n">Amount</th></tr>
<tr><td>Note payments to parents ($3M, 5%, 10 years, level payments)</td><td class="n">$388,500</td></tr>
<tr><td>Rent to parents</td><td class="n">180,000</td></tr>
<tr class="tot"><td>Total to parents, before tax</td><td class="n">$568,500</td></tr>
</table>
<p>That comfortably covers the parents\' $250,000 need. Now test the business side:</p>
<table>
<tr><th>Business cash flow test</th><th class="n">Amount</th></tr>
<tr><td>Cash flow before owner compensation (after paying market rent)</td><td class="n">$1,100,000</td></tr>
<tr><td>Less daughter\'s market salary</td><td class="n">(200,000)</td></tr>
<tr><td>Less taxes on the daughter\'s share of pass-through income (estimate)</td><td class="n">(250,000)</td></tr>
<tr><td>Less capital spending</td><td class="n">(150,000)</td></tr>
<tr class="tot"><td>Available for note payments</td><td class="n">about $500,000</td></tr>
</table>
<p>About $500,000 is available to cover $388,500 of note payments: a coverage ratio of about 1.3 times, which is thin but workable. If the $1.1 million had been measured before rent, the $180,000 of rent would drop coverage below 1 time, and the plan would fail. Always confirm what a cash flow figure includes. Test this before the family commits.</p>
<p>Note also: the daughter pays the note with after-tax dollars, which is one reason families often favor combinations of gifts, rent, and compensation that are deductible to the business.</p>
</div>

<h2>Treatment of other heirs</h2>
<p>If one child receives the business and others do not, the parents need a plan for fairness. Common tools: leaving other assets (real estate, investments, life insurance) to the other children, giving them non-voting shares with a dividend policy, or explicitly deciding that fair does not mean equal and explaining why. Lesson 10.5 covers this in depth.</p>

<h2>Common failure points</h2>
<ul>
<li>The parent never actually lets go of decisions, even after the ownership transfer.</li>
<li>The successor was chosen by birth order or default rather than readiness.</li>
<li>The business cannot support the payments to parents and the investment it needs.</li>
<li>Siblings were not told, or were told late.</li>
<li>No one planned for the parent\'s role and identity after stepping back.</li>
</ul>

<div class="call hawaii"><span class="tag">Hawaii context</span>
<p>Family transfer is a common intended path in Hawaii, and expectations can be shaped by culture and generations of family history, including an assumption that the eldest child or a son will take over. The advisor should never impose views on these expectations, and should make sure the decision is based on the family\'s actual goals and each candidate\'s readiness and interest. Often the most helpful thing is simply creating a space where each family member can say what they want.</p>
</div>

<h2>Relevance to the role</h2>
<div class="call why"><span class="tag">Application</span>
<p>Family succession engagements pull in nearly every internal partner: commercial banking (financing and the loan relationship), wealth planning (the parents\' income need), trust and estate (the transfer techniques), and valuation (the appraisal). Coordinating them around a single, tested plan is the core of the Advisor role.</p></div>
`,
terms: [
  ['Competence, commitment, credibility', 'Three commonly used tests of a family successor\'s readiness.'],
  ['Intra-family sale', 'A sale of the business to a family member, often financed with a seller note.'],
  ['Deferred compensation', 'Payments to a former owner-employee after they leave, taxed as ordinary income and generally deductible to the business.'],
  ['Debt service coverage', 'Cash available for debt payments divided by required payments. Used to test whether a business can carry a transfer.']
],
quiz: [
  {q: 'Which successor quality refers to whether employees, customers, and lenders will accept them as the leader?',
   options: ['Credibility', 'Competence', 'Commitment', 'Compensation'], a: 0,
   why: 'Credibility is about acceptance by others.'},
  {q: 'Parents are financially independent and want to minimize estate tax. Which transfer approach is most likely?',
   options: ['Gifting, often through trusts', 'A full cash sale at market value', 'A sale to a strategic buyer', 'An ESOP'], a: 0,
   why: 'If the parents do not need the value, gifting moves it and its future growth out of the estate.'},
  {q: 'Why might parents keep the real estate and lease it to the business?',
   options: ['It provides ongoing income and a separate asset to balance among heirs', 'It avoids all taxes', 'Real estate cannot be transferred', 'The business cannot operate without it'], a: 0,
   why: 'Rent is a common and flexible source of retirement income.'},
  {q: 'Cash available for note payments is $400,000 and required payments are $380,000. What does that suggest?',
   options: ['Coverage is about 1.05 times, which leaves almost no cushion', 'Coverage is very strong', 'The plan has no risk', 'The payments are too low'], a: 0,
   why: 'Lenders typically want coverage of at least 1.25 times. A thin cushion means a bad year could break the plan.'},
  {q: 'Which of these is a common reason family transfers fail?',
   options: ['The parent keeps making decisions after transferring ownership', 'The successor has outside work experience', 'The plan was tested financially', 'Siblings were informed early'], a: 0,
   why: 'Transferring ownership without transferring authority confuses employees and frustrates the successor.'}
],
exercise: `
<p>Redesign the worked example so the parents receive at least $250,000 a year and the business has coverage of at least 1.5 times. You may change the sale portion, the note term, the interest rate, the rent, or add a consulting agreement. Show your numbers and explain the trade-offs of your design to the parents and to the daughter.</p>`,
discussion: `
<p>A father wants to hand the business to his son, who has worked there for 15 years. You sense the son is not interested but will not say so in front of his father. What would you do?</p>`,
resources: [
  {title: 'Generation to Generation', by: 'Gersick, Davis, Hampton, Lansberg', note: 'Background on succession within the family system.'},
  {title: 'Perpetuating the Family Business', by: 'John L. Ward', note: 'Practical lessons from long-lasting family companies on succession and continuity.'}
]
},

/* =====================================================================
   6.3 MANAGEMENT BUYOUTS AND ESOPS
   ===================================================================== */
{
id: 'm06-l03', minutes: 30,
objectives: [
  'Explain how a management buyout is typically financed',
  'Describe how a leveraged ESOP transaction works step by step',
  'Identify which businesses fit an ESOP',
  'Explain the ESOP repurchase obligation'
],
body: `
<div class="call plain"><span class="tag">Summary</span>
<p>Selling to the people who already run the business keeps the company intact and rewards loyal employees. The challenge is that managers and employees rarely have the money to buy it. So the business itself, through borrowing and future profits, ends up paying for its own purchase, and the owner usually carries part of the risk by accepting payments over time.</p>
</div>

<h2>Management buyouts</h2>
<p>In an MBO, one or more managers buy the business. A typical financing stack:</p>
<table>
<tr><th>Source</th><th>Typical role</th></tr>
<tr><td>Senior bank debt</td><td>The largest piece; secured by the business\'s assets and cash flow. SBA 7(a) loans are common for smaller deals.</td></tr>
<tr><td>Seller note</td><td>The owner finances part of the price, subordinated to the bank</td></tr>
<tr><td>Management equity</td><td>Usually small, but lenders want managers to have real money at risk</td></tr>
<tr><td>Outside equity (optional)</td><td>A private equity firm or family office backs management in exchange for a stake</td></tr>
</table>
<p>MBO prices tend to be lower than strategic prices because the buyers have limited capital and no synergies. The owner usually receives less cash at closing and more over time, which means the owner\'s retirement depends partly on the managers\' success.</p>
<p>The key questions are: can the managers run the business without the owner? Can the business service the debt? And does the owner have the patience to be paid over time?</p>

<h2>ESOPs</h2>
<p>An employee stock ownership plan is a qualified retirement plan, governed by ERISA and overseen by the Department of Labor, that invests primarily in company stock. It allows an owner to sell some or all of the business to a trust for the benefit of employees.</p>
<h3>How a leveraged ESOP transaction works</h3>
<ol>
<li>The company sets up an ESOP and a trust. An <b>independent trustee</b> represents the employees\' interests.</li>
<li>An <b>independent appraiser</b> determines fair market value. The ESOP cannot pay more than fair market value.</li>
<li>The company borrows from a bank (the outside loan) and lends the money to the ESOP (the inside loan). The owner often also takes a seller note.</li>
<li>The ESOP buys the owner\'s shares.</li>
<li>Each year, the company makes tax-deductible contributions to the ESOP, which uses them to repay the inside loan. The company uses that money to repay the bank.</li>
<li>As the loan is repaid, shares are allocated to employees\' accounts, typically in proportion to pay.</li>
<li>When employees retire or leave, the company buys back their vested shares. This is the <b>repurchase obligation</b>.</li>
</ol>
<h3>Tax advantages</h3>
<ul>
<li>In a C corporation, contributions to repay the loan (within limits) are deductible, and the selling owner may defer gain under section 1042 (Lesson 3.4).</li>
<li>In an S corporation, the ESOP\'s share of profits is not subject to federal income tax. A 100% ESOP-owned S corporation generally pays no federal income tax, freeing cash to repay debt.</li>
</ul>
<h3>Which businesses fit</h3>
<ul>
<li>Stable, predictable cash flow that can support debt</li>
<li>Enough profit and payroll to justify the setup and ongoing costs (appraisals, trustee, administration). Advisors often cite a minimum of roughly $1 million or more of EBITDA and a few dozen employees, though this varies.</li>
<li>A capable management team that will stay</li>
<li>An owner who values legacy and employees and accepts fair market value (no strategic premium)</li>
</ul>
<h3>Watch-outs</h3>
<ul>
<li>The repurchase obligation grows over time and must be planned for.</li>
<li>Employee ownership does not by itself create an ownership culture. Communication and engagement matter.</li>
<li>Regulatory compliance and fiduciary oversight are ongoing costs.</li>
<li>The owner often receives much of the price over time through seller notes, which may carry warrants to compensate for the risk.</li>
</ul>

<div class="call example"><span class="tag">Worked example: an owner weighs an MBO against an ESOP</span>
<p>A 64-year-old owner of an Oahu mechanical contractor with $2.5 million of EBITDA, 80 employees, and a strong management team wants to protect the company\'s culture.</p>
<ul>
<li><b>MBO:</b> three managers can raise $300,000 among them. The bank will lend about 3 times EBITDA. The owner would need to carry a large seller note, and the managers would own it all.</li>
<li><b>ESOP:</b> an S corporation ESOP, at fair market value of about $12 million, financed with bank debt and a seller note. All 80 employees share in ownership. As an S corporation owned 100% by the ESOP, the company would pay no federal income tax, making debt repayment faster. Key managers get synthetic equity or incentive plans to keep them.</li>
</ul>
<p>Neither is automatically better. The choice depends on the owner\'s priorities, the managers\' ambitions, the company\'s debt capacity, and the tax picture. Both are strong candidates for this owner, which is why presenting both matters.</p>
</div>

<div class="call hawaii"><span class="tag">Bank role</span>
<p>MBOs and ESOPs both depend on bank financing, and the commercial banker\'s view of debt capacity often sets the practical boundaries. These transactions also keep the business local and the banking relationship intact, which aligns the client\'s goals with the bank\'s. Coordinating early with commercial banking avoids designing a deal the bank cannot finance.</p>
</div>

<h2>Relevance to the role</h2>
<div class="call why"><span class="tag">Application</span>
<p>Internal transfers are a large part of exit planning, especially for owners who care about legacy. Understanding their mechanics, financing limits, and fit criteria lets you identify candidates early and bring in ESOP specialists and commercial bankers at the right time.</p></div>
`,
terms: [
  ['Management buyout (MBO)', 'A purchase of the business by its existing managers, usually financed with debt and seller notes.'],
  ['ESOP', 'Employee stock ownership plan. A qualified retirement plan that holds company stock for employees.'],
  ['Independent trustee', 'A fiduciary who represents ESOP participants in a transaction and ensures the ESOP does not overpay.'],
  ['Inside and outside loans', 'In a leveraged ESOP, the bank lends to the company (outside), which lends to the ESOP (inside).'],
  ['Repurchase obligation', 'The company\'s obligation to buy back shares from departing ESOP participants.'],
  ['Synthetic equity', 'Incentive arrangements such as phantom stock or stock appreciation rights that give value without actual shares.'],
  ['Warrants', 'Rights to buy shares in the future, often given to sellers who finance ESOP deals to compensate for risk.']
],
quiz: [
  {q: 'What is the maximum price an ESOP can pay for company stock?',
   options: ['Fair market value, as determined by an independent appraiser', 'Whatever the owner asks', 'The highest strategic offer', 'Book value'], a: 0,
   why: 'ERISA rules prohibit the ESOP from paying more than fair market value.'},
  {q: 'Why does a 100% ESOP-owned S corporation often repay acquisition debt faster?',
   options: ['It generally pays no federal income tax, leaving more cash for debt service', 'ESOPs receive government grants', 'Banks forgive ESOP loans', 'Employees contribute their salaries'], a: 0,
   why: 'The ESOP\'s share of S corporation income is not taxed federally.'},
  {q: 'What is the ESOP repurchase obligation?',
   options: ['The company\'s obligation to buy back shares from employees who retire or leave', 'The owner\'s obligation to buy back the company', 'The bank\'s obligation to buy shares', 'An obligation to repurchase equipment'], a: 0,
   why: 'It grows as the company\'s value and employee account balances grow, and must be planned for.'},
  {q: 'In a management buyout, why does the owner often accept a seller note?',
   options: ['Managers rarely have enough capital, and bank debt covers only part of the price', 'Seller notes are required by law', 'It increases the price automatically', 'Banks refuse to lend for MBOs'], a: 0,
   why: 'The seller note fills the gap between the price and what the bank and managers can provide.'},
  {q: 'Which business is the weakest ESOP candidate?',
   options: ['A company with volatile earnings, 8 employees, and no management beyond the owner', 'A profitable company with 120 employees and a strong management team', 'A stable distributor with $3 million EBITDA', 'A company whose owner values employee ownership'], a: 0,
   why: 'ESOPs need stable cash flow, enough scale to justify costs, and management to run the company.'}
],
exercise: `
<p>Write a one-page "Is an ESOP worth exploring?" screening checklist that an advisor could use in a first or second meeting. Include at least eight questions and, for each, what answer would make an ESOP more or less promising.</p>`,
discussion: `
<p>An owner loves the idea of rewarding employees with an ESOP, but she has also heard a strategic buyer might pay 30% more. How would you help her weigh the two? What information would each side of the decision need?</p>`,
resources: [
  {title: 'National Center for Employee Ownership (NCEO)', by: 'nceo.org', url: 'https://www.nceo.org/', note: 'The best starting point for ESOP mechanics, fit, and research on employee-owned companies.'},
  {title: 'The ESOP Association', by: 'esopassociation.org', url: 'https://www.esopassociation.org/', note: 'Trade association for ESOP companies, with practitioner resources.'}
]
},

/* =====================================================================
   6.4 STRATEGIC, PE, AND RECAPS
   ===================================================================== */
{
id: 'm06-l04', minutes: 30,
objectives: [
  'Explain how strategic and financial buyers value and run acquisitions',
  'Describe platform and add-on acquisitions in private equity',
  'Explain rollover equity and the "second bite of the apple"',
  'Describe other external buyers: family offices, independent sponsors, search funds'
],
body: `
<div class="call plain"><span class="tag">Summary</span>
<p>Outside buyers come in a few types, and each has a different reason for buying. Strategic buyers want your business because it fits theirs. Private equity firms want to grow it and sell it again in a few years. Individual and search fund buyers want a good business to run. Knowing what each buyer is really after helps the owner understand their offers and decide which kind of buyer fits their goals.</p>
</div>

<h2>Strategic buyers</h2>
<p>Companies in the same or related industries buy for:</p>
<ul>
<li>Market entry (a mainland company entering Hawaii)</li>
<li>Customers, products, or capabilities they lack</li>
<li>Cost synergies from combining operations</li>
<li>Eliminating a competitor</li>
</ul>
<p>Because synergies create value only they can capture, strategic buyers can pay more. They also usually integrate the business: the name may change, back-office roles may be consolidated, and the owner\'s role typically ends quickly.</p>

<h2>Private equity</h2>
<p>Private equity (PE) firms raise funds from investors, buy companies, work to increase their value over roughly three to seven years, and then sell. They use debt to finance part of each purchase, which increases returns when things go well.</p>
<ul>
<li><b>Platform acquisition:</b> the first, larger company a PE firm buys in an industry. It needs strong management because it will be the base for growth.</li>
<li><b>Add-on (bolt-on) acquisition:</b> smaller companies bought and merged into the platform. Add-ons often sell at lower multiples than platforms, but the combined company sells at a higher multiple. This is the logic of a roll-up.</li>
<li><b>Management:</b> PE usually wants existing management to stay and often gives them equity incentives.</li>
<li><b>Rollover equity:</b> sellers are usually asked to reinvest 10% to 30% of their proceeds in the new company, aligning their interests with the buyer.</li>
</ul>

<div class="call example"><span class="tag">Worked example: the second bite of the apple</span>
<p>An owner sells to a PE platform at an enterprise value of $20 million and rolls over 20% of her equity, about $4 million, into the new holding company. She receives the rest in cash (less debt, fees, and taxes).</p>
<p>Over five years, the PE firm acquires several add-ons, grows EBITDA, and sells the combined company at a higher multiple. If the equity value of her stake grows 2.5 times, her $4 million becomes $10 million: a second payout.</p>
<p>The risks: the PE firm uses significant debt, so if results disappoint, the rollover equity can shrink or be wiped out. She will not control the timing of the second sale. Rollover equity should be treated as uncertain upside in her financial plan, not as money she can count on.</p>
</div>

<h2>Recapitalizations</h2>
<ul>
<li><b>Majority recap:</b> the owner sells a controlling stake (often 60% to 80%) to a PE firm and keeps the rest. The owner gets liquidity now and upside later, and often stays as CEO for a transition period.</li>
<li><b>Minority recap:</b> the owner sells a minority stake to an investor, keeps control, and uses the capital to grow or to diversify personal wealth. Minority investors typically negotiate protective rights and an eventual exit.</li>
</ul>

<h2>Other buyers</h2>
<ul>
<li><b>Family offices:</b> investment firms for wealthy families. They may hold businesses longer than PE and can be a good fit for owners who dislike the idea of a resale.</li>
<li><b>Independent sponsors:</b> dealmakers who find a company first and then raise equity for that one deal.</li>
<li><b>Search funds:</b> usually a young professional backed by investors who searches for one business to buy and run. Common for companies with roughly $1 million to $5 million of EBITDA.</li>
<li><b>Individual buyers:</b> people buying a business to run themselves, often with SBA financing, typically for smaller companies.</li>
</ul>

<div class="call hawaii"><span class="tag">Hawaii context</span>
<p>PE-backed roll-ups have been active in service industries that exist throughout Hawaii: HVAC, plumbing, electrical, landscaping, pest control, dental, veterinary, and accounting, among others. Many Hawaii owners in these industries receive unsolicited letters from platforms. Helping owners understand what those buyers are really offering (and what questions to ask) before they respond is a valuable early service, and a natural reason to call a client.</p>
</div>

<h2>Relevance to the role</h2>
<div class="call why"><span class="tag">Application</span>
<p>You will not run sale processes; investment bankers and brokers do. But owners will bring you offers and letters and ask what they mean. Understanding buyer types, rollover equity, and recapitalizations lets you help owners ask the right questions and connect them to the right advisors.</p></div>
`,
terms: [
  ['Private equity (PE)', 'Investment firms that buy companies using investor funds and debt, aiming to increase value and sell within a few years.'],
  ['Platform acquisition', 'A PE firm\'s first, larger acquisition in an industry, used as a base for add-ons.'],
  ['Add-on (bolt-on)', 'A smaller acquisition merged into an existing platform company.'],
  ['Rollover equity', 'Sale proceeds a seller reinvests in the buyer\'s company.'],
  ['Second bite of the apple', 'A seller\'s additional payout when the buyer later sells the company and the rollover equity is cashed out.'],
  ['Majority / minority recap', 'Selling a controlling or non-controlling stake to an investor while keeping part of the business.'],
  ['Family office', 'An investment firm serving one or a few wealthy families, often with a longer holding period than PE.'],
  ['Search fund', 'An investor-backed vehicle for an individual to find, buy, and run one business.']
],
quiz: [
  {q: 'Why do PE firms ask sellers to roll over part of their equity?',
   options: ['To align the seller\'s interests with the new owners\' success', 'To reduce the seller\'s taxes to zero', 'Because banks require it by law', 'To avoid paying the seller'], a: 0,
   why: 'A seller with money at risk is motivated to help the transition succeed.'},
  {q: 'What is an add-on acquisition?',
   options: ['A smaller company bought and merged into an existing platform', 'The first acquisition a PE firm makes', 'A loan to a company', 'An earnout payment'], a: 0,
   why: 'Add-ons build the platform and are central to roll-up strategies.'},
  {q: 'An owner wants some liquidity now but wants to keep running and controlling the company. Which option fits best?',
   options: ['A minority recapitalization', 'A sale to a strategic buyer', 'An orderly wind-down', 'A majority sale to PE'], a: 0,
   why: 'A minority recap provides cash while the owner keeps control.'},
  {q: 'What is the main risk of rollover equity?',
   options: ['The new company\'s debt and performance could reduce or eliminate its value, and the seller does not control timing', 'It is always taxed at 50%', 'It must be sold within one year', 'It guarantees a lower price'], a: 0,
   why: 'Rollover equity is uncertain and illiquid, so it should not fund essential needs.'},
  {q: 'Which buyer type is most associated with longer holding periods than PE?',
   options: ['Family offices', 'Search funds', 'Independent sponsors', 'Add-on acquirers'], a: 0,
   why: 'Family offices often invest with longer horizons and may not plan a quick resale.'}
],
exercise: `
<p>An HVAC owner in Honolulu receives a letter from a mainland PE-backed platform expressing interest in "partnering." Write a list of ten questions the owner should ask (or have an advisor ask) before responding, covering price, structure, rollover, role after closing, employees, the company name, and the platform\'s plans. Then note which bank partners and outside advisors should be involved.</p>`,
discussion: `
<p>Some owners feel uneasy about PE ("they'll strip the company and flip it"). Others are excited about the second bite. How would you help an owner form a balanced view of what a PE deal would mean for them and their employees?</p>`,
resources: [
  {title: 'The Art of Selling Your Business', by: 'John Warrillow', note: 'Covers PE, strategic buyers, rollover, and recaps from the seller\'s perspective.'},
  {title: 'Built to Sell Radio', by: 'John Warrillow', note: 'Many episodes feature owners who sold to PE and describe their experience with rollover and post-sale life.'}
]
},

/* =====================================================================
   6.5 COMPARING OPTIONS
   ===================================================================== */
{
id: 'm06-l05', minutes: 25,
objectives: [
  'Build a weighted decision matrix from the owner\'s goals',
  'Compare exit options on after-tax, risk-adjusted proceeds',
  'Recognize when readiness, not preference, limits the options'
],
body: `
<div class="call plain"><span class="tag">Summary</span>
<p>Once an owner sees the options, they need a way to choose. The best method starts with what the owner cares about, weights those goals, and scores each realistic option against them. It turns a vague, emotional decision into a structured conversation, while still leaving the choice to the owner.</p>
</div>

<h2>Start with the owner\'s goals</h2>
<p>Common criteria:</p>
<ul>
<li>After-tax proceeds</li>
<li>Certainty of payment (cash at close versus notes, earnouts, and rollover)</li>
<li>Timing (how soon, and how long the transition takes)</li>
<li>Legacy: keeping the company\'s name, culture, and local ownership</li>
<li>Employees: jobs, benefits, and opportunities</li>
<li>Family: harmony, roles for family members, and fairness</li>
<li>Owner\'s role after the transition</li>
<li>Complexity and risk after closing</li>
</ul>
<p>Ask the owner to weight them. The act of weighting often reveals priorities the owner had not stated, or conflicts between spouses.</p>

<div class="call example"><span class="tag">Worked example: a weighted decision matrix</span>
<p>Weights set by the owner (totaling 100). Scores from 1 (poor) to 5 (excellent), developed with the advisory team.</p>
<table>
<tr><th>Criterion</th><th class="n">Weight</th><th class="n">Strategic</th><th class="n">PE recap</th><th class="n">MBO</th><th class="n">ESOP</th></tr>
<tr><td>After-tax proceeds</td><td class="n">30</td><td class="n">5</td><td class="n">4</td><td class="n">2</td><td class="n">3</td></tr>
<tr><td>Certainty of payment</td><td class="n">20</td><td class="n">5</td><td class="n">3</td><td class="n">2</td><td class="n">3</td></tr>
<tr><td>Employees and legacy</td><td class="n">25</td><td class="n">2</td><td class="n">3</td><td class="n">5</td><td class="n">5</td></tr>
<tr><td>Owner\'s role after</td><td class="n">10</td><td class="n">2</td><td class="n">4</td><td class="n">4</td><td class="n">4</td></tr>
<tr><td>Simplicity</td><td class="n">15</td><td class="n">4</td><td class="n">3</td><td class="n">3</td><td class="n">2</td></tr>
<tr class="tot"><td>Weighted score (out of 500)</td><td></td><td class="n">380</td><td class="n">340</td><td class="n">310</td><td class="n">345</td></tr>
</table>
<p>The strategic sale scores highest, with the ESOP second. If the owner had weighted employees and legacy at 40 and proceeds at 15, the ESOP would win (375 to 335). The matrix does not decide for the owner. It shows how their priorities lead to an answer, and how sensitive that answer is to the weights.</p>
</div>

<h2>Risk-adjusted proceeds</h2>
<p>When comparing money across options, compare like with like: after-tax, and adjusted for timing and risk. A $10 million all-cash strategic sale and a $10 million MBO paid over seven years are not equal. Discounting future payments and reducing contingent amounts by their probability of payment gives a fairer comparison. Your FP&amp;A skills apply directly.</p>

<h2>Readiness constraints</h2>
<p>Sometimes the owner\'s preferred option is not available yet:</p>
<ul>
<li>An MBO needs managers who can run the business.</li>
<li>A family transfer needs a ready successor.</li>
<li>A PE platform deal needs scale and a management team.</li>
<li>A strong strategic sale needs a business that is attractive and transferable.</li>
</ul>
<p>When the preferred option is not yet available, the plan is to build readiness toward it, which is where value acceleration (Module 8) comes in.</p>

<div class="call hawaii"><span class="tag">Hawaii scenario</span>
<p>An owner of a Kauai hardware and building supply chain, 68, scores a local family office offer higher than a mainland strategic offer that was 15% larger, because she weighted keeping the stores locally run and employees retained at 40%. Her children, who will inherit part of the proceeds, would have weighted things differently. A family meeting where everyone sees the matrix, and the owner explains her weights, can prevent resentment later.</p>
</div>

<h2>Relevance to the role</h2>
<div class="call why"><span class="tag">Application</span>
<p>A decision matrix is a strong client-ready material: simple, visual, and anchored in the owner\'s own priorities. It turns "decision considerations," a phrase from the job description, into something an owner can use at a kitchen table.</p></div>
`,
terms: [
  ['Decision matrix', 'A table that scores options against weighted criteria to structure a decision.'],
  ['Risk-adjusted proceeds', 'Proceeds adjusted for taxes, timing, and the probability of receiving contingent amounts.'],
  ['Readiness constraint', 'A gap in business, successor, or management readiness that makes an option unavailable until addressed.']
],
quiz: [
  {q: 'Why should the owner set the weights in a decision matrix?',
   options: ['The best option depends on the owner\'s priorities, and weighting reveals them', 'Advisors are not allowed to set weights', 'Weights do not matter', 'To make the strategic sale win'], a: 0,
   why: 'The matrix structures the owner\'s own decision.'},
  {q: 'How should a $10 million all-cash offer be compared with a $10 million offer paid over seven years?',
   options: ['Discount the future payments and adjust for the risk of non-payment', 'Treat them as equal', 'Prefer the seven-year offer because it is longer', 'Ignore taxes'], a: 0,
   why: 'Money later and at risk is worth less than money now.'},
  {q: 'An owner prefers an MBO but has no managers capable of running the business. What is the plan?',
   options: ['Build management readiness over time, or consider other options', 'Proceed with the MBO immediately', 'Sell to the managers anyway', 'Abandon planning'], a: 0,
   why: 'Readiness constraints turn preferences into development goals.'},
  {q: 'What is the main benefit of showing family members the owner\'s decision matrix?',
   options: ['It explains the reasoning and can prevent resentment about the choice', 'It lets family members veto the decision', 'It is legally required', 'It increases the sale price'], a: 0,
   why: 'Transparency about priorities helps families accept decisions.'},
  {q: 'If an owner\'s weights change and a different option wins, what does that show?',
   options: ['The decision is sensitive to priorities, so the owner should be confident in the weights', 'The matrix is broken', 'The first answer was correct', 'The advisor chose the weights badly'], a: 0,
   why: 'Sensitivity testing is part of using a matrix well.'}
],
exercise: `
<p>Build a decision matrix in a spreadsheet for an owner of your choice (real or invented). Include at least six criteria, four options, and a sensitivity section that shows how the ranking changes if the top two weights are swapped. Write three sentences summarizing the result for the owner.</p>`,
discussion: `
<p>What would you do if a husband and wife, co-owners of a business, weight the criteria very differently? How would you structure that conversation?</p>`,
resources: [
  {title: 'Walking to Destiny', by: 'Christopher M. Snider', note: 'EPI\'s approach to aligning exit options with business, personal, and financial goals.'}
]
}
]);
