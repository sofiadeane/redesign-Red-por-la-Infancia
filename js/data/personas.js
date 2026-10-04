/**
 * Proto-personas de la etapa Empathize.
 * Fuente: Notion del proyecto (1.1 - Personas).
 */

export const personas = [
  {
    id: "laura",
    group: "UserA",
    name: "Laura",
    role: "Busca ayuda urgente",
    quote: "Necesito saber a quién llamar, ya",
    primary: true,
    age: "38 años",
    location: "Conurbano bonaerense",
    job: "Empleada administrativa",
    device: "Celular Android de gama media, datos móviles",
    arrives: 'Busca en Google "dónde denunciar abuso infantil" o ve una publicación en Instagram',
    context:
      "Su sobrina de 9 años le contó algo que la alarmó. Está angustiada, no sabe si es una emergencia ni qué pasos seguir. Busca de noche, cuando los chicos duermen.",
    goals: [
      "Encontrar rápido un teléfono o lugar donde pedir ayuda",
      "Entender si su caso es una urgencia",
      "Saber qué hacer y qué no hacer con la niña",
    ],
    frustrations: [
      'No ve el botón "Necesito Ayuda" en la home desde el celular',
      "Los números de teléfono no se pueden tocar para llamar",
      'Se confunde al leer que Red por la Infancia "no es una organización de asistencia directa"',
      "Mucho texto y scroll antes de encontrar lo importante",
    ],
    needs:
      "Acceso a ayuda visible en todas las pantallas, teléfonos con un toque para llamar, lenguaje claro y contenedor, guía paso a paso.",
    pages: "Necesito Ayuda, Cómo ayudar a una víctima, Bajalo Ya!",
    ga: "Google es la principal vía de entrada y Necesito Ayuda se visita más desde el celular (179 vs 126 vistas), pero solo el 4% de los usuarios llega a esa página.",
  },
  {
    id: "silvia",
    group: "UserB",
    name: "Silvia",
    role: "Madre que quiere informarse",
    quote: "Quiero cuidar a mis hijos, pero no sé por dónde empezar",
    primary: true,
    age: "34 años",
    location: "Rosario",
    job: "Comerciante, madre de dos (7 y 12 años)",
    device: "Celular Android de gama media; casi nunca usa computadora",
    arrives: "Ve una campaña en redes sociales o un video compartido en el grupo de WhatsApp de la escuela",
    context:
      "Su hijo mayor acaba de recibir su primer celular. Le preocupan las redes, el grooming y no sabe cómo hablar de estos temas sin asustarlo.",
    goals: [
      "Aprender a detectar señales de alerta",
      "Obtener consejos prácticos y cortos para hablar con sus hijos",
      "Compartir información útil con otras familias",
    ],
    frustrations: [
      "Los títulos se cortan y el texto se superpone en pantallas chicas",
      "El texto dentro de las imágenes de campañas es ilegible en el celular",
      "La home es muy larga (9 campañas apiladas) y no sabe por dónde empezar",
      "El widget de idioma tapa contenido",
    ],
    needs:
      "Contenido corto y visual por edad de los hijos, formatos fáciles de compartir, diseño mobile-first.",
    pages: "Campañas, ReConectate (Madres, padres y familias), Guía para la detección",
    ga: "Android es el sistema más usado en celulares (~2.000 usuarios vs 730 en iOS) e Instagram y Facebook traen unas 660 personas al año.",
  },
  {
    id: "martin",
    group: "UserC",
    name: "Martín",
    role: "Docente / profesional",
    quote: "Necesito material confiable para trabajar con mis alumnos",
    primary: true,
    age: "45 años",
    location: "Córdoba",
    job: "Docente de secundaria y referente de ESI en su escuela",
    device: "Principalmente celular (consulta guías entre clases); notebook para preparar talleres",
    arrives: "Recomendación de un colega, búsqueda en Google, links de UNICEF",
    context:
      "Detectó señales de grooming en un alumno y además quiere preparar un taller sobre violencia digital. Busca protocolos, guías y recursos descargables que pueda citar y compartir.",
    goals: [
      "Encontrar guías y protocolos actualizados según su provincia",
      "Descargar materiales para usar en clase (ReConectate)",
      "Saber cómo actuar institucionalmente ante una sospecha",
    ],
    frustrations: [
      '"Nuestro Trabajo" no lleva a ninguna página, solo abre un menú',
      "No hay buscador; la búsqueda devuelve una página en blanco",
      "No queda claro qué recursos son actuales (algunos son de 2016)",
      "Las guías están mezcladas con campañas, sin filtros por público o tema",
    ],
    needs:
      "Biblioteca de recursos con filtros (público, tema, provincia, año), buscador que funcione, descargas claras en PDF.",
    pages: "Guías Orientativas, Recursos Legales, ReConectate",
    ga: "Las Guías Orientativas se ven más desde el celular (252 vistas) que desde la computadora (198), y solo 23 personas descargaron un PDF en todo el año.",
  },
  {
    id: "camila",
    group: "UserD",
    name: "Camila",
    role: "Adolescente",
    quote: "Me pasó algo en internet y no quiero que se enteren mis viejos",
    primary: true,
    age: "15 años",
    location: "Mendoza",
    job: "Estudiante de secundaria",
    device: "Solo celular",
    arrives:
      'TikTok o Instagram, una charla en la escuela, o buscando "cómo borrar una foto mía de internet"',
    context:
      "Una foto íntima suya está circulando entre compañeros. Tiene miedo y vergüenza, y busca una solución por su cuenta antes de pedir ayuda a un adulto.",
    goals: [
      "Hacer que se borre el contenido lo antes posible",
      "Entender sus derechos y que no es su culpa",
      "Encontrar ayuda confidencial",
    ],
    frustrations: [
      "Siente que el sitio está pensado para adultos",
      "La herramienta Bajalo Ya! está escondida entre otras campañas",
      "Mucho texto institucional antes de llegar a algo concreto",
    ],
    needs:
      "Lenguaje cercano y sin juicio, acceso directo a Bajalo Ya!, mensajes de confidencialidad, experiencia 100% mobile.",
    pages: "Bajalo Ya!, ReConectate (Adolescentes), Necesito Ayuda",
    ga: "Bajalo Ya! es la 3ª página más vista del sitio (706 vistas en el año), mayormente desde el celular (426 vs 280).",
  },
  {
    id: "diego",
    group: "UserE",
    name: "Diego",
    role: "Donante",
    quote: "Quiero ayudar, pero necesito confiar en a quién le doy",
    primary: false,
    age: "52 años",
    location: "CABA",
    job: "Gerente en una empresa; evalúa donaciones personales y de RSE",
    device: "Celular para descubrir, computadora para donar",
    arrives: "Nota en un medio, LinkedIn, recomendación de un conocido",
    context:
      "Quiere donar mensualmente y está evaluando si su empresa puede apoyar un programa. Compara varias ONGs antes de decidir.",
    goals: [
      "Entender qué hace la organización y qué impacto tiene",
      "Donar de forma rápida y segura",
      "Conocer opciones para empresas o voluntariado",
    ],
    frustrations: [
      'El botón "Quiero Colaborar" aparece cortado o no aparece según el dispositivo',
      "El copyright desactualizado (2024) y los errores visuales le restan credibilidad",
      "No encuentra datos de impacto, informes anuales ni transparencia",
      "Los botones no son links reales (no puede abrirlos en otra pestaña)",
    ],
    needs:
      "Diseño profesional y confiable, impacto en números, proceso de donación simple, info para alianzas corporativas.",
    pages: "Quiero Colaborar, ¿Quiénes Somos?, Donar Ahora",
    ga: "Quiero Colaborar se visita sobre todo desde la computadora (160 vs 79 vistas) y hoy no hay forma de medir cuántas personas terminan donando.",
  },
  {
    id: "ana",
    group: "UserF",
    name: "Dra. Ana",
    role: "Investigadora / decisora de políticas",
    quote: "Necesito datos y evidencia para respaldar una política pública",
    primary: false,
    age: "47 años",
    location: "CABA",
    job: "Asesora legislativa e investigadora universitaria",
    device: "Computadora de escritorio",
    arrives: "Referencias en informes de INSPIRE / UNICEF, búsqueda académica, contacto institucional",
    context:
      "Está redactando un proyecto de ley sobre acceso a la justicia para víctimas y busca encuestas, datos y antecedentes legislativos que pueda citar.",
    goals: [
      "Encontrar investigaciones y datos con metodología clara",
      "Citar y descargar informes",
      "Conocer las alianzas y el trabajo de incidencia de la organización",
    ],
    frustrations: [
      "En la página Evidencia los títulos se superponen con el texto",
      "No hay un repositorio ordenado de publicaciones por año o tema",
      "No hay contacto específico para prensa o instituciones",
    ],
    needs:
      "Repositorio de publicaciones con filtros y fichas descargables, formatos para citar, contacto institucional claro.",
    pages: "Evidencia, INSPIRE, WePROTECT, Recursos Legales",
    ga: "Evidencia se visita mayormente desde la computadora (186 vs 83 vistas), igual que INSPIRE y WePROTECT.",
  },
];
