FBE.add([
/* =====================================================================
   14.1 INTAKE AND DATA GATHERING
   ===================================================================== */
{
id: 'm14-l01', minutes: 25,
objectives: [
  'Build a document request list organized by readiness area',
  'Sequence requests so the owner is not overwhelmed',
  'Handle consent, confidentiality, and secure transfer',
  'Plan the interviews that supply qualitative inputs'
],
body: `
<div class="call plain"><span class="tag">In plain English</span>
<p>An assessment is only as good as its inputs. Intake means collecting the right documents and conversations without burying the owner in paperwork. A well-organized request, sent in stages, makes the owner\'s job easy and shows them the practice is professional.</p>
</div>

<h2>What to gather</h2>
<table>
<tr><th>Area</th><th>Documents and information</th></tr>
<tr><td><b>Financial</b></td><td>3 to 5 years of financial statements and tax returns; current year-to-date results; debt schedule; list of owner discretionary expenses; any projections</td></tr>
<tr><td><b>Legal and structure</b></td><td>Entity documents; ownership records; buy-sell or shareholder agreement; major contracts and leases; licenses (including who holds them); any litigation</td></tr>
<tr><td><b>Operations and people</b></td><td>Organization chart; key employees and their tenure; any employment or retention agreements; customer concentration (top 10 customers as % of revenue); supplier dependence</td></tr>
<tr><td><b>Personal financial</b></td><td>Personal balance sheet; household spending estimate; retirement accounts; real estate; insurance policies</td></tr>
<tr><td><b>Estate</b></td><td>Wills and trusts (dates); powers of attorney; beneficiary designations; how shares are titled</td></tr>
<tr><td><b>Goals</b></td><td>Readiness questionnaire; owner and spouse goals; timeline preferences</td></tr>
</table>

<h2>Sequencing</h2>
<ol>
<li><b>First request (small):</b> financial statements, tax returns, and the readiness questionnaire. Enough to start.</li>
<li><b>Second request:</b> legal, people, and personal financial documents, after the first working session.</li>
<li><b>As needed:</b> follow-up items that come up.</li>
</ol>
<p>Pre-fill anything the bank already has (with appropriate permission), such as financial statements from the loan file. It saves the owner time and shows coordination.</p>

<h2>Consent and confidentiality</h2>
<ul>
<li>Obtain written authorization before sharing information with outside advisors or between bank units where policy requires it.</li>
<li>Use the bank\'s secure file transfer tools, never personal email.</li>
<li>Tell the owner who will see their information and why.</li>
</ul>

<h2>Interviews</h2>
<ul>
<li><b>Owner:</b> goals, history, concerns, the three legs.</li>
<li><b>Spouse or partner:</b> goals and concerns, ideally in part separately.</li>
<li><b>Co-owners:</b> each individually.</li>
<li><b>Key managers (with owner permission and discretion):</b> how the business really runs without the owner.</li>
<li><b>Outside advisors (with consent):</b> the CPA\'s view of tax issues, the attorney\'s view of documents.</li>
</ul>

<div class="call hawaii"><span class="tag">In practice</span>
<p>Many owners will not have a personal balance sheet or a spending estimate ready. Offer a simple worksheet and, if helpful, fill it in together during a meeting. Treat missing documents (no buy-sell agreement, a will from 2005) as findings rather than failures.</p>
</div>

<h2>Why it matters</h2>
<div class="call why"><span class="tag">For the role</span>
<p>"Gathering, organizing, and analyzing qualitative and quantitative inputs" is word for word in the job description. A clean, staged intake process is often the first thing an owner experiences of the practice, and it is an easy place for an Advisor to add visible value.</p></div>
`,
terms: [
  ['Intake', 'The first stage of an engagement: gathering documents and information.'],
  ['Document request list', 'An organized list of information needed from the client.'],
  ['Information authorization', 'Written client consent to share information with specified parties.']
],
quiz: [
  {q: 'What should the first document request include?',
   options: ['A small set: financial statements, tax returns, and the readiness questionnaire', 'Every document at once', 'Only the will', 'Nothing until the final report'], a: 0,
   why: 'Staged requests keep the owner engaged.'},
  {q: 'Before sharing information with the owner\'s outside CPA, you should:',
   options: ['Obtain the client\'s written authorization according to policy', 'Email it immediately', 'Ask the CPA for permission', 'Share only verbally'], a: 0,
   why: 'Consent is required before sharing client information.'},
  {q: 'Why interview key managers (with permission)?',
   options: ['To understand how the business really runs without the owner', 'To recruit them', 'To tell them about a sale', 'To set their salaries'], a: 0,
   why: 'They provide evidence on owner dependence and human capital.'},
  {q: 'An owner has no buy-sell agreement and an outdated will. How should you treat that?',
   options: ['As findings for the assessment', 'As reasons to stop', 'As embarrassing information to ignore', 'As the owner\'s failure'], a: 0,
   why: 'Gaps are what the assessment is designed to find.'},
  {q: 'Why pre-fill documents the bank already holds?',
   options: ['It saves the owner time and shows coordination, when permitted', 'It avoids asking for consent', 'It replaces the assessment', 'It is required by the owner'], a: 0,
   why: 'Ease for the owner builds momentum and trust.'}
],
exercise: `
<p>Build a two-stage document request list as a client-ready document: a short cover note, the first-stage list (no more than 8 items), and the second-stage list. Use plain language and explain briefly why each item is needed.</p>`,
discussion: `
<p>How would you handle an owner who is reluctant to share personal financial information with the bank but is happy to share business financials?</p>`,
resources: [
  {title: 'Walking to Destiny', by: 'Christopher M. Snider', note: 'EPI\'s description of the Discover stage and the information it requires.'}
]
},

/* =====================================================================
   14.2 ASSESSING BUSINESS READINESS
   ===================================================================== */
{
id: 'm14-l02', minutes: 25,
objectives: [
  'Combine financial analysis, the Four Cs, and protection review into a business readiness view',
  'Rate each area with evidence',
  'Produce a value range with drivers'
],
body: `
<div class="call plain"><span class="tag">In plain English</span>
<p>Business readiness brings together everything from Modules 2, 5, and 8: what the business really earns, what it is worth, what drives or threatens that value, and whether it is protected against surprises. The output is a short set of ratings with evidence, a value range, and the biggest issues.</p>
</div>

<h2>Four parts of the review</h2>
<h3>1. Financial</h3>
<ul>
<li>Normalized EBITDA (or SDE) with documented adjustments (Lesson 2.2)</li>
<li>Trends: revenue, margins, and cash flow over three to five years</li>
<li>Quality of financial reporting (Lesson 2.1)</li>
<li>Debt and working capital (Lesson 2.3)</li>
</ul>
<h3>2. Value</h3>
<ul>
<li>A value range from the valuation specialist, or a calculation of value</li>
<li>The two or three biggest drivers up and down</li>
</ul>
<h3>3. Intangible capital (the Four Cs)</h3>
<ul>
<li>A rating and evidence for each C (Lesson 8.2)</li>
</ul>
<h3>4. Protection</h3>
<ul>
<li>Buy-sell agreement, insurance, contingency plan, signers, licenses, key employee agreements</li>
</ul>

<h2>Ratings with evidence</h2>
<p>A simple three-level scale (strong, moderate, needs attention) is often clearer to owners than 1 to 5. Every rating needs evidence:</p>
<table>
<tr><th>Area</th><th>Rating</th><th>Evidence</th></tr>
<tr><td>Owner dependence</td><td>Needs attention</td><td>Owner prices all bids over $50,000 and holds the top three customer relationships</td></tr>
<tr><td>Financial reporting</td><td>Moderate</td><td>Reviewed statements; no monthly closes</td></tr>
<tr><td>Customer concentration</td><td>Needs attention</td><td>Largest customer 27% of revenue</td></tr>
<tr><td>Recurring revenue</td><td>Strong</td><td>40% of revenue from annual service agreements with 90% renewal</td></tr>
</table>

<div class="call watch"><span class="tag">Avoid false precision</span>
<p>Resist presenting a single value or a score to two decimal places. Owners anchor on precise numbers. A range with named drivers is more honest and more useful.</p>
</div>

<h2>Why it matters</h2>
<div class="call why"><span class="tag">For the assessment</span>
<p>This is where your FP&amp;A skills show most. A clear, evidence-backed business readiness section sets up the themes and action items that follow.</p></div>
`,
terms: [
  ['Business readiness review', 'The assessment of financial quality, value, intangible capital, and protection.'],
  ['Evidence-based rating', 'A rating supported by specific facts rather than impressions.']
],
quiz: [
  {q: 'Which four parts make up the business readiness review in this lesson?',
   options: ['Financial, value, intangible capital, and protection', 'Tax, legal, marketing, and HR', 'Revenue, cost, profit, and cash', 'Owner, spouse, children, and employees'], a: 0,
   why: 'Together they describe how transferable and valuable the business is.'},
  {q: 'Why pair every rating with evidence?',
   options: ['It makes findings credible and helps the owner understand them', 'It is required by law', 'It makes the report longer', 'It replaces a valuation'], a: 0,
   why: 'Evidence turns opinions into findings.'},
  {q: 'Why present value as a range with drivers?',
   options: ['A precise number invites anchoring; a range with drivers is more honest and actionable', 'Ranges are easier to calculate', 'Owners prefer vague answers', 'Specialists cannot calculate points'], a: 0,
   why: 'Drivers show what the owner can change.'},
  {q: 'Which item belongs in the protection part of the review?',
   options: ['Whether a buy-sell agreement exists and is funded', 'Gross margin trend', 'Customer concentration', 'Revenue growth'], a: 0,
   why: 'Protection covers contingency and risk transfer.'},
  {q: 'The owner prices every large bid personally. Which area does that evidence support rating?',
   options: ['Owner dependence (human capital)', 'Financial reporting', 'Protection', 'Social capital'], a: 0,
   why: 'It shows the business relies on the owner.'}
],
exercise: `
<p>Create a business readiness template with the four parts above. For each part, list the specific items to review, the rating scale, and space for evidence. Use it in the Lesson 14.5 workshop.</p>`,
discussion: `
<p>How would you present a "needs attention" rating on owner dependence to an owner who takes pride in being involved in everything?</p>`,
resources: [
  {title: 'Walking to Destiny', by: 'Christopher M. Snider', note: 'Chapters on assessing business attractiveness and readiness.'}
]
},

/* =====================================================================
   14.3 ASSESSING PERSONAL AND FINANCIAL READINESS
   ===================================================================== */
{
id: 'm14-l03', minutes: 25,
objectives: [
  'Assess financial readiness using the number and the wealth gap',
  'Review estate plan and insurance status',
  'Assess personal readiness with observable signals'
],
body: `
<div class="call plain"><span class="tag">In plain English</span>
<p>This section answers two questions: can the owner afford to exit, and are they ready to? The financial part is a calculation built with the wealth planner. The personal part is a careful reading of what the owner and family have said and done.</p>
</div>

<h2>Financial readiness</h2>
<ul>
<li><b>The number:</b> investable assets needed (Lesson 9.2)</li>
<li><b>Outside assets:</b> what the owner has separate from the business</li>
<li><b>Required value:</b> the enterprise value needed after taxes, debt, and costs</li>
<li><b>Wealth gap:</b> required value compared with the current value range (Lesson 8.3)</li>
<li><b>Estate plan status:</b> documents, dates, titling, beneficiary designations, estate tax exposure (federal and Hawaii)</li>
<li><b>Insurance status:</b> buy-sell funding, estate liquidity, disability</li>
</ul>

<h2>Personal readiness</h2>
<p>Use observable signals rather than asking owners to rate their own emotional readiness:</p>
<table>
<tr><th>Signal</th><th>Suggests readiness</th><th>Suggests more work needed</th></tr>
<tr><td>Next chapter</td><td>Describes specific plans</td><td>"I\'ll figure it out"</td></tr>
<tr><td>Time away</td><td>Has taken extended time off successfully</td><td>No vacation longer than a week in years</td></tr>
<tr><td>Spouse alignment</td><td>Shared goals</td><td>Different expectations</td></tr>
<tr><td>Successor</td><td>Identified and developing</td><td>Unclear or avoided</td></tr>
<tr><td>Identity</td><td>Interests and relationships outside the business</td><td>Business is the whole identity</td></tr>
</table>

<h2>Presenting the two legs</h2>
<p>Present financial readiness with numbers, and personal readiness with the owner\'s own words. "You mentioned you haven\'t taken more than a week off in eight years" is more respectful and persuasive than a score for "emotional readiness."</p>

<div class="call hawaii"><span class="tag">Hawaii reminder</span>
<p>Include the Hawaii estate tax threshold in the estate section and note any family land. It is often where the family\'s first real surprise comes from (Lesson 4.2).</p>
</div>

<h2>Why it matters</h2>
<div class="call why"><span class="tag">For the assessment</span>
<p>The job description refers to "personal and business exit readiness assessments." This lesson covers the personal half, which is often what distinguishes an exit planning practice from a valuation or brokerage service.</p></div>
`,
terms: [
  ['Financial readiness assessment', 'A review of the owner\'s number, outside assets, required business value, estate plan, and insurance.'],
  ['Observable signals', 'Behaviors and facts that indicate personal readiness, used instead of abstract self-ratings.']
],
quiz: [
  {q: 'What is compared to determine the wealth gap in the assessment?',
   options: ['The business value the owner needs versus the current value range', 'Revenue versus expenses', 'The owner\'s age versus retirement age', 'Assets versus liabilities on the company balance sheet'], a: 0,
   why: 'The wealth gap connects the owner\'s plan to business value.'},
  {q: 'Which is an observable signal of personal readiness?',
   options: ['The owner has taken extended time off while the business ran well', 'The owner says he feels ready', 'The business has high margins', 'The owner has a CPA'], a: 0,
   why: 'Behavior is better evidence than self-rating.'},
  {q: 'How should personal readiness usually be presented?',
   options: ['Using the owner\'s own words and observations', 'As a numeric emotional score', 'Not at all', 'Only to the spouse'], a: 0,
   why: 'It is more respectful and persuasive.'},
  {q: 'Why include the Hawaii estate tax in the assessment?',
   options: ['Many families are above the Hawaii threshold even when below the federal one', 'It is higher than the federal exemption', 'It does not apply to business owners', 'It only applies to non-residents'], a: 0,
   why: 'It is a common first surprise.'},
  {q: 'Who typically builds the owner\'s financial plan used in the assessment?',
   options: ['The wealth planner', 'The buyer', 'The M&A advisor', 'The owner\'s employees'], a: 0,
   why: 'The advisor coordinates and supplies the business inputs.'}
],
exercise: `
<p>Create the personal and financial readiness sections of your assessment template: a financial summary table (number, outside assets, required value, current range, gap), an estate and insurance checklist, and a personal readiness signals table with space for the owner\'s own words.</p>`,
discussion: `
<p>What would you do if the financial analysis says the owner can comfortably exit now, but every personal readiness signal says they are not ready?</p>`,
resources: [
  {title: 'Finish Big', by: 'Bo Burlingham', note: 'The personal readiness signals owners describe in hindsight.'}
]
},

/* =====================================================================
   14.4 SYNTHESIS
   ===================================================================== */
{
id: 'm14-l04', minutes: 30,
objectives: [
  'Turn dozens of findings into a few clear themes',
  'Prioritize action items by impact, urgency, and effort',
  'Frame decision points the owner must make',
  'Structure the findings deliverable'
],
body: `
<div class="call plain"><span class="tag">In plain English</span>
<p>After gathering and analyzing, you may have 40 findings. Owners cannot act on 40 things. Synthesis means grouping findings into a handful of themes, choosing the few actions that matter most now, and naming the big decisions the owner will face. The job description calls these "themes, action items, and decision points."</p>
</div>

<h2>From findings to themes</h2>
<ol>
<li>List every finding on its own line (a spreadsheet works well).</li>
<li>Tag each with a readiness leg and a Four Cs category where relevant.</li>
<li>Group related findings. Look for root causes: five separate findings may all come from "the owner does everything."</li>
<li>Name each group as a theme in plain language, ideally stating the "so what."</li>
</ol>
<p>Aim for three to six themes. Examples: "The business is protected against almost nothing if you are suddenly unavailable." "Value is held back by how much runs through you." "You are financially closer to ready than you think."</p>

<h2>Prioritizing actions</h2>
<p>Use two principles:</p>
<ul>
<li><b>Protect before you build</b> (EPI). Contingency gaps come first because they are urgent and usually quick to fix.</li>
<li><b>Impact versus effort.</b> Plot actions: high impact and low effort first; high impact and high effort as planned projects; low impact items later or never.</li>
</ul>
<p>Then select the first 90-day sprint (Lesson 8.4): three to five actions with owners and dates.</p>

<h2>Decision points</h2>
<p>A decision point is a choice the owner must make that shapes the plan. Frame each with:</p>
<ul>
<li><b>The question:</b> "Should Kyle be the successor?"</li>
<li><b>The options</b></li>
<li><b>What the decision depends on</b></li>
<li><b>When it needs to be made</b> and what happens if it is not</li>
<li><b>Who needs to be involved</b></li>
</ul>
<p>The assessment does not make these decisions. It makes them visible and schedules them.</p>

<h2>Structure of the findings deliverable</h2>
<ol>
<li><b>Your goals</b> (in the owner\'s words)</li>
<li><b>Where you stand:</b> the three legs at a glance</li>
<li><b>Key themes</b> (three to six, each with supporting evidence)</li>
<li><b>Value and wealth picture:</b> value range, drivers, wealth gap</li>
<li><b>Decision points</b></li>
<li><b>Recommended first 90 days</b></li>
<li><b>Your team:</b> who does what</li>
<li><b>Appendix:</b> detailed findings</li>
</ol>
<p>Keep the main section to a few pages. Module 16 covers writing and design.</p>

<div class="call watch"><span class="tag">The "so what" test</span>
<p>For every theme and finding, ask: so what does this mean for the owner\'s goals? "Customer concentration of 27%" is a fact. "If the general contractor relationship ended, profit would drop by roughly a third, and buyers will price that risk" is a finding.</p>
</div>

<h2>Why it matters</h2>
<div class="call why"><span class="tag">For the role</span>
<p>Synthesis is the step that separates useful advisors from data collectors. It is also the step where an Advisor can grow toward the Senior Advisor role, which the job description says "synthesizes qualitative and quantitative inputs into themes, action items, and decision points."</p></div>
`,
terms: [
  ['Theme', 'A group of related findings expressed as a plain-language insight about the owner\'s situation.'],
  ['Action item', 'A specific task with an owner, date, and measure of completion.'],
  ['Decision point', 'A choice the owner must make that shapes the plan, framed with options, dependencies, and timing.'],
  ['So what test', 'Asking what each finding means for the owner\'s goals.']
],
quiz: [
  {q: 'How many themes should a findings deliverable usually highlight?',
   options: ['Three to six', 'One', 'Twenty or more', 'As many as there are findings'], a: 0,
   why: 'Owners can act on a handful of clear themes.'},
  {q: 'Which actions usually come first?',
   options: ['Protection gaps that are urgent and quick to fix', 'Long-term growth projects', 'Choosing a buyer', 'Selecting investments'], a: 0,
   why: 'Protect before building.'},
  {q: 'What should a decision point include?',
   options: ['The question, options, dependencies, timing, and who is involved', 'The advisor\'s decision', 'Only the recommended answer', 'A signature line'], a: 0,
   why: 'The assessment makes decisions visible, not for the owner.'},
  {q: 'Which statement passes the "so what" test?',
   options: ['"If the largest customer left, profit would fall by about a third, and buyers will price that risk."', '"Customer concentration is 27%."', '"The company has customers."', '"Revenue is $13.8 million."'], a: 0,
   why: 'It connects the fact to consequences.'},
  {q: 'Why look for root causes when grouping findings?',
   options: ['Several findings may share one cause, such as the owner doing everything', 'To make the list longer', 'To assign blame', 'It is required by EPI'], a: 0,
   why: 'Fixing a root cause resolves several findings.'}
],
exercise: `
<p>Take any set of 15 or more findings from exercises you have done so far (or invent them for a business you know). Group them into themes, write each theme as a plain-language sentence that passes the "so what" test, and select a first 90-day sprint.</p>`,
discussion: `
<p>How would you handle a theme the owner does not want to hear, such as "the business depends on you more than you realize"? Would you soften it, reorder it, or present it directly?</p>`,
resources: [
  {title: 'The Pyramid Principle', by: 'Barbara Minto', note: 'The classic guide to structuring findings: lead with the conclusion, then support it. Useful for all client deliverables.'}
]
},

/* =====================================================================
   14.5 WORKSHOP: A FULL ASSESSMENT
   ===================================================================== */
{
id: 'm14-l05', minutes: 90,
objectives: [
  'Complete a full exit readiness assessment from raw case data',
  'Normalize earnings, estimate a value range, and test financial readiness',
  'Produce themes, a first 90-day sprint, and decision points',
  'Compare your work with a model answer'
],
body: `
<div class="call plain"><span class="tag">How to use this workshop</span>
<p>Read the case. Build your assessment using the templates from Lessons 14.1 to 14.4 and your spreadsheet tools from earlier modules. Write your answer in the exercise box below before opening the model answer. Expect this to take 60 to 90 minutes.</p>
</div>

<h2>The case: Kamakani Electric, Inc.</h2>
<h3>The business</h3>
<ul>
<li>Oahu commercial and residential electrical contractor, founded 1989 by Russell Nakamura. S corporation since formation. 62 employees.</li>
<li>Revenue $13.8 million. Reported pre-tax income $1,020,000. Interest $55,000. Depreciation $210,000.</li>
<li>40% of revenue from annual maintenance and service agreements, with about 90% renewal. The rest is project work.</li>
<li>Largest customer, a general contractor, is 27% of revenue. Relationship held personally by Russell.</li>
<li>Russell holds the contractor license as the company\'s Responsible Managing Employee (RME). No one else in the company is qualified to serve as RME today.</li>
<li>Financial statements are compiled annually. Equipment loans total $600,000.</li>
<li>An operations manager (non-family, 12 years) runs field crews well. Russell prices all bids over $50,000.</li>
</ul>
<h3>Owner compensation and related items</h3>
<ul>
<li>Russell\'s salary: $380,000. Market cost of a general manager: $210,000.</li>
<li>Russell\'s wife Joy does the books two days a week and is paid $65,000. The market cost of that role is about $35,000.</li>
<li>Personal vehicles and travel run through the business: $48,000, documented.</li>
<li>One-time legal settlement last year: $90,000.</li>
<li>The company rents its baseyard from the Nakamura Family LLC (owned by Russell and Joy) for $120,000 a year. Market rent is $168,000.</li>
</ul>
<h3>The family</h3>
<ul>
<li>Russell, 63, and Joy, 61. Married 38 years.</li>
<li>Son Kyle, 34, a project manager at the company for six years. Wants to run it someday. Not yet licensed. Wonders whether he could ever afford to buy it.</li>
<li>Daughter Mia, 31, a nurse in Portland. No interest in the business. Has told her mother she wants things to be "fair."</li>
</ul>
<h3>Personal finances and estate</h3>
<ul>
<li>Outside assets: 401(k)s $900,000; brokerage $300,000; home $1.6 million; the baseyard LLC, appraised at $2.6 million.</li>
<li>Household spending $180,000 a year, plus about $45,000 of perks the business pays. They would like to spend about $260,000 a year in retirement (today\'s dollars).</li>
<li>Wills from 2008. No trusts. No powers of attorney. Life insurance of $1 million on Russell, payable to Joy.</li>
<li>Russell is the only signer on the company\'s operating account.</li>
</ul>
<h3>Goals and signals</h3>
<ul>
<li>Russell wants to "slow down around 65," fish more, and spend time with a grandchild on the way. He has not taken more than a week off in nine years.</li>
<li>He worries about his crews and says he would "never sell to some mainland outfit," though a PE-backed platform recently sent him a letter and he kept it.</li>
<li>Joy wants him home more and wants Mia treated fairly.</li>
</ul>
<h3>Assume</h3>
<ul>
<li>Comparable companies trade at roughly 4.0 to 5.0 times adjusted EBITDA.</li>
<li>Taxes on a sale of about 25% of pre-tax proceeds; transaction costs about $300,000.</li>
<li>A sustainable withdrawal rate of 3.5% and about a 20% tax rate on withdrawals.</li>
<li>If they sell or transfer the business, they keep the baseyard LLC and lease it to the business at market rent.</li>
</ul>

<h2>Your deliverables</h2>
<ol>
<li>Adjusted EBITDA and a value range.</li>
<li>The number, required value, and wealth gap.</li>
<li>Estate snapshot: total estate and exposure against federal and Hawaii thresholds.</li>
<li>Ratings with evidence for business, financial, and personal readiness.</li>
<li>Three to five themes.</li>
<li>Decision points.</li>
<li>A first 90-day sprint.</li>
<li>The internal partners you would involve and why.</li>
</ol>

<details><summary>Model answer (open after you finish)</summary>
<h3>1. Adjusted EBITDA and value</h3>
<table>
<tr><th>Line</th><th class="n">Amount</th></tr>
<tr><td>Pre-tax income</td><td class="n">$1,020,000</td></tr>
<tr><td>+ Interest</td><td class="n">55,000</td></tr>
<tr><td>+ Depreciation</td><td class="n">210,000</td></tr>
<tr class="tot"><td>EBITDA</td><td class="n">$1,285,000</td></tr>
<tr><td>+ Excess owner pay ($380K - $210K)</td><td class="n">170,000</td></tr>
<tr><td>+ Joy above market ($65K - $35K)</td><td class="n">30,000</td></tr>
<tr><td>+ Personal vehicles and travel</td><td class="n">48,000</td></tr>
<tr><td>+ One-time legal settlement</td><td class="n">90,000</td></tr>
<tr><td>- Rent to market ($168K - $120K)</td><td class="n">(48,000)</td></tr>
<tr class="tot"><td>Adjusted EBITDA</td><td class="n">$1,575,000</td></tr>
</table>
<p>Value range at 4.0 to 5.0 times: <b>about $6.3 million to $7.9 million</b>. Drivers up: recurring service revenue, strong operations manager. Drivers down: RME and customer relationship both depend on Russell; 27% concentration; compiled financials. A buyer today would likely want an earnout and a long transition, and the license issue must be solved for any transfer.</p>

<h3>2. Financial readiness</h3>
<table>
<tr><th>Line</th><th class="n">Amount</th></tr>
<tr><td>Target spending</td><td class="n">$260,000</td></tr>
<tr><td>Less market rent from the baseyard LLC</td><td class="n">(168,000)</td></tr>
<tr><td>Needed from portfolio, after tax</td><td class="n">92,000</td></tr>
<tr><td>Grossed up for 20% tax</td><td class="n">115,000</td></tr>
<tr class="tot"><td>Portfolio needed at 3.5%</td><td class="n">about $3,300,000</td></tr>
<tr><td>Less liquid outside assets (401(k)s and brokerage)</td><td class="n">(1,200,000)</td></tr>
<tr><td>Needed from the business after tax</td><td class="n">2,100,000</td></tr>
<tr><td>Before 25% tax</td><td class="n">2,800,000</td></tr>
<tr><td>Plus equipment debt and transaction costs</td><td class="n">900,000</td></tr>
<tr class="tot"><td>Enterprise value needed</td><td class="n">about $3,700,000</td></tr>
</table>
<p>The current value range ($6.3 to $7.9 million) is well above what they need. <b>The wealth gap is effectively closed</b>, largely because the baseyard rent covers most of their spending. (Social Security, not yet counted, adds further margin.) This is the most important insight: they do not need the highest possible price. That opens options that favor Russell\'s other goals, such as a transfer to Kyle, an internal sale, or a carefully chosen buyer, at a price below the maximum.</p>

<h3>3. Estate snapshot</h3>
<p>Business about $7 million (midpoint), baseyard $2.6 million, home $1.6 million, retirement and brokerage $1.2 million, life insurance $1 million: roughly <b>$13.4 million</b>. Below the $30 million federal combined exemption. Above the combined Hawaii exemptions of about $10.98 million, so some Hawaii estate tax exposure at the second death, larger if the business grows. Wills are 18 years old, there is no trust (so shares would go through probate), and there are no powers of attorney. The plan to treat Mia fairly is undefined.</p>

<h3>4. Ratings</h3>
<table>
<tr><th>Leg</th><th>Rating</th><th>Key evidence</th></tr>
<tr><td>Business</td><td>Moderate, with critical gaps</td><td>Strong recurring revenue and operations manager; RME and key customer depend on Russell; 27% concentration; compiled statements</td></tr>
<tr><td>Financial</td><td>Strong</td><td>Required value far below current range, given baseyard rent</td></tr>
<tr><td>Protection / estate</td><td>Needs attention (urgent)</td><td>Single signer; no POA; 2008 wills; no trust; sole RME</td></tr>
<tr><td>Personal</td><td>Needs attention</td><td>No time off in nine years; vague next chapter; Joy wants him home; successor not yet ready</td></tr>
</table>

<h3>5. Themes</h3>
<ol>
<li><b>If Russell were suddenly unavailable, the company could not legally operate or pay its people.</b> He is the only license holder and the only signer, and there are no powers of attorney.</li>
<li><b>Russell and Joy are financially closer to ready than they think.</b> The baseyard rent means they do not need a maximum price, which gives them freedom to choose the path that fits their values.</li>
<li><b>Value and every transition path are held back by how much runs through Russell:</b> the license, the largest customer, and pricing.</li>
<li><b>Kyle is a real possibility, and he needs a path:</b> licensing, pricing authority, the customer relationship, and a financeable way to buy in.</li>
<li><b>Fairness to Mia needs a plan, and the baseyard may be the answer.</b></li>
</ol>

<h3>6. Decision points</h3>
<ul>
<li><b>Is Kyle the intended successor?</b> Options: yes, with a development plan; not yet, revisit in 12 to 18 months; no, pursue an internal or external sale. Depends on Kyle\'s interest, his progress toward licensing, and the operations manager\'s view. Involve Russell, Joy, Kyle, and ideally a candid conversation with Mia.</li>
<li><b>How to respond to the PE letter?</b> Options: ignore; have an exploratory conversation to learn the market; decline for now. Depends on the succession decision. No LOI should be signed before protection and estate work are done.</li>
<li><b>What happens to the baseyard?</b> Options: keep for income and eventually pass to Mia (or both children); sell with the business. Depends on the fairness plan and estate tax planning.</li>
<li><b>Timing:</b> Russell wants to slow down at 65, which is two years away. A full transfer to Kyle likely takes longer, so the plan may need a phased role.</li>
</ul>

<h3>7. First 90-day sprint</h3>
<table>
<tr><th>Action</th><th>Owner of the task</th><th>Due</th></tr>
<tr><td>Add authorized signers; set up durable powers of attorney; update wills and create revocable trusts with shares titled in trust</td><td>Russell and Joy with estate attorney; commercial banker for signers</td><td>Day 60</td></tr>
<tr><td>Identify a licensing path and interim RME contingency (Kyle and/or the operations manager pursuing qualification; confirm options with the licensing board)</td><td>Russell, Kyle, operations manager</td><td>Day 30 to start</td></tr>
<tr><td>Family meeting on Kyle\'s interest and the idea of fairness for Mia (facilitated if needed)</td><td>Russell, Joy, Kyle, Mia; advisor coordinates</td><td>Day 75</td></tr>
<tr><td>Introduce Kyle into the general contractor relationship; begin sharing pricing authority on bids under an agreed limit</td><td>Russell and Kyle</td><td>Day 90</td></tr>
<tr><td>Formal calculation of value; move to reviewed statements for the current year</td><td>Valuation specialist; outside CPA</td><td>Day 90</td></tr>
</table>

<h3>8. Partners</h3>
<ul>
<li><b>Commercial banking:</b> signers, the equipment loans, and eventual financing for a Kyle buy-in.</li>
<li><b>Trust and estate:</b> the wills, trusts, fairness planning, and Hawaii estate exposure, working with the family\'s attorney.</li>
<li><b>Wealth planning:</b> confirm the financial readiness analysis with a full plan, including Social Security.</li>
<li><b>Valuation:</b> formal calculation of value, and later an appraisal for any gifting to Kyle.</li>
<li><b>Outside CPA:</b> move to reviewed statements, and structuring a transfer to Kyle.</li>
</ul>
</details>
`,
terms: [
  ['Responsible Managing Employee (RME)', 'In Hawaii contractor licensing, the qualified individual through whom an entity holds its license. If the RME leaves, the license is at risk.'],
  ['Findings deliverable', 'The client-ready summary of an exit readiness assessment.']
],
quiz: [
  {q: 'In the Kamakani case, what is adjusted EBITDA?',
   options: ['$1,575,000', '$1,285,000', '$1,020,000', '$1,623,000'], a: 0,
   why: 'EBITDA of $1,285,000 plus $338,000 of add-backs, minus the $48,000 rent adjustment.'},
  {q: 'Why is the Nakamuras\' wealth gap effectively closed?',
   options: ['Market rent from the baseyard LLC covers most of their target spending', 'The business is worth $20 million', 'They have no expenses', 'Social Security covers everything'], a: 0,
   why: 'Rent of $168,000 against $260,000 of spending leaves a small portfolio need.'},
  {q: 'What is the most urgent protection finding?',
   options: ['Russell is the only license holder and only signer, with no powers of attorney', 'The company is an S corporation', 'Revenue is $13.8 million', 'Kyle is a project manager'], a: 0,
   why: 'If Russell were unavailable, the company could not legally operate or pay people.'},
  {q: 'Why does a closed wealth gap matter for the exit decision?',
   options: ['The owners do not need the maximum price, so they can prioritize legacy, employees, and family', 'It means they must sell now', 'It means value does not matter', 'It rules out a family transfer'], a: 0,
   why: 'Financial freedom widens the set of acceptable paths.'},
  {q: 'How should the PE letter be handled in the first 90 days?',
   options: ['Keep options open, but sign nothing before protection and estate work are done and the succession decision is clearer', 'Sign an LOI immediately', 'Forward it to Kyle to decide', 'Throw it away'], a: 0,
   why: 'Planning windows and the succession decision come first.'}
],
exercise: `
<p>Write your complete assessment here before opening the model answer: adjusted EBITDA and value range, the number and wealth gap, estate snapshot, readiness ratings with evidence, three to five themes, decision points, first 90-day sprint, and partners. Then compare your work with the model and note what you missed or did differently.</p>`,
discussion: `
<p>Where did your assessment differ from the model answer, and why? Bring your version to your mentor in chat and we will review it together.</p>`,
resources: [
  {title: 'Hawaii Contractors License Board', by: 'cca.hawaii.gov', url: 'https://cca.hawaii.gov/pvl/boards/contractor/', note: 'Licensing requirements, including the responsible managing employee rules that matter for contractor succession.'}
]
}
]);
