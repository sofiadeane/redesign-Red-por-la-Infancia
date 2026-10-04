# Rediseño Red por la Infancia · UX Case Study

Caso de estudio interactivo que documenta el proceso de rediseño del sitio de **Fundación Red por la Infancia** siguiendo design thinking:

| Etapa | Estado |
|---|---|
| 01 · Empathize | ✅ Publicada |
| 02 · Define | 🔒 Próximamente |
| 03 · Ideate | 🔒 Próximamente |
| 04 · Prototype | 🔒 Próximamente |
| 05 · Test | 🔒 Próximamente |

**Ver el sitio:** https://sofiadeane.github.io/redesign-Red-por-la-Infancia/

## Qué incluye la etapa Empathize

- Auditoría del sitio actual en celular, tablet y computadora (21 capturas)
- Puntos de dolor clasificados en Financiero, Producto, Proceso y Soporte
- Datos de Google Analytics (oct 2025 – oct 2026)
- 6 grupos de usuarios y 6 proto-personas
- 20 historias de usuario priorizadas con MoSCoW
- 6 mapas de recorrido con curva emocional

## Estructura

```
index.html          → página del caso de estudio
css/styles.css      → estilos (minimalista con gradientes suaves)
js/data.js          → contenido de la investigación (personas, historias, recorridos)
js/main.js          → interacciones (filtros, modales, mapas, contadores)
assets/img/         → ilustraciones de personas, capturas de la auditoría, favicon
```

Es un sitio estático: no necesita build ni dependencias. Para verlo localmente, abrí `index.html` en el navegador.

## Cómo agregar una etapa nueva

1. Duplicá la sección `#empathize` en `index.html` y cambiá el número y el título.
2. En `index.html`, quitá la clase `is-locked` del link de la etapa en la barra superior.
3. En `js/main.js`, actualizá el estado de la etapa en `STAGES` (`status` y `cta: true`).

## Publicar con GitHub Pages

Settings → Pages → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.

---

Diseño y research: Sofía Deane · 2026. Las capturas del sitio público redporlainfancia.org se usan con fines de análisis.
# Redesign-Red-por-la-Infancia
Un repositorio que documenta el proceso de rediseño de la plataforma de Fundación Red por la Infancia

## Link para ver el proceso de rediseño
https://sofiadeane.github.io/redesign-Red-por-la-Infancia/
