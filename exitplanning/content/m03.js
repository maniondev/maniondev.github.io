FBE.add([
/* =====================================================================
   3.1 ENTITY TYPES
   ===================================================================== */
{
id: 'm03-l01', minutes: 30,
objectives: [
  'Describe the main business entity types and how each is taxed',
  'Explain the difference between a legal form (like an LLC) and a tax classification',
  'Explain why S corporations dominate among Hawaii small and mid-sized businesses, and their constraints',
  'Connect entity type to the exit options and tax outcomes it allows'
],
body: `
<div class="call plain"><span class="tag">In plain English</span>
<p>How a business is set up legally decides who pays tax on its profits, how many times those profits are taxed, and what kinds of sales are possible later. An owner who chose their entity 25 years ago for reasons that made sense then may find it helps or hurts badly when they sell. You need to recognize the entity type in the first meeting and understand what it implies, so you know which questions to bring to the CPA.</p>
</div>

<h2>Two ideas to separate</h2>
<p>An entity has a <b>legal form</b> under state law (corporation, LLC, partnership) and a <b>tax classification</b> under federal law (C corporation, S corporation, partnership, or disregarded entity). They are related but different. The most common source of confusion is the LLC: an LLC is a legal form that can be taxed as a disregarded entity, a partnership, an S corporation, or a C corporation, depending on its elections. When an owner says "we're an LLC," your next question is, "How is it taxed?"</p>

<h2>The main types</h2>
<h3>Sole proprietorship and single-member LLC (disregarded)</h3>
<p>The business and the owner are the same for tax purposes. Income is reported on the owner's personal return. There are no shares to sell, so a sale is always a sale of assets. Common for very small businesses.</p>
<h3>Partnership and multi-member LLC</h3>
<p>A <b>pass-through</b> entity. The partnership files an informational return and gives each owner a Schedule K-1 showing their share of income, which they report personally. The entity itself pays no federal income tax. Partnerships are very flexible: profits and losses can be allocated among owners in ways that do not match ownership percentages, and different classes of interests are easy to create. Sales of partnership interests are mostly capital gain, with some exceptions for "hot assets" such as receivables and inventory that produce ordinary income.</p>
<h3>S corporation</h3>
<p>A corporation (or LLC) that has elected to be taxed under Subchapter S. It is also a pass-through, so there is one level of federal tax. Its constraints matter for planning:</p>
<ul>
<li>No more than 100 shareholders.</li>
<li>Only eligible shareholders: generally U.S. individuals, estates, and certain types of trusts. Partnerships, corporations, and nonresident aliens generally cannot own S corporation shares. This affects both estate planning (which trusts can hold shares) and who can buy the company.</li>
<li><b>One class of stock.</b> All shares must have the same rights to distributions and liquidation proceeds. Differences in voting rights are allowed, which is why voting and non-voting shares are a common family succession tool.</li>
<li>Owner-employees must take <b>reasonable compensation</b> as salary (subject to payroll taxes). The remaining profit can be distributed without payroll taxes, which is one reason S corporations are popular.</li>
</ul>
<h3>C corporation</h3>
<p>A corporation that pays its own income tax: 21% federal, plus state tax (Hawaii's corporate rates top out at 6.4%). When it distributes profits as dividends, shareholders pay tax again. This is <b>double taxation</b>. C corporations have no ownership restrictions, which is why companies with outside investors or plans to go public use them. They also have unique planning opportunities: qualified small business stock (QSBS) and the ESOP rollover (Lesson 3.4). Their big weakness appears in asset sales (Lesson 3.3).</p>

<table>
<tr><th></th><th>Disregarded</th><th>Partnership / LLC</th><th>S corporation</th><th>C corporation</th></tr>
<tr><td>Federal tax on entity</td><td>None</td><td>None</td><td>None (with exceptions)</td><td>21%</td></tr>
<tr><td>Levels of tax</td><td>One</td><td>One</td><td>One</td><td>Two</td></tr>
<tr><td>Owner limits</td><td>One owner</td><td>None</td><td>100; eligible types only</td><td>None</td></tr>
<tr><td>Classes of ownership</td><td>N/A</td><td>Very flexible</td><td>One class; voting may differ</td><td>Flexible</td></tr>
<tr><td>Sale of ownership interest possible?</td><td>No (assets only)</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Special exit tools</td><td></td><td>Flexible allocations</td><td>Voting/non-voting shares; ESOP-owned S corps pay no federal income tax on the ESOP's share</td><td>QSBS exclusion; ESOP section 1042 rollover</td></tr>
</table>

<h2>Built-in gains: the conversion trap</h2>
<p>An owner who converts a C corporation to an S corporation does not escape corporate tax on value that already existed. If the business sells its assets within five years after the conversion (the <b>recognition period</b>), the built-in gain at the time of conversion is still taxed at the corporate level. This matters because owners sometimes hear "convert to an S corp before you sell" late in the process. The conversion may help, but only if it happens early enough, which is a timing question for the CPA.</p>

<h2>Pass-through income and personal tax</h2>
<p>For pass-through entities, business income shows up on the owner's personal return, taxed at personal rates: federally up to 37%, and in Hawaii up to 11%, one of the highest top rates in the country. Pass-through owners may also qualify for the 20% qualified business income deduction under section 199A, which was made permanent in 2025. You do not need to master these details. You need to know that an owner's personal tax picture and the business's tax picture are one and the same for most of your clients.</p>

<div class="call example"><span class="tag">Worked example: reading the entity in a first meeting</span>
<p>An owner hands you a tax return. The form number tells you the classification:</p>
<table>
<tr><th>Form</th><th>Classification</th><th>First questions to ask yourself</th></tr>
<tr><td>Schedule C (on the owner's 1040)</td><td>Sole proprietorship or disregarded LLC</td><td>Asset sale only. Are business and personal assets clearly separated?</td></tr>
<tr><td>Form 1065</td><td>Partnership / LLC</td><td>What does the operating agreement say about transfers and buyouts?</td></tr>
<tr><td>Form 1120-S</td><td>S corporation</td><td>When was the election made? Was it ever a C corporation? Who holds the shares?</td></tr>
<tr><td>Form 1120</td><td>C corporation</td><td>Is an asset sale likely? When was the stock issued? Could QSBS apply? Could an ESOP fit?</td></tr>
</table>
</div>

<div class="call hawaii"><span class="tag">Hawaii context</span>
<p>Many long-established Hawaii family businesses are organized as S corporations, often with the operating real estate held in a separate LLC or partnership. Some older companies are still C corporations because they were formed before S corporation rules were attractive and never converted. These companies tend to be the most exposed to double taxation in a sale, and the most likely to benefit from early planning.</p>
</div>

<h2>Why it matters</h2>
<div class="call why"><span class="tag">In your role</span>
<p>Entity type is one of the first facts you should confirm in intake, because it shapes nearly everything else: which sale structures are practical, how much tax the owner will pay, which trusts can hold shares, whether an ESOP makes sense, and whether any planning must start years in advance. You will not decide any of this. You will make sure it gets asked early.</p></div>
`,
terms: [
  ['Pass-through entity', 'An entity whose income is taxed to its owners rather than at the entity level. Partnerships, most LLCs, and S corporations.'],
  ['S corporation', 'A corporation that elects pass-through taxation. Limited to 100 eligible shareholders and one class of stock.'],
  ['C corporation', 'A corporation taxed at the entity level. Its dividends are taxed again to shareholders.'],
  ['Double taxation', 'Tax at the corporate level, then again at the shareholder level when profits are distributed.'],
  ['Disregarded entity', 'A single-owner entity, usually an LLC, that is ignored for federal income tax purposes.'],
  ['Reasonable compensation', 'The market-level salary an S corporation must pay owner-employees before taking distributions.'],
  ['Built-in gains tax', 'Corporate-level tax on appreciation that existed when a C corporation converted to S status, if assets are sold within the five-year recognition period.'],
  ['Schedule K-1', 'The form a pass-through entity issues to each owner showing their share of income, deductions, and credits.']
],
quiz: [
  {q: 'An owner says, "We\'re an LLC." What is the best follow-up question?',
   options: ['How is it taxed?', 'Who is your attorney?', 'Is it profitable?', 'When will you sell?'], a: 0,
   why: 'An LLC can be taxed as a disregarded entity, a partnership, an S corporation, or a C corporation. The tax classification drives planning.'},
  {q: 'Which S corporation rule makes voting and non-voting shares a useful family succession tool?',
   options: ['One class of stock is required, but differences in voting rights are allowed', 'S corporations can have unlimited shareholders', 'S corporations must have two classes of stock', 'Non-voting shares are taxed at a lower rate'], a: 0,
   why: 'Economic rights must be identical, but control can be separated, so a parent can give away value while keeping control.'},
  {q: 'Which buyer could generally NOT own shares of an S corporation?',
   options: ['A private equity fund structured as a partnership', 'A U.S. individual', 'The owner\'s estate', 'A qualifying trust for the owner\'s children'], a: 0,
   why: 'Partnerships and corporations are generally not eligible S corporation shareholders. This is one reason buyers prefer asset-type structures.'},
  {q: 'A C corporation converts to S status and sells its assets two years later. What issue arises?',
   options: ['Built-in gains tax on appreciation that existed at conversion', 'No issue; S status eliminates corporate tax immediately', 'The sale is prohibited', 'The S election is automatically revoked'], a: 0,
   why: 'The five-year recognition period means built-in gain is still taxed at the corporate level.'},
  {q: 'An owner hands you a Form 1120 tax return. What do you know immediately?',
   options: ['It is a C corporation, so an asset sale may create double taxation', 'It is a partnership', 'It is a sole proprietorship', 'It is an S corporation'], a: 0,
   why: 'Form 1120 is the C corporation return. Form 1120-S is for S corporations, 1065 for partnerships.'}
],
exercise: `
<p>For each owner below, write the entity type you would expect and two planning questions you would bring to their CPA.</p>
<ol>
<li>A 58-year-old owner of a Honolulu engineering firm formed in 1991 as a corporation. It files Form 1120.</li>
<li>Three siblings who inherited a retail business. It files Form 1065, and the building is owned by the same entity.</li>
<li>A 45-year-old founder of a software company with two outside angel investors. Files Form 1120.</li>
<li>A 70-year-old owner of an auto repair business. Files Schedule C.</li>
</ol>`,
discussion: `
<p>Owners often do not know their own entity's tax status or history. How would you ask about it in a first meeting without making the owner feel quizzed? What documents could you request instead?</p>`,
resources: [
  {title: 'IRS: Business structures', by: 'irs.gov', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/business-structures', note: 'The IRS overview of entity types and their forms.'},
  {title: 'Hawaii Department of Taxation', by: 'tax.hawaii.gov', url: 'https://tax.hawaii.gov/', note: 'Current Hawaii individual and corporate rates.'}
]
},

/* =====================================================================
   3.2 BASIS, GAIN, AND RATES
   ===================================================================== */
{
id: 'm03-l02', minutes: 30,
objectives: [
  'Calculate gain from amount realized and adjusted basis',
  'Explain why most founders have very low basis',
  'Distinguish capital gain from ordinary income, including depreciation recapture',
  'Estimate the combined federal and Hawaii tax on a simple sale'
],
body: `
<div class="call plain"><span class="tag">In plain English</span>
<p>Tax on a sale is charged on the profit, not the price. The profit is what you sold for minus what the tax system says you "paid" for it, called your basis. Founders usually have very little basis, so almost the whole price is profit. Then the rate depends on what kind of profit it is. Some is taxed as capital gain at lower rates, and some as ordinary income at much higher rates. The mix can move the tax bill by hundreds of thousands of dollars.</p>
</div>

<h2>Gain = amount realized - adjusted basis</h2>
<p><b>Amount realized</b> is what the seller receives: cash, the value of any notes or property, and any of the seller's liabilities the buyer takes on.</p>
<p><b>Adjusted basis</b> starts with what was paid and is adjusted over time:</p>
<ul>
<li><b>For an asset</b> (a truck, a building): cost, minus depreciation taken.</li>
<li><b>For C corporation stock</b>: generally what the shareholder paid for it.</li>
<li><b>For S corporation stock and partnership interests</b>: what was paid, plus income that passed through to the owner, minus distributions and losses. (Partnership basis also includes a share of the partnership's liabilities.)</li>
</ul>
<p>Most founders started with a small investment and built value through retained earnings and goodwill. <b>Self-created goodwill has zero basis.</b> So when a founder sells for $6 million, the gain is often close to $6 million.</p>

<h2>Character: capital gain or ordinary income</h2>
<p>The type of gain determines the rate.</p>
<table>
<tr><th>Type of income in a sale</th><th>Federal rate (top)</th><th>Hawaii rate (top)</th></tr>
<tr><td>Long-term capital gain (held over one year): goodwill, stock, partnership interests (mostly)</td><td>20%</td><td>7.25%</td></tr>
<tr><td>Depreciation recapture on equipment and other personal property (section 1245)</td><td>Ordinary, up to 37%</td><td>Ordinary, up to 11%</td></tr>
<tr><td>Unrecaptured depreciation on real estate (section 1250)</td><td>Up to 25%</td><td>7.25%</td></tr>
<tr><td>Inventory, and receivables of a cash-basis business</td><td>Ordinary, up to 37%</td><td>Up to 11%</td></tr>
<tr><td>Payments for a non-compete or consulting agreement</td><td>Ordinary, up to 37%</td><td>Up to 11%</td></tr>
<tr><td>Employment or consulting pay after closing</td><td>Ordinary, plus payroll taxes</td><td>Up to 11%</td></tr>
</table>
<p class="small faint">Rates are top marginal rates as of 2026 and are simplified. Actual tax depends on the whole return, brackets, deductions, and credits.</p>

<h3>Depreciation recapture</h3>
<p>When a business depreciates equipment, it deducts the cost against ordinary income over time. If it later sells the equipment for more than its depreciated basis, the gain up to the depreciation taken is "recaptured" and taxed as ordinary income. For equipment-heavy businesses (contractors, trucking, manufacturing) that used accelerated or bonus depreciation, recapture can be large. And because 100% bonus depreciation was made permanent in 2025 for property acquired after January 19, 2025, many businesses will have equipment with a tax basis of zero.</p>

<h3>The net investment income tax (NIIT)</h3>
<p>A 3.8% federal tax on investment income for higher-income taxpayers (above $200,000 of modified adjusted gross income for single filers and $250,000 for joint filers). Whether it applies to a business sale depends on structure:</p>
<ul>
<li>An owner who <b>materially participates</b> in an S corporation or partnership can generally exclude the gain attributable to the active business from NIIT.</li>
<li>Gain on <b>C corporation stock</b> is generally subject to NIIT regardless of participation.</li>
<li>A passive owner, such as a sibling who inherited shares and does not work in the business, is usually subject to it.</li>
</ul>
<p>So the "top capital gains rate" you will hear quoted is 20% for an active pass-through owner and 23.8% for many others.</p>

<div class="call example"><span class="tag">Worked example: an asset sale by an S corporation</span>
<p>Makai Marine Services, an S corporation owned 100% by an active owner, sells its assets for $6 million. The purchase price is allocated as follows:</p>
<table>
<tr><th>Asset</th><th class="n">Price allocated</th><th class="n">Tax basis</th><th class="n">Gain</th><th>Character</th></tr>
<tr><td>Equipment (cost $1.2M, depreciated to $300K)</td><td class="n">$800,000</td><td class="n">$300,000</td><td class="n">$500,000</td><td>Ordinary (recapture)</td></tr>
<tr><td>Inventory</td><td class="n">400,000</td><td class="n">400,000</td><td class="n">0</td><td>None</td></tr>
<tr><td>Goodwill</td><td class="n">4,800,000</td><td class="n">0</td><td class="n">4,800,000</td><td>Long-term capital gain</td></tr>
<tr class="tot"><td>Total</td><td class="n">$6,000,000</td><td class="n">$700,000</td><td class="n">$5,300,000</td><td></td></tr>
</table>
<p>Using top rates for simplicity (and assuming the owner is exempt from NIIT as an active owner):</p>
<table>
<tr><th></th><th class="n">Federal</th><th class="n">Hawaii</th><th class="n">Total</th></tr>
<tr><td>Recapture: $500,000 at 37% / 11%</td><td class="n">$185,000</td><td class="n">$55,000</td><td class="n">$240,000</td></tr>
<tr><td>Goodwill: $4,800,000 at 20% / 7.25%</td><td class="n">$960,000</td><td class="n">$348,000</td><td class="n">$1,308,000</td></tr>
<tr class="tot"><td>Estimated tax</td><td class="n">$1,145,000</td><td class="n">$403,000</td><td class="n">$1,548,000</td></tr>
</table>
<p>That is about 29% of the gain, or 26% of the price. If the buyer had pushed another $400,000 of price into equipment instead of goodwill (bringing it to $1.2 million, the original cost, so all of it is still recapture), the owner's tax would rise by roughly $400,000 x (48% - 27.25%) = about $83,000. That is why allocation is negotiated (Lesson 3.3).</p>
</div>

<div class="call hawaii"><span class="tag">Hawaii context</span>
<p>Hawaii caps the tax rate on capital gains at 7.25% for individuals while ordinary income can be taxed at up to 11%. The spread between ordinary and capital rates is therefore larger here than in many states, which makes character even more important. Owners sometimes ask about moving out of state before a sale. Changing domicile is a real, fact-intensive question: the owner must genuinely move, and gain tied to Hawaii real property or Hawaii business assets can still be taxed by Hawaii. It belongs with the CPA and attorney well before any deal, not after an offer arrives.</p>
</div>

<h2>Why it matters</h2>
<div class="call why"><span class="tag">For financial readiness</span>
<p>The after-tax number is what funds the owner's future. An early, rough tax estimate (always labeled as an estimate and reviewed by the CPA) often changes the conversation: the owner discovers that their "number" requires a higher sale price than they thought, or that the structure matters as much as the price. It also shows why the CPA needs to be involved from the start.</p></div>
`,
terms: [
  ['Basis', 'The tax system\'s measure of an owner\'s investment in an asset or interest, used to calculate gain.'],
  ['Amount realized', 'What the seller receives in a sale, including cash, notes, property, and liabilities the buyer assumes.'],
  ['Capital gain', 'Gain on the sale of a capital asset. Long-term if held over one year; taxed at preferential rates.'],
  ['Ordinary income', 'Income taxed at regular rates, including wages, inventory gains, and depreciation recapture.'],
  ['Depreciation recapture', 'Gain on depreciated property, up to the depreciation previously taken, that is taxed as ordinary income (section 1245) or at up to 25% for real estate (section 1250).'],
  ['Net investment income tax (NIIT)', 'A 3.8% federal tax on investment income for higher earners. Often does not apply to active owners of pass-through businesses.'],
  ['Material participation', 'Regular, continuous, and substantial involvement in a business. Affects passive loss rules and NIIT.'],
  ['Goodwill', 'The value of a business above its identifiable assets: reputation, relationships, and earning power. Self-created goodwill has zero basis.']
],
quiz: [
  {q: 'A founder invested $50,000 in her S corporation 20 years ago. Pass-through income and distributions have netted to zero. She sells her stock for $4 million. Her gain is about:',
   options: ['$3.95 million', '$4 million', '$50,000', '$2 million'], a: 0,
   why: 'Amount realized minus adjusted basis: $4,000,000 minus $50,000.'},
  {q: 'Equipment bought for $500,000 has been depreciated to a $100,000 basis and is sold for $350,000. How is the $250,000 gain taxed?',
   options: ['As ordinary income through depreciation recapture', 'As long-term capital gain', 'It is tax-free', 'At the 25% real estate rate'], a: 0,
   why: 'Gain up to the depreciation taken ($400,000) is recaptured as ordinary income, so all $250,000 is ordinary.'},
  {q: 'Which owner is most likely subject to the 3.8% NIIT on the sale of their business interest?',
   options: ['A sibling who inherited shares of an S corporation and does not work in the business', 'An active owner-operator of an S corporation', 'An active partner in an LLC taxed as a partnership', 'None of them'], a: 0,
   why: 'Passive owners generally owe NIIT. Active owners of pass-through businesses can usually exclude gain from active business assets.'},
  {q: 'Why does the allocation of purchase price between equipment and goodwill matter to the seller?',
   options: ['Equipment gain is often recaptured as ordinary income, while goodwill gain is usually capital gain taxed at lower rates', 'Goodwill is taxed at higher rates', 'Allocation only matters to the buyer', 'Equipment is never taxed'], a: 0,
   why: 'Shifting price toward recapture assets increases the seller\'s tax.'},
  {q: 'What is Hawaii\'s top individual rate on long-term capital gains compared with its top ordinary rate?',
   options: ['7.25% versus 11%', '11% versus 11%', '0% versus 11%', '4% versus 6.4%'], a: 0,
   why: 'Hawaii caps capital gains at 7.25% for individuals, while ordinary income can be taxed at up to 11%.'}
],
exercise: `
<p>Estimate the combined federal and Hawaii tax for this asset sale by a partnership owned by one active owner (use top rates, and assume no NIIT):</p>
<ul>
<li>Price: $3,500,000</li>
<li>Trucks and equipment allocated $600,000; tax basis $0 (fully depreciated; original cost $1.4 million)</li>
<li>Inventory allocated $200,000; basis $200,000</li>
<li>Non-compete agreement allocated $150,000</li>
<li>Goodwill allocated the rest</li>
</ul>
<details><summary>Check your numbers (open after you try it)</summary>
<p>Goodwill: $3,500,000 - $600,000 - $200,000 - $150,000 = $2,550,000.</p>
<p>Ordinary income: $600,000 recapture + $150,000 non-compete = $750,000 x 48% (37% + 11%) = $360,000.</p>
<p>Capital gain: $2,550,000 x 27.25% (20% + 7.25%) = $694,875.</p>
<p>Total: about <b>$1,054,875</b>, or 30% of the price.</p>
</details>`,
discussion: `
<p>Owners usually focus on price. How would you help an owner understand that a $6.2 million offer could leave them with less after tax than a $6.0 million offer? What information would you need, and who would need to be in the room?</p>`,
resources: [
  {title: 'IRS Publication 544: Sales and Other Dispositions of Assets', by: 'irs.gov', url: 'https://www.irs.gov/publications/p544', note: 'The IRS explanation of gain, character, and recapture. Dry but authoritative.'},
  {title: 'IRS: Net Investment Income Tax', by: 'irs.gov', url: 'https://www.irs.gov/individuals/net-investment-income-tax', note: 'Thresholds and what counts as investment income.'}
]
},

/* =====================================================================
   3.3 ASSET SALE VS STOCK SALE
   ===================================================================== */
{
id: 'm03-l03', minutes: 30,
objectives: [
  'Explain what a buyer receives in an asset sale versus a stock sale',
  'Explain why buyers usually prefer asset purchases and sellers usually prefer stock sales',
  'Describe purchase price allocation and why it is negotiated',
  'Explain the C corporation double-tax trap and the structures that bridge the gap'
],
body: `
<div class="call plain"><span class="tag">In plain English</span>
<p>A buyer can buy the company itself (its shares) or buy the things the company owns (its assets). Buying the company means taking all of its history, good and bad. Buying the assets means picking what you want and leaving the rest behind, and it comes with a large tax benefit for the buyer. What is good for the buyer tends to cost the seller, so this becomes one of the central negotiations in any deal.</p>
</div>

<h2>Stock sale</h2>
<p>The buyer purchases the owner's shares (or membership interests). The legal entity continues unchanged, with a new owner.</p>
<ul>
<li><b>Liabilities:</b> all of them stay with the entity, including unknown ones such as past tax problems or lawsuits from past work. Buyers protect themselves with representations, warranties, indemnification, and escrows.</li>
<li><b>Contracts, licenses, permits:</b> generally stay in place, unless a contract has a change-of-control clause.</li>
<li><b>Tax for the buyer:</b> the buyer's basis in the company's assets does not change (carryover basis). No new depreciation.</li>
<li><b>Tax for the seller:</b> usually one layer of long-term capital gain on the shares. Simple and favorable.</li>
</ul>

<h2>Asset sale</h2>
<p>The company sells selected assets (equipment, inventory, customer lists, goodwill) to the buyer. The seller's entity remains, with the cash and whatever the buyer did not take.</p>
<ul>
<li><b>Liabilities:</b> the buyer assumes only the ones it agrees to. The rest stay with the seller.</li>
<li><b>Contracts and permits:</b> must be assigned, which may require customer, landlord, or government consent. Employees are typically terminated by the seller and rehired by the buyer.</li>
<li><b>Tax for the buyer:</b> a <b>stepped-up basis</b>. The buyer's basis in the assets equals what it paid, so it can depreciate equipment (often immediately under bonus depreciation) and amortize goodwill over 15 years. These deductions reduce the buyer's future taxes.</li>
<li><b>Tax for the seller:</b> gain is calculated asset by asset. Some is capital gain, some ordinary (recapture). For a C corporation, it is far worse (below).</li>
</ul>

<table>
<tr><th></th><th>Stock sale</th><th>Asset sale</th></tr>
<tr><td>Buyer gets</td><td>The entity and all its history</td><td>Chosen assets and chosen liabilities</td></tr>
<tr><td>Buyer tax basis</td><td>Carryover (no step-up)</td><td>Stepped up to price paid</td></tr>
<tr><td>Seller tax (pass-through)</td><td>Mostly capital gain</td><td>Mix of capital gain and ordinary</td></tr>
<tr><td>Seller tax (C corporation)</td><td>One layer of capital gain</td><td>Two layers: corporate, then shareholder</td></tr>
<tr><td>Contracts and permits</td><td>Usually stay</td><td>Must be assigned</td></tr>
<tr><td>Usually preferred by</td><td>Seller</td><td>Buyer</td></tr>
</table>

<h2>What the step-up is worth to the buyer</h2>
<p>Suppose a buyer allocates $5 million to goodwill. In an asset deal, it can amortize that over 15 years: about $333,000 of deductions a year. At a combined tax rate of 25%, that saves about $83,000 a year for 15 years. Discounted to today, the benefit might be worth $600,000 to $900,000, depending on the discount rate. Equipment can be worth even more because it can often be deducted immediately. That value explains why buyers push for asset deals, and why a seller who agrees to one should ask for part of the benefit back in the price.</p>

<h2>Purchase price allocation</h2>
<p>In an asset deal, the total price must be allocated across the assets using a method the IRS prescribes (the residual method, reported by both parties on Form 8594). Buyer and seller want different things:</p>
<ul>
<li>The <b>buyer</b> wants more allocated to assets it can deduct quickly, such as equipment and inventory.</li>
<li>The <b>seller</b> wants more allocated to goodwill (capital gain) and less to recapture assets and non-compete payments (ordinary income).</li>
</ul>
<p>Both parties are generally expected to report the same allocation, so it is negotiated and written into the purchase agreement.</p>

<h2>The C corporation trap</h2>
<div class="call example"><span class="tag">Worked example: same deal, two structures</span>
<p>A C corporation with near-zero asset basis and near-zero stock basis. A buyer will pay $5 million. The owner is a Hawaii resident. Rates are simplified and illustrative.</p>
<table>
<tr><th></th><th class="n">Stock sale</th><th class="n">Asset sale</th></tr>
<tr><td>Price</td><td class="n">$5,000,000</td><td class="n">$5,000,000</td></tr>
<tr><td>Corporate tax on gain (about 26% combined federal and state)</td><td class="n">0</td><td class="n">(1,300,000)</td></tr>
<tr><td>Cash left to distribute to the owner</td><td class="n">5,000,000</td><td class="n">3,700,000</td></tr>
<tr><td>Owner's tax (about 31%: 20% + 3.8% NIIT + 7.25% Hawaii)</td><td class="n">(1,550,000)</td><td class="n">(1,147,000)</td></tr>
<tr class="tot"><td>Owner keeps</td><td class="n">$3,450,000</td><td class="n">$2,553,000</td></tr>
</table>
<p>The asset sale costs the owner about $900,000 more. That is why C corporation owners resist asset deals, and why some buyers will pay more for a stock deal to avoid a fight. It is also why converting to S status years before a sale (to get past the built-in gains period) or other planning can matter so much.</p>
</div>
<p>One related concept you may hear: <b>personal goodwill</b>. In some businesses, part of the goodwill belongs to the owner personally (their relationships and reputation) rather than to the corporation. If properly documented, the owner may sell that personal goodwill directly to the buyer, avoiding the corporate layer on that portion. It is fact-specific and heavily scrutinized, so it is a question for the CPA and attorney.</p>

<h2>Structures that bridge the gap</h2>
<p>Tax advisors use several structures to give the buyer asset-sale tax treatment while giving the seller something closer to stock-sale simplicity. You only need to recognize the names and know they exist:</p>
<ul>
<li><b>Section 338(h)(10) and section 336(e) elections:</b> a stock sale that is treated as an asset sale for tax purposes. Available in certain S corporation and subsidiary sales.</li>
<li><b>F reorganization:</b> before a sale, the S corporation is restructured so the operating business sits in an LLC under a new holding company. The buyer buys the LLC (asset treatment for tax) while contracts generally stay in place. Very common in private equity deals with S corporation sellers, and it makes rolling over equity easier.</li>
</ul>
<p>When the buyer gets the step-up this way, the seller's tax may rise (for example, from recapture), and the seller will usually ask the buyer to "gross up" the price to cover it.</p>

<div class="call hawaii"><span class="tag">Hawaii scenario</span>
<p>A Honolulu medical supply distributor, a C corporation since 1986, receives an offer from a national distributor. The buyer's term sheet says "asset purchase." The owner's CPA has not been involved yet, and the owner assumes his tax will be "capital gains, about 25%."</p>
<p>This is the moment where early coordination pays off. The difference between the owner's assumption and a corporate asset sale could be close to a million dollars. The right next step is a meeting with the CPA before the owner signs anything, with the buyer's term sheet and the company's tax basis information in hand. A good question for the owner to bring to the buyer: "Would you consider a stock purchase, or a price adjustment to reflect the tax cost of an asset deal?"</p>
</div>

<h2>Why it matters</h2>
<div class="call why"><span class="tag">For your role and the CEPA</span>
<p>Asset versus stock is one of the most common "decision considerations" in exit readiness work, and it links entity choice, tax, valuation, and deal terms. EPI expects CEPAs to understand how structure affects net proceeds, and to know when to involve the tax team. You now have the vocabulary to spot the issue in a term sheet and explain it simply.</p></div>
`,
terms: [
  ['Stock sale', 'A sale of the owner\'s shares or membership interests. The entity continues with all its assets and liabilities.'],
  ['Asset sale', 'A sale of selected assets by the company. The buyer assumes only agreed liabilities.'],
  ['Stepped-up basis (in a purchase)', 'The buyer\'s tax basis in acquired assets equals the price paid, creating new depreciation and amortization deductions.'],
  ['Carryover basis', 'In a stock sale, the entity\'s tax basis in its assets stays the same after the sale.'],
  ['Purchase price allocation', 'The division of an asset sale price among asset classes, reported on IRS Form 8594. It determines the seller\'s tax character and the buyer\'s deductions.'],
  ['Personal goodwill', 'Goodwill attributable to the owner personally rather than the company. In some cases it can be sold directly by the owner.'],
  ['Section 338(h)(10) / 336(e)', 'Elections that treat certain stock sales as asset sales for tax purposes.'],
  ['F reorganization', 'A pre-sale restructuring, common with S corporations, that lets a buyer get asset-sale tax treatment while contracts generally stay in place.'],
  ['Gross-up', 'An increase in price to compensate the seller for extra tax caused by a structure the buyer wants.']
],
quiz: [
  {q: 'Why do buyers usually prefer asset purchases?',
   options: ['Stepped-up basis creates tax deductions, and they can leave most unknown liabilities behind', 'Asset deals have no legal documents', 'Sellers pay no tax in asset deals', 'Asset deals never require consents'], a: 0,
   why: 'The tax step-up and liability protection are the two main reasons.'},
  {q: 'In a stock sale, what happens to a lawsuit arising from work the company did three years before the sale?',
   options: ['It stays with the company, now owned by the buyer, subject to indemnification in the purchase agreement', 'It automatically stays with the seller personally', 'It disappears', 'The bank assumes it'], a: 0,
   why: 'The entity keeps its liabilities in a stock sale. Buyers protect themselves through the purchase agreement.'},
  {q: 'Why is an asset sale especially costly for a C corporation owner?',
   options: ['The corporation pays tax on the gain, then the owner pays tax again when the proceeds are distributed', 'C corporations cannot sell assets', 'Asset sales are taxed at 50%', 'The buyer pays the tax'], a: 0,
   why: 'Two layers of tax versus one in a stock sale.'},
  {q: 'In purchase price allocation, which allocation does the seller generally prefer?',
   options: ['More to goodwill and less to depreciated equipment and non-compete payments', 'More to equipment', 'More to the non-compete', 'The seller has no preference'], a: 0,
   why: 'Goodwill gain is usually capital gain; recapture and non-compete payments are ordinary income.'},
  {q: 'A buyer insists on a structure that gives it a step-up but increases the seller\'s tax. What is a common response?',
   options: ['Ask for a gross-up of the price to cover the extra tax', 'Accept it without discussion', 'Refuse to sell', 'Change the entity to a sole proprietorship'], a: 0,
   why: 'The step-up is valuable to the buyer, so sellers negotiate to share the benefit.'}
],
exercise: `
<p>An S corporation owner receives two offers for her business:</p>
<ul>
<li><b>Offer A:</b> $7.0 million, stock purchase.</li>
<li><b>Offer B:</b> $7.3 million, asset purchase. The owner's CPA estimates the asset structure would add $180,000 of tax because of depreciation recapture.</li>
</ul>
<p>Beyond price and tax, list at least four other factors she should weigh (think about liabilities, contracts, employees, licenses, and escrow). Which offer would you want to understand better, and what questions would you send to her M&amp;A advisor?</p>`,
discussion: `
<p>Many owners formed their businesses decades ago without thinking about exit taxes. If you meet an owner of a C corporation who plans to sell in two to three years, what is the value of raising the entity question now? How would you raise it without giving tax advice?</p>`,
resources: [
  {title: 'The Art of Selling Your Business', by: 'John Warrillow', note: 'Covers asset versus stock from the seller\'s point of view with real examples.'},
  {title: 'IRS Form 8594 instructions', by: 'irs.gov', url: 'https://www.irs.gov/forms-pubs/about-form-8594', note: 'Shows the asset classes used in purchase price allocation.'}
]
},

/* =====================================================================
   3.4 TOOLS THAT SHAPE THE TAX ON AN EXIT
   ===================================================================== */
{
id: 'm03-l04', minutes: 30,
objectives: [
  'Explain how an installment sale defers tax and what risk it adds',
  'Describe the QSBS exclusion and which businesses can qualify',
  'Describe the ESOP section 1042 rollover',
  'Explain why some planning must be completed before a letter of intent'
],
body: `
<div class="call plain"><span class="tag">In plain English</span>
<p>A few tax tools can make a large difference in what an owner keeps. Some spread the tax over time. Some reduce or eliminate it. Almost all of them have strict eligibility rules and deadlines, and several stop working once a deal is too far along. Your job is to know they exist, recognize which owners might qualify, and make sure the tax advisors look at them early.</p>
</div>

<h2>Installment sales</h2>
<p>When the seller receives part of the price over time, for example through a seller note, the gain is generally taxed as the payments are received rather than all at closing. This is common in sales to family members, management, and smaller buyers who cannot pay everything upfront.</p>
<ul>
<li><b>Benefit:</b> tax is deferred, and spreading gain over several years can keep more of it in lower brackets.</li>
<li><b>Risk:</b> the seller is now a lender to the buyer. If the business struggles under new ownership, payments may stop. The note is usually subordinated to the bank's loan.</li>
<li><b>Limits:</b> depreciation recapture is taxed in the year of sale even if no cash is received for it. Very large installment notes can trigger an interest charge on the deferred tax. Installment treatment generally does not apply to inventory or publicly traded stock.</li>
</ul>

<h2>Qualified small business stock (QSBS)</h2>
<p>Section 1202 lets shareholders exclude a large amount of gain from federal tax on the sale of qualifying C corporation stock. It is one of the most powerful exit tax tools, and one of the most technical.</p>
<p>Main requirements, simplified:</p>
<ul>
<li>The company must be a <b>C corporation</b>, and the shareholder must have acquired the stock at original issuance (not bought from another shareholder).</li>
<li>The company's gross assets must have been below a limit when the stock was issued: $50 million for stock issued before July 5, 2025, and $75 million for stock issued after.</li>
<li>The company must be in a qualified active business. Many fields are excluded, including health, law, engineering, architecture, accounting, consulting, financial services, and <b>hotels and restaurants</b>, along with farming.</li>
<li>Holding period: five years for full exclusion. For stock issued after July 4, 2025, 2025 legislation allows a 50% exclusion after three years and 75% after four.</li>
<li>The exclusion is capped per company, generally at the greater of 10 times the shareholder's basis or $10 million (raised to $15 million, indexed, for stock issued after July 4, 2025).</li>
</ul>
<p>QSBS matters most for founder-led companies formed as C corporations, such as technology, manufacturing, and distribution businesses. State treatment varies, so the state tax result needs separate confirmation.</p>

<div class="call hawaii"><span class="tag">Hawaii note</span>
<p>Several industries that are common among Hawaii family businesses, including hotels, restaurants, farming, and many professional services, are excluded from QSBS. When you meet a C corporation owner in one of those fields, QSBS usually will not help. For a distributor, manufacturer, or technology company formed as a C corporation, it is worth asking whether the CPA has looked at it.</p>
</div>

<h2>ESOPs and the section 1042 rollover</h2>
<p>An employee stock ownership plan is a qualified retirement plan that buys company stock for employees. Module 6 covers ESOPs as an exit option. Two tax features matter here:</p>
<ul>
<li><b>Section 1042 rollover (C corporations):</b> an owner who sells C corporation stock to an ESOP, where the ESOP owns at least 30% after the sale, can defer the capital gain by reinvesting the proceeds in qualified replacement property (generally stocks and bonds of U.S. operating companies) within a set window. If the owner holds the replacement property until death, the deferred gain may never be taxed because of the basis step-up at death. Legislation has also created a limited version of this deferral for S corporation owners starting in 2028.</li>
<li><b>S corporation ESOPs:</b> the ESOP's share of S corporation income is not subject to federal income tax. A company that is 100% ESOP-owned S corporation generally pays no federal income tax, which leaves more cash to repay the debt used to buy out the owner.</li>
</ul>

<h2>Planning that must happen before the deal</h2>
<p>Some of the most valuable strategies depend on timing:</p>
<ul>
<li><b>Gifting shares to family or trusts.</b> Gifts made before a buyer and price exist can be valued with discounts at lower values (Module 4). Gifts made after a sale is effectively agreed can be treated as if the owner sold the shares and then gave away cash, which means the owner pays the income tax and loses much of the benefit. This is called the assignment of income doctrine.</li>
<li><b>Charitable gifts of shares.</b> Similar timing rules apply to donating shares to a charitable trust or donor-advised fund before a sale (Module 11).</li>
<li><b>Entity conversions.</b> The built-in gains period after a C-to-S conversion runs five years.</li>
<li><b>Residency changes.</b> A genuine change of domicile takes time and planning.</li>
<li><b>Holding periods.</b> QSBS and long-term capital gain treatment both depend on how long shares are held.</li>
</ul>

<div class="call example"><span class="tag">Worked example: the planning window closes</span>
<p>An owner signs a letter of intent to sell for $12 million. The next week, he tells you he wants to put 30% of the company into trusts for his children "before the sale, to save estate tax."</p>
<p>A year earlier, before any buyer, an appraiser might have valued a 30% non-controlling, non-marketable interest well below 30% of $12 million, and the future growth would have passed to the children outside his estate. Now, with a signed LOI at a known price, a gift is likely to be valued close to its share of the deal price, and the income tax on the sale may still fall on him. Some planning may still be possible, and his attorney and CPA will know. But the best version of this strategy required acting before the LOI.</p>
</div>

<h2>Why it matters</h2>
<div class="call why"><span class="tag">For your role</span>
<p>This lesson is the clearest example of why exit planning starts years before a sale. In an exit readiness assessment, one of your most important contributions is to flag time-sensitive tax and estate questions early and get them on the specialists' agendas while the options are still open. A simple question like "Has your CPA looked at whether any planning needs to happen before you talk to buyers?" can be worth a great deal.</p></div>
<div class="call watch"><span class="tag">A reminder about figures</span>
<p>Tax law changes. Several rules in this module were modified by 2025 federal legislation. Treat every figure here as a starting point to confirm with the tax team for any real client.</p></div>
`,
terms: [
  ['Installment sale', 'A sale in which at least one payment is received after the year of sale. Gain is generally taxed as payments are received.'],
  ['Seller note', 'A loan from the seller to the buyer for part of the purchase price.'],
  ['Qualified small business stock (QSBS)', 'Stock in a qualifying C corporation that may allow a large federal gain exclusion under section 1202.'],
  ['Section 1042 rollover', 'A deferral of capital gain for owners who sell C corporation stock to an ESOP and reinvest in qualified replacement property.'],
  ['Qualified replacement property', 'Securities of U.S. operating companies purchased to complete a section 1042 rollover.'],
  ['Assignment of income doctrine', 'The principle that income is taxed to the person who earned it. Gifts made after a sale is effectively agreed may not shift the gain.'],
  ['Letter of intent (LOI)', 'A document, usually non-binding on price, that sets out the main terms of a proposed sale and often starts exclusivity.']
],
quiz: [
  {q: 'What is the main risk to a seller who accepts a large seller note?',
   options: ['The buyer may not be able to pay if the business struggles under new ownership', 'The seller pays more tax upfront', 'Seller notes are illegal', 'The bank will require the seller to repay the note'], a: 0,
   why: 'The seller becomes a lender, usually behind the bank, and depends on the new owner\'s success.'},
  {q: 'Which of these businesses would generally NOT qualify for the QSBS exclusion?',
   options: ['A restaurant group organized as a C corporation', 'A software company organized as a C corporation', 'A manufacturer organized as a C corporation', 'A distributor organized as a C corporation'], a: 0,
   why: 'Restaurants and hotels are excluded from qualified trades or businesses under section 1202.'},
  {q: 'To use the section 1042 rollover, the ESOP must own at least what share of the company after the sale?',
   options: ['30%', '10%', '51%', '100%'], a: 0,
   why: 'The ESOP must own at least 30% after the sale, and the company must be a C corporation for full 1042 treatment.'},
  {q: 'Why is gifting shares to children right after signing an LOI usually less effective than gifting years earlier?',
   options: ['The value is now close to the deal price, and the income tax on the sale may still fall on the owner', 'Gifts are prohibited after an LOI', 'Children cannot own shares', 'Gift tax rates double after an LOI'], a: 0,
   why: 'Discounts shrink once a price is known, and the assignment of income doctrine may apply.'},
  {q: 'An S corporation that is 100% owned by an ESOP generally pays how much federal income tax?',
   options: ['None, because the ESOP\'s share of S corporation income is not taxed', '21%', '37%', 'The same as any other S corporation'], a: 0,
   why: 'This is a major advantage of S corporation ESOPs and helps repay acquisition debt.'}
],
exercise: `
<p>Make a timeline for an owner who expects to sell her C corporation distribution company in about four years. Place each of these on the timeline and note why its timing matters:</p>
<ul>
<li>Meeting with CPA about entity structure (including whether to convert to S status or preserve QSBS eligibility)</li>
<li>First informal valuation</li>
<li>Gifting a minority interest to trusts for her children</li>
<li>Considering a donor-advised fund contribution</li>
<li>Moving from compiled to reviewed financial statements</li>
<li>Hiring an M&amp;A advisor</li>
</ul>
<p>Which items must happen before a letter of intent to be effective?</p>`,
discussion: `
<p>Owners often hear about tax strategies from friends, at conferences, or online, and arrive excited about one ("I heard I can avoid all tax with an ESOP"). How would you respond to keep them engaged while making sure a qualified advisor tests whether it fits their situation?</p>`,
resources: [
  {title: 'National Center for Employee Ownership (NCEO)', by: 'nceo.org', url: 'https://www.nceo.org/', note: 'The leading nonprofit resource on ESOPs, including section 1042 and S corporation ESOPs. Useful for Module 6 as well.'},
  {title: 'IRS Publication 537: Installment Sales', by: 'irs.gov', url: 'https://www.irs.gov/publications/p537', note: 'The IRS explanation of installment sale rules.'}
]
}
]);
