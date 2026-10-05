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

/**
 * Competidores auditados. `region` separa los argentinos del resto.
 * `lesson` es lo que me llevo para el rediseño.
 */
export const competitors = [
  {
    id: "unicef",
    name: "UNICEF Argentina",
    type: "direct",
    region: "ar",
    place: "CABA · nacional",
    what: "Prevención de violencias, datos y guías para familias y profesionales.",
    lesson:
      "Cada monto de donación dice qué financia, y el centro de prensa es completo. Pero no muestra ninguna línea de ayuda.",
  },
  {
    id: "grooming",
    name: "Grooming Argentina",
    type: "direct",
    region: "ar",
    place: "CABA, Jujuy y Neuquén",
    what: "Prevención del grooming, canal de reporte, app propia y WhatsApp.",
    lesson:
      '"Reportar" y "Donar" juntos en el header, también en el celular. Pero "Reportar" sirve solo para material de abuso: deja afuera el grooming.',
  },
  {
    id: "chicosnet",
    name: "Chicos.net",
    type: "direct",
    region: "ar",
    place: "Argentina y la región",
    what: "Wiki, recursos y capacitaciones en ciudadanía digital.",
    lesson:
      "Más de 70 recursos que se filtran solo por tema. Tiene líneas de ayuda de 8 países, pero escondidas dentro de la Wiki.",
  },
  {
    id: "faro",
    name: "Faro Digital",
    type: "direct",
    region: "ar",
    place: "Buenos Aires y Barcelona",
    what: "Guías, talleres en escuelas y campañas sobre violencias digitales.",
    lesson:
      "Buenas guías, pero no deriva a ninguna línea, bloquea el zoom en el celular y casi no muestra impacto.",
  },
  {
    id: "fundamind",
    name: "FUNDAMIND",
    type: "indirect",
    region: "ar",
    place: "CABA",
    what: "Centro de primera infancia, nutrición y prevención de VIH.",
    lesson:
      'Donación mensual por niveles con microcopy tranquilizador: "Podés cancelar cuando quieras". Sin ruta de ayuda ni impacto en números.',
  },
  {
    id: "navarroviola",
    name: "Fundación Navarro Viola",
    type: "indirect",
    region: "ar",
    place: "CABA",
    what: "Programas de primera infancia y personas mayores.",
    lesson:
      'Su portal de recursos pregunta "Soy… / Me interesa…": el patrón más cercano a navegar por público.',
  },
  {
    id: "sosinfantil",
    name: "Fundación S.O.S. Infantil",
    type: "indirect",
    region: "ar",
    place: "La Boca y Barracas",
    what: "Talleres de juego, deporte y arte para chicos del barrio.",
    lesson:
      "Muchas cifras, pero ninguna con fecha. Y un nombre que sugiere emergencia sin ninguna ruta de ayuda.",
  },
  {
    id: "aldeas",
    name: "Aldeas Infantiles SOS",
    type: "indirect",
    region: "ar",
    place: "CABA y 7 filiales",
    what: "Cuidado alternativo y fortalecimiento familiar.",
    lesson:
      "Barra fija de donación en el celular y un menú para quien ya dona. Pero los montos no dicen qué financian.",
  },
  {
    id: "garrahan",
    name: "Fundación Garrahan",
    type: "indirect",
    region: "ar",
    place: "CABA",
    what: "Apoyo a la salud pediátrica y Casa Garrahan.",
    lesson:
      'Un chatbot que se abre solo tapa media pantalla, y la página de donar repite cinco botones iguales de "Quiero donar". Lo que hay que evitar.',
  },
  {
    id: "linea102",
    name: "Línea 102",
    type: "indirect",
    region: "ar",
    place: "Nacional · Estado",
    what: "Línea gratuita y confidencial para chicas, chicos y adolescentes.",
    lesson:
      'Explica a quién llamar en el orden en que uno decide y aclara que "no es un servicio de emergencia". Pero el número no se puede tocar para llamar.',
  },
  {
    id: "ncmec",
    name: "NCMEC",
    type: "indirect",
    region: "intl",
    place: "Estados Unidos",
    what: "Línea 24 h, reportes y Take It Down, lo más parecido a Bajalo Ya!.",
    lesson:
      "Barra fija en el celular con la línea tocable y Take It Down en 38 idiomas. Pero un pop-up de donación interrumpe al entrar.",
  },
  {
    id: "anar",
    name: "Fundación ANAR",
    type: "indirect",
    region: "intl",
    place: "España",
    what: "Seis líneas de ayuda con teléfono y chat.",
    lesson:
      "Una línea por situación y por quién llama, cada una con sus garantías. Pero en el celular la barra fija es para donar y las líneas quedan muy abajo.",
  },
  {
    id: "stc",
    name: "Save the Children España",
    type: "indirect",
    region: "intl",
    place: "España",
    what: "Prevención de violencia online, socios y prensa.",
    lesson:
      "Como Red por la Infancia, no atiende casos: lo dice en sus preguntas frecuentes y explica a dónde derivar. Memoria 2025 como página y sala de prensa al día.",
  },
  {
    id: "stopncii",
    name: "StopNCII.org",
    type: "indirect",
    region: "intl",
    place: "Reino Unido · mundial",
    what: "Pedidos de remoción de imágenes íntimas para mayores de 18.",
    lesson:
      "Arranca por la situación de la persona, pregunta la edad al inicio y deriva a quien era menor. El selector de idioma está a la vista.",
  },
  {
    id: "childline",
    name: "Childline",
    type: "indirect",
    region: "intl",
    place: "Reino Unido",
    what: "Línea 24 h, chat y contenido por edad.",
    lesson:
      '"Hide page" en todas las páginas y una guía para borrar el rastro. El sitio bloqueó mi navegador, pero hasta la página de error mostraba el teléfono.',
    shot: "Página de error de Childline en el celular",
  },
  {
    id: "thorn",
    name: "Thorn",
    type: "indirect",
    region: "intl",
    place: "Estados Unidos",
    what: "Tecnología contra el abuso sexual infantil online.",
    lesson:
      'Se presenta en capas: una frase, una meta, cuatro pilares y tres cifras. El modelo para el "Who we are".',
  },
  {
    id: "weprotect",
    name: "WeProtect Global Alliance",
    type: "indirect",
    region: "intl",
    place: "Londres · global",
    what: "Alianza global de gobiernos, empresas y organizaciones.",
    lesson:
      "Explica paso a paso cómo sumarse como miembro, con compromisos y plazos. Red por la Infancia figura en su directorio.",
  },
  {
    id: "endviolence",
    name: "End Violence",
    type: "indirect",
    region: "intl",
    place: "Global",
    what: "Alianza y fondo que impulsa INSPIRE.",
    lesson:
      "Explica qué se compromete un país o una ciudad para sumarse. Bloqueó mi navegador, así que lo audité solo por su contenido.",
    shot: "Página de bloqueo de End Violence en el celular",
  },
];

/** Columnas de la matriz: RPI hoy + competidores, en el mismo orden que las tarjetas. */
export const matrixOrgs = [
  { id: "rpi", name: "RPI hoy" },
  { id: "unicef", name: "UNICEF" },
  { id: "grooming", name: "Grooming Arg." },
  { id: "chicosnet", name: "Chicos.net" },
  { id: "faro", name: "Faro Digital" },
  { id: "fundamind", name: "FUNDAMIND" },
  { id: "navarroviola", name: "Navarro Viola" },
  { id: "sosinfantil", name: "S.O.S. Infantil" },
  { id: "aldeas", name: "Aldeas SOS" },
  { id: "garrahan", name: "Garrahan" },
  { id: "linea102", name: "Línea 102" },
  { id: "ncmec", name: "NCMEC" },
  { id: "anar", name: "ANAR" },
  { id: "stc", name: "Save the Children" },
  { id: "stopncii", name: "StopNCII" },
  { id: "childline", name: "Childline" },
  { id: "thorn", name: "Thorn" },
  { id: "weprotect", name: "WeProtect" },
  { id: "endviolence", name: "End Violence" },
];

/**
 * yes / partial / no / unknown por lente del objetivo del audit, con la evidencia que lo respalda.
 * El orden de `values` sigue a `matrixOrgs`.
 */
export const lenses = [
  {
    name: "Navegación por público",
    values: [
      "partial", "partial", "no", "partial", "partial", "partial", "partial", "no", "partial", "no",
      "partial", "partial", "partial", "partial", "partial", "yes", "partial", "partial", "unknown",
    ],
    evidence:
      "Solo Childline separa por edad, con un sitio aparte para menores de 12. En el resto, los públicos aparecen en un segundo nivel, en un portal aparte o en canales fuera del menú.",
  },
  {
    name: "Pedir ayuda / derivar",
    values: [
      "partial", "no", "partial", "partial", "no", "no", "no", "no", "no", "no",
      "partial", "yes", "yes", "partial", "partial", "yes", "partial", "no", "no",
    ],
    evidence:
      "En Argentina ningún sitio deja llamar con un toque a una línea oficial, ni siquiera la página de la Línea 102. Los mejores ejemplos están afuera: ANAR separa sus líneas por situación y Childline junta todas las vías en una página.",
  },
  {
    name: "Impacto y credibilidad",
    values: [
      "no", "partial", "partial", "partial", "partial", "partial", "partial", "partial", "partial", "partial",
      "partial", "yes", "yes", "yes", "partial", "partial", "yes", "partial", "partial",
    ],
    evidence:
      "Abundan las cifras sin año o que no coinciden entre páginas. NCMEC, ANAR, Save the Children y Thorn publican un informe por año; ninguna organización argentina lo hace.",
  },
  {
    name: "Prensa",
    values: [
      "no", "yes", "no", "partial", "no", "partial", "no", "no", "no", "partial",
      "no", "partial", "partial", "yes", "no", "partial", "yes", "partial", "unknown",
    ],
    evidence:
      "En Argentina, solo UNICEF tiene un centro de prensa completo. Afuera, Save the Children y Thorn publican notas y comunicados con fecha.",
  },
  {
    name: "Público internacional",
    values: [
      "no", "partial", "no", "partial", "partial", "no", "partial", "no", "no", "no",
      "no", "partial", "partial", "no", "yes", "no", "no", "partial", "partial",
    ],
    evidence:
      "Los diez sitios argentinos están solo en español. StopNCII y Take It Down ponen el selector de idioma en el header, con más de 30 idiomas.",
  },
];

/** Lo que el sector hace y lo que casi nadie hace (cantidad de competidores sobre el total). */
export const gapBars = [
  { label: "Botón de donar fijo en el header o en una barra", count: 10, kind: "done" },
  { label: "Impacto trazable por año, con fecha y fuente", count: 4, kind: "gap", note: "0 en Argentina" },
  { label: "Ruta clara para pedir ayuda o derivar", count: 3, kind: "gap", note: "0 de 10 en Argentina" },
  { label: "Sala de prensa con recursos propios", count: 3, kind: "gap", note: "1 en Argentina" },
  { label: "Donación que explica qué financia cada monto", count: 2, kind: "gap" },
  { label: "Botón de salida rápida", count: 2, kind: "gap", note: "0 de 11 en español" },
  { label: "Puerta de entrada por perfil en el menú", count: 1, kind: "gap", note: "0 en Argentina" },
];

/** Hallazgo → implicancia de diseño (las de prioridad alta y media). */
export const implications = [
  {
    finding: "En Argentina ningún sitio deja llamar con un toque a una línea oficial, ni siquiera la Línea 102.",
    implication:
      '"Necesito ayuda" fijo en todas las pantallas, con un aviso claro de que RPI deriva y con 911, 137 y 102 tocables.',
    source: "Los 10 sitios argentinos",
    priority: "High",
  },
  {
    finding: "Explicar a qué línea ir según el caso funciona.",
    implication:
      '"Necesito ayuda" como guía por situación: quién atiende, si es gratis y confidencial, y cuándo llamar al 911.',
    source: "ANAR · Línea 102",
    priority: "High",
  },
  {
    finding: "Una barra fija de acciones resuelve el acceso en el celular.",
    implication:
      'Probar en bocetos una barra inferior mobile con "Necesito ayuda", "Bajalo Ya!" y las líneas, sin tapar el contenido.',
    source: "NCMEC · Aldeas",
    priority: "High",
  },
  {
    finding: "Ningún sitio en español tiene un botón de salida rápida.",
    implication:
      'Botón "Salir rápido" fijo en Necesito ayuda y Bajalo Ya!, y una página corta para borrar el rastro en el celular.',
    source: "Childline",
    priority: "High",
  },
  {
    finding: "Ningún sitio argentino tiene una puerta de entrada por perfil en el primer nivel.",
    implication: 'Arquitectura con ocho entradas "Soy…" en la home y el menú, validada con card sorting.',
    source: "Navarro Viola · Childline",
    priority: "High",
  },
  {
    finding: "Take It Down y StopNCII son el modelo para Bajalo Ya!.",
    implication:
      "Bajalo Ya! en pasos, con la edad preguntada al inicio, qué no hacer, preguntas frecuentes honestas e ilustraciones.",
    source: "NCMEC · StopNCII",
    priority: "High",
  },
  {
    finding: "Los pop-ups, los chats que se abren solos y los banners compiten con quien llega en crisis.",
    implication: "Regla de diseño: nada de interrupciones en las rutas de ayuda.",
    source: "NCMEC · Garrahan · Grooming · Thorn",
    priority: "High",
  },
  {
    finding: 'A un aliado internacional lo convencen un "quiénes somos" en capas y un camino claro para sumarse.',
    implication:
      '"Who we are" en inglés (una frase, una meta, pilares y cifras) y una página "Sumate como aliado" con pasos y plazos.',
    source: "Thorn · WeProtect",
    priority: "Medium",
  },
  {
    finding: "Mostrar qué financia cada aporte genera confianza; las cifras sin fecha, no.",
    implication:
      "Sección para donantes y financiadores con montos que explican su resultado e impacto por año, con fecha y fuente.",
    source: "UNICEF · FUNDAMIND · Save the Children",
    priority: "Medium",
  },
];

export const docsUrl = "https://github.com/sofiadeane/redesign-Red-por-la-Infancia/tree/main/docs/03-ideate";
