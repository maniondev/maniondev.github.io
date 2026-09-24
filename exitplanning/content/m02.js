FBE.add([
/* =====================================================================
   2.1 WHY PRIVATE COMPANY FINANCIALS ARE DIFFERENT
   ===================================================================== */
{
id: 'm02-l01', minutes: 25,
objectives: [
  'Explain why private company financial statements are usually built to minimize tax',
  'Distinguish compiled, reviewed, and audited statements and why the difference matters',
  'Identify common owner discretionary expenses and related-party arrangements',
  'Recognize accounting issues that make a private company\'s numbers hard to compare'
],
body: `
<div class="call plain"><span class="tag">In plain English</span>
<p>At a bank, financial statements exist to report performance accurately to regulators, investors, and management. In a private company, the main audience is usually the IRS, and the owner has every reason to make profit look as low as the law allows. That is legal and normal. It also means the numbers you receive usually understate what the business actually earns for its owner, and they have to be adjusted before anyone can judge value.</p>
</div>

<h2>Who the statements are for</h2>
<p>In your FP&amp;A work, the numbers follow GAAP, are audited, have internal controls around them, and are built to show performance. A private company of 20 to 200 employees is different:</p>
<ul>
<li><b>The main user is the tax return.</b> Every dollar of profit is a dollar taxed, so owners run personal-benefit expenses through the business, pay family members, and take deductions aggressively.</li>
<li><b>Accounting is often done by a small internal team or an outside bookkeeper,</b> with the CPA preparing statements once a year.</li>
<li><b>Management reporting is thin.</b> Many owners run the business from the bank balance and a gut sense of which jobs make money.</li>
<li><b>The owner's personal finances and the company's are intertwined.</b> Vehicles, insurance, travel, and real estate often cross between the two.</li>
</ul>

<h2>Levels of assurance</h2>
<p>How much a buyer or lender trusts the numbers depends on what the CPA did with them. You will see all of these:</p>
<table>
<tr><th>Type</th><th>What the CPA does</th><th>Credibility</th><th>Who usually has it</th></tr>
<tr><td><b>Tax return only / internal</b></td><td>Prepares the tax return; statements are internal</td><td>Lowest</td><td>Many small businesses</td></tr>
<tr><td><b>Compilation</b></td><td>Puts management's numbers into financial statement format. No assurance.</td><td>Low</td><td>Small businesses with bank loans</td></tr>
<tr><td><b>Review</b></td><td>Performs analytical procedures and inquiries. Limited assurance that no material changes are needed.</td><td>Moderate</td><td>Mid-sized businesses with larger credit lines</td></tr>
<tr><td><b>Audit</b></td><td>Tests transactions and controls. Reasonable assurance that the statements are fairly presented under GAAP.</td><td>Highest</td><td>Larger companies, or those with outside investors or bonding requirements</td></tr>
</table>
<p>Commercial bankers know which level each client has, because loan covenants often require a specific one. Moving from a compilation to a review, or a review to an audit, a year or two before a sale is a common readiness action. Buyers pay more for numbers they trust.</p>

<h2>Owner discretionary expenses</h2>
<p>These are costs the business pays that mostly benefit the owner personally. Common examples:</p>
<ul>
<li>Owner salary and bonus above what a hired manager would cost</li>
<li>Family members on payroll who do little work, or who are paid above market</li>
<li>Vehicles, fuel, and insurance for personal use</li>
<li>Travel, meals, and club memberships that are partly personal</li>
<li>Life, health, and disability insurance premiums for the owner</li>
<li>Retirement plan contributions for the owner above normal employee levels</li>
<li>Charitable donations</li>
</ul>
<p>Some of these are aggressive for tax purposes, and a few may not survive an IRS audit. Your job is not to judge them. It is to identify them, because each one is money the owner effectively receives, which a buyer might not need to spend.</p>

<h2>Related-party arrangements</h2>
<p>The most common is real estate. Many owners hold the business's building in a separate LLC and charge the company rent. That rent may be above market (moving profit from the company to the real estate entity, sometimes for tax reasons) or below market (because the owner did not bother to raise it). Either way, a buyer will price the business as if it paid market rent, and the building itself becomes a separate planning question: sell it, keep it and lease to the buyer, or pass it to family.</p>
<p>Other related-party items include loans between the owner and the company, management fees between affiliated companies, and purchases from companies owned by relatives.</p>

<h2>Accounting choices that distort comparisons</h2>
<ul>
<li><b>Cash versus accrual basis.</b> Cash-basis statements record revenue when collected and expenses when paid. Accrual statements match revenue and expenses to when they were earned or incurred. Cash-basis numbers can swing from year to year based on timing, so buyers convert to accrual.</li>
<li><b>Revenue recognition for contractors.</b> Construction and project businesses should recognize revenue as work is completed. Owners sometimes do this inconsistently, which can move profit between years.</li>
<li><b>Inventory.</b> Physical counts may be rare, and old stock may never be written down. Overstated inventory overstates profit.</li>
<li><b>Capitalizing versus expensing.</b> Some owners expense everything they can for tax purposes, including items that should be capitalized. Others defer necessary maintenance, which makes current profit look better than it is.</li>
</ul>

<div class="call hawaii"><span class="tag">Hawaii detail: general excise tax</span>
<p>Hawaii's general excise tax (GET) is a tax on the business's gross receipts, not a sales tax on the customer, though most businesses pass it on. The state rate is 4%, and most counties add a surcharge of up to 0.5%. Some businesses record revenue including the GET they collected and then record the GET as an expense. Others record revenue net of GET. When you compare revenue or margins across companies, or against mainland benchmarks, check which method each company uses. A 4.7% difference in revenue can change margin comparisons and the reading of revenue multiples.</p>
</div>

<div class="call example"><span class="tag">Worked example: three versions of "profit"</span>
<p>A distribution company tells you its profit last year. Depending on who you ask:</p>
<table>
<tr><th>Source</th><th class="n">Profit shown</th><th>Why</th></tr>
<tr><td>The tax return</td><td class="n">$310,000</td><td>Aggressive deductions, owner perks, bonus to reduce taxable income</td></tr>
<tr><td>The owner, in conversation</td><td class="n">$1,100,000</td><td>"Really we make about a million if you add back my stuff"</td></tr>
<tr><td>A buyer's quality of earnings review</td><td class="n">$840,000</td><td>Accepts documented add-backs, rejects some, adjusts for market rent and an inventory write-down</td></tr>
</table>
<p>None of these is dishonest. They answer different questions. Lesson 2.2 shows how to work from the first number to a defensible version of the third.</p>
</div>

<h2>Why it matters</h2>
<div class="call why"><span class="tag">For the assessment and for you</span>
<p>An exit readiness assessment needs a credible view of earnings, because value, the wealth gap, and exit options all depend on it. Your FP&amp;A skills (reconciling sources, questioning variances, building clean models from messy data) transfer directly. What is new is the context: here, the messy data is intentional, and pointing that out has to be done respectfully. Owners are sensitive about their books, and a CPA who prepared them will be too.</p></div>
`,
terms: [
  ['Compilation', 'Financial statements a CPA assembles from management\'s data without providing any assurance.'],
  ['Review', 'Financial statements on which a CPA performs analytical procedures and inquiries, giving limited assurance.'],
  ['Audit', 'The highest level of assurance. The CPA tests transactions and controls to give reasonable assurance that the statements are fairly presented.'],
  ['Owner discretionary expense', 'A cost the business pays that primarily benefits the owner personally, such as above-market salary, personal vehicles, or family on payroll.'],
  ['Related-party transaction', 'A transaction between the business and the owner, family members, or entities they control, such as rent paid to the owner\'s real estate LLC.'],
  ['Cash vs. accrual basis', 'Cash basis records revenue and expenses when cash moves. Accrual basis records them when earned or incurred. Buyers generally convert to accrual.'],
  ['General excise tax (GET)', 'Hawaii\'s tax on a business\'s gross receipts. Businesses usually pass it on to customers, and revenue may be recorded with or without it.']
],
quiz: [
  {q: 'Why do private company financial statements usually understate the owner\'s economic benefit from the business?',
   options: ['They are prepared mainly to minimize income tax, so personal benefits run through as expenses', 'GAAP requires private companies to understate profit', 'Private companies cannot deduct salaries', 'Banks require low profits'], a: 0,
   why: 'Owners legally minimize taxable profit, which pushes personal benefits into expenses.'},
  {q: 'A company\'s statements carry "limited assurance" from its CPA. What type of statements are they?',
   options: ['Reviewed', 'Audited', 'Compiled', 'Tax return only'], a: 0,
   why: 'A review provides limited assurance. An audit provides reasonable assurance. A compilation provides none.'},
  {q: 'The owner\'s LLC charges the company $5,000 per month rent. Market rent is $12,000 per month. How will a buyer view this?',
   options: ['Profit is overstated, since the buyer will need to pay market rent', 'Profit is understated', 'No adjustment is needed', 'The buyer will get the building for free'], a: 0,
   why: 'The buyer will price the business as if it paid market rent, which lowers normalized earnings by $84,000 a year.'},
  {q: 'Moving from compiled to reviewed financial statements before a sale mainly helps because:',
   options: ['Buyers trust and pay more for numbers that have more assurance', 'It lowers taxes', 'It increases revenue', 'It is legally required to sell'], a: 0,
   why: 'Higher assurance reduces buyer risk, which supports price and speeds diligence.'},
  {q: 'Why check whether a Hawaii company records revenue including or excluding general excise tax?',
   options: ['It changes reported revenue and margins by roughly 4 to 5%, which affects comparisons', 'GET is only charged on imports', 'GET does not apply to services', 'It determines the company\'s entity type'], a: 0,
   why: 'Revenue recorded gross of GET is higher, and margins look lower, than for a company recording net of GET.'}
],
exercise: `
<p>Pull up any small business tax return or set of private company financial statements you can access in a training context, or use a public sample. If you cannot, use this list of expenses from a hypothetical plumbing company and sort each into "normal operating," "possible owner discretionary," or "need more information":</p>
<ul>
<li>$28,000 for a truck the owner drives</li>
<li>$65,000 salary for the owner's daughter, who does the books three days a week</li>
<li>$14,000 for a family trip to a trade conference in Las Vegas</li>
<li>$120,000 rent to the owner's LLC for the shop</li>
<li>$9,000 donation to a youth sports league</li>
<li>$40,000 in legal fees for a dispute with a former employee</li>
</ul>
<p>For each item in "need more information," write the question you would ask.</p>`,
discussion: `
<p>Owners can be defensive when an advisor starts talking about "adjusting" their numbers, and so can the CPA who prepared them. How would you introduce the idea of normalizing financials without implying anyone did something wrong?</p>`,
resources: [
  {title: 'AICPA overview of compilation, review, and audit', by: 'AICPA', note: 'Search for the AICPA\'s comparison of the three service levels. It is short and helps you explain the difference to clients.'},
  {title: 'Hawaii Department of Taxation: general excise tax', by: 'tax.hawaii.gov', url: 'https://tax.hawaii.gov/', note: 'Current GET rates and county surcharges.'}
]
},

/* =====================================================================
   2.2 NORMALIZING EARNINGS
   ===================================================================== */
{
id: 'm02-l02', minutes: 35,
objectives: [
  'Calculate EBITDA from reported income',
  'Build adjusted (normalized) EBITDA using common add-backs and negative adjustments',
  'Calculate seller\'s discretionary earnings and explain when it is used',
  'Explain why each dollar of add-back matters and why documentation is essential'
],
body: `
<div class="call plain"><span class="tag">In plain English</span>
<p>Normalizing earnings means asking: if a new owner ran this business the normal way, paying market wages and market rent, with no personal expenses and no one-time surprises, how much would it earn? That number is what buyers pay for. You get there by starting with reported profit and adding back or subtracting specific items, each of which should be backed by evidence.</p>
</div>

<h2>Step 1: from net income to EBITDA</h2>
<p>EBITDA stands for earnings before interest, taxes, depreciation, and amortization. It is the most common starting point for valuing mid-sized private companies because it removes three things a new owner would change or that depend on how the business is financed:</p>
<ul>
<li><b>Interest</b> depends on how much debt the current owner chose to carry. A buyer will finance the business its own way.</li>
<li><b>Taxes</b> depend on the entity type and the owner's personal situation. Many private companies are pass-through entities that pay no entity-level income tax at all.</li>
<li><b>Depreciation and amortization</b> are non-cash accounting charges. Buyers consider capital spending separately.</li>
</ul>
<p>You can compute EBITDA from the top down (revenue minus operating expenses excluding D&amp;A) or from the bottom up (net income plus interest, taxes, depreciation, and amortization). Bottom up is more common in this work because you start from the reported profit.</p>

<h2>Step 2: normalizing adjustments</h2>
<p>Adjustments fall into a few families. Some increase earnings (add-backs), and some decrease them. Both directions matter; an advisor who only finds add-backs is not credible.</p>
<table>
<tr><th>Category</th><th>Examples</th><th>Direction</th></tr>
<tr><td><b>Owner compensation</b></td><td>Owner paid above (or below) what a replacement manager would cost</td><td>Either</td></tr>
<tr><td><b>Family and non-working payroll</b></td><td>Relatives paid above market or for little work</td><td>Usually add-back</td></tr>
<tr><td><b>Personal expenses</b></td><td>Vehicles, travel, insurance, club dues, personal use of company assets</td><td>Add-back</td></tr>
<tr><td><b>Non-recurring items</b></td><td>Lawsuit settlement, relocation, a one-time consulting project, storm damage</td><td>Usually add-back</td></tr>
<tr><td><b>Non-operating income</b></td><td>Gain on sale of equipment, investment income, insurance proceeds</td><td>Subtract</td></tr>
<tr><td><b>Related-party rent</b></td><td>Rent to the owner's LLC above or below market</td><td>Either</td></tr>
<tr><td><b>Missing costs</b></td><td>A role the owner fills unpaid, deferred maintenance, a key hire the business will need</td><td>Subtract</td></tr>
</table>

<div class="call example"><span class="tag">Worked example: Pacific Mechanical, Inc.</span>
<p>An S corporation with $11.2 million of revenue. The owner, Glenn, is 64.</p>
<table>
<tr><th>Line</th><th class="n">Amount</th><th>Notes</th></tr>
<tr><td>Reported pre-tax income</td><td class="n">$820,000</td><td>From the reviewed statements</td></tr>
<tr><td>+ Interest expense</td><td class="n">60,000</td><td>Equipment and working capital loans</td></tr>
<tr><td>+ Depreciation</td><td class="n">140,000</td><td></td></tr>
<tr class="tot"><td>EBITDA</td><td class="n">$1,020,000</td><td></td></tr>
<tr><td>+ Excess owner compensation</td><td class="n">200,000</td><td>Glenn takes $400,000; a general manager would cost $200,000 all-in</td></tr>
<tr><td>+ Spouse's salary</td><td class="n">70,000</td><td>On payroll, not active in the business</td></tr>
<tr><td>+ Personal vehicles and travel</td><td class="n">45,000</td><td>Supported by mileage logs and receipts</td></tr>
<tr><td>+ Legal settlement</td><td class="n">120,000</td><td>One-time dispute with a former customer, closed</td></tr>
<tr><td>- Rent adjustment to market</td><td class="n">(54,000)</td><td>Pays $96,000 to Glenn's LLC; market is $150,000</td></tr>
<tr><td>- Gain on equipment sale</td><td class="n">(30,000)</td><td>Non-operating</td></tr>
<tr class="tot"><td>Adjusted EBITDA</td><td class="n">$1,371,000</td><td>What a buyer might pay a multiple of</td></tr>
</table>
<p>Adjusted EBITDA is 34% higher than reported EBITDA. At a multiple of 5 times, that difference is worth about $1.75 million in value. This is why normalizing is not an academic exercise.</p>
</div>

<h2>Seller's discretionary earnings (SDE)</h2>
<p>For smaller businesses, usually with under about $1 million to $2 million in earnings, the likely buyer is an individual who will run the business personally. That buyer does not need to hire a general manager, so the business is valued on <b>SDE</b>: earnings before one owner's entire compensation and benefits.</p>
<p>In the example above, SDE would be adjusted EBITDA plus the $200,000 market compensation for one owner: <b>$1,571,000</b>. (Adjustments are also usually made for only one owner. If two partners both work in the business, the buyer still needs to replace one of them.)</p>
<p>SDE and EBITDA are multiplied by very different multiples. Small businesses sold on SDE often trade in the 2 to 4 times range, while larger companies valued on EBITDA command higher multiples. Mixing the two, for example applying an EBITDA multiple to SDE, is one of the most common reasons owners overestimate value.</p>
<table>
<tr><th></th><th>SDE</th><th>Adjusted EBITDA</th></tr>
<tr><td>Owner compensation</td><td>Fully added back (one owner)</td><td>Adjusted to market; the cost of a replacement manager remains</td></tr>
<tr><td>Typical buyer</td><td>An individual owner-operator</td><td>A company, private equity firm, or professional buyer</td></tr>
<tr><td>Typical business size</td><td>Smaller, owner-operated</td><td>Mid-sized, with management in place</td></tr>
<tr><td>Typical multiples</td><td>Lower</td><td>Higher</td></tr>
</table>

<h2>Documentation and credibility</h2>
<p>Every add-back will be challenged in diligence. Buyers see inflated add-backs all the time and discount the entire list when a few do not hold up. Practical rules:</p>
<ul>
<li><b>Each adjustment needs evidence:</b> payroll records, receipts, a settlement agreement, a rent survey, a compensation benchmark.</li>
<li><b>Recurring "one-time" items are not one-time.</b> If there is a "non-recurring" legal expense in three of the last four years, it is a cost of doing business.</li>
<li><b>Removing a cost must not remove the revenue it supports.</b> If the owner's "personal" travel is actually how he maintains a key customer relationship, it is not an add-back.</li>
<li><b>Look for missing costs.</b> If the owner also acts as the chief estimator, the buyer will need to hire one. That is a negative adjustment.</li>
</ul>
<div class="call watch"><span class="tag">A sensitive moment</span>
<p>Some owner perks may be personal expenses that should not have been deducted for tax. When presenting add-backs, the language matters. Phrases like "discretionary expenses" and "costs a new owner would not incur" are standard and neutral. Avoid commenting on whether something was properly deducted. That is between the owner and the CPA.</p>
</div>

<div class="call hawaii"><span class="tag">Hawaii scenario</span>
<p>A family-owned tour company on Kauai shows an unusual dip in profit in one year because of a temporary closure after a flood, and a large spike in another year from insurance proceeds. Normalizing means removing the insurance income, adding back the one-time cleanup costs, and considering whether to adjust for lost revenue during the closure. It also raises a harder question the buyer will ask: how likely is that kind of disruption to happen again? Some events are one-time. Others are a known risk of the location.</p>
</div>

<h2>Why it matters</h2>
<div class="call why"><span class="tag">For the assessment</span>
<p>Normalized earnings are the base for the value range, the wealth gap calculation, and financing capacity for a management buyout or family transfer. In a readiness assessment, a first normalization also produces action items: document the add-backs, bring rent to market, move family compensation to market, and stop running personal expenses through the business in the two or three years before a sale so the numbers speak for themselves.</p></div>
`,
terms: [
  ['EBITDA', 'Earnings before interest, taxes, depreciation, and amortization. A proxy for operating cash earnings independent of financing and tax structure.'],
  ['Adjusted (normalized) EBITDA', 'EBITDA after adjustments for owner compensation, personal expenses, non-recurring items, related-party terms, and missing costs.'],
  ['Add-back', 'An adjustment that increases earnings by removing an expense a new owner would not incur.'],
  ['Seller\'s discretionary earnings (SDE)', 'Earnings before one owner\'s total compensation and benefits. Used to value smaller, owner-operated businesses.'],
  ['Non-recurring item', 'An income or expense item not expected to happen again in normal operations.'],
  ['Negative adjustment', 'An adjustment that lowers earnings, such as bringing below-market rent up to market or adding the cost of a role the owner fills.']
],
quiz: [
  {q: 'Pre-tax income is $500,000, interest is $40,000, and depreciation is $110,000. What is EBITDA?',
   options: ['$650,000', '$500,000', '$460,000', '$610,000'], a: 0,
   why: '$500,000 plus $40,000 plus $110,000. Taxes are already excluded because we started from pre-tax income.'},
  {q: 'The owner earns $350,000. A replacement general manager would cost $180,000. What is the adjustment to EBITDA?',
   options: ['Add back $170,000', 'Add back $350,000', 'Subtract $180,000', 'Add back $180,000'], a: 0,
   why: 'Only the excess over the market cost of a replacement is added back for adjusted EBITDA.'},
  {q: 'Adjusted EBITDA is $900,000 and market owner compensation is $175,000. What is SDE for a single owner-operator?',
   options: ['$1,075,000', '$725,000', '$900,000', '$1,250,000'], a: 0,
   why: 'SDE adds back the full compensation of one owner, including the market-rate portion.'},
  {q: 'A company records a "one-time" consulting expense in three of the last four years. How should a buyer treat it?',
   options: ['As a recurring operating cost, not an add-back', 'As an add-back each year', 'As non-operating income', 'As a capital expenditure'], a: 0,
   why: 'Something that happens most years is part of the cost of running the business.'},
  {q: 'Why does each dollar of properly documented add-back matter so much?',
   options: ['Because value is often a multiple of earnings, so each dollar of earnings can be worth several dollars of value', 'Because add-backs reduce taxes', 'Because banks require add-backs', 'It does not matter much'], a: 0,
   why: 'At a 5 times multiple, $100,000 of supportable add-backs adds $500,000 of value.'}
],
exercise: `
<p>Normalize this company. Kona Coast Distributing, an S corporation:</p>
<ul>
<li>Pre-tax income: $640,000</li>
<li>Interest: $35,000. Depreciation: $95,000. Amortization: $10,000.</li>
<li>Owner salary: $300,000. A replacement GM would cost $190,000.</li>
<li>Owner's son is paid $110,000 as operations manager. Market for the role is $95,000. He works full time and would stay.</li>
<li>Owner's personal vehicle and boat expenses: $38,000.</li>
<li>Rent to owner's LLC: $180,000 a year. Market rent: $150,000.</li>
<li>One-time cost of a new ERP system: $85,000, expensed.</li>
<li>The owner does all vendor negotiations. A buyer would need a purchasing manager at $120,000.</li>
</ul>
<p>Calculate EBITDA, adjusted EBITDA, and SDE. Then list which adjustments you would expect a buyer to challenge and what documentation you would want.</p>
<details><summary>Check your numbers (open after you try it)</summary>
<p>EBITDA: 640,000 + 35,000 + 95,000 + 10,000 = <b>$780,000</b>.</p>
<p>Adjusted EBITDA: 780,000 + 110,000 (owner excess) + 15,000 (son above market) + 38,000 (personal) + 30,000 (rent above market) + 85,000 (one-time ERP) - 120,000 (missing purchasing role) = <b>$938,000</b>.</p>
<p>SDE: 938,000 + 190,000 (market owner compensation) = <b>$1,128,000</b>.</p>
<p>Likely challenges: the ERP add-back (will there be ongoing system costs?), the son's pay (market data), and whether the personal expenses are fully documented.</p>
</details>`,
discussion: `
<p>You are presenting a normalized earnings estimate to an owner. It is 25% higher than his reported profit, and he is pleased. Then you point out a missing cost: he does all the estimating himself, and a buyer will need to hire someone. His mood changes. How do you frame the negative adjustments so they feel like useful information rather than bad news?</p>`,
resources: [
  {title: 'Valuing a Business', by: 'Shannon Pratt', note: 'The chapter on normalizing adjustments is the professional reference.'},
  {title: 'The Art of Selling Your Business', by: 'John Warrillow', note: 'Covers add-backs and how buyers view them from the seller\'s side.'}
]
},

/* =====================================================================
   2.3 FROM HEADLINE PRICE TO CASH IN HAND
   ===================================================================== */
{
id: 'm02-l03', minutes: 30,
objectives: [
  'Distinguish enterprise value from equity value',
  'Explain cash-free, debt-free deals and debt-like items',
  'Explain the net working capital peg and how it adjusts price',
  'Build a proceeds waterfall from headline price to after-tax cash'
],
body: `
<div class="call plain"><span class="tag">In plain English</span>
<p>When an owner hears "we'll pay $10 million for your business," they picture $10 million in the bank. They will receive much less. The buyer's price is for the whole operating business. The seller pays off debt, may have to leave a certain amount of working capital behind, pays advisors, has part of the money held back, and then pays taxes. Walking an owner through this before a deal is one of the most valuable things an advisor can do.</p>
</div>

<h2>Enterprise value and equity value</h2>
<p><b>Enterprise value</b> is the value of the operating business itself, regardless of how it is financed. It is what a multiple of EBITDA produces. <b>Equity value</b> is what belongs to the owners after accounting for debt and cash.</p>
<blockquote>Equity value = Enterprise value - Debt + Cash</blockquote>
<p>The same logic applies to a house. The house has a value. What the owner walks away with depends on the mortgage.</p>

<h2>Cash-free, debt-free</h2>
<p>Most private company deals are priced on a cash-free, debt-free basis. The buyer pays the enterprise value. The seller uses the proceeds to pay off debt and keeps the cash in the business (or, more precisely, the price is adjusted for both). This lets the buyer and seller agree on the value of the operating business first and deal with the balance sheet separately.</p>
<p>The negotiation then shifts to what counts as "debt." Beyond bank loans, buyers often treat these as <b>debt-like items</b> that reduce the price:</p>
<ul>
<li>Equipment loans and capital (finance) leases</li>
<li>Unpaid income taxes from before closing</li>
<li>Accrued but unpaid bonuses and deferred compensation</li>
<li>Customer deposits or deferred revenue for work not yet done (sometimes)</li>
<li>Deferred maintenance or known capital needs (sometimes)</li>
</ul>

<h2>The net working capital peg</h2>
<p>Net working capital (for this purpose, usually accounts receivable plus inventory minus accounts payable and accrued expenses, excluding cash and debt) is the money tied up in running the business day to day. A buyer expects to receive a normal level of it at closing. Otherwise the seller could collect all the receivables, delay paying suppliers, and leave the buyer to fund the gap.</p>
<p>The parties agree on a <b>target</b>, or <b>peg</b>, usually based on a trailing 12-month average. At closing:</p>
<ul>
<li>If working capital delivered is above the peg, the price goes up by the difference.</li>
<li>If it is below the peg, the price goes down by the difference.</li>
</ul>
<p>Owners often do not know this exists until the letter of intent. For seasonal businesses, the peg can be a significant negotiation because the "normal" level depends on the month you choose.</p>

<div class="call example"><span class="tag">Worked example: the proceeds waterfall</span>
<p>A buyer offers 5 times adjusted EBITDA of $2 million for Island Fleet Services, a stock sale on a cash-free, debt-free basis.</p>
<table>
<tr><th>Step</th><th class="n">Amount</th><th>Explanation</th></tr>
<tr><td>Enterprise value (headline price)</td><td class="n">$10,000,000</td><td>5 x $2,000,000</td></tr>
<tr><td>- Bank term loan and line of credit</td><td class="n">(1,800,000)</td><td>Paid off at closing</td></tr>
<tr><td>- Equipment loans and capital leases</td><td class="n">(400,000)</td><td>Treated as debt</td></tr>
<tr><td>+ Cash in the business</td><td class="n">600,000</td><td>Seller keeps it or is paid for it</td></tr>
<tr><td>- Working capital shortfall</td><td class="n">(200,000)</td><td>Peg $1,500,000; delivered $1,300,000</td></tr>
<tr><td>- Transaction costs</td><td class="n">(450,000)</td><td>Investment banker, attorneys, accountants</td></tr>
<tr class="tot"><td>Pre-tax proceeds to the owner</td><td class="n">$7,750,000</td><td></td></tr>
<tr><td>Of which held in escrow for 18 months</td><td class="n">(1,000,000)</td><td>Covers breaches of the owner's promises in the purchase agreement</td></tr>
<tr><td>- Estimated income taxes</td><td class="n">(2,000,000)</td><td>Illustrative; depends on structure, basis, and residency (Module 3)</td></tr>
<tr class="tot"><td>After-tax cash at closing</td><td class="n">about $4,750,000</td><td>Plus up to $1,000,000 later if no claims are made</td></tr>
</table>
<p>The owner heard "$10 million." After tax, he has about $4.75 million at closing and about $5.75 million if the escrow is released in full. That is the number his retirement plan has to work with.</p>
</div>

<h2>Other items that change what the owner receives</h2>
<ul>
<li><b>Earnouts:</b> part of the price paid only if the business hits targets after closing. Earnouts should be valued at a discount in the owner's planning, since many pay out less than the maximum.</li>
<li><b>Seller notes:</b> the seller lends part of the price to the buyer, paid over time with interest. Common in smaller deals and internal transfers. It carries credit risk.</li>
<li><b>Rollover equity:</b> the seller reinvests part of the proceeds in the buyer's company, often in private equity deals. The owner does not receive that portion as cash, and its future value is uncertain.</li>
<li><b>Real estate:</b> if the building is owned separately, it may be sold with the business, sold separately, or kept and leased to the buyer. Each option changes the owner's proceeds and income.</li>
<li><b>Employment or consulting agreements:</b> payments to the owner for staying on. These are usually taxed as ordinary income and are not part of the purchase price, though buyers sometimes shift value between the two.</li>
</ul>
<p>Module 7 covers deal terms in depth.</p>

<div class="call hawaii"><span class="tag">Hawaii scenario</span>
<p>An owner of an Oahu landscaping company is approached by a mainland platform company rolling up landscaping businesses. The offer is "6 times EBITDA," which is more than he expected. The details: 60% cash at closing, 20% rollover equity into the platform, and 20% as an earnout over three years tied to revenue retention. He also has an SBA loan, two equipment loans, and a seasonal working capital swing.</p>
<p>Your role is not to evaluate the offer for him. That is for his M&amp;A advisor and attorney. But helping him see the likely waterfall, with ranges for the earnout and rollover, turns "6 times" into a realistic range of cash in hand. It also shows which questions to ask. The commercial banker's view of the loan payoffs is useful here too.</p>
</div>

<h2>Why it matters</h2>
<div class="call why"><span class="tag">For financial readiness</span>
<p>The owner's financial readiness depends on net proceeds, not headline value. When the wealth planner calculates whether the owner can afford to exit (Module 9), this waterfall is the input. Many owners discover a wealth gap only when they see this calculation. Seeing it early, while there is still time to grow value or adjust plans, is the entire point of exit planning.</p></div>
`,
terms: [
  ['Enterprise value', 'The value of the operating business regardless of how it is financed. Usually what a multiple of EBITDA produces.'],
  ['Equity value', 'Enterprise value minus debt plus cash. What belongs to the owners.'],
  ['Cash-free, debt-free', 'A common deal basis in which the price is for the operating business and the seller settles debt and keeps cash.'],
  ['Debt-like items', 'Obligations a buyer treats as debt to reduce the price, such as capital leases, unpaid taxes, and accrued bonuses.'],
  ['Net working capital peg', 'The agreed normal level of working capital a seller must deliver at closing. The price is adjusted up or down for any difference.'],
  ['Escrow / holdback', 'A portion of the price held back for a period after closing to cover claims under the purchase agreement.'],
  ['Proceeds waterfall', 'A step-by-step calculation from headline price to the owner\'s after-tax cash.']
],
quiz: [
  {q: 'Enterprise value is $8 million, debt is $1.5 million, and cash is $300,000. What is equity value?',
   options: ['$6.8 million', '$9.8 million', '$8 million', '$6.2 million'], a: 0,
   why: '$8M minus $1.5M plus $0.3M.'},
  {q: 'The working capital peg is $2 million and the seller delivers $2.3 million at closing. What happens?',
   options: ['The price increases by $300,000', 'The price decreases by $300,000', 'No change', 'The deal is cancelled'], a: 0,
   why: 'Delivering more than the target means the buyer receives more working capital than it paid for, so it pays the difference.'},
  {q: 'Why do buyers insist on a working capital peg?',
   options: ['So the seller cannot drain receivables and delay payables before closing, leaving the buyer to fund the gap', 'To reduce the seller\'s taxes', 'Because banks require it', 'To set the seller\'s salary'], a: 0,
   why: 'The peg ensures the business arrives with a normal level of working capital to operate.'},
  {q: 'Which of these is most likely to be treated as a debt-like item?',
   options: ['A capital lease on equipment', 'Inventory', 'Customer relationships', 'Accounts receivable'], a: 0,
   why: 'Capital leases are financing obligations, so buyers deduct them from the price like debt.'},
  {q: 'An owner is offered $12 million: $8 million cash at closing, $2 million rollover equity, and a $2 million earnout. For his personal planning, how should he treat the offer?',
   options: ['Plan on the cash, less debt, fees, escrow, and tax, and treat the rollover and earnout as uncertain upside', 'Plan on the full $12 million', 'Ignore the cash and focus on the earnout', 'Treat it all as after-tax money'], a: 0,
   why: 'Contingent and illiquid parts of the price should not fund essential retirement needs.'}
],
exercise: `
<p>Build a proceeds waterfall for this offer. Use a spreadsheet if you like, since this is the kind of tool you could build for the team.</p>
<ul>
<li>Adjusted EBITDA $1.6 million; offer at 5.5 times; stock sale, cash-free, debt-free</li>
<li>Bank debt $900,000; equipment loans $250,000; cash $400,000</li>
<li>Working capital peg $1.1 million; expected at closing $1.25 million</li>
<li>Transaction costs: 3% of enterprise value plus $150,000 in legal and accounting</li>
<li>10% of enterprise value held in escrow for 12 months</li>
<li>Assume taxes of 25% of pre-tax proceeds for simplicity</li>
</ul>
<p>What does the owner receive at closing after tax, and what could come later? Then write two sentences explaining the result to the owner in plain language.</p>
<details><summary>Check your numbers (open after you try it)</summary>
<p>Enterprise value: 1,600,000 x 5.5 = $8,800,000. Less debt of 900,000 and 250,000, plus cash of 400,000, plus working capital excess of 150,000, less transaction costs of 414,000 (264,000 + 150,000) = <b>$7,786,000</b> pre-tax proceeds.</p>
<p>Tax at 25%: $1,946,500, leaving $5,839,500 after tax in total. Escrow is $880,000, so about <b>$4,960,000</b> arrives at closing and up to <b>$880,000</b> arrives after 12 months if there are no claims.</p>
</details>`,
discussion: `
<p>The waterfall is a spreadsheet exercise for you, and an emotional moment for the owner. How would you present it so that the gap between $10 million and $4.75 million feels like planning information rather than a disappointment? What would you do if the owner's retirement plan clearly depends on the headline number?</p>`,
resources: [
  {title: 'The Art of Selling Your Business', by: 'John Warrillow', note: 'Chapters on working capital and deal structure, written for sellers.'},
  {title: 'Private Capital Markets', by: 'Robert T. Slee', note: 'A deeper treatment of how private deals are priced and structured.'}
]
},

/* =====================================================================
   2.4 QUALITY OF EARNINGS
   ===================================================================== */
{
id: 'm02-l04', minutes: 30,
objectives: [
  'Explain value as earnings multiplied by a risk-adjusted multiple',
  'Identify the main risks buyers use to lower multiples',
  'Explain what a quality of earnings report is and why sellers commission their own',
  'Turn risk findings into readiness action items'
],
body: `
<div class="call plain"><span class="tag">In plain English</span>
<p>Two companies with the same profit can sell for very different prices. The difference is how confident a buyer is that the profit will continue, and grow, after the owner leaves. Buyers look hard for anything that makes future profit less certain. Every risk they find lowers the multiple they will pay. Much of exit planning is finding those risks first and reducing them.</p>
</div>

<h2>Value = earnings x multiple</h2>
<p>This simplification is how most owners and buyers talk about value. You already know that the multiple is a shortcut for a more complete analysis. A higher multiple means a buyer expects more growth or sees less risk. Module 5 covers the math. For now, the important point is that the multiple is not fixed by the industry. Within the same industry, multiples vary widely depending on the specific company's risk profile.</p>

<h2>What buyers look for</h2>
<h3>Customer concentration</h3>
<p>If one customer is 30% of revenue, losing it would change the business. Buyers typically start to worry when a single customer is more than 10% to 15% of revenue, or when the top five exceed about half. They will discount the price, ask for an earnout, or walk away.</p>
<h3>Owner dependence</h3>
<p>Who has the customer relationships? Who makes pricing and hiring decisions? Who knows how the key processes work? If the answer is always the owner, the buyer would have to replace the owner's work on day one, and will price that risk in.</p>
<h3>Revenue quality</h3>
<p>Revenue types differ in predictability. From most valuable to least:</p>
<ol>
<li><b>Contractual recurring:</b> subscriptions, multi-year service agreements, maintenance contracts</li>
<li><b>Re-occurring:</b> customers who buy repeatedly without a contract, such as consumables and regular service</li>
<li><b>Repeat project:</b> customers who return for new projects</li>
<li><b>One-time project:</b> revenue that must be won again every time</li>
</ol>
<h3>Key employee risk</h3>
<p>Beyond the owner, are there one or two employees whose departure would hurt the business? Are they under non-compete or retention agreements? Do they know about a possible sale?</p>
<h3>Margins and trends</h3>
<p>Are gross margins stable or rising? Is revenue growing? A buyer pays for the trend as much as the level.</p>
<h3>Supplier and channel dependence</h3>
<p>A distributor whose main brand could cancel its distribution agreement carries a risk similar to customer concentration.</p>
<h3>Capital and working capital needs</h3>
<p>If the equipment is old and will need replacing soon, a buyer effectively deducts that cost. If growth requires a lot of working capital, less cash is available to the owner.</p>
<h3>Financial reporting and compliance</h3>
<p>Unreliable books, open tax issues, lapsed licenses, pending lawsuits, or employment law problems all raise risk and slow down diligence.</p>

<div class="call example"><span class="tag">Worked example: same EBITDA, different multiples</span>
<p>Two Oahu commercial cleaning companies each have $1.2 million of adjusted EBITDA.</p>
<table>
<tr><th>Factor</th><th>Company A</th><th>Company B</th></tr>
<tr><td>Largest customer</td><td>35% of revenue (one hotel group)</td><td>8% of revenue</td></tr>
<tr><td>Contracts</td><td>Month to month</td><td>Two- and three-year contracts for 70% of revenue</td></tr>
<tr><td>Management</td><td>Owner runs sales, pricing, and operations</td><td>Operations manager and sales lead in place for 5+ years</td></tr>
<tr><td>Financials</td><td>Compiled</td><td>Reviewed, monthly closes</td></tr>
<tr><td>Trend</td><td>Flat for three years</td><td>Growing 8% a year</td></tr>
<tr><td>Illustrative multiple</td><td>3.5x</td><td>6.0x</td></tr>
<tr class="tot"><td>Value</td><td>$4.2 million</td><td>$7.2 million</td></tr>
</table>
<p>Company A's owner might spend three years diversifying customers, moving clients to contracts, and building a management layer. If that moves the multiple to 5 times with the same EBITDA, value rises by $1.8 million. If EBITDA also grows, the gain is larger. This is the basic logic of value acceleration, which you will study in Module 8.</p>
</div>

<h2>Quality of earnings reports</h2>
<p>A <b>quality of earnings (QoE) report</b> is an accounting firm's detailed review of a company's earnings, usually commissioned during a sale. It is not an audit. It focuses on whether adjusted EBITDA holds up, whether revenue and margins are sustainable, and what the right working capital peg should be.</p>
<ul>
<li><b>Buy-side QoE:</b> commissioned by the buyer during diligence. It is where inflated add-backs are rejected and price reductions often begin.</li>
<li><b>Sell-side QoE:</b> commissioned by the seller before going to market. It finds problems early, supports the adjusted EBITDA figure, and makes diligence faster. For mid-sized sales it is increasingly common and often pays for itself.</li>
</ul>
<p>A <b>proof of cash</b>, a common QoE procedure, reconciles reported revenue to actual bank deposits. Bank statements matter here, which is another point where the commercial banking relationship is relevant.</p>

<h2>From risks to action items</h2>
<p>In an exit readiness assessment, these risks become the core of the business readiness findings. A few examples of how a risk turns into an action item:</p>
<table>
<tr><th>Finding</th><th>Possible action item</th><th>Typical time needed</th></tr>
<tr><td>Top customer is 35% of revenue</td><td>A sales plan to grow other accounts; a multi-year contract with the top customer</td><td>2 to 4 years</td></tr>
<tr><td>Owner holds all key relationships</td><td>Introduce managers to key accounts; shift pricing decisions</td><td>1 to 3 years</td></tr>
<tr><td>Month-to-month service agreements</td><td>Move customers to annual or multi-year contracts</td><td>1 to 2 years</td></tr>
<tr><td>Compiled financials</td><td>Move to reviewed statements; monthly closes</td><td>1 to 2 years</td></tr>
<tr><td>Key employee with no agreement</td><td>Retention bonus or equity incentive tied to a transition</td><td>Months</td></tr>
</table>

<div class="call hawaii"><span class="tag">Hawaii context</span>
<p>Customer concentration is a common issue in Hawaii because some industries are dominated by a few large buyers: hotel groups, the military, state and county government, and major developers. Government and military contracts can be stable, but they are awarded through procurement and may have specific transfer rules, including small business or other set-aside status that may not survive a sale. Always ask about contract assignability and set-aside status when government revenue is significant.</p>
</div>

<h2>Why it matters</h2>
<div class="call why"><span class="tag">For the assessment and the CEPA</span>
<p>This lesson connects the numbers to the owner's choices. Earnings set the base. Risk sets the multiple. The owner can influence both, if there is time. EPI's Four Cs of intangible capital (Module 8) are a structured way to look at many of these same risks: human capital (owner and key employee dependence), customer capital (concentration and contracts), structural capital (systems and financial reporting), and social capital (culture and reputation).</p></div>
`,
terms: [
  ['Multiple', 'The ratio of price to an earnings measure such as EBITDA. Reflects the buyer\'s view of risk and growth.'],
  ['Customer concentration', 'Dependence on a small number of customers for a large share of revenue. Raises risk and lowers value.'],
  ['Recurring revenue', 'Revenue that repeats predictably, ideally under contract. The most valuable type of revenue.'],
  ['Quality of earnings (QoE) report', 'An accounting firm\'s detailed analysis of whether a company\'s adjusted earnings are accurate and sustainable.'],
  ['Sell-side QoE', 'A quality of earnings report commissioned by the seller before going to market to find issues early and support the price.'],
  ['Proof of cash', 'A procedure that reconciles reported revenue and expenses to actual bank activity.'],
  ['Key employee risk', 'The risk that losing one or a few non-owner employees would materially harm the business.']
],
quiz: [
  {q: 'Company X and Company Y each have $1 million of adjusted EBITDA. X sells for $6 million and Y for $4 million. What best explains this?',
   options: ['Buyers saw less risk or more growth at X', 'X has more revenue', 'Y\'s owner negotiated poorly', 'X used a different accounting method'], a: 0,
   why: 'Same earnings, different multiple. The multiple reflects risk and growth expectations.'},
  {q: 'Which revenue type is generally most valuable to a buyer?',
   options: ['Multi-year contractual service agreements', 'One-time projects', 'Repeat projects without contracts', 'Revenue from a single large customer'], a: 0,
   why: 'Contractual recurring revenue is the most predictable.'},
  {q: 'Why might a seller commission their own quality of earnings report before a sale?',
   options: ['To find and fix issues early, support the adjusted EBITDA, and speed up diligence', 'Because it replaces an audit', 'To avoid paying taxes', 'Because buyers never do their own'], a: 0,
   why: 'Finding problems before a buyer does keeps the seller in control of the story and the price.'},
  {q: 'A contractor earns 40% of revenue from federal contracts obtained under a small business set-aside. What should you ask early?',
   options: ['Whether the contracts can transfer to a buyer and whether the set-aside status survives a sale', 'Whether the owner likes government work', 'Whether the contracts are profitable', 'Nothing; government contracts are always transferable'], a: 0,
   why: 'Set-aside status and assignability can change the value of that revenue significantly under a new owner.'},
  {q: 'The owner personally holds all key customer relationships. What is a realistic readiness action item?',
   options: ['Gradually introduce managers to key accounts and shift decisions to them over one to three years', 'Sell immediately before buyers notice', 'Hide it from buyers', 'Nothing can be done'], a: 0,
   why: 'Owner dependence can be reduced over time, which raises transferable value.'}
],
exercise: `
<p>Create a simple risk scorecard for a business. List eight factors from this lesson (customer concentration, owner dependence, revenue quality, key employees, trend, supplier dependence, capital needs, financial reporting). For each, write what "low risk," "medium risk," and "high risk" would look like in one line.</p>
<p>Then score a business you know (or Company A from the example). Pick the two highest risks and write an action item, a responsible person, and a realistic timeframe for each.</p>
<p>A tool like this, refined over time, is exactly the kind of "practice and program support" the job description describes.</p>`,
discussion: `
<p>Many owners take pride in being indispensable: "Nobody knows these customers like I do." How would you help an owner see that this same fact lowers the value of their business, without making them feel that their life's work is being criticized?</p>`,
resources: [
  {title: 'Built to Sell', by: 'John Warrillow', note: 'The whole book is about reducing owner dependence and building recurring revenue.'},
  {title: 'Walking to Destiny', by: 'Christopher M. Snider', note: 'Read the chapters on intangible capital and the Four Cs as a preview of Module 8.'}
]
}
]);
