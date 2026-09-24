FBE.add([
/* =====================================================================
   18.1 CASE: THE SECOND-GENERATION HVAC COMPANY
   ===================================================================== */
{
id: 'm18-l01', minutes: 60,
objectives: [
  'Evaluate a private equity offer on after-tax, risk-adjusted terms',
  'Recognize a C corporation structure problem before an LOI',
  'Assess a family successor against a buyer\'s timeline',
  'Recommend next steps that keep the owner\'s options open'
],
body: `
<div class="call plain"><span class="tag">How to use the capstone cases</span>
<p>Each case pulls together several modules. Read the case, write your answers in the exercise box, then open the model answer. The model answer is one reasonable approach. Where your reasoning differs, bring it to your mentor in chat.</p>
</div>

<h2>The case: Island Air Mechanical</h2>
<ul>
<li>Maui commercial and residential HVAC company, founded 1978 by Dean\'s father. Dean, 60, has owned it since 2004. 48 employees.</li>
<li><b>Entity:</b> C corporation since 1978. Dean\'s stock basis is minimal.</li>
<li><b>Financials:</b> revenue $16 million; adjusted EBITDA $2.2 million (normalization done and reviewed by the CPA). Bank debt $1.0 million.</li>
<li><b>Revenue:</b> 55% from service agreements with hotels, condos, and commercial buildings. Largest customer 12%.</li>
<li><b>People:</b> a strong service manager (15 years). Dean runs all sales and major bids. No retention agreements.</li>
<li><b>Family:</b> son Brandon, 29, an HVAC technician at the company for four years. Well liked by the crews. Has never managed people or seen the financials. Dean\'s wife Carla, 58, wants Dean to slow down. Their daughter lives in Denver.</li>
<li><b>Personal finances:</b> about $2.5 million outside the business, including the home. Dean has not worked out what he needs.</li>
<li><b>The offer:</b> a PE-backed national HVAC platform has sent a non-binding proposal at 6 times adjusted EBITDA: 70% cash at closing, 20% rollover equity, 10% earnout over two years. It says "asset purchase." Dean would stay for 18 months. They want an LOI signed within 30 days.</li>
<li>Dean tells you: "It\'s a great number. But I always pictured Brandon running this someday."</li>
</ul>

<h2>Your tasks</h2>
<ol>
<li>Break the offer into its components and estimate Dean\'s after-tax cash at closing. Use about 31% as his combined personal tax rate on capital gains, about 26% as the combined corporate rate, and $400,000 of transaction costs.</li>
<li>Explain the structure issue and what Dean should ask the buyer.</li>
<li>Assess Brandon as a successor on competence, commitment, and credibility, and on timing.</li>
<li>List what Dean needs to know before deciding whether to sign an LOI.</li>
<li>Recommend next steps for the next 30 days, including which partners to involve.</li>
</ol>

<details><summary>Model answer (open after you finish)</summary>
<h3>1. The offer</h3>
<table>
<tr><th>Component</th><th class="n">Amount</th></tr>
<tr><td>Enterprise value (6 x $2.2M)</td><td class="n">$13,200,000</td></tr>
<tr><td>Cash at closing (70%)</td><td class="n">9,240,000</td></tr>
<tr><td>Rollover equity (20%)</td><td class="n">2,640,000</td></tr>
<tr><td>Earnout (10%)</td><td class="n">1,320,000</td></tr>
</table>
<p>Cash at closing less $1.0 million of debt and $400,000 of costs leaves about <b>$7.84 million</b> before tax.</p>
<table>
<tr><th>Structure</th><th class="n">After-tax cash at closing (illustrative)</th></tr>
<tr><td>Stock sale: one layer of tax at about 31%</td><td class="n">about $5.4 million</td></tr>
<tr><td>Asset sale by a C corporation: about 26% corporate tax, then about 31% on distribution</td><td class="n">about $4.0 million</td></tr>
</table>
<p>The asset structure could cost Dean roughly <b>$1.4 million</b> of the cash he receives at closing. The rollover and earnout are additional and uncertain, and how the rollover is taxed also depends on structure.</p>

<h3>2. The structure issue</h3>
<p>A C corporation asset sale is taxed twice (Lesson 3.3). Dean should not sign an LOI that says "asset purchase" without his CPA modeling the difference. Questions for the buyer: would they do a stock purchase? If they need asset treatment, will they gross up the price? Is there a personal goodwill argument for part of the price? Can the rollover be structured to defer tax? These must be settled in the LOI, when Dean still has leverage.</p>

<h3>3. Brandon</h3>
<ul>
<li><b>Competence:</b> strong technically, but no management, sales, or financial experience.</li>
<li><b>Commitment:</b> unknown. Nobody has asked him directly.</li>
<li><b>Credibility:</b> good with crews; unknown with customers and the bank.</li>
<li><b>Timing:</b> realistically five or more years to be ready to lead a $16 million company. The buyer wants an answer in 30 days.</li>
</ul>
<p>This offer and a family succession plan cannot both be pursued on the buyer\'s timeline. Dean needs to find out what Brandon wants before he decides.</p>

<h3>4. What Dean needs to know first</h3>
<ul>
<li>His number and wealth gap: does he need this price, or does he have room to choose?</li>
<li>Brandon\'s real interest, in a direct conversation.</li>
<li>The after-tax difference between structures, from his CPA.</li>
<li>What other buyers might pay: one unsolicited offer is not a market test.</li>
<li>What happens to employees, the name, and Brandon under the platform. Could Brandon build a career inside the platform?</li>
<li>What his 18 months as an employee would actually look like.</li>
</ul>

<h3>5. Next 30 days</h3>
<ul>
<li>Tell the buyer Dean is interested but needs time to consult his advisors. Serious buyers will usually wait.</li>
<li>CPA meeting on structure (this week).</li>
<li>Wealth planner builds a quick number for Dean and Carla.</li>
<li>A family conversation with Brandon (and Carla) about what he wants.</li>
<li>Discuss with an M&amp;A advisor whether to test the market.</li>
<li>Retention agreement for the service manager, whatever path is chosen.</li>
<li>Internal partners: wealth planning, commercial banking (the loan and a possible future family financing), trust and estate (any pre-LOI gifting, Lesson 11.1).</li>
</ul>
</details>
`,
terms: [],
quiz: [
  {q: 'The Island Air offer says "asset purchase." What is the main concern for Dean?',
   options: ['As a C corporation, an asset sale creates two layers of tax', 'Asset purchases are illegal for HVAC companies', 'Asset purchases always lower the headline price', 'There is no concern'], a: 0,
   why: 'Corporate tax on the sale, then personal tax on the distribution.'},
  {q: 'Why should Dean not rush to sign an LOI within 30 days?',
   options: ['Structure, his number, family intentions, and market alternatives are all unresolved, and leverage shifts after the LOI', 'LOIs are always binding on price', 'The buyer will certainly raise the price', 'Signing is illegal without a valuation'], a: 0,
   why: 'Key terms and decisions must be settled while he has leverage.'},
  {q: 'How should the 10% earnout be treated in Dean\'s financial plan?',
   options: ['As uncertain upside', 'As guaranteed cash', 'As part of the cash at closing', 'As a tax deduction'], a: 0,
   why: 'Earnouts often pay less than the maximum.'},
  {q: 'What is the most important question to ask Brandon?',
   options: ['Whether he actually wants to lead the business, and on what timeline', 'Whether he likes HVAC', 'Whether he wants the business sold', 'What his salary is'], a: 0,
   why: 'Commitment is unknown and determines whether succession is a real option.'},
  {q: 'Which action protects value regardless of which path Dean chooses?',
   options: ['A retention agreement for the service manager', 'Signing the LOI immediately', 'Firing the sales staff', 'Converting to a partnership'], a: 0,
   why: 'Key employee retention matters for any buyer or successor.'}
],
exercise: `<p>Write your answers to the five tasks here before opening the model answer.</p>`,
discussion: `<p>If Dean\'s number shows he needs the full price, and Brandon says he wants to run the company, how would you help the family think about the trade-off?</p>`,
resources: [
  {title: 'Review: Lessons 3.3, 6.4, 7.2, 10.3, 11.1', by: 'This program', note: 'The case draws on C corporation asset sales, PE rollover, deal terms, successor readiness, and pre-LOI planning windows.'}
]
},

/* =====================================================================
   18.2 CASE: THE FAMILY RESTAURANT GROUP
   ===================================================================== */
{
id: 'm18-l02', minutes: 60,
objectives: [
  'Normalize earnings with a negative owner compensation adjustment',
  'Design a sibling buyout that keeps the family together',
  'Use real estate to address fairness',
  'Recommend governance for a sibling partnership'
],
body: `
<h2>The case: Hale Ono Restaurants</h2>
<ul>
<li>Three casual dining restaurants on Oahu, founded by the siblings\' parents in 1985. Both parents have died.</li>
<li><b>Ownership:</b> three siblings each own one third of the operating company (an S corporation) and one third of Hale Ono Properties LLC, which owns the land and buildings for two of the restaurants (appraised at $9 million). The third restaurant is on a ground lease with 14 years remaining and a rent reset in 4 years.</li>
<li><b>Siblings:</b> Keith, 52, runs the company and has for 20 years. Paul, 47, is a teacher on Oahu. Lynn, 41, lives in Seattle.</li>
<li><b>Financials:</b> the operating company\'s EBITDA is $1.40 million after paying market rent to the LLC. Keith pays himself $150,000. A general manager for a group this size would cost about $220,000.</li>
<li><b>The conflict:</b> Keith wants to renovate one restaurant ($1.2 million) and open a fourth. Paul and Lynn want distributions and feel Keith treats the business as his. Keith feels underpaid and unappreciated. There is no shareholder agreement or buy-sell agreement. Family dinners have become tense.</li>
<li>Keith has asked the bank whether he could buy out his siblings\' shares of the operating company.</li>
<li>Assume casual dining groups of this size trade at roughly 3.5 to 4.5 times adjusted EBITDA.</li>
</ul>

<h2>Your tasks</h2>
<ol>
<li>Normalize EBITDA and estimate a value range for the operating company.</li>
<li>Identify the main issues, using the three-circle model.</li>
<li>Design a buyout of Paul and Lynn\'s operating company shares that the business can finance.</li>
<li>Explain what should happen with Hale Ono Properties.</li>
<li>Recommend governance and documents for whatever structure remains.</li>
</ol>

<details><summary>Model answer (open after you finish)</summary>
<h3>1. Normalization and value</h3>
<p>Keith is <b>underpaid</b> by $70,000 relative to market, so this is a negative adjustment: $1.40 million - $0.07 million = <b>$1.33 million</b> adjusted EBITDA. At 3.5 to 4.5 times, the operating company is worth roughly <b>$4.7 million to $6.0 million</b>. The ground lease remaining term and the upcoming rent reset are risks a buyer or lender will weigh, which argues for the lower half of the range.</p>
<p>Keith\'s underpayment is also part of the conflict: he has been subsidizing his siblings\' returns.</p>

<h3>2. Issues through the three circles</h3>
<ul>
<li>Keith (family, owner, employee) wants control and fair pay. Paul and Lynn (family, owner, not employed) want returns and information.</li>
<li>No distribution policy, so every capital decision becomes a family fight.</li>
<li>No buy-sell agreement: a sibling\'s death or divorce could bring in new owners.</li>
<li>The ground lease threatens one restaurant\'s value and financing.</li>
</ul>

<h3>3. A buyout</h3>
<p>Paul and Lynn together own two thirds of the operating company. At a midpoint of about $5.3 million, their pro rata share is about $3.5 million. As minority owners they might accept a negotiated discount, but a harmonious outcome may matter more than squeezing the price. A negotiated price around $3.0 to $3.5 million is a reasonable starting range for discussion, supported by an independent appraisal.</p>
<p>Financing: bank or SBA financing to Keith (or the company redeeming the shares), plus seller notes from Paul and Lynn paid over five to seven years. The commercial banker should test coverage (Lesson 7.4). With $1.33 million of EBITDA, maintenance capital needs, and taxes, the business can likely carry this only if the fourth restaurant waits.</p>

<h3>4. Hale Ono Properties</h3>
<p>Keep the LLC owned equally by all three siblings. The operating company continues to pay market rent. Paul and Lynn keep a steady income stream and a share in the family\'s most valuable asset, which addresses fairness directly. Keith keeps secure long-term leases for his restaurants. An LLC operating agreement should cover management, distributions, transfer restrictions, and how a sibling could sell out of the LLC someday.</p>

<h3>5. Governance and documents</h3>
<ul>
<li>A buy-sell agreement for the operating company (if any shares remain shared) and transfer restrictions in the LLC agreement.</li>
<li>Keith\'s compensation moved to market and set by an objective process.</li>
<li>An LLC distribution policy.</li>
<li>A regular owners\' meeting for the LLC, separate from family gatherings.</li>
<li>An early conversation with the landowner about the ground lease.</li>
<li>Estate plans for each sibling that fit the new structure.</li>
<li>A neutral facilitator for the negotiation, given the tension. The bank advisor should stay neutral, and each sibling should have their own counsel.</li>
</ul>
</details>
`,
terms: [],
quiz: [
  {q: 'Keith is paid $150,000; market is $220,000. How does this affect adjusted EBITDA?',
   options: ['It reduces EBITDA by $70,000', 'It increases EBITDA by $70,000', 'No effect', 'It increases EBITDA by $150,000'], a: 0,
   why: 'Underpayment is a negative adjustment because a buyer would pay market.'},
  {q: 'Why keep the property LLC owned equally by all three siblings?',
   options: ['It gives Paul and Lynn income and a share of the family\'s main asset while Keith owns the operations', 'It avoids all taxes', 'It is required by the ground lease', 'It prevents Keith from paying rent'], a: 0,
   why: 'Real estate is a natural balancing asset.'},
  {q: 'What is the likely trade-off if Keith buys out his siblings with debt?',
   options: ['The fourth restaurant and renovation may need to wait so the business can carry the payments', 'Nothing changes', 'The business will automatically grow', 'The siblings will lose their property'], a: 0,
   why: 'Debt service competes with growth investment.'},
  {q: 'Why should each sibling have their own legal counsel?',
   options: ['Their interests conflict in the buyout', 'It is cheaper', 'Banks require it for all clients', 'The attorney cannot meet with families'], a: 0,
   why: 'Independent advice protects everyone.'},
  {q: 'Why does the ground lease matter for value?',
   options: ['Remaining term and a rent reset add risk for buyers and lenders', 'It raises the multiple', 'It removes the need for rent', 'It is irrelevant to operating companies'], a: 0,
   why: 'Leasehold issues affect value and financing.'}
],
exercise: `<p>Write your answers to the five tasks here before opening the model answer.</p>`,
discussion: `<p>Lynn says, "Keith has been running it like it\'s his for 20 years, and now he wants to buy us out cheap." How would you respond in a family meeting?</p>`,
resources: [
  {title: 'Review: Lessons 2.2, 5.5, 7.4, 10.1, 10.5, 17.2', by: 'This program', note: 'Normalization, discounts, financing, the three circles, fairness, and ground leases.'}
]
},

/* =====================================================================
   18.3 CASE: THE THREE-PARTNER PROFESSIONAL FIRM
   ===================================================================== */
{
id: 'm18-l03', minutes: 50,
objectives: [
  'Update an outdated buy-sell agreement for partners on different timelines',
  'Design a retiring partner buyout funded by the firm',
  'Plan for continuity in a people-dependent business'
],
body: `
<h2>The case: Makai Engineering Group</h2>
<ul>
<li>A Honolulu civil engineering firm (S corporation) with 30 employees.</li>
<li><b>Partners:</b> Alan, 66, owns 40% and wants to retire in two years. Grace, 58, owns 35%. Ken, 44, owns 25%.</li>
<li><b>Value:</b> a recent calculation of value puts the firm at about $6 million on a control basis. Book value is $1.4 million.</li>
<li><b>Buy-sell agreement (2009):</b> price at book value; triggers only for death and retirement at 65; entity redemption funded by company-owned life insurance of $500,000 per partner; lump-sum payment within 90 days.</li>
<li><b>People:</b> Alan holds the firm\'s two largest government client relationships. Two senior engineers (ages 38 and 41) are strong and interested in ownership.</li>
<li>Grace and Ken do not have $2.4 million to buy Alan out, and the firm has $600,000 of cash.</li>
</ul>

<h2>Your tasks</h2>
<ol>
<li>List the problems with the current buy-sell agreement.</li>
<li>Design a retirement buyout for Alan that the firm can afford.</li>
<li>Address client and knowledge transition.</li>
<li>Recommend how to bring in the next generation of owners.</li>
<li>Note what should be reviewed after the Connelly decision.</li>
</ol>

<details><summary>Model answer (open after you finish)</summary>
<h3>1. Buy-sell problems</h3>
<ul>
<li>Book value ($1.4 million) would pay Alan about $560,000 for an interest worth closer to $2.4 million pro rata. Grossly unfair to him or his family.</li>
<li>A realistic price cannot be paid as a 90-day lump sum.</li>
<li>No disability, divorce, or termination triggers.</li>
<li>Insurance of $500,000 per partner is far below realistic values.</li>
<li>Entity redemption with company-owned insurance raises Connelly issues for any partner with a taxable estate.</li>
</ul>

<h3>2. Alan\'s buyout</h3>
<p>Agree on a price based on an appraisal (the partners may agree on whether to apply discounts for a 40% interest). Suppose they agree on $2.2 million. The firm redeems Alan\'s shares with a modest down payment from cash and pays the balance in installments over five to seven years, possibly partly through a consulting or deferred compensation arrangement if the CPA confirms it makes sense. At $2.2 million over six years, principal payments of roughly $370,000 a year plus interest must come from firm cash flow, which should be tested against the firm\'s profits and the other partners\' income expectations.</p>

<h3>3. Client transition</h3>
<p>Engineering firm value depends on people. Over the next two years, Alan should introduce Grace, Ken, and the senior engineers to his government clients and bring them into proposals. Part of his buyout payment can be tied to client retention to align incentives. Note: engineering firms are excluded from QSBS, so that tool does not apply here.</p>

<h3>4. Next-generation owners</h3>
<p>Offer the two senior engineers the chance to buy some of Alan\'s shares over time, possibly financed by the firm or a bank, with vesting. This spreads the buyout burden, retains key people, and prepares the firm for Grace\'s retirement in 7 to 10 years.</p>

<h3>5. After Connelly</h3>
<p>Review whether an entity redemption funded by company-owned insurance still fits each partner\'s estate situation, or whether a cross-purchase or insurance LLC would work better, with updated coverage amounts.</p>
</details>
`,
terms: [],
quiz: [
  {q: 'What is the biggest pricing problem in Makai\'s buy-sell agreement?',
   options: ['Book value is far below the firm\'s realistic value', 'The price is too high', 'It uses an appraisal', 'It has no price'], a: 0,
   why: 'Book value would pay Alan roughly a quarter of pro rata value.'},
  {q: 'How can the firm afford Alan\'s buyout?',
   options: ['Installments over several years from firm cash flow, possibly with next-generation buyers participating', 'A 90-day lump sum from cash', 'Selling to a competitor', 'Ignoring the agreement'], a: 0,
   why: 'Professional firm buyouts are typically paid over time.'},
  {q: 'Why tie part of Alan\'s payment to client retention?',
   options: ['It aligns his incentive to transfer relationships successfully', 'It lowers taxes', 'It is legally required', 'It avoids an appraisal'], a: 0,
   why: 'Value in a professional firm follows relationships.'},
  {q: 'Why is QSBS not relevant here?',
   options: ['Engineering is an excluded field, and the firm is an S corporation', 'QSBS applies only to restaurants', 'The firm is too small', 'QSBS has been repealed'], a: 0,
   why: 'Both the field and the entity type rule it out.'},
  {q: 'Why involve the senior engineers as future owners?',
   options: ['It retains key people, spreads the buyout, and prepares for the next retirement', 'It avoids paying Alan', 'It is required by law', 'It lowers the firm\'s value'], a: 0,
   why: 'Ownership succession needs a pipeline.'}
],
exercise: `<p>Write your answers to the five tasks here before opening the model answer.</p>`,
discussion: `<p>Grace worries that paying Alan for six years will reduce her income just as she approaches her own retirement. How would you address her concern?</p>`,
resources: [
  {title: 'Review: Lessons 4.4, 6.3, 7.4, 10.3', by: 'This program', note: 'Buy-sell agreements, internal buyouts, financing, and succession.'}
]
},

/* =====================================================================
   18.4 CASE: THE LANDHOLDING FAMILY
   ===================================================================== */
{
id: 'm18-l04', minutes: 60,
objectives: [
  'Identify estate tax exposure and liquidity risk for a land-rich family',
  'Recognize the importance of portability elections',
  'Compare tools for keeping land in the family',
  'Recommend governance for heirs with different roles'
],
body: `
<h2>The case: the Medeiros family</h2>
<ul>
<li>Leilani Medeiros, 84, widowed in 2019. Hawaii resident.</li>
<li><b>Assets:</b> a family LLC holding 1,200 acres of ranch and agricultural land on Hawaii Island (appraised at about $28 million, before any discounts); a small cattle and agricultural operation run by her son Joseph (about $2 million); investments and her home (about $3 million). Total about $33 million.</li>
<li>Leilani owns 100% of the LLC. Her husband\'s estate plan left everything to her outright. <b>No one is sure whether a federal estate tax return was filed after his death.</b></li>
<li><b>Children:</b> Joseph, 58, runs the ranch and lives on it. Maria, 55, lives in Hilo. Two others live in California and Oregon.</li>
<li>The family is united that the land "should never be sold." Leilani is in fair health but not insurable at a reasonable cost.</li>
</ul>

<h2>Your tasks</h2>
<ol>
<li>Estimate the rough federal estate tax exposure with and without portability of her husband\'s unused exemption.</li>
<li>Explain the liquidity problem.</li>
<li>List planning options for the estate team to evaluate.</li>
<li>Recommend a governance approach for the land and the four heirs.</li>
</ol>

<details><summary>Model answer (open after you finish)</summary>
<h3>1. Exposure (rough, before discounts and deductions)</h3>
<ul>
<li><b>Without portability:</b> $33 million - $15 million exemption = $18 million taxable x 40% = about <b>$7.2 million</b> federal.</li>
<li><b>With portability:</b> her husband died in 2019, when the exemption was about $11.4 million. If a timely return elected portability and his exemption was unused, her total exemption would be about $26.4 million, leaving about $6.6 million taxable and roughly <b>$2.6 million</b> federal.</li>
<li>Hawaii estate tax applies on top, and state and federal taxes interact (state estate tax is deductible for federal purposes). The estate team will model the combined figure, which could be several million dollars more.</li>
</ul>
<p><b>First action:</b> find out whether a Form 706 was filed and portability elected. This single fact changes the exposure by millions. If it was not filed, the attorney should check whether any late relief is available.</p>

<h3>2. Liquidity</h3>
<p>Liquid assets are about $3 million. The tax could far exceed that and is due nine months after death. The family\'s commitment to never sell the land collides with the math.</p>

<h3>3. Options for the estate team</h3>
<ul>
<li><b>Lifetime gifts of LLC interests</b> to the children or trusts, using her remaining exemption, at values that reflect discounts for non-controlling, non-marketable interests.</li>
<li><b>A conservation easement</b> on part of the land: restricts development forever, can provide an income tax deduction and reduce the land\'s estate value, and fits the family\'s goal of keeping the land as it is. Requires careful appraisal and a qualified land trust.</li>
<li><b>Installment payment of estate tax (section 6166)</b> if the ranch operation qualifies as a closely held business interest. Land held for investment may not qualify, so this needs analysis.</li>
<li><b>Selective sale</b> of a small parcel or development rights to create liquidity while keeping the core ranch.</li>
<li><b>Borrowing</b> against land at death, with the commercial banking team, as a bridge.</li>
<li><b>Life insurance</b> is likely impractical at her age and health, though a quote may still be worth obtaining.</li>
</ul>

<h3>4. Governance</h3>
<ul>
<li>Keep the land in the LLC with an updated operating agreement: management (Joseph as manager, perhaps with a co-manager or professional), distributions, transfer restrictions, and a buyout mechanism for heirs who want out.</li>
<li>Joseph should lease the ranch land at market, so his operation is separated from the land all four share.</li>
<li>Regular family meetings, including the mainland children, possibly virtual.</li>
<li>Consider a corporate trustee or co-trustee for continuity and neutrality among four heirs.</li>
<li>Begin the conversation now, while Leilani can explain her wishes herself.</li>
</ul>
</details>
`,
terms: [],
quiz: [
  {q: 'What is the single most important fact to establish first?',
   options: ['Whether portability of her late husband\'s exemption was elected on a timely estate tax return', 'The ranch\'s annual revenue', 'Which child is oldest', 'The color of the property boundary markers'], a: 0,
   why: 'It changes federal exposure by millions.'},
  {q: 'Why is liquidity a problem for this family?',
   options: ['Estate tax could far exceed liquid assets and is due nine months after death', 'They have too much cash', 'Land cannot be taxed', 'Estate tax is due in 20 years'], a: 0,
   why: 'Land-rich, cash-poor estates face forced sales.'},
  {q: 'How can a conservation easement fit this family\'s goals?',
   options: ['It restricts development permanently, can reduce estate value, and aligns with keeping the land intact', 'It forces the land to be sold', 'It eliminates all taxes', 'It transfers the land to the state'], a: 0,
   why: 'It reduces value and preserves the land.'},
  {q: 'Why should Joseph lease the land at market rent?',
   options: ['It separates his operation from the land all four heirs share, supporting fairness', 'It increases estate tax', 'It is required by the easement', 'It gives Joseph ownership'], a: 0,
   why: 'Clear economics prevent resentment.'},
  {q: 'Why is life insurance likely impractical here?',
   options: ['Leilani is 84 and not insurable at a reasonable cost', 'Insurance is illegal for ranchers', 'Insurance proceeds are always taxed at 100%', 'The family has too much liquidity'], a: 0,
   why: 'Age and health limit insurance options.'}
],
exercise: `<p>Write your answers to the four tasks here before opening the model answer.</p>`,
discussion: `<p>The family says the land must never be sold, but the numbers suggest some land may have to be sold or restricted. How would you raise this with Leilani and her children respectfully?</p>`,
resources: [
  {title: 'Review: Lessons 4.2, 4.3, 5.4, 10.5, 17.2', by: 'This program', note: 'Estate tax, transfer techniques, holding company values, fairness, and Hawaii land.'}
]
},

/* =====================================================================
   18.5 CASE: THE UNPLANNED EXIT
   ===================================================================== */
{
id: 'm18-l05', minutes: 50,
objectives: [
  'Triage a business after an owner\'s sudden incapacity',
  'Coordinate the bank\'s response across partners',
  'Avoid a forced sale and set up a real decision'
],
body: `
<h2>The case: Big Island Supply</h2>
<ul>
<li>A Hilo building materials distributor. Revenue $22 million, adjusted EBITDA $1.8 million. 55 employees. S corporation, 100% owned by Ray Kaneshiro, 69.</li>
<li>Ray suffered a serious stroke last week. Doctors expect a long recovery; he may not return to work.</li>
<li>His wife, Sharon, 67, has never worked in the business. Their daughter Tami, 40, is a CPA in Honolulu. Their son lives in Las Vegas.</li>
<li>Ray signed a revocable trust in 2021 but <b>never transferred his shares into it</b>. He has a general durable power of attorney naming Sharon, drafted in 2010, that does not specifically mention business interests.</li>
<li>Ray is the only signer on the operating account. The company\'s $3 million line of credit comes up for renewal in 60 days.</li>
<li>The general manager, Dale, 55, runs operations well. Ray handled purchasing with the main mainland suppliers personally.</li>
<li>A competitor has already called Sharon to express interest in buying the company.</li>
</ul>

<h2>Your tasks</h2>
<ol>
<li>List the priorities for the first 30 days.</li>
<li>Explain who currently has authority to act and what the gaps are.</li>
<li>Describe the bank\'s coordinated response.</li>
<li>Explain how to handle the competitor\'s interest.</li>
<li>Describe the decision the family will face at about 90 days, and how to prepare for it.</li>
</ol>

<details><summary>Model answer (open after you finish)</summary>
<h3>1. First 30 days</h3>
<ul>
<li><b>Authority:</b> have the estate attorney review immediately whether Sharon\'s power of attorney is sufficient to act on the business, including voting Ray\'s shares and dealing with the bank. If not, a court-appointed conservatorship or guardianship may be needed, which takes time.</li>
<li><b>Cash:</b> keep payroll and vendors paid. Work with the commercial banker on interim signing authority under proper legal documentation.</li>
<li><b>Leadership:</b> confirm Dale as interim leader with clear authority. Offer him a retention bonus to stay through the transition.</li>
<li><b>Suppliers and customers:</b> Dale and Tami call key suppliers personally with a calm, consistent message.</li>
<li><b>Employees:</b> a simple, honest message that the business continues under Dale\'s leadership.</li>
<li><b>No major decisions,</b> including any sale.</li>
</ul>

<h3>2. Authority gaps</h3>
<p>The shares are in Ray\'s name, not the trust, so the successor trustee cannot act on them. The power of attorney is old and general, and third parties may hesitate to rely on it for business actions. If Ray lacks capacity, he cannot sign new documents. This is the Lesson 1.2 and 4.1 scenario in real life.</p>

<h3>3. The bank\'s response</h3>
<ul>
<li><b>Commercial banker:</b> a clear, supportive plan for the line of credit renewal, perhaps a short extension while authority is sorted out, and practical help with signers once documentation is in place.</li>
<li><b>Family Business advisor (you):</b> coordinate the attorney, CPA, family, and bank; keep a tracker; set a family meeting cadence.</li>
<li><b>Trust and estate:</b> support the attorney on authority and on funding the trust properly if possible.</li>
<li><b>Wealth planning:</b> Sharon\'s personal cash flow and needs.</li>
</ul>

<h3>4. The competitor</h3>
<p>Thank them, and say the family is not making decisions now. A sale under pressure, with unclear authority and a buyer that knows the situation, is likely to produce a low price. If the family later decides to sell, a process with several buyers will serve them better.</p>

<h3>5. The 90-day decision</h3>
<p>Once authority and operations are stable, the family decides among: keep the business under Dale\'s leadership with a board or advisory structure (Tami may play a governance role); sell to Dale (MBO) or to employees; or run a proper sale process. Prepare with a valuation, a financial plan for Sharon, Dale\'s interest and capacity, and an honest look at supplier relationships without Ray.</p>
<p><b>Lesson for every other client:</b> almost all of this could have been prevented with a funded trust, a business-specific power of attorney, a second signer, and a written contingency plan.</p>
</details>
`,
terms: [],
quiz: [
  {q: 'Why can\'t the successor trustee of Ray\'s revocable trust act on his shares?',
   options: ['The shares were never transferred into the trust', 'Trusts cannot hold S corporation shares', 'The trustee is too young', 'The trust expired'], a: 0,
   why: 'An unfunded trust controls nothing.'},
  {q: 'What should the family do about the competitor\'s interest in the first 30 days?',
   options: ['Politely decline to make decisions now', 'Accept the first offer', 'Share the financials immediately', 'Sign an LOI'], a: 0,
   why: 'Selling under pressure invites a low price.'},
  {q: 'What protects operations most immediately?',
   options: ['Confirming Dale\'s interim authority and offering a retention bonus', 'Selling inventory', 'Closing the business temporarily', 'Replacing all suppliers'], a: 0,
   why: 'Continuity depends on leadership.'},
  {q: 'Why might a conservatorship be needed?',
   options: ['If the old power of attorney is insufficient and Ray lacks capacity to sign new documents', 'It is always required', 'To sell the business faster', 'To avoid taxes'], a: 0,
   why: 'Without valid authority, a court process may be the only option.'},
  {q: 'How can the commercial banker help most?',
   options: ['A supportive plan for the credit line renewal and help with signers once documentation is in place', 'Calling the loan immediately', 'Buying the business', 'Ignoring the situation'], a: 0,
   why: 'The bank\'s response can stabilize or destabilize the business.'}
],
exercise: `<p>Write your answers to the five tasks here before opening the model answer.</p>`,
discussion: `<p>How would you use this case (anonymized) in a client event or conversation about contingency planning, without it feeling like a scare tactic?</p>`,
resources: [
  {title: 'Review: Lessons 1.2, 4.1, 7.4, 12.3, 15.2', by: 'This program', note: 'Contingency planning, estate documents, bank financing, family stakeholders, and coordinating workstreams.'}
]
}
]);
