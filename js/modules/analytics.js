/**
 * Datos de uso: gráficos de barras de páginas más vistas y de países.
 */
import { $ } from "../utils/dom.js";
import { topCountries, topPages } from "../data/analytics.js";

const MIN_BAR_WIDTH = 8;

/** Renderiza una lista de barras horizontales proporcionales al valor máximo. */
function renderBars(container, items) {
  const max = Math.max(...items.map((item) => item.views));

  container.innerHTML = items
    .map(({ name, views, highlight }) => {
      const width = Math.max(MIN_BAR_WIDTH, (views / max) * 100);
      return `
        <li class="bar${highlight ? " is-key" : ""}">
          <span>${name}</span>
          <span class="bar__track">
            <span class="bar__fill" data-width="${width}"></span>
            <span class="bar__val">${views.toLocaleString("es-AR")}</span>
          </span>
        </li>`;
    })
    .join("");
}

export function initAnalytics() {
  renderBars($("#bars"), topPages);
  renderBars($("#countryBars"), topCountries);
}
