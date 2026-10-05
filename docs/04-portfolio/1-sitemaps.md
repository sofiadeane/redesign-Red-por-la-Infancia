# 1 - Cinco alternativas de sitemap para el caso de estudio

> **Qué es:** cinco formas realmente distintas de ordenar el caso. Todas usan el mismo contenido; cambia qué se lee primero y cuánto hay que leer. Al final está la comparación y la recomendación.

---

## Alternativa 1 · Página única por etapas (la actual, ordenada)

**A. Estructura**
```
index.html
├── Hero
├── 00 Resumen ── CTA ¿Hablamos?
├── 01 Empathize (bloques colapsables)
├── 02 Define
├── 03 Ideate
├── 04 Prototype (próx.)
├── 05 Test (próx.)
└── Footer contacto
```
**B. Concepto.** Es la de hoy: el orden del design thinking de punta a punta. Para que se lea, cada bloque largo arranca colapsado y muestra una muestra (por ejemplo, 6 historias de 33).

**C. Ventajas**
- Es el menor cambio: no hay páginas nuevas.
- La barra de etapas ya funciona.
- Un solo link para compartir.

**D. Desventajas**
- El largo sigue siendo el problema, solo que escondido.
- El recruiter y el UX lead leen la misma página.
- Colapsar todo vuelve la página "click-heavy".

**E. Escalabilidad.** Baja. Prototype y Test le suman otras 15 a 25 pantallas.

**F. Recomendación.** No como estructura final. Sí sirve como **paso intermedio** si no hay tiempo antes de Manila.

---

## Alternativa 2 · Dos páginas: Landing + Proceso

**A. Estructura**
```
index.html  (Landing, 5–7 pantallas)
├── Hero: proyecto, rol, estado
├── Contexto en 3 datos
├── El desafío
├── Qué encontré → qué decidí (3 a 4)
├── Estado y próximos pasos
└── ¿Hablamos?  [contacto]  [→ Ver proyecto en detalle]

proceso.html  (Proceso / Detalle)
├── Barra de etapas 00–05
├── 01 Empathize · 02 Define · 03 Ideate · 04 · 05
└── Footer: ¿Hablamos? + link a la investigación completa (Notion / docs)
```
**B. Concepto.** La landing narra y el proceso documenta. Es la estructura que propusiste: el slider de la barra cambia entre las dos.

**C. Ventajas**
- El recruiter termina en una pantalla con contacto.
- El UX lead tiene todo el proceso a un clic.
- Separa el "por qué importa" del "cómo lo hice".

**D. Desventajas**
- Hay que escribir un texto nuevo para la landing: no alcanza con cortar.
- Puede repetir contenido entre páginas si no hay una regla clara.
- Dos páginas para mantener al día.

**E. Escalabilidad.** Alta. Prototype y Test se suman a `proceso.html` y la landing solo actualiza "qué decidí" y una imagen.

**F. Recomendación.** **Base recomendada**, combinada con la narrativa de la alternativa 4 para la landing.

---

## Alternativa 3 · Hub con una página por etapa

**A. Estructura**
```
index.html  (Hub)
├── Hero + resumen
├── 5 tarjetas de etapa (estado, 1 hallazgo, link)
└── ¿Hablamos?
empathize.html · define.html · ideate.html · prototype.html · test.html
└── cada una: anterior / siguiente + ¿Hablamos?
```
**B. Concepto.** Funciona como un índice: cada etapa tiene su propia página.

**C. Ventajas**
- Cada página es corta.
- Se pueden compartir links por etapa (por ejemplo, solo el competitive audit).
- Permite publicar etapas a medida que se terminan.

**D. Desventajas**
- Fragmenta la historia: el hilo problema → decisión se pierde entre páginas.
- Más clics para el lector.
- Se parece a la estructura de Notion, y Notion ya cumple ese rol.

**E. Escalabilidad.** Muy alta, porque cada etapa nueva es una página nueva.

**F. Recomendación.** No. Duplica a Notion. Tomar solo la idea de **links compartibles por etapa** (anclas en `proceso.html#ideate`).

---

## Alternativa 4 · Narrativa por decisiones

**A. Estructura**
```
index.html
├── Hero: el problema en una frase
├── Decisión 1 · "Necesito ayuda" a un toque
│     dato (4%) → evidencia (auditoría, NCMEC) → qué cambia
├── Decisión 2 · Entrar por perfil ("Soy…")
├── Decisión 3 · Mobile-first (50%)
├── Decisión 4 · Inglés focalizado (31%, Manila)
├── Cómo trabajé (las 5 etapas en una línea)
├── ¿Hablamos?
└── Anexo: artefactos (personas, historias, journeys…) o link a Notion
```
**B. Concepto.** El caso se cuenta como 3 o 4 decisiones de diseño, cada una con su dato y su evidencia. El proceso queda como soporte, no como índice.

**C. Ventajas**
- Muestra criterio, que es lo que diferencia a un perfil junior.
- Cada decisión se puede leer sola.
- Usa lo más fuerte que ya tenés: finding → implication.

**D. Desventajas**
- Todavía no hay diseño que muestre la decisión resuelta (faltan bocetos y prototipo).
- Exige elegir y dejar afuera.
- El design thinking queda menos visible: un recruiter que busca "el proceso del Google UX certificate" puede no reconocerlo.

**E. Escalabilidad.** Media. Cada etapa nueva no suma secciones, solo enriquece las decisiones con bocetos, prototipos y resultados de test.

**F. Recomendación.** Usarla como **guion de la landing** de la alternativa 2.

---

## Alternativa 5 · Por persona (hilo de usuario)

**A. Estructura**
```
index.html
├── Hero + resumen
├── Elegí a quién seguir: Laura · Camila · Diego (3 de 9)
│     └── su problema → su mapa → su journey → su historia clave → la decisión que la ayuda
├── El resto de las personas (resumen)
└── ¿Hablamos?
```
**B. Concepto.** El lector sigue a una persona a través de todas las etapas. Es la forma más empática y más "producto" de mostrar la investigación.

**C. Ventajas**
- Muy memorable.
- Muestra cómo cada artefacto se conecta con el siguiente.
- Reutiliza tal cual los datos por persona que ya existen en `js/data/`.

**D. Desventajas**
- Repite estructura tres veces.
- Esconde los hallazgos transversales: Analytics y competencia no pertenecen a una sola persona.
- Elegir tres de nueve deja afuera a públicos que la directora pidió priorizar.

**E. Escalabilidad.** Media. Prototype y Test se suman como un paso más del hilo, pero hay que hacerlo por cada persona.

**F. Recomendación.** No como estructura. Sí como **una pieza interactiva** dentro de `proceso.html`, por ejemplo un "seguí a Laura" que una persona, empatía, journey e historias.

---

## Comparación

| Criterio | 1 Única | 2 Landing + Proceso | 3 Hub | 4 Decisiones | 5 Por persona |
| --- | --- | --- | --- | --- | --- |
| Tiempo hasta el contacto | Lento | **Rápido** | Medio | Rápido | Medio |
| Muestra criterio | Medio | Alto | Bajo | **Muy alto** | Alto |
| Muestra el proceso completo | **Alto** | Alto | Alto | Bajo | Medio |
| Esfuerzo de cambio | **Bajo** | Medio | Alto | Alto | Alto |
| Escala a Prototype/Test | Bajo | **Alto** | Muy alto | Medio | Medio |
| Duplica a Notion | Sí | No | **Sí** | No | No |

## Recomendación

**Alternativa 2 con la landing escrita como la alternativa 4.**
- La landing se cuenta en 3 o 4 decisiones y cierra con "¿Hablamos?".
- `proceso.html` conserva el design thinking completo, con los bloques largos reducidos (ver la auditoría).
- De la alternativa 3 se toman las anclas compartibles por etapa; de la 5, el "seguí a una persona" como pieza interactiva dentro del proceso.

Decisión pendiente para vos: si la landing de este caso **es** la página del caso en tu portfolio principal o si vive aparte (ver **Content needed** en la auditoría).
