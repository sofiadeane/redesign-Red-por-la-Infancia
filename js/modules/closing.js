/**
 * Cierre del proceso: las etapas que faltan y la fecha de entrega, desde los datos de etapas.
 */
import { $, escapeHtml } from "../utils/dom.js";
import { stages, deadline } from "../data/stages.js";

export function initClosing() {
  $("#deadline").textContent = deadline;
  $("#aheadList").innerHTML = stages
    .filter((stage) => stage.state === "next")
    .map(
      (stage) => `
        <li class="ahead__item" style="--c:${stage.color}">
          <span>${stage.num}</span>
          <b>${escapeHtml(stage.name)}</b>
          <small>${stage.items.map(escapeHtml).join(" · ")}</small>
        </li>`,
    )
    .join("");
}
