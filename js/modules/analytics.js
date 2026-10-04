/**
 * Datos de uso: gráfico de barras de páginas más vistas.
 */
import { $ } from "../utils/dom.js";
import { topPages } from "../data/analytics.js";

const MIN_BAR_WIDTH = 8;

export function initAnalytics() {
  const max = Math.max(...topPages.map((page) => page.views));

  $("#bars").innerHTML = topPages
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
