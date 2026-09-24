FBE.add([
/* =====================================================================
   15.1 WHO DOES WHAT
   ===================================================================== */
{
id: 'm15-l01', minutes: 25,
objectives: [
  'Describe each internal and external partner\'s role, incentives, and language',
  'Build a RACI chart for an engagement',
  'Anticipate where partners\' interests may pull in different directions'
],
body: `
<div class="call plain"><span class="tag">In plain English</span>
<p>An exit plan needs many specialists, and each one sees the owner through their own lens. The commercial banker sees credit risk and a loan relationship. The wealth advisor sees future assets to manage. The attorney sees legal exposure. Knowing what each person cares about, and how they talk, lets you get the best from all of them and keep the owner at the center.</p>
</div>

<h2>The partners through their own eyes</h2>
<table>
<tr><th>Partner</th><th>Main focus</th><th>How success is often measured</th><th>What they need from you</th></tr>
<tr><td>Commercial banker</td><td>Credit quality, the business relationship</td><td>Loan growth, deposits, credit performance, retention</td><td>Early notice of changes in ownership; involvement in financing designs</td></tr>
<tr><td>Private banker / wealth advisor</td><td>The owner\'s personal finances and investments</td><td>Assets under management, relationship growth</td><td>Timing of liquidity; the owner\'s goals and concerns</td></tr>
<tr><td>Wealth planner</td><td>The owner\'s financial plan</td><td>Plans delivered; client outcomes</td><td>Business inputs: value, proceeds, timing, rent</td></tr>
<tr><td>Trust and estate team</td><td>Wealth transfer structures; fiduciary roles</td><td>Trust relationships, fiduciary quality</td><td>Family context; estate plan status; business interests to be held in trust</td></tr>
<tr><td>Valuation specialist</td><td>Accurate, defensible value</td><td>Quality and timeliness of work</td><td>Clear purpose and standard of value; complete financial data</td></tr>
<tr><td>Outside CPA</td><td>Tax compliance and planning</td><td>Client retention; quality</td><td>Respect for their role; early involvement; clear questions</td></tr>
<tr><td>Outside attorney</td><td>Legal documents and risk</td><td>Client service; quality</td><td>Clear instructions from the client; coordination</td></tr>
<tr><td>M&amp;A advisor / broker</td><td>Running a sale</td><td>Closed deals and success fees</td><td>A well-prepared client</td></tr>
</table>

<h2>RACI</h2>
<p>A RACI chart assigns each task a <b>R</b>esponsible party (does it), an <b>A</b>ccountable party (owns the outcome), <b>C</b>onsulted parties (provide input), and <b>I</b>nformed parties (kept updated). You likely know it from FP&amp;A projects.</p>
<table>
<tr><th>Task</th><th>Owner</th><th>Advisor (you)</th><th>Estate attorney</th><th>Trust team</th><th>CPA</th><th>Commercial banker</th></tr>
<tr><td>Update wills and trusts</td><td>A</td><td>C</td><td>R</td><td>C</td><td>C</td><td>I</td></tr>
<tr><td>Add authorized signers</td><td>A</td><td>I</td><td></td><td></td><td></td><td>R</td></tr>
<tr><td>Calculation of value</td><td>A</td><td>C</td><td></td><td></td><td>C</td><td>I</td></tr>
<tr><td>Track the 90-day plan</td><td>A</td><td>R</td><td>I</td><td>I</td><td>I</td><td>I</td></tr>
</table>
<p>The owner is accountable for their own decisions. Your recurring role is usually responsible for coordination and tracking.</p>

<h2>Where interests can pull apart</h2>
<ul>
<li>A sale to a mainland buyer may end the commercial loan relationship.</li>
<li>A family transfer may keep the relationship but produce less immediate liquidity for wealth management.</li>
<li>Outside advisors may worry the bank will take their client.</li>
</ul>
<p>Naming these openly inside the bank, and consistently putting the owner\'s goals first, keeps the team aligned and protects trust.</p>

<h2>Why it matters</h2>
<div class="call why"><span class="tag">For the role</span>
<p>"Coordinates with internal partners including commercial banking, wealth planning, trust or estate resources, and valuation specialists" is a core responsibility. Understanding each partner\'s point of view is how coordination becomes collaboration.</p></div>
`,
terms: [
  ['RACI', 'Responsible, accountable, consulted, informed: a way to assign roles for each task.'],
  ['Relationship retention', 'Keeping a client\'s business with the bank through a transition.']
],
quiz: [
  {q: 'In a RACI chart, who is typically accountable for decisions in the owner\'s plan?',
   options: ['The owner', 'The advisor', 'The commercial banker', 'The CPA'], a: 0,
   why: 'Owners own their decisions.'},
  {q: 'What does a wealth planner need from the Family Business advisor?',
   options: ['Business inputs such as value, proceeds, timing, and rent', 'The loan covenants', 'The customer list', 'The employee handbook'], a: 0,
   why: 'The financial plan depends on business outcomes.'},
  {q: 'Why might an outside CPA be wary of the bank?',
   options: ['They may worry the bank will take their client or give conflicting advice', 'CPAs dislike banks by rule', 'Banks audit CPAs', 'CPAs cannot work with banks'], a: 0,
   why: 'Respect and early involvement address this.'},
  {q: 'A mainland buyer is best for the client but will end the loan relationship. What should the team do?',
   options: ['Name the tension internally and keep the owner\'s goals first', 'Steer the client to a local buyer', 'Hide the option', 'Delay the process'], a: 0,
   why: 'Client-first behavior protects trust and long-term business.'},
  {q: 'What is your most common RACI role in an engagement?',
   options: ['Responsible for coordination and tracking', 'Accountable for every decision', 'Only informed', 'Responsible for drafting legal documents'], a: 0,
   why: 'Coordination is the heart of the Advisor role.'}
],
exercise: `
<p>Build a full RACI chart for the Kamakani Electric first 90-day sprint (Lesson 14.5), including the owner, Joy, Kyle, you, the estate attorney, the trust team, the valuation specialist, the CPA, and the commercial banker.</p>`,
discussion: `
<p>Which internal partner do you already know well from your FP&amp;A work, and which one do you know least? What would you do in your first month in the role to build those relationships?</p>`,
resources: [
  {title: 'The $10 Trillion Opportunity', by: 'Richard Jackim and Peter Christman', note: 'On the exit planning team and the coordinator\'s role.'}
]
},

/* =====================================================================
   15.2 RUNNING WORKSTREAMS
   ===================================================================== */
{
id: 'm15-l02', minutes: 25,
objectives: [
  'Build and maintain an engagement tracker',
  'Manage dependencies between workstreams',
  'Set a status rhythm that keeps momentum without overloading the owner'
],
body: `
<div class="call plain"><span class="tag">In plain English</span>
<p>Exit plans stall when nobody is watching the whole picture. Each specialist does their piece on their own timeline, the owner gets busy, and months pass. A simple tracker, a regular check-in rhythm, and attention to what depends on what are usually enough to keep things moving.</p>
</div>

<h2>The tracker</h2>
<p>A shared list of actions with, for each:</p>
<ul>
<li>Action and workstream (protection, value building, estate, financial plan, family)</li>
<li>Responsible party and due date</li>
<li>Dependencies ("waits on valuation")</li>
<li>Status and last update</li>
<li>Next step</li>
</ul>
<p>Keep it in whatever system the practice uses. The discipline matters more than the tool.</p>

<h2>Dependencies</h2>
<p>Many actions depend on others. Common chains:</p>
<ul>
<li>Valuation, then gifting or a transfer price, then estate documents</li>
<li>Financial plan, then decision about how much liquidity is needed, then exit option choice</li>
<li>Family meeting on the successor, then leadership development plan, then ownership transfer design</li>
<li>Entity or real estate restructuring, then valuation, then sale preparation</li>
</ul>
<p>Mapping dependencies early prevents the attorney from drafting documents that the valuation later makes wrong.</p>

<h2>Status rhythm</h2>
<ul>
<li><b>Internal:</b> a short regular check-in with the internal team (for example, every two weeks during active phases).</li>
<li><b>Owner:</b> a brief written update every few weeks, and a working meeting each 90-day sprint.</li>
<li><b>Outside advisors:</b> updates when their items are active, and invitations to key meetings.</li>
</ul>

<div class="call example"><span class="tag">Worked example: a stalled plan</span>
<p>Four months into a plan, the estate attorney is waiting on the valuation, the valuation specialist is waiting on the CPA\'s adjusted financials, and the CPA did not know anyone was waiting on them. Nobody is at fault; nobody owned the whole chain.</p>
<p>A tracker with the dependency noted, and a two-week check-in, would have surfaced the bottleneck in the first month. A short call among the three would have fixed it.</p>
</div>

<h2>Why it matters</h2>
<div class="call why"><span class="tag">For the role</span>
<p>The Senior Advisor description mentions "maintaining execution momentum across workstreams." Your FP&amp;A experience with close calendars, forecast cycles, and cross-functional deadlines is directly transferable here, and worth highlighting.</p></div>
`,
terms: [
  ['Workstream', 'A group of related actions, such as estate planning or value building.'],
  ['Dependency', 'An action that cannot start or finish until another is complete.'],
  ['Status rhythm', 'A regular schedule of check-ins and updates.']
],
quiz: [
  {q: 'What is the most common reason exit plans stall?',
   options: ['No one is watching the whole picture and dependencies', 'Owners change their minds every week', 'Specialists refuse to work', 'Regulators intervene'], a: 0,
   why: 'Coordination gaps create silent delays.'},
  {q: 'Which is a common dependency chain?',
   options: ['Valuation, then transfer price, then estate documents', 'Estate documents, then valuation, then financial plan', 'Closing, then valuation', 'Events, then valuation'], a: 0,
   why: 'Documents depend on the value.'},
  {q: 'What should a tracker include for each action?',
   options: ['Responsible party, due date, dependencies, status, and next step', 'Only the action name', 'Only the due date', 'The owner\'s net worth'], a: 0,
   why: 'These fields make the plan manageable.'},
  {q: 'How often should an owner typically receive updates?',
   options: ['A brief written update every few weeks plus a working meeting each sprint', 'Daily', 'Only at the end', 'Never'], a: 0,
   why: 'Enough to keep momentum without overload.'},
  {q: 'Which FP&A experience transfers most directly to running workstreams?',
   options: ['Managing close calendars and cross-functional deadlines', 'Building pivot tables', 'Writing variance commentary', 'Presenting to the board'], a: 0,
   why: 'Coordinating interdependent deadlines is the same skill.'}
],
exercise: `
<p>Build a tracker in a spreadsheet for the Kamakani Electric engagement covering the first six months: all workstreams, responsible parties, due dates, dependencies, and status. Add a simple view that shows what is overdue or blocked.</p>`,
discussion: `
<p>How would you raise a delay caused by a senior colleague (for example, a senior trust officer) without damaging the relationship?</p>`,
resources: [
  {title: 'Walking to Destiny', by: 'Christopher M. Snider', note: 'EPI\'s approach to 90-day sprints and accountability.'}
]
},

/* =====================================================================
   15.3 WORKING WITH OUTSIDE ADVISORS
   ===================================================================== */
{
id: 'm15-l03', minutes: 20,
objectives: [
  'Bring outside advisors into the plan in a way that builds trust',
  'Handle disagreements between advisors',
  'Build a referral network among local professionals'
],
body: `
<div class="call plain"><span class="tag">In plain English</span>
<p>Owners already have advisors they trust, usually a CPA and an attorney. A good bank advisor makes those people part of the team, gives them credit, and makes their work easier. Over time, those advisors become the best source of new referrals.</p>
</div>

<h2>Principles</h2>
<ul>
<li><b>Ask the owner\'s permission first</b>, and get written authorization to share information.</li>
<li><b>Involve them early</b>, before decisions are made, not to approve decisions already made.</li>
<li><b>Respect their expertise:</b> ask questions rather than telling them what to do.</li>
<li><b>Make their work easier:</b> organized information, clear questions, and summaries.</li>
<li><b>Give credit</b> in front of the client.</li>
<li><b>Do not compete for their work.</b></li>
</ul>

<h2>When advisors disagree</h2>
<p>Disagreements happen, for example the CPA and estate attorney recommend different transfer approaches. Your role:</p>
<ol>
<li>Clarify the specific points of disagreement and what each is optimizing for (tax, control, simplicity).</li>
<li>Bring them together, with the owner\'s agreement, to discuss.</li>
<li>Help the owner understand the trade-offs in plain language.</li>
<li>Let the owner decide. Do not take sides on technical questions outside your expertise.</li>
</ol>

<h2>Building a network</h2>
<p>Local CPAs, estate attorneys, M&amp;A advisors, insurance professionals, and family business consultants are a practice\'s referral network. Ways to build it: invite them to co-present at events, share useful content, meet regularly over coffee, and above all do good work with shared clients.</p>

<div class="call hawaii"><span class="tag">Hawaii context</span>
<p>The professional community in Hawaii is small and interconnected. A CPA who has a good experience with you on one client will tell others, and so will one who has a bad experience. Reputation among professionals often matters as much as reputation among owners.</p>
</div>

<h2>Why it matters</h2>
<div class="call why"><span class="tag">For the practice</span>
<p>Outside advisors can accelerate or block every plan, and they refer many future clients. How you work with them affects both outcomes.</p></div>
`,
terms: [
  ['Centers of influence', 'Professionals such as CPAs and attorneys who influence clients\' decisions and are sources of referrals.'],
  ['Co-presenting', 'Presenting at an event together with an outside professional.']
],
quiz: [
  {q: 'When should outside advisors be involved?',
   options: ['Early, before decisions are made', 'Only after decisions are final', 'Never', 'Only at closing'], a: 0,
   why: 'Early involvement builds trust and better plans.'},
  {q: 'The CPA and attorney disagree on a transfer approach. What is your role?',
   options: ['Clarify the disagreement, bring them together, explain trade-offs, and let the owner decide', 'Choose the better approach yourself', 'Side with the attorney', 'Ignore it'], a: 0,
   why: 'Facilitate rather than arbitrate technical questions.'},
  {q: 'What should you do before sharing client information with an outside advisor?',
   options: ['Obtain the client\'s permission and written authorization', 'Nothing', 'Ask the advisor', 'Send it anonymously'], a: 0,
   why: 'Consent is required.'},
  {q: 'Which builds a referral network most effectively?',
   options: ['Doing good work together on shared clients', 'Sending mass emails', 'Competing for their services', 'Criticizing other advisors'], a: 0,
   why: 'Experience together builds trust.'},
  {q: 'Why give outside advisors credit in front of the client?',
   options: ['It builds their trust and reinforces the team approach', 'It is required by law', 'It lowers fees', 'It avoids responsibility'], a: 0,
   why: 'Advisors who feel respected collaborate and refer.'}
],
exercise: `
<p>Write a short introduction email to an owner\'s CPA, sent with the owner\'s permission, that explains the bank\'s role, what you are working on, what you would like from them, and an offer to meet. Keep it under 200 words.</p>`,
discussion: `
<p>How would you respond if an owner\'s long-time attorney seems to be blocking progress because they are uncomfortable with a topic outside their expertise?</p>`,
resources: [
  {title: 'The Trusted Advisor', by: 'Maister, Green, Galford', note: 'On building trust with other professionals as well as clients.'}
]
},

/* =====================================================================
   15.4 INFLUENCE WITHOUT AUTHORITY
   ===================================================================== */
{
id: 'm15-l04', minutes: 25,
objectives: [
  'Apply the idea of "currencies" to motivate partners who do not report to you',
  'Use shared goals, reciprocity, and visibility',
  'Escalate constructively when needed'
],
body: `
<div class="call plain"><span class="tag">In plain English</span>
<p>Almost no one on the planning team reports to you. You need specialists to prioritize your client\'s work alongside everything else they do. Influence without authority means understanding what each person values and making it easy and rewarding for them to help.</p>
</div>

<h2>Currencies</h2>
<p>Allan Cohen and David Bradford, in Influence Without Authority, describe influence as exchange: people help when they receive something they value. They call these "currencies." Examples relevant to a bank practice:</p>
<table>
<tr><th>Currency</th><th>Example</th></tr>
<tr><td><b>Business results</b></td><td>New relationships, retained deposits, assets under management, trust appointments</td></tr>
<tr><td><b>Recognition</b></td><td>Credit in front of clients and leaders</td></tr>
<tr><td><b>Ease</b></td><td>Organized information and clear requests that save them time</td></tr>
<tr><td><b>Information</b></td><td>Early notice of client events and opportunities</td></tr>
<tr><td><b>Relationship</b></td><td>Goodwill from helping them first</td></tr>
<tr><td><b>Mission</b></td><td>Being part of meaningful client outcomes</td></tr>
</table>

<h2>Practical techniques</h2>
<ul>
<li><b>Start with shared goals:</b> "We both want the Nakamuras to stay with the bank through this."</li>
<li><b>Make requests specific:</b> what, by when, why it matters.</li>
<li><b>Help first:</b> share referrals and information with partners before you need something.</li>
<li><b>Make progress visible:</b> a shared tracker makes commitments public in a low-pressure way.</li>
<li><b>Close the loop:</b> tell partners what happened because of their work.</li>
</ul>

<h2>Escalating constructively</h2>
<p>When something is truly stuck:</p>
<ol>
<li>Talk directly with the person first. Ask what is getting in the way.</li>
<li>Offer help: can you gather missing information or adjust the timeline?</li>
<li>If still stuck, escalate to managers framed around the client\'s needs, not the colleague\'s failure.</li>
</ol>

<div class="call hawaii"><span class="tag">From your FP&amp;A experience</span>
<p>You already influence without authority: getting business partners to submit forecasts on time, persuading leaders to accept an analysis, and running programs like the AI Ambassador network. Those are real examples to use when describing your fit for this role.</p>
</div>

<h2>Why it matters</h2>
<div class="call why"><span class="tag">For the role</span>
<p>The Senior Advisor description explicitly asks for "the ability to influence without authority across multiple partner teams." It is the skill that makes cross-functional coordination work.</p></div>
`,
terms: [
  ['Influence without authority', 'Getting results through people who do not report to you.'],
  ['Currencies', 'Things people value that can be exchanged for cooperation, such as recognition, results, or ease.'],
  ['Constructive escalation', 'Raising a blocked issue to managers in a way that focuses on the client\'s needs.']
],
quiz: [
  {q: 'According to Cohen and Bradford, why do people help colleagues who have no authority over them?',
   options: ['They receive something they value in exchange', 'They are required to', 'They fear punishment', 'They never do'], a: 0,
   why: 'Influence works through exchange of currencies.'},
  {q: 'Which request is most likely to succeed?',
   options: ['"Could you send the draft trust summary by Thursday so we can review it with the family on Monday?"', '"Please do this soon."', '"This is urgent."', '"You need to prioritize my client."'], a: 0,
   why: 'Specific, time-bound, with a clear reason.'},
  {q: 'What should come first when a colleague\'s work is delayed?',
   options: ['A direct conversation to understand what is in the way', 'Escalating to their manager', 'Complaining to the client', 'Doing their job yourself'], a: 0,
   why: 'Direct conversation respects the colleague and often solves the problem.'},
  {q: 'Which is an example of the "ease" currency?',
   options: ['Providing organized information and clear requests', 'Public praise', 'New relationships', 'Early notice of events'], a: 0,
   why: 'Saving partners time is valuable to them.'},
  {q: 'Why close the loop with partners after their work helps a client?',
   options: ['It gives recognition and builds willingness to help next time', 'It is required by compliance', 'It ends the relationship', 'It lowers fees'], a: 0,
   why: 'Recognition is a strong currency.'}
],
exercise: `
<p>For each internal partner in Lesson 15.1, write the two currencies they are most likely to value and one thing you could offer them in your first 90 days in the role.</p>`,
discussion: `
<p>Describe a time in FP&amp;A when you got someone to do something without authority over them. What currencies did you use? How would you tell that story in an interview for this role?</p>`,
resources: [
  {title: 'Influence Without Authority', by: 'Allan R. Cohen and David L. Bradford', note: 'The source of the currencies framework.'}
]
}
]);
