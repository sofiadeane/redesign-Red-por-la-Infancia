# Correcciones del 5 de octubre de 2026

> **Qué es:** los cambios que hice en el sitio a partir de tu revisión, listos para pasar a Notion. Ya están en el repo.

## 1. US-26 · Traducción automática (1 - Empathize › Historias de usuario)

Reemplazá la US-26 por esta versión:

**US-26 · Debería · Equipo RxI**
Como equipo, quiero cargar cada página una sola vez, en español, y que se traduzca automáticamente a los otros idiomas, para mantener el sitio en varios idiomas sin duplicar trabajo.

Criterios de aceptación:
- Al publicar una página en español, se traduce sola a los idiomas activos.
- Se puede corregir a mano una palabra o frase de la traducción, por ejemplo un término técnico.
- Las correcciones se guardan en un glosario y se aplican en todo el sitio.
- Se puede marcar qué no se traduce: nombres propios, de programas (Bajalo Ya!, ReConectate) y de organismos.
- Se ve qué páginas tienen la traducción sin revisar.

Respaldo: el equipo no quiere duplicar cada página por idioma, y muchas palabras técnicas se traducen mal de forma automática.

### Ajustes para que no contradiga a la US-26
| Dónde | Antes | Ahora |
| --- | --- | --- |
| US-22, criterio 2 | Las traducciones son revisadas por una persona, no automáticas | La traducción automática de estas páginas la revisa una persona antes de publicarse |
| Persona Maya, solución | páginas clave traducidas por personas | páginas clave con la traducción revisada por una persona |
| Mapa de empatía de Maya, gana | páginas clave traducidas por personas | páginas clave con la traducción revisada por una persona |
| Journey de Maya, oportunidad | Páginas traducidas por personas | Traducción automática revisada por una persona |

## 2. Problem statements (2 - Define)

El **porque [insight]** ahora explica por qué la necesidad es un problema **para esa persona**, por su personalidad o su contexto, y no describe cómo está armado el sitio. Los problemas del sitio siguen documentados en la auditoría, los pain points y las historias.

Formato: [persona] es [características] **que necesita** [necesidad] **porque** [insight]. El insight explica por qué eso es un problema para esa persona, según su personalidad y su contexto.

**Laura** es una familiar angustiada que busca ayuda desde el celular, de noche y con apuro **que necesita** entender en segundos que la fundación no atiende casos y llegar con un toque a la línea oficial o al recurso que sí puede ayudarla **porque** sabe que tiene que actuar rápido y está angustiada: nunca tuvo que buscar algo tan sensible y, si no encuentra en segundos a quién llamar, se va.

**Silvia** es una madre de dos que llega desde Instagram o WhatsApp, siempre desde su celular **que necesita** accesos directos al Campus, ReConectate y Pantasaurus, y consejos cortos según la edad de sus hijos **porque** siente que la tecnología avanza más rápido que ella y se informa en los ratos libres entre el local y la casa: si un consejo no es corto y claro, no lo lee ni lo comparte en el grupo de la escuela.

**Martín** es un docente y referente de ESI que consulta recursos entre clases desde el celular **que necesita** encontrar rápido el protocolo vigente para su provincia y descargarlo **porque** es a quien sus colegas consultan cuando aparece una situación difícil y solo confía en información respaldada por instituciones: un material sin fecha o sin fuente lo deja expuesto ante su escuela.

**Dr. Javier** es un pediatra de un hospital público que detecta señales de alerta en la consulta **que necesita** una guía breve de detección y un protocolo de derivación según su provincia **porque** es uno de los pocos adultos fuera de la casa que ve a la niña, casi no recibió formación sobre violencias y tiene pocos minutos por consulta: si no sabe qué hacer en ese momento, la oportunidad se pierde.

**Camila** es una adolescente de 15 años que quiere que se borre una foto íntima suya sin que se enteren sus padres **que necesita** llegar directo a Bajalo Ya! y a ReConectate y sentir que está en un espacio confidencial y sin juicio **porque** tiene miedo y vergüenza, le importa mucho lo que piensan sus compañeros y antes de hablar con un adulto busca en TikTok o Google: si siente que la juzgan o que le hablan como a una nena, se va.

**Diego** es un donante que evalúa financiar un programa desde su empresa y compara varias ONGs antes de decidir **que necesita** confiar en la organización y donar en pocos pasos **porque** pone en juego su dinero y el de su empresa, y tiene que rendirle cuentas al comité de RSE: si no ve números de impacto, no puede justificar la donación.

**Ana** es una asesora legislativa e investigadora que busca evidencia para un proyecto de ley **que necesita** encontrar, entender y citar investigaciones ordenadas por tema y año **porque** su trabajo tiene que resistir el escrutinio de una comisión legislativa: si no puede verificar la metodología ni citar la fuente, no puede usar el dato.

**Maya** es una aliada internacional que conoció a la fundación en una conferencia y no habla español **que necesita** leer el sitio en inglés y entender en pocos minutos qué hace la fundación, cómo trabaja y a quién contactar **porque** no lee español y, después de cada conferencia, tiene que recomendarle aliados a su equipo: si no entiende el trabajo de la fundación en pocos minutos, queda fuera de su lista.

**Valeria** es una periodista que escribe contra reloj sobre un caso de violencia digital **que necesita** datos citables con fuente y fecha, y un contacto de prensa que responda rápido **porque** trabaja contra reloj, con un cierre en pocas horas, y le preocupa contar estos casos con responsabilidad: si la fuente no responde rápido, la nota sale sin la voz de la fundación.

**Equipo RxI** es el equipo de comunicación, que mantiene el sitio día a día **que necesita** publicar campañas y recursos nuevos sin depender del equipo de IT, y registrar su impacto a medida que sucede **porque** es un equipo chico, sin perfil técnico, que reparte su tiempo entre campañas, capacitaciones y alianzas: cada tarea que depende de IT o que hay que duplicar por idioma queda postergada.

## 3. Margen en Empathize (solo sitio)

Las notas del gráfico "¿Desde qué países?" quedaban en una columna de 128 px en pantallas de 760 px o menos. El ancho lo forzaba una regla vieja de las sticky notes, que usaba la misma clase (`.note`). La saqué; ahora las notas ocupan todo el ancho de la tarjeta.
