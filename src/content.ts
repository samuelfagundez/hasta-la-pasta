// Única fuente de verdad del negocio. Datos tomados de Google Maps
// (ver /data/place.json y /data/ficha.md) el 12 de septiembre de 2026,
// más el teléfono/Instagram aportados directamente por el cliente
// (ver /data/contacto.json).

export const content = {
  name: 'HASTA LA PASTA',
  shortName: 'Hasta la Pasta',
  tagline: 'Pasta fresca al momento en Ciutat Vella, Valencia',
  description:
    'HASTA LA PASTA es un puesto de pasta fresca en pleno Ciutat Vella, Valencia, pensado para comer bien y rápido sin gastar de más. Eliges tu pasta, tu salsa y tus toppings, y te la preparan al momento en un bol para tomar en las mesitas de la calle o para llevar. Un rincón sencillo y con mucho ambiente, tan de barrio como de paso para el turista, con clásicos italianos como la carbonara, la cacio e pepe o los raviolis fritos.',
  metaDescription:
    'Pasta fresca al momento en el corazón de Ciutat Vella, Valencia. Elige tu pasta, tu salsa y tus toppings. Para tomar en la calle o para llevar, desde 5,50 €.',
  keywords: [
    'Hasta la Pasta',
    'Ciutat Vella',
    'Valencia',
    'pasta fresca',
    'restaurante italiano',
    'comida para llevar',
    'pasta económica',
    'carbonara Valencia',
  ],
  priceRange: '1 € - 10 €',
  priceRangeDisplay: '1 € – 10 € por persona',
  cuisine: 'Italiana',

  rating: { value: 4.4, count: 1826, countDisplay: '1826 reseñas' },
  highlights: [
    'Pasta fresca al momento: eliges tipo de pasta, salsa y toppings, y te la preparan en el acto.',
    'Relación calidad-precio muy valorada por la clientela, ideal para turistas y para el barrio.',
    'Mesitas y bancos junto al local para comer en la calle, en pleno Ciutat Vella.',
    'La carbonara y los raviolis fritos, los platos más recomendados por los clientes.',
  ],

  address: {
    streetAddress: 'Carrer del Pes de la Farina, 1',
    addressLocality: 'València',
    addressRegion: 'Valencia',
    postalCode: '46003',
    addressCountry: 'ES',
    full: 'C/ del Pes de la Farina, 1, Ciutat Vella, 46003 València, Valencia',
  },
  geo: { lat: 39.4766072, lng: -0.3745417 },

  phone: '+34 640 62 98 79',
  phoneDisplay: '640 62 98 79',
  whatsappNumber: '34640629879',
  email: '',

  siteUrl: 'https://samuelfagundez.github.io/hasta-la-pasta/',

  social: {
    instagram: 'https://www.instagram.com/hastalapastaoficial/',
    facebook: '',
    tiktok: '',
    whatsapp: '',
  },

  hours: [
    { day: 'Lunes', hours: 'Cerrado' },
    { day: 'Martes', hours: '11:30 – 23:30' },
    { day: 'Miércoles', hours: '11:30 – 23:30' },
    { day: 'Jueves', hours: '11:30 – 23:30' },
    { day: 'Viernes', hours: '11:30 – 23:30' },
    { day: 'Sábado', hours: '11:30 – 23:30' },
    { day: 'Domingo', hours: '11:30 – 23:30' },
  ],
  openingHoursSchema: [
    {
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '11:30',
      closes: '23:30',
    },
  ],

  gallery: [
    {
      src: '/gallery/hasta-la-pasta-fachada.jpg',
      alt: 'Fachada de Hasta la Pasta, restaurante italiano en Ciutat Vella, Valencia',
    },
    {
      src: '/gallery/hasta-la-pasta-plaza-torres.jpg',
      alt: 'Bol de pasta de Hasta la Pasta en una plaza del centro histórico de Valencia',
    },
    {
      src: '/gallery/hasta-la-pasta-boles-para-llevar.jpg',
      alt: 'Dos boles de pasta para llevar de Hasta la Pasta, Valencia',
    },
    {
      src: '/gallery/hasta-la-pasta-variedad.jpg',
      alt: 'Variedad de pasta y raviolis fritos de Hasta la Pasta',
    },
    {
      src: '/gallery/hasta-la-pasta-cacio-e-pepe.jpg',
      alt: 'Pasta cacio e pepe con abundante queso de Hasta la Pasta',
    },
    {
      src: '/gallery/hasta-la-pasta-carbonara-detalle.jpg',
      alt: 'Detalle de una carbonara con panceta crujiente de Hasta la Pasta',
    },
  ],

  mapEmbedSrc:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('HASTA LA PASTA, Carrer del Pes de la Farina 1, 46003 València') +
    '&hl=es&z=16&output=embed',
  mapLinkUrl:
    'https://maps.google.com/?cid=14748417768743652172&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA',
}

export function whatsappLink(message: string): string {
  return `https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_CONTACT_MESSAGE =
  '¡Hola! Vengo de la página web de Hasta la Pasta y tengo una consulta.'
export const WHATSAPP_RESERVE_MESSAGE =
  '¡Hola! Vengo de la página web de Hasta la Pasta y me gustaría hacer un pedido.'

// Sin sistema de reservas propio: cae siempre a WhatsApp.
export const reservationLink = ''

export function contactHref(): string {
  return whatsappLink(WHATSAPP_CONTACT_MESSAGE)
}

export function reservationHref(): string {
  return reservationLink || whatsappLink(WHATSAPP_RESERVE_MESSAGE)
}
