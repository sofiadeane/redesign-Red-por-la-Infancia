# Rediseño Red por la Infancia · UX Case Study

Caso de estudio interactivo que documenta el rediseño del sitio de **Fundación Red por la Infancia** con design thinking.

| Etapa                    | Estado                                           |
| ------------------------ | ------------------------------------------------ |
| 00 · Resumen del proceso | ✅                                               |
| 01 · Empathize           | ✅                                               |
| 02 · Define              | ✅                                               |
| 03 · Ideate              | 🟡 En curso (goal statement y competitive audit) |
| 04 · Prototype           | 🔒 Próximamente                                  |
| 05 · Test                | 🔒 Próximamente                                  |

**Ver el sitio:** https://sofiadeane.github.io/redesign-Red-por-la-Infancia/

## Estructura

```
index.html                 Marcado de todas las secciones
css/
  tokens.css               Variables de diseño (colores, tipografías, sombras)
  base.css                 Reset, tipografía y utilidades
  components.css           Tarjetas, chips, botones, tags y modales
  layout.css               Barra superior, secciones, encabezados de etapa y footer
  sections/                Estilos de cada sección (hero, summary, empathize, define, ideate, upcoming)
js/
  main.js                  Punto de entrada: inicializa cada módulo
  config.js                Colores de personas y rutas compartidas
  data/                    Contenido de la investigación (fuente: Notion)
  modules/                 Un módulo por funcionalidad (auditoría, personas, historias, etc.)
  utils/                   Helpers de DOM y de animación
assets/img/                Ilustraciones de personas, capturas de la auditoría y de competidores, favicon
docs/                      Documentación completa de cada etapa en Markdown, lista para pasar a Notion
```

Convenciones:

- **CSS:** nombres de clases con BEM (`bloque__elemento--modificador`) y valores de diseño en `tokens.css`.
- **JS:** módulos ES nativos, sin dependencias ni build. El contenido vive en `js/data/` separado de la lógica de `js/modules/`.
- **Formato:** Prettier (`.prettierrc.json`) y EditorConfig (`.editorconfig`).

## Ver localmente

Como usa módulos ES, el sitio necesita un servidor local (abrir `index.html` con doble clic no funciona):

```bash
python3 -m http.server 8000
# luego abrí http://localhost:8000
```

## Cómo actualizar el contenido

- **Textos de la investigación:** editá los archivos de `js/data/` (personas, historias, recorridos, Define).
- **Nueva etapa:** agregá su sección en `index.html` y sus estilos en `css/sections/`, su lógica en `js/modules/` e inicializala en `js/main.js`. Después quitá `is-locked` del link de la etapa en la barra superior y sumala a `STAGE_SECTIONS` en `js/modules/navigation.js`.

## Publicar con GitHub Pages

Settings → Pages → Source: _Deploy from a branch_ → Branch: `main` / `(root)` → Save.

---

Diseño y research: Sofía Deane · 2026. Las capturas del sitio público redporlainfancia.org se usan con fines de análisis.
