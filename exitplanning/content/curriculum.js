/* Program structure. Lesson bodies live in content/mNN.js and register with FBE.add(). */
window.FBE = {
  lessons: {},
  add: function(list){ list.forEach(function(l){ window.FBE.lessons[l.id] = l; }); },

  phases: [
    {id: 'p1', label: 'Phase 1', title: 'Foundations',
     summary: 'The business owner\'s world, private-company financials, entity and transaction tax, and estate planning basics. This is the vocabulary every other advisor at the table will assume you have.'},
    {id: 'p2', label: 'Phase 2', title: 'Core Disciplines',
     summary: 'Valuation, exit options, deal structure, the Exit Planning Institute\'s Value Acceleration Methodology, owner readiness, family business systems, and wealth planning around a liquidity event.'},
    {id: 'p3', label: 'Phase 3', title: 'The Advisory Craft',
     summary: 'Owner psychology, consultative conversations, running an exit readiness assessment, coordinating the internal team, client materials and events, and the Hawaii market. This phase maps most directly to the job description.'},
    {id: 'p4', label: 'Phase 4', title: 'Integration and CEPA',
     summary: 'Full capstone cases from first meeting to roadmap, then structured preparation for the CEPA program and exam.'}
  ],

  modules: [
    /* ---------------- PHASE 1 ---------------- */
    {id: 'm01', phase: 'p1', num: 1, title: 'The Owner, the Role, and the Practice',
     summary: 'Why exit planning exists, how every owner eventually exits, how a bank\'s Family Business & Entrepreneurs practice works, and where your boundaries are.',
     why: 'Everything else in this program is a tool. This module explains the problem those tools solve: an owner whose wealth, identity and family are tied up in one illiquid asset, facing a transition that happens once and cannot be redone.',
     job: 'This is the context behind every line in the job description: intake, readiness assessments, coordination with commercial banking, wealth planning, trust and valuation, and the compliance paragraph at the end.',
     lessons: [
       {id: 'm01-l01', title: 'Why exit planning exists', summary: 'The owner\'s balance sheet, the illiquidity problem, and why most transitions go worse than they should.'},
       {id: 'm01-l02', title: 'Every owner exits: planned and unplanned', summary: 'The voluntary exit, the five Ds that force an involuntary one, and why timing is the owner\'s most underrated variable.'},
       {id: 'm01-l03', title: 'How a bank Family Business & Entrepreneurs practice works', summary: 'The client journey, the internal partners, the planning pathways, and why a bank invests in this work.'},
       {id: 'm01-l04', title: 'Your lane: boundaries, referrals, and compliance', summary: 'What you do, what you coordinate, what you never do, and how BSA/AML and fair banking apply to business-owner clients.'}
     ]},
    {id: 'm02', phase: 'p1', num: 2, title: 'Private Company Financials Through the Owner\'s Lens',
     summary: 'How private company financials differ from what you see in a bank, how to normalize earnings, and how a headline price becomes cash in the owner\'s pocket.',
     why: 'Every value conversation starts with earnings, and private company earnings are almost never stated the way a buyer will see them. This is where your FP&A background gives you the fastest head start.',
     job: 'The "quantitative inputs" in an exit readiness assessment are mostly this: normalized earnings, working capital, debt, and the quality of those earnings.',
     lessons: [
       {id: 'm02-l01', title: 'Why private company financials are different', summary: 'Tax-driven books, the owner\'s discretion, and the three kinds of financial statements you will see.'},
       {id: 'm02-l02', title: 'Normalizing earnings: add-backs, EBITDA and SDE', summary: 'Turning reported profit into the earnings a buyer will pay for.'},
       {id: 'm02-l03', title: 'From headline price to cash in hand', summary: 'Enterprise value, equity value, debt, cash, the working capital peg, fees, and taxes.'},
       {id: 'm02-l04', title: 'Quality of earnings: what buyers attack', summary: 'Concentration, owner dependence, recurring revenue, and the risks that shrink a multiple.'}
     ]},
    {id: 'm03', phase: 'p1', num: 3, title: 'Entity Structure and Transaction Tax',
     summary: 'Entity types, basis and gain, asset versus stock sales, and the main tools that shape the tax on an exit.',
     why: 'Owners do not live on the purchase price. They live on what is left after tax, and the same deal can leave very different amounts depending on structure. You will not give tax advice, but you must recognize the issues early enough to bring in the CPA.',
     job: 'Tax considerations sit behind most of the "decision considerations" the job description asks you to identify.',
     lessons: [
       {id: 'm03-l01', title: 'Entity types and why they matter', summary: 'Sole proprietorships, partnerships and LLCs, S corporations and C corporations, and how each is taxed.'},
       {id: 'm03-l02', title: 'Basis, gain, and the rates that apply', summary: 'What gets taxed on a sale, capital gain versus ordinary income, recapture, NIIT, and Hawaii.'},
       {id: 'm03-l03', title: 'Asset sale versus stock sale', summary: 'Why buyers and sellers want opposite things, purchase price allocation, and the C corporation trap.'},
       {id: 'm03-l04', title: 'Tools that shape the tax on an exit', summary: 'Installment sales, QSBS, the ESOP rollover, and planning that has to happen before a deal.'}
     ]},
    {id: 'm04', phase: 'p1', num: 4, title: 'Estate and Wealth Transfer Essentials',
     summary: 'The basic estate plan, estate and gift tax, techniques for moving business value to the next generation, and buy-sell agreements.',
     why: 'For family businesses, exit planning and estate planning are the same conversation. The business is usually the largest asset in the estate, and how it passes determines both the tax bill and whether the family stays intact.',
     job: 'This module prepares you to work alongside the trust and estate resources named in the job description and to spot when a client needs them.',
     lessons: [
       {id: 'm04-l01', title: 'The basic estate plan', summary: 'Wills, revocable trusts, powers of attorney, beneficiary designations, and probate.'},
       {id: 'm04-l02', title: 'Estate and gift tax, federal and Hawaii', summary: 'The exemption, the annual exclusion, portability, the Hawaii estate tax, and step-up in basis.'},
       {id: 'm04-l03', title: 'Moving business value to the next generation', summary: 'Gifting, valuation discounts, voting and non-voting shares, GRATs, sales to grantor trusts, and SLATs.'},
       {id: 'm04-l04', title: 'Buy-sell agreements and life insurance', summary: 'Cross-purchase versus redemption, valuation clauses, funding, and the Connelly decision.'}
     ]},

    /* ---------------- PHASE 2 ---------------- */
    {id: 'm05', phase: 'p2', num: 5, title: 'Business Valuation',
     summary: 'Standards of value, the three approaches, multiples, discounts, and why one business legitimately has several values.',
     lessons: [
       {id: 'm05-l01', title: 'Value is a range: standards and premises of value', summary: 'Fair market value, investment value, strategic value, and why the purpose of a valuation changes the answer.'},
       {id: 'm05-l02', title: 'The income approach', summary: 'Capitalization of earnings, discounted cash flow, and building a discount rate for a private company.'},
       {id: 'm05-l03', title: 'The market approach', summary: 'Guideline public companies, transaction databases, and using multiples without fooling yourself.'},
       {id: 'm05-l04', title: 'The asset approach and when it controls', summary: 'Adjusted net assets, holding companies, real estate heavy businesses, and liquidation value.'},
       {id: 'm05-l05', title: 'Discounts, premiums, and reading a valuation report', summary: 'Lack of control, lack of marketability, and how to review a report with a client.'}
     ]},
    {id: 'm06', phase: 'p2', num: 6, title: 'Exit Options: Insiders and Outsiders',
     summary: 'Every realistic path out of a business, what each requires, and how to compare them against the owner\'s goals.',
     lessons: [
       {id: 'm06-l01', title: 'The map of exit options', summary: 'Internal and external transfers, recapitalizations, and orderly wind-downs.'},
       {id: 'm06-l02', title: 'Transferring to family', summary: 'Gift, sale, or a blend; readiness of the next generation; and financing the transfer.'},
       {id: 'm06-l03', title: 'Management buyouts and ESOPs', summary: 'Selling to employees, how the financing works, and when an ESOP fits.'},
       {id: 'm06-l04', title: 'Strategic buyers, private equity, and recapitalizations', summary: 'Who pays what and why, rollover equity, and the second bite of the apple.'},
       {id: 'm06-l05', title: 'Comparing options against the owner\'s goals', summary: 'A decision framework that weighs proceeds, legacy, timing, control, and risk.'}
     ]},
    {id: 'm07', phase: 'p2', num: 7, title: 'Deal Structure and the Sale Process',
     summary: 'How a sale actually runs, from preparation to closing, and the deal terms that move real dollars.',
     lessons: [
       {id: 'm07-l01', title: 'The sale process from start to close', summary: 'Advisors, teasers, the confidential information memorandum, LOIs, diligence, and closing.'},
       {id: 'm07-l02', title: 'Deal terms that move the money', summary: 'Cash at close, earnouts, seller notes, escrows, holdbacks, and rollover equity.'},
       {id: 'm07-l03', title: 'Diligence, reps and warranties, and what kills deals', summary: 'Quality of earnings reports, indemnification, R&W insurance, and common failure points.'},
       {id: 'm07-l04', title: 'Financing the buyer: where the bank fits', summary: 'Senior debt, SBA 7(a), mezzanine, and the commercial banker\'s view of a deal.'}
     ]},
    {id: 'm08', phase: 'p2', num: 8, title: 'The Value Acceleration Methodology',
     summary: 'The Exit Planning Institute\'s core framework: Discover, Prepare, Decide, the Four Cs of intangible capital, and the three gaps.',
     lessons: [
       {id: 'm08-l01', title: 'Business attractiveness versus business readiness', summary: 'Why a valuable business can still be unsellable, and the EPI view of value creation.'},
       {id: 'm08-l02', title: 'The Four Cs of intangible capital', summary: 'Human, customer, structural, and social capital, and how each shows up in value.'},
       {id: 'm08-l03', title: 'The value gap, profit gap, and wealth gap', summary: 'Quantifying the distance between where the owner is and where they need to be.'},
       {id: 'm08-l04', title: 'Discover, Prepare, Decide', summary: 'The three gates, the 90-day sprint cycle, and how an engagement moves through them.'}
     ]},
    {id: 'm09', phase: 'p2', num: 9, title: 'Owner Readiness: Personal and Financial',
     summary: 'Whether the owner is ready to leave, can afford to leave, and has somewhere to go.',
     lessons: [
       {id: 'm09-l01', title: 'The three legs: business, personal, and financial', summary: 'Why owners who are ready in only one or two dimensions struggle after an exit.'},
       {id: 'm09-l02', title: 'Financial readiness and "the number"', summary: 'Building the owner\'s post-exit cash flow need and testing it against net proceeds.'},
       {id: 'm09-l03', title: 'Personal readiness and life after the business', summary: 'Identity, purpose, relationships, and planning the next chapter.'},
       {id: 'm09-l04', title: 'Measuring readiness', summary: 'Readiness scoring tools, what they reveal, and how to use them in a first meeting.'}
     ]},
    {id: 'm10', phase: 'p2', num: 10, title: 'Family Business Systems and Governance',
     summary: 'How family, ownership and business interact, and the governance structures that keep them working.',
     lessons: [
       {id: 'm10-l01', title: 'The three-circle model', summary: 'Seven positions, seven perspectives, and why the same decision looks different from each.'},
       {id: 'm10-l02', title: 'How family businesses develop over generations', summary: 'Controlling owner, sibling partnership, cousin consortium, and what changes at each stage.'},
       {id: 'm10-l03', title: 'Leadership succession and ownership succession', summary: 'Two separate transitions that are often confused, and preparing the next generation.'},
       {id: 'm10-l04', title: 'Governance: boards, family councils, and constitutions', summary: 'Structures that separate family, ownership and business decisions.'},
       {id: 'm10-l05', title: 'Fair versus equal and managing conflict', summary: 'Active and inactive heirs, in-laws, compensation, and the conversations families avoid.'}
     ]},
    {id: 'm11', phase: 'p2', num: 11, title: 'Wealth Planning Around a Liquidity Event',
     summary: 'Planning before, during, and after the sale so the proceeds support the owner\'s life and legacy.',
     lessons: [
       {id: 'm11-l01', title: 'Pre-transaction planning windows', summary: 'What must happen years, months, and weeks before a deal, and what becomes impossible after the LOI.'},
       {id: 'm11-l02', title: 'Charitable strategies', summary: 'Donor-advised funds, charitable remainder trusts, and gifting pre-sale interests.'},
       {id: 'm11-l03', title: 'From operator to investor', summary: 'Concentrated wealth becoming liquid wealth, cash flow design, and risk.'},
       {id: 'm11-l04', title: 'Insurance and risk management for owners', summary: 'Key person, disability, buy-sell funding, and post-exit coverage.'}
     ]},

    /* ---------------- PHASE 3 ---------------- */
    {id: 'm12', phase: 'p3', num: 12, title: 'Business Owner Psychology',
     summary: 'Why owners delay, how identity and control shape decisions, and what seller\'s remorse teaches advisors.',
     lessons: [
       {id: 'm12-l01', title: 'Why owners avoid exit planning', summary: 'Mortality, identity, control, and the belief that the business will always be there.'},
       {id: 'm12-l02', title: 'Identity, control, and seller\'s remorse', summary: 'What owners lose when they sell, and how to plan for it.'},
       {id: 'm12-l03', title: 'The spouse, the partner, and the family in the room', summary: 'Who else is part of the decision, and how to include them.'},
       {id: 'm12-l04', title: 'Change readiness and motivating action', summary: 'Moving an owner from interest to commitment without pressure.'}
     ]},
    {id: 'm13', phase: 'p3', num: 13, title: 'Discovery and Consultative Conversations',
     summary: 'The conversation skills behind "engages in consultative discussions" in the job description.',
     lessons: [
       {id: 'm13-l01', title: 'The first meeting', summary: 'Structure, questions, and what a good first meeting produces.'},
       {id: 'm13-l02', title: 'Questioning and listening', summary: 'Open questions, follow-ups, summarizing, and the discipline of not solving too early.'},
       {id: 'm13-l03', title: 'Guiding toward a planning pathway', summary: 'Moving from a conversation to a defined next step and roadmap.'},
       {id: 'm13-l04', title: 'Difficult conversations', summary: 'Delivering a low valuation, naming family conflict, and handling pushback.'}
     ]},
    {id: 'm14', phase: 'p3', num: 14, title: 'The Exit Readiness Assessment',
     summary: 'Hands-on: gathering qualitative and quantitative inputs and turning them into themes, action items, and decision points.',
     lessons: [
       {id: 'm14-l01', title: 'Intake and data gathering', summary: 'What to request, in what order, and how to make it easy for the owner.'},
       {id: 'm14-l02', title: 'Assessing business readiness', summary: 'Financial, operational, and intangible capital review.'},
       {id: 'm14-l03', title: 'Assessing personal and financial readiness', summary: 'Goals, the wealth gap, and personal readiness signals.'},
       {id: 'm14-l04', title: 'Synthesis: themes, action items, and decision points', summary: 'Turning a pile of inputs into a clear picture and a prioritized plan.'},
       {id: 'm14-l05', title: 'Workshop: a full assessment', summary: 'A complete case with data, where you build the assessment yourself.'}
     ]},
    {id: 'm15', phase: 'p3', num: 15, title: 'Orchestrating the Advisory Team',
     summary: 'Working with commercial banking, wealth planning, trust and estate, valuation, and outside CPAs and attorneys.',
     lessons: [
       {id: 'm15-l01', title: 'Who does what', summary: 'Each partner\'s role, incentives, and language.'},
       {id: 'm15-l02', title: 'Running workstreams and keeping momentum', summary: 'Timelines, owners of tasks, and status rhythms that keep a plan moving.'},
       {id: 'm15-l03', title: 'Working with outside advisors', summary: 'CPAs, attorneys, and investment bankers the client already trusts.'},
       {id: 'm15-l04', title: 'Influence without authority', summary: 'Getting partners who do not report to you to deliver on time.'}
     ]},
    {id: 'm16', phase: 'p3', num: 16, title: 'Client Materials, Meetings, and Events',
     summary: 'Client-ready summaries, roadmaps, meeting facilitation, documentation, and client events.',
     lessons: [
       {id: 'm16-l01', title: 'Writing for business owners', summary: 'Summaries and recommendations an owner will read and act on.'},
       {id: 'm16-l02', title: 'The roadmap deliverable', summary: 'Structuring findings, options, and a sequenced plan.'},
       {id: 'm16-l03', title: 'Facilitating meetings and documenting follow-through', summary: 'Agendas, decisions, action items, and notes that hold up.'},
       {id: 'm16-l04', title: 'Client events that create conversations', summary: 'Seminars, roundtables, and events that lead to real engagements.'}
     ]},
    {id: 'm17', phase: 'p3', num: 17, title: 'The Hawaii Market',
     summary: 'Family enterprise in Hawaii: land, relationships, a limited buyer pool, and multigenerational expectations.',
     lessons: [
       {id: 'm17-l01', title: 'Family business in Hawaii', summary: 'Industry mix, generational patterns, and the role of relationships.'},
       {id: 'm17-l02', title: 'Land, real estate, and operating companies', summary: 'Separating property from operations, and why it matters for value and estate planning.'},
       {id: 'm17-l03', title: 'Buyers for island businesses', summary: 'Local, mainland, and private equity buyers, and what each looks for.'},
       {id: 'm17-l04', title: 'Culture, trust, and advising in a relationship market', summary: 'How trust is earned and kept when everyone knows everyone.'}
     ]},

    /* ---------------- PHASE 4 ---------------- */
    {id: 'm18', phase: 'p4', num: 18, title: 'Capstone Cases',
     summary: 'Full cases from first meeting through roadmap, each testing a different combination of skills.',
     lessons: [
       {id: 'm18-l01', title: 'Case: the second-generation HVAC company', summary: 'Owner dependence, a private equity approach, and a son who wants in.'},
       {id: 'm18-l02', title: 'Case: the family restaurant group', summary: 'Three siblings, one operator, and real estate held separately.'},
       {id: 'm18-l03', title: 'Case: the three-partner professional firm', summary: 'Partners on different timelines and an outdated buy-sell agreement.'},
       {id: 'm18-l04', title: 'Case: the landholding family', summary: 'Active and inactive heirs, land that cannot be sold easily, and estate tax exposure.'},
       {id: 'm18-l05', title: 'Case: the unplanned exit', summary: 'An owner\'s sudden disability and the family left to decide.'}
     ]},
    {id: 'm19', phase: 'p4', num: 19, title: 'CEPA Preparation',
     summary: 'How the CEPA program works, the concepts it emphasizes, and practice exams.',
     lessons: [
       {id: 'm19-l01', title: 'The CEPA program and exam', summary: 'Eligibility, format, and how to prepare.'},
       {id: 'm19-l02', title: 'Concept review: EPI frameworks', summary: 'A structured review of the methodology and terms the program stresses.'},
       {id: 'm19-l03', title: 'Practice exam 1', summary: 'A full-length practice set with explanations.'},
       {id: 'm19-l04', title: 'Practice exam 2', summary: 'A second practice set aimed at your weak areas.'}
     ]}
  ],

  diagnostic: {
    intro: 'This measures where you are starting from across seven pillars. You are expected to miss a lot of these the first time. Retake it at the end of each phase to see your progress.',
    after: 'Low scores are what we expect before Phase 1 and point to where the early modules will matter most. Save your first result and compare after each phase.',
    pillars: [
      {id: 'fin', short: 'Fin', name: 'Financials and valuation'},
      {id: 'tax', short: 'Tax', name: 'Tax and entity structure'},
      {id: 'est', short: 'Estate', name: 'Estate and wealth transfer'},
      {id: 'exit', short: 'Exit', name: 'Exit options and deals'},
      {id: 'epi', short: 'EPI', name: 'Value acceleration and readiness'},
      {id: 'fam', short: 'Family', name: 'Family business dynamics'},
      {id: 'adv', short: 'Advisory', name: 'Advisory craft and compliance'}
    ],
    questions: [
      {p: 'fin', q: 'An owner pays himself $450,000 a year. A hired general manager would cost $180,000 including benefits. How should a buyer\'s analyst adjust EBITDA?',
       options: ['Add back $270,000', 'Add back $450,000', 'Subtract $180,000', 'No adjustment; owner pay is a real expense'], a: 0,
       why: 'The buyer will still need someone to run the business, so only the excess over market pay ($450k minus $180k) is added back.'},
      {p: 'fin', q: 'Seller\'s discretionary earnings (SDE) differs from EBITDA mainly because SDE:',
       options: ['Adds back all of one owner\'s compensation', 'Excludes depreciation', 'Is calculated after taxes', 'Is only used for public companies'], a: 0,
       why: 'SDE adds back one owner\'s full compensation and benefits. It is used for small, owner-operated businesses where the buyer will likely run the business themselves.'},
      {p: 'fin', q: 'A business sells for an enterprise value of $10 million on a cash-free, debt-free basis. It has $2 million of bank debt and $500,000 of cash. Before fees and taxes, the owner receives about:',
       options: ['$8.5 million', '$10 million', '$12.5 million', '$7.5 million'], a: 0,
       why: 'Equity value equals enterprise value minus debt plus cash: $10M minus $2M plus $0.5M.'},
      {p: 'tax', q: 'Why is an asset sale of a C corporation often expensive for the owner?',
       options: ['The gain is taxed at the corporate level, then again when proceeds are distributed', 'Asset sales are not allowed for C corporations', 'C corporations pay no tax on sales', 'The buyer pays all the tax'], a: 0,
       why: 'This is the double-tax problem. The corporation pays tax on the gain, and the shareholder pays tax again when the money comes out.'},
      {p: 'tax', q: 'Buyers usually prefer to buy assets rather than stock because:',
       options: ['They get a stepped-up tax basis and leave most historical liabilities behind', 'Asset deals always close faster', 'Sellers always prefer it too', 'It avoids all state taxes'], a: 0,
       why: 'An asset purchase lets the buyer depreciate or amortize the purchase price and generally avoid inheriting unknown liabilities of the old entity.'},
      {p: 'tax', q: 'The top federal rate on long-term capital gains for a high-income individual, including the net investment income tax where it applies, is about:',
       options: ['23.8%', '37%', '15%', '40.8%'], a: 0,
       why: '20% top capital gains rate plus the 3.8% net investment income tax. Active owners of pass-through businesses may avoid the 3.8% on some sales.'},
      {p: 'est', q: 'When an owner dies holding stock with a $100,000 basis worth $5 million, the heirs\' basis generally becomes:',
       options: ['$5 million', '$100,000', '$2.55 million', 'Zero'], a: 0,
       why: 'Assets included in the estate generally get a basis step-up to fair market value at death, erasing the built-in capital gain.'},
      {p: 'est', q: 'The main purpose of a revocable living trust is to:',
       options: ['Avoid probate and provide for management if the owner becomes incapacitated', 'Eliminate federal estate tax', 'Protect assets from the owner\'s own creditors', 'Reduce income tax'], a: 0,
       why: 'A revocable trust is ignored for tax and creditor purposes while the owner is alive. Its value is privacy, probate avoidance, and continuity.'},
      {p: 'est', q: 'The annual gift tax exclusion in 2026 allows a person to give each recipient up to about ___ per year without using any lifetime exemption.',
       options: ['$19,000', '$5,000', '$100,000', '$1 million'], a: 0,
       why: 'The annual exclusion is $19,000 per recipient for 2026. A married couple can give $38,000 per recipient.'},
      {p: 'est', q: 'A buy-sell agreement is primarily designed to:',
       options: ['Set who can buy an owner\'s interest, at what price, and how it will be paid when certain events occur', 'Sell the business to an outside buyer', 'Set employee salaries', 'Replace a will'], a: 0,
       why: 'It governs transfers of ownership on triggering events such as death, disability, divorce, departure, or disagreement.'},
      {p: 'exit', q: 'An ESOP is:',
       options: ['A qualified retirement plan that buys and holds company stock for employees', 'A stock option plan for executives', 'A type of bank loan', 'A family limited partnership'], a: 0,
       why: 'An employee stock ownership plan is an ERISA retirement plan. It lets an owner sell to employees, often with meaningful tax advantages.'},
      {p: 'exit', q: 'An earnout is:',
       options: ['Part of the price paid later only if the business hits agreed targets', 'The owner\'s salary after closing', 'A loan from the seller to the buyer', 'A fee paid to the investment banker'], a: 0,
       why: 'Earnouts bridge valuation gaps by making part of the price contingent on future performance. Owners often collect less than the headline number.'},
      {p: 'exit', q: 'A strategic buyer can often pay more than a financial buyer because:',
       options: ['It can capture synergies such as cost savings or cross-selling', 'It always uses more debt', 'It is required to by law', 'It does no due diligence'], a: 0,
       why: 'Synergies create value only that buyer can capture, which can justify a higher price.'},
      {p: 'epi', q: 'In the Exit Planning Institute\'s framework, the Four Cs of intangible capital are:',
       options: ['Human, customer, structural, and social', 'Cash, credit, collateral, and capacity', 'Culture, control, compliance, and cost', 'Customers, competitors, channels, and costs'], a: 0,
       why: 'EPI teaches that most private company value sits in intangible capital: people, customer relationships, systems and processes, and culture and reputation.'},
      {p: 'epi', q: 'The "wealth gap" refers to:',
       options: ['The difference between the owner\'s current net worth and what they need for their post-exit goals', 'The difference between two siblings\' inheritances', 'The gap between revenue and profit', 'The difference between book value and market value'], a: 0,
       why: 'It tells the owner how much value the business must deliver, which shapes timing and exit choice.'},
      {p: 'epi', q: 'Owner readiness is usually assessed along which three dimensions?',
       options: ['Business, personal, and financial', 'Legal, tax, and accounting', 'Sales, marketing, and operations', 'Family, church, and community'], a: 0,
       why: 'An owner can have a sellable business and enough money but nothing to go to, or a clear plan but a business no one will buy. All three matter.'},
      {p: 'fam', q: 'The three-circle model of family business describes the overlap of:',
       options: ['Family, ownership, and business', 'Founder, successor, and board', 'Revenue, profit, and cash', 'Past, present, and future'], a: 0,
       why: 'Developed by Tagiuri and Davis, it explains why people in different positions see the same decision differently.'},
      {p: 'fam', q: 'A founder has one child running the company and two who work elsewhere. Which approach reflects the idea of "fair, not necessarily equal"?',
       options: ['Voting control to the active child, with other assets or non-voting shares balancing the estate for the others', 'Equal voting shares to all three', 'Everything to the active child', 'Sell the business so everyone gets cash'], a: 0,
       why: 'Control goes to the person running the business while economic value is balanced in other ways. The right answer depends on the family, but this is the classic structure.'},
      {p: 'adv', q: 'In a first meeting with a business owner, the most effective opening is usually to:',
       options: ['Ask open questions about their goals, timeline, and what prompted the conversation', 'Present the bank\'s services', 'Give them an estimate of what the business is worth', 'Recommend an exit option'], a: 0,
       why: 'Discovery comes first. The owner\'s goals determine which numbers matter and which options are even relevant.'},
      {p: 'adv', q: 'An owner asks whether she should set up a GRAT. As a bank Family Business advisor, you should:',
       options: ['Explain the concept in general terms, note the questions it raises, and coordinate with trust and estate specialists and her attorney', 'Tell her yes if her estate is large', 'Draft the trust document', 'Decline to discuss it'], a: 0,
       why: 'You can educate and coordinate. Legal and tax advice comes from licensed professionals, and you make sure the right people are involved.'},
      {p: 'adv', q: 'A business client begins making repeated cash deposits of $9,500. What is the right response?',
       options: ['Follow the bank\'s BSA/AML escalation process, because the pattern may indicate structuring', 'Ignore it because each deposit is under $10,000', 'Tell the client to deposit less', 'Ask the client to explain before reporting anything'], a: 0,
       why: 'Deposits kept just under the $10,000 reporting threshold can indicate structuring. Escalate internally and never tip off the client about a possible report.'}
    ]
  },

  library: {
    intro: 'A curated list, ordered by when each item is most useful. You do not need to read all of it. Lessons point to specific items when they matter most. Check items off as you finish them.',
    groups: [
      {title: 'Start here', items: [
        {title: 'Walking to Destiny', by: 'Christopher M. Snider', when: 'Phase 1', note: 'The Exit Planning Institute\'s own book on the Value Acceleration Methodology. The closest thing to the CEPA program in book form. Read it early and again before the CEPA.'},
        {title: 'Finish Big', by: 'Bo Burlingham', when: 'Phase 1', note: 'Interviews with owners about how their exits went, including the ones that went badly. The best introduction to the human side of exits.'},
        {title: 'Built to Sell', by: 'John Warrillow', when: 'Phase 1', note: 'A short business fable about making a company less dependent on its owner. Easy to read and useful for explaining owner dependence to clients.'}
      ]},
      {title: 'Exit planning and transactions', items: [
        {title: 'The $10 Trillion Opportunity', by: 'Richard Jackim and Peter Christman', when: 'Phase 2', note: 'Written by the Exit Planning Institute\'s founders. A structured walk through exit options and planning for middle-market owners.'},
        {title: 'The Art of Selling Your Business', by: 'John Warrillow', when: 'Phase 2', note: 'Deal structures, buyer types, and negotiation from the seller\'s side, built from interviews with owners who sold.'},
        {title: 'Private Capital Markets', by: 'Robert T. Slee', when: 'Phase 2', note: 'A reference text on how private companies are valued and financed, including the idea that value depends on the purpose and the buyer. Dense; use it as a reference.'}
      ]},
      {title: 'Valuation', items: [
        {title: 'The Little Book of Valuation', by: 'Aswath Damodaran', when: 'Phase 2', note: 'Short and clear on the logic behind valuation approaches. Written for public companies, but the reasoning carries over.'},
        {title: 'Valuing a Business', by: 'Shannon Pratt and co-authors', when: 'Reference', note: 'The standard professional reference for private company valuation. Use it to look up topics, especially discounts and standards of value.'}
      ]},
      {title: 'Family business', items: [
        {title: 'Generation to Generation', by: 'Kelin Gersick, John Davis, Marion McCollom Hampton, Ivan Lansberg', when: 'Phase 2', note: 'The foundational book on family business systems and how they change across generations. The three-circle and developmental models come from this line of work.'},
        {title: 'Bivalent Attributes of the Family Firm', by: 'Renato Tagiuri and John Davis', when: 'Phase 2', note: 'The short academic paper (Family Business Review, 1996, originally a 1982 working paper) behind the three-circle model. Worth reading for the original framing.'},
        {title: 'Family Wealth: Keeping It in the Family', by: 'James E. Hughes Jr.', when: 'Phase 2', note: 'Treats family wealth as human, intellectual, and financial capital. Useful for multigenerational families and governance conversations.'},
        {title: 'Preparing Heirs', by: 'Roy Williams and Vic Preisser', when: 'Phase 2', note: 'Based on a study of families after wealth transfers. Argues that most failures come from trust and communication breakdowns, not technical planning.'},
        {title: 'Borrowed from Your Grandchildren', by: 'Dennis T. Jaffe', when: 'Phase 3', note: 'A study of long-lived family enterprises and how they stay together.'}
      ]},
      {title: 'Estate and wealth planning', items: [
        {title: 'Plan Your Estate', by: 'Denis Clifford (Nolo)', when: 'Phase 1', note: 'A plain-language guide to wills, trusts, and estate tax. Written for consumers, which makes it a fast way to learn the vocabulary.'},
        {title: 'Hawaii Department of Taxation: estate tax', by: 'tax.hawaii.gov', when: 'Phase 1', url: 'https://tax.hawaii.gov/', note: 'Primary source for the current Hawaii estate tax exemption, rates, and forms.'}
      ]},
      {title: 'The advisory craft', items: [
        {title: 'The Trusted Advisor', by: 'David Maister, Charles Green, Robert Galford', when: 'Phase 3', note: 'The standard book on how professional advisors earn trust. Its trust equation is a useful self-check.'},
        {title: 'Humble Inquiry', by: 'Edgar Schein', when: 'Phase 3', note: 'A short book on asking instead of telling. Directly useful for discovery meetings.'},
        {title: 'Crucial Conversations', by: 'Kerry Patterson and co-authors', when: 'Phase 3', note: 'Tools for high-stakes conversations where emotions run high, which describes most family succession meetings.'},
        {title: 'The Coaching Habit', by: 'Michael Bungay Stanier', when: 'Phase 3', note: 'Seven questions that keep you curious and stop you from giving advice too early.'}
      ]},
      {title: 'Organizations, podcasts, and ongoing learning', items: [
        {title: 'Exit Planning Institute', by: 'exit-planning-institute.org', when: 'Ongoing', url: 'https://exit-planning-institute.org/', note: 'The CEPA credentialing body. Its State of Owner Readiness research reports are useful for client conversations and for understanding what the CEPA emphasizes.'},
        {title: 'Family Firm Institute', by: 'ffi.org', when: 'Phase 2', url: 'https://www.ffi.org/', note: 'Professional association for family enterprise advisors across law, finance, psychology, and management.'},
        {title: 'The Family Business Consulting Group', by: 'thefbcg.com', when: 'Phase 2', url: 'https://www.thefbcg.com/', note: 'Publishes practical articles on succession, governance, and family dynamics.'},
        {title: 'Built to Sell Radio', by: 'John Warrillow', when: 'Ongoing', note: 'Interviews with owners who sold their businesses. Good for building a library of real stories to draw on in client conversations.'}
      ]}
    ]
  },

  role: [
    '<p class="eyebrow">The role</p>',
    '<h1 class="big">Advisor, Family Business &amp; Entrepreneurs.</h1>',
    '<p class="lede">The job description, decoded, and how every module in this program connects to it.</p>',

    '<h2>What the role actually is</h2>',
    '<p>Read closely, the job is a coordinator and analyst who sits between business-owner clients and the bank\'s specialists. The Advisor does intake, contributes to exit readiness assessments, prepares client materials, and keeps work moving across commercial banking, wealth planning, trust and estate, and valuation. The Senior Advisor leads those same activities and owns the client relationship and the recommendations.</p>',
    '<p>The posting says "Individual Contributor" and "part of a broader wealth team." That means you will not manage people, and you will not deliver most of the technical work yourself. Valuations come from valuation specialists, legal documents from attorneys, investment management from wealth advisors. Your value is in understanding enough of each discipline to spot issues, ask the right questions, organize the work, and explain it clearly to the owner.</p>',

    '<h2>Which level fits you today</h2>',
    '<p>The Advisor level asks for three years in wealth management, financial planning support, commercial banking, business advisory, consulting, "or a related client-facing environment." Your FP&amp;A work for the Wealth segment is related and has real substance: you know the economics of the business this team belongs to, you build the kind of analysis they need, and you already work across bank functions. The gap is the client-facing part. Senior Advisor asks for five years advising or supporting entrepreneurs, family businesses, or high-net-worth clients directly, so Advisor is the realistic target.</p>',
    '<div class="call hawaii"><span class="tag">Closing the client-facing gap</span><ul><li>Ask to shadow a Family Business &amp; Entrepreneurs advisor, a commercial banker, or a wealth planner in client meetings while you are still in FP&amp;A.</li><li>Offer to build analysis for the team: a readiness scoring tool, a proceeds waterfall model, a pipeline report. This shows the "practice and program support" line in the posting in action.</li><li>Volunteer at client events. The posting lists event support as a responsibility, and events are a low-risk way to spend time with owners.</li><li>Build relationships now with the internal partners named in the posting. You will coordinate with these people daily in the role.</li></ul></div>',

    '<h2>Responsibilities mapped to the program</h2>',
    '<div class="tablewrap"><table class="map">',
    '<tr><th>Responsibility</th><th>What it really means</th><th>Modules</th></tr>',
    '<tr><td><b>Client engagement</b><br><span class="faint small">Consultative discussions; guide toward planning pathways and roadmaps</span></td><td>Running discovery conversations with owners, understanding their goals, and steering toward a defined next step instead of an open-ended chat.</td><td>1, 9, 12, 13</td></tr>',
    '<tr><td><b>Exit readiness analysis</b><br><span class="faint small">Gather, organize, analyze inputs; identify themes, action items, decisions</span></td><td>Collecting financials and owner information, normalizing them, scoring readiness, and synthesizing it into a clear set of findings. The closest match to your FP&amp;A skills.</td><td>2, 5, 8, 9, 14</td></tr>',
    '<tr><td><b>Cross-functional coordination</b><br><span class="faint small">Commercial banking, wealth planning, trust/estate, valuation</span></td><td>Knowing what each partner does, when to bring them in, and how to keep timelines and deliverables aligned.</td><td>1, 3, 4, 7, 11, 15</td></tr>',
    '<tr><td><b>Client materials and communication</b><br><span class="faint small">Client-ready summaries, recommendations, meeting follow-through</span></td><td>Writing summaries and roadmaps an owner will read and act on, and documenting meetings so nothing is lost.</td><td>14, 16</td></tr>',
    '<tr><td><b>Practice and program support</b><br><span class="faint small">Tools, processes, best practices; ongoing learning</span></td><td>Building the templates, trackers, and tools that make the team consistent. Also the CEPA commitment.</td><td>14, 16, 19</td></tr>',
    '<tr><td><b>Event planning and activation</b><br><span class="faint small">Logistics, invitations, materials, with Marketing</span></td><td>Client seminars and roundtables that generate planning conversations.</td><td>16</td></tr>',
    '<tr><td><b>Compliance</b><br><span class="faint small">Fair Banking, AML, BSA, USA PATRIOT Act</span></td><td>Treating clients consistently, recognizing unusual activity around large liquidity events, and staying within what a bank advisor may say about legal and tax matters.</td><td>1</td></tr>',
    '</table></div>',

    '<h2>The qualifications list, translated</h2>',
    '<ul>',
    '<li><b>Business analysis (intermediate):</b> your strongest area. Module 2 shows how it applies to private companies.</li>',
    '<li><b>Communication and consultation (intermediate):</b> the biggest shift from FP&amp;A. Internal executives want answers; owners need to be heard before they will accept answers. Modules 12 and 13.</li>',
    '<li><b>Laws and regulations (intermediate):</b> tax, estate, and banking compliance at a working level. Modules 1, 3, and 4.</li>',
    '<li><b>Stakeholder management and cross-functional collaboration (intermediate):</b> something you already do in FP&amp;A with different stakeholders. Module 15.</li>',
    '<li><b>Business acumen (basic):</b> understanding how small and mid-sized businesses actually operate and make money. Built across Phases 1 and 2.</li>',
    '<li><b>CEPA commitment:</b> expected but not required at hire. Saying you have already started a structured program toward it is a credible signal. Module 19.</li>',
    '</ul>',

    '<h2>How to describe your background for this role</h2>',
    '<div class="call say"><span class="tag">A way to say it</span><p>"I have spent my career understanding how businesses make money and where the numbers come from, most recently for our Wealth segment. That is the analytical half of exit readiness work. I have been deliberately building the other half: exit planning, valuation, estate and succession concepts, and the conversation skills to work with owners. I know the internal partners this team relies on, because I already work with their numbers."</p></div>'
  ].join('\n')
};
