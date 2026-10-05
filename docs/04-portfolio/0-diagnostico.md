# 0 - Diagnóstico del estado actual

> **Qué es:** una foto de cómo están hoy Notion y el caso de estudio, antes de decidir cambios. No modifica nada. Marca **HECHO** lo que se midió, **OBSERVACIÓN** lo que se vio al recorrerlo e **INFERENCIA** lo que se deduce.

## Notion (la documentación profunda)

| Página | Contenido | Estado |
| --- | --- | --- |
| 0 - Base de datos | Analytics, auditoría de problemas y entrevista con la directora ejecutiva (subpágina) | Completa |
| 1 - Empathize | Personas, historias, mapas de empatía y de recorrido | Completa |
| 2 - Define | Problem statements, hipótesis, propuestas de valor | Completa |
| 3 - Ideate Stage › 3.2 Goal statements | Goal statement final + v1 | Completa |
| 3.3 Competitive audit + 3.3.1 a 3.3.6 | Cinco auditorías con capturas y análisis comparativo | Completa |
| 3.3.7 Competitive audit report | Título puesto, sin contenido | **Pendiente** (`docs/03-ideate/3.3.7-…md`) |
| 3.4 Design implications | Página "Nueva página" sin título | **Pendiente** (`docs/03-ideate/3.4-…md`) |

Nota: el estado de Notion se verificó en la sesión anterior. Para no gastar tokens, no se volvió a abrir.

## Caso de estudio (sitio)

### Medidas (HECHO, Playwright, 5 de octubre de 2026)

| Medida | Desktop 1440 px | Mobile 390 px |
| --- | --- | --- |
| Alto total de la página | 35.695 px ≈ **40 pantallas** | 57.608 px ≈ **68 pantallas** |
| Secciones con id | 25 | 25 |
| Palabras visibles en `main` | ≈ 6.350 | ≈ 6.330 |
| Imágenes / botones | 128 / 78 | 128 / 78 |

Las secciones más largas en mobile son:

| Sección | Alto | Pantallas aprox. |
| --- | --- | --- |
| Historias de usuario | 9.519 px | 11 |
| Problem statements | 5.374 px | 6 |
| Personas | 5.103 px | 6 |
| Propuestas de valor | 3.545 px | 4 |
| Datos (Analytics) | 3.204 px | 4 |

### Estructura actual

Una sola página con barra de etapas: Hero → 00 Resumen → 01 Empathize (9 bloques) → 02 Define (4 bloques) → 03 Ideate (5 bloques) → Próximas etapas → Footer "¿Charlamos?".

### Lo que funciona (OBSERVACIÓN)
- **El resumen 00 cuenta el proyecto en una pantalla y media.** Tiene contexto, rol, plazo, el desafío como pregunta "¿Cómo podríamos…?", cuatro datos clave y la línea de tiempo de etapas.
- **Hay datos reales en cada decisión**: Analytics, la auditoría de 21 problemas y la entrevista con la directora.
- **El sistema visual es consistente**: un color por persona, tarjetas, tokens y una animación medida.
- **Hay interacción con propósito**: filtros, modales de persona, goal statement por partes y matriz por lente.

### Problemas y conflictos encontrados

| # | Qué | Tipo | Detalle |
| --- | --- | --- | --- |
| D1 | **No hay forma de contacto** | HECHO | El footer "¿Charlamos?" solo tiene un link a GitHub. No hay email, LinkedIn ni CV. |
| D2 | **"← Portfolio" lleva al perfil de GitHub** | HECHO | `href="https://github.com/sofiadeane"`. Un recruiter espera un portfolio, no un repositorio. |
| D3 | **"¿Hablamos?" no existe en este repo** | HECHO | La búsqueda no encuentra "Hablamos". Si el portfolio principal vive en otro sitio, hay que saber dónde (**Content needed**). |
| D4 | **Indicador de estado desactualizado** | HECHO | El hero decía "etapa 2 de 5" con Ideate ya publicado. Ya está corregido a "3 de 5", pero el número es manual y puede volver a quedar viejo. |
| D5 | **Largo** | INFERENCIA | Con 40 a 68 pantallas, casi nadie que no sea del equipo va a pasar de Empathize. El resumen hace bien su trabajo, pero no cierra con una acción. |
| D6 | **Mismo nivel de detalle que Notion** | OBSERVACIÓN | Se muestran las 33 historias, las 9 personas, los 9 mapas de empatía, los 9 recorridos y los 10 problem statements. El sitio replica la base de datos en vez de narrarla. |
| D7 | **Herramientas: Figma sin evidencia** | HECHO | Los metadatos dicen "Notion · Google Analytics · Figma", pero todavía no hay ningún artefacto de Figma. |
| D8 | **El sitio está programado a mano y eso no se dice** | HECHO | Usa HTML, CSS y JS con módulos ES, BEM y tokens, y separa datos de lógica. Solo lo cuenta el README. |
| D9 | **El hero nombra tres públicos** | HECHO | "familias, adolescentes y docentes". La investigación ya trabaja con ocho audiencias. |
| D10 | **Lluvia de ideas dentro de Define** | OBSERVACIÓN | "Primero, todas las ideas" (propuestas de valor) es ideación y está en Define. Es defendible (sale de los problem statements), pero conviene explicitarlo o moverlo. |
| D11 | **Numeración Notion ≠ sitio** | OBSERVACIÓN | Notion arranca Ideate en 3.2; el sitio no numera subsecciones. No molesta al lector, pero conviene saber qué es 3.1. |
| D12 | **Sin cierre de etapa en Ideate** | OBSERVACIÓN | Empathize tiene "Lo que me llevo de esta etapa"; Ideate todavía no tiene un bloque equivalente (falta bocetar / arquitectura). |
