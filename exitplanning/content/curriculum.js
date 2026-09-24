/* Program structure. Lesson bodies live in content/mNN.js and register with FBE.add(). */
window.FBE = {
  lessons: {},
  add: function(list){ list.forEach(function(l){ window.FBE.lessons[l.id] = l; }); },

  phases: [
    {id: 'p1', label: 'Phase 1', title: 'Foundations',
     summary: 'The purpose of exit planning, private company financial analysis, entity and transaction tax, and estate planning basics.'},
    {id: 'p2', label: 'Phase 2', title: 'Core Disciplines',
     summary: 'Valuation, exit options, deal structure, the Exit Planning Institute\'s Value Acceleration Methodology, owner readiness, family business systems, and wealth planning around a sale.'},
    {id: 'p3', label: 'Phase 3', title: 'Advisory Practice',
     summary: 'Owner psychology, client meetings, the exit readiness assessment, coordinating internal and outside partners, client materials and events, and family business in Hawaii.'},
    {id: 'p4', label: 'Phase 4', title: 'Case Studies and CEPA Preparation',
     summary: 'Five case studies that combine topics from earlier modules, followed by CEPA program information, a concept review, and two practice exams.'}
  ],

  modules: [
    /* ---------------- PHASE 1 ---------------- */
    {id: 'm01', phase: 'p1', num: 1, title: 'Introduction to Exit Planning and the Advisory Role',
     summary: 'Why exit planning exists, how every owner eventually exits, how a bank\'s Family Business & Entrepreneurs practice works, and where your boundaries are.',
     why: 'An owner\'s wealth, income, and often family are tied to one illiquid asset that is usually sold or transferred only once. This module defines exit planning and describes how a bank practice delivers it.',
     job: 'Covers the context for the responsibilities in the job description: intake, readiness assessments, coordination with internal partners, and compliance.',
     lessons: [
       {id: 'm01-l01', title: 'The purpose of exit planning', summary: 'The owner\'s balance sheet, characteristics of a private business as an asset, the definition of exit planning, and common causes of failed transitions.'},
       {id: 'm01-l02', title: 'Planned and unplanned exits', summary: 'Voluntary and involuntary exits, the five Ds, contingency planning, and factors that affect exit timing.'},
       {id: 'm01-l03', title: 'How a bank family business advisory practice operates', summary: 'The client journey, the internal partners, the planning pathways, and why a bank invests in this work.'},
       {id: 'm01-l04', title: 'Professional boundaries, referrals, and compliance', summary: 'The scope of the advisor role, referrals to licensed professionals, conflicts of interest, BSA/AML, fair banking, and documentation.'}
     ]},
    {id: 'm02', phase: 'p1', num: 2, title: 'Private Company Financial Analysis',
     summary: 'How private company financials differ from what you see in a bank, how to normalize earnings, and how a headline price becomes cash in the owner\'s pocket.',
     why: 'Valuation, the wealth gap, and financing capacity all start from normalized earnings. Private company statements usually need adjustment before they can be used for these purposes.',
     job: 'The quantitative inputs in an exit readiness assessment: normalized earnings, working capital, debt, and quality of earnings.',
     lessons: [
       {id: 'm02-l01', title: 'Why private company financials are different', summary: 'Tax-driven books, the owner\'s discretion, and the three kinds of financial statements you will see.'},
       {id: 'm02-l02', title: 'Normalizing earnings: add-backs, EBITDA and SDE', summary: 'Calculating EBITDA, normalizing adjustments, and seller\'s discretionary earnings.'},
       {id: 'm02-l03', title: 'Enterprise value, equity value, and net proceeds', summary: 'Enterprise and equity value, cash-free debt-free pricing, the working capital peg, transaction costs, and taxes.'},
       {id: 'm02-l04', title: 'Quality of earnings and buyer risk factors', summary: 'Customer concentration, owner dependence, revenue quality, and quality of earnings reports.'}
     ]},
    {id: 'm03', phase: 'p1', num: 3, title: 'Entity Structure and Transaction Tax',
     summary: 'Entity types, basis and gain, asset versus stock sales, and the main tools that shape the tax on an exit.',
     why: 'After-tax proceeds depend on entity type and deal structure. Advisors do not give tax advice but need to recognize these issues early enough to involve the CPA.',
     job: 'Tax considerations underlie many of the decision points the job description asks you to identify.',
     lessons: [
       {id: 'm03-l01', title: 'Entity types and why they matter', summary: 'Sole proprietorships, partnerships and LLCs, S corporations and C corporations, and how each is taxed.'},
       {id: 'm03-l02', title: 'Basis, gain, and the rates that apply', summary: 'What gets taxed on a sale, capital gain versus ordinary income, recapture, NIIT, and Hawaii.'},
       {id: 'm03-l03', title: 'Asset sale versus stock sale', summary: 'Buyer and seller tax consequences, purchase price allocation, and C corporation asset sales.'},
       {id: 'm03-l04', title: 'Installment sales, QSBS, ESOP rollovers, and pre-sale planning', summary: 'Installment sales, QSBS, the ESOP rollover, and planning that has to happen before a deal.'}
     ]},
    {id: 'm04', phase: 'p1', num: 4, title: 'Estate Planning and Wealth Transfer',
     summary: 'The basic estate plan, estate and gift tax, techniques for moving business value to the next generation, and buy-sell agreements.',
     why: 'In family businesses, exit planning and estate planning overlap. The business is often the largest asset in the estate.',
     job: 'Prepares you to work with the trust and estate resources named in the job description and to identify when a client needs them.',
     lessons: [
       {id: 'm04-l01', title: 'The basic estate plan', summary: 'Wills, revocable trusts, powers of attorney, beneficiary designations, and probate.'},
       {id: 'm04-l02', title: 'Estate and gift tax, federal and Hawaii', summary: 'The exemption, the annual exclusion, portability, the Hawaii estate tax, and step-up in basis.'},
       {id: 'm04-l03', title: 'Estate freeze techniques: gifts, GRATs, IDGTs, and SLATs', summary: 'Recapitalization, valuation discounts, gifts, GRATs, sales to grantor trusts, SLATs, and family LLCs.'},
       {id: 'm04-l04', title: 'Buy-sell agreements and life insurance', summary: 'Cross-purchase versus redemption, valuation clauses, funding, and the Connelly decision.'}
     ]},

    /* ---------------- PHASE 2 ---------------- */
    {id: 'm05', phase: 'p2', num: 5, title: 'Business Valuation',
     summary: 'Standards of value, the three approaches, multiples, discounts, and why one business legitimately has several values.',
     why: 'Planning decisions depend on value: the wealth gap, gifting, buy-sell prices, exit options, and financing. This module covers how value is determined and how to read a valuation report.',
     job: 'Valuation specialists are a named internal partner. This module covers the concepts needed to work with them and explain results to clients.',
     lessons: [
       {id: 'm05-l01', title: 'Standards, premises, and levels of value', summary: 'Fair market value, investment value, strategic value, premise and level of value, and valuation purpose.'},
       {id: 'm05-l02', title: 'The income approach', summary: 'Capitalization of earnings, discounted cash flow, and building a discount rate for a private company.'},
       {id: 'm05-l03', title: 'The market approach', summary: 'Guideline public company and transaction methods, data sources, and adjusting multiples.'},
       {id: 'm05-l04', title: 'The asset approach', summary: 'Adjusted net assets, holding companies, real estate heavy businesses, and liquidation value.'},
       {id: 'm05-l05', title: 'Discounts, premiums, and reading a valuation report', summary: 'Lack of control, lack of marketability, and how to review a report with a client.'}
     ]},
    {id: 'm06', phase: 'p2', num: 6, title: 'Exit Options',
     summary: 'Every realistic path out of a business, what each requires, and how to compare them against the owner\'s goals.',
     why: 'Covers the full set of exit options and a method for comparing them against the owner\'s goals.',
     job: 'Planning pathways start with identifying which exit options are realistic for a given owner.',
     lessons: [
       {id: 'm06-l01', title: 'Overview of exit options', summary: 'Internal and external transfers, recapitalizations, and wind-downs, with a comparison of each.'},
       {id: 'm06-l02', title: 'Family transfers', summary: 'Successor readiness, gift versus sale, parents\' income needs, and testing whether the business can support the transfer.'},
       {id: 'm06-l03', title: 'Management buyouts and ESOPs', summary: 'Selling to employees, how the financing works, and when an ESOP fits.'},
       {id: 'm06-l04', title: 'Strategic buyers, private equity, and recapitalizations', summary: 'Strategic and financial buyers, platform and add-on acquisitions, rollover equity, and recapitalizations.'},
       {id: 'm06-l05', title: 'Comparing options against the owner\'s goals', summary: 'A decision framework that weighs proceeds, legacy, timing, control, and risk.'}
     ]},
    {id: 'm07', phase: 'p2', num: 7, title: 'Deal Structure and the Sale Process',
     summary: 'How a sale actually runs, from preparation to closing, and the deal terms that move real dollars.',
     why: 'Deal terms and the sale process determine how much of the headline price the owner receives, and when.',
     job: 'Owners bring offers and letters of intent to their advisors, and commercial banking often finances the buyer.',
     lessons: [
       {id: 'm07-l01', title: 'The sale process from start to close', summary: 'Advisors, teasers, the confidential information memorandum, LOIs, diligence, and closing.'},
       {id: 'm07-l02', title: 'Deal terms: earnouts, seller notes, escrows, and rollover', summary: 'Cash at close, earnouts, seller notes, escrows, holdbacks, and rollover equity.'},
       {id: 'm07-l03', title: 'Due diligence, representations and warranties, and deal failure', summary: 'Quality of earnings reports, indemnification, R&W insurance, and common failure points.'},
       {id: 'm07-l04', title: 'Acquisition financing', summary: 'Senior debt, SBA 7(a), mezzanine, and the commercial banker\'s view of a deal.'}
     ]},
    {id: 'm08', phase: 'p2', num: 8, title: 'The Value Acceleration Methodology',
     summary: 'The Exit Planning Institute\'s core framework: Discover, Prepare, Decide, the Four Cs of intangible capital, and the three gaps.',
     why: 'The Exit Planning Institute\'s core framework and the basis of the CEPA curriculum.',
     job: 'The exit readiness assessment corresponds to the Discover stage of this methodology.',
     lessons: [
       {id: 'm08-l01', title: 'Business attractiveness versus business readiness', summary: 'EPI\'s distinction between attractiveness and readiness, intangible value, and the Five Stages of Value Maturity.'},
       {id: 'm08-l02', title: 'The Four Cs of intangible capital', summary: 'Human, customer, structural, and social capital, and how each shows up in value.'},
       {id: 'm08-l03', title: 'The value gap, profit gap, and wealth gap', summary: 'Definitions and calculation of the profit gap, value gap, and wealth gap.'},
       {id: 'm08-l04', title: 'Discover, Prepare, Decide', summary: 'The three gates, the 90-day sprint cycle, and how an engagement moves through them.'}
     ]},
    {id: 'm09', phase: 'p2', num: 9, title: 'Owner Readiness: Personal and Financial',
     summary: 'Whether the owner is ready to leave, can afford to leave, and has somewhere to go.',
     why: 'Transitions can fail on the personal or financial side even when the business is ready. This module covers owner readiness.',
     job: 'Covers the personal and financial half of the readiness assessment. The scorecard built here is used again in Module 14.',
     lessons: [
       {id: 'm09-l01', title: 'The three legs: business, personal, and financial', summary: 'Business, financial, and personal readiness, and the consequences of gaps in each.'},
       {id: 'm09-l02', title: 'Financial readiness and retirement funding needs', summary: 'Estimating post-exit spending, other income, and the portfolio required, and linking it to required business value.'},
       {id: 'm09-l03', title: 'Personal readiness', summary: 'Losses owners experience, signs of low personal readiness, and planning for life after the business.'},
       {id: 'm09-l04', title: 'Readiness assessment tools', summary: 'Common readiness scoring tools, designing a scorecard, and presenting scores.'}
     ]},
    {id: 'm10', phase: 'p2', num: 10, title: 'Family Business Systems and Governance',
     summary: 'How family, ownership and business interact, and the governance structures that keep them working.',
     why: 'Frameworks used by family business advisors: the three-circle model, the developmental model, succession, governance, and equalization among heirs.',
     job: 'Most clients of a Family Business &amp; Entrepreneurs practice are families who own businesses together.',
     lessons: [
       {id: 'm10-l01', title: 'The three-circle model', summary: 'The seven positions in the Tagiuri and Davis model and how each views common decisions.'},
       {id: 'm10-l02', title: 'How family businesses develop over generations', summary: 'Controlling owner, sibling partnership, cousin consortium, and what changes at each stage.'},
       {id: 'm10-l03', title: 'Leadership succession and ownership succession', summary: 'Two separate transitions that are often confused, and preparing the next generation.'},
       {id: 'm10-l04', title: 'Governance: boards, family councils, and constitutions', summary: 'Structures that separate family, ownership and business decisions.'},
       {id: 'm10-l05', title: 'Equalization among heirs and family conflict', summary: 'Active and inactive heirs, balancing tools, compensation, in-laws, and structuring family conversations.'}
     ]},
    {id: 'm11', phase: 'p2', num: 11, title: 'Wealth Planning Around a Liquidity Event',
     summary: 'Planning before, during, and after the sale so the proceeds support the owner\'s life and legacy.',
     why: 'Planning before, during, and after a sale: timing, charitable strategies, managing proceeds, and insurance.',
     job: 'This is where wealth strategy, trust, and investment teams take the lead, and where the handoff from the Family Business team occurs.',
     lessons: [
       {id: 'm11-l01', title: 'Pre-transaction planning timeline', summary: 'Planning actions by time before a transaction, and why the letter of intent limits later planning.'},
       {id: 'm11-l02', title: 'Charitable strategies', summary: 'Donor-advised funds, charitable remainder trusts, and gifting pre-sale interests.'},
       {id: 'm11-l03', title: 'Managing sale proceeds', summary: 'Tax reserves, time-segmented portfolios, contingent proceeds, and common post-sale mistakes.'},
       {id: 'm11-l04', title: 'Insurance and risk management for owners', summary: 'Key person, disability, buy-sell funding, and post-exit coverage.'}
     ]},

    /* ---------------- PHASE 3 ---------------- */
    {id: 'm12', phase: 'p3', num: 12, title: 'Business Owner Psychology',
     summary: 'Why owners delay, how identity and control shape decisions, and what seller\'s remorse teaches advisors.',
     why: 'Why owners delay planning, what they lose in a transition, who else influences decisions, and how people move toward change.',
     job: 'Supports the consultative engagement responsibility in the job description.',
     lessons: [
       {id: 'm12-l01', title: 'Why owners avoid exit planning', summary: 'Common reasons owners delay planning and approaches that reduce resistance.'},
       {id: 'm12-l02', title: 'Owner identity and seller\'s remorse', summary: 'Bridges\' transition model, sources of seller\'s remorse, and ways to reduce it.'},
       {id: 'm12-l03', title: 'Spouses, co-owners, and other stakeholders', summary: 'Involving spouses, co-owners, adult children, and key employees in planning.'},
       {id: 'm12-l04', title: 'Stages of change and motivational interviewing', summary: 'The stages of change model and motivational interviewing skills applied to owners.'}
     ]},
    {id: 'm13', phase: 'p3', num: 13, title: 'Client Discovery and Consultative Meetings',
     summary: 'The conversation skills behind "engages in consultative discussions" in the job description.',
     why: 'First meetings, questioning and listening, recommending a next step, and delivering difficult news.',
     job: 'Covers the consultative discussion and planning pathway responsibilities in the job description.',
     lessons: [
       {id: 'm13-l01', title: 'The first meeting', summary: 'Preparation, meeting structure, and intended outcomes of a first meeting.'},
       {id: 'm13-l02', title: 'Questioning and listening', summary: 'Question types, reflective listening, and the trust equation.'},
       {id: 'm13-l03', title: 'Recommending a planning pathway', summary: 'Connecting discovery findings to a planning pathway and handling common hesitations.'},
       {id: 'm13-l04', title: 'Difficult conversations', summary: 'Preparing for and delivering difficult news, and responding to reactions.'}
     ]},
    {id: 'm14', phase: 'p3', num: 14, title: 'The Exit Readiness Assessment',
     summary: 'Hands-on: gathering qualitative and quantitative inputs and turning them into themes, action items, and decision points.',
     why: 'The core work product of the role, from intake through synthesis, ending with a full case exercise.',
     job: 'Matches the exit readiness analysis responsibility in the job description: gathering and analyzing inputs and identifying themes, action items, and decision points.',
     lessons: [
       {id: 'm14-l01', title: 'Intake and data gathering', summary: 'What to request, in what order, and how to make it easy for the owner.'},
       {id: 'm14-l02', title: 'Assessing business readiness', summary: 'Financial, operational, and intangible capital review.'},
       {id: 'm14-l03', title: 'Assessing personal and financial readiness', summary: 'Goals, the wealth gap, and personal readiness signals.'},
       {id: 'm14-l04', title: 'Synthesizing findings: themes, action items, and decision points', summary: 'Grouping findings into themes, prioritizing actions, framing decision points, and structuring the deliverable.'},
       {id: 'm14-l05', title: 'Case exercise: Kamakani Electric', summary: 'A complete assessment case with financial, family, and estate data, and a model answer.'}
     ]},
    {id: 'm15', phase: 'p3', num: 15, title: 'Coordinating the Advisory Team',
     summary: 'Working with commercial banking, wealth planning, trust and estate, valuation, and outside CPAs and attorneys.',
     why: 'Working with internal and outside partners who do not report to you: roles, trackers, dependencies, and influence.',
     job: 'Covers cross-functional coordination (Advisor) and influence without authority (Senior Advisor).',
     lessons: [
       {id: 'm15-l01', title: 'Roles of internal and outside partners', summary: 'Roles and incentives of internal and outside partners, and RACI charts.'},
       {id: 'm15-l02', title: 'Managing workstreams and dependencies', summary: 'Engagement trackers, dependencies between workstreams, and status meetings.'},
       {id: 'm15-l03', title: 'Working with outside advisors', summary: 'CPAs, attorneys, and investment bankers the client already trusts.'},
       {id: 'm15-l04', title: 'Influence without authority', summary: 'The currencies framework, making requests, and escalation.'}
     ]},
    {id: 'm16', phase: 'p3', num: 16, title: 'Client Materials, Meetings, and Events',
     summary: 'Client-ready summaries, roadmaps, meeting facilitation, documentation, and client events.',
     why: 'Client summaries, the roadmap document, meeting facilitation and documentation, and client events.',
     job: 'Covers the client materials, follow-through, documentation, and event responsibilities.',
     lessons: [
       {id: 'm16-l01', title: 'Writing for business owners', summary: 'Plain-language summaries, presenting numbers, and compliance review of client materials.'},
       {id: 'm16-l02', title: 'The client roadmap document', summary: 'Sections, visuals, and presentation of the client roadmap.'},
       {id: 'm16-l03', title: 'Facilitating meetings and documenting follow-through', summary: 'Agendas, decisions, action items, and notes that hold up.'},
       {id: 'm16-l04', title: 'Client events', summary: 'Event formats, planning timeline, follow-up, measurement, and compliance.'}
     ]},
    {id: 'm17', phase: 'p3', num: 17, title: 'Family Business in Hawaii',
     summary: 'Family enterprise in Hawaii: land, relationships, a limited buyer pool, and multigenerational expectations.',
     why: 'Hawaii-specific factors in succession planning: land and ground leases, a small buyer pool, successors living on the mainland, and a relationship-based market.',
     job: 'The role serves Hawaii business owners.',
     lessons: [
       {id: 'm17-l01', title: 'Industries and ownership patterns in Hawaii', summary: 'Industry mix, ownership patterns, and factors that affect succession in Hawaii.'},
       {id: 'm17-l02', title: 'Real estate, ground leases, and operating companies', summary: 'Separating property from operations, and why it matters for value and estate planning.'},
       {id: 'm17-l03', title: 'Buyer types for Hawaii businesses', summary: 'Local, mainland, and private equity buyers, and what each looks for.'},
       {id: 'm17-l04', title: 'Relationships, culture, and confidentiality in Hawaii', summary: 'Building trust, cultural differences among families, and confidentiality in a small community.'}
     ]},

    /* ---------------- PHASE 4 ---------------- */
    {id: 'm18', phase: 'p4', num: 18, title: 'Case Studies',
     summary: 'Full cases from first meeting through roadmap, each testing a different combination of skills.',
     why: 'Five cases that combine valuation, tax, estate, family, deal, and advisory topics.',
     job: 'Each case follows the role\'s process: identify the issues and decision points, then recommend next steps and the partners to involve.',
     lessons: [
       {id: 'm18-l01', title: 'Case: HVAC company with a private equity offer', summary: 'C corporation asset sale, rollover and earnout terms, and successor readiness.'},
       {id: 'm18-l02', title: 'Case: sibling buyout of a restaurant group', summary: 'Normalizing earnings, financing a sibling buyout, shared real estate, and governance.'},
       {id: 'm18-l03', title: 'Case: retiring partner in an engineering firm', summary: 'Updating a buy-sell agreement and funding a retiring partner\'s buyout.'},
       {id: 'm18-l04', title: 'Case: estate planning for a land-rich family', summary: 'Portability, estate tax exposure, liquidity, conservation easements, and governance for four heirs.'},
       {id: 'm18-l05', title: 'Case: sudden owner incapacity', summary: 'Authority gaps, the first 30 days, the bank\'s response, and the decision at 90 days.'}
     ]},
    {id: 'm19', phase: 'p4', num: 19, title: 'CEPA Preparation',
     summary: 'How the CEPA program works, the concepts it emphasizes, and practice exams.',
     why: 'CEPA program information, a review of EPI frameworks, and two practice exams.',
     job: 'The job description expects a commitment to pursue the CEPA.',
     lessons: [
       {id: 'm19-l01', title: 'The CEPA program and exam', summary: 'Eligibility, format, and how to prepare.'},
       {id: 'm19-l02', title: 'Concept review: EPI frameworks', summary: 'A structured review of the methodology and terms the program stresses.'},
       {id: 'm19-l03', title: 'Practice exam 1', summary: 'A full-length practice set with explanations.'},
       {id: 'm19-l04', title: 'Practice exam 2', summary: 'A second practice set aimed at your weak areas.'}
     ]}
  ],

  diagnostic: {
    intro: '21 questions across seven subject areas. Take it before starting and again after each phase to measure progress.',
    after: 'Low scores before Phase 1 are expected. Results are saved so later attempts can be compared.',
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
    intro: 'Books, papers, and organizations referenced in the lessons, grouped by subject, with the phase where each is most relevant. Check items off as you finish them.',
    groups: [
      {title: 'Core reading', items: [
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
      {title: 'Advisory skills', items: [
        {title: 'The Trusted Advisor', by: 'David Maister, Charles Green, Robert Galford', when: 'Phase 3', note: 'The standard book on how professional advisors earn trust. Its trust equation is a useful self-check.'},
        {title: 'Humble Inquiry', by: 'Edgar Schein', when: 'Phase 3', note: 'A short book on asking instead of telling. Directly useful for discovery meetings.'},
        {title: 'Crucial Conversations', by: 'Kerry Patterson and co-authors', when: 'Phase 3', note: 'Tools for high-stakes conversations where emotions run high, which describes most family succession meetings.'},
        {title: 'The Coaching Habit', by: 'Michael Bungay Stanier', when: 'Phase 3', note: 'Seven questions that keep you curious and stop you from giving advice too early.'},
        {title: 'Managing Transitions', by: 'William Bridges', when: 'Phase 3', note: 'Endings, the neutral zone, and new beginnings. The best framework for what owners go through emotionally after a sale.'},
        {title: 'Motivational Interviewing', by: 'William R. Miller and Stephen Rollnick', when: 'Phase 3', note: 'How to help people find their own reasons to change. Written for helping professions; the core skills transfer directly.'},
        {title: 'Difficult Conversations', by: 'Douglas Stone, Bruce Patton, Sheila Heen', when: 'Phase 3', note: 'From the Harvard Negotiation Project. Useful for delivering hard news about value, readiness, and successors.'},
        {title: 'Influence Without Authority', by: 'Allan R. Cohen and David L. Bradford', when: 'Phase 3', note: 'The currencies framework for getting results through partners who do not report to you.'},
        {title: 'The Pyramid Principle', by: 'Barbara Minto', when: 'Phase 3', note: 'Structuring findings and client materials around the conclusion.'}
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
    '<h1 class="big">Advisor, Family Business &amp; Entrepreneurs</h1>',
    '<p class="lede">A summary of the job description and the modules that cover each responsibility.</p>',

    '<h2>Role summary</h2>',
    '<p>The role is a coordinator and analyst position who sits between business-owner clients and the bank\'s specialists. The Advisor does intake, contributes to exit readiness assessments, prepares client materials, and keeps work moving across commercial banking, wealth planning, trust and estate, and valuation. The Senior Advisor leads those same activities and owns the client relationship and the recommendations.</p>',
    '<p>The posting says "Individual Contributor" and "part of a broader wealth team." That means you will not manage people, and you will not deliver most of the technical work yourself. Valuations come from valuation specialists, legal documents from attorneys, investment management from wealth advisors. Your value is in understanding enough of each discipline to spot issues, ask the right questions, organize the work, and explain it clearly to the owner.</p>',

    '<h2>Advisor and Senior Advisor levels</h2>',
    '<p>The Advisor level asks for three years in wealth management, financial planning support, commercial banking, business advisory, consulting, "or a related client-facing environment." Your FP&amp;A work for the Wealth segment is related and has real substance: you know the economics of the business this team belongs to, you build the kind of analysis they need, and you already work across bank functions. The gap is the client-facing part. Senior Advisor asks for five years advising or supporting entrepreneurs, family businesses, or high-net-worth clients directly, so Advisor is the realistic target.</p>',
    '<div class="call hawaii"><span class="tag">Building client-facing experience</span><ul><li>Ask to shadow a Family Business &amp; Entrepreneurs advisor, a commercial banker, or a wealth planner in client meetings while you are still in FP&amp;A.</li><li>Offer to build analysis for the team: a readiness scoring tool, a proceeds waterfall model, a pipeline report. This shows the "practice and program support" line in the posting in action.</li><li>Volunteer at client events. The posting lists event support as a responsibility, and events are a low-risk way to spend time with owners.</li><li>Build relationships now with the internal partners named in the posting. You will coordinate with these people daily in the role.</li></ul></div>',

    '<h2>Responsibilities and related modules</h2>',
    '<div class="tablewrap"><table class="map">',
    '<tr><th>Responsibility</th><th>Description</th><th>Modules</th></tr>',
    '<tr><td><b>Client engagement</b><br><span class="faint small">Consultative discussions; guide toward planning pathways and roadmaps</span></td><td>Running discovery conversations with owners, understanding their goals, and steering toward a defined next step instead of an open-ended chat.</td><td>1, 9, 12, 13</td></tr>',
    '<tr><td><b>Exit readiness analysis</b><br><span class="faint small">Gather, organize, analyze inputs; identify themes, action items, decisions</span></td><td>Collecting financials and owner information, normalizing them, scoring readiness, and synthesizing it into a clear set of findings. The closest match to your FP&amp;A skills.</td><td>2, 5, 8, 9, 14</td></tr>',
    '<tr><td><b>Cross-functional coordination</b><br><span class="faint small">Commercial banking, wealth planning, trust/estate, valuation</span></td><td>Knowing what each partner does, when to bring them in, and how to keep timelines and deliverables aligned.</td><td>1, 3, 4, 7, 11, 15</td></tr>',
    '<tr><td><b>Client materials and communication</b><br><span class="faint small">Client-ready summaries, recommendations, meeting follow-through</span></td><td>Writing summaries and roadmaps an owner will read and act on, and documenting meetings so nothing is lost.</td><td>14, 16</td></tr>',
    '<tr><td><b>Practice and program support</b><br><span class="faint small">Tools, processes, best practices; ongoing learning</span></td><td>Building the templates, trackers, and tools that make the team consistent. Also the CEPA commitment.</td><td>14, 16, 19</td></tr>',
    '<tr><td><b>Event planning and activation</b><br><span class="faint small">Logistics, invitations, materials, with Marketing</span></td><td>Client seminars and roundtables that generate planning conversations.</td><td>16</td></tr>',
    '<tr><td><b>Compliance</b><br><span class="faint small">Fair Banking, AML, BSA, USA PATRIOT Act</span></td><td>Treating clients consistently, recognizing unusual activity around large liquidity events, and staying within what a bank advisor may say about legal and tax matters.</td><td>1</td></tr>',
    '</table></div>',

    '<h2>Qualifications</h2>',
    '<ul>',
    '<li><b>Business analysis (intermediate):</b> your strongest area. Module 2 shows how it applies to private companies.</li>',
    '<li><b>Communication and consultation (intermediate):</b> the biggest shift from FP&amp;A. Internal executives want answers; owners need to be heard before they will accept answers. Modules 12 and 13.</li>',
    '<li><b>Laws and regulations (intermediate):</b> tax, estate, and banking compliance at a working level. Modules 1, 3, and 4.</li>',
    '<li><b>Stakeholder management and cross-functional collaboration (intermediate):</b> something you already do in FP&amp;A with different stakeholders. Module 15.</li>',
    '<li><b>Business acumen (basic):</b> understanding how small and mid-sized businesses actually operate and make money. Built across Phases 1 and 2.</li>',
    '<li><b>CEPA commitment:</b> expected but not required at hire. Saying you have already started a structured program toward it is a credible signal. Module 19.</li>',
    '</ul>',

    '<h2>Describing your background</h2>',
    '<div class="call say"><span class="tag">Example language</span><p>"I have spent my career understanding how businesses make money and where the numbers come from, most recently for our Wealth segment. That is the analytical half of exit readiness work. I have been deliberately building the other half: exit planning, valuation, estate and succession concepts, and the conversation skills to work with owners. I know the internal partners this team relies on, because I already work with their numbers."</p></div>'
  ].join('\n')
};
