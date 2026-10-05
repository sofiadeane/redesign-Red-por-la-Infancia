/**
 * Etapa Ideate: goal statement y competitive audit (versión resumida).
 * La investigación completa está en docs/03-ideate (y en Notion).
 */

/** Goal statement final, dividido en los cinco elementos de la plantilla. */
export const goal = {
  problem:
    "Quien llega al sitio —la mitad desde el celular, un tercio desde fuera de Argentina— no encuentra rápido la ayuda, la información o la forma de colaborar que busca: el sitio no está pensado para el celular, está solo en español y no se organiza por público.",
  parts: [
    {
      key: "product",
      label: "Product",
      text: "sitio mobile-first, con navegación por público y páginas clave en inglés",
      why: "50% de las visitas es desde el celular, 31% está fuera de Argentina y la directora pidió navegar por audiencia, como en ReConectate.",
    },
    {
      key: "action",
      label: "Action",
      text: "elegir su perfil y llegar en pocos toques a lo que necesitan: la derivación, recursos y capacitaciones, el impacto y las formas de colaborar",
      why: "Es la acción que comparten las nueve personas: hoy nadie encuentra rápido lo suyo, ni siquiera el equipo.",
    },
    {
      key: "audience",
      label: "Audience",
      text: "las ocho audiencias que buscan proteger a niñas, niños y adolescentes",
      why: "Quienes buscan ayuda, familias, adolescentes, docentes y equipos de salud, donantes, academia, prensa y aliados internacionales.",
    },
    {
      key: "impact",
      label: "Impact",
      text: "reducir el tiempo y la confusión entre la necesidad y la acción",
      why: "La fundación no asiste casos: su valor está en derivar bien y en formar. El logro es que la persona llegue a la ayuda oficial.",
    },
    {
      key: "criteria",
      label: "Criteria",
      text: "el % que llega a Pedir ayuda (hoy 4%), el éxito por tarea en pruebas, las descargas (hoy 23 por año) y los contactos internacionales",
      why: "Combina datos que ya existen con métricas nuevas. Sin eventos en Analytics no hay línea de base de donaciones ni contactos: hay que medirlos primero.",
    },
  ],
  achieve: [
    "Que cada público encuentre su puerta de entrada desde la home.",
    "Que quien está en crisis llegue a una línea oficial en dos toques o menos.",
    "Que el interés de una conferencia se convierta en un contacto.",
  ],
};

export const auditGoal =
  "Entender cómo organizaciones que trabajan por la niñez ordenan sus sitios para públicos muy distintos —navegación por audiencia, pedir ayuda, impacto, idiomas y celular— para decidir la nueva arquitectura de información.";

/** Competidores auditados. `lesson` es lo que me llevo para el rediseño. */
export const competitors = [
  {
    id: "unicef",
    name: "UNICEF Argentina",
    type: "direct",
    place: "CABA · nacional",
    what: "Prevención de violencias, datos y guías para familias y profesionales.",
    lesson:
      "Cada monto de donación dice qué financia, y el centro de prensa es completo. Pero no muestra ninguna línea de ayuda.",
  },
  {
    id: "fundamind",
    name: "FUNDAMIND",
    type: "indirect",
    place: "CABA",
    what: "Centro de primera infancia, nutrición y prevención de VIH.",
    lesson:
      'Donación mensual por niveles con microcopy tranquilizador: "Podés cancelar cuando quieras". Sin ruta de ayuda ni impacto en números.',
  },
  {
    id: "navarroviola",
    name: "Fundación Navarro Viola",
    type: "indirect",
    place: "CABA",
    what: "Programas de primera infancia y personas mayores.",
    lesson:
      'Su portal de recursos pregunta "Soy… / Me interesa…": el patrón más cercano a navegar por público.',
  },
  {
    id: "sosinfantil",
    name: "Fundación S.O.S. Infantil",
    type: "indirect",
    place: "La Boca y Barracas",
    what: "Talleres de juego, deporte y arte para chicos del barrio.",
    lesson:
      "Muchas cifras, pero ninguna con fecha. Y un nombre que sugiere emergencia sin ninguna ruta de ayuda.",
  },
  {
    id: "ncmec",
    name: "NCMEC",
    type: "indirect",
    place: "Estados Unidos",
    what: "Línea 24 h, reportes y Take It Down, lo más parecido a Bajalo Ya!.",
    lesson:
      "Barra fija en el celular con la línea tocable y Take It Down en 38 idiomas. Pero un pop-up de donación interrumpe al entrar.",
  },
];

/** Columnas de la matriz: RPI hoy + competidores. */
export const matrixOrgs = [
  { id: "rpi", name: "RPI hoy" },
  { id: "unicef", name: "UNICEF" },
  { id: "fundamind", name: "FUNDAMIND" },
  { id: "navarroviola", name: "Navarro Viola" },
  { id: "sosinfantil", name: "S.O.S. Infantil" },
  { id: "ncmec", name: "NCMEC" },
];

/** yes / partial / no por lente del objetivo del audit, con la evidencia que lo respalda. */
export const lenses = [
  {
    name: "Navegación por público",
    values: ["partial", "partial", "partial", "partial", "no", "partial"],
    evidence:
      "Ninguno organiza el menú principal por audiencia. Cuando aparece, está en un segundo nivel o en un portal aparte.",
  },
  {
    name: "Pedir ayuda / derivar",
    values: ["partial", "no", "no", "no", "no", "yes"],
    evidence:
      "Ninguna organización argentina menciona 102, 137 o 911. Solo NCMEC tiene Get Help, porque asiste directamente.",
  },
  {
    name: "Impacto y credibilidad",
    values: ["no", "partial", "partial", "partial", "partial", "yes"],
    evidence:
      "Cifras sueltas, sin fecha o como tamaño del problema. Solo NCMEC publica un informe anual con datos por año.",
  },
  {
    name: "Prensa",
    values: ["no", "yes", "partial", "no", "no", "partial"],
    evidence:
      'Solo UNICEF tiene un centro de prensa completo. En FUNDAMIND, "Prensa" es contenido propio; en NCMEC está en el footer.',
  },
  {
    name: "Público internacional",
    values: ["no", "partial", "no", "partial", "no", "partial"],
    evidence:
      "Los sitios argentinos están solo en español. Las soluciones son parches: un PDF en inglés o un link al sitio global.",
  },
];

/** Lo que el sector hace y lo que nadie hace (cantidad de competidores sobre 5). */
export const gapBars = [
  { label: "Botón de donar fijo en el header", count: 4, kind: "done" },
  { label: "Donación que explica qué financia cada monto", count: 2, kind: "done" },
  { label: "Sala de prensa con recursos propios", count: 1, kind: "gap" },
  { label: "Impacto trazable por año, con fecha y fuente", count: 1, kind: "gap" },
  { label: "Ruta clara para pedir ayuda o derivar", count: 1, kind: "gap", note: "0 de 4 en Argentina" },
  { label: "Puerta de entrada por perfil en el menú", count: 0, kind: "gap" },
];

/** Hallazgo → implicancia de diseño (las de prioridad alta y media). */
export const implications = [
  {
    finding: "Ninguna organización argentina deriva a líneas oficiales.",
    implication:
      '"Necesito ayuda" fijo en todas las pantallas, con un aviso claro de que RPI deriva y con 911, 137 y 102 tocables.',
    source: "UNICEF · FUNDAMIND · Navarro Viola · S.O.S.",
    priority: "High",
  },
  {
    finding: "Una barra fija de acciones resuelve el acceso en el celular.",
    implication:
      'Probar en bocetos una barra inferior mobile con "Necesito ayuda", "Bajalo Ya!" y las líneas.',
    source: "NCMEC",
    priority: "High",
  },
  {
    finding: "Ningún sitio tiene una puerta de entrada por perfil en el primer nivel.",
    implication: 'Arquitectura con ocho entradas "Soy…" en la home y el menú, validada con card sorting.',
    source: "Los cinco · Navarro Viola",
    priority: "High",
  },
  {
    finding: "Take It Down es el modelo directo para Bajalo Ya!.",
    implication:
      "Bajalo Ya! en pasos, con quién puede usarlo, qué no hacer, preguntas frecuentes honestas e ilustraciones.",
    source: "NCMEC",
    priority: "High",
  },
  {
    finding: "Los pop-ups de donación compiten con quien llega en crisis.",
    implication: "Regla de diseño: nada de pop-ups ni banners de donación en las rutas de ayuda.",
    source: "NCMEC · UNICEF",
    priority: "High",
  },
  {
    finding: "Mostrar qué financia cada aporte genera confianza; las cifras sin fecha, no.",
    implication:
      "Sección para donantes y financiadores con montos que explican su resultado e impacto por año, con fecha y fuente.",
    source: "UNICEF · FUNDAMIND · S.O.S.",
    priority: "Medium",
  },
];

export const docsUrl = "https://github.com/sofiadeane/redesign-Red-por-la-Infancia/tree/main/docs/03-ideate";
