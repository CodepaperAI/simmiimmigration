/**
 * Every service page lives here, keyed by its URL slug.
 * The dynamic route pages/services/[slug].js renders each one with
 * components/service/ServicePage.jsx.
 *
 * Shape:
 *  meta      { title, description, updated }
 *  hero      { eyebrow, title, titleAccent, intro, image, imageAlt }
 *  quickFacts[] { value, label, icon }
 *  prose[]   { heading, paragraphs[], items[] }   (optional, long-form blocks)
 *  cards[]   { title, icon, body, items[] }       (2-col card grid)
 *  process[] { title, description }
 *  why[]     { letter, title, body }              (optional)
 *  faqs[]    { question, answer }                 (optional)
 *  help      { heading, paragraphs[], disclaimer }
 *  related[] { label, href }                      (optional)
 */

const IMG = {
  work: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=75',
  business:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=75',
  family:
    'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=75',
  pr: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=75',
  study:
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=75',
  city: 'https://images.unsplash.com/photo-1519832979-6fa011b87667?auto=format&fit=crop&w=1200&q=75',
  team: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=75',
  insurance:
    'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1200&q=75',
};

const DISCLAIMER =
  'This page provides general information and is not legal advice. Program rules change and individual circumstances matter. Confirm current IRCC requirements before applying.';

const servicePages = {
  /* ------------------------------------------------------------------ WORK */
  pgwp: {
    category: 'Work Permits',
    meta: {
      title: 'Post-Graduation Work Permit (PGWP) Canada',
      description:
        'PGWP eligibility, deadlines, language and field-of-study requirements, permit length, and application support for international graduates.',
      updated: 'June 2026',
    },
    hero: {
      eyebrow: 'Post-Graduation Work Permit',
      title: 'Graduated in Canada?',
      titleAccent: 'Turn it into work experience.',
      intro:
        'The PGWP is an open work permit that lets eligible graduates work for most Canadian employers and build the experience that supports a future permanent residence pathway.',
      image: IMG.study,
      imageAlt: 'International graduate starting work in Canada',
    },
    quickFacts: [
      { value: 'Up to 3 yrs', label: 'Possible permit length', icon: 'clock' },
      { value: '180 days', label: 'Deadline to apply after completion', icon: 'bell' },
      { value: 'Open permit', label: 'Not tied to one employer', icon: 'bolt' },
      { value: 'CLB 5–7', label: 'Language requirement, by credential', icon: 'graduation' },
    ],
    prose: [
      {
        heading: 'Overview',
        paragraphs: [
          'Canada\u2019s Post-Graduation Work Permit Program gives eligible international graduates an opportunity to gain Canadian work experience after completing their studies. The permit may be valid for up to three years, depending on the type and length of the completed program and the expiry date of the passport.',
          'Because it is an open work permit, a PGWP is not normally tied to one employer or occupation. That flexibility helps graduates enter the labour market and build the skilled work history required by some economic immigration programs.',
          'Not every program offered by a designated learning institution qualifies. Before applying \u2014 ideally before enrolling \u2014 confirm that both the institution and the specific program are PGWP-eligible.',
        ],
      },
      {
        heading: 'Can I study overseas and still be eligible?',
        paragraphs: [
          'Distance-learning rules depend on when the program or study permit application began. The temporary COVID-19 policies that permitted extensive overseas online study have ended.',
          'For a program with a lock-in date on or after September 1, 2024, a student must generally complete at least 50% of the program in class in Canada. Time studied outside Canada is deducted when IRCC calculates the potential length of the permit, and online study from outside Canada after August 31, 2024 does not count toward it.',
          'Different transitional rules may apply to programs started between September 1, 2022 and August 31, 2024. A careful review matters when a program included online study, an overseas component, a transfer, or time spent outside Canada.',
        ],
      },
      {
        heading: 'How long is a PGWP valid?',
        paragraphs: [
          'The final validity period is decided by IRCC and cannot extend beyond passport validity. A PGWP is generally available only once, so check your passport and your complete study history before submitting.',
        ],
        items: [
          'Programs shorter than eight months: generally not eligible, subject to specific Quebec and special-case rules.',
          'Eight months to under two years: a permit may be issued for up to the same length as the program.',
          'Master\u2019s degrees: an eligible program of at least eight months may qualify for a three-year permit even if under two years.',
          'Two years or longer: a permit may be issued for up to three years.',
          'More than one program: lengths may sometimes be combined when each program meets the requirements.',
        ],
      },
    ],
    cards: [
      {
        title: 'Eligibility requirements',
        icon: 'check',
        items: [
          'Complete a PGWP-eligible program at an eligible designated learning institution.',
          'Program lasting at least eight months, or at least 900 hours for certain Quebec credentials.',
          'Full-time status during each academic semester; part-time generally permitted in the final semester.',
          'Written confirmation and a transcript showing program requirements were completed.',
          'Apply within 180 days after the school confirms completion.',
          'Held a valid study permit at some point during those 180 days, unless an exception applies.',
        ],
      },
      {
        title: 'Language and field of study',
        icon: 'graduation',
        items: [
          'Most applications on or after November 1, 2024 require approved English or French test results.',
          'University graduates (bachelor\u2019s, master\u2019s, doctoral): generally CLB 7 / NCLC 7 in each ability.',
          'College, polytechnic and other non-university graduates: generally CLB / NCLC 5 in each ability.',
          'Degree graduates are not subject to a field-of-study requirement.',
          'Other graduates may need an eligible field of study if the study permit application was submitted on or after November 1, 2024.',
        ],
      },
      {
        title: 'Deadline and status',
        icon: 'bell',
        body:
          'You generally have 180 days after the institution confirms completion. If your study permit expires before final marks are available, you may apply for a visitor record to stay, or apply from outside Canada. Staying past expiry may require restoration and additional fees. Some graduates may work full-time while the application is processed if they held a valid study permit when applying, completed their program, and were eligible to work off campus without exceeding permitted hours.',
      },
      {
        title: 'Who may not qualify',
        icon: 'eye',
        items: [
          'Already received a PGWP previously.',
          'Completed a non-eligible program, or only English/French as a second language.',
          'General-interest or most non-credit courses.',
          'Exceeded permitted distance learning.',
          'Failed to comply with study permit conditions, or took unauthorized leave.',
          'Public-private curriculum licensing programs are generally not eligible.',
        ],
      },
    ],
    documents: {
      heading: 'Supporting documents commonly required',
      items: [
        'Official letter confirming completion of the program.',
        'Official transcript, or an accepted transcript obtained through the institution.',
        'Valid passport and copies of relevant passport pages.',
        'Current and previous Canadian immigration documents.',
        'Approved language test results, where the requirement applies.',
        'Evidence that the program meets any applicable field-of-study requirement.',
        'Explanations and records for authorized leave, transfers, part-time semesters, distance learning or status issues.',
      ],
    },
    process: [
      { title: 'Confirm eligibility', description: 'Check the institution, the program and your study history.' },
      { title: 'Calculate the deadline', description: 'Work back from the completion confirmation date.' },
      { title: 'Language and field check', description: 'Confirm which requirements apply to your credential.' },
      { title: 'Gather documents', description: 'Completion letter, transcript, passport, status records.' },
      { title: 'Submit online', description: 'File before the 180-day deadline closes.' },
      { title: 'Work while waiting', description: 'Confirm every condition before starting or continuing work.' },
    ],
    faqs: [
      {
        question: 'How long do I have to apply for a PGWP?',
        answer:
          'Generally 180 days after your school confirms that you completed your program. Your study permit must also have been valid at some point during those 180 days.',
      },
      {
        question: 'How long can a PGWP be valid?',
        answer:
          'Depending on the credential and program length, a permit may be issued for up to three years. Passport expiry can shorten it.',
      },
      {
        question: 'Do PGWP applicants need a language test?',
        answer:
          'Most applications submitted on or after November 1, 2024 require proof of English or French ability. The required level depends on the type of credential and institution.',
      },
      {
        question: 'Can I get a second PGWP?',
        answer: 'A PGWP is generally available only once in a lifetime.',
      },
      {
        question: 'Can I work while my PGWP application is being processed?',
        answer:
          'Some graduates may, if they held a valid study permit when they applied, completed their program, and were eligible to work off campus during their studies without exceeding the permitted hours. Confirm every condition before you begin.',
      },
    ],
    help: {
      heading: 'Protect your PGWP deadline',
      paragraphs: [
        'We review your institution and program, calculate the application deadline, assess language and field-of-study requirements, examine study gaps or transfers, prepare supporting documents, and identify status concerns before submission.',
      ],
      disclaimer: DISCLAIMER,
    },
    related: [
      { label: 'Study Permit', href: '/services/study-permit' },
      { label: 'Express Entry', href: '/services/express-entry' },
    ],
  },

  'lmia-work-permit': {
    category: 'Work Permits',
    meta: {
      title: 'Closed Work Permit (LMIA-Based) Consultant',
      description:
        'LMIA-based closed work permit guidance for Canadian employers and foreign workers, including job offer and document review.',
    },
    hero: {
      eyebrow: 'Closed Work Permit (LMIA-Based)',
      title: 'Work for a Canadian employer',
      titleAccent: 'with a clear LMIA-based plan.',
      intro:
        'An LMIA-based closed work permit is employer-specific and usually depends on a Canadian employer receiving a positive Labour Market Impact Assessment.',
      image: IMG.work,
      imageAlt: 'Employer and worker reviewing LMIA-based work permit documents',
    },
    quickFacts: [
      { value: 'Employer-specific', label: 'Tied to the employer, role and location', icon: 'building' },
      { value: 'LMIA supported', label: "Based on the employer's approved LMIA", icon: 'file' },
      { value: 'Structured file', label: 'Strong employer and worker documents', icon: 'check' },
      { value: 'Status planning', label: 'Timing, extensions and family options', icon: 'clock' },
    ],
    cards: [
      {
        title: 'What is an LMIA?',
        icon: 'file',
        body:
          "An LMIA is a document a Canadian employer may need before hiring a temporary foreign worker. It assesses the effect of the hire on Canada's labour market.",
        items: [
          'Some roles require LMIA support.',
          'Some roles may be LMIA-exempt.',
          'After a positive LMIA, the worker may apply for a work permit.',
        ],
      },
      {
        title: 'Who is it for?',
        icon: 'briefcase',
        items: [
          'Foreign workers with a Canadian employer offer.',
          'Employers who need temporary foreign worker support.',
          'Applicants with qualifications matching the role.',
          'Workers who understand employer-specific restrictions.',
        ],
      },
      {
        title: 'Documents may include',
        icon: 'passport',
        items: [
          'Positive LMIA and employment offer details.',
          'Job offer and employment contract.',
          'Worker qualifications and experience proof.',
          'Identity, status and supporting personal documents.',
        ],
      },
      {
        title: 'How we help',
        icon: 'shield',
        body:
          'We review the LMIA details, job offer, worker eligibility, supporting documents and application strategy before submission.',
      },
    ],
    process: [
      { title: 'Review offer', description: 'Check the role details and conditions.' },
      { title: 'LMIA review', description: 'Confirm the employer support in place.' },
      { title: 'Prepare', description: 'Gather employer and worker documents.' },
      { title: 'Submit', description: 'Apply online.' },
      { title: 'Decision', description: 'IRCC reviews the application.' },
      { title: 'Start work', description: 'Begin with the named employer.' },
    ],
    help: {
      heading: 'Have an LMIA-supported job offer?',
      paragraphs: ['Book a consultation to review your closed work permit application before it is filed.'],
      disclaimer: DISCLAIMER,
    },
    related: [{ label: 'LMIA Services', href: '/services/lmia-services' }],
  },

  'lmia-services': {
    category: 'Work Permits',
    meta: {
      title: 'LMIA Services Consultant in Canada',
      description:
        'LMIA and employer-supported work permit guidance for Canadian employers and foreign workers preparing employment documents.',
    },
    hero: {
      eyebrow: 'LMIA & Employer Services',
      title: 'Hire foreign talent',
      titleAccent: 'with a clear employer plan.',
      intro:
        'LMIA services help Canadian employers and foreign workers understand Labour Market Impact Assessment requirements, employer-specific work permits and supporting document needs.',
      image: IMG.team,
      imageAlt: 'Canadian employer interviewing a skilled worker',
    },
    quickFacts: [
      { value: 'Employer review', label: 'Business, role, wage and hiring needs', icon: 'building' },
      { value: 'Position planning', label: 'Duties, requirements, recruitment', icon: 'target' },
      { value: 'Worker readiness', label: 'Permit documents on the worker side', icon: 'passport' },
      { value: 'Compliance focus', label: 'Obligations and documentation', icon: 'shield' },
    ],
    cards: [
      {
        title: 'What is an LMIA?',
        icon: 'file',
        body:
          "An LMIA is a document a Canadian employer may need before hiring a temporary foreign worker. It helps show whether the hire may affect Canada's labour market.",
        items: [
          'Some jobs require LMIA support.',
          'Some work permits are LMIA-exempt.',
          'A positive LMIA can support a closed work permit application.',
        ],
      },
      {
        title: 'Employer details may include',
        icon: 'briefcase',
        items: [
          'Business registration and operating information.',
          'Job title, duties, wage and work location.',
          'Recruitment efforts and labour-market details.',
          'Financial or business documents where needed.',
        ],
      },
      {
        title: 'Worker documents may include',
        icon: 'passport',
        items: [
          'Passport and identity documents.',
          'Resume, experience letters and qualifications.',
          'Job offer and employment contract.',
          'Proof that the worker meets role requirements.',
        ],
      },
      {
        title: 'How we help',
        icon: 'shield',
        body:
          'We review employer and worker information, identify the correct pathway, organize document checklists, and plan the LMIA-based work permit process.',
      },
    ],
    process: [
      { title: 'Assess need', description: 'Review the role and employer situation.' },
      { title: 'Plan pathway', description: 'Confirm LMIA or exemption direction.' },
      { title: 'Documents', description: 'Prepare employer and worker proof.' },
      { title: 'LMIA stage', description: 'Support LMIA-related preparation.' },
      { title: 'Work permit', description: 'Prepare the worker application.' },
      { title: 'Start work', description: 'Move forward after approval.' },
    ],
    why: [
      { letter: 'A', title: 'Employer guidance', body: 'Understand duties and requirements.' },
      { letter: 'B', title: 'Worker support', body: 'Prepare work permit documents clearly.' },
      { letter: 'C', title: 'Compliance awareness', body: 'Plan with obligations in mind.' },
      { letter: 'D', title: 'End-to-end planning', body: 'From role review to work permit next steps.' },
    ],
    help: {
      heading: 'Need LMIA or employer-supported guidance?',
      paragraphs: ['Book a consultation to review the employer, the position and the worker documents together.'],
      disclaimer: DISCLAIMER,
    },
  },

  'bridging-open-work-permit': {
    category: 'Work Permits',
    meta: {
      title: 'Bridging Open Work Permit (BOWP) Consultant',
      description:
        'BOWP guidance for eligible permanent residence applicants who want to maintain work authorization while waiting for a decision.',
    },
    hero: {
      eyebrow: 'Bridging Open Work Permit',
      title: 'Keep working.',
      titleAccent: 'Stay in Canada.',
      intro:
        'A Bridging Open Work Permit may allow eligible applicants to continue working while a permanent residence application is being processed.',
      image: IMG.work,
      imageAlt: 'Worker continuing employment while waiting for PR',
    },
    quickFacts: [
      { value: 'Continue working', label: 'Maintain employment while PR is processing', icon: 'briefcase' },
      { value: 'No disruption', label: 'Avoid gaps in work authorization', icon: 'bolt' },
      { value: 'PR applicants', label: 'Designed for eligible PR applicants', icon: 'maple' },
      { value: 'Peace of mind', label: 'Stay focused while your case moves', icon: 'shield' },
    ],
    cards: [
      {
        title: 'What is a BOWP?',
        icon: 'route',
        body:
          'A BOWP helps certain applicants remain in Canada and continue working while waiting for a permanent residence decision.',
        items: [
          'For applicants with a submitted PR application.',
          'Helps maintain legal status and work authorization.',
          'Can reduce interruption during the transition to PR.',
        ],
      },
      {
        title: 'Who can apply?',
        icon: 'check',
        items: [
          'Applicants with valid temporary resident status.',
          'Applicants physically present in Canada.',
          'Applicants whose current work permit is expiring or recently expired, where eligible.',
          'Applicants who meet program and document requirements.',
        ],
      },
    ],
    process: [
      { title: 'Eligibility check', description: 'Confirm your profile and PR stage.' },
      { title: 'Document review', description: 'Organize the supporting evidence.' },
      { title: 'Submit', description: 'File the application.' },
      { title: 'Processing', description: 'IRCC reviews.' },
      { title: 'Approval', description: 'Receive the decision.' },
      { title: 'Continue working', description: 'Keep moving forward.' },
    ],
    help: {
      heading: 'Do not stop your career',
      paragraphs: ['Let us review your BOWP eligibility and timelines before your current permit expires.'],
      disclaimer: DISCLAIMER,
    },
    related: [{ label: 'Permanent Residence', href: '/services/permanent-residence' }],
  },

  'global-talent-stream': {
    category: 'Work Permits',
    meta: {
      title: 'Global Talent Stream Consultant',
      description:
        'Global Talent Stream work permit guidance for employers hiring skilled foreign talent through fast, employer-supported pathways.',
    },
    hero: {
      eyebrow: 'Global Talent Stream',
      title: 'Bring global talent.',
      titleAccent: 'Drive innovation in Canada.',
      intro:
        'Global Talent Stream helps Canadian employers hire highly skilled foreign talent for specialized roles and business growth.',
      image: IMG.team,
      imageAlt: 'Employer hiring skilled global talent for Canada',
    },
    quickFacts: [
      { value: 'Fast processing', label: 'Designed for efficient hiring', icon: 'bolt' },
      { value: 'Top talent', label: 'Hire specialized global workers', icon: 'trophy' },
      { value: 'Innovation', label: 'Support growth and competitiveness', icon: 'target' },
      { value: 'Employer support', label: 'Plan the right documents', icon: 'file' },
    ],
    cards: [
      {
        title: 'What is the Global Talent Stream?',
        icon: 'bolt',
        body:
          "GTS is part of Canada's temporary foreign worker framework, designed to help employers access skilled talent for in-demand positions.",
        items: [
          'Built for high-growth sectors and specialized occupations.',
          'Quick, efficient processing where eligible.',
          'Supports business innovation and hiring needs.',
        ],
      },
      {
        title: 'Who can use it?',
        icon: 'briefcase',
        items: [
          'Canadian employers meeting program requirements.',
          'Highly skilled foreign talent.',
          'Applicants with a valid job offer in an eligible role.',
          'Employers and workers who can meet IRCC requirements.',
        ],
      },
    ],
    process: [
      { title: 'Consultation', description: 'Assess the hiring need.' },
      { title: 'Job offer', description: 'Prepare the employment records.' },
      { title: 'Submit', description: 'File the application.' },
      { title: 'Processing', description: 'IRCC review.' },
      { title: 'Approval', description: 'Receive the permit.' },
      { title: 'Start work', description: 'Begin in Canada.' },
    ],
    help: {
      heading: 'Hire global talent. Grow your business.',
      paragraphs: ['Let us help plan the application pathway from job offer through to permit.'],
      disclaimer: DISCLAIMER,
    },
  },

  'francophone-mobility': {
    category: 'Work Permits',
    meta: {
      title: 'Francophone Mobility Program Consultant',
      description:
        'Francophone Mobility Program guidance for French-speaking skilled workers seeking LMIA-exempt Canadian work permits.',
    },
    hero: {
      eyebrow: 'Francophone Mobility Program',
      title: 'Work in Canada.',
      titleAccent: 'Build a future in French.',
      intro:
        'This LMIA-exempt pathway supports French-speaking skilled workers who can contribute to Francophone communities outside Quebec.',
      image: IMG.work,
      imageAlt: 'French-speaking worker planning an LMIA-exempt work permit',
    },
    quickFacts: [
      { value: 'LMIA exempt', label: 'No LMIA required where eligible', icon: 'bolt' },
      { value: 'French language', label: 'For French-speaking skilled workers', icon: 'quote' },
      { value: 'Outside Quebec', label: 'Contribute to Francophone communities', icon: 'maple' },
      { value: 'PR pathway', label: 'Canadian work experience helps later', icon: 'route' },
    ],
    cards: [
      {
        title: 'Eligibility requirements',
        icon: 'check',
        items: [
          'French-speaking skilled worker.',
          'Job offer from a Canadian employer outside Quebec.',
          'Eligible occupation and role requirements.',
          'French ability proof and standard admissibility requirements.',
        ],
      },
      {
        title: 'Documents may include',
        icon: 'passport',
        items: [
          'Job offer letter.',
          'Proof of French language ability.',
          'Education and work experience documents.',
          'Identity, funds and admissibility documents.',
        ],
      },
    ],
    process: [
      { title: 'Check', description: 'Review eligibility.' },
      { title: 'Prepare', description: 'Collect documents.' },
      { title: 'Apply', description: 'Submit online.' },
      { title: 'Biometrics', description: 'If required.' },
      { title: 'Review', description: 'IRCC processing.' },
      { title: 'Permit', description: 'Work in Canada.' },
    ],
    help: {
      heading: 'Speak French. Work in Canada.',
      paragraphs: ['We can review whether this LMIA-exempt pathway fits your profile and job offer.'],
      disclaimer: DISCLAIMER,
    },
  },

  'international-experience-canada': {
    category: 'Work Permits',
    meta: {
      title: 'International Experience Canada (IEC) Consultant',
      description:
        'IEC guidance for Working Holiday, Young Professionals, and International Co-op applicants preparing Canadian work permit files.',
    },
    hero: {
      eyebrow: 'International Experience Canada',
      title: 'Travel. Work.',
      titleAccent: 'Explore Canada.',
      intro:
        'IEC helps eligible youth from partner countries gain temporary Canadian work experience through Working Holiday, Young Professionals and International Co-op.',
      image: IMG.city,
      imageAlt: 'Young traveller preparing an International Experience Canada work permit',
    },
    quickFacts: [
      { value: 'Working Holiday', label: 'Open work permit flexibility', icon: 'plane' },
      { value: 'Career growth', label: 'Build international work experience', icon: 'briefcase' },
      { value: 'Cultural exchange', label: 'Live, travel and learn', icon: 'star' },
      { value: 'Clear planning', label: 'Pools, invitations, documents, timing', icon: 'clock' },
    ],
    cards: [
      {
        title: 'What is IEC?',
        icon: 'plane',
        body:
          'IEC is a temporary work permit program for eligible citizens of countries and territories with a youth mobility arrangement with Canada.',
        items: [
          'Working Holiday for flexible travel and work.',
          'Young Professionals for career-focused work experience.',
          'International Co-op for eligible students needing a work placement.',
        ],
      },
      {
        title: 'Who may apply?',
        icon: 'check',
        items: [
          'Citizens of an IEC partner country or territory.',
          'Applicants who meet the age requirements for their country.',
          'Applicants with a valid passport and required funds.',
          'Applicants who meet health, security and admissibility requirements.',
        ],
      },
      {
        title: 'Documents may include',
        icon: 'passport',
        items: [
          'Passport and identity documents.',
          'Proof of funds and travel insurance.',
          'Resume, photo and forms requested by IRCC.',
          'Police certificates or medical exam if required.',
          'Job offer documents for some IEC categories.',
        ],
      },
      {
        title: 'How we help',
        icon: 'shield',
        body:
          'We help you understand the right IEC category, prepare your profile, track invitation timing, and organize documents before submission.',
      },
    ],
    process: [
      { title: 'Check eligibility', description: 'Review country, age and category fit.' },
      { title: 'Create profile', description: 'Enter the IEC pool.' },
      { title: 'Invitation', description: 'Receive an invitation if selected.' },
      { title: 'Documents', description: 'Prepare forms and proof.' },
      { title: 'Submit', description: 'Apply online to IRCC.' },
      { title: 'Work in Canada', description: 'Travel after approval and instructions.' },
    ],
    why: [
      { letter: 'A', title: 'Category review', body: 'Choose the right IEC option.' },
      { letter: 'B', title: 'Document support', body: 'Prepare a complete file.' },
      { letter: 'C', title: 'Timeline guidance', body: 'Understand invitations and deadlines.' },
      { letter: 'D', title: 'Clear communication', body: 'Know each step before you apply.' },
    ],
    help: {
      heading: 'Ready to work and explore Canada?',
      paragraphs: ['Book a consultation to review your IEC eligibility and next steps.'],
      disclaimer: DISCLAIMER,
    },
  },

  'caregiver-program': {
    category: 'Work Permits',
    meta: {
      title: 'Caregiver Program Consultant in Canada',
      description:
        'Caregiver program guidance for work permits, family support, job documents, eligibility, and long-term Canadian pathway planning.',
    },
    hero: {
      eyebrow: 'Caregiver Program',
      title: 'Care for others.',
      titleAccent: 'Build your future in Canada.',
      intro:
        'Caregiver pathways support workers who help children, seniors, or people with medical or special needs, while building Canadian work experience.',
      image: IMG.family,
      imageAlt: 'Caregiver supporting a Canadian family',
    },
    quickFacts: [
      { value: 'Meaningful work', label: "Make a difference in families' lives", icon: 'heart' },
      { value: 'PR pathway', label: 'Experience may support settlement options', icon: 'maple' },
      { value: 'Bring family', label: 'Spouse and children may have options', icon: 'family' },
      { value: 'In demand', label: 'Caregiver support is needed across Canada', icon: 'target' },
    ],
    cards: [
      {
        title: 'What is the caregiver pathway?',
        icon: 'heart',
        body:
          'Caregiver programs help Canadian families hire qualified foreign nationals to provide care and support in the home.',
        items: [
          'Care for children, seniors, or individuals with special needs.',
          'Gain Canadian work experience.',
          'May be eligible for permanent residence pathways.',
        ],
      },
      {
        title: 'Who can apply?',
        icon: 'check',
        items: [
          'Applicants with education such as a high school diploma or equivalent.',
          'English or French language ability.',
          'Caregiving work experience or a valid job offer.',
          'Medical, police and admissibility requirements met.',
        ],
      },
    ],
    process: [
      { title: 'Check eligibility', description: 'Assess your profile.' },
      { title: 'Employer match', description: 'Review the family or job offer.' },
      { title: 'Application', description: 'Prepare and submit.' },
      { title: 'Work in Canada', description: 'Start caregiving work.' },
      { title: 'Apply for PR', description: 'Plan the next step.' },
      { title: 'Build a future', description: 'Settle in Canada.' },
    ],
    help: {
      heading: 'Care today. Build tomorrow.',
      paragraphs: ['Let us help you start your caregiver journey in Canada with a clear, complete file.'],
      disclaimer: DISCLAIMER,
    },
  },

  'c10-work-permit': {
    category: 'Work Permits',
    meta: {
      title: 'C10 Significant Benefit Work Permit Consultant',
      description:
        'C10 significant benefit work permit guidance for applicants bringing important economic, social, or cultural value to Canada.',
    },
    hero: {
      eyebrow: 'C10 Work Permit',
      title: 'Significant benefit.',
      titleAccent: 'Work in Canada with confidence.',
      intro:
        'The C10 work permit may support individuals performing work of significant economic, social or cultural benefit to Canada.',
      image: IMG.business,
      imageAlt: 'Professional planning a significant-benefit work permit for Canada',
    },
    quickFacts: [
      { value: 'LMIA exempt', label: 'No LMIA where eligible', icon: 'bolt' },
      { value: 'Significant benefit', label: 'Work that benefits Canada', icon: 'trophy' },
      { value: 'Share expertise', label: 'Specialized knowledge or training', icon: 'badge' },
      { value: 'Faster path', label: 'Often simpler than LMIA options', icon: 'route' },
    ],
    cards: [
      {
        title: 'Who can apply?',
        icon: 'check',
        items: [
          'Individuals invited by a Canadian organization.',
          'Those providing specialized knowledge, services or training.',
          'Performers, artists, referees and other professionals in certain fields.',
          'Applicants able to show significant benefit to Canada.',
        ],
      },
      {
        title: 'Documents may include',
        icon: 'passport',
        items: [
          'Passport and identity documents.',
          'Invitation letter from the Canadian organization.',
          'Detailed description of the work.',
          'Proof of qualifications and experience.',
        ],
      },
    ],
    process: [
      { title: 'Assess', description: 'Evaluate the work and the benefit case.' },
      { title: 'Prepare', description: 'Gather proof and supporting letters.' },
      { title: 'Submit', description: 'Apply.' },
      { title: 'Review', description: 'IRCC review.' },
      { title: 'Approval', description: 'Receive the permit.' },
      { title: 'Work', description: 'Make an impact.' },
    ],
    help: {
      heading: 'Your expertise, Canada\u2019s benefit',
      paragraphs: ['We help build the significant-benefit argument and the evidence behind it.'],
      disclaimer: DISCLAIMER,
    },
  },

  'c11-work-permit': {
    category: 'Work Permits',
    meta: {
      title: 'C11 Entrepreneur / Transfer Work Permit Consultant',
      description:
        'C11 work permit guidance for intra-company transfer and entrepreneur-style work permit planning in Canada.',
    },
    hero: {
      eyebrow: 'C11 Work Permit',
      title: 'Move key people',
      titleAccent: 'into your Canadian operation.',
      intro:
        'C11 can support Canadian employers transferring skilled employees from foreign offices to Canadian branches, subsidiaries or affiliates.',
      image: IMG.business,
      imageAlt: 'Executive planning a C11 work permit and Canadian expansion',
    },
    quickFacts: [
      { value: 'Transfer talent', label: 'Move people into Canada', icon: 'route' },
      { value: 'Branch or affiliate', label: 'Join the Canadian entity', icon: 'building' },
      { value: 'No LMIA', label: 'LMIA exempt where eligible', icon: 'bolt' },
      { value: 'Compliance', label: 'Meet Canadian requirements', icon: 'shield' },
    ],
    cards: [
      {
        title: 'Who can apply?',
        icon: 'check',
        items: [
          'Employees of foreign companies with a qualifying Canadian relationship.',
          'Executives, senior managers or specialized knowledge workers.',
          'Applicants intending to work for a Canadian branch, subsidiary, affiliate or related company.',
          'Applicants with qualifying prior employment abroad.',
        ],
      },
      {
        title: 'Documents may include',
        icon: 'passport',
        items: [
          'Passport and identity documents.',
          'Employment verification letter.',
          'Canadian employer job offer letter.',
          'Proof of the relationship between the companies.',
        ],
      },
    ],
    process: [
      { title: 'Assess', description: 'Review the transfer and the role.' },
      { title: 'Prepare', description: 'Gather corporate and personal documents.' },
      { title: 'Submit', description: 'Apply.' },
      { title: 'Review', description: 'IRCC review.' },
      { title: 'Approval', description: 'Receive the permit.' },
      { title: 'Work', description: 'Begin the assignment.' },
    ],
    help: {
      heading: 'Global talent. Canadian opportunity.',
      paragraphs: ['We make the transfer file organized, consistent and defensible.'],
      disclaimer: DISCLAIMER,
    },
    related: [{ label: 'Intra-Company Transfer', href: '/services/intra-company-transfer' }],
  },

  /* -------------------------------------------------- PERMANENT RESIDENCE */
  'permanent-residence': {
    category: 'Permanent Residence',
    meta: {
      title: 'Permanent Residency Consultant in Canada',
      description:
        'Permanent residence pathway guidance for Express Entry, PNP, sponsorship, work experience, and long-term settlement planning.',
    },
    hero: {
      eyebrow: 'Settle in Canada',
      title: 'Permanent residence:',
      titleAccent: 'pathways and eligibility.',
      intro:
        'Review your long-term options for Canadian permanent residence, including Express Entry, provincial pathways and family sponsorship \u2014 then pick the strongest route for your profile.',
      image: IMG.pr,
      imageAlt: 'Family planning permanent residency and settlement in Canada',
    },
    quickFacts: [
      { value: 'Express Entry', label: 'Federal economic programs', icon: 'bolt' },
      { value: 'PNP', label: 'Provincial nomination streams', icon: 'maple' },
      { value: 'Sponsorship', label: 'Family and spousal routes', icon: 'family' },
      { value: 'Strategy', label: 'Compare routes before you commit', icon: 'target' },
    ],
    cards: [
      {
        title: 'Programs covered',
        icon: 'route',
        items: [
          'Express Entry profile readiness.',
          'Provincial Nominee Program (PNP).',
          'Family sponsorship.',
          'Spousal sponsorship.',
          'Parents and grandparents sponsorship.',
          'Canadian experience and skilled worker options.',
        ],
      },
      {
        title: 'How we help',
        icon: 'shield',
        body:
          'We compare your eligibility across routes, identify the weak points in each, and help you choose the strongest PR pathway \u2014 with a document plan and realistic timelines attached.',
      },
    ],
    process: [
      { title: 'Eligibility review', description: 'Assess your full profile.' },
      { title: 'Compare routes', description: 'Weigh Express Entry, PNP and sponsorship.' },
      { title: 'Fix weak points', description: 'Language, experience, documents.' },
      { title: 'Build the file', description: 'Prepare the strongest evidence.' },
      { title: 'Submit', description: 'File to IRCC or the province.' },
      { title: 'Settle', description: 'Plan your arrival and next steps.' },
    ],
    help: {
      heading: 'Want to plan permanent residence?',
      paragraphs: ['Start with a personal PR eligibility review across every route open to you.'],
      disclaimer: DISCLAIMER,
    },
    related: [
      { label: 'Express Entry', href: '/services/express-entry' },
      { label: 'Provincial Nominee Program', href: '/services/provincial-nominee-program' },
      { label: 'Family Sponsorship', href: '/services/family-sponsorship' },
    ],
  },

  'express-entry': {
    category: 'Permanent Residence',
    meta: {
      title: 'Express Entry Consultant in Canada',
      description:
        'Express Entry guidance for CRS score, federal skilled programs, Canadian Experience Class, PNP alignment, and PR documents.',
    },
    hero: {
      eyebrow: 'Express Entry',
      title: 'Your skills.',
      titleAccent: 'Your future in Canada.',
      intro:
        "Express Entry is Canada's online system for managing permanent residence applications under key federal economic immigration programs.",
      image: IMG.pr,
      imageAlt: 'Future permanent residents planning Express Entry',
    },
    quickFacts: [
      { value: 'Points-based', label: 'CRS ranks your profile', icon: 'target' },
      { value: 'FSWP / FSTP / CEC', label: 'Three federal programs', icon: 'route' },
      { value: 'PNP boost', label: 'A nomination can lift your score', icon: 'bolt' },
      { value: 'ITA', label: 'Invitation to apply for PR', icon: 'badge' },
    ],
    cards: [
      {
        title: 'What is Express Entry?',
        icon: 'bolt',
        body: 'Express Entry manages applications for permanent residence under federal economic programs.',
        items: [
          'Federal Skilled Worker Program (FSWP).',
          'Federal Skilled Trades Program (FSTP).',
          'Canadian Experience Class (CEC).',
          'Some PNP streams aligned with Express Entry.',
        ],
      },
      {
        title: 'CRS factors',
        icon: 'target',
        items: [
          'Age and education.',
          'Language test scores.',
          'Skilled work experience.',
          'Canadian study or work history.',
          'Job offer, adaptability or provincial nomination.',
        ],
      },
      {
        title: 'How we help',
        icon: 'shield',
        items: [
          'Eligibility and CRS score review.',
          'Program fit and document planning.',
          'Profile readiness checklist.',
          'Post-invitation document support.',
        ],
      },
      {
        title: 'Common weak points',
        icon: 'eye',
        items: [
          'Incorrect work history details.',
          'Language or education documents not ready.',
          'Misunderstanding NOC/TEER details.',
          'Missing proof for claimed points.',
        ],
      },
    ],
    process: [
      { title: 'Create profile', description: 'Prepare and submit your profile.' },
      { title: 'Get CRS score', description: 'Understand your ranking.' },
      { title: 'Receive invitation', description: 'Get an ITA when selected.' },
      { title: 'Submit PR', description: 'Prepare complete documents.' },
      { title: 'Review', description: 'IRCC assesses eligibility.' },
      { title: 'Settle', description: 'Receive PR and start your new life.' },
    ],
    why: [
      { letter: 'A', title: 'Expert guidance', body: 'Clear profile and program advice.' },
      { letter: 'B', title: 'CRS strategy', body: 'Identify ways to strengthen your profile.' },
      { letter: 'C', title: 'Document planning', body: 'Know what to prepare before an invitation.' },
      { letter: 'D', title: 'Transparent process', body: 'Clear steps from profile to PR.' },
      { letter: 'E', title: 'End-to-end support', body: 'From eligibility review to PR submission.' },
    ],
    faqs: [
      {
        question: 'What is Express Entry in Canada?',
        answer:
          "Express Entry is Canada's system for managing permanent residence applications under key federal economic programs.",
      },
      {
        question: 'How is the CRS score calculated?',
        answer:
          'The CRS score is based on factors like age, education, language test results, work experience and adaptability.',
      },
      {
        question: 'Can a PNP improve my Express Entry profile?',
        answer:
          'Yes. Certain provincial nominations align with Express Entry and can significantly increase your CRS score.',
      },
      {
        question: 'Do I need a job offer?',
        answer:
          'No. A job offer is not required for an Express Entry profile, though in some cases it can contribute points.',
      },
    ],
    help: {
      heading: 'Your Canadian dream. Our commitment.',
      paragraphs: ['Take the first step toward permanent residence with a CRS and eligibility review.'],
      disclaimer: DISCLAIMER,
    },
    related: [{ label: 'Provincial Nominee Program', href: '/services/provincial-nominee-program' }],
  },

  'provincial-nominee-program': {
    category: 'Permanent Residence',
    meta: {
      title: 'Provincial Nominee Program (PNP) Consultant',
      description:
        'PNP guidance for provincial nomination options, Express Entry aligned streams, skilled workers, graduates, and entrepreneurs.',
    },
    hero: {
      eyebrow: 'Provincial Nominee Program',
      title: 'Immigrate to a province',
      titleAccent: 'that welcomes you.',
      intro:
        'PNP pathways allow provinces and territories to nominate workers, graduates and entrepreneurs who can contribute to local communities.',
      image: IMG.city,
      imageAlt: 'Applicants planning a provincial nominee pathway in Canada',
    },
    quickFacts: [
      { value: 'Province-specific', label: 'Each province sets its own streams', icon: 'maple' },
      { value: 'Pathway to PR', label: 'A nomination supports permanent residence', icon: 'route' },
      { value: 'Live and work', label: 'Build a career in your province', icon: 'building' },
      { value: 'Diverse streams', label: 'Workers, graduates, entrepreneurs', icon: 'family' },
    ],
    cards: [
      {
        title: 'What is a PNP?',
        icon: 'maple',
        body:
          'PNPs allow provinces and territories to nominate people whose skills, education and work experience meet local economic needs.',
        items: [
          'Nominations are based on provincial requirements.',
          'You usually intend to live and work in the nominating province.',
          'Many PNP streams connect with Express Entry.',
        ],
      },
      {
        title: 'Who can apply?',
        icon: 'check',
        items: [
          'Skilled workers in in-demand occupations.',
          'International graduates.',
          'Entrepreneurs and business owners.',
          'Semi-skilled workers and job-offer candidates.',
        ],
      },
    ],
    process: [
      { title: 'Assess', description: 'Review your profile.' },
      { title: 'Choose province', description: 'Select the right stream.' },
      { title: 'Submit', description: 'Apply to the province.' },
      { title: 'Nomination', description: 'Receive the decision.' },
      { title: 'Apply for PR', description: 'Submit to IRCC.' },
      { title: 'Settle', description: 'Live and thrive.' },
    ],
    help: {
      heading: 'Your future. Your province.',
      paragraphs: ['Let us map your PNP options against your work history, education and destination.'],
      disclaimer: DISCLAIMER,
    },
    related: [{ label: 'Express Entry', href: '/services/express-entry' }],
  },

  'family-sponsorship': {
    category: 'Permanent Residence',
    meta: {
      title: 'Family Sponsorship Consultant in Canada',
      description:
        'Family sponsorship guidance for spouses, children, parents, grandparents, and eligible relatives preparing Canadian PR files.',
    },
    hero: {
      eyebrow: 'Family Sponsorship',
      title: 'Bring your family together.',
      titleAccent: 'Start a new chapter.',
      intro:
        'Family sponsorship helps eligible sponsors bring loved ones to Canada through permanent residence pathways for spouses, partners, children, parents, grandparents and certain other relatives.',
      image: IMG.family,
      imageAlt: 'Family together planning Canadian family sponsorship',
    },
    quickFacts: [
      { value: 'Reunite', label: 'Support for family members', icon: 'heart' },
      { value: 'PR pathway', label: 'Family-class leads to permanent residence', icon: 'maple' },
      { value: 'Document clarity', label: 'Relationship, identity and sponsor proof', icon: 'file' },
      { value: 'Step by step', label: 'From eligibility review to submission', icon: 'route' },
    ],
    cards: [
      {
        title: 'Who can you sponsor?',
        icon: 'family',
        items: [
          'Spouse, common-law partner or conjugal partner.',
          'Dependent children.',
          'Parents and grandparents through eligible programs.',
          'In limited cases, certain other eligible relatives.',
        ],
      },
      {
        title: 'Sponsor responsibilities',
        icon: 'shield',
        items: [
          'Meet sponsor eligibility requirements.',
          'Agree to support the sponsored family member.',
          'Provide accurate relationship and financial information.',
          'Understand the undertaking period and obligations.',
        ],
      },
      {
        title: 'Documents may include',
        icon: 'passport',
        items: [
          'Proof of relationship and family ties.',
          'Identity, passport and civil status documents.',
          'Photos, communication records and supporting history.',
          'Financial documents, sponsor status and required forms.',
        ],
      },
      {
        title: 'How we help',
        icon: 'badge',
        body:
          'We review sponsor eligibility, applicant details, relationship documents, program fit, timelines and common issues so the application is clear and organized.',
      },
    ],
    process: [
      { title: 'Check eligibility', description: 'Confirm sponsor and applicant fit.' },
      { title: 'Choose pathway', description: 'Identify the right sponsorship route.' },
      { title: 'Prepare evidence', description: 'Collect family and identity proof.' },
      { title: 'Submit application', description: 'File the package to IRCC.' },
      { title: 'Application review', description: 'Track updates and requests.' },
      { title: 'Family arrival', description: 'Plan the next chapter in Canada.' },
    ],
    why: [
      { letter: 'A', title: 'Experienced guidance', body: 'Support for family-class requirements.' },
      { letter: 'B', title: 'Personalized checklist', body: 'Documents based on your family situation.' },
      { letter: 'C', title: 'Clear communication', body: 'Understand every stage before filing.' },
      { letter: 'D', title: 'Careful review', body: 'Reduce avoidable gaps and confusion.' },
      { letter: 'E', title: 'End-to-end support', body: 'From assessment to application follow-up.' },
    ],
    help: {
      heading: 'Families belong together.',
      paragraphs: ['Book a consultation to review your sponsorship options and next steps.'],
      disclaimer: DISCLAIMER,
    },
    related: [{ label: 'Super Visa', href: '/services/super-visa' }],
  },

  'canadian-citizenship': {
    category: 'Permanent Residence',
    meta: {
      title: 'Canadian Citizenship Application Consultant',
      description:
        'Canadian citizenship application guidance for permanent residents, including residence days, travel history, documents, and readiness review.',
    },
    hero: {
      eyebrow: 'Canadian Citizenship',
      title: 'Complete your Canadian journey',
      titleAccent: 'with confidence.',
      intro:
        'Citizenship is an important milestone for permanent residents. We help you review eligibility, residence days, documents and application readiness before you apply.',
      image: IMG.pr,
      imageAlt: 'Permanent resident family planning Canadian citizenship',
    },
    quickFacts: [
      { value: 'Eligibility', label: 'Check whether you are ready to apply', icon: 'check' },
      { value: 'Residence days', label: 'Physical presence and travel history', icon: 'clock' },
      { value: 'Documents', label: 'Identity, PR, tax and language proof', icon: 'file' },
      { value: 'Test & oath', label: 'Understand the stages ahead', icon: 'trophy' },
    ],
    cards: [
      {
        title: 'Who may apply?',
        icon: 'check',
        items: [
          'Permanent residents who meet physical presence requirements.',
          'Applicants who meet tax filing requirements where applicable.',
          'Applicants who meet language and knowledge requirements if required.',
          'Applicants with no unresolved issues affecting eligibility.',
        ],
      },
      {
        title: 'Documents may include',
        icon: 'passport',
        items: [
          'Permanent resident card or immigration documents.',
          'Passports and travel history records.',
          'Language proof if required.',
          'Identification documents and photos.',
          'Tax filing and address history details.',
        ],
      },
      {
        title: 'Common concerns',
        icon: 'eye',
        items: [
          'Miscounted physical presence days.',
          'Missing travel dates or passport details.',
          'Unclear name changes or identity records.',
          'Submitting before meeting eligibility requirements.',
        ],
      },
      {
        title: 'How we help',
        icon: 'shield',
        body:
          'We review your readiness, organize supporting documents, identify possible gaps, and prepare a cleaner citizenship application package.',
      },
    ],
    process: [
      { title: 'Eligibility check', description: 'Review PR status and dates.' },
      { title: 'Travel review', description: 'Confirm physical presence.' },
      { title: 'Documents', description: 'Prepare the required proof.' },
      { title: 'Application', description: 'Complete and submit the file.' },
      { title: 'Test or interview', description: 'Prepare for the next steps if required.' },
      { title: 'Oath', description: 'Celebrate becoming Canadian.' },
    ],
    why: [
      { letter: 'A', title: 'Careful review', body: 'Reduce avoidable mistakes before filing.' },
      { letter: 'B', title: 'Clear checklist', body: 'Know exactly what to prepare.' },
      { letter: 'C', title: 'Travel history help', body: 'Organize absences and dates.' },
      { letter: 'D', title: 'End-to-end guidance', body: 'From eligibility review to next steps.' },
    ],
    help: {
      heading: 'Ready to apply for citizenship?',
      paragraphs: ['Book a consultation to review your eligibility, residence days and documents.'],
      disclaimer: DISCLAIMER,
    },
  },

  /* ------------------------------------------------------------- BUSINESS */
  'business-visa': {
    category: 'Business Visa',
    meta: {
      title: 'Business Visa Consultant in Canada',
      description:
        'Business visa guidance for visitors, entrepreneurs, investors, company transfers, and self-employed immigration planning.',
    },
    hero: {
      eyebrow: 'Business Immigration',
      title: 'Business immigration,',
      titleAccent: 'mapped to the right stream.',
      intro:
        'Support for business visitors, entrepreneurs, investors, intra-company transfers and self-employed pathways \u2014 starting with which route actually fits your plan.',
      image: IMG.business,
      imageAlt: 'Entrepreneur and business visitor meeting in Canada',
    },
    quickFacts: [
      { value: 'Exploratory', label: 'Research the market first', icon: 'eye' },
      { value: 'Investor', label: 'Capital-led routes', icon: 'wallet' },
      { value: 'Transfer', label: 'Move key staff into Canada', icon: 'route' },
      { value: 'Self-employed', label: 'Cultural and athletic profiles', icon: 'star' },
    ],
    cards: [
      {
        title: 'Programs covered',
        icon: 'briefcase',
        items: [
          'Business Exploratory Visa.',
          'Investor Visa.',
          'Intra-Company Transfer Visa.',
          'Self-Employed Visa.',
          'C10 and C11 work permits.',
        ],
      },
      {
        title: 'How we help',
        icon: 'shield',
        body:
          'We review your business goals, travel purpose, company details and supporting documents, then recommend a clear pathway rather than a scattergun set of applications.',
      },
    ],
    process: [
      { title: 'Goal review', description: 'Understand the business plan.' },
      { title: 'Route selection', description: 'Match the plan to a stream.' },
      { title: 'Corporate proof', description: 'Organize company documents.' },
      { title: 'Prepare file', description: 'Build the application package.' },
      { title: 'Submit', description: 'File to IRCC.' },
      { title: 'Establish', description: 'Move the business forward.' },
    ],
    help: {
      heading: 'Planning business immigration?',
      paragraphs: ['Book a consultation to discuss which stream fits your business and your timeline.'],
      disclaimer: DISCLAIMER,
    },
    related: [
      { label: 'Business Exploratory Visit', href: '/services/business-exploratory-visit' },
      { label: 'Intra-Company Transfer', href: '/services/intra-company-transfer' },
      { label: 'Self-Employed Program', href: '/services/self-employed-program' },
    ],
  },

  'business-exploratory-visit': {
    category: 'Business Visa',
    meta: {
      title: 'Business Exploratory Visa Consultant',
      description:
        'Business exploratory visitor visa guidance for entrepreneurs and investors exploring Canadian business opportunities.',
    },
    hero: {
      eyebrow: 'Business Exploratory Visit',
      title: 'Explore opportunities.',
      titleAccent: 'Then build in Canada.',
      intro:
        'Business exploration visits help entrepreneurs, investors and professionals research opportunities, meet partners and plan future investment.',
      image: IMG.business,
      imageAlt: 'Business professionals exploring opportunities in Canada',
    },
    quickFacts: [
      { value: 'Explore', label: 'Research markets and industries', icon: 'eye' },
      { value: 'Connect', label: 'Meet partners and advisors', icon: 'family' },
      { value: 'Evaluate', label: 'Assess feasibility on the ground', icon: 'target' },
      { value: 'Plan', label: 'Prepare future business steps', icon: 'route' },
    ],
    cards: [
      {
        title: 'What can you do?',
        icon: 'briefcase',
        body: 'You cannot work or enter the Canadian labour market as a business visitor.',
        items: [
          'Explore business and investment opportunities.',
          'Meet potential partners, clients or advisors.',
          'Attend meetings, conferences and trade shows.',
          'Conduct market research and site visits.',
        ],
      },
      {
        title: 'Documents may include',
        icon: 'passport',
        items: [
          'Valid passport.',
          'Business purpose or invitation letter.',
          'Proof of business activity and ties to the home country.',
          'Financial documents and travel itinerary.',
        ],
      },
    ],
    process: [
      { title: 'Assess', description: 'Review the purpose of the visit.' },
      { title: 'Prepare', description: 'Gather corporate and financial proof.' },
      { title: 'Submit', description: 'Apply online.' },
      { title: 'Review', description: 'IRCC review.' },
      { title: 'Approval', description: 'Receive the visa.' },
      { title: 'Explore', description: 'Visit Canada.' },
    ],
    help: {
      heading: 'Explore today. Establish tomorrow.',
      paragraphs: ['Take the first step toward your Canadian business plan with a properly framed visit.'],
      disclaimer: DISCLAIMER,
    },
  },

  'intra-company-transfer': {
    category: 'Business Visa',
    meta: {
      title: 'Intra-Company Transfer Visa Consultant',
      description:
        'Intra-company transfer guidance for executives, managers, and specialized knowledge employees moving to Canada.',
    },
    hero: {
      eyebrow: 'Intra-Company Transfer',
      title: 'Transfer talent.',
      titleAccent: 'Expand into Canada.',
      intro:
        'ICT pathways help multinational companies transfer key employees to a Canadian branch, subsidiary, affiliate or parent company.',
      image: IMG.business,
      imageAlt: 'Business team planning an intra-company transfer to Canada',
    },
    quickFacts: [
      { value: 'Key talent', label: 'Transfer specialized employees', icon: 'trophy' },
      { value: 'Expansion', label: 'Strengthen your Canadian presence', icon: 'building' },
      { value: 'LMIA exempt', label: 'Where eligible', icon: 'bolt' },
      { value: 'Family options', label: 'Spouse and children may have options', icon: 'family' },
    ],
    cards: [
      {
        title: 'Who can apply?',
        icon: 'check',
        items: [
          'Executives and senior managers.',
          'Managers of departments or functions.',
          'Specialized knowledge employees.',
          'Employees with a qualifying relationship to a Canadian business.',
        ],
      },
      {
        title: 'Key benefits',
        icon: 'star',
        items: [
          'Facilitates global mobility.',
          'May be LMIA exempt where eligible.',
          'Supports Canadian business operations.',
          'Family members may have work or study options.',
        ],
      },
    ],
    process: [
      { title: 'Assess', description: 'Review the role and the corporate relationship.' },
      { title: 'Prepare', description: 'Gather corporate records.' },
      { title: 'Submit', description: 'Apply.' },
      { title: 'Review', description: 'IRCC review.' },
      { title: 'Approval', description: 'Receive the permit.' },
      { title: 'Grow', description: 'Work in Canada.' },
    ],
    help: {
      heading: 'Bridging talent. Building futures.',
      paragraphs: ['Let us help your business move key people into Canada with a defensible file.'],
      disclaimer: DISCLAIMER,
    },
    related: [{ label: 'C11 Work Permit', href: '/services/c11-work-permit' }],
  },

  'self-employed-program': {
    category: 'Business Visa',
    meta: {
      title: 'Self-Employed Visa Consultant in Canada',
      description:
        'Self-employed immigration guidance for cultural, artistic, and athletic applicants preparing Canadian permanent residence pathways.',
    },
    hero: {
      eyebrow: 'Self-Employed Visa',
      title: 'Turn your talent',
      titleAccent: 'into a Canadian future.',
      intro:
        'The Self-Employed pathway is for applicants with strong cultural, artistic or athletic experience who can contribute meaningfully to Canada.',
      image: IMG.business,
      imageAlt: 'Self-employed professional planning Canadian business immigration',
    },
    quickFacts: [
      { value: 'Cultural talent', label: 'Artists, creators, performers', icon: 'star' },
      { value: 'Athletic experience', label: 'Athletes, coaches, sports professionals', icon: 'trophy' },
      { value: 'PR pathway', label: 'A permanent future through your work', icon: 'maple' },
      { value: 'Strong evidence', label: 'Achievements and contribution plans', icon: 'badge' },
    ],
    cards: [
      {
        title: 'What is the Self-Employed pathway?',
        icon: 'star',
        body:
          'This pathway focuses on applicants with relevant experience in cultural activities or athletics and the ability to be self-employed in Canada.',
        items: [
          'Relevant cultural or athletic experience.',
          'Ability and intention to work independently in Canada.',
          'Potential to make a meaningful contribution.',
        ],
      },
      {
        title: 'Who may apply?',
        icon: 'check',
        items: [
          'Artists, musicians, writers, designers, performers and creators.',
          'Athletes, coaches, trainers or sports professionals.',
          'Applicants with documented achievements and experience.',
          'Applicants who meet medical, security and admissibility requirements.',
        ],
      },
      {
        title: 'Documents may include',
        icon: 'passport',
        items: [
          'Portfolio, awards, media, contracts or proof of professional work.',
          'Business plan or self-employment plan for Canada.',
          'Financial proof and settlement planning.',
          'Identity, education, experience and reference documents.',
        ],
      },
      {
        title: 'How we help',
        icon: 'shield',
        body:
          'We organize your story, experience, proof of achievement and future contribution plan into a clear, immigration-focused application strategy.',
      },
    ],
    process: [
      { title: 'Profile review', description: 'Assess experience and fit.' },
      { title: 'Evidence plan', description: 'Identify the strongest proof.' },
      { title: 'Contribution plan', description: 'Build your Canada plan.' },
      { title: 'Prepare file', description: 'Organize forms and documents.' },
      { title: 'Submit', description: 'Send the application package.' },
      { title: 'Decision', description: 'Move forward after review.' },
    ],
    why: [
      { letter: 'A', title: 'Portfolio strategy', body: 'Show your experience clearly.' },
      { letter: 'B', title: 'Personalized guidance', body: 'Tailored to your profession.' },
      { letter: 'C', title: 'Document clarity', body: 'Reduce confusion in proof and forms.' },
      { letter: 'D', title: 'End-to-end support', body: 'From assessment to submission.' },
    ],
    help: {
      heading: 'Your talent can open a Canadian pathway.',
      paragraphs: ['Book a consultation to review your self-employed immigration options.'],
      disclaimer: DISCLAIMER,
    },
  },

  /* --------------------------------------------------- ADDITIONAL SERVICES */
  'super-visa-insurance-monthly': {
    category: 'Additional Services',
    meta: {
      title: 'Monthly Payment Super Visa Insurance',
      description:
        'How monthly payment Super Visa insurance works: deposits, instalments, policy validity, missed payments, refunds, and IRCC requirements.',
      updated: 'June 2026',
    },
    hero: {
      eyebrow: 'Super Visa Insurance',
      title: 'Monthly payment',
      titleAccent: 'Super Visa insurance.',
      intro:
        'Understand instalment plans, deposits, policy validity, and the questions every family should ask before choosing monthly payments.',
      image: IMG.insurance,
      imageAlt: 'Reviewing a Super Visa insurance policy document',
    },
    quickFacts: [
      { value: 'Instalments OK', label: 'With a deposit, where the policy qualifies', icon: 'wallet' },
      { value: 'Policy, not a quote', label: 'A quote is never accepted', icon: 'file' },
      { value: '$100,000', label: 'Minimum emergency coverage', icon: 'shield' },
      { value: '1 year', label: 'Minimum validity from entry', icon: 'clock' },
    ],
    prose: [
      {
        heading: 'Does IRCC accept monthly payments?',
        paragraphs: [
          'IRCC permits a qualifying Super Visa policy to be paid in full or through instalments with a deposit. A quote alone is not accepted \u2014 the applicant must have proof of an issued policy that meets every Super Visa insurance requirement.',
        ],
      },
      {
        heading: 'How instalment plans work',
        paragraphs: [
          'The insurer or payment provider may collect an initial deposit followed by scheduled payments. Before agreeing, confirm the total premium, financing or administration charges, payment dates, accepted payment methods, and what happens after a missed payment.',
        ],
      },
      {
        heading: 'Refunds and cancellations',
        paragraphs: [
          'Refund rules depend on the policy. Visa refusal, cancellation before departure, early return and claims can each produce a different result. Read the actual cancellation terms and keep the evidence required for any refund request.',
        ],
      },
    ],
    cards: [
      {
        title: 'What the policy must still provide',
        icon: 'shield',
        items: [
          'At least one year of validity from entry.',
          'At least CAD $100,000 in emergency coverage.',
          'Health care, hospitalization and repatriation benefits.',
          'An eligible insurer, with proof available at each entry.',
        ],
      },
      {
        title: 'Questions to ask before choosing monthly',
        icon: 'eye',
        items: [
          'Can missed payments suspend or cancel coverage?',
          'Is the complete policy issued immediately?',
          'Are instalment fees refundable after a refusal?',
          'Can the effective date be changed before travel?',
          'What happens if a claim occurs before all payments are made?',
        ],
      },
      {
        title: 'Common mistakes',
        icon: 'bell',
        items: [
          'Submitting a quote instead of an issued policy.',
          'Assuming "monthly" means no deposit.',
          'Missing a payment mid-stay.',
          'Overlooking financing charges in the total cost.',
          'Failing to renew coverage during a long stay.',
        ],
      },
      {
        title: 'How we help',
        icon: 'check',
        body:
          'We review whether the insurance documents align with the Super Visa application itself. This page is general information and does not replace the insurer\u2019s policy wording.',
      },
    ],
    process: [
      { title: 'Confirm requirements', description: 'Check duration, coverage and insurer eligibility.' },
      { title: 'Compare plans', description: 'Weigh deposit, instalments and total cost.' },
      { title: 'Read the terms', description: 'Missed payments, refunds, effective dates.' },
      { title: 'Issue the policy', description: 'Obtain the actual policy, not a quote.' },
      { title: 'File with the application', description: 'Attach proof of coverage.' },
      { title: 'Maintain coverage', description: 'Renew before it lapses during the stay.' },
    ],
    help: {
      heading: 'Get your insurance documents reviewed',
      paragraphs: [
        'Insurance is one of the most common Super Visa failure points. We check that the policy actually satisfies IRCC before the application goes in.',
      ],
      disclaimer: DISCLAIMER,
    },
    related: [{ label: 'Super Visa', href: '/services/super-visa' }],
  },
  /* --------------------------------------------------- MORE WORK PERMITS */
  'work-permit': {
    category: 'Work Permits',
    meta: {
      title: 'Canada Work Permit Guide',
      description:
        'Compare Canadian work permit pathways: open permits, employer-specific permits, LMIA-based options, PGWP, spousal permits, bridging permits and specialized programs.',
      updated: 'June 2026',
    },
    hero: {
      eyebrow: 'Work Permits',
      title: 'Explore Canadian',
      titleAccent: 'work permit pathways.',
      intro:
        'Open permits, employer-specific permits, LMIA-based options, PGWP, spousal permits, bridging permits and specialized programs \u2014 compare them and find the route that fits your circumstances.',
      image: IMG.work,
      imageAlt: 'Skilled workers on a Canadian worksite',
    },
    quickFacts: [
      { value: 'Open', label: 'Work for most employers', icon: 'bolt' },
      { value: 'Employer-specific', label: 'Tied to one named employer', icon: 'building' },
      { value: 'LMIA or exempt', label: 'Two very different routes', icon: 'route' },
      { value: 'Status first', label: 'Timing and gaps matter most', icon: 'clock' },
    ],
    prose: [
      {
        heading: 'Open vs. employer-specific permits',
        paragraphs: [
          'An open work permit generally lets you work for most employers in Canada without a named employer or a job offer \u2014 but you still have to qualify for a specific category (PGWP, spousal open work permit, bridging open work permit, and so on). Changing employers is usually permitted while the permit is valid, subject to restrictions.',
          'An employer-specific permit names the employer, the role and often the location. It normally requires a job offer, and may require a positive LMIA \u2014 though LMIA exemptions exist (intra-company transfer, Francophone Mobility, C10, C11). Changing employers normally requires a new permit.',
        ],
      },
      {
        heading: 'Quick pathway finder',
        paragraphs: [
          'This is general direction, not an eligibility decision. Every case turns on the applicant, the employer, the job, the immigration status and the program rules.',
        ],
        items: [
          'I graduated in Canada \u2192 Post-Graduation Work Permit.',
          'I have a Canadian job offer \u2192 LMIA-based permit, or an LMIA-exempt category.',
          'My spouse studies or works in Canada \u2192 Spousal Open Work Permit.',
          'I applied for permanent residence \u2192 Bridging Open Work Permit.',
          'I am an entrepreneur or a transferee \u2192 C11 or Intra-Company Transfer.',
          'I am in an unsafe job \u2192 Vulnerable Worker Open Work Permit.',
        ],
      },
    ],
    cards: [
      {
        title: 'Open work permit routes',
        icon: 'bolt',
        items: [
          'Post-Graduation Work Permit (PGWP).',
          'Spousal Open Work Permit (SOWP).',
          'Bridging Open Work Permit (BOWP).',
          'Vulnerable Worker Open Work Permit.',
          'International Experience Canada \u2014 Working Holiday.',
        ],
      },
      {
        title: 'Employer-supported routes',
        icon: 'briefcase',
        items: [
          'LMIA-based closed work permit.',
          'LMIA Services for employers.',
          'Global Talent Stream.',
          'Intra-Company Transfer.',
          'Francophone Mobility (LMIA-exempt).',
          'C10 significant benefit / C11 entrepreneur.',
        ],
      },
      {
        title: 'The comparison that matters',
        icon: 'route',
        body:
          'Named employer? Job offer required? LMIA required? Can you change employers? Those four questions separate almost every permit type. PGWP, an eligible SOWP and a BOWP are open. LMIA-based, ICT and Francophone Mobility are employer-specific.',
      },
      {
        title: 'How we help',
        icon: 'shield',
        body:
          'We map your status, your timeline and your goal to the permit that actually fits \u2014 and flag the status gaps that quietly disqualify people before they ever apply.',
      },
    ],
    process: [
      { title: 'Status review', description: 'Where you stand today, and for how long.' },
      { title: 'Route selection', description: 'Match your situation to a permit category.' },
      { title: 'Employer check', description: 'If employer-supported, confirm LMIA or exemption.' },
      { title: 'Documents', description: 'Build the checklist for your category.' },
      { title: 'Submit', description: 'File before status lapses.' },
      { title: 'Work', description: 'Understand the conditions on your permit.' },
    ],
    help: {
      heading: 'Not sure which permit fits?',
      paragraphs: [
        'Book a consultation and we will identify the categories you actually qualify for, in order of strength \u2014 rather than filing the first one that looks plausible.',
      ],
      disclaimer: DISCLAIMER,
    },
    related: [
      { label: 'PGWP', href: '/services/pgwp' },
      { label: 'Spouse Open Work Permit', href: '/services/spouse-open-work-permit' },
      { label: 'LMIA Work Permit', href: '/services/lmia-work-permit' },
    ],
  },

  'spouse-open-work-permit': {
    category: 'Work Permits',
    meta: {
      title: 'Spouse Open Work Permit Consultant',
      description:
        'Spouse open work permit guidance for eligible spouses and common-law partners, including relationship proof and document planning.',
    },
    hero: {
      eyebrow: 'Spouse Open Work Permit',
      title: 'Stay together.',
      titleAccent: 'Work in Canada.',
      intro:
        'A spouse open work permit may allow an eligible spouse or common-law partner to work in Canada while their partner studies, works, or moves through an eligible immigration process.',
      image: IMG.family,
      imageAlt: 'Couple planning spouse open work permit options in Canada',
    },
    quickFacts: [
      { value: 'Open permit', label: 'May allow work for many employers', icon: 'bolt' },
      { value: 'Family unity', label: 'Stay together during the journey', icon: 'heart' },
      { value: 'Career growth', label: 'Canadian work experience and income', icon: 'briefcase' },
      { value: 'Timing matters', label: 'Eligibility, status and expiry dates', icon: 'clock' },
    ],
    cards: [
      {
        title: 'Who may qualify?',
        icon: 'check',
        items: [
          'Spouses or common-law partners of eligible workers or students.',
          'Spouses connected to certain PR or temporary residence pathways.',
          'Applicants who can prove the relationship is genuine.',
          'Applicants who meet status and admissibility requirements.',
        ],
      },
      {
        title: 'Documents may include',
        icon: 'passport',
        items: [
          'Marriage certificate or proof of common-law relationship.',
          "Partner's status, study or work documents.",
          'Proof of employment, program or eligibility category.',
          'Identity, travel and supporting relationship documents.',
        ],
      },
      {
        title: 'Common concerns',
        icon: 'eye',
        items: [
          "Eligibility shifts with the partner's situation and program.",
          'Incomplete relationship proof.',
          'Timing issues when status is expiring.',
          'Documents that do not clearly support the category claimed.',
        ],
      },
      {
        title: 'How we help',
        icon: 'shield',
        body:
          "We review your relationship proof, your partner's status, the eligibility category, the timelines and the supporting documents before submission.",
      },
    ],
    process: [
      { title: 'Review', description: 'Check eligibility against the category.' },
      { title: 'Relationship proof', description: 'Organize the evidence.' },
      { title: 'Documents', description: 'Prepare the forms.' },
      { title: 'Submit', description: 'Apply online.' },
      { title: 'Processing', description: 'IRCC review.' },
      { title: 'Work', description: 'Start working if approved.' },
    ],
    help: {
      heading: 'Work while staying with your spouse',
      paragraphs: ['Book a consultation to review your spouse open work permit options and timing.'],
      disclaimer: DISCLAIMER,
    },
    related: [{ label: 'Spousal Sponsorship', href: '/services/spousal-sponsorship' }],
  },

  'vulnerable-open-work-permit': {
    category: 'Work Permits',
    meta: {
      title: 'Vulnerable Worker Open Work Permit Consultant',
      description:
        'Support for vulnerable worker open permit options, including eligibility review, safety-focused planning, and document guidance.',
    },
    hero: {
      eyebrow: 'Vulnerable Worker Open Work Permit',
      title: 'Leave an unsafe job.',
      titleAccent: 'Protect your status.',
      intro:
        'This temporary open work permit may help workers in Canada who are experiencing abuse, or are at risk of abuse, related to their job. We provide private, respectful guidance so you understand your options. If you are in immediate danger, call 9-1-1 or your local police.',
      image: IMG.work,
      imageAlt: 'Worker receiving confidential immigration support',
    },
    quickFacts: [
      { value: 'Protection', label: 'Leave an abusive employment situation', icon: 'shield' },
      { value: 'Open permit', label: 'May allow work for another employer', icon: 'bolt' },
      { value: 'Private', label: 'Handled with care and confidentiality', icon: 'eye' },
      { value: 'Next steps', label: 'Documents and process explained clearly', icon: 'route' },
    ],
    cards: [
      {
        title: 'What is this permit?',
        icon: 'shield',
        body:
          "Canada has a special open work permit for vulnerable workers who are victims of abuse, or at risk of abuse, in relation to their job in Canada. It exists to protect workers' rights and help them leave an abusive situation to find new work. If you need immediate help or are in danger, call 9-1-1 or your local police.",
      },
      {
        title: 'Who may be eligible?',
        icon: 'check',
        items: [
          'Workers currently in Canada.',
          'Workers experiencing abuse, or at risk of abuse, related to their job.',
          'Workers who need a way to leave an unsafe employer situation.',
          'Applicants who can provide information and documents supporting their situation.',
        ],
      },
      {
        title: 'Supporting information',
        icon: 'file',
        items: [
          'Details of the job situation and the employer relationship.',
          'Documents showing current status and work authorization.',
          'A written explanation of the abuse or the risk of abuse.',
          'Any available records, messages, reports or support letters.',
        ],
      },
      {
        title: 'How we help',
        icon: 'heart',
        items: [
          'Private case review and next-step guidance.',
          'Document checklist and application preparation support.',
          'A clear explanation of what the permit can and cannot do.',
          'Respectful support during a stressful and sensitive situation.',
        ],
      },
    ],
    process: [
      { title: 'Private review', description: 'We listen to your situation carefully.' },
      { title: 'Eligibility check', description: 'We review the criteria and your status.' },
      { title: 'Evidence planning', description: 'We identify useful supporting documents.' },
      { title: 'Application prep', description: 'We organize the forms and explanations.' },
      { title: 'Submit', description: 'Your application goes to IRCC.' },
      { title: 'Next steps', description: 'We explain what comes after submission.' },
    ],
    why: [
      { letter: 'A', title: 'Confidential support', body: 'Your situation is treated with privacy and care.' },
      { letter: 'B', title: 'Clear guidance', body: 'We explain options in plain language.' },
      { letter: 'C', title: 'Document help', body: 'We organize the strongest available evidence.' },
      { letter: 'D', title: 'Respectful process', body: 'No judgment, just practical support.' },
    ],
    help: {
      heading: 'Need to leave an unsafe work situation?',
      paragraphs: [
        'Book a private consultation and we will review your situation and explain the possible next steps. If you are in immediate danger, call 9-1-1 or your local police first.',
      ],
      disclaimer: DISCLAIMER,
    },
  },

  /* ------------------------------------------- SPOUSAL SPONSORSHIP (PR) */
  'spousal-sponsorship': {
    category: 'Permanent Residence',
    meta: {
      title: 'Spousal Sponsorship Consultant in Canada',
      description:
        'Spousal sponsorship guidance for married, common-law, and conjugal partners, including relationship evidence and application review.',
    },
    hero: {
      eyebrow: 'Spousal Sponsorship',
      title: 'Bring your partner home.',
      titleAccent: 'Build your life together.',
      intro:
        'Spousal sponsorship helps eligible Canadian citizens and permanent residents sponsor a spouse, common-law partner or conjugal partner for permanent residence.',
      image: IMG.family,
      imageAlt: 'Couple planning spousal sponsorship in Canada',
    },
    quickFacts: [
      { value: 'Family unity', label: 'For genuine couples', icon: 'heart' },
      { value: 'Inland or outland', label: 'Two very different processes', icon: 'route' },
      { value: 'Relationship proof', label: 'The heart of the application', icon: 'rings' },
      { value: 'Direct to PR', label: 'A family-class route to residence', icon: 'maple' },
    ],
    cards: [
      {
        title: 'Who can be sponsored?',
        icon: 'rings',
        items: [
          'Legally married spouses.',
          'Common-law partners who meet cohabitation requirements.',
          'Conjugal partners in specific circumstances.',
          'Partners who meet identity, medical, security and admissibility requirements.',
        ],
      },
      {
        title: 'Sponsor requirements',
        icon: 'check',
        items: [
          'Be a Canadian citizen or permanent resident.',
          'Meet age and residency-related requirements.',
          'Show the ability to support the sponsored partner.',
          'Meet sponsorship obligations and not be barred from sponsoring.',
        ],
      },
      {
        title: 'Documents may include',
        icon: 'passport',
        items: [
          'Marriage certificate or common-law evidence.',
          'Photos, travel history, communication records and family proof.',
          'Identity documents, status documents and civil records.',
          'Sponsor financial and employment details where needed.',
        ],
      },
      {
        title: 'Common concerns',
        icon: 'eye',
        items: [
          'Not enough relationship evidence.',
          'A long-distance relationship history.',
          'Previous refusals, previous marriages, or complex immigration history.',
          'Confusion between inland and outland applications.',
        ],
      },
    ],
    process: [
      { title: 'Assess eligibility', description: 'Review sponsor and applicant details.' },
      { title: 'Plan evidence', description: 'Build a relationship proof checklist.' },
      { title: 'Prepare forms', description: 'Organize forms and documents.' },
      { title: 'Submit package', description: 'File the application to IRCC.' },
      { title: 'IRCC review', description: 'Respond to updates or requests.' },
      { title: 'PR decision', description: 'Move forward after approval.' },
    ],
    why: [
      { letter: 'A', title: 'Relationship strategy', body: 'Clear proof planning for your story.' },
      { letter: 'B', title: 'Personal support', body: 'Guidance for sensitive family matters.' },
      { letter: 'C', title: 'Document review', body: 'Reduce missing forms and unclear evidence.' },
      { letter: 'D', title: 'Transparent process', body: 'Know each step before submission.' },
    ],
    faqs: [
      {
        question: 'What is the difference between inland and outland spousal sponsorship?',
        answer:
          'Inland generally applies when the sponsored partner is already in Canada, while outland is processed through visa offices outside Canada. They differ in processing, travel flexibility and appeal rights, so the choice should be deliberate.',
      },
      {
        question: 'What relationship proof is needed?',
        answer:
          'Applications typically include marriage or common-law evidence, photos, communication history and supporting civil documents. Quality and consistency matter far more than volume.',
      },
      {
        question: 'Can previous refusals affect sponsorship?',
        answer:
          'Previous refusals can affect the review, but a clear explanation and stronger evidence can improve the application package.',
      },
    ],
    help: {
      heading: 'Ready to sponsor your spouse or partner?',
      paragraphs: [
        'Book a consultation to review your relationship proof, eligibility and the best filing approach for your situation.',
      ],
      disclaimer: DISCLAIMER,
    },
    related: [
      { label: 'Family Sponsorship', href: '/services/family-sponsorship' },
      { label: 'Spouse Open Work Permit', href: '/services/spouse-open-work-permit' },
    ],
  },

  /* --------------------------------------------------- SUPER VISA GUIDES */
  'super-visa-eligibility-checklist': {
    category: 'Super Visa Guides',
    meta: {
      title: 'Super Visa Eligibility Checklist Canada',
      description:
        'Super Visa eligibility checklist: who can apply, host income and relationship proof, invitation letter requirements, and common mistakes to avoid.',
      updated: 'June 2026',
    },
    hero: {
      eyebrow: 'Super Visa Eligibility Checklist',
      title: 'Check every box',
      titleAccent: 'before you apply.',
      intro:
        'Use this checklist before preparing your Super Visa application to avoid missing core requirements and to reduce delays.',
      image: IMG.family,
      imageAlt: 'Family reviewing Super Visa requirements together',
    },
    quickFacts: [
      { value: 'Applicant', label: 'Parent or grandparent, genuine visit', icon: 'family' },
      { value: 'Host', label: 'Status, invitation, income', icon: 'building' },
      { value: 'Insurance', label: 'A qualifying issued policy', icon: 'shield' },
      { value: 'Consistency', label: 'Everything must line up', icon: 'check' },
    ],
    cards: [
      {
        title: 'Who can apply',
        icon: 'family',
        items: [
          'Parents or grandparents of a Canadian citizen or permanent resident.',
          'Applicants with a genuine temporary visit purpose.',
          'Applicants who meet medical and admissibility standards.',
        ],
      },
      {
        title: 'Canadian host requirements',
        icon: 'building',
        items: [
          'Proof of status in Canada (citizenship or permanent residence).',
          'Invitation letter with stay details and support intent.',
          'Income and financial support documents meeting the required threshold.',
        ],
      },
      {
        title: 'Applicant document checklist',
        icon: 'passport',
        items: [
          'Valid passport and travel history documents.',
          'Relationship proof connecting applicant and host.',
          'Medical insurance matching current Super Visa requirements.',
          'Home ties and a visit-purpose explanation.',
        ],
      },
      {
        title: 'Fix these before submitting',
        icon: 'eye',
        items: [
          'Inconsistent information across forms and the invitation letter.',
          'Weak financial support evidence from the host.',
          'Insurance details that do not match policy requirements.',
          'Missing relationship proof or an unclear visit plan.',
        ],
      },
    ],
    help: {
      heading: 'Need help validating your checklist?',
      paragraphs: [
        'Book a Super Visa consultation and we will review your profile, host documents and file readiness before submission.',
      ],
      disclaimer: DISCLAIMER,
    },
    related: [{ label: 'Super Visa', href: '/services/super-visa' }],
  },

  'super-visa-income-requirement': {
    category: 'Super Visa Guides',
    meta: {
      title: 'Super Visa Income Requirement and Family Size',
      description:
        'Understand the Super Visa minimum necessary income requirement, family-size calculation, co-signers, and documents used to prove host income.',
      updated: 'June 2026',
    },
    hero: {
      eyebrow: 'Super Visa Income Requirement',
      title: 'Host income',
      titleAccent: 'and family size.',
      intro:
        'How host income, family size, co-signing and supporting financial records affect a Super Visa application \u2014 and the calculation errors that sink files.',
      image: IMG.insurance,
      imageAlt: 'Reviewing income documents for a Super Visa application',
    },
    quickFacts: [
      { value: 'LICO-based', label: 'Minimum necessary income applies', icon: 'wallet' },
      { value: 'Family size', label: 'More people, higher threshold', icon: 'family' },
      { value: 'Spouse only', label: 'Only a spouse or partner may co-sign', icon: 'rings' },
      { value: 'Check the table', label: 'Thresholds change \u2014 verify before filing', icon: 'bell' },
    ],
    prose: [
      {
        heading: 'What is the income requirement?',
        paragraphs: [
          "The child or grandchild hosting the applicant must meet or exceed IRCC's minimum necessary income for the applicable family size. Thresholds can change, so the current IRCC table should be checked immediately before applying.",
        ],
      },
      {
        heading: 'Who counts in family size?',
        paragraphs: [
          'The calculation may include the host, their spouse or common-law partner, dependent children, the invited parent or grandparent, other people invited at the same time, and certain people covered by previous sponsorship or Super Visa commitments.',
          "The host's spouse or common-law partner may co-sign if eligible and may provide income evidence. Other relatives, including siblings, cannot co-sign simply to help meet the threshold.",
        ],
      },
      {
        heading: 'Recently increased or variable income',
        paragraphs: [
          'Current employment evidence may help explain a recent increase, but IRCC assesses the complete record. Variable, business, rental or investment income should be clearly documented and consistent with tax filings.',
        ],
      },
    ],
    cards: [
      {
        title: 'Income documents',
        icon: 'file',
        items: [
          'Most recent Notice of Assessment.',
          'T4 or T1 records.',
          'Employment letter and recent pay statements.',
          'Bank statements showing income deposits.',
          'Business, tax and accounting documents for self-employment.',
          'Evidence of pension, rental or investment income when relied upon.',
        ],
      },
      {
        title: 'Common calculation errors',
        icon: 'eye',
        items: [
          'Omitting dependent children from family size.',
          'Forgetting a previous undertaking.',
          'Counting an ineligible co-signer.',
          'Relying on gross business revenue instead of personal income.',
          'Using an outdated threshold.',
        ],
      },
    ],
    help: {
      heading: 'Get the income calculation checked',
      paragraphs: [
        "We review family size and organize the host's income evidence before filing. Verify the current IRCC threshold \u2014 it moves.",
      ],
      disclaimer: DISCLAIMER,
    },
    related: [{ label: 'Super Visa', href: '/services/super-visa' }],
  },

  'super-visa-invitation-letter': {
    category: 'Super Visa Guides',
    meta: {
      title: 'Super Visa Invitation Letter Guide',
      description:
        'What to include in a Super Visa invitation letter: host details, family size, financial support, visit purpose, accommodation, and supporting documents.',
      updated: 'June 2026',
    },
    hero: {
      eyebrow: 'Super Visa Invitation Letter',
      title: 'The letter that ties',
      titleAccent: 'the whole file together.',
      intro:
        "Prepare an invitation that connects the host, the applicant, the financial commitment, family size, accommodation and the purpose of travel \u2014 and agrees with every other document.",
      image: IMG.family,
      imageAlt: 'Writing a Super Visa invitation letter',
    },
    quickFacts: [
      { value: 'Signed', label: 'By the host and any co-signer', icon: 'badge' },
      { value: 'Specific', label: 'Dates, address, support, family size', icon: 'file' },
      { value: 'Consistent', label: 'Must match forms and income proof', icon: 'check' },
      { value: 'Temporary', label: 'A visit, not a relocation', icon: 'plane' },
    ],
    prose: [
      {
        heading: 'Why the invitation letter matters',
        paragraphs: [
          "The signed letter explains the family relationship, the visit plan and the host's promise of financial support. It should agree with the forms, the insurance, the income documents and the applicant's own explanation. When these conflict, the officer notices.",
        ],
      },
    ],
    cards: [
      {
        title: 'Required host information',
        icon: 'building',
        items: [
          'Full name, date of birth, Canadian address, phone and email.',
          'Canadian citizenship, permanent residence, or registered Indian status.',
          'Employment and financial-support information.',
          'Signature of the host and any eligible co-signer.',
        ],
      },
      {
        title: 'Applicant and visit details',
        icon: 'plane',
        items: [
          "Applicant's full name and relationship to the host.",
          'Purpose and expected duration of the visit.',
          'Proposed travel dates and accommodation.',
          'Who will pay for travel and living expenses.',
        ],
      },
      {
        title: 'Family size and income',
        icon: 'wallet',
        body:
          "The letter must identify everyone included in the host's family-size calculation \u2014 names and dates of birth \u2014 and be supported by evidence that the host meets the minimum necessary income.",
      },
      {
        title: 'Common mistakes',
        icon: 'eye',
        items: [
          'Generic promises with no specifics.',
          'Missing family members from the size calculation.',
          'Inconsistent dates across documents.',
          'Unclear accommodation arrangements.',
          'Unsupported income statements.',
          'Language suggesting permanent relocation rather than a temporary visit.',
        ],
      },
    ],
    help: {
      heading: 'Have the letter reviewed',
      paragraphs: [
        'We check the invitation letter for completeness and for consistency with the rest of the application \u2014 which is where most letters fail.',
      ],
      disclaimer: DISCLAIMER,
    },
    related: [{ label: 'Super Visa', href: '/services/super-visa' }],
  },

  'super-visa-medical-exam': {
    category: 'Super Visa Guides',
    meta: {
      title: 'Super Visa Medical Exam Guide',
      description:
        'The Super Visa immigration medical exam: panel physicians, documents, additional tests, medical history, and the proof IRCC requires.',
      updated: 'June 2026',
    },
    hero: {
      eyebrow: 'Super Visa Medical Exam',
      title: 'The medical exam,',
      titleAccent: 'without the delays.',
      intro:
        'Who can perform the exam, what to bring, what may happen afterward, and how to document completion. The exam is separate from the insurance requirement \u2014 you need both.',
      image: IMG.insurance,
      imageAlt: 'Medical examination room',
    },
    quickFacts: [
      { value: 'Required', label: 'Every Super Visa applicant', icon: 'check' },
      { value: 'Panel physician', label: 'Only an IRCC-approved doctor', icon: 'badge' },
      { value: 'Separate', label: 'Not the same as insurance', icon: 'shield' },
      { value: 'Be truthful', label: 'Disclose your full medical history', icon: 'eye' },
    ],
    prose: [
      {
        heading: 'Use an approved panel physician',
        paragraphs: [
          'Only a physician approved by IRCC can complete the immigration medical exam. Your family doctor cannot perform it unless they are also listed as a panel physician \u2014 this is the single most common cause of a wasted appointment.',
          'The panel physician follows IRCC instructions and may conduct a medical history, physical examination, laboratory tests and diagnostic imaging. Age and medical history can affect which tests are required.',
        ],
      },
      {
        heading: 'Existing medical conditions',
        paragraphs: [
          'Diabetes, high blood pressure, previous surgery or another diagnosis does not automatically result in refusal. Applicants must answer truthfully and provide any requested specialist reports or additional tests.',
        ],
      },
      {
        heading: 'After the appointment',
        paragraphs: [
          'The clinic submits results to IRCC and gives the applicant proof of completion. IRCC may request further testing. The panel physician does not make the immigration decision.',
        ],
      },
    ],
    cards: [
      {
        title: 'What to bring',
        icon: 'passport',
        items: [
          'Passport or accepted identity document.',
          'Eyeglasses or contact lenses.',
          'Current medication list and relevant medical reports.',
          'IRCC medical instructions, if issued.',
          'Required photographs when the clinic does not use eMedical.',
        ],
      },
      {
        title: 'Avoid delays',
        icon: 'clock',
        items: [
          'Book with an approved panel physician \u2014 verify first.',
          'Bring complete medical records.',
          'Attend follow-up appointments promptly.',
          'Ensure identity details match the application exactly.',
        ],
      },
    ],
    help: {
      heading: 'Plan the medical exam properly',
      paragraphs: ['We help sequence the medical exam, the insurance and the filing so nothing expires or stalls.'],
      disclaimer: DISCLAIMER,
    },
    related: [{ label: 'Super Visa', href: '/services/super-visa' }],
  },

  'super-visa-insurance-guide': {
    category: 'Super Visa Guides',
    meta: {
      title: 'Super Visa Insurance Requirements Canada',
      description:
        'What coverage IRCC requires, which insurers may issue a qualifying policy, how instalments work, and what proof to provide with the application and at the border.',
      updated: 'June 2026',
    },
    hero: {
      eyebrow: 'Super Visa Insurance',
      title: 'Insurance requirements,',
      titleAccent: 'in full.',
      intro:
        'Every Super Visa applicant must show proof of qualifying private health insurance. This is where more files fail than almost anywhere else \u2014 here is exactly what the policy must do.',
      image: IMG.insurance,
      imageAlt: 'Super Visa insurance policy documents',
    },
    quickFacts: [
      { value: '$100,000', label: 'Minimum emergency coverage (CAD)', icon: 'shield' },
      { value: '1 year', label: 'Minimum validity from date of entry', icon: 'clock' },
      { value: 'Issued policy', label: 'A quote is never accepted', icon: 'file' },
      { value: 'Eligible insurer', label: 'Canadian, or OSFI-authorized', icon: 'badge' },
    ],
    prose: [
      {
        heading: 'Which insurers are eligible?',
        paragraphs: [
          "A policy may be issued by a Canadian insurance company. A company outside Canada may also qualify, but only when it meets IRCC's conditions.",
          "A foreign insurer must be authorized by the Office of the Superintendent of Financial Institutions (OSFI) under the Insurance Companies Act to provide accident and sickness insurance, appear on OSFI's public list of federally regulated financial institutions, and issue the policy while carrying on insurance business in Canada. The policy must state that it was issued while the company was doing insurance business in Canada.",
          'Brokers and claims administrators are not insurers. Arranging or administering coverage does not make a company eligible to issue it.',
        ],
      },
      {
        heading: 'Pre-existing conditions and stability periods',
        paragraphs: [
          'Many policies cover certain pre-existing conditions only when they have remained stable for a specified period before coverage begins. Stability may require no new symptoms, diagnosis, treatment, medication change, dosage adjustment, test or referral during that period.',
          'The definition varies by insurer, plan, age and condition. Answer the medical questions truthfully and read the definition in the actual policy \u2014 not the marketing page.',
        ],
      },
      {
        heading: 'Deductibles, effective dates and renewals',
        paragraphs: [
          'A higher deductible lowers the premium but increases out-of-pocket cost. Confirm whether it applies once per policy, once per condition, or to every claim, and in which currency.',
          'Coverage should begin on the planned date of entry \u2014 a visitor should never arrive before coverage starts. If insurance will expire before the visitor leaves Canada, renew it before the existing policy ends. A renewal may carry different premiums, stability rules or benefits.',
        ],
      },
    ],
    cards: [
      {
        title: 'Requirements checklist',
        icon: 'check',
        items: [
          'Identifies the insurance company that issued or underwrote the policy.',
          'Valid for at least one year from the date of entry.',
          'Paid in full, or through instalments with a deposit.',
          'Covers health care, hospitalization and repatriation.',
          'At least CAD $100,000 in emergency coverage.',
          'Valid for each entry to Canada, and available for a border officer to review.',
        ],
      },
      {
        title: 'What a policy usually covers',
        icon: 'heart',
        items: [
          'Emergency physician and hospital services.',
          'Ambulance transportation, diagnostic testing and emergency surgery.',
          'Medication required during a covered emergency.',
          'Limited emergency dental care.',
          'Medically necessary return to the home country.',
          'Repatriation of remains, subject to the policy.',
        ],
      },
      {
        title: 'Proof to submit and carry',
        icon: 'passport',
        items: [
          "The insured person's correct legal name.",
          "The insurer or underwriter's name.",
          'Policy number, effective date and expiry date.',
          'The coverage amount and the required benefits.',
          'Payment in full, or an accepted instalment arrangement.',
          'For a foreign insurer, the required Canadian-business statement.',
        ],
      },
      {
        title: 'Common insurance mistakes',
        icon: 'eye',
        items: [
          'Submitting a quotation instead of an issued policy.',
          'Buying less than CAD $100,000 of emergency coverage.',
          'Selecting a term shorter than one year from entry.',
          "Using a company that does not meet IRCC's insurer rules.",
          "Omitting the required statement from a foreign insurer's policy.",
          'Letting names, dates or coverage details conflict with the application.',
          'Ignoring pre-existing-condition stability provisions.',
          'Letting coverage expire while the visitor is still in Canada.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Super Visa insurance mandatory?',
        answer: 'Yes. Proof of qualifying private medical insurance is required for every applicant.',
      },
      {
        question: 'Is an insurance quote enough?',
        answer: 'No. IRCC does not accept quotes. You need an issued policy or insurance certificate.',
      },
      {
        question: 'Can the policy be paid monthly?',
        answer:
          'IRCC accepts a policy paid in full or through instalments with a deposit. The issued documents should clearly show the payment arrangement and confirm the policy is in force.',
      },
      {
        question: 'Can I use an insurer from outside Canada?',
        answer:
          "Only if it meets IRCC's conditions, including OSFI authorization and issuing the policy while carrying on insurance business in Canada.",
      },
      {
        question: 'Do refunds apply after a refusal?',
        answer:
          'Refund eligibility is controlled by the policy. Some insurers refund after a visa refusal or cancellation before coverage begins, but documentation and administrative fees may apply.',
      },
    ],
    help: {
      heading: 'Have your insurance documents checked',
      paragraphs: [
        'We verify that the policy actually satisfies IRCC \u2014 insurer eligibility, coverage, dates, names \u2014 before the application is filed.',
      ],
      disclaimer: DISCLAIMER,
    },
    related: [
      { label: 'Super Visa', href: '/services/super-visa' },
      { label: 'Monthly Payment Insurance', href: '/services/super-visa-insurance-monthly' },
    ],
  },

  'super-visa-extension': {
    category: 'Super Visa Guides',
    meta: {
      title: 'Super Visa Extension Guide Canada',
      description:
        'How Super Visa visitors can apply to extend their stay: when to apply, visitor records, maintained status, insurance renewal, and required documents.',
      updated: 'June 2026',
    },
    hero: {
      eyebrow: 'Super Visa Extension',
      title: 'Stay in Canada',
      titleAccent: 'a little longer.',
      intro:
        'Visitor records, filing before status expires, continued insurance, supporting documents, and what happens if status has already lapsed.',
      image: IMG.city,
      imageAlt: 'Visitor extending their stay in Canada',
    },
    quickFacts: [
      { value: 'Visitor record', label: 'Not a new visa \u2014 a new period of stay', icon: 'file' },
      { value: 'Apply early', label: 'Before the current stay expires', icon: 'bell' },
      { value: 'Maintained status', label: 'Stay while IRCC decides', icon: 'clock' },
      { value: 'Keep insurance', label: 'Renew before the policy lapses', icon: 'shield' },
    ],
    prose: [
      {
        heading: 'Can a Super Visa stay be extended?',
        paragraphs: [
          'A Super Visa holder may apply from inside Canada to extend temporary resident status. If approved, IRCC issues a visitor record showing the new authorized period of stay \u2014 it is not a new visa.',
          'Apply before the current authorized stay expires. Filing early provides time to collect evidence and reduces the risk created by technical or payment problems near the deadline.',
        ],
      },
      {
        heading: 'Status while waiting',
        paragraphs: [
          'A person who submits an eligible extension application before status expires may remain in Canada while IRCC decides. Travel can affect the practical benefit of maintained status, so get advice before leaving Canada.',
        ],
      },
      {
        heading: 'If status has already expired',
        paragraphs: [
          'Restoration may be possible within the applicable legal period, but it is not automatic. Act promptly, and do not assume you hold valid status while restoration is pending.',
        ],
      },
    ],
    cards: [
      {
        title: 'Documents commonly used',
        icon: 'passport',
        items: [
          'Passport and current immigration documents.',
          'An explanation of the requested extension.',
          'Updated financial support and accommodation evidence.',
          'Relationship and host-status documents.',
          'Evidence of continued private health insurance.',
          'Travel plans and evidence supporting temporary intent.',
        ],
      },
      {
        title: 'Insurance during the extension',
        icon: 'shield',
        body:
          'IRCC advises Super Visa visitors to maintain coverage throughout their stay. Arrange renewal before the existing policy expires, and review whether the terms or stability requirements have changed.',
      },
    ],
    help: {
      heading: 'Request an extension review',
      paragraphs: [
        'We review the deadline, the status history, the insurance, the finances, the visit purpose and the supporting documents.',
      ],
      disclaimer: DISCLAIMER,
    },
    related: [{ label: 'Super Visa', href: '/services/super-visa' }],
  },

  'super-visa-refusal-reasons': {
    category: 'Super Visa Guides',
    meta: {
      title: 'Top Super Visa Refusal Reasons and Solutions',
      description:
        'Top Super Visa refusal reasons in Canada and practical solutions: host income gaps, weak relationship proof, insurance issues, and reapplication strategy.',
      updated: 'June 2026',
    },
    hero: {
      eyebrow: 'Super Visa Refusals',
      title: 'Refused?',
      titleAccent: "That is rarely the end.",
      intro:
        'A refusal does not always mean ineligibility. A strong reapplication usually starts with understanding the exact evidence gaps in the previous file \u2014 not resubmitting it.',
      image: IMG.insurance,
      imageAlt: 'Reviewing a refusal letter',
    },
    quickFacts: [
      { value: 'Income gaps', label: 'The most common refusal driver', icon: 'wallet' },
      { value: 'Relationship', label: 'Names and dates must connect', icon: 'family' },
      { value: 'Insurance', label: 'Policy mismatch sinks files', icon: 'shield' },
      { value: 'Targeted fix', label: 'Upgrade evidence, do not resubmit', icon: 'target' },
    ],
    cards: [
      {
        title: 'Refusal reason: host income concerns',
        icon: 'wallet',
        body:
          'Officers may refuse when income evidence is incomplete, inconsistent, or unclear against the host support requirement.',
        items: [
          'Use organized proof across tax and employment records.',
          'Align host support statements with the submitted documents.',
        ],
      },
      {
        title: 'Refusal reason: weak relationship evidence',
        icon: 'family',
        body:
          'Relationship records must clearly connect applicant and host, with consistent names, dates and supporting records.',
        items: [
          'Provide complete relationship documentation.',
          'Clarify family links in the invitation and support letters.',
        ],
      },
      {
        title: 'Refusal reason: insurance mismatch',
        icon: 'shield',
        body: 'A policy mismatch or incomplete insurance proof reduces the strength of the whole application.',
        items: [
          'Verify coverage details before submission.',
          'Keep policy data aligned with the applicant profile and trip plan.',
        ],
      },
      {
        title: 'A reapplication strategy that works',
        icon: 'target',
        items: [
          'Review the refusal notes and identify each weak point.',
          'Prepare targeted evidence upgrades instead of reusing old documents.',
          'Submit a consistent, well-structured file with clear supporting explanations.',
        ],
      },
    ],
    help: {
      heading: 'Need a refusal recovery plan?',
      paragraphs: [
        'We review the previous file, the refusal concerns and the reapplication options, then rebuild the application around what actually went wrong.',
      ],
      disclaimer: DISCLAIMER,
    },
    related: [{ label: 'Super Visa', href: '/services/super-visa' }],
  },

  'super-visa-vs-visitor-visa': {
    category: 'Super Visa Guides',
    meta: {
      title: 'Super Visa vs Visitor Visa Canada',
      description:
        'Compare the Canada Super Visa and Visitor Visa by eligibility, stay length, insurance, medical exams, host income, family relationship, and purpose.',
      updated: 'June 2026',
    },
    hero: {
      eyebrow: 'Super Visa vs Visitor Visa',
      title: 'Which one',
      titleAccent: 'actually fits?',
      intro:
        'Compare the two temporary-resident options by family relationship, intended stay, insurance, medical exam, income and application requirements. The more demanding application is not automatically the better one.',
      image: IMG.city,
      imageAlt: 'Traveller comparing visa options',
    },
    quickFacts: [
      { value: '6 months', label: 'Visitor visa: typical stay', icon: 'plane' },
      { value: '5 years', label: 'Super Visa: stay per entry', icon: 'clock' },
      { value: 'Parents only', label: 'Super Visa is relationship-restricted', icon: 'family' },
      { value: 'No guarantee', label: 'A border officer decides admission', icon: 'shield' },
    ],
    prose: [
      {
        heading: 'What is the main difference?',
        paragraphs: [
          'A Visitor Visa is available to many kinds of temporary visitors and is usually suited to shorter trips. A Super Visa is specifically for eligible parents and grandparents, and can permit stays of up to five years at a time \u2014 but it carries mandatory insurance, a medical exam and a host income threshold.',
        ],
      },
      {
        heading: 'Does either option guarantee entry?',
        paragraphs: [
          'No. A visa permits travel to a Canadian port of entry. A border services officer makes the admission decision and determines the authorized period of stay.',
        ],
      },
    ],
    comparison: {
      heading: 'Side-by-side comparison',
      rows: [
        { feature: 'Applicants', visitor: 'General visitors', superVisa: 'Eligible parents and grandparents' },
        { feature: 'Typical stay', visitor: 'Usually up to six months', superVisa: 'Up to five years at a time' },
        { feature: 'Host income', visitor: 'No fixed threshold', superVisa: 'Minimum necessary income applies' },
        { feature: 'Medical insurance', visitor: 'Not always mandatory', superVisa: 'Qualifying policy required' },
        { feature: 'Medical exam', visitor: 'Depends on circumstances', superVisa: 'Required' },
        { feature: 'Dependants', visitor: 'Apply individually', superVisa: 'Cannot be included' },
      ],
    },
    cards: [
      {
        title: 'When a visitor visa may fit',
        icon: 'plane',
        body:
          'Tourism, business visits, family events, or visits expected to last six months or less. Applicants still need to demonstrate admissibility, finances, purpose and temporary intent.',
      },
      {
        title: 'When a Super Visa may fit',
        icon: 'family',
        body:
          'An eligible parent or grandparent planning extended family time, where the host meets the income requirement and the applicant can obtain qualifying insurance and complete the medical exam.',
      },
    ],
    help: {
      heading: 'Request a comparison review',
      paragraphs: [
        'We compare both options against your family circumstances and the visit you actually want \u2014 then recommend the one most likely to be approved.',
      ],
      disclaimer: DISCLAIMER,
    },
    related: [
      { label: 'Super Visa', href: '/services/super-visa' },
      { label: 'Visitor Visa', href: '/services/visitor-visa' },
    ],
  },

};

export const serviceSlugs = Object.keys(servicePages);

// Category -> breadcrumb entry. The href is where "Home > [Category]" points.
// Categories map to their nearest landing surface (the homepage program tabs
// or the all-services directory).
export const categoryBreadcrumb = {
  'Work Permits': { label: 'Work', href: '/#programs' },
  'Permanent Residence': { label: 'Permanent Residence', href: '/#permanent-residence' },
  'Business Visa': { label: 'Business', href: '/#business-visa' },
  'Super Visa Guides': { label: 'Super Visa', href: '/services/super-visa' },
  'Additional Services': { label: 'Additional Services', href: '/#additional-services' },
};

export const servicesByCategory = serviceSlugs.reduce((acc, slug) => {
  const { category } = servicePages[slug];
  if (!acc[category]) acc[category] = [];
  acc[category].push({ slug, label: servicePages[slug].hero.eyebrow, href: `/services/${slug}` });
  return acc;
  
}, {});
export default servicePages;
