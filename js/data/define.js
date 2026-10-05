/**
 * Etapa Define: problem statements, hipótesis If / Then y propuestas de valor.
 * Fuente: Notion del proyecto (2 - Define Stage).
 */

export const central = {
  problem:
    "Las personas que llegan a redporlainfancia.org, la mitad desde el celular y casi un tercio desde fuera de Argentina, no logran encontrar rápido la ayuda, la información o la forma de colaborar que buscan, porque el sitio no está pensado para el celular, solo está en español, esconde las acciones clave, no organiza la navegación por tipo de público y su contenido es difícil de recorrer y de mantener.",
  hypothesis:
    "Si rediseñamos el sitio con un enfoque mobile-first, accesos fijos a pedir ayuda y a donar, una navegación organizada por tipo de público (como la de ReConectate) y una versión en inglés de las páginas institucionales, entonces más personas van a encontrar lo que buscan en pocos toques y más pedidos de ayuda van a llegar a las líneas oficiales, y la fundación va a recibir más consultas, donaciones y propuestas de alianzas internacionales.",
  value:
    "Un sitio que conecta a cada persona con la ayuda, la información o la forma de colaborar que necesita, en pocos toques, desde cualquier celular y en su idioma.",
};

export const uniqueValueProposition =
  "El único lugar que, en un solo recorrido desde el celular, deriva cada situación de violencia a la línea correcta y suma una herramienta concreta para adolescentes como Bajalo Ya!.";

/** Un item por persona: problem statement, hipótesis y propuesta de valor. */
export const defineItems = [
  {
    persona: "laura",
    who: "una familiar angustiada que busca ayuda desde el celular, de noche y con apuro",
    need: "entender en segundos que la fundación no atiende casos y llegar con un toque a la línea oficial o al recurso que sí puede ayudarla",
    because:
      'el botón "Necesito Ayuda" desaparece en la home mobile, el aviso de "no somos asistencia directa" no deriva a ningún lado, los teléfonos no se pueden tocar y solo el 4% de los usuarios llega a esa página',
    painPoints: ["soporte", "proceso"],
    stories: "US-01, US-02, US-03",
    hypothesis: {
      if: '"Necesito Ayuda" está fijo en el header de todas las pantallas, un aviso claro explica que la fundación deriva y no asiste, y una guía corta lleva con un toque a la línea oficial o a Bajalo Ya!',
      then: "Laura va a poder comunicarse con la línea adecuada en 2 toques o menos, sin dudar ni esperar ayuda de la fundación",
      metric:
        "% de usuarios que llegan a Necesito Ayuda (hoy 4%), clics en teléfonos, tiempo hasta el primer clic",
    },
    valueProposition: "Derivación con un toque a las líneas oficiales y a Bajalo Ya!, con un aviso claro",
  },
  {
    persona: "silvia",
    who: "una madre de dos que llega desde Instagram o WhatsApp, siempre desde su celular",
    need: "accesos directos al Campus, ReConectate y Pantasaurus, y consejos cortos según la edad de sus hijos",
    because:
      "el contenido de las campañas está dentro de imágenes ilegibles en el celular y la home apila 9 campañas sin ordenarlas por público",
    painPoints: ["producto", "proceso"],
    stories: "US-05, US-06, US-07, US-27",
    hypothesis: {
      if: "las familias tienen una entrada propia con accesos directos al Campus, ReConectate y Pantasaurus, y el contenido se organiza por edad como texto real y legible en el celular",
      then: "Silvia va a encontrar consejos útiles rápido y los va a compartir con otras familias",
      metric:
        'Clics en los accesos al Campus, ReConectate y Pantasaurus, tiempo en página, clics en "Compartir por WhatsApp"',
    },
    valueProposition: "Entrada para familias con accesos directos al Campus, ReConectate y Pantasaurus",
  },
  {
    persona: "martin",
    who: "un docente y referente de ESI que consulta recursos entre clases desde el celular",
    need: "encontrar rápido el protocolo vigente para su provincia y descargarlo",
    because:
      'no hay buscador, "Nuestro Trabajo" no lleva a ninguna página y las guías no muestran su fecha ni se descargan con facilidad (solo 23 descargas en un año)',
    painPoints: ["proceso", "producto"],
    stories: "US-08, US-09, US-10",
    hypothesis: {
      if: "creamos una biblioteca de recursos con buscador, filtros por tema, público, provincia y año, y descarga directa en PDF",
      then: "Martín va a encontrar y descargar el protocolo vigente en menos de un minuto",
      metric: "Búsquedas con resultados, descargas de guías (hoy 23 por año), abandono en la biblioteca",
    },
    valueProposition: "Biblioteca de recursos con buscador, filtros y descarga directa",
  },
  {
    persona: "javier",
    who: "un pediatra de un hospital público que detecta señales de alerta en la consulta",
    need: "una guía breve de detección y un protocolo de derivación según su provincia",
    because:
      "las guías del sitio están pensadas para docentes y familias, no hay protocolos por provincia y no encuentra capacitaciones para equipos de salud",
    painPoints: ["producto", "proceso"],
    stories: "US-30",
    hypothesis: {
      if: "los profesionales de la salud tienen una entrada propia con guías breves, protocolos de derivación por provincia y acceso al Campus",
      then: "Javier va a saber qué hacer y a dónde derivar sin salir de la consulta",
      metric: "Visitas a la entrada para salud, descargas de protocolos, inscripciones al Campus desde salud",
    },
    valueProposition: "Entrada para salud con guías breves y protocolos de derivación por provincia",
  },
  {
    persona: "camila",
    who: "una adolescente de 15 años que quiere que se borre una foto íntima suya sin que se enteren sus padres",
    need: "llegar directo a Bajalo Ya! y a ReConectate y sentir que está en un espacio confidencial y sin juicio",
    because:
      "la herramienta está escondida entre otras campañas y el sitio le habla a adultos, aunque es la 3ª página más vista",
    painPoints: ["soporte", "proceso"],
    stories: "US-11, US-12, US-13, US-28",
    hypothesis: {
      if: "Bajalo Ya! tiene un acceso destacado en la home, lenguaje cercano, mensajes de confidencialidad y un botón de salida rápida",
      then: "Camila va a animarse a usar la herramienta y a pedir ayuda sin miedo a ser juzgada",
      metric:
        "Visitas a Bajalo Ya! desde la home, clics en los pasos por plataforma, clics en líneas de ayuda",
    },
    valueProposition: "Acceso directo a Bajalo Ya!, con lenguaje sin juicio y salida rápida",
  },
  {
    persona: "diego",
    who: "un donante que evalúa financiar un programa desde su empresa y compara varias ONGs antes de decidir",
    need: "confiar en la organización y donar en pocos pasos",
    because:
      'el botón "Quiero Colaborar" aparece cortado o desaparece, hay errores visuales y no encuentra datos de impacto ni notas en medios que respalden a la fundación',
    painPoints: ["financiero", "producto"],
    stories: "US-14, US-15, US-16, US-32",
    hypothesis: {
      if: "el botón de donar está siempre visible y completo, una sección para donantes y financiadores muestra el impacto por año y las notas en medios, y el proceso de donación tiene pocos pasos",
      then: "Diego va a confiar en la fundación y va a completar su donación mensual",
      metric: 'Clics en "Quiero Colaborar", donaciones completadas, abandono en el proceso de donación',
    },
    valueProposition: "Sección para donantes y financiadores con impacto por año y notas en medios",
  },
  {
    persona: "ana",
    who: "una asesora legislativa e investigadora que busca evidencia para un proyecto de ley",
    need: "encontrar, entender y citar investigaciones ordenadas por tema y año",
    because:
      "en la página Evidencia los títulos se superponen con el texto y no hay un repositorio con filtros ni fichas para citar",
    painPoints: ["producto", "proceso"],
    stories: "US-17, US-18",
    hypothesis: {
      if: "las investigaciones se ordenan en un repositorio con filtros y cada una tiene una ficha con resumen, metodología y cita sugerida",
      then: "Ana va a usar y citar la evidencia de la fundación en sus proyectos",
      metric:
        "Descargas de informes, visitas a fichas de investigación, contactos institucionales académicos y legislativos",
    },
    valueProposition: "Repositorio de investigaciones con fichas y cita sugerida",
  },
  {
    persona: "maya",
    who: "una aliada internacional que conoció a la fundación en una conferencia y no habla español",
    need: "leer el sitio en inglés y entender en pocos minutos qué hace la fundación, cómo trabaja y a quién contactar",
    because:
      'el sitio solo está en español, el selector de idioma tapa contenido, "Nuestro Trabajo" no explica el trabajo y no hay un contacto para alianzas, aunque la página de la Conferencia Mundial de Manila es la de mayor interacción del sitio',
    painPoints: ["proceso", "financiero"],
    stories: "US-21, US-22, US-23, US-24, US-25",
    hypothesis: {
      if: "el sitio tiene un selector de idioma visible, las páginas institucionales están en inglés y hay un resumen descargable y un contacto para alianzas",
      then: "Maya va a entender el trabajo de la fundación en menos de cinco minutos y va a poder proponer una alianza",
      metric:
        "Visitas a la versión en inglés, escaneos del QR, descargas del kit institucional y contactos internacionales durante y después de la conferencia de Manila (noviembre), comparados con la conferencia anterior",
    },
    valueProposition: "Sitio en inglés, con resumen institucional y contacto para alianzas",
  },
  {
    persona: "valeria",
    who: "una periodista que escribe contra reloj sobre un caso de violencia digital",
    need: "datos citables con fuente y fecha, y un contacto de prensa que responda rápido",
    because:
      "no hay una sección de prensa ni un contacto para medios, y los datos están dispersos en PDFs sin fecha",
    painPoints: ["soporte", "producto"],
    stories: "US-31",
    hypothesis: {
      if: "el sitio tiene una sala de prensa con contacto directo, voceros, datos clave con fuente y una guía para informar sin revictimizar",
      then: "Valeria va a citar a la fundación como fuente en su nota del día",
      metric: "Contactos de prensa, descargas del kit de prensa, notas que citan a la fundación",
    },
    valueProposition: "Sala de prensa con voceros, datos citables y contacto directo",
  },
  {
    persona: "equipo",
    who: "el equipo de comunicación, que mantiene el sitio día a día",
    need: "publicar campañas y recursos nuevos sin depender del equipo de IT, y registrar su impacto a medida que sucede",
    because:
      "cada página se arma desde cero en Divi, no hay plantillas, no hay forma de medir si el sitio cumple su objetivo y no hay un registro de capacitaciones, talleres ni reconocimientos",
    painPoints: ["soporte", "proceso"],
    stories: "US-19, US-20, US-26, US-29, US-33",
    hypothesis: {
      if: "el sitio usa plantillas editables para campañas, recursos y noticias, y mide eventos clave en Analytics",
      then: "el equipo va a publicar contenido nuevo sin depender de IT y va a saber qué funciona",
      metric:
        "Tiempo de publicación de una página nueva, páginas publicadas sin IT, eventos clave configurados",
    },
    valueProposition: "Plantillas editables para publicar sin depender de IT",
  },
];

export const valueCategories = {
  ayuda: {
    name: "Ayuda inmediata",
    color: "#ffc2dc",
  },
  acceso: {
    name: "Accesible desde cualquier celular e idioma",
    color: "#d6c9ff",
  },
  claro: {
    name: "Fácil de encontrar y de entender",
    color: "#ffe39a",
  },
  confianza: {
    name: "Seguro y confiable",
    color: "#b4ecd3",
  },
  equipo: {
    name: "Autonomía para el equipo",
    color: "#c3ceff",
  },
  fuera: {
    name: "Apartadas",
    color: "#e7e5ea",
  },
};

/**
 * Lluvia de ideas del paso 1. Las ideas con "persona" son las que sobreviven
 * el filtro y se convierten en la propuesta de valor de esa persona.
 */
export const brainstorm = [
  {
    text: 'Botón "Necesito Ayuda" fijo en todas las pantallas',
    category: "ayuda",
  },
  {
    text: "Teléfonos que se llaman con un toque",
    category: "ayuda",
  },
  {
    text: "Aviso claro y derivación a líneas oficiales y Bajalo Ya!",
    category: "ayuda",
    persona: "laura",
  },
  {
    text: 'Guía "¿Qué está pasando?" que indica qué línea corresponde',
    category: "ayuda",
  },
  {
    text: "Pasos cortos de qué hacer ante un relato",
    category: "ayuda",
  },
  {
    text: "Diseño mobile-first para 384–412 px",
    category: "acceso",
  },
  {
    text: "Texto real en lugar de texto en imágenes",
    category: "acceso",
  },
  {
    text: "Carga rápida con datos móviles",
    category: "acceso",
  },
  {
    text: "Compatible con lectores de pantalla",
    category: "acceso",
  },
  {
    text: "Navegación por tipo de público, como ReConectate",
    category: "claro",
  },
  {
    text: "Consejos por edad de los hijos",
    category: "claro",
  },
  {
    text: "Accesos directos al Campus, ReConectate y Pantasaurus",
    category: "claro",
    persona: "silvia",
  },
  {
    text: "Guías breves y protocolos de derivación para salud",
    category: "claro",
    persona: "javier",
  },
  {
    text: "Buscador en todo el sitio",
    category: "claro",
  },
  {
    text: "Biblioteca de recursos con filtros y descarga directa",
    category: "claro",
    persona: "martin",
  },
  {
    text: "Fecha visible en cada recurso",
    category: "claro",
  },
  {
    text: "Repositorio de investigaciones con cita sugerida",
    category: "claro",
    persona: "ana",
  },
  {
    text: "Compartir recursos por WhatsApp",
    category: "claro",
  },
  {
    text: "Acceso destacado a Bajalo Ya!",
    category: "confianza",
    persona: "camila",
  },
  {
    text: "Lenguaje sin juicio y mensajes de confidencialidad",
    category: "confianza",
  },
  {
    text: "Botón de salida rápida",
    category: "confianza",
  },
  {
    text: "Botón de donar siempre visible",
    category: "confianza",
  },
  {
    text: "Sección para donantes y financiadores con impacto por año",
    category: "confianza",
    persona: "diego",
  },
  {
    text: "Donación en pocos pasos",
    category: "confianza",
  },
  {
    text: "Página para empresas (RSE)",
    category: "confianza",
  },
  {
    text: "Sala de prensa con voceros y datos citables",
    category: "confianza",
    persona: "valeria",
  },
  {
    text: "Contacto institucional para academia y ámbito legislativo",
    category: "confianza",
  },
  {
    text: "Notas en medios sobre la fundación",
    category: "confianza",
  },
  {
    text: "Registro rápido de actividades para medir el impacto",
    category: "equipo",
  },
  {
    text: "Plantillas editables para campañas y recursos",
    category: "equipo",
    persona: "equipo",
  },
  {
    text: "Vista previa en celular antes de publicar",
    category: "equipo",
  },
  {
    text: "Eventos clave medidos en Analytics",
    category: "equipo",
  },
  {
    text: "Newsletter mensual",
    category: "fuera",
  },
  {
    text: "Chatbot con IA",
    category: "fuera",
  },
  {
    text: "Modo oscuro",
    category: "fuera",
  },
  {
    text: "Foro de familias",
    category: "fuera",
  },
  {
    text: "Versión en inglés de las páginas institucionales",
    category: "acceso",
    persona: "maya",
  },
  {
    text: "Selector de idioma visible en el header",
    category: "acceso",
  },
  {
    text: "Kit institucional descargable en inglés",
    category: "claro",
  },
  {
    text: "Más idiomas (portugués, francés)",
    category: "fuera",
  },
  {
    text: "App nativa",
    category: "fuera",
  },
];
