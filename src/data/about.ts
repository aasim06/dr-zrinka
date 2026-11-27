export const careerArc = [
  {
    index: "01",
    eyebrow: "Finance · Zagreb",
    title: "Finance — Zagreb",
    text: "Advising within complex corporate environments where risk, capital allocation, and regulatory precision shaped every decision.",
  },
  {
    index: "02",
    eyebrow: "Science & Policy · Bonn",
    title: "DLR-PT — Bonn",
    text: "Scientist and policy researcher at the German Aerospace Center (DLR-PT), contributing to national and European innovation programs, funding strategies, and the transfer of scientific research into practical economic and industrial practice.",
  },
  {
    index: "03",
    eyebrow: "Executive Development",
    title: "Management Institut Kitzmann",
    text: "Deepened executive development and organizational change work with senior leaders navigating structural shifts, cultural friction, and strategic uncertainty.",
  },
];

export const careerArcDe = [
  {
    index: "01",
    eyebrow: "Finanzwirtschaft · Zagreb",
    title: "Finance — Zagreb",
    text: "Beratung in komplexen Unternehmensstrukturen der Finanzindustrie, in denen Risiko, Kapitalallokation und regulatorische Präzision jede Entscheidung prägten.",
  },
  {
    index: "02",
    eyebrow: "Wissenschaft & Politik · Bonn",
    title: "DLR-PT — Bonn",
    text: "Wissenschaftlerin und Projektträger-Referentin beim Deutschen Zentrum für Luft- und Raumfahrt (DLR-PT) für nationale und europäische Innovationsprogramme und Technologietransfer.",
  },
  {
    index: "03",
    eyebrow: "Executive Development",
    title: "Management Institut Kitzmann",
    text: "Vertiefte Führungskräfteentwicklung und Begleitung von Top-Entscheidern in strukturellen Veränderungen, kultureller Reibung und strategischer Unsicherheit.",
  },
];

export function getCareerArc(locale: "en" | "de") {
  return locale === "de" ? careerArcDe : careerArc;
}
