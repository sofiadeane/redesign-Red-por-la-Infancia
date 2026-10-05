# 2 - Estructura en dos páginas: Landing + Proceso

> **Qué es:** cómo quedaría la alternativa recomendada (2 + 4). Es una propuesta para evaluar; no está implementada.

## Landing (`index.html`) · objetivo: entender el caso en 2 minutos y contactar

| # | Bloque | Contenido | Sale de |
| --- | --- | --- | --- |
| 1 | **Hero** | Título, una frase del problema, rol, duración, estado ("Ideate en curso") y **una imagen** (sitio actual roto en el celular → **Content needed:** boceto o prototipo cuando exista) | Hero actual + Resumen |
| 2 | **Contexto en 3 datos** | 50% mobile · 4% llega a Necesito Ayuda · 31% fuera de Argentina | KPIs del Resumen |
| 3 | **El desafío** | La pregunta "¿Cómo podríamos…?" actual | Resumen |
| 4 | **Qué encontré → qué decidí** | 3 o 4 tarjetas: dato → evidencia → decisión. Por ejemplo: "Necesito ayuda" a un toque; entrar por perfil; mobile-first; inglés focalizado | Insights + Design implications |
| 5 | **Cómo trabajé** | Una línea con las 5 etapas, su estado y 1 o 2 artefactos cada una, con links a `proceso.html#etapa` | Línea de tiempo actual |
| 6 | **¿Hablamos?** | Contacto + `→ Ver proyecto en detalle` | Nuevo |
| 7 | Footer | Créditos, nota sobre las capturas | Footer actual |

Largo objetivo: **5 a 7 pantallas en mobile** (hoy el caso completo ocupa 68).

## Proceso (`proceso.html`) · objetivo: mostrar el método y la evidencia

| Etapa | Qué se muestra completo | Qué se reduce | Qué queda solo en Notion |
| --- | --- | --- | --- |
| 01 Empathize | Auditoría con capturas, Analytics, entrevista, grupos | Personas: tarjeta + modal (igual que hoy). Mapas de empatía y journeys: selector de persona, uno visible a la vez. **Historias: las del MVP (Debe) + "ver las 33"** | Fichas largas, tablas de criterios de aceptación |
| 02 Define | Problem statement central + hipótesis | Problem statements: los 3 de las personas primarias, el resto en selector | Propuestas de valor completas |
| 03 Ideate | Goal statement, competencia, matriz, gap, implicancias | Nada (ya está resumido) | Auditorías individuales, reporte |
| 04 / 05 | Próximamente | — | — |

Al final: "¿Hablamos?" otra vez y "Ver la investigación completa" (Notion o `docs/`).

## Navbar con slider Landing ↔ Proceso

```
[← Portfolio]   ( Resumen | Proceso )          ← control segmentado
                 00 01 02 03 04 05              ← solo en proceso.html
```

| Decisión | Propuesta | Por qué |
| --- | --- | --- |
| Elemento | **Dos links `<a>`** con estilo de control segmentado y un indicador que se desliza | Son dos páginas distintas: deben funcionar sin JS, abrirse en otra pestaña y tener URL propia. Un `switch` o `tab` anunciaría otra cosa al lector de pantalla. |
| Estado actual | `aria-current="page"` en el link activo | Accesible y fácil de estilar |
| Animación | El indicador se desliza al cargar la página nueva (o con View Transitions si el navegador las soporta) | Se siente como un slider sin romper la navegación real |
| Barra de etapas | Solo en `proceso.html`, debajo del slider (scroll horizontal en mobile, como hoy) | En la landing no hace falta: ahí las etapas son tarjetas con link |
| Etiquetas | "Resumen" / "Proceso" (o "Caso" / "Detalle") | Cortas, entran en 375 px junto al botón Portfolio |
| Riesgo | Que el slider parezca un filtro de la misma página | Se mitiga con un cambio de URL visible y el título de página distinto |

## CTA "¿Hablamos?"

**Ubicación:** después de "Qué encontré → qué decidí" y "Cómo trabajé", al final de la landing. Se repite al pie de `proceso.html`.

```
┌─────────────────────────────────────────────┐
│  ¿Hablamos?                                 │
│  Busco mi primer rol en [Content needed].   │
│  [Escribime ✉]  [LinkedIn ↗]  [CV ↓]        │
│                                             │
│  → Ver proyecto en detalle                  │
└─────────────────────────────────────────────┘
```

| Punto | Decisión |
| --- | --- |
| Botón principal | Contacto (email). Es la acción que buscás. |
| Botón secundario | `→ Ver proyecto en detalle` como link de texto, para quien quiere seguir leyendo |
| Texto | Una línea sobre qué rol buscás (**Content needed**) |
| Nombre | Hoy el footer dice "¿Charlamos?". Elegí uno ("¿Hablamos?" es el que pediste) y usalo igual en todo el portfolio |
| Datos | **Content needed:** email, LinkedIn, CV (PDF) y link al portfolio principal |

## Qué pasa con cada sección actual

| Sección actual | Destino |
| --- | --- |
| Hero, Resumen | Landing (reescrito) |
| Auditoría, Problemas, Datos, Entrevista, Grupos | Proceso |
| Personas, Empatía, Journeys | Proceso, con selector |
| Historias | Proceso: MVP + "ver todas" |
| Insights de Empathize | Landing (como decisiones) + Proceso |
| Problem statements, Hipótesis | Proceso, reducido |
| Propuestas de valor, UVP | Proceso: UVP + 3 ideas; el tablero completo, a Notion |
| Ideate (5 bloques) | Proceso; las implicancias alimentan la landing |
| Próximas etapas | Se funde con "Cómo trabajé" |
| Footer "¿Charlamos?" | Reemplazado por "¿Hablamos?" con contacto |
