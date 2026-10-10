/**
 * Las cinco etapas del proceso y su estado.
 * El estado del hero y las tarjetas de acceso al proceso se calculan desde acá:
 * al cerrar una etapa, alcanza con cambiar su `state`.
 */

/** done = completa · current = en curso · next = próximamente */
export const stages = [
  {
    id: "empathize",
    num: "01",
    name: "Empathize",
    state: "done",
    color: "var(--pink)",
    items: [
      "Auditoría de 21 problemas",
      "12 meses de Analytics",
      "Entrevista con la directora",
      "9 personas y sus mapas",
    ],
  },
  {
    id: "define",
    num: "02",
    name: "Define",
    state: "done",
    color: "var(--purple)",
    items: ["10 problem statements", "Hipótesis medibles", "Propuesta de valor única"],
  },
  {
    id: "ideate",
    num: "03",
    name: "Ideate",
    state: "current",
    color: "var(--yellow)",
    items: ["Goal statement", "Competitive audit de 18 organizaciones", "Implicancias de diseño"],
  },
  {
    id: "prototype",
    num: "04",
    name: "Prototype",
    state: "next",
    color: "var(--mint)",
    items: ["Bocetos y wireframes mobile-first", "Prototipo en Figma"],
  },
  {
    id: "test",
    num: "05",
    name: "Test",
    state: "next",
    color: "var(--blue)",
    items: ["Tests de usabilidad", "Iteración"],
  },
];

export const STATE_LABELS = { done: "Completa", current: "En curso", next: "Próximamente" };

/** Fecha de entrega: Conferencia Mundial de Manila. */
export const deadline = "14 de noviembre de 2026";
