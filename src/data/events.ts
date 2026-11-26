export const eventsSubnav = [
  { label: "Events & Readings", href: "/events" },
  { label: "Keynote Speaking", href: "/keynotes" },
];

export const keynoteTopics = [
  {
    index: "01",
    title: "Leadership Under Pressure",
    text: "Why decision-making slows down when authority fractures.",
  },
  {
    index: "02",
    title: "Leadership, Power & Authorship",
    text: "How the body shapes perception, judgment, and leadership presence.",
  },
  {
    index: "03",
    title: "Authority in Complex Organizations",
    text: "Why responsibility becomes fragmented—and how leaders restore clarity.",
  },
  {
    index: "04",
    title: "Sovereign Leadership",
    text: "What it means to lead when structures, expectations, and pressure collide.",
  },
];

export const keynoteSignals = [
  "Strategic priorities start shifting and direction loses stability",
  "Execution slows down, even though the plan looks right on paper",
  "Decisions are made, but not carried through",
  "Leadership changes, but traction doesn’t follow",
  "Teams comply on the surface, but don’t fully move",
  "Critical decisions get delayed, revisited, or quietly avoided",
  "Something feels off in the system, but no one can clearly name it",
];

export const keynoteAudiences = [
  "Executive leadership teams",
  "Leadership programs and business schools",
  "Medical and professional organizations",
  "Conferences focused on leadership, responsibility, and decision-making",
];

export const keynoteFormats = [
  "Conference keynotes",
  "Leadership program sessions",
  "Moderated conversations",
  "Keynote + audience dialogue formats",
];

export type EventItem = {
  slug: string;
  date: string;
  location: string;
  time?: string;
  language: string;
  title: string;
  subtitle?: string;
  description: string[];
  hostNote?: string;
  status: "upcoming" | "past";
  soldOut?: boolean;
  externalRegisterUrl?: string;
  banner?: string;
  showGuestCount?: boolean;
  admissionNote?: string;
};

export const upcomingEvents: EventItem[] = [
  {
    slug: "frankfurt-26-november-2026",
    date: "November 26, 2026",
    location: "jumpp, Frankfurt/M",
    time: "15:00–18:00",
    language: "German",
    title: "From Employee to Entrepreneur: Am I Ready to Lead?",
    description: [
      "Taking over an existing company means taking over more than a business. This workshop explores the shift into entrepreneurial leadership—from role clarity and responsibility to leading established teams, navigating existing structures and handling conflict.",
    ],
    hostNote: "Workshop for Generation N – Anlaufstelle Unternehmensnachfolge, in collaboration with jumpp",
    status: "upcoming",
    externalRegisterUrl: "https://www.jumpp.de/11-26-rollenwechsel",
  },
  {
    slug: "frankfurt-3-december-2026",
    date: "December 3, 2026",
    location: "jumpp, Frankfurt/M",
    time: "18:00–19:30",
    language: "German",
    title: "THE HAT AND THE HILL. She Hit 50, Took Testosterone, and Lit the Fuse",
    subtitle: "UNFUCKWITHABLE. On desire, sleepless nights, a short fuse, and finding your way back to yourself.",
    description: [
      "What happens when everything shifts inside you, yet from the outside nobody seems to notice? In this author talk around The Hat and the Hill, Dr. Zrinka K. Fidermuc Maler explores desire, sleepless nights, a short fuse, hormones, work, relationships, and finding your way back to yourself.",
      "Expect candor, sharp observations, and a healthy impatience with the polished platitudes of social media. The evening brings together stories, science, self-irony, humor, and an open conversation with the audience.",
    ],
    hostNote: "Hosted by jumpp, Frankfurt/M",
    status: "upcoming",
    externalRegisterUrl: "https://www.jumpp.de/autorenabend",
  },
  {
    slug: "zagreb-8-december-2026",
    date: "December 8, 2026",
    location: "Gradska knjižnica Bogdan Ogrizović, Zagreb",
    time: "18:00–19:30",
    language: "Croatian",
    title: "THE HAT AND THE HILL. She Hit 50, Took Testosterone, and Lit the Fuse",
    subtitle: "Author Event & Conversation · UNFUCKWITHABLE.",
    description: [
      "An evening about midlife, hormones, desire, sleeplessness, work, relationships, identity and the return to self—without pretending and without pastel social-media wisdom.",
      "The conversation with the author will be moderated by Šimun Cimerman, author of the bestseller The Battle of Sutjeska – Hell in Paradise (Croatian edition: Bitka na Sutjesci – Pakao u raju). When two authors come together, with a little testosterone and a whole lot of questions about women, expect a conversation where not everything will go quite according to plan.",
      "Men are very welcome. Worst case, they learn something. Best case, quite a few things finally make sense.",
    ],
    status: "upcoming",
    banner: "/images/event-zagreb-dec.jpg",
    admissionNote:
      "Admission is free. Registration is required. Places are limited. If you’re unable to attend, please cancel your registration 24 hours before the event.",
  },
];

export const pastEvents: EventItem[] = [
  {
    slug: "kaprun-october-2026",
    date: "October 12–14, 2026",
    location: "Kaprun (Austria)",
    language: "German",
    title: "The Discerning Midlife Woman: What Does She Really Want from Spa & Hospitality?",
    description: [
      "In conversation with Wolfgang Falkner, Founder & Host of SpaCamp, and the wider spa & hospitality community.",
    ],
    status: "past",
    soldOut: true,
  },
  {
    slug: "zagreb-7-october-2026",
    date: "October 7, 2026",
    location: "Gradska knjižnica, Trg Ante Starčevića 6, Zagreb",
    time: "18:00",
    language: "Croatian",
    title: "THE HAT AND THE HILL. She Hit 50, Took Testosterone, and Lit the Fuse",
    description: [
      "Autorska večer i otvorena diskusija o svemu što su nam majke i bake prešutile. Muškarci su dobrodošli!",
    ],
    status: "past",
    soldOut: true,
    admissionNote: "Admission was free with required registration.",
  },
  {
    slug: "online-15-september-2026",
    date: "September 15, 2026",
    location: "Online International",
    language: "English / German",
    title: "Leadership After 45",
    description: ["In conversation with Janet Winkler, CEO Bunton."],
    status: "past",
  },
  {
    slug: "frankfurt-21-august-2026",
    date: "August 21, 2026",
    location: "Frankfurt am Main",
    language: "German",
    title: "Leadership After 45",
    description: [
      "In conversation with EWMD (European Women’s Management Development Network), Mrs. Dr. Stefanie Rummel, Vorständin Rhein-Main.",
    ],
    status: "past",
  },
  {
    slug: "online-2-june-2026",
    date: "June 2, 2026",
    location: "Digital · Online International",
    time: "18:00–19:30",
    language: "English / German",
    title: "Leadership After 45",
    description: ["In conversation with Janet Winkler, CEO Bunton."],
    status: "past",
  },
  {
    slug: "frankfurt-21-may-2026",
    date: "May 21, 2026",
    location: "Frauenarztpraxis Kristin Rothe, Roßmarkt 23, 60311 Frankfurt",
    time: "18:00–19:30",
    language: "German",
    title: "Lesung & Gespräch — The Hat and the Hill",
    description: [
      "In conversation with Kristin Rothe, MD, Frauenarztpraxis. Ein Abend über hormonelle Veränderungen, Energie- und Libidoverlust, Schlaf, Stimmung und die Frage: Was passiert eigentlich gerade mit mir?",
    ],
    status: "past",
    soldOut: true,
    showGuestCount: true,
  },
];

export const allEvents = [...upcomingEvents, ...pastEvents];
