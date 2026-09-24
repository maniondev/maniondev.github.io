FBE.add([
/* =====================================================================
   11.1 PRE-TRANSACTION PLANNING WINDOWS
   ===================================================================== */
{
id: 'm11-l01', minutes: 25,
objectives: [
  'Sequence planning actions by how far ahead of a transaction they must happen',
  'Identify what becomes difficult or impossible after an LOI',
  'Build a pre-transaction checklist for an owner'
],
body: `
<div class="call plain"><span class="tag">Summary</span>
<p>Many of the most valuable planning steps have deadlines, and most of those deadlines arrive before the owner has even decided to sell. Once a buyer and a price are on the table, options narrow quickly. Organizing planning by "how far ahead does this need to happen?" is one of the most practical tools an advisor has.</p>
</div>

<h2>Planning windows</h2>
<table>
<tr><th>Window</th><th>Actions that fit here</th></tr>
<tr><td><b>3 to 5+ years before</b></td><td>Entity structure review (C-to-S conversion and the built-in gains period; QSBS holding periods); separating real estate from operations; value acceleration; management development; initial estate freeze and gifting at lower values; residency planning if relevant</td></tr>
<tr><td><b>1 to 2 years before</b></td><td>Reviewed or audited financials; sell-side QoE; cleaning up legal and compliance issues; key employee retention agreements; funding trusts; GRATs if a value jump is expected; choosing advisors; building the owner\'s financial plan and "number"</td></tr>
<tr><td><b>Before signing an LOI</b></td><td>Charitable gifts of shares; final gifts to trusts; confirming the structure preferences (asset versus stock); testing the market; decisions about real estate</td></tr>
<tr><td><b>LOI to closing</b></td><td>Negotiating allocation, working capital, escrow and earnout terms; employment and consulting terms; planning for tax payments; setting up accounts and an investment policy for proceeds</td></tr>
<tr><td><b>After closing</b></td><td>Estimated tax payments; investing proceeds in stages; updating estate documents for the new asset mix; insurance changes; managing earnouts, notes, and rollover equity; the owner\'s next chapter</td></tr>
</table>

<h2>Effect of the letter of intent</h2>
<ul>
<li><b>Valuation certainty:</b> once there is a price, gifts are valued near that price, which removes most of the benefit of gifting at discounted values.</li>
<li><b>Assignment of income:</b> if a sale is effectively certain, gains on shares given away may still be taxed to the donor (Lesson 3.4).</li>
<li><b>Exclusivity and timelines:</b> the owner\'s attention and the deal calendar are consumed by diligence.</li>
<li><b>Leverage:</b> terms not settled in the LOI tend to go the buyer\'s way.</li>
</ul>

<div class="call example"><span class="tag">Worked example: early and late planning</span>
<p><b>Owner A</b> started planning four years before selling. She converted to S status early, gifted 30% of non-voting shares to trusts for her children at a discounted value, set up a donor-advised fund with shares before marketing began, and had a financial plan showing her number. At closing, her estate was smaller, her charitable goals were funded efficiently, and she knew exactly how to invest the proceeds.</p>
<p><b>Owner B</b> received an unsolicited offer and signed an LOI within a month. Afterward, he asked about gifting to his children and giving to charity. Most of the benefit was gone: the value was fixed, the sale was nearly certain, and the timeline left no room. He paid more tax, and his estate was larger.</p>
<p>Same price. Very different outcomes, driven by timing alone.</p>
</div>

<div class="call hawaii"><span class="tag">Advisor role</span>
<p>Unsolicited offers are common, and owners often call their banker first. One of the most valuable things a Family Business advisor can do is create a short pause: "Before you sign anything, let\'s get your CPA, attorney, and our planning team together for one meeting." That meeting can protect options worth far more than any delay costs.</p>
</div>

<h2>Relevance to the role</h2>
<div class="call why"><span class="tag">Application</span>
<p>Planning windows are fundamentally a coordination problem: the owner\'s CPA, attorney, wealth planner, trust team, and M&amp;A advisor each own different items with different deadlines. Keeping everyone on one timeline is the role\'s core value.</p></div>
`,
terms: [
  ['Planning window', 'The period during which a particular planning action is possible or most effective.'],
  ['Pre-LOI planning', 'Actions that must be completed before a letter of intent to preserve their benefits.'],
  ['Investment policy statement (IPS)', 'A written plan for how proceeds will be invested, based on goals and risk tolerance.']
],
quiz: [
  {q: 'Why do gifts made after an LOI usually provide less benefit?',
   options: ['The value is close to the deal price and the income tax may still fall on the donor', 'Gifts are prohibited after an LOI', 'Trusts cannot receive shares after an LOI', 'Gift tax doubles'], a: 0,
   why: 'Valuation certainty and assignment of income reduce the benefit.'},
  {q: 'Which action usually belongs three or more years before a sale?',
   options: ['Reviewing entity structure, including a C-to-S conversion', 'Negotiating the working capital peg', 'Paying estimated taxes on proceeds', 'Choosing the escrow period'], a: 0,
   why: 'The built-in gains period after conversion is five years.'},
  {q: 'An owner calls to say he received an offer and plans to sign next week. What is the best advice?',
   options: ['Pause long enough to convene the CPA, attorney, and planning team before signing', 'Sign quickly before the buyer changes its mind', 'Ignore the offer', 'Give all shares to charity immediately'], a: 0,
   why: 'A short pause can preserve valuable options.'},
  {q: 'Which of these is typically done between LOI and closing?',
   options: ['Negotiating purchase price allocation and setting up an investment plan for proceeds', 'Converting from C to S status to avoid built-in gains', 'Starting a five-year value acceleration plan', 'Developing a successor over several years'], a: 0,
   why: 'Those items fit the deal period. The others need much longer.'},
  {q: 'What is the main lesson of the two-owner example?',
   options: ['Timing of planning, not the sale price, drove very different outcomes', 'Unsolicited offers are always bad', 'Gifting is never useful', 'Charitable giving is only possible after a sale'], a: 0,
   why: 'Early planning preserved options that late planning lost.'}
],
exercise: `
<p>Create a one-page visual timeline (in a spreadsheet or slide) of planning windows for an owner expecting to sell in about four years. Assign each action to a responsible party: the owner, CPA, attorney, wealth planner, trust team, valuation specialist, M&amp;A advisor, or you. This is the kind of roadmap a client could keep on the wall.</p>`,
discussion: `
<p>Owners who receive a strong offer often feel urgency and fear the buyer will walk away. How would you balance respecting the opportunity with protecting their planning options?</p>`,
resources: [
  {title: 'The Art of Selling Your Business', by: 'John Warrillow', note: 'On responding to unsolicited offers.'},
  {title: 'Walking to Destiny', by: 'Christopher M. Snider', note: 'EPI\'s perspective on starting planning early.'}
]
},

/* =====================================================================
   11.2 CHARITABLE STRATEGIES
   ===================================================================== */
{
id: 'm11-l02', minutes: 30,
objectives: [
  'Explain how giving appreciated shares before a sale avoids capital gains tax on the gifted portion',
  'Compare donor-advised funds, charitable remainder trusts, and private foundations',
  'Identify timing rules and practical complications, including S corporation shares'
],
body: `
<div class="call plain"><span class="tag">Summary</span>
<p>An owner who wants to give to charity can often do much more good, at lower cost, by giving shares of the business before a sale instead of giving cash after. The charity (or a charitable trust) sells the shares without paying capital gains tax, and the owner gets a charitable deduction. Some structures also pay the owner an income for life. The timing has to be right, and not every type of share works easily.</p>
</div>

<h2>Giving shares instead of cash</h2>
<div class="call example"><span class="tag">Worked example: gifting shares versus cash</span>
<p>An owner with near-zero basis plans to give $1 million to charity.</p>
<table>
<tr><th></th><th class="n">Sell shares, give cash</th><th class="n">Give shares before the sale</th></tr>
<tr><td>Shares worth</td><td class="n">$1,000,000</td><td class="n">$1,000,000</td></tr>
<tr><td>Capital gains tax on those shares (about 27% federal and Hawaii)</td><td class="n">(270,000)</td><td class="n">0</td></tr>
<tr><td>Amount reaching charity</td><td class="n">$730,000 (or the owner adds $270,000 to reach $1M)</td><td class="n">$1,000,000</td></tr>
<tr><td>Charitable deduction</td><td class="n">Cash given</td><td class="n">Fair market value of the shares, subject to limits</td></tr>
</table>
<p>Giving shares avoids the capital gains tax on that portion entirely, so the same gift costs the owner much less.</p>
</div>

<h2>The vehicles</h2>
<h3>Donor-advised fund (DAF)</h3>
<p>An account at a sponsoring public charity (including those affiliated with financial institutions and community foundations). The owner contributes assets, takes a deduction in that year, and recommends grants to charities over time. Simple, low-cost, and flexible. Many DAF sponsors can accept private company shares, subject to their review.</p>
<h3>Charitable remainder trust (CRT)</h3>
<p>The owner contributes shares to an irrevocable trust. The trust sells them without paying tax, invests the full proceeds, and pays the owner (and often a spouse) an income stream for life or a term of years. What remains at the end goes to charity. The owner gets a deduction for the present value of the charity\'s future share (which must be at least 10% of the contribution). Two types: a <b>unitrust</b> (CRUT) pays a fixed percentage of the trust\'s value each year; an <b>annuity trust</b> (CRAT) pays a fixed dollar amount. Income paid to the owner is taxed as it comes out, so the CRT defers rather than eliminates tax on the owner\'s share, while the charity\'s share is never taxed.</p>
<h3>Private foundation</h3>
<p>A family-controlled charity. Offers the most control and a way to involve the next generation, but has higher costs, annual minimum distribution requirements, excise taxes, and less favorable deduction limits for gifts of private company stock (generally limited to basis rather than fair market value). Usually considered for larger charitable commitments.</p>
<h3>Charitable lead trust (CLT)</h3>
<p>The reverse of a CRT: the charity receives payments for a term, and the remainder passes to family, potentially at a reduced gift or estate tax cost. Used in larger estate plans.</p>

<h2>Timing and complications</h2>
<ul>
<li><b>Before a binding sale:</b> the gift must be made before the sale is effectively certain. If the owner gives shares after the buyer and terms are essentially locked in, the IRS may treat the owner as having sold the shares and given away cash, taxing the gain to the owner.</li>
<li><b>Qualified appraisal:</b> gifts of private company stock above certain amounts require a qualified appraisal to support the deduction.</li>
<li><b>S corporation shares:</b> charities that hold S corporation stock generally owe tax on their share of income and gain (it is treated as unrelated business income), and CRTs cannot hold S corporation stock without losing their tax exemption. Some DAFs accept S shares with special handling. This needs specialist advice, often with a pre-sale restructuring.</li>
<li><b>Deduction limits:</b> deductions for gifts of appreciated property to public charities are generally limited to a share of the donor\'s adjusted gross income, with a carryforward. Legislation in 2025 also added limits for itemizers beginning in 2026, including a small floor below which charitable deductions do not count. The CPA will model the net benefit.</li>
</ul>

<div class="call hawaii"><span class="tag">Hawaii context</span>
<p>Hawaii has a strong tradition of family and community philanthropy. Community foundations here offer donor-advised funds and deep knowledge of local nonprofits. For owners who want their business legacy to become a community legacy, a pre-sale charitable plan can connect the two.</p>
</div>

<h2>Relevance to the role</h2>
<div class="call why"><span class="tag">Application</span>
<p>Charitable planning is a clear example of a pre-LOI planning window, and it often matters personally to owners. Asking "Is charitable giving part of your plans?" early in discovery can open a meaningful conversation and preserve a valuable option.</p></div>
`,
terms: [
  ['Donor-advised fund (DAF)', 'A charitable account at a sponsoring public charity. The donor takes an immediate deduction and recommends grants over time.'],
  ['Charitable remainder trust (CRT)', 'An irrevocable trust that pays income to the donor for life or a term, with the remainder to charity.'],
  ['CRUT / CRAT', 'CRTs paying a fixed percentage of trust value (unitrust) or a fixed dollar amount (annuity trust).'],
  ['Private foundation', 'A family-controlled charity with more control and more rules and costs.'],
  ['Charitable lead trust (CLT)', 'A trust that pays charity for a term, with the remainder to family.'],
  ['Unrelated business taxable income (UBTI)', 'Income a charity earns from business activity that is subject to tax, including income from S corporation shares.']
],
quiz: [
  {q: 'Why is giving shares before a sale more efficient than giving cash after?',
   options: ['The charity or trust sells without paying capital gains tax on the gifted shares', 'Charities pay more for shares', 'Cash gifts are not deductible', 'Buyers pay a premium for charity shares'], a: 0,
   why: 'The built-in gain on the donated portion is never taxed to the owner.'},
  {q: 'An owner wants an income stream for life, a charitable legacy, and to avoid immediate capital gains tax on part of her shares. Which vehicle fits best?',
   options: ['A charitable remainder trust', 'A donor-advised fund', 'A charitable lead trust', 'A revocable living trust'], a: 0,
   why: 'A CRT pays the donor income, and the remainder goes to charity.'},
  {q: 'What is a key complication with donating S corporation shares?',
   options: ['Charities generally owe tax on income and gain from S shares, and CRTs cannot hold them without problems', 'S shares cannot be given away', 'S shares are worth nothing to charity', 'S shares avoid all taxes'], a: 0,
   why: 'S corporation shares create unrelated business income for charities.'},
  {q: 'When must shares be given to charity to avoid the gain being taxed to the owner?',
   options: ['Before the sale is effectively certain', 'Any time before closing', 'Within a year after closing', 'Timing does not matter'], a: 0,
   why: 'Assignment of income rules apply once a sale is essentially locked in.'},
  {q: 'Which vehicle offers the family the most control but the highest cost and most rules?',
   options: ['Private foundation', 'Donor-advised fund', 'CRT', 'Direct gift to a public charity'], a: 0,
   why: 'Foundations offer control at the cost of complexity.'}
],
exercise: `
<p>An owner with C corporation stock (near-zero basis) will sell in about 18 months for an expected $12 million. She wants to give $1.5 million to charity over her lifetime and wants income in retirement. Outline two charitable approaches (for example, a DAF and a CRT), with the likely timing, benefits, and questions for her CPA and attorney. Estimate the capital gains tax avoided under each.</p>`,
discussion: `
<p>How would you raise charitable planning with an owner who has not mentioned giving? How would you avoid making it sound like a sales pitch for the bank\'s charitable services?</p>`,
resources: [
  {title: 'IRS Publication 526: Charitable Contributions', by: 'irs.gov', url: 'https://www.irs.gov/publications/p526', note: 'Deduction rules and limits.'},
  {title: 'Hawaii Community Foundation', by: 'hawaiicommunityfoundation.org', url: 'https://www.hawaiicommunityfoundation.org/', note: 'Local DAF sponsor with knowledge of Hawaii nonprofits.'}
]
},

/* =====================================================================
   11.3 FROM OPERATOR TO INVESTOR
   ===================================================================== */
{
id: 'm11-l03', minutes: 25,
objectives: [
  'Explain the shift from concentrated business wealth to liquid, diversified wealth',
  'Describe a practical approach to investing sale proceeds',
  'Identify common mistakes owners make after a liquidity event',
  'Explain how uncertain proceeds (earnouts, notes, rollover) should be treated'
],
body: `
<div class="call plain"><span class="tag">Summary</span>
<p>After a sale, the owner stops running a business they understood and controlled, and starts owning a portfolio they may not understand and cannot control. That shift is both financial and emotional. Good planning slows it down, sets clear rules for the money, and protects against the most common mistakes, which usually happen in the first year or two.</p>
</div>

<h2>Concentrated and diversified risk</h2>
<p>As an operator, the owner took concentrated risk on one business but felt in control. As an investor, they hold diversified assets with lower overall risk, but they watch prices move every day without any control. Many owners find this harder than expected, and some react by taking concentrated risks again, often in areas they know less well than their old business.</p>

<h2>Managing proceeds</h2>
<ul>
<li><b>Set aside taxes first:</b> the tax on the sale is due (with estimated payments) in the months after closing. Keep that money safe and liquid.</li>
<li><b>A "decision-free" period:</b> many advisors recommend avoiding major new commitments for six to twelve months after a sale while the owner adjusts.</li>
<li><b>Match assets to time horizons:</b> a common structure holds one to two years of spending in cash, several years in high-quality bonds, and the rest in long-term growth investments. This lets the owner ride through market declines without selling at the wrong time.</li>
<li><b>An investment policy statement:</b> written goals, risk tolerance, and rules for how the money will be managed. It keeps decisions steady when markets move.</li>
<li><b>Staged investing:</b> some owners invest proceeds in stages over months to reduce the regret of investing everything just before a decline.</li>
</ul>
<p>Specific investment recommendations come from licensed investment professionals. Your role is to make sure the plan connects to the owner\'s cash flow needs, taxes, and goals.</p>

<h2>Contingent proceeds</h2>
<ul>
<li><b>Earnouts:</b> plan as if they may not pay. If they do, treat them as a bonus to the plan.</li>
<li><b>Seller notes:</b> a loan to the buyer. Consider the credit risk and do not depend on the payments for essential spending until they are well established.</li>
<li><b>Rollover equity:</b> illiquid and uncertain. Count it at a conservative value, and remember it adds concentration risk.</li>
<li><b>Escrows:</b> assume they may not be released in full.</li>
</ul>

<h2>Common mistakes</h2>
<ul>
<li>Lending money to friends and family, or investing in their ventures</li>
<li>Buying or starting another business quickly to fill the void</li>
<li>Large lifestyle upgrades before the plan is clear</li>
<li>Concentrating again, for example in real estate or a single stock, without a plan</li>
<li>Forgetting the tax payments</li>
<li>Not updating the estate plan for the new mix of assets</li>
</ul>

<div class="call example"><span class="tag">Worked example: organizing proceeds</span>
<p>An owner receives $7.5 million after-tax cash at closing plus a $1 million escrow expected in 18 months and $2 million of rollover equity.</p>
<table>
<tr><th>Purpose</th><th class="n">Amount</th><th>Where</th></tr>
<tr><td>Remaining tax payments due</td><td class="n">$900,000</td><td>Cash or Treasury bills until paid</td></tr>
<tr><td>Two years of spending</td><td class="n">$600,000</td><td>Cash and short-term</td></tr>
<tr><td>Years 3 to 8 of spending</td><td class="n">$1,800,000</td><td>High-quality bonds</td></tr>
<tr><td>Long-term growth</td><td class="n">$4,200,000</td><td>Diversified portfolio per the IPS</td></tr>
<tr><td>Escrow (not yet received)</td><td class="n">$1,000,000</td><td>Not counted in the spending plan until released</td></tr>
<tr><td>Rollover equity</td><td class="n">$2,000,000</td><td>Counted conservatively; potential upside</td></tr>
</table>
<p>The owner can see exactly where the next several years of spending will come from, which makes the long-term portfolio easier to leave alone.</p>
</div>

<div class="call hawaii"><span class="tag">Bank role</span>
<p>At this point, the bank\'s wealth management and trust teams become central. A smooth handoff from the Family Business team to the wealth team, with the owner\'s goals, cash flow plan, and uncertain proceeds clearly documented, is one of the most important moments in the whole engagement, both for the client and for the bank relationship.</p>
</div>

<h2>Relevance to the role</h2>
<div class="call why"><span class="tag">Application</span>
<p>EPI\'s fifth stage of value maturity is "manage wealth." The planning does not end at closing. Owners who have a clear plan for their proceeds and their time are much more likely to look back on the sale as a success.</p></div>
`,
terms: [
  ['Liquidity event', 'An event that converts an illiquid ownership stake into cash or marketable assets.'],
  ['Decision-free zone', 'A period after a sale when the owner avoids major new commitments.'],
  ['Time-segmented portfolio', 'Assets divided by when they will be needed, such as cash, bonds, and long-term growth.'],
  ['Estimated tax payments', 'Periodic tax payments required on income, including large gains, not covered by withholding.']
],
quiz: [
  {q: 'What should an owner do first with sale proceeds?',
   options: ['Set aside the taxes that will be due', 'Invest everything in stocks', 'Buy another business', 'Pay off friends\' loans'], a: 0,
   why: 'Taxes on the sale are due soon and must be kept safe and liquid.'},
  {q: 'How should an earnout be treated in the owner\'s spending plan?',
   options: ['As possible upside, not as money the plan depends on', 'As guaranteed income', 'As part of cash at closing', 'As a tax deduction'], a: 0,
   why: 'Earnouts often pay less than the maximum.'},
  {q: 'Why keep one to two years of spending in cash after a sale?',
   options: ['So the owner does not have to sell investments during a market decline', 'Cash earns the highest returns', 'It is required by law', 'To pay the buyer'], a: 0,
   why: 'A cash reserve lets long-term investments recover from declines.'},
  {q: 'Which is a common mistake after a liquidity event?',
   options: ['Quickly buying another business to fill the void', 'Writing an investment policy statement', 'Updating the estate plan', 'Setting aside taxes'], a: 0,
   why: 'Impulsive reinvestment often concentrates risk again.'},
  {q: 'Who should make specific investment recommendations for the proceeds?',
   options: ['Licensed investment professionals', 'The Family Business advisor', 'The buyer', 'The M&A advisor'], a: 0,
   why: 'Investment advice requires the appropriate licenses.'}
],
exercise: `
<p>Write a handoff memo from the Family Business team to the wealth management team for an owner who just sold. Include: a summary of the transaction, proceeds received and expected (with risk notes), the owner\'s cash flow needs from the financial plan, tax payments due, estate plan changes needed, the owner\'s concerns and personality as an investor, and open items. One page.</p>`,
discussion: `
<p>An owner who sold six months ago calls you excited about investing $2 million in a friend\'s restaurant. How would you respond, knowing you are not his investment advisor?</p>`,
resources: [
  {title: 'Finish Big', by: 'Bo Burlingham', note: 'Stories of what owners did with their money and time after selling.'},
  {title: 'Your bank\'s wealth management team', by: 'Internal', note: 'Ask how they onboard clients after a liquidity event.'}
]
},

/* =====================================================================
   11.4 INSURANCE AND RISK MANAGEMENT
   ===================================================================== */
{
id: 'm11-l04', minutes: 25,
objectives: [
  'Identify the insurance needs of an owner before and after a transition',
  'Explain key person, disability buy-out, and estate liquidity insurance',
  'Explain why life insurance is often held in an ILIT',
  'Recognize coverage gaps that open after a sale'
],
body: `
<div class="call plain"><span class="tag">Summary</span>
<p>Insurance protects the plan against events that would otherwise disrupt it: the death or disability of an owner or key person, an estate tax bill the family cannot pay, or a claim after the business is sold. Owners often have outdated coverage, and new gaps open after a sale when the company stops paying for things.</p>
</div>

<h2>Before a transition</h2>
<table>
<tr><th>Coverage</th><th>What it protects</th></tr>
<tr><td><b>Key person life and disability</b></td><td>The business, if a critical person dies or becomes disabled: covers lost profits and the cost of replacement</td></tr>
<tr><td><b>Buy-sell funding (life)</b></td><td>The co-owners and the family, by funding the purchase of a deceased owner\'s shares (Lesson 4.4)</td></tr>
<tr><td><b>Disability buy-out</b></td><td>Funds the purchase of a disabled owner\'s interest</td></tr>
<tr><td><b>Business overhead expense</b></td><td>Pays business expenses while an owner is disabled</td></tr>
<tr><td><b>Estate liquidity (life)</b></td><td>Pays estate taxes and expenses so the family does not have to sell the business or land</td></tr>
<tr><td><b>Property, liability, D&amp;O, employment practices, cyber</b></td><td>The business itself; buyers will review these in diligence</td></tr>
</table>

<h2>Irrevocable life insurance trusts (ILITs)</h2>
<p>Life insurance owned by the insured person is included in their estate. Holding policies in an ILIT keeps the proceeds out of the taxable estate while making them available to the family, for example to buy assets from the estate or lend to it so taxes can be paid. Transferring an existing policy into an ILIT generally keeps it in the estate if the insured dies within three years, so new policies are often purchased by the trust directly.</p>

<div class="call example"><span class="tag">Worked example: estate liquidity</span>
<p>Kenji and Mae (Lesson 4.2) face a Hawaii estate tax that could exceed $1.5 million, with most of their wealth in the business and real estate. A second-to-die life insurance policy (paying at the second spouse\'s death) held in an ILIT could provide the cash. At the second death, the trust uses the proceeds to buy assets from the estate or lend to it, and the estate pays the tax. The business and land stay in the family, and the insurance proceeds are not themselves taxed in the estate.</p>
</div>

<h2>After a sale: gaps that open</h2>
<ul>
<li><b>Health insurance:</b> the owner loses the company plan. COBRA continuation is usually available for a limited period. Owners under 65 need a plan to bridge to Medicare.</li>
<li><b>Life and disability:</b> group coverage and business-paid policies may end. Buy-sell policies may no longer be needed, or could be repurposed for estate planning.</li>
<li><b>Liability:</b> claims-made policies (such as D&amp;O or professional liability) may need "tail" coverage for claims arising from events before the sale.</li>
<li><b>Umbrella liability:</b> a larger personal balance sheet increases exposure to lawsuits.</li>
<li><b>Long-term care:</b> becomes a planning question as owners age.</li>
</ul>

<div class="call hawaii"><span class="tag">Hawaii context</span>
<p>Because Hawaii\'s Prepaid Health Care Act requires employers to provide health coverage to most employees, many Hawaii owners have never shopped for individual coverage. The transition from employer coverage to COBRA, individual plans, or Medicare deserves early attention in the post-sale plan. Natural disaster exposure is also a real part of property and business interruption planning here.</p>
</div>

<h2>Relevance to the role</h2>
<div class="call why"><span class="tag">Application</span>
<p>EPI places "protect value" before "build value," and insurance is one of the main protection tools. In a readiness assessment, a quick review of coverage against current value (for example, buy-sell insurance sized for a business worth a third of today\'s value) often produces urgent and easy action items. Specific policy recommendations come from licensed insurance professionals.</p></div>
`,
terms: [
  ['Key person insurance', 'Insurance owned by the business on a critical individual to protect against their death or disability.'],
  ['Second-to-die policy', 'Life insurance on two people, usually spouses, that pays at the second death. Common for estate tax liquidity.'],
  ['ILIT', 'Irrevocable life insurance trust. Holds life insurance outside the insured\'s taxable estate.'],
  ['Three-year rule', 'A rule that pulls transferred life insurance back into the estate if the insured dies within three years of the transfer.'],
  ['Tail coverage', 'An extension of a claims-made policy to cover claims made after it ends for events that occurred before.'],
  ['COBRA', 'Federal law allowing continuation of group health coverage for a limited period after leaving an employer.']
],
quiz: [
  {q: 'Why hold life insurance in an ILIT?',
   options: ['To keep the proceeds out of the insured\'s taxable estate while making them available to the family', 'To avoid paying premiums', 'To increase the death benefit', 'It is required by the bank'], a: 0,
   why: 'Policies owned by the insured are included in the estate.'},
  {q: 'An owner transfers an existing policy to an ILIT and dies two years later. What happens?',
   options: ['The proceeds are generally included in the estate under the three-year rule', 'The proceeds are excluded', 'The policy is cancelled', 'The ILIT pays a penalty'], a: 0,
   why: 'That is why ILITs often buy new policies directly.'},
  {q: 'Which coverage gap commonly opens after a sale?',
   options: ['The owner loses the company health plan', 'The buyer cancels the owner\'s car insurance', 'Social Security stops', 'Property taxes end'], a: 0,
   why: 'Health coverage must be replaced, especially before Medicare.'},
  {q: 'What does tail coverage do?',
   options: ['Covers claims made after a policy ends for events before it ended', 'Covers future business operations', 'Pays estate taxes', 'Increases life insurance'], a: 0,
   why: 'Claims-made policies need tails when the business or policy ends.'},
  {q: 'A buy-sell agreement is funded with $1 million of insurance, but the business is now worth $6 million. Where does this belong in the plan?',
   options: ['As an urgent protection action item in the readiness assessment', 'Nowhere, insurance is not relevant', 'Only after a sale', 'As a valuation adjustment'], a: 0,
   why: 'Underfunded buy-sell agreements are a common and fixable gap.'}
],
exercise: `
<p>Create an insurance review checklist for a readiness assessment with two sections: "before a transition" and "after a sale." For each item, write what information to request and which professional should review it.</p>`,
discussion: `
<p>Insurance conversations can feel like sales pitches. How would you raise coverage gaps with an owner in a way that stays focused on protecting their plan?</p>`,
resources: [
  {title: 'Plan Your Estate', by: 'Denis Clifford (Nolo)', note: 'The chapter on life insurance and estate planning, including ILITs.'},
  {title: 'Walking to Destiny', by: 'Christopher M. Snider', note: 'EPI\'s emphasis on protecting value before building it.'}
]
}
]);
