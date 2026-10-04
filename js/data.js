// Datos de la etapa Empathize (fuente: Notion del proyecto)
window.CASE_DATA = {
 "personas": [
  {
   "id": "laura",
   "group": "UserA",
   "name": "Laura",
   "role": "Busca ayuda urgente",
   "quote": "Necesito saber a quién llamar, ya",
   "primary": true,
   "age": "38 años",
   "location": "Conurbano bonaerense",
   "job": "Empleada administrativa",
   "device": "Celular Android de gama media, datos móviles",
   "arrives": "Busca en Google \"dónde denunciar abuso infantil\" o ve una publicación en Instagram",
   "context": "Su sobrina de 9 años le contó algo que la alarmó. Está angustiada, no sabe si es una emergencia ni qué pasos seguir. Busca de noche, cuando los chicos duermen.",
   "goals": [
    "Encontrar rápido un teléfono o lugar donde pedir ayuda",
    "Entender si su caso es una urgencia",
    "Saber qué hacer y qué no hacer con la niña"
   ],
   "frustrations": [
    "No ve el botón \"Necesito Ayuda\" en la home desde el celular",
    "Los números de teléfono no se pueden tocar para llamar",
    "Se confunde al leer que Red por la Infancia \"no es una organización de asistencia directa\"",
    "Mucho texto y scroll antes de encontrar lo importante"
   ],
   "needs": "Acceso a ayuda visible en todas las pantallas, teléfonos con un toque para llamar, lenguaje claro y contenedor, guía paso a paso.",
   "pages": "Necesito Ayuda, Cómo ayudar a una víctima, Bajalo Ya!",
   "ga": "Google es la principal vía de entrada y Necesito Ayuda se visita más desde el celular (179 vs 126 vistas), pero solo el 4% de los usuarios llega a esa página."
  },
  {
   "id": "silvia",
   "group": "UserB",
   "name": "Silvia",
   "role": "Madre que quiere informarse",
   "quote": "Quiero cuidar a mis hijos, pero no sé por dónde empezar",
   "primary": true,
   "age": "34 años",
   "location": "Rosario",
   "job": "Comerciante, madre de dos (7 y 12 años)",
   "device": "Celular Android de gama media; casi nunca usa computadora",
   "arrives": "Ve una campaña en redes sociales o un video compartido en el grupo de WhatsApp de la escuela",
   "context": "Su hijo mayor acaba de recibir su primer celular. Le preocupan las redes, el grooming y no sabe cómo hablar de estos temas sin asustarlo.",
   "goals": [
    "Aprender a detectar señales de alerta",
    "Obtener consejos prácticos y cortos para hablar con sus hijos",
    "Compartir información útil con otras familias"
   ],
   "frustrations": [
    "Los títulos se cortan y el texto se superpone en pantallas chicas",
    "El texto dentro de las imágenes de campañas es ilegible en el celular",
    "La home es muy larga (9 campañas apiladas) y no sabe por dónde empezar",
    "El widget de idioma tapa contenido"
   ],
   "needs": "Contenido corto y visual por edad de los hijos, formatos fáciles de compartir, diseño mobile-first.",
   "pages": "Campañas, ReConectate (Madres, padres y familias), Guía para la detección",
   "ga": "Android es el sistema más usado en celulares (~2.000 usuarios vs 730 en iOS) e Instagram y Facebook traen unas 660 personas al año."
  },
  {
   "id": "martin",
   "group": "UserC",
   "name": "Martín",
   "role": "Docente / profesional",
   "quote": "Necesito material confiable para trabajar con mis alumnos",
   "primary": true,
   "age": "45 años",
   "location": "Córdoba",
   "job": "Docente de secundaria y referente de ESI en su escuela",
   "device": "Principalmente celular (consulta guías entre clases); notebook para preparar talleres",
   "arrives": "Recomendación de un colega, búsqueda en Google, links de UNICEF",
   "context": "Detectó señales de grooming en un alumno y además quiere preparar un taller sobre violencia digital. Busca protocolos, guías y recursos descargables que pueda citar y compartir.",
   "goals": [
    "Encontrar guías y protocolos actualizados según su provincia",
    "Descargar materiales para usar en clase (ReConectate)",
    "Saber cómo actuar institucionalmente ante una sospecha"
   ],
   "frustrations": [
    "\"Nuestro Trabajo\" no lleva a ninguna página, solo abre un menú",
    "No hay buscador; la búsqueda devuelve una página en blanco",
    "No queda claro qué recursos son actuales (algunos son de 2016)",
    "Las guías están mezcladas con campañas, sin filtros por público o tema"
   ],
   "needs": "Biblioteca de recursos con filtros (público, tema, provincia, año), buscador que funcione, descargas claras en PDF.",
   "pages": "Guías Orientativas, Recursos Legales, ReConectate",
   "ga": "Las Guías Orientativas se ven más desde el celular (252 vistas) que desde la computadora (198), y solo 23 personas descargaron un PDF en todo el año."
  },
  {
   "id": "camila",
   "group": "UserD",
   "name": "Camila",
   "role": "Adolescente",
   "quote": "Me pasó algo en internet y no quiero que se enteren mis viejos",
   "primary": true,
   "age": "15 años",
   "location": "Mendoza",
   "job": "Estudiante de secundaria",
   "device": "Solo celular",
   "arrives": "TikTok o Instagram, una charla en la escuela, o buscando \"cómo borrar una foto mía de internet\"",
   "context": "Una foto íntima suya está circulando entre compañeros. Tiene miedo y vergüenza, y busca una solución por su cuenta antes de pedir ayuda a un adulto.",
   "goals": [
    "Hacer que se borre el contenido lo antes posible",
    "Entender sus derechos y que no es su culpa",
    "Encontrar ayuda confidencial"
   ],
   "frustrations": [
    "Siente que el sitio está pensado para adultos",
    "La herramienta Bajalo Ya! está escondida entre otras campañas",
    "Mucho texto institucional antes de llegar a algo concreto"
   ],
   "needs": "Lenguaje cercano y sin juicio, acceso directo a Bajalo Ya!, mensajes de confidencialidad, experiencia 100% mobile.",
   "pages": "Bajalo Ya!, ReConectate (Adolescentes), Necesito Ayuda",
   "ga": "Bajalo Ya! es la 3ª página más vista del sitio (706 vistas en el año), mayormente desde el celular (426 vs 280)."
  },
  {
   "id": "diego",
   "group": "UserE",
   "name": "Diego",
   "role": "Donante",
   "quote": "Quiero ayudar, pero necesito confiar en a quién le doy",
   "primary": false,
   "age": "52 años",
   "location": "CABA",
   "job": "Gerente en una empresa; evalúa donaciones personales y de RSE",
   "device": "Celular para descubrir, computadora para donar",
   "arrives": "Nota en un medio, LinkedIn, recomendación de un conocido",
   "context": "Quiere donar mensualmente y está evaluando si su empresa puede apoyar un programa. Compara varias ONGs antes de decidir.",
   "goals": [
    "Entender qué hace la organización y qué impacto tiene",
    "Donar de forma rápida y segura",
    "Conocer opciones para empresas o voluntariado"
   ],
   "frustrations": [
    "El botón \"Quiero Colaborar\" aparece cortado o no aparece según el dispositivo",
    "El copyright desactualizado (2024) y los errores visuales le restan credibilidad",
    "No encuentra datos de impacto, informes anuales ni transparencia",
    "Los botones no son links reales (no puede abrirlos en otra pestaña)"
   ],
   "needs": "Diseño profesional y confiable, impacto en números, proceso de donación simple, info para alianzas corporativas.",
   "pages": "Quiero Colaborar, ¿Quiénes Somos?, Donar Ahora",
   "ga": "Quiero Colaborar se visita sobre todo desde la computadora (160 vs 79 vistas) y hoy no hay forma de medir cuántas personas terminan donando."
  },
  {
   "id": "ana",
   "group": "UserF",
   "name": "Dra. Ana",
   "role": "Investigadora / decisora de políticas",
   "quote": "Necesito datos y evidencia para respaldar una política pública",
   "primary": false,
   "age": "47 años",
   "location": "CABA",
   "job": "Asesora legislativa e investigadora universitaria",
   "device": "Computadora de escritorio",
   "arrives": "Referencias en informes de INSPIRE / UNICEF, búsqueda académica, contacto institucional",
   "context": "Está redactando un proyecto de ley sobre acceso a la justicia para víctimas y busca encuestas, datos y antecedentes legislativos que pueda citar.",
   "goals": [
    "Encontrar investigaciones y datos con metodología clara",
    "Citar y descargar informes",
    "Conocer las alianzas y el trabajo de incidencia de la organización"
   ],
   "frustrations": [
    "En la página Evidencia los títulos se superponen con el texto",
    "No hay un repositorio ordenado de publicaciones por año o tema",
    "No hay contacto específico para prensa o instituciones"
   ],
   "needs": "Repositorio de publicaciones con filtros y fichas descargables, formatos para citar, contacto institucional claro.",
   "pages": "Evidencia, INSPIRE, WePROTECT, Recursos Legales",
   "ga": "Evidencia se visita mayormente desde la computadora (186 vs 83 vistas), igual que INSPIRE y WePROTECT."
  }
 ],
 "stories": [
  {
   "id": "US-01",
   "priority": "Debe",
   "persona": "laura",
   "group": "UserA · Laura: busca ayuda urgente",
   "text": "Como persona que busca ayuda urgente, quiero ver el botón \"Necesito Ayuda\" en todas las pantallas y dispositivos para llegar a los teléfonos de ayuda en un toque.",
   "criteria": [
    "El botón está visible en el header en celular, tablet y computadora (no solo en el footer)",
    "También aparece dentro del menú hamburguesa",
    "Es un link real: se puede usar con teclado y lector de pantalla"
   ],
   "evidence": "el botón desaparece en la home mobile y solo el 4% de los usuarios llega a Necesito Ayuda."
  },
  {
   "id": "US-02",
   "priority": "Debe",
   "persona": "laura",
   "group": "UserA · Laura: busca ayuda urgente",
   "text": "Como persona que busca ayuda urgente, quiero tocar un número de teléfono y que se inicie la llamada para no tener que copiarlo ni memorizarlo.",
   "criteria": [
    "Todos los números usan enlaces de llamada (tel:)",
    "Los botones de llamada miden al menos 44 px de alto",
    "911, 137 y 102 se ven sin abrir acordeones"
   ],
   "evidence": "hoy ningún número se puede tocar para llamar; Necesito Ayuda se visita más desde el celular (179 vs 126 vistas)."
  },
  {
   "id": "US-03",
   "priority": "Debe",
   "persona": "laura",
   "group": "UserA · Laura: busca ayuda urgente",
   "text": "Como persona que busca ayuda urgente, quiero entender en pocos segundos si mi situación es una emergencia y qué línea corresponde para actuar sin perder tiempo.",
   "criteria": [
    "Hay una guía corta tipo \"¿Qué está pasando?\" con 3 o 4 opciones",
    "Cada opción lleva directo a la línea o recurso adecuado",
    "El texto está escrito en lenguaje claro y contenedor"
   ],
   "evidence": "la aclaración \"no somos una organización de asistencia directa\" genera confusión."
  },
  {
   "id": "US-04",
   "priority": "Debería",
   "persona": "laura",
   "group": "UserA · Laura: busca ayuda urgente",
   "text": "Como familiar que recibió un relato, quiero una guía paso a paso de qué hacer y qué no hacer con la niña o el niño para acompañarle sin causar más daño.",
   "criteria": [
    "\"Cómo ayudar a una víctima\" está dividida en pasos cortos y se lee bien en celular",
    "Se accede desde Necesito Ayuda y desde la home"
   ],
   "evidence": ""
  },
  {
   "id": "US-05",
   "priority": "Debería",
   "persona": "silvia",
   "group": "UserB · Silvia: madre que quiere informarse",
   "text": "Como madre, quiero encontrar consejos según la edad de mis hijos para saber cómo hablarles de los riesgos en internet.",
   "criteria": [
    "Hay rutas por edad: niñas y niños, preadolescentes, adolescentes",
    "Cada consejo se lee en menos de 2 minutos"
   ],
   "evidence": ""
  },
  {
   "id": "US-06",
   "priority": "Debería",
   "persona": "silvia",
   "group": "UserB · Silvia: madre que quiere informarse",
   "text": "Como madre que navega desde el celular, quiero leer el contenido de las campañas como texto real (no dentro de imágenes) para leerlo cómoda sin hacer zoom.",
   "criteria": [
    "El texto de campañas y banners es texto real, no parte de la imagen",
    "Se lee sin zoom en pantallas de 384 px de ancho"
   ],
   "evidence": "los banners tienen el texto incrustado; las pantallas más comunes miden 384–412 px."
  },
  {
   "id": "US-07",
   "priority": "Podría",
   "persona": "silvia",
   "group": "UserB · Silvia: madre que quiere informarse",
   "text": "Como madre, quiero compartir un recurso por WhatsApp con un toque para pasárselo a otras familias de la escuela.",
   "criteria": [
    "Cada recurso y campaña tiene botón para compartir por WhatsApp y copiar el link"
   ],
   "evidence": "Instagram y Facebook traen unas 660 personas al año; el contenido circula en redes."
  },
  {
   "id": "US-08",
   "priority": "Debe",
   "persona": "martin",
   "group": "UserC · Martín: docente / profesional",
   "text": "Como docente, quiero buscar recursos por palabra clave para encontrar rápido el protocolo que necesito.",
   "criteria": [
    "El buscador está visible en el header",
    "Los resultados muestran título, tipo de recurso y año",
    "Si no hay resultados, se muestran sugerencias (nunca una página en blanco)"
   ],
   "evidence": "hoy la búsqueda y la página de error se ven completamente en blanco."
  },
  {
   "id": "US-09",
   "priority": "Debería",
   "persona": "martin",
   "group": "UserC · Martín: docente / profesional",
   "text": "Como docente, quiero filtrar las guías por público, tema, provincia y año para saber cuáles aplican a mi caso y están vigentes.",
   "criteria": [
    "La biblioteca de recursos tiene filtros combinables",
    "Cada recurso muestra su fecha de publicación o actualización"
   ],
   "evidence": ""
  },
  {
   "id": "US-10",
   "priority": "Debe",
   "persona": "martin",
   "group": "UserC · Martín: docente / profesional",
   "text": "Como docente, quiero descargar las guías desde el celular de forma clara para poder guardarlas y compartirlas.",
   "criteria": [
    "Cada guía tiene un botón \"Descargar PDF\" con el peso del archivo",
    "La descarga funciona en celular",
    "Cada descarga se registra en Analytics"
   ],
   "evidence": "las Guías Orientativas se ven más en celular (252 vs 198 vistas) y solo 23 personas descargaron un PDF en el año."
  },
  {
   "id": "US-11",
   "priority": "Debe",
   "persona": "camila",
   "group": "UserD · Camila: adolescente",
   "text": "Como adolescente, quiero llegar a Bajalo Ya! directamente desde la home para pedir que se borre mi contenido lo antes posible.",
   "criteria": [
    "Bajalo Ya! tiene un acceso destacado en la home y en el menú",
    "Se llega en 2 toques o menos desde cualquier página"
   ],
   "evidence": "es la 3ª página más vista del sitio (706 vistas), mayormente desde el celular (426 vs 280)."
  },
  {
   "id": "US-12",
   "priority": "Debe",
   "persona": "camila",
   "group": "UserD · Camila: adolescente",
   "text": "Como adolescente, quiero que el sitio me hable sin juzgarme y me explique que es confidencial para animarme a pedir ayuda.",
   "criteria": [
    "Los mensajes de confidencialidad están visibles en Bajalo Ya! y Necesito Ayuda",
    "El tono se valida con adolescentes antes de publicarse"
   ],
   "evidence": ""
  },
  {
   "id": "US-13",
   "priority": "Debería",
   "persona": "camila",
   "group": "UserD · Camila: adolescente",
   "text": "Como adolescente, quiero un botón de salida rápida para cerrar la página al instante si alguien se acerca.",
   "criteria": [
    "Hay un botón \"Salir rápido\" fijo en Bajalo Ya! y Necesito Ayuda",
    "Al tocarlo, se abre un sitio neutro (por ejemplo, Google)"
   ],
   "evidence": ""
  },
  {
   "id": "US-14",
   "priority": "Debe",
   "persona": "diego",
   "group": "UserE · Diego: donante",
   "text": "Como donante, quiero que el botón \"Quiero Colaborar\" se vea completo en cualquier pantalla para poder donar sin trabas.",
   "criteria": [
    "El botón no se corta ni desaparece en ningún ancho de pantalla (de 320 a 1920 px)",
    "Es un link real y se puede abrir en otra pestaña"
   ],
   "evidence": "hoy el botón aparece cortado en computadora y desaparece en la home mobile."
  },
  {
   "id": "US-15",
   "priority": "Debería",
   "persona": "diego",
   "group": "UserE · Diego: donante",
   "text": "Como donante, quiero ver el impacto de la organización en números para confiar en que mi aporte sirve.",
   "criteria": [
    "Hay una sección de impacto con cifras actualizadas e informes anuales descargables"
   ],
   "evidence": ""
  },
  {
   "id": "US-16",
   "priority": "Podría",
   "persona": "diego",
   "group": "UserE · Diego: donante",
   "text": "Como gerente de una empresa, quiero conocer opciones para empresas (RSE) y voluntariado para proponer una alianza.",
   "criteria": [
    "Quiero Colaborar incluye opciones para empresas y un formulario de contacto"
   ],
   "evidence": ""
  },
  {
   "id": "US-17",
   "priority": "Debería",
   "persona": "ana",
   "group": "UserF · Dra. Ana: investigadora / decisora de políticas",
   "text": "Como investigadora, quiero un repositorio de publicaciones ordenado por año y tema para encontrar y citar evidencia.",
   "criteria": [
    "Las publicaciones se listan con filtros por año y tema",
    "Cada una tiene una ficha con resumen, metodología y cita sugerida"
   ],
   "evidence": "en Evidencia los títulos se superponen con el texto; la página se visita sobre todo desde computadora (186 vs 83 vistas)."
  },
  {
   "id": "US-18",
   "priority": "Podría",
   "persona": "ana",
   "group": "UserF · Dra. Ana: investigadora / decisora de políticas",
   "text": "Como asesora legislativa, quiero un contacto específico para prensa e instituciones para pedir información o entrevistas.",
   "criteria": [
    "Hay un mail o formulario institucional separado del contacto general"
   ],
   "evidence": ""
  },
  {
   "id": "US-19",
   "priority": "Debe",
   "persona": "equipo",
   "group": "Equipo de Red por la Infancia",
   "text": "Como integrante del equipo de comunicación, quiero crear una campaña o un recurso nuevo a partir de una plantilla para publicarlo sin depender del equipo de IT.",
   "criteria": [
    "Hay plantillas para campaña, recurso y noticia",
    "El texto se carga en campos editables (no en imágenes)",
    "Hay vista previa en celular antes de publicar"
   ],
   "evidence": "hoy cada página se arma desde cero en Divi y requiere al equipo de IT."
  },
  {
   "id": "US-20",
   "priority": "Debería",
   "persona": "equipo",
   "group": "Equipo de Red por la Infancia",
   "text": "Como equipo, quiero medir los clics en teléfonos de ayuda, las donaciones y las descargas para saber si el sitio cumple su objetivo.",
   "criteria": [
    "Estos eventos están configurados como eventos clave en Google Analytics",
    "Se revisan en un reporte mensual"
   ],
   "evidence": "hoy no hay ningún evento clave configurado."
  }
 ],
 "journeys": [
  {
   "p": "UserA · Laura",
   "g": "Encontrar rápido a quién llamar porque su sobrina le contó algo que la alarmó.",
   "a": [
    "Buscar ayuda en Google",
    "Entrar al sitio",
    "Encontrar \"Necesito Ayuda\"",
    "Elegir la línea adecuada",
    "Llamar",
    "Saber cómo acompañar a la niña"
   ],
   "t": [
    [
     "Buscar \"dónde denunciar abuso infantil\"",
     "Elegir un resultado"
    ],
    [
     "Esperar que cargue la home",
     "Entender qué hace la organización"
    ],
    [
     "Buscar el botón en el celular",
     "Abrir el menú hamburguesa",
     "Bajar hasta el footer"
    ],
    [
     "Leer las líneas",
     "Abrir los acordeones",
     "Decidir si es una urgencia"
    ],
    [
     "Copiar el número",
     "Salir del navegador y marcar"
    ],
    [
     "Buscar \"Cómo ayudar a una víctima\"",
     "Leer qué hacer y qué no hacer"
    ]
   ],
   "f": [
    [
     "Angustiada",
     "Apurada"
    ],
    [
     "Esperanzada",
     "Impaciente"
    ],
    [
     "Perdida",
     "Frustrada"
    ],
    [
     "Confundida",
     "Insegura"
    ],
    [
     "Nerviosa",
     "Aliviada"
    ],
    [
     "Insegura",
     "Más tranquila"
    ]
   ],
   "o": [
    [
     "Mejor posicionamiento en Google",
     "Título y descripción claros"
    ],
    [
     "Botón de ayuda visible al cargar",
     "Carga más rápida"
    ],
    [
     "\"Necesito Ayuda\" fijo en el header mobile",
     "También dentro del menú"
    ],
    [
     "Guía \"¿Qué está pasando?\"",
     "911, 137 y 102 visibles sin acordeones"
    ],
    [
     "Números con toque para llamar",
     "Botones de llamada grandes"
    ],
    [
     "Link directo desde Necesito Ayuda",
     "Guía en pasos cortos"
    ]
   ],
   "persona": "laura",
   "score": [
    1,
    3,
    1,
    2,
    3,
    4
   ]
  },
  {
   "p": "UserB · Silvia",
   "g": "Aprender cómo cuidar a su hijo de 12 años, que acaba de recibir su primer celular.",
   "a": [
    "Descubrir la campaña",
    "Llegar al sitio",
    "Buscar contenido para su edad",
    "Leer y entender",
    "Compartir con otras familias",
    "Aplicarlo en casa"
   ],
   "t": [
    [
     "Ver un post en Instagram o un video en el grupo de WhatsApp",
     "Tocar el link"
    ],
    [
     "Llegar a la home",
     "Cerrar el widget de idioma que tapa contenido"
    ],
    [
     "Recorrer 9 campañas apiladas",
     "Entrar a ReConectate",
     "Elegir \"Madres, padres y familias\""
    ],
    [
     "Leer textos dentro de imágenes",
     "Hacer zoom en el celular",
     "Buscar señales de alerta"
    ],
    [
     "Copiar el link",
     "Mandarlo por WhatsApp"
    ],
    [
     "Hablar con su hijo",
     "Configurar el celular de forma segura"
    ]
   ],
   "f": [
    [
     "Preocupada",
     "Curiosa"
    ],
    [
     "Distraída",
     "Molesta"
    ],
    [
     "Abrumada",
     "Perdida"
    ],
    [
     "Frustrada",
     "Interesada"
    ],
    [
     "Útil",
     "Empoderada"
    ],
    [
     "Insegura",
     "Comprometida"
    ]
   ],
   "o": [
    [
     "Links de campañas que lleven a la página exacta"
    ],
    [
     "Widget de idioma que no tape contenido",
     "Home más corta y clara"
    ],
    [
     "Rutas por edad",
     "Contenido destacado para familias"
    ],
    [
     "Texto real legible a 384 px",
     "Consejos cortos y prácticos"
    ],
    [
     "Botón para compartir por WhatsApp"
    ],
    [
     "Guía para conversar con hijos",
     "Checklist para configurar el celular"
    ]
   ],
   "persona": "silvia",
   "score": [
    3,
    2,
    2,
    2,
    5,
    3
   ]
  },
  {
   "p": "UserC · Martín",
   "g": "Encontrar un protocolo para actuar ante una sospecha de grooming y material para un taller.",
   "a": [
    "Buscar recursos",
    "Navegar \"Nuestro Trabajo\"",
    "Encontrar la guía correcta",
    "Descargar y compartir",
    "Actuar en la escuela",
    "Preparar el taller"
   ],
   "t": [
    [
     "Entrar desde Google o un link de un colega",
     "Usar el buscador del sitio"
    ],
    [
     "Tocar \"Nuestro Trabajo\" (no lleva a ninguna página)",
     "Revisar el submenú"
    ],
    [
     "Abrir Guías Orientativas 1 y 2",
     "Comparar fechas y provincias",
     "Revisar Recursos Legales"
    ],
    [
     "Buscar el botón de descarga",
     "Descargar el PDF en el celular",
     "Enviarlo al equipo directivo"
    ],
    [
     "Aplicar el protocolo ante la sospecha",
     "Derivar a la línea correspondiente"
    ],
    [
     "Ir a ReConectate (Docentes)",
     "Buscar materiales para el aula"
    ]
   ],
   "f": [
    [
     "Decidido",
     "Frustrado (la búsqueda sale en blanco)"
    ],
    [
     "Confundido"
    ],
    [
     "Abrumado",
     "Desconfiado (¿está vigente?)"
    ],
    [
     "Inseguro",
     "Aliviado"
    ],
    [
     "Responsable",
     "Ansioso"
    ],
    [
     "Motivado",
     "Con dudas"
    ]
   ],
   "o": [
    [
     "Buscador que funcione, con sugerencias",
     "Página de error útil"
    ],
    [
     "\"Nuestro Trabajo\" con página propia",
     "Navegación por público (Docentes, Familias…)"
    ],
    [
     "Biblioteca con filtros (tema, público, provincia, año)",
     "Fecha visible en cada guía"
    ],
    [
     "Botón \"Descargar PDF\" con peso del archivo",
     "Compartir por WhatsApp o mail"
    ],
    [
     "Protocolo paso a paso imprimible",
     "Contactos de derivación por provincia"
    ],
    [
     "Kit descargable para docentes",
     "Medir descargas en Analytics"
    ]
   ],
   "persona": "martin",
   "score": [
    2,
    2,
    2,
    3,
    3,
    4
   ]
  },
  {
   "p": "UserD · Camila",
   "g": "Lograr que se borre una foto íntima suya que circula entre compañeros, sin que se enteren sus padres.",
   "a": [
    "Buscar una solución",
    "Llegar a Bajalo Ya!",
    "Entender cómo funciona",
    "Pedir que se baje el contenido",
    "Buscar apoyo",
    "Seguir adelante"
   ],
   "t": [
    [
     "Buscar \"cómo borrar una foto mía de internet\"",
     "O tocar un link en Instagram"
    ],
    [
     "Entrar a la home",
     "Buscar Bajalo Ya! entre las campañas",
     "Leer el banner (texto en imagen)"
    ],
    [
     "Leer las instrucciones",
     "Ver si es confidencial",
     "Identificar en qué plataforma está la foto"
    ],
    [
     "Seguir los pasos de cada plataforma",
     "Completar formularios externos"
    ],
    [
     "Buscar con quién hablar",
     "Ir a Necesito Ayuda o ReConectate"
    ],
    [
     "Revisar si el contenido se borró",
     "Hablar con un adulto de confianza"
    ]
   ],
   "f": [
    [
     "Avergonzada",
     "Asustada"
    ],
    [
     "Ansiosa",
     "Perdida"
    ],
    [
     "Desconfiada",
     "Insegura"
    ],
    [
     "Esperanzada",
     "Abrumada"
    ],
    [
     "Sola",
     "Más tranquila"
    ],
    [
     "Aliviada",
     "Vulnerable"
    ]
   ],
   "o": [
    [
     "Contenido pensado para búsquedas de adolescentes",
     "Links directos desde Instagram"
    ],
    [
     "Acceso destacado a Bajalo Ya! en la home",
     "Texto real, no en imágenes"
    ],
    [
     "Mensajes de confidencialidad y \"no es tu culpa\"",
     "Lenguaje cercano"
    ],
    [
     "Pasos por plataforma claros y en orden",
     "Botón de salida rápida"
    ],
    [
     "Derivación clara a líneas de ayuda (137, 102)",
     "Contenido de ReConectate para adolescentes"
    ],
    [
     "Qué hacer si el contenido vuelve a circular",
     "Recursos para hablar con adultos"
    ]
   ],
   "persona": "camila",
   "score": [
    1,
    2,
    2,
    3,
    3,
    4
   ]
  },
  {
   "p": "UserE · Diego",
   "g": "Decidir si dona todos los meses y si su empresa puede apoyar un programa.",
   "a": [
    "Conocer la organización",
    "Evaluar su credibilidad",
    "Ver el impacto",
    "Ir a donar",
    "Completar la donación",
    "Explorar alianzas"
   ],
   "t": [
    [
     "Leer una nota o un post de LinkedIn",
     "Entrar desde el celular"
    ],
    [
     "Leer ¿Quiénes Somos?",
     "Notar errores visuales y el copyright 2024"
    ],
    [
     "Buscar cifras e informes anuales",
     "Revisar alianzas (UNICEF, INSPIRE)"
    ],
    [
     "Volver desde la computadora",
     "Buscar \"Quiero Colaborar\" (aparece cortado)",
     "Intentar abrirlo en otra pestaña"
    ],
    [
     "Elegir un monto mensual",
     "Completar el pago"
    ],
    [
     "Buscar opciones para empresas",
     "Buscar un contacto institucional"
    ]
   ],
   "f": [
    [
     "Interesado"
    ],
    [
     "Desconfiado",
     "Dubitativo"
    ],
    [
     "Insatisfecho (no encuentra datos)"
    ],
    [
     "Molesto",
     "Impaciente"
    ],
    [
     "Dubitativo",
     "Satisfecho"
    ],
    [
     "Desanimado"
    ]
   ],
   "o": [
    [
     "Propuesta de valor clara en la home"
    ],
    [
     "Diseño prolijo y actualizado",
     "Logos de aliados visibles"
    ],
    [
     "Sección de impacto en números",
     "Informes anuales descargables"
    ],
    [
     "Botón de donar completo y siempre visible",
     "Es un link real"
    ],
    [
     "Montos sugeridos con su impacto",
     "Pago en pocos pasos",
     "Medir donaciones en Analytics"
    ],
    [
     "Página para empresas (RSE) y voluntariado",
     "Formulario de contacto"
    ]
   ],
   "persona": "diego",
   "score": [
    4,
    2,
    2,
    2,
    3,
    2
   ]
  },
  {
   "p": "UserF · Dra. Ana",
   "g": "Encontrar datos y encuestas que pueda citar en un proyecto de ley sobre acceso a la justicia.",
   "a": [
    "Llegar desde una referencia",
    "Buscar evidencia",
    "Leer la investigación",
    "Descargar y citar",
    "Contactar a la organización",
    "Hacer seguimiento"
   ],
   "t": [
    [
     "Leer una referencia en un informe de INSPIRE o UNICEF",
     "Entrar desde la computadora"
    ],
    [
     "Ir a Nuestro Trabajo > Evidencia",
     "Buscar por tema o año (no hay filtros)"
    ],
    [
     "Leer la encuesta (títulos superpuestos)",
     "Buscar la metodología"
    ],
    [
     "Buscar el PDF completo",
     "Armar la cita a mano"
    ],
    [
     "Buscar un contacto institucional",
     "Escribir al mail general"
    ],
    [
     "Esperar respuesta",
     "Proponer una reunión"
    ]
   ],
   "f": [
    [
     "Interesada"
    ],
    [
     "Impaciente"
    ],
    [
     "Molesta",
     "Desconfiada"
    ],
    [
     "Frustrada"
    ],
    [
     "Insegura de recibir respuesta"
    ],
    [
     "Impaciente",
     "Esperanzada"
    ]
   ],
   "o": [
    [
     "Páginas de destino claras para referencias externas"
    ],
    [
     "Repositorio con filtros por año y tema"
    ],
    [
     "Diseño legible",
     "Resumen y metodología visibles"
    ],
    [
     "Ficha descargable con cita sugerida"
    ],
    [
     "Contacto específico para prensa e instituciones"
    ],
    [
     "Respuesta automática con plazos",
     "Agenda para reuniones institucionales"
    ]
   ],
   "persona": "ana",
   "score": [
    4,
    3,
    2,
    2,
    2,
    3
   ]
  }
 ]
};
