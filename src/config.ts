export interface Service {
  name: string;
  desc: string;
  longDesc: string;
  duration: string;
  price?: string;
  prices?: number[];
  note?: string;
  targetId?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  services: Service[];
}

export interface BusinessConfig {
  name: string;
  logo: string;
  slug: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  philosophy: {
    quote: string;
    author: string;
  };
  stats: Array<{ label: string; value: string }>;
  contact: {
    phones: string[];
    emails: string[];
    locations: Array<{ name: string; address: string; mapUrl: string }>;
    workingHours: string;
    social: {
      instagram: string;
    };
  };
  services: Array<{ title: string; description: string; price: string; duration: string; targetId: string }>;
  serviceCategories: ServiceCategory[];
  packages: Array<{
    title: string;
    subtitle: string;
    recommended?: boolean;
    badge?: string;
    items: string[];
    duration: string;
    price?: string;
    prices?: number[];
    currency: string;
  }>;
  reviews: Array<{ name: string; location: string; vehicle: string; service: string; text: string; rating: number }>;
  faqs: Array<{ q: string; a: string }>;
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "MVP Detail Lab",
  logo: "/logo.svg",
  slug: "mvp-detail-lab",
  tagline: "High-end auto detailing studio u Zemunu.",
  shortDescription: "Beskompromisni kvalitet i pažnja posvećena detaljima. Vaš automobil zaslužuje MVP tretman.",
  longDescription: "Smešten u srcu Zemuna, MVP Detail Lab je studio posvećen ljubiteljima automobila koji ne pristaju na ništa manje od savršenstva. Koristimo najkvalitetnije preparate i najnovije tehnike kako bismo vašem vozilu vratili salonski sjaj i pružili mu dugotrajnu zaštitu. Od osnovnog pranja do najsloženijih detailing procesa, svaki korak radimo sa maksimalnom posvećenošću.",
  philosophy: {
    quote: "MVP Detail Lab - Gde detalji prave razliku između običnog i savršenog.",
    author: "MVP Tim"
  },
  stats: [
    { label: 'Rating', value: '5.0' },
    { label: 'Reviews', value: '25+' },
    { label: 'Lokacija', value: 'Zemun' },
    { label: 'Standard', value: 'High-end' },
  ],
  contact: {
    phones: ["060 3224139"],
    emails: ["mvpdetaillab@gmail.com"],
    locations: [
      {
        name: "MVP Detail Lab",
        address: "Banijska 68, Zemun, Beograd",
        mapUrl: "https://www.google.com/maps/place/MVP+detailing+studio/@44.8480125,20.3849528,17z/data=!3m1!4b1!4m6!3m5!1s0x475a65bc3d2f1be7:0xb11d569b5e3c38ed!8m2!3d44.8480125!4d20.3849528!16s%2Fg%2F11yryzs6ph"
      }
    ],
    workingHours: "Pon-Sub: 09:00 - 18:00 (Obavezno zakazivanje)",
    social: {
      instagram: "https://www.instagram.com/mvpdetaillab/"
    }
  },
  services: [
    {
      title: 'MVP Pranje',
      description: 'Potpuni tretman eksterijera uz voskarenje i čišćenje uvala vrata.',
      price: 'od 3900 RSD',
      duration: '2h',
      targetId: 'cat-pranje'
    },
    {
      title: 'Dubinsko Pranje',
      description: 'Temeljno čišćenje svih površina enterijera uz dezinfekciju parom.',
      price: 'od 10000 RSD',
      duration: '1 dan',
      targetId: 'cat-enterijer'
    },
    { 
      title: 'Keramička Zaštita', 
      description: 'Vrhunska nano zaštita za maksimalan sjaj i lako održavanje.',
      price: 'Na upit',
      duration: '1-2 dana',
      targetId: 'cat-zastita'
    }
  ],
  serviceCategories: [
    {
      id: "cat-pranje",
      title: "Pranje Eksterijera",
      services: [
        { 
          name: "Osnovno pranje", 
          prices: [1900, 1900, 2300], 
          desc: "Osnovno osvežavanje vozila.",
          longDesc: "Uključuje pranje spolja, sušenje, nanošenje sjaja na gume i usisavanje unutrašnjosti.",
          duration: "1h"
        },
        { 
          name: "Standardno pranje", 
          prices: [2900, 2900, 3300], 
          desc: "Detaljnije pranje sa posvećenošću felnama.",
          longDesc: "Sve iz osnovnog pranja + pranje felni i detaljno čišćenje svih plastičnih i staklenih površina.",
          duration: "1.5h"
        },
        { 
          name: "MVP pranje", 
          prices: [3900, 3900, 4300], 
          desc: "Premium tretman eksterijera sa zaštitom.",
          longDesc: "Pranje aktivnom penom, pranje uvala vrata i poklopca rezervoara, pranje felni, guma i blatobrana, detalo sušenje, voskarenje vozila, detaljno usisavanje, čišćenje svih površina i parfemisanje.",
          duration: "2h"
        }
      ]
    },
    {
      id: "cat-enterijer",
      title: "Detailing Enterijera",
      services: [
        { 
          name: "Dubinsko pranje", 
          prices: [10000, 12000, 14000], 
          desc: "Potpuna restauracija čistoće unutrašnjosti.",
          longDesc: "Kompletan proces: pranje spolja, pranje motornog prostora, dubinsko pranje patosa, sedišta i gepeka, detailing instrument table, suvo pranje neba, dezinfekcija ventilacije parom i mašinsko sušenje.",
          duration: "1 dan"
        }
      ]
    }
  ],
  packages: [
    {
      title: "OSNOVNO",
      subtitle: "Osvežavanje",
      items: [
        "Pranje spolja",
        "Sušenje",
        "Nanošenje sjaja na gume",
        "Usisavanje unutrašnjosti"
      ],
      duration: "1h",
      prices: [1900, 1900, 2300],
      currency: "RSD"
    },
    {
      title: "STANDARDNO",
      subtitle: "Detaljno čišćenje",
      items: [
        "Pranje spolja",
        "Sušenje",
        "Nanošenje sjaja na gume",
        "Usisavanje unutrašnjosti",
        "Pranje felni",
        "Čišćenje svih plastičnih i staklenih površina"
      ],
      duration: "1.5h",
      prices: [2900, 2900, 3300],
      currency: "RSD"
    },
    {
      title: "MVP PRANJE",
      subtitle: "Preporuka studia",
      recommended: true,
      badge: "NAJPOPULARNIJE",
      items: [
        "Pranje aktivnom penom",
        "Pranje spolja",
        "Pranje uvala vrata i poklopca rezervoara",
        "Pranje felni i guma",
        "Pranje blatobrana",
        "Detaljno sušenje",
        "Nanošenje sjaja na gume",
        "Voskarenje vozila",
        "Detaljno usisavanje unutrašnjosti vozila",
        "Čišćenje plastičnih i staklenih površina",
        "Parfemisanje automobila"
      ],
      duration: "2h",
      prices: [3900, 3900, 4300],
      currency: "RSD"
    },
    {
      title: "DUBINSKO",
      subtitle: "Enterijer kao nov",
      badge: "KOMPLETNO",
      items: [
        "Pranje aktivnom penom",
        "Detaljno pranje spolja",
        "Pranje svih uvala vrata i poklopca rezervoara",
        "Pranje motornog prostora",
        "Pranje blatobrana",
        "Pranje guma i felni",
        "Nanošenje sjaja na gume",
        "Voskaranje vozila",
        "Detaljno usisavanje unutrašnjosti vozila",
        "Dubinsko pranje patosa i patosnica",
        "Dubinsko pranje sedišta",
        "Dubinsko pranje gepeka",
        "Detailing instrument table",
        "Suvo pranje neba",
        "Dezinfekcija ventilacije parom",
        "Mašinsko sušenje vozila",
        "Pranje motora"
      ],
      duration: "1 dan",
      prices: [10000, 12000, 14000],
      currency: "RSD"
    }
  ],
  reviews: [
    { 
      name: 'Samir Murati', 
      location: 'Beograd', 
      vehicle: 'Personal car',
      service: 'Dubinsko pranje i keramika',
      text: 'Fenomenalna usluga. Ukoliko vasem automobilu treba dubinsko pranje ili detailing, MVP studio je prava adresa. Keramika na felnama i soferki odradjena vrhunski.', 
      rating: 5 
    },
    { 
      name: 'Mister Master', 
      location: 'Beograd', 
      vehicle: 'SUV',
      service: 'MVP Tretman',
      text: 'Nikola cini cuda sa automobilima! Svima preporucujem MVP studio, covek podmladi auto za par godina u jednom danu.', 
      rating: 5 
    },
    { 
      name: 'Milos Dimic', 
      location: 'Beograd', 
      vehicle: 'BMW 5',
      service: 'Poliranje',
      text: 'Profesionalno i pedantno. Ne mogu da verujem koliki je sjaj dobio auto. Hvala na vrhunskoj usluzi, vidimo se opet!', 
      rating: 5 
    },
    { 
      name: 'Nikola Petrović', 
      location: 'Zemun', 
      vehicle: 'Mercedes E Class',
      service: 'MVP Pranje',
      text: 'Najbolje pranje u Zemunu. Detaljni su, brzi i auto miriše danima. Svaka preporuka za ekipu iz laboratorije!', 
      rating: 5 
    },
    { 
      name: 'Sara Jovanović', 
      location: 'Beograd', 
      vehicle: 'Audi A3',
      service: 'Dubinsko Pranje',
      text: 'Dubinsko pranje je spasilo moj enterijer nakon dugog puta. Izgleda i miriše kao da je tek izašao iz salona. Profesionalnost na nivou.', 
      rating: 5 
    },
    { 
      name: 'Marko Kostić', 
      location: 'Novi Beograd', 
      vehicle: 'Porsche Cayenne',
      service: 'Keramička Zaštita',
      text: 'Keramička zaštita je urađena vrhunski. Voda samo klizi sa auta, a sjaj je neverovatan čak i posle kiše. Vredi svaku paru.', 
      rating: 5 
    },
    { 
      name: 'Jelena Marić', 
      location: 'Zemun', 
      vehicle: 'Volkswagen Golf',
      service: 'Standardno Pranje',
      text: 'Standardno pranje kod njih je bolje nego detailing kod drugih. Svaka čast na posvećenosti svakom milimetru felne i plastike.', 
      rating: 5 
    }
  ],
  faqs: [
    {
      q: 'Da li je potrebno zakazivanje?',
      a: 'Da, radi postizanja maksimalnog kvaliteta radimo isključivo na zakazivanje putem DM-a ili telefona.',
    },
    {
      q: 'Koliko traje dubinsko pranje?',
      a: 'Proces dubinskog pranja uz mašinsko sušenje obično traje jedan ceo radni dan.',
    },
    {
      q: 'Gde se tačno nalazite?',
      a: 'Nalazimo se u Zemunu, adresa je Banijska 68.',
    },
  ]
};
