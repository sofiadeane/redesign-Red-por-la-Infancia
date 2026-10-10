# Rediseño Red por la Infancia · UX Case Study

Caso de estudio interactivo que documenta el rediseño del sitio de **Fundación Red por la Infancia** con design thinking. Tiene dos páginas:

- **Resumen** (`index.html`): el caso en pocos minutos, las decisiones clave, el acceso a cada etapa y el contacto.
- **Proceso** (`proceso.html`): el detalle de cada etapa, con toda la evidencia.

Un slider en la barra superior cambia entre las dos.

| Etapa          | Estado                                           |
| -------------- | ------------------------------------------------ |
| 01 · Empathize | ✅                                               |
| 02 · Define    | ✅                                               |
| 03 · Ideate    | 🟡 En curso (goal statement y competitive audit) |
| 04 · Prototype | 🔒 Próximamente                                  |
| 05 · Test      | 🔒 Próximamente                                  |

**Ver el sitio:** https://sofiadeane.github.io/redesign-Red-por-la-Infancia/

## Estructura

```
index.html                 Resumen: hero con comparador, contexto, decisiones, acceso al proceso y contacto
proceso.html               Proceso: el proyecto (00), las etapas y los aprendizajes
css/
  tokens.css               Variables de diseño (colores, tipografías, sombras)
  base.css                 Reset, tipografía y utilidades
  components.css           Tarjetas, chips, botones, tags y modales
  layout.css               Barra superior (marca, slider y etapas), secciones y footer de contacto
  sections/                Estilos de cada sección (landing, hero, summary, project, empathize, define, ideate)
js/
  landing.js               Punto de entrada del resumen
  main.js                  Punto de entrada del proceso: inicializa cada módulo
  config.js                Colores de personas y rutas compartidas
  data/                    Contenido de la investigación (fuente: Notion) y estado de las etapas (stages.js)
  modules/                 Un módulo por funcionalidad (auditoría, personas, historias, slider, etc.)
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
- **Estado de las etapas:** cambiá `state` en `js/data/stages.js` (`done`, `current` o `next`). El estado del hero, las tarjetas de acceso y "Lo que viene" se actualizan solos.
- **Nueva etapa:** agregá su sección en `proceso.html` y sus estilos en `css/sections/`, su lógica en `js/modules/` e inicializala en `js/main.js`. Después quitá `is-locked` del link de la etapa en la barra de `proceso.html` y sumala a `STAGE_SECTIONS` en `js/modules/navigation.js`.

## Publicar con GitHub Pages

Settings → Pages → Source: _Deploy from a branch_ → Branch: `main` / `(root)` → Save.

---

Diseño, research y desarrollo: Sofía Deane · 2026. Las capturas del sitio público redporlainfancia.org se usan con fines de análisis.
