import { subevents2026 } from './subevents-2026';

export const edition2026 = {
  year: '2026',
  editionNumber: '36',
  conferenceName: '36th Brazilian Conference on Intelligent Systems',
  city: 'Cuiabá',
  state: 'MT',
  country: 'Brazil',
  dates: 'October 19–22, 2026',
  venue: 'Centro de Eventos do UniSENAI',

  /* VENUE — usado na página Attending.
     Troque endereço, texto, foto e mapa a cada edição.
     Mapa: o formato q=...&output=embed do Google Maps dispensa API key para este uso simples. */
  venueAddress: 'Avenida XV de Novembro, 303, Porto — Cuiabá, MT',
  venueDescription: 'Replace with a short description of the venue, accessibility, main facilities and why it is convenient for conference attendees. Recommended: 60–120 words.',
  venuePhoto: '/assets/2026/venue-placeholder.svg',
  mapEmbedUrl: 'https://www.google.com/maps?q=Centro%20de%20Eventos%20do%20UniSENAI%20Cuiaba&output=embed',

  /* NOVA EDIÇÃO — COR DE DESTAQUE
     Usada em CTAs, links ativos, ícones e pequenos detalhes de interface.
     Ela NÃO precisa ser igual às cores do degradê do banner. */
  accentColor: '#fd5745',

  /* NOVA EDIÇÃO — DEGRADÊ DO BANNER
     O banner usa APENAS DUAS cores para manter consistência entre as edições.
     O padrão abaixo é neutro (cinzas), mas cada organização pode personalizá-lo.
     Exemplos: petróleo #073642 → #168f82 | roxo #24143c → #7548a8. */
  heroGradientStart: '#fd5745',
  heroGradientEnd: '#00b3ce',

  /* LOGO ANUAL
     SVG é preferível. Para PNG: fundo transparente, 1600×700 px recomendado,
     mínimo 1200 px de largura e idealmente até ~700 KB. */
  editionLogo: '/assets/2026/propostas-logo-bracis-fortaleza.png',
  editionLogoAlt: 'BRACIS 2026 edition logo',

  registration: {
    statusTitle: 'Conference Registration Open', // Ideal ≤45 caracteres.
    statusDetail: '2nd registration deadline September 14, 2026', // Ideal ≤90.
    ctaLabel: 'Register now',
    ctaHref: '#', // SUBSTITUIR pelo link oficial de inscrição.
  },

  /* MENU 2
     Itens com children viram dropdowns. Não crie uma página para o pai do dropdown.
     Events é alimentado automaticamente por src/data/subevents-2026.ts. */
  nav: [
    {
      key: 'events',
      label: 'Events & Call for Papers',
      icon: 'file',
      children: subevents2026.map((event) => ({
        label: event.acronym,
        description: event.subtitle,
        href: `/2026/events/${event.slug}/`,
      })),
    },
    {
      key: 'program',
      label: 'Program',
      icon: 'schedule',
      children: [
        { label: 'General Schedule', description: 'Conference-wide schedule by day', href: '/2026/program/general-schedule/' },
        { label: 'Speakers', description: 'Keynote and invited speakers', href: '/2026/program/speakers/' },
        { label: 'Challenge', description: 'Competition, rules and timeline', href: '/2026/program/challenge/' },
      ],
    },
    { key: 'attending', label: 'Attending', icon: 'pin', href: '/2026/attending/' },
    { key: 'organization', label: 'Organization', icon: 'users', href: '/2026/organization/' },
  ],
};
