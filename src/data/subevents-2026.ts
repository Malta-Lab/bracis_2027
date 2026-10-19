/*
  SUB-EVENTOS / CALLS — BRACIS 2026
  Para criar outro sub-evento, duplique um objeto abaixo e altere:
  slug, sigla, subtítulo, data/local e conteúdo.
  A rota /2026/events/[slug]/ é gerada automaticamente: não é necessário duplicar páginas.
*/
export const subevents2026 = [
  {
    slug: 'bracis',
    acronym: 'BRACIS',
    subtitle: '36th Brazilian Conference on Intelligent Systems',
    date: 'October 00, 2026', // SUBSTITUIR pela data oficial do sub-evento.
    location: 'Room / venue placeholder', // Ideal: até 70 caracteres.
    about: 'Replace with a concise presentation of the event, its goals, target audience and relationship with BRACIS. Recommended length: 120–220 words.',
    callForPapers: 'Replace with the official call text. Summarize scope, eligibility and the type of work expected before presenting detailed submission instructions.',
    submission: 'Replace with format, page limit, language, anonymization rules, templates, submission platform and any mandatory author information.',
    decisionProcess: 'Explain evaluation criteria, review stages, conflicts of interest, notification process and any rebuttal or presentation requirements.',
    publication: 'Explain how selected works will be published, presented or recognized. Include proceedings/indexing information only when officially confirmed.',
    topics: ['Topic 1','Topic 2','Topic 3','Topic 4','Topic 5','Topic 6','Topic 7','Topic 8','Topic 9','Topic 10'],
    dates: [
      { date: 'Month 00, 2026', title: 'Submission deadline', note: 'Timezone / AoE placeholder' },
      { date: 'Month 00, 2026', title: 'Decision notification', note: 'Date placeholder' },
      { date: 'Month 00, 2026', title: 'Camera-ready / final version', note: 'Date placeholder' },
      { date: 'Month 00, 2026', title: 'Presentation at BRACIS', note: 'Room / time placeholder' },
    ],
    chairs: [
      { name: 'Chair Name 1', institution: 'Institution / University' },
      { name: 'Chair Name 2', institution: 'Institution / University' },
      { name: 'Chair Name 3', institution: 'Institution / University' },
    ],
    contactEmail: 'event-email@example.org',
  },
  {
    slug: 'sub-event-2',
    acronym: 'EVENT 2',
    subtitle: 'Replace with the full official name or explanatory subtitle of this sub-event',
    date: 'October 00, 2026',
    location: 'Room / venue placeholder',
    about: 'Replace with the event introduction. Recommended length: 120–220 words.',
    callForPapers: 'Replace with the official Call for Papers introduction and scope.',
    submission: 'Replace with submission rules and platform information.',
    decisionProcess: 'Replace with review and decision process information.',
    publication: 'Replace with publication and selected works information.',
    topics: ['Topic 1','Topic 2','Topic 3','Topic 4','Topic 5','Topic 6'],
    dates: [
      { date: 'Month 00, 2026', title: 'Submission deadline', note: 'Timezone placeholder' },
      { date: 'Month 00, 2026', title: 'Notification', note: 'Date placeholder' },
      { date: 'Month 00, 2026', title: 'Final version', note: 'Date placeholder' },
    ],
    chairs: [
      { name: 'Chair Name 1', institution: 'Institution / University' },
      { name: 'Chair Name 2', institution: 'Institution / University' },
    ],
    contactEmail: 'event2@example.org',
  },
  {
    slug: 'ctdiac',
    acronym: 'CTDIAC',
    subtitle: '15th edition of the Thesis and Dissertation Contest in Artificial and Computational Intelligence',
    date: 'October 00, 2026', // SUBSTITUIR pela data oficial do sub-evento.
    location: 'Room / venue placeholder', // Ideal: até 70 caracteres.
    about: 'Replace with a concise presentation of the event, its goals, target audience and relationship with BRACIS. Recommended length: 120–220 words.',
    callForPapers: 'Replace with the official call text. Summarize scope, eligibility and the type of work expected before presenting detailed submission instructions.',
    submission: 'Replace with format, page limit, language, anonymization rules, templates, submission platform and any mandatory author information.',
    decisionProcess: 'Explain evaluation criteria, review stages, conflicts of interest, notification process and any rebuttal or presentation requirements.',
    publication: 'Explain how selected works will be published, presented or recognized. Include proceedings/indexing information only when officially confirmed.',
    topics: ['Topic 1','Topic 2','Topic 3','Topic 4','Topic 5','Topic 6','Topic 7','Topic 8','Topic 9','Topic 10'],
    dates: [
      { date: 'Month 00, 2026', title: 'Submission deadline', note: 'Timezone / AoE placeholder' },
      { date: 'Month 00, 2026', title: 'Decision notification', note: 'Date placeholder' },
      { date: 'Month 00, 2026', title: 'Camera-ready / final version', note: 'Date placeholder' },
      { date: 'Month 00, 2026', title: 'Presentation at BRACIS', note: 'Room / time placeholder' },
    ],
    chairs: [
      { name: 'Chair Name 1', institution: 'Institution / University' },
      { name: 'Chair Name 2', institution: 'Institution / University' },
      { name: 'Chair Name 3', institution: 'Institution / University' },
    ],
    contactEmail: 'event-email@example.org',
  },
  {
    slug: 'sub-event-2',
    acronym: 'EVENT 2',
    subtitle: 'Replace with the full official name or explanatory subtitle of this sub-event',
    date: 'October 00, 2026',
    location: 'Room / venue placeholder',
    about: 'Replace with the event introduction. Recommended length: 120–220 words.',
    callForPapers: 'Replace with the official Call for Papers introduction and scope.',
    submission: 'Replace with submission rules and platform information.',
    decisionProcess: 'Replace with review and decision process information.',
    publication: 'Replace with publication and selected works information.',
    topics: ['Topic 1','Topic 2','Topic 3','Topic 4','Topic 5','Topic 6'],
    dates: [
      { date: 'Month 00, 2026', title: 'Submission deadline', note: 'Timezone placeholder' },
      { date: 'Month 00, 2026', title: 'Notification', note: 'Date placeholder' },
      { date: 'Month 00, 2026', title: 'Final version', note: 'Date placeholder' },
    ],
    chairs: [
      { name: 'Chair Name 1', institution: 'Institution / University' },
      { name: 'Chair Name 2', institution: 'Institution / University' },
    ],
    contactEmail: 'event2@example.org',
  },
  {
    slug: 'sub-event-3',
    acronym: 'EVENT 3',
    subtitle: 'Replace with the full official name or explanatory subtitle of this sub-event',
    date: 'October 00, 2026',
    location: 'Room / venue placeholder',
    about: 'Replace with the event introduction. Recommended length: 120–220 words.',
    callForPapers: 'Replace with the official Call for Papers introduction and scope.',
    submission: 'Replace with submission rules and platform information.',
    decisionProcess: 'Replace with review and decision process information.',
    publication: 'Replace with publication and selected works information.',
    topics: ['Topic 1','Topic 2','Topic 3','Topic 4','Topic 5','Topic 6'],
    dates: [
      { date: 'Month 00, 2026', title: 'Submission deadline', note: 'Timezone placeholder' },
      { date: 'Month 00, 2026', title: 'Notification', note: 'Date placeholder' },
      { date: 'Month 00, 2026', title: 'Final version', note: 'Date placeholder' },
    ],
    chairs: [
      { name: 'Chair Name 1', institution: 'Institution / University' },
      { name: 'Chair Name 2', institution: 'Institution / University' },
    ],
    contactEmail: 'event3@example.org',
  },
];
