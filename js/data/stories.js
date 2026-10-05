/**
 * Historias de usuario priorizadas con MoSCoW.
 * Fuente: Notion del proyecto (1.3 - Historias de usuario).
 */

export const stories = [
  {
    id: "US-01",
    priority: "Debe",
    persona: "laura",
    text: 'Como persona que busca ayuda urgente, quiero ver el botón "Necesito Ayuda" en todas las pantallas y dispositivos para llegar a los teléfonos de ayuda en un toque.',
    criteria: [
      "El botón está visible en el header en celular, tablet y computadora (no solo en el footer)",
      "También aparece dentro del menú hamburguesa",
      "Es un link real: se puede usar con teclado y lector de pantalla",
    ],
    evidence: "el botón desaparece en la home mobile y solo el 4% de los usuarios llega a Necesito Ayuda.",
  },
  {
    id: "US-02",
    priority: "Debe",
    persona: "laura",
    text: "Como persona que busca ayuda urgente, quiero tocar un número de teléfono y que se inicie la llamada para no tener que copiarlo ni memorizarlo.",
    criteria: [
      "Todos los números usan enlaces de llamada (tel:)",
      "Los botones de llamada miden al menos 44 px de alto",
      "911, 137 y 102 se ven sin abrir acordeones",
    ],
    evidence:
      "hoy ningún número se puede tocar para llamar; Necesito Ayuda se visita más desde el celular (179 vs 126 vistas).",
  },
  {
    id: "US-03",
    priority: "Debe",
    persona: "laura",
    text: "Como persona que busca ayuda urgente, quiero entender en pocos segundos que la fundación no brinda asistencia directa y a qué línea oficial o recurso recurrir para actuar sin perder tiempo.",
    criteria: [
      "Un aviso breve y visible explica que la fundación no brinda asistencia directa y a dónde ir",
      'Hay una guía corta tipo "¿Qué está pasando?" con 3 o 4 opciones',
      "Cada opción lleva directo a la línea oficial adecuada o a Bajalo Ya!",
      "El texto está escrito en lenguaje claro y contenedor",
    ],
    evidence:
      "la directora ejecutiva confirmó que la fundación no tiene equipo ni infraestructura para asistir casos; hoy el aviso existe pero no deriva a ningún lado.",
  },
  {
    id: "US-04",
    priority: "Debería",
    persona: "laura",
    text: "Como familiar que recibió un relato, quiero una guía paso a paso de qué hacer y qué no hacer con la niña o el niño para acompañarle sin causar más daño.",
    criteria: [
      '"Cómo ayudar a una víctima" está dividida en pasos cortos y se lee bien en celular',
      "Se accede desde Necesito Ayuda y desde la home",
    ],
    evidence: "",
  },
  {
    id: "US-05",
    priority: "Debería",
    persona: "silvia",
    text: "Como madre, quiero encontrar consejos según la edad de mis hijos para saber cómo hablarles de los riesgos en internet.",
    criteria: [
      "Hay rutas por edad: niñas y niños, preadolescentes, adolescentes",
      "Cada consejo se lee en menos de 2 minutos",
    ],
    evidence: "",
  },
  {
    id: "US-06",
    priority: "Debería",
    persona: "silvia",
    text: "Como madre que navega desde el celular, quiero leer el contenido de las campañas como texto real (no dentro de imágenes) para leerlo cómoda sin hacer zoom.",
    criteria: [
      "El texto de campañas y banners es texto real, no parte de la imagen",
      "Se lee sin zoom en pantallas de 384 px de ancho",
    ],
    evidence: "los banners tienen el texto incrustado; las pantallas más comunes miden 384–412 px.",
  },
  {
    id: "US-07",
    priority: "Podría",
    persona: "silvia",
    text: "Como madre, quiero compartir un recurso por WhatsApp con un toque para pasárselo a otras familias de la escuela.",
    criteria: ["Cada recurso y campaña tiene botón para compartir por WhatsApp y copiar el link"],
    evidence: "Instagram y Facebook traen unas 660 personas al año; el contenido circula en redes.",
  },
  {
    id: "US-08",
    priority: "Debe",
    persona: "martin",
    text: "Como docente, quiero buscar recursos por palabra clave para encontrar rápido el protocolo que necesito.",
    criteria: [
      "El buscador está visible en el header",
      "Los resultados muestran título, tipo de recurso y año",
      "Si no hay resultados, se muestran sugerencias (nunca una página en blanco)",
    ],
    evidence: "hoy la búsqueda y la página de error se ven completamente en blanco.",
  },
  {
    id: "US-09",
    priority: "Debería",
    persona: "martin",
    text: "Como docente, quiero filtrar las guías por público, tema, provincia y año para saber cuáles aplican a mi caso y están vigentes.",
    criteria: [
      "La biblioteca de recursos tiene filtros combinables",
      "Cada recurso muestra su fecha de publicación o actualización",
    ],
    evidence: "",
  },
  {
    id: "US-10",
    priority: "Debe",
    persona: "martin",
    text: "Como docente, quiero descargar las guías desde el celular de forma clara para poder guardarlas y compartirlas.",
    criteria: [
      'Cada guía tiene un botón "Descargar PDF" con el peso del archivo',
      "La descarga funciona en celular",
      "Cada descarga se registra en Analytics",
    ],
    evidence:
      "las Guías Orientativas se ven más en celular (252 vs 198 vistas) y solo 23 personas descargaron un PDF en el año.",
  },
  {
    id: "US-11",
    priority: "Debe",
    persona: "camila",
    text: "Como adolescente, quiero llegar a Bajalo Ya! directamente desde la home para pedir que se borre mi contenido lo antes posible.",
    criteria: [
      "Bajalo Ya! tiene un acceso destacado en la home y en el menú",
      "Se llega en 2 toques o menos desde cualquier página",
    ],
    evidence: "es la 3ª página más vista del sitio (706 vistas), mayormente desde el celular (426 vs 280).",
  },
  {
    id: "US-12",
    priority: "Debe",
    persona: "camila",
    text: "Como adolescente, quiero que el sitio me hable sin juzgarme y me explique que es confidencial para animarme a pedir ayuda.",
    criteria: [
      "Los mensajes de confidencialidad están visibles en Bajalo Ya! y Necesito Ayuda",
      "El tono se valida con adolescentes antes de publicarse",
    ],
    evidence: "",
  },
  {
    id: "US-13",
    priority: "Debería",
    persona: "camila",
    text: "Como adolescente, quiero un botón de salida rápida para cerrar la página al instante si alguien se acerca.",
    criteria: [
      'Hay un botón "Salir rápido" fijo en Bajalo Ya! y Necesito Ayuda',
      "Al tocarlo, se abre un sitio neutro (por ejemplo, Google)",
    ],
    evidence: "",
  },
  {
    id: "US-14",
    priority: "Debe",
    persona: "diego",
    text: 'Como donante, quiero que el botón "Quiero Colaborar" se vea completo en cualquier pantalla para poder donar sin trabas.',
    criteria: [
      "El botón no se corta ni desaparece en ningún ancho de pantalla (de 320 a 1920 px)",
      "Es un link real y se puede abrir en otra pestaña",
    ],
    evidence: "hoy el botón aparece cortado en computadora y desaparece en la home mobile.",
  },
  {
    id: "US-15",
    priority: "Debería",
    persona: "diego",
    text: "Como donante, quiero ver el impacto de la organización en números para confiar en que mi aporte sirve.",
    criteria: ["Hay una sección de impacto con cifras actualizadas e informes anuales descargables"],
    evidence: "",
  },
  {
    id: "US-16",
    priority: "Podría",
    persona: "diego",
    text: "Como gerente de una empresa, quiero conocer opciones para empresas (RSE) y voluntariado para proponer una alianza.",
    criteria: ["Quiero Colaborar incluye opciones para empresas y un formulario de contacto"],
    evidence: "",
  },
  {
    id: "US-17",
    priority: "Debería",
    persona: "ana",
    text: "Como investigadora, quiero un repositorio de publicaciones ordenado por año y tema para encontrar y citar evidencia.",
    criteria: [
      "Las publicaciones se listan con filtros por año y tema",
      "Cada una tiene una ficha con resumen, metodología y cita sugerida",
    ],
    evidence:
      "en Evidencia los títulos se superponen con el texto; la página se visita sobre todo desde computadora (186 vs 83 vistas).",
  },
  {
    id: "US-18",
    priority: "Podría",
    persona: "ana",
    text: "Como asesora legislativa, quiero un contacto institucional para el ámbito académico y judicial/legislativo para pedir información o proponer un trabajo conjunto.",
    criteria: [
      "Hay un mail o formulario institucional separado del contacto general y del de prensa",
      "Se ofrecen recursos pensados para academia y para el ámbito judicial/legislativo",
    ],
    evidence:
      "la fundación quiere ofrecer recursos distintos a prensa, academia y ámbito judicial/legislativo.",
  },
  {
    id: "US-19",
    priority: "Debe",
    persona: "equipo",
    text: "Como integrante del equipo de comunicación, quiero crear una campaña o un recurso nuevo a partir de una plantilla para publicarlo sin depender del equipo de IT.",
    criteria: [
      "Hay plantillas para campaña, recurso y noticia",
      "El texto se carga en campos editables (no en imágenes)",
      "Hay vista previa en celular antes de publicar",
    ],
    evidence: "hoy cada página se arma desde cero en Divi y requiere al equipo de IT.",
  },
  {
    id: "US-20",
    priority: "Debería",
    persona: "equipo",
    text: "Como equipo, quiero medir los clics en teléfonos de ayuda, las donaciones y las descargas para saber si el sitio cumple su objetivo.",
    criteria: [
      "Estos eventos están configurados como eventos clave en Google Analytics",
      "Se revisan en un reporte mensual",
    ],
    evidence: "hoy no hay ningún evento clave configurado.",
  },
  {
    id: "US-21",
    priority: "Debe",
    persona: "maya",
    text: "Como aliada internacional, quiero elegir el idioma del sitio desde cualquier pantalla para poder leerlo en inglés.",
    criteria: [
      "El selector de idioma está en el header, en celular y en computadora, y no tapa contenido",
      "Muestra el nombre de cada idioma en su propio idioma (English, Español)",
      "Recuerda la elección y lleva a la misma página en el otro idioma",
    ],
    evidence:
      "hoy solo hay un selector flotante que tapa contenido; inglés es el 2º idioma del navegador entre los usuarios.",
  },
  {
    id: "US-22",
    priority: "Debe",
    persona: "maya",
    text: "Como aliada internacional, quiero leer en inglés las páginas institucionales para entender qué hace la fundación y cómo trabaja.",
    criteria: [
      "¿Quiénes Somos?, Nuestro Trabajo, INSPIRE, conferencias, Evidencia y Contacto tienen versión en inglés",
      "La traducción automática de estas páginas la revisa una persona antes de publicarse",
      "Cada página indica su idioma (hreflang) para que Google muestre la versión correcta",
    ],
    evidence:
      "la página de la Conferencia Mundial de Manila tiene la interacción más alta del sitio (2,18 vistas por usuario).",
  },
  {
    id: "US-23",
    priority: "Debe",
    persona: "maya",
    text: "Como aliada internacional, quiero un resumen institucional en inglés que pueda descargar y compartir con mi equipo.",
    criteria: [
      'Hay una página "Who we are" con misión, programas, alianzas e impacto en números',
      "Se puede descargar como PDF de una o dos páginas",
      "Está lista antes de la conferencia de Manila y el QR de las presentaciones lleva ahí",
    ],
    evidence:
      "es lo más rápido de tener listo antes de la conferencia de Manila de noviembre, mientras se traduce el resto del sitio.",
  },
  {
    id: "US-24",
    priority: "Debería",
    persona: "maya",
    text: "Como aliada internacional, quiero un contacto para alianzas y prensa internacional para proponer un trabajo conjunto.",
    criteria: [
      "Hay un formulario o mail para alianzas internacionales, en inglés",
      "Se indica en qué idiomas responde el equipo y en qué plazo",
    ],
  },
  {
    id: "US-25",
    priority: "Podría",
    persona: "maya",
    text: "Como aliada internacional, quiero ver el sitio en más idiomas (por ejemplo, portugués o francés) para compartirlo con colegas de otros países.",
    criteria: [
      "El sistema de idiomas permite sumar nuevos idiomas sin rehacer páginas",
      "Se priorizan según los datos de Analytics y las conferencias de cada año",
    ],
  },
  {
    id: "US-26",
    priority: "Debería",
    persona: "equipo",
    text: "Como equipo, quiero cargar cada página una sola vez, en español, y que se traduzca automáticamente a los otros idiomas, para mantener el sitio en varios idiomas sin duplicar trabajo.",
    criteria: [
      "Al publicar una página en español, se traduce sola a los idiomas activos",
      "Se puede corregir a mano una palabra o frase de la traducción, por ejemplo un término técnico",
      "Las correcciones se guardan en un glosario y se aplican en todo el sitio",
      "Se puede marcar qué no se traduce: nombres propios, de programas (Bajalo Ya!, ReConectate) y de organismos",
      "Se ve qué páginas tienen la traducción sin revisar",
    ],
    evidence:
      "el equipo no quiere duplicar cada página por idioma, y muchas palabras técnicas se traducen mal de forma automática.",
  },
  {
    id: "US-27",
    priority: "Debe",
    persona: "silvia",
    text: "Como madre, quiero accesos directos al Campus, a ReConectate y a Pantasaurus para formarme y encontrar material para mis hijos sin recorrer todo el sitio.",
    criteria: [
      "Los tres accesos están en la entrada para familias y en la home",
      "El acceso al Campus tiene un lugar reservado hasta que se lance",
    ],
    evidence: "pedido de la directora ejecutiva; la home hoy apila 9 campañas sin orden.",
  },
  {
    id: "US-28",
    priority: "Debe",
    persona: "camila",
    text: "Como adolescente, quiero llegar a ReConectate y a Bajalo Ya! desde cualquier pantalla para encontrar ayuda y contenido pensado para mí.",
    criteria: [
      "Hay una entrada para adolescentes en la navegación principal",
      "Bajalo Ya! y ReConectate (Adolescentes) están a 2 toques o menos",
    ],
    evidence: "pedido de la directora ejecutiva; Bajalo Ya! es la 3ª página más vista.",
  },
  {
    id: "US-29",
    priority: "Debe",
    persona: "equipo",
    text: "Como persona que visita el sitio, quiero una navegación organizada por tipo de público, como la de ReConectate, para encontrar rápido lo que es para mí.",
    criteria: [
      "El menú principal tiene una entrada por público",
      "Cada entrada reúne recursos, campañas y contactos de ese público",
      "La estructura se valida con card sorting antes de diseñar",
    ],
    evidence:
      "a la propia directora ejecutiva le cuesta encontrar información en el sitio; la navegación de ReConectate por audiencia le resulta fácil.",
  },
  {
    id: "US-30",
    priority: "Debería",
    persona: "javier",
    text: "Como pediatra, quiero guías breves de detección y un protocolo de derivación por provincia para actuar bien desde la consulta.",
    criteria: [
      "Hay una entrada para profesionales de la salud",
      "Cada guía se lee en menos de 3 minutos en el celular",
      "El protocolo de derivación se filtra por provincia",
    ],
    evidence: "la directora ejecutiva pidió sumar a profesionales de la salud como público.",
  },
  {
    id: "US-31",
    priority: "Debería",
    persona: "valeria",
    text: "Como periodista, quiero una sala de prensa con contacto directo, voceros y datos clave con fuente para escribir una nota antes del cierre.",
    criteria: [
      "Hay una sección de prensa con mail y plazo de respuesta",
      "Los datos clave muestran fuente y fecha",
      "Se pueden descargar logos, fotos y una guía para informar sin revictimizar",
    ],
    evidence: "la fundación quiere tratar a prensa como un público aparte, con recursos propios.",
  },
  {
    id: "US-32",
    priority: "Debería",
    persona: "diego",
    text: "Como financiador, quiero ver las notas en medios y el impacto de la fundación a lo largo de los años para decidir si apoyo un programa.",
    criteria: [
      "Hay una sección para donantes, voluntarios y financiadores",
      "Muestra impacto por año (capacitaciones, talleres, provincias, reconocimientos)",
      "Lista las notas en medios con fecha y medio",
    ],
    evidence: "pedido de la directora ejecutiva; hoy no hay datos de impacto ni notas en medios en el sitio.",
  },
  {
    id: "US-33",
    priority: "Debería",
    persona: "equipo",
    text: "Como equipo, quiero registrar cada actividad (capacitaciones, talleres, seminarios, reconocimientos) en el momento para que alimente la sección de impacto sin trabajo extra.",
    criteria: [
      "Cargar una actividad lleva menos de 2 minutos desde el celular",
      "Cada registro tiene tipo, fecha, lugar, público y cantidad de personas",
      "Los números del sitio se actualizan a partir de esos registros",
    ],
    evidence: "la directora ejecutiva no sabe de dónde sacar los números de impacto ni cómo registrarlos.",
  },
];
