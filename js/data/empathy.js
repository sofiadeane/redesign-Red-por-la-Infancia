/**
 * Mapas de empatía de la etapa Empathize: qué dice, piensa, hace y siente cada persona,
 * más sus dolores y lo que espera ganar. Se construyen a partir de las proto-personas,
 * los mapas de recorrido y los datos de Google Analytics.
 */

export const empathyMaps = [
  {
    persona: "laura",
    scenario:
      "De noche, desde el celular, después de que su sobrina de 9 años le contara algo que la alarmó.",
    says: [
      "“Necesito saber a quién llamar, ya.”",
      "“¿Esto es una emergencia o puedo esperar a mañana?”",
      "“¿Dónde está el número? No lo encuentro.”",
    ],
    thinks: [
      "¿Y si hago algo mal y empeoro las cosas para la nena?",
      "¿Le tengo que preguntar más o mejor no tocar el tema?",
      "No sé si esta organización me puede ayudar o solo informa.",
    ],
    does: [
      "Busca en Google “dónde denunciar abuso infantil”",
      "Abre el menú, baja hasta el footer buscando “Necesito Ayuda”",
      "Copia el número a mano porque no puede tocarlo para llamar",
      "Lee las líneas en acordeones intentando decidir cuál le corresponde",
    ],
    feels: [
      "Angustia y urgencia",
      "Miedo a equivocarse",
      "Confusión ante tanto texto",
      "Alivio cuando por fin logra llamar",
    ],
    pains: [
      "El botón de ayuda no se ve en la home mobile",
      "Teléfonos que no se pueden tocar",
      "“No somos asistencia directa” la desorienta",
      "Mucho scroll antes de lo importante",
    ],
    gains: [
      "Un botón de ayuda visible en todas las pantallas",
      "Llamar con un solo toque (911, 137, 102)",
      "Una guía corta: qué hacer y qué no hacer con la niña",
      "Un tono contenedor que le dé calma",
    ],
  },
  {
    persona: "silvia",
    scenario:
      "Su hijo de 12 años acaba de recibir su primer celular y ella vio una campaña en el grupo de WhatsApp de la escuela.",
    says: [
      "“Quiero cuidar a mis hijos, pero no sé por dónde empezar.”",
      "“¿Cómo le hablo de grooming sin asustarlo?”",
      "“Esto lo tienen que ver todas las familias del grado.”",
    ],
    thinks: [
      "Mi hijo sabe más de redes que yo.",
      "No tengo tiempo para leer textos largos.",
      "¿Qué señales tendría que notar si algo le pasa?",
    ],
    does: [
      "Toca el link de una campaña en Instagram o WhatsApp",
      "Hace scroll por nueve campañas apiladas en la home",
      "Hace zoom para leer el texto dentro de las imágenes",
      "Comparte lo que le sirve en los grupos de familias",
    ],
    feels: [
      "Preocupación por la seguridad de sus hijos",
      "Abrumada por la cantidad de información",
      "Molesta cuando el diseño se rompe en su celular",
      "Útil y empoderada cuando encuentra un consejo claro",
    ],
    pains: [
      "Títulos cortados y textos superpuestos en pantallas chicas",
      "Texto ilegible dentro de las imágenes",
      "No sabe por dónde empezar en una home tan larga",
      "El widget de idioma tapa contenido",
    ],
    gains: [
      "Consejos cortos y visuales organizados por edad",
      "Formatos fáciles de compartir por WhatsApp",
      "Una guía simple de señales de alerta",
      "Una experiencia pensada para el celular",
    ],
  },
  {
    persona: "martin",
    scenario:
      "Detectó señales de grooming en un alumno y, a la vez, prepara un taller sobre violencia digital.",
    says: [
      "“Necesito material confiable para trabajar con mis alumnos.”",
      "“¿Este protocolo sigue vigente?”",
      "“¿Dónde está el buscador?”",
    ],
    thinks: [
      "Tengo que actuar bien y dentro de lo que pide la institución.",
      "Si cito algo desactualizado, pierdo credibilidad con la escuela.",
      "Me sirve más una biblioteca ordenada que un montón de campañas.",
    ],
    does: [
      "Consulta guías desde el celular entre clase y clase",
      "Usa el buscador y recibe una página en blanco",
      "Abre “Nuestro Trabajo” y solo se despliega un menú",
      "Descarga PDFs de ReConectate para preparar el taller",
    ],
    feels: [
      "Responsable por su alumno",
      "Frustrado cuando la búsqueda no devuelve nada",
      "Desconfiado de recursos fechados en 2016",
      "Motivado cuando encuentra el material justo",
    ],
    pains: [
      "Buscador roto y navegación que no lleva a ninguna página",
      "No sabe qué recursos están actualizados",
      "Guías mezcladas con campañas, sin filtros",
      "Protocolos que no distinguen por provincia",
    ],
    gains: [
      "Biblioteca con filtros por público, tema, provincia y año",
      "Un buscador que funcione",
      "Descargas claras en PDF, con fecha de actualización",
      "Un paso a paso para actuar institucionalmente",
    ],
  },
  {
    persona: "camila",
    scenario: "Una foto íntima suya circula entre compañeros. Busca una solución sola, desde su celular.",
    says: [
      "“Me pasó algo en internet y no quiero que se enteren mis viejos.”",
      "“¿Cómo borro una foto mía de internet?”",
      "“¿Esto es confidencial?”",
    ],
    thinks: [
      "Es mi culpa por haberla mandado.",
      "Si se enteran en casa o en la escuela, va a ser peor.",
      "Esta página está hecha para adultos, no para mí.",
    ],
    does: [
      "Busca en TikTok, Instagram o Google cómo borrar la foto",
      "Navega todo el sitio solo desde el celular",
      "Pasa por mucho texto institucional antes de encontrar Bajalo Ya!",
      "Duda antes de completar el formulario o de pedir ayuda",
    ],
    feels: [
      "Vergüenza y miedo",
      "Ansiedad por que la foto siga circulando",
      "Sola frente al problema",
      "Esperanza y alivio cuando ve que la pueden bajar",
    ],
    pains: [
      "Bajalo Ya! está escondida entre otras campañas",
      "El lenguaje le resulta lejano y adulto",
      "No le queda claro qué pasa con sus datos",
      "Teme ser juzgada",
    ],
    gains: [
      "Acceso directo a Bajalo Ya! desde la home",
      "Un mensaje claro: “no es tu culpa”",
      "Garantías de confidencialidad antes de empezar",
      "Lenguaje cercano y una experiencia 100% mobile",
    ],
  },
  {
    persona: "diego",
    scenario: "Evalúa donar todos los meses y si su empresa puede apoyar un programa; compara varias ONGs.",
    says: [
      "“Quiero ayudar, pero necesito confiar en a quién le doy.”",
      "“¿Qué impacto tuvieron el año pasado?”",
      "“¿Tienen un programa para empresas?”",
    ],
    thinks: [
      "Un sitio con errores me hace dudar de la organización.",
      "Necesito números para justificar la donación en la empresa.",
      "Si donar es complicado, lo dejo para después.",
    ],
    does: [
      "Descubre la fundación en un medio o en LinkedIn desde el celular",
      "Pasa a la computadora para investigar y donar",
      "Busca informes anuales y datos de transparencia",
      "Compara con otras ONGs antes de decidir",
    ],
    feels: [
      "Interesado y con ganas de comprometerse",
      "Desconfiado ante el copyright 2024 y los errores visuales",
      "Impaciente cuando el botón de donar aparece cortado",
      "Desanimado por no encontrar el impacto",
    ],
    pains: [
      "“Quiero Colaborar” cortado o ausente según el dispositivo",
      "Sin datos de impacto ni informes de transparencia",
      "Botones que no son links reales",
      "Señales de descuido que restan credibilidad",
    ],
    gains: [
      "Un diseño profesional y confiable",
      "Impacto en números y rendición de cuentas",
      "Un proceso de donación simple y seguro",
      "Información clara para alianzas corporativas y RSE",
    ],
  },
  {
    persona: "ana",
    scenario:
      "Redacta un proyecto de ley sobre acceso a la justicia para víctimas y busca evidencia citable.",
    says: [
      "“Necesito datos y evidencia para respaldar una política pública.”",
      "“¿Cuál es la metodología de esta encuesta?”",
      "“¿Con quién hablo por una consulta institucional?”",
    ],
    thinks: [
      "Si no puedo citarlo correctamente, no me sirve.",
      "Esta organización tiene buena evidencia, pero está desordenada.",
      "¿Me van a responder si escribo al contacto general?",
    ],
    does: [
      "Llega desde referencias de INSPIRE, UNICEF o búsquedas académicas",
      "Revisa la página Evidencia desde la computadora",
      "Busca publicaciones por año o tema sin poder filtrar",
      "Escribe al contacto general esperando una derivación",
    ],
    feels: [
      "Interesada en la evidencia disponible",
      "Molesta cuando los títulos se superponen con el texto",
      "Frustrada por no encontrar un repositorio ordenado",
      "Insegura de recibir respuesta",
    ],
    pains: [
      "Errores de diseño en la página Evidencia",
      "No hay repositorio de publicaciones con filtros",
      "Faltan formatos para citar y fichas descargables",
      "No hay contacto para prensa o instituciones",
    ],
    gains: [
      "Un repositorio filtrable por año, tema y tipo",
      "Fichas descargables con metodología y formato de cita",
      "Un contacto institucional claro",
      "Visibilidad del trabajo de incidencia y las alianzas",
    ],
  },
  {
    persona: "maya",
    scenario:
      "Escucha a Red por la Infancia en un panel sobre INSPIRE en Manila y escanea el QR de la presentación.",
    says: [
      "“Quiero entender qué hacen y cómo, pero el sitio está solo en español.”",
      "“¿Tienen un resumen en inglés para compartir con mi equipo?”",
      "“¿A quién le escribo para hablar de una alianza?”",
    ],
    thinks: [
      "Tengo pocos minutos entre paneles para entender quiénes son.",
      "La traducción automática no me da confianza para recomendarlos.",
      "Si no encuentro un contacto ahora, la oportunidad se enfría.",
    ],
    does: [
      "Escanea el QR desde el celular durante la conferencia",
      "Busca un selector de idioma y activa la traducción del navegador",
      "Abre “¿Quiénes Somos?”, INSPIRE y Evidencia",
      "Retoma el seguimiento desde la notebook, de vuelta en la oficina",
    ],
    feels: [
      "Interesada y curiosa después del panel",
      "Confundida por un sitio que no puede leer",
      "Frustrada cuando la traducción rompe las imágenes",
      "Esperanzada, pero con dudas sobre cómo avanzar",
    ],
    pains: [
      "No hay versión en inglés clara",
      "El selector flotante de idioma tapa contenido",
      "Texto dentro de imágenes que no se traduce",
      "Sin resumen institucional ni contacto para alianzas",
    ],
    gains: [
      "Un selector de idioma visible y páginas clave traducidas por personas",
      "Misión, programas e impacto en pocos minutos",
      "Un resumen institucional descargable en inglés",
      "Un contacto directo para alianzas internacionales",
    ],
  },
];
