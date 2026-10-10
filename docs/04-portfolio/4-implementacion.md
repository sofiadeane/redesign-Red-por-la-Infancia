# 4 - Implementación de la auditoría

> **Qué es:** qué se cambió en el sitio a partir de la auditoría (archivos 0 a 3) y qué quedó pendiente. Estructura aplicada: alternativa 2 (Landing + Proceso) con la landing escrita por decisiones (alternativa 4). El único cambio respecto de la propuesta es que, en lugar de "Estado y próximos pasos", la landing tiene un **acceso directo al proceso**.

## Estructura final

```
index.html  (Resumen · ~5,5 pantallas en desktop, ~8 en el celular)
├── Hero: título, estado calculado, rol, dedicación + comparador Hoy / Concepto
├── Contexto + 3 datos (50% · 4% · 31%) + El desafío
├── Qué encontré → qué decidí (4 decisiones con su evidencia)
├── Acceso directo al proceso (5 etapas, con link a cada una)
└── ¿Hablamos? · mail, LinkedIn, copiar mail · → Ver proyecto en detalle

proceso.html  (Proceso)
├── 00 El proyecto: contexto, ficha, Mi rol, Cómo usé IA, Restricciones y límites, cómo está hecho el sitio
├── 01 Empathize · 02 Define · 03 Ideate
├── Lo que aprendí hasta ahora + Lo que viene
└── ¿Hablamos? · ← Volver al resumen
```

Barra superior: marca "Sofía Deane" (vuelve al inicio) + slider **Resumen | Proceso**: dos links reales con un indicador que se desliza antes de navegar. En `proceso.html` se suma la barra de etapas.

## Correcciones de la auditoría

| # | Hallazgo | Qué se hizo |
| --- | --- | --- |
| D1 / R1 | Sin contacto | "¿Hablamos?" en las dos páginas, con mail, LinkedIn y botón para copiar el mail |
| D2 | "← Portfolio" iba a GitHub | Reemplazado por la marca personal, que vuelve al resumen |
| D3 | "¿Hablamos?" no existía | Vive en este repo, como cierre de ambas páginas |
| D4 / R6 | Estado manual "etapa X de 5" | Se calcula desde `js/data/stages.js`, igual que las tarjetas de etapas y "Lo que viene" |
| D5 / R2 | 40 a 68 pantallas | Landing de ~5,5 pantallas (desktop) y ~8 (celular); el detalle pasa a `proceso.html` |
| D6 | Mismo detalle que Notion | Historias: arrancan en las 15 del MVP (las 33, con un clic). Problem statements: primero las 5 personas primarias (los 10, con un clic) |
| D7 / R4 | Figma sin evidencia | Figma se mantiene en Herramientas, marcado "en Prototype" |
| D8 | Front-end invisible | Herramientas suma HTML, CSS y JavaScript, GitHub Pages y Claude; bloque "Este sitio también es parte del trabajo" con link al código |
| D9 | El hero nombraba 3 públicos | Habla de los ocho públicos |
| D12 / R3 | Sin cierre ni plan | "Lo que aprendí hasta ahora" + "Lo que viene" con la fecha de entrega |
| R5 | No se veía tu aporte | Bloques "Mi rol" y "Cómo usé IA" |
| Improve | Insights de Empathize | Cada aprendizaje termina en una **Decisión** |
| Add | Limitaciones | Bloque "Restricciones y límites" |
| Remove | "Próximas etapas" aparte | Fusionado en "Lo que viene" |
| Extra | La matriz de 18 organizaciones estiraba la página en el celular | Corregido (la tabla se desplaza dentro de su tarjeta) |
| Extra | Las anclas quedaban debajo de la barra fija | Corregido con `scroll-padding-top` |

## Pendiente (Content needed)

- **Imagen del hero:** el comparador ya funciona (mouse, touch y teclado). Hoy muestra la home actual contra un **concepto** hecho en HTML a partir de las implicancias de Ideate. Cuando tengas el primer boceto, reemplazá el contenido de `.ba__after` en `index.html` por una imagen del mismo tamaño (390 × 688).
- **Selector de idioma:** queda para más adelante, como pediste.
- **Notion:** 3.1 de Ideate es *Historias de usuario*. En el sitio, las historias están en Empathize (sección 1.7). Conviene decidir una sola ubicación y alinear la numeración.
- `css/sections/upcoming.css` ya no se usa (era la sección "Próximas etapas"). Se puede borrar.
