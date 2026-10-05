/**
 * Mapas de recorrido. "mood" va de 1 (muy mal) a 5 (muy bien) y dibuja la curva emocional.
 * Fuente: Notion del proyecto (1.4 - Mapa de Usuarios) y entrevista con la directora ejecutiva.
 */

export const journeys = [
  {
    persona: "laura",
    goal: "Encontrar rápido a quién llamar porque su sobrina le contó algo que la alarmó, sabiendo que la fundación deriva pero no atiende casos.",
    mood: [1, 3, 1, 2, 3, 4],
    steps: [
      {
        action: "Buscar ayuda en Google",
        tasks: ['Buscar "dónde denunciar abuso infantil"', "Elegir un resultado"],
        feelings: ["Angustiada", "Apurada"],
        opportunities: ["Mejor posicionamiento en Google", "Título y descripción claros"],
      },
      {
        action: "Entrar al sitio",
        tasks: ["Esperar que cargue la home", "Entender qué hace la organización"],
        feelings: ["Esperanzada", "Impaciente"],
        opportunities: ["Botón de ayuda visible al cargar", "Carga más rápida"],
      },
      {
        action: 'Encontrar "Necesito Ayuda"',
        tasks: ["Buscar el botón en el celular", "Abrir el menú hamburguesa", "Bajar hasta el footer"],
        feelings: ["Perdida", "Frustrada"],
        opportunities: ['"Necesito Ayuda" fijo en el header mobile', "También dentro del menú"],
      },
      {
        action: "Elegir la línea adecuada",
        tasks: [
          'Leer que la fundación "no es una organización de asistencia directa"',
          "Abrir los acordeones de las líneas",
          "Decidir si es una urgencia",
        ],
        feelings: ["Confundida", "Insegura"],
        opportunities: [
          "Aviso claro: qué hace la fundación y a quién recurrir",
          'Guía "¿Qué está pasando?" que deriva a la línea oficial o a Bajalo Ya!',
          "911, 137 y 102 visibles sin acordeones",
        ],
      },
      {
        action: "Llamar",
        tasks: ["Copiar el número", "Salir del navegador y marcar"],
        feelings: ["Nerviosa", "Aliviada"],
        opportunities: ["Números con toque para llamar", "Botones de llamada grandes"],
      },
      {
        action: "Saber cómo acompañar a la niña",
        tasks: ['Buscar "Cómo ayudar a una víctima"', "Leer qué hacer y qué no hacer"],
        feelings: ["Insegura", "Más tranquila"],
        opportunities: ["Link directo desde Necesito Ayuda", "Guía en pasos cortos"],
      },
    ],
  },
  {
    persona: "silvia",
    goal: "Aprender cómo cuidar a su hijo de 12 años, que acaba de recibir su primer celular.",
    mood: [3, 2, 2, 2, 5, 3],
    steps: [
      {
        action: "Descubrir la campaña",
        tasks: ["Ver un post en Instagram o un video en el grupo de WhatsApp", "Tocar el link"],
        feelings: ["Preocupada", "Curiosa"],
        opportunities: ["Links de campañas que lleven a la página exacta"],
      },
      {
        action: "Llegar al sitio",
        tasks: ["Llegar a la home", "Cerrar el widget de idioma que tapa contenido"],
        feelings: ["Distraída", "Molesta"],
        opportunities: ["Widget de idioma que no tape contenido", "Home más corta y clara"],
      },
      {
        action: "Buscar contenido para su edad",
        tasks: ["Recorrer 9 campañas apiladas", "Entrar a ReConectate", 'Elegir "Madres, padres y familias"'],
        feelings: ["Abrumada", "Perdida"],
        opportunities: [
          "Navegación por público, como en ReConectate",
          "Accesos directos al Campus, ReConectate y Pantasaurus",
          "Rutas por edad",
        ],
      },
      {
        action: "Leer y entender",
        tasks: ["Leer textos dentro de imágenes", "Hacer zoom en el celular", "Buscar señales de alerta"],
        feelings: ["Frustrada", "Interesada"],
        opportunities: ["Texto real legible a 384 px", "Consejos cortos y prácticos"],
      },
      {
        action: "Compartir con otras familias",
        tasks: ["Copiar el link", "Mandarlo por WhatsApp"],
        feelings: ["Útil", "Empoderada"],
        opportunities: ["Botón para compartir por WhatsApp"],
      },
      {
        action: "Aplicarlo en casa",
        tasks: ["Hablar con su hijo", "Configurar el celular de forma segura"],
        feelings: ["Insegura", "Comprometida"],
        opportunities: ["Guía para conversar con hijos", "Checklist para configurar el celular"],
      },
    ],
  },
  {
    persona: "martin",
    goal: "Encontrar un protocolo para actuar ante una sospecha de grooming y material para un taller.",
    mood: [2, 2, 2, 3, 3, 4],
    steps: [
      {
        action: "Buscar recursos",
        tasks: ["Entrar desde Google o un link de un colega", "Usar el buscador del sitio"],
        feelings: ["Decidido", "Frustrado (la búsqueda sale en blanco)"],
        opportunities: ["Buscador que funcione, con sugerencias", "Página de error útil"],
      },
      {
        action: 'Navegar "Nuestro Trabajo"',
        tasks: ['Tocar "Nuestro Trabajo" (no lleva a ninguna página)', "Revisar el submenú"],
        feelings: ["Confundido"],
        opportunities: [
          '"Nuestro Trabajo" con página propia',
          "Navegación por público (Docentes, Familias…)",
        ],
      },
      {
        action: "Encontrar la guía correcta",
        tasks: ["Abrir Guías Orientativas 1 y 2", "Comparar fechas y provincias", "Revisar Recursos Legales"],
        feelings: ["Abrumado", "Desconfiado (¿está vigente?)"],
        opportunities: [
          "Biblioteca con filtros (tema, público, provincia, año)",
          "Fecha visible en cada guía",
        ],
      },
      {
        action: "Descargar y compartir",
        tasks: [
          "Buscar el botón de descarga",
          "Descargar el PDF en el celular",
          "Enviarlo al equipo directivo",
        ],
        feelings: ["Inseguro", "Aliviado"],
        opportunities: ['Botón "Descargar PDF" con peso del archivo', "Compartir por WhatsApp o mail"],
      },
      {
        action: "Actuar en la escuela",
        tasks: ["Aplicar el protocolo ante la sospecha", "Derivar a la línea correspondiente"],
        feelings: ["Responsable", "Ansioso"],
        opportunities: ["Protocolo paso a paso imprimible", "Contactos de derivación por provincia"],
      },
      {
        action: "Preparar el taller",
        tasks: ["Ir a ReConectate (Docentes)", "Buscar materiales para el aula"],
        feelings: ["Motivado", "Con dudas"],
        opportunities: ["Kit descargable para docentes", "Medir descargas en Analytics"],
      },
    ],
  },
  {
    persona: "javier",
    goal: "Saber qué hacer ante señales de alerta en una consulta pediátrica y a qué servicio derivar.",
    mood: [3, 2, 2, 3, 4, 4],
    steps: [
      {
        action: "Buscar entre consultas",
        tasks: [
          'Buscar en Google "señales de abuso infantil consulta pediátrica"',
          "Entrar desde el celular",
        ],
        feelings: ["Apurado", "Responsable"],
        opportunities: ["Página de destino para profesionales de la salud"],
      },
      {
        action: "Encontrar material para su profesión",
        tasks: ["Recorrer guías pensadas para docentes y familias", "Buscar algo para equipos de salud"],
        feelings: ["Perdido", "Frustrado"],
        opportunities: ["Navegación por público con entrada para salud", "Guías filtrables por profesión"],
      },
      {
        action: "Entender el protocolo",
        tasks: ["Leer qué preguntar y qué registrar", "Buscar el protocolo de su provincia"],
        feelings: ["Inseguro"],
        opportunities: ["Guía breve de detección para la consulta", "Protocolo de derivación por provincia"],
      },
      {
        action: "Derivar el caso",
        tasks: ["Hablar con la trabajadora social", "Contactar al servicio de protección local"],
        feelings: ["Nervioso", "Decidido"],
        opportunities: ["Directorio de servicios de protección por provincia", "Teléfonos con un toque"],
      },
      {
        action: "Formarse",
        tasks: ["Buscar una capacitación", "Inscribirse en el Campus"],
        feelings: ["Motivado"],
        opportunities: ["Acceso directo al Campus", "Capacitaciones certificadas para salud"],
      },
      {
        action: "Acompañar a la familia",
        tasks: ["Buscar material para entregar", "Compartirlo por WhatsApp"],
        feelings: ["Más tranquilo"],
        opportunities: ["Material descargable para familias", "Botón para compartir"],
      },
    ],
  },
  {
    persona: "camila",
    goal: "Lograr que se borre una foto íntima suya que circula entre compañeros, sin que se enteren sus padres.",
    mood: [1, 2, 2, 3, 3, 4],
    steps: [
      {
        action: "Buscar una solución",
        tasks: ['Buscar "cómo borrar una foto mía de internet"', "O tocar un link en Instagram"],
        feelings: ["Avergonzada", "Asustada"],
        opportunities: ["Contenido pensado para búsquedas de adolescentes", "Links directos desde Instagram"],
      },
      {
        action: "Llegar a Bajalo Ya!",
        tasks: [
          "Entrar a la home",
          "Buscar Bajalo Ya! entre las campañas",
          "Leer el banner (texto en imagen)",
        ],
        feelings: ["Ansiosa", "Perdida"],
        opportunities: ["Acceso destacado a Bajalo Ya! en la home", "Texto real, no en imágenes"],
      },
      {
        action: "Entender cómo funciona",
        tasks: [
          "Leer las instrucciones",
          "Ver si es confidencial",
          "Identificar en qué plataforma está la foto",
        ],
        feelings: ["Desconfiada", "Insegura"],
        opportunities: ['Mensajes de confidencialidad y "no es tu culpa"', "Lenguaje cercano"],
      },
      {
        action: "Pedir que se baje el contenido",
        tasks: ["Seguir los pasos de cada plataforma", "Completar formularios externos"],
        feelings: ["Esperanzada", "Abrumada"],
        opportunities: ["Pasos por plataforma claros y en orden", "Botón de salida rápida"],
      },
      {
        action: "Buscar apoyo",
        tasks: ["Buscar con quién hablar", "Ir a Necesito Ayuda o ReConectate"],
        feelings: ["Sola", "Más tranquila"],
        opportunities: [
          "Derivación clara a líneas de ayuda (137, 102)",
          "Contenido de ReConectate para adolescentes",
        ],
      },
      {
        action: "Seguir adelante",
        tasks: ["Revisar si el contenido se borró", "Hablar con un adulto de confianza"],
        feelings: ["Aliviada", "Vulnerable"],
        opportunities: ["Qué hacer si el contenido vuelve a circular", "Recursos para hablar con adultos"],
      },
    ],
  },
  {
    persona: "diego",
    goal: "Decidir si dona todos los meses y si su empresa puede apoyar un programa.",
    mood: [4, 2, 2, 2, 3, 2],
    steps: [
      {
        action: "Conocer la organización",
        tasks: ["Leer una nota o un post de LinkedIn", "Entrar desde el celular"],
        feelings: ["Interesado"],
        opportunities: ["Propuesta de valor clara en la home"],
      },
      {
        action: "Evaluar su credibilidad",
        tasks: ["Leer ¿Quiénes Somos?", "Notar errores visuales y el copyright 2024"],
        feelings: ["Desconfiado", "Dubitativo"],
        opportunities: ["Diseño prolijo y actualizado", "Logos de aliados visibles"],
      },
      {
        action: "Ver el impacto",
        tasks: [
          "Buscar cifras e informes anuales",
          "Buscar notas en medios",
          "Revisar alianzas (UNICEF, INSPIRE)",
        ],
        feelings: ["Insatisfecho (no encuentra datos)"],
        opportunities: [
          "Sección para donantes y financiadores",
          "Impacto en números a lo largo de los años",
          "Notas en medios y reconocimientos",
        ],
      },
      {
        action: "Ir a donar",
        tasks: [
          "Volver desde la computadora",
          'Buscar "Quiero Colaborar" (aparece cortado)',
          "Intentar abrirlo en otra pestaña",
        ],
        feelings: ["Molesto", "Impaciente"],
        opportunities: ["Botón de donar completo y siempre visible", "Es un link real"],
      },
      {
        action: "Completar la donación",
        tasks: ["Elegir un monto mensual", "Completar el pago"],
        feelings: ["Dubitativo", "Satisfecho"],
        opportunities: [
          "Montos sugeridos con su impacto",
          "Pago en pocos pasos",
          "Medir donaciones en Analytics",
        ],
      },
      {
        action: "Explorar alianzas",
        tasks: ["Buscar opciones para empresas", "Buscar un contacto institucional"],
        feelings: ["Desanimado"],
        opportunities: ["Página para empresas (RSE) y voluntariado", "Formulario de contacto"],
      },
    ],
  },
  {
    persona: "ana",
    goal: "Encontrar datos y encuestas que pueda citar en un proyecto de ley sobre acceso a la justicia.",
    mood: [4, 3, 2, 2, 2, 3],
    steps: [
      {
        action: "Llegar desde una referencia",
        tasks: ["Leer una referencia en un informe de INSPIRE o UNICEF", "Entrar desde la computadora"],
        feelings: ["Interesada"],
        opportunities: ["Páginas de destino claras para referencias externas"],
      },
      {
        action: "Buscar evidencia",
        tasks: ["Ir a Nuestro Trabajo > Evidencia", "Buscar por tema o año (no hay filtros)"],
        feelings: ["Impaciente"],
        opportunities: ["Repositorio con filtros por año y tema"],
      },
      {
        action: "Leer la investigación",
        tasks: ["Leer la encuesta (títulos superpuestos)", "Buscar la metodología"],
        feelings: ["Molesta", "Desconfiada"],
        opportunities: ["Diseño legible", "Resumen y metodología visibles"],
      },
      {
        action: "Descargar y citar",
        tasks: ["Buscar el PDF completo", "Armar la cita a mano"],
        feelings: ["Frustrada"],
        opportunities: ["Ficha descargable con cita sugerida"],
      },
      {
        action: "Contactar a la organización",
        tasks: ["Buscar un contacto institucional", "Escribir al mail general"],
        feelings: ["Insegura de recibir respuesta"],
        opportunities: ["Contacto institucional para academia y ámbito legislativo, separado de prensa"],
      },
      {
        action: "Hacer seguimiento",
        tasks: ["Esperar respuesta", "Proponer una reunión"],
        feelings: ["Impaciente", "Esperanzada"],
        opportunities: ["Respuesta automática con plazos", "Agenda para reuniones institucionales"],
      },
    ],
  },
  {
    persona: "maya",
    goal: "Entender qué hace Red por la Infancia y cómo trabaja, para evaluar una alianza después de una conferencia internacional.",
    mood: [4, 3, 1, 2, 2, 3],
    steps: [
      {
        action: "Conocer a RxI en una conferencia",
        tasks: ["Escuchar su panel sobre INSPIRE", "Escanear el QR o anotar el sitio"],
        feelings: ["Interesada", "Curiosa"],
        opportunities: ["QR que lleve a una página en inglés", "Link corto y fácil de recordar"],
      },
      {
        action: "Entrar al sitio",
        tasks: ["Abrir el link en el celular", "Encontrarse con todo en español"],
        feelings: ["Confundida"],
        opportunities: ["Detectar el idioma del navegador y sugerir la versión en inglés"],
      },
      {
        action: "Buscar la versión en inglés",
        tasks: [
          "Buscar un selector de idioma",
          "Probar el widget flotante",
          "Usar la traducción del navegador",
        ],
        feelings: ["Frustrada", "Perdida"],
        opportunities: ["Selector de idioma visible en el header", "Páginas traducidas por personas"],
      },
      {
        action: "Entender qué hacen y cómo",
        tasks: [
          "Leer ¿Quiénes Somos?",
          "Intentar leer textos dentro de imágenes",
          "Buscar programas e impacto",
        ],
        feelings: ["Insegura", "Abrumada"],
        opportunities: [
          'Página "Who we are" en 2 minutos',
          "Impacto en números",
          "Texto real, no en imágenes",
        ],
      },
      {
        action: "Revisar evidencia y alianzas",
        tasks: ["Entrar a INSPIRE y Evidencia", "Buscar informes para compartir"],
        feelings: ["Interesada", "Impaciente"],
        opportunities: ["Resúmenes de investigaciones en inglés", "Kit institucional descargable"],
      },
      {
        action: "Contactar para una alianza",
        tasks: ["Buscar un contacto internacional", "Escribir al mail general en inglés"],
        feelings: ["Dudas", "Esperanzada"],
        opportunities: ["Formulario de alianzas en inglés", "Aclarar idiomas y plazos de respuesta"],
      },
    ],
  },
  {
    persona: "valeria",
    goal: "Conseguir datos confiables y una entrevista con la fundación para una nota que cierra hoy.",
    mood: [3, 2, 2, 1, 3, 4],
    steps: [
      {
        action: "Buscar una fuente",
        tasks: [
          'Buscar "grooming estadísticas Argentina"',
          "Encontrar notas anteriores que citan a la fundación",
        ],
        feelings: ["Apurada", "Interesada"],
        opportunities: ["Buen posicionamiento de datos clave en Google"],
      },
      {
        action: "Buscar la sección de prensa",
        tasks: ["Recorrer el menú", "Buscar un contacto para medios"],
        feelings: ["Perdida", "Impaciente"],
        opportunities: ["Sala de prensa en la navegación principal", "Entrada propia para prensa"],
      },
      {
        action: "Encontrar datos citables",
        tasks: ["Recorrer Evidencia y PDFs", "Buscar fecha y fuente de cada dato"],
        feelings: ["Desconfiada"],
        opportunities: ["Datos clave con fuente y fecha", "Fichas listas para citar"],
      },
      {
        action: "Pedir una entrevista",
        tasks: ["Escribir al formulario general", "Escribir por redes"],
        feelings: ["Frustrada", "Ansiosa"],
        opportunities: ["Contacto de prensa con plazo de respuesta", "Voceros por tema"],
      },
      {
        action: "Escribir la nota",
        tasks: ["Chequear cómo nombrar a la víctima", "Elegir imágenes"],
        feelings: ["Responsable", "Insegura"],
        opportunities: ["Guía para informar sin revictimizar", "Logos y fotos descargables"],
      },
      {
        action: "Publicar y volver",
        tasks: ["Citar a la fundación", "Guardar el contacto para la próxima"],
        feelings: ["Satisfecha"],
        opportunities: ["Notas publicadas en la sección de medios", "Newsletter para prensa"],
      },
    ],
  },
];
