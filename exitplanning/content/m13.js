FBE.add([
/* =====================================================================
   13.1 THE FIRST MEETING
   ===================================================================== */
{
id: 'm13-l01', minutes: 30,
objectives: [
  'Prepare for a first meeting using internal sources',
  'Run a first meeting with a clear structure',
  'Define what a successful first meeting produces'
],
body: `
<div class="call plain"><span class="tag">Summary</span>
<p>A good first meeting is mostly listening. The owner should leave feeling understood, clearer about their situation, and knowing what the next step is. The advisor should leave knowing the owner\'s goals, the big issues, and who else matters. It should not feel like a sales pitch or an interrogation.</p>
</div>

<h2>Preparation</h2>
<ul>
<li><b>Talk to the referring banker:</b> relationship history, what the bank knows about the business (financial trends, loans, deposits), family members, and what prompted the referral.</li>
<li><b>Review what you can:</b> public information about the company, news, the industry\'s current conditions.</li>
<li><b>Clarify roles:</b> if the banker attends, agree beforehand who leads which part.</li>
<li><b>Prepare a light agenda</b> and a few opening questions. Do not prepare a presentation.</li>
</ul>

<h2>Meeting structure</h2>
<table>
<tr><th>Part</th><th>Time</th><th>Purpose</th></tr>
<tr><td>Opening</td><td>5 to 10 min</td><td>Thank them, set expectations ("today is mostly about understanding you"), confirm time and confidentiality</td></tr>
<tr><td>Their story</td><td>15 to 20 min</td><td>"Tell me how the business started and where it is today." Owners enjoy this, and it reveals values and history.</td></tr>
<tr><td>What prompted this</td><td>10 min</td><td>"What made now a good time to talk?" This finds the trigger.</td></tr>
<tr><td>The three legs</td><td>20 to 25 min</td><td>Light exploration of business, personal, and financial readiness (Lesson 9.1)</td></tr>
<tr><td>Reflect back</td><td>5 to 10 min</td><td>Summarize what you heard: goals, concerns, and open questions. Ask what you missed.</td></tr>
<tr><td>Next step</td><td>5 to 10 min</td><td>Propose one concrete next step and confirm it</td></tr>
</table>

<h2>Outcomes of a first meeting</h2>
<ul>
<li>A clear sense of the owner\'s goals and concerns, in their own words</li>
<li>The trigger for the conversation</li>
<li>The other stakeholders</li>
<li>A rough picture of each readiness leg</li>
<li>One agreed next step, with a date</li>
<li>Trust</li>
</ul>

<h2>What to avoid</h2>
<ul>
<li>Presenting the bank\'s services before understanding the owner</li>
<li>Offering an opinion of value</li>
<li>Recommending an exit option</li>
<li>Filling silences</li>
<li>Taking so many notes that you stop making eye contact. Write key phrases and fill in afterward.</li>
</ul>

<div class="call say"><span class="tag">Example language</span>
<p>"Thanks for making the time. Today is really about understanding you, the business, and what you want the next chapter to look like. I won\'t be selling you anything, and there\'s no right answer to any of this. By the end, I\'ll share what I heard and suggest a next step if it seems useful. Everything we talk about stays confidential. Does that sound okay?"</p>
</div>

<div class="call hawaii"><span class="tag">Hawaii context</span>
<p>First meetings here often start with getting to know each other: family, where you went to school, who you know in common. That is part of building trust, not small talk to rush through. Meeting at the owner\'s place of business, and letting them show you around, also tends to work well.</p>
</div>

<h2>Relevance to the role</h2>
<div class="call why"><span class="tag">Application</span>
<p>The first responsibility in the job description is engaging owners in consultative discussions. The first meeting sets the tone for everything after it, and it is also the most common interview role-play for advisory roles. Practicing this structure is worth your time.</p></div>
`,
terms: [
  ['Discovery', 'The process of learning a client\'s situation, goals, and concerns before recommending anything.'],
  ['Trigger', 'The event or concern that prompted the owner to talk now.'],
  ['Reflecting back', 'Summarizing what the client said so they feel understood and can correct you.']
],
quiz: [
  {q: 'What should an advisor avoid in a first meeting?',
   options: ['Offering an opinion of value or recommending an exit option', 'Asking about goals', 'Summarizing what was heard', 'Proposing a next step'], a: 0,
   why: 'It is too early, and it shifts the focus from listening to selling.'},
  {q: 'Why ask "What made now a good time to talk?"',
   options: ['It reveals the trigger, which shapes urgency and priorities', 'It is a closing technique', 'It sets the valuation', 'It is required by compliance'], a: 0,
   why: 'Knowing the trigger tells you what matters most right now.'},
  {q: 'What is the best way to end a first meeting?',
   options: ['Reflect back what you heard and agree on one concrete next step', 'Present a full proposal', 'Leave without a next step', 'Ask for a signature'], a: 0,
   why: 'Clarity and a next step keep momentum.'},
  {q: 'Who is the best source of background before a first meeting?',
   options: ['The referring banker', 'A competitor', 'The owner\'s employees', 'Social media only'], a: 0,
   why: 'The banker knows the relationship and the business.'},
  {q: 'Why invite the owner to tell the story of the business?',
   options: ['Owners enjoy it, and it reveals values, history, and priorities', 'It fills time', 'It is required', 'It replaces financial statements'], a: 0,
   why: 'Stories reveal what matters to the owner.'}
],
exercise: `
<p>Write a full first-meeting guide for a 75-minute meeting: an opening script, 12 to 15 questions organized by the structure above, a reflect-back template, and three possible next steps you might propose depending on what you hear. Practice it out loud once.</p>`,
discussion: `
<p>What habits from FP&amp;A meetings might help you in a first meeting, and which might get in the way? (For example: preparing detailed materials, answering questions quickly, focusing on numbers.)</p>`,
resources: [
  {title: 'The Trusted Advisor', by: 'Maister, Green, Galford', note: 'Chapters on the early stages of client relationships.'},
  {title: 'Humble Inquiry', by: 'Edgar Schein', note: 'The mindset for discovery conversations.'}
]
},

/* =====================================================================
   13.2 QUESTIONING AND LISTENING
   ===================================================================== */
{
id: 'm13-l02', minutes: 25,
objectives: [
  'Use open questions, follow-ups, and funnels',
  'Listen and reflect accurately, including feelings',
  'Use the trust equation to check your own behavior'
],
body: `
<div class="call plain"><span class="tag">Summary</span>
<p>Effective discovery relies on open questions, follow-up questions, and reflective listening. Open questions get owners talking; follow-ups get beneath the first answer; reflecting shows you understood. The discipline is resisting the urge to solve the problem before you understand it.</p>
</div>

<h2>Question types</h2>
<ul>
<li><b>Open:</b> "What would a great outcome look like for you?" Invites a story.</li>
<li><b>Closed:</b> "Do you have a buy-sell agreement?" Useful for facts, but they shut down conversation if overused.</li>
<li><b>Follow-up:</b> "Tell me more about that." "What else?" "What makes that important to you?"</li>
<li><b>Funnel:</b> start broad, then narrow. "How do you feel about the future of the business?" then "What worries you most?" then "What would need to happen for that worry to go away?"</li>
</ul>
<p>Michael Bungay Stanier\'s "And what else?" is one of the most useful follow-ups there is. The first answer is rarely the only one, or the most important.</p>

<h2>Listening</h2>
<ul>
<li><b>Listen for content and feeling:</b> "I\'m fine with whatever the kids decide" can be said with relief or with resignation.</li>
<li><b>Reflect:</b> "It sounds like you want to be fair to all three kids, and you\'re not sure fair means equal."</li>
<li><b>Use silence:</b> after a meaningful question, wait. Owners often say the most important thing after a pause.</li>
<li><b>Summarize periodically:</b> it keeps you accurate and shows progress.</li>
</ul>

<h2>The trust equation</h2>
<p>In The Trusted Advisor, Maister, Green, and Galford describe trustworthiness as:</p>
<blockquote>Trust = (Credibility + Reliability + Intimacy) / Self-orientation</blockquote>
<ul>
<li><b>Credibility:</b> do you know what you are talking about?</li>
<li><b>Reliability:</b> do you do what you say?</li>
<li><b>Intimacy:</b> do they feel safe telling you personal things?</li>
<li><b>Self-orientation:</b> are you focused on them or on yourself (your product, your expertise, looking smart)?</li>
</ul>
<p>Self-orientation sits in the denominator, so it has an outsized effect. Talking too much, interrupting, and rushing to show expertise all raise it.</p>

<div class="call example"><span class="tag">Worked example: follow-up questions</span>
<p><b>Advisor:</b> "What would a great outcome look like?"<br>
<b>Owner:</b> "Get a good price and retire."<br>
<b>Advisor:</b> "What else?"<br>
<b>Owner:</b> "I\'d like my guys to be taken care of."<br>
<b>Advisor:</b> "Tell me more about that."<br>
<b>Owner:</b> "Some of them have been with me 25 years. I don\'t want someone coming in and firing them to save money."<br>
<b>Advisor:</b> "So the price matters, and so does who the buyer is and how they treat your people."<br>
<b>Owner:</b> "Honestly, the people matter more."</p>
<p>The first answer pointed to a strategic sale. The fourth pointed toward internal options or a carefully chosen buyer.</p>
</div>

<div class="call watch"><span class="tag">Caution</span>
<p>Analysts are rewarded for having answers quickly. In discovery, a quick answer often ends the most valuable part of the conversation. When you feel the urge to explain, try asking one more question first.</p>
</div>

<h2>Relevance to the role</h2>
<div class="call why"><span class="tag">Application</span>
<p>Listening well is the foundation of "consultative." It is also how you gather the qualitative inputs the readiness assessment depends on. Owners rarely volunteer their real priorities to someone who is talking.</p></div>
`,
terms: [
  ['Open question', 'A question that invites an explanation or story rather than a yes or no.'],
  ['Funnel questioning', 'Starting broad and narrowing toward specifics.'],
  ['Trust equation', 'Maister, Green, and Galford\'s formula: (credibility + reliability + intimacy) / self-orientation.'],
  ['Self-orientation', 'The degree to which an advisor focuses on themselves rather than the client.']
],
quiz: [
  {q: 'In the trust equation, which factor has the largest effect when it rises?',
   options: ['Self-orientation, because it is in the denominator', 'Credibility', 'Reliability', 'Intimacy'], a: 0,
   why: 'High self-orientation reduces trust across the board.'},
  {q: 'Which is an open question?',
   options: ['"What would a great outcome look like for you?"', '"Do you have a will?"', '"Is your company an S corporation?"', '"Will you sell this year?"'], a: 0,
   why: 'It invites a story.'},
  {q: 'Why ask "And what else?"',
   options: ['The first answer is rarely the only or most important one', 'To extend the meeting', 'To test the owner', 'It is a closing technique'], a: 0,
   why: 'Deeper priorities often come out later.'},
  {q: 'An owner says, "I\'m fine with whatever the kids decide," sounding resigned. What is a good response?',
   options: ['Reflect both content and feeling, such as "It sounds like you have mixed feelings about that"', 'Move on to the next topic', 'Tell him the kids will be fine', 'Ask about EBITDA'], a: 0,
   why: 'Reflecting feelings invites the real concern.'},
  {q: 'What is a common FP&A habit that can hurt discovery?',
   options: ['Answering quickly before fully understanding the situation', 'Asking questions', 'Taking notes', 'Being organized'], a: 0,
   why: 'Quick answers can cut off the most valuable information.'}
],
exercise: `
<p>In your next few work meetings, practice one skill at a time: first, ask "And what else?" at least twice; next, reflect a feeling at least once; next, wait three seconds after asking a question. Write a short note after each meeting about what happened.</p>`,
discussion: `
<p>Score yourself honestly on the four elements of the trust equation in your current role. Where are you strongest? What would raise your score with business owners?</p>`,
resources: [
  {title: 'The Trusted Advisor', by: 'Maister, Green, Galford', note: 'The trust equation and its practical implications.'},
  {title: 'The Coaching Habit', by: 'Michael Bungay Stanier', note: 'Seven questions, including "And what else?"'}
]
},

/* =====================================================================
   13.3 GUIDING TOWARD A PLANNING PATHWAY
   ===================================================================== */
{
id: 'm13-l03', minutes: 25,
objectives: [
  'Move from discovery to a recommended next step',
  'Present a planning pathway clearly',
  'Handle common hesitations without pressure'
],
body: `
<div class="call plain"><span class="tag">Summary</span>
<p>The job description says to "guide conversations toward defined planning pathways and roadmaps." After you understand the owner, you need to suggest what to do next in a way that fits what they told you and feels like the natural next step.</p>
</div>

<h2>From discovery to recommendation</h2>
<ol>
<li><b>Summarize their goals and concerns in their words.</b></li>
<li><b>Connect a pathway to those goals.</b> "Because you want to protect your wife and aren\'t ready to think about selling, the logical first step is contingency planning."</li>
<li><b>Describe the next step concretely:</b> what happens, who is involved, how long, and what they will get.</li>
<li><b>Check for fit:</b> "Does that feel like the right place to start?"</li>
<li><b>Confirm logistics:</b> date, documents, attendees.</li>
</ol>

<h2>Matching pathways to situations</h2>
<table>
<tr><th>What you heard</th><th>Pathway (Lesson 1.3)</th></tr>
<tr><td>Not ready to think about leaving; worried about family if something happens</td><td>Contingency and protection</td></tr>
<tr><td>5+ years out; wants to grow value first</td><td>Value building</td></tr>
<tr><td>A child is being prepared to take over</td><td>Family succession</td></tr>
<tr><td>Managers or employees could be buyers</td><td>Internal sale</td></tr>
<tr><td>Expects to sell in 1 to 3 years; buyers calling</td><td>Sale preparation</td></tr>
<tr><td>Sold or selling soon</td><td>Post-transaction wealth planning</td></tr>
</table>
<p>For most owners, the next step after discovery is the exit readiness assessment, framed around the pathway that fits.</p>

<h2>Common hesitations</h2>
<table>
<tr><th>Owner says</th><th>A useful response</th></tr>
<tr><td>"Let me think about it."</td><td>"Of course. What would be helpful to think through? Is there anything I can send you?" Then propose a specific follow-up date.</td></tr>
<tr><td>"I need to talk to my CPA."</td><td>"That\'s a good idea. Would it help if we met together? I can send a short summary ahead of time."</td></tr>
<tr><td>"What does this cost?"</td><td>Answer clearly and directly according to the practice\'s policy.</td></tr>
<tr><td>"I\'m not ready to sell."</td><td>"You don\'t need to be. Most of this work makes the business stronger whether you sell or not."</td></tr>
<tr><td>"Isn\'t this just a way to get my money?"</td><td>Acknowledge the concern honestly, explain how the service works and what the bank does and does not do, and let them decide.</td></tr>
</table>

<div class="call say"><span class="tag">Example language</span>
<p>"Here\'s what I heard: you\'re proud of what you\'ve built, you\'re not in a hurry, and the thing that keeps you up is what happens to Lani and the business if something happens to you. You\'d also like a clearer idea of what the business might be worth someday. A good next step would be a readiness assessment. We\'d gather some information, meet with you and Lani for a couple of hours, and in about four weeks give you a short report on where you stand and what to do first. The first priority would almost certainly be the protection pieces. Does that sound like a good place to start?"</p>
</div>

<div class="call hawaii"><span class="tag">Hawaii context</span>
<p>Owners here may be slow to commit in a first meeting, especially with someone new, and may want to check with family or trusted advisors. A patient follow-up, and involving the referring banker who already has the relationship, often works better than pushing for a decision in the room.</p>
</div>

<h2>Relevance to the role</h2>
<div class="call why"><span class="tag">Application</span>
<p>Pathways give conversations a destination. Without them, discovery meetings can become pleasant chats that go nowhere. With them, the owner leaves with a clear next step and the practice has a consistent process.</p></div>
`,
terms: [
  ['Planning pathway', 'A standard planning track for a common owner situation.'],
  ['Next step', 'A concrete, agreed action with a date that moves the engagement forward.']
],
quiz: [
  {q: 'What is the first step in moving from discovery to a recommendation?',
   options: ['Summarize the owner\'s goals and concerns in their own words', 'Present pricing', 'Recommend a buyer', 'Ask for a signature'], a: 0,
   why: 'Recommendations should grow from what the owner said.'},
  {q: 'An owner is not ready to think about leaving but worries about his family if something happens. Which pathway fits?',
   options: ['Contingency and protection', 'Sale preparation', 'Post-transaction planning', 'Internal sale'], a: 0,
   why: 'Protection addresses his concern without requiring an exit decision.'},
  {q: 'An owner says, "I need to talk to my CPA." What is a good response?',
   options: ['Offer to meet with the CPA together and send a summary in advance', 'Discourage involving the CPA', 'Insist on a decision now', 'End the relationship'], a: 0,
   why: 'Including the CPA builds trust and momentum.'},
  {q: 'What should a proposed next step include?',
   options: ['What happens, who is involved, how long it takes, and what the owner receives', 'Only the price', 'Only the timeline', 'A buyer list'], a: 0,
   why: 'Concrete steps are easier to agree to.'},
  {q: 'Why use defined pathways?',
   options: ['They give conversations a destination and make the practice consistent', 'They limit the owner\'s options', 'They replace discovery', 'They are required by law'], a: 0,
   why: 'Pathways turn discovery into progress.'}
],
exercise: `
<p>Write three "close" statements, like the example, for three different owners: one who wants to sell in two years, one planning to pass the business to a daughter, and one who just received an unsolicited offer. Each should summarize, connect to a pathway, describe the next step, and check for fit.</p>`,
discussion: `
<p>How do you guide an owner toward a next step without it feeling like a sales close? Where is the line between guiding and pushing?</p>`,
resources: [
  {title: 'The Trusted Advisor', by: 'Maister, Green, Galford', note: 'On framing issues and moving toward agreement.'}
]
},

/* =====================================================================
   13.4 DIFFICULT CONVERSATIONS
   ===================================================================== */
{
id: 'm13-l04', minutes: 30,
objectives: [
  'Prepare for high-stakes conversations',
  'Deliver hard news clearly and with care',
  'Handle strong emotions and pushback'
],
body: `
<div class="call plain"><span class="tag">Summary</span>
<p>Advisors regularly have to tell an owner something they do not want to hear: the business is worth less than they thought, their successor is not ready, they cannot afford to retire when they planned. Avoiding or softening these messages too much hurts the owner. Delivering them clearly, with care and with a path forward, is one of the most valuable things an advisor does.</p>
</div>

<h2>Common hard conversations</h2>
<ul>
<li>A value range well below the owner\'s expectation</li>
<li>A wealth gap that means working longer or adjusting goals</li>
<li>A family successor who is not ready</li>
<li>A spouse or partner who disagrees</li>
<li>An owner whose health is affecting the business</li>
<li>Family conflict that is blocking progress</li>
</ul>

<h2>Preparing</h2>
<ul>
<li><b>Know your purpose:</b> what do you want for the owner, for the relationship, and for the outcome? (Crucial Conversations calls this "start with heart.")</li>
<li><b>Get the facts right:</b> check the numbers with the specialists before the meeting.</li>
<li><b>Decide who delivers:</b> the valuation specialist may present the valuation, with you providing context.</li>
<li><b>Plan the path forward:</b> hard news lands better with options attached.</li>
</ul>

<h2>Delivering</h2>
<ol>
<li><b>Set it up:</b> "I want to walk you through something important, and some of it may be different from what you expected."</li>
<li><b>State it plainly:</b> one or two sentences, no hedging.</li>
<li><b>Pause:</b> let the owner react.</li>
<li><b>Acknowledge feelings:</b> "That\'s a lot lower than you were hoping. I understand that\'s disappointing."</li>
<li><b>Explain the drivers:</b> what causes it, in plain language.</li>
<li><b>Offer options:</b> what can change it, and how long it would take.</li>
<li><b>Agree on a next step.</b></li>
</ol>

<div class="call say"><span class="tag">Example language: presenting a low valuation</span>
<p>"The valuation came back in a range of $3.8 to $4.4 million. I know you\'d been thinking closer to $7 million, so I want to be direct about that and then walk through why. [Pause.] The biggest factor is that most of the key customer relationships run through you personally, so a buyer would see a lot of risk in the transition. The second is the customer concentration with the hotel group. Both of those can be improved. Businesses that reduce owner dependence and diversify often see a meaningful change in value within two to four years. Can we talk about what that could look like?"</p>
</div>

<h2>Handling reactions</h2>
<ul>
<li><b>Anger or disbelief:</b> do not argue. Acknowledge, and offer to walk through the assumptions. Invite the specialist to explain the methodology.</li>
<li><b>Withdrawal:</b> give space. Offer to continue the conversation another day.</li>
<li><b>Blame:</b> avoid defending yourself. Refocus on what can be done.</li>
<li><b>Tears or grief:</b> slow down. These conversations touch life\'s work and family. It is fine to pause.</li>
</ul>

<div class="call hawaii"><span class="tag">Hawaii context</span>
<p>Direct confrontation can be uncomfortable in many local families, and people may not voice disagreement openly in a meeting. Follow up individually after a difficult conversation to learn how it really landed. Silence in the room does not always mean agreement.</p>
</div>

<h2>Relevance to the role</h2>
<div class="call why"><span class="tag">Application</span>
<p>Owners remember advisors who told them the truth kindly and helped them act on it. Credibility in the trust equation comes largely from moments like these.</p></div>
`,
terms: [
  ['Start with heart', 'A Crucial Conversations principle: clarify what you really want for yourself, the other person, and the relationship before a difficult talk.'],
  ['Hard news with a path', 'Delivering difficult information alongside realistic options for improving the situation.']
],
quiz: [
  {q: 'What is the best way to state hard news?',
   options: ['Plainly, in one or two sentences, then pause', 'Hidden in a long explanation', 'Only in writing', 'After many unrelated topics'], a: 0,
   why: 'Clarity respects the owner and avoids confusion.'},
  {q: 'An owner reacts angrily to a low valuation. What should you do?',
   options: ['Acknowledge the reaction and offer to walk through the assumptions, possibly with the specialist', 'Argue that the valuation is correct', 'Agree it is wrong', 'End the meeting'], a: 0,
   why: 'Arguing escalates. Explaining builds understanding.'},
  {q: 'Why attach options to hard news?',
   options: ['It gives the owner a way forward and keeps the conversation productive', 'It hides the bad news', 'It is legally required', 'It increases fees'], a: 0,
   why: 'People cope with bad news better when they can act on it.'},
  {q: 'After a difficult family meeting where no one objected, what is wise?',
   options: ['Follow up individually to learn how the conversation really landed', 'Assume everyone agreed', 'Send the final plan immediately', 'Avoid further contact'], a: 0,
   why: 'Silence may not mean agreement.'},
  {q: 'What does "start with heart" mean in preparing for a crucial conversation?',
   options: ['Clarify what you want for the owner, the relationship, and the outcome', 'Share personal stories first', 'Avoid the topic', 'Start with the conclusion'], a: 0,
   why: 'Clear intentions keep the conversation on track.'}
],
exercise: `
<p>Write scripts (about 150 words each) for two conversations: telling an owner their wealth gap means they likely need to work three more years, and telling parents their chosen successor is not yet ready. Use the delivery steps from this lesson.</p>`,
discussion: `
<p>What makes you personally uncomfortable in difficult conversations? How might that show up with an owner, and what would you do about it?</p>`,
resources: [
  {title: 'Crucial Conversations', by: 'Patterson and co-authors', note: 'The core reference for high-stakes conversations.'},
  {title: 'Difficult Conversations', by: 'Douglas Stone, Bruce Patton, Sheila Heen', note: 'From the Harvard Negotiation Project. Especially useful on the "feelings" and "identity" parts of hard conversations.'}
]
}
]);
