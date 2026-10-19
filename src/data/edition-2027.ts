import { subevents2027 } from './subevents-2027';

export const edition2027 = {
  year: '2027',
  editionNumber: '37',
  conferenceName: '37th Brazilian Conference on Intelligent Systems',
  city: 'Porto Alegre',
  state: 'RS',
  country: 'Brazil',
  dates: 'October 20–23, 2027',
  venue: 'PUCRS',

  /* VENUE — usado na página Attending.
     Troque endereço, texto, foto e mapa a cada edição.
     Mapa: o formato q=...&output=embed do Google Maps dispensa API key para este uso simples. */
  venueAddress: 'Avenida Ipiranga, 6681, Partenon — Porto Alegre, RS',
  venueDescription: 'Replace with a short description of the venue, accessibility, main facilities and why it is convenient for conference attendees. Recommended: 60–120 words.',
  venuePhoto: '/assets/2027/venue-pucrs.jpg',
  mapEmbedUrl: 'https://www.google.com/maps?q=PUCRS%2C%20Avenida%20Ipiranga%206681%2C%20Porto%20Alegre&output=embed',

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
  editionLogo: '/assets/2027/bracis-2027-logo.svg',
  editionLogoAlt: 'BRACIS 2027 edition logo',

  registration: {
    statusTitle: 'Registration opening soon', // Ideal ≤45 caracteres.
    statusDetail: 'Registration dates will be announced', // Ideal ≤90.
    ctaLabel: 'Register now',
    ctaHref: '#', // SUBSTITUIR pelo link oficial de inscrição.
  },

  /* MENU 2
     Itens com children viram dropdowns. Não crie uma página para o pai do dropdown.
     Events é alimentado automaticamente por src/data/subevents-2027.ts. */
  nav: [
    {
      key: 'events',
      label: 'Events & Call for Papers',
      icon: 'file',
      children: subevents2027.map((event) => ({
        label: event.acronym,
        description: event.subtitle,
        href: `/2027/events/${event.slug}/`,
      })),
    },
    {
      key: 'program',
      label: 'Program',
      icon: 'schedule',
      children: [
        { label: 'General Schedule', description: 'Conference-wide schedule by day', href: '/2027/program/general-schedule/' },
        { label: 'Speakers', description: 'Keynote and invited speakers', href: '/2027/program/speakers/' },
        { label: 'Challenge', description: 'Competition, rules and timeline', href: '/2027/program/challenge/' },
      ],
    },
    { key: 'attending', label: 'Attending', icon: 'pin', href: '/2027/attending/' },
    { key: 'organization', label: 'Organization', icon: 'users', href: '/2027/organization/' },
  ],
};
