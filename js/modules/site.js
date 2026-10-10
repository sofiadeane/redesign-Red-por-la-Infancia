/**
 * Piezas compartidas por las dos páginas: el slider Resumen ↔ Proceso y el botón para copiar el mail.
 */
import { $$ } from "../utils/dom.js";
import { prefersReducedMotion } from "../config.js";

const SLIDE_MS = 260;

/** Desliza el indicador hacia el link elegido y recién después navega. */
function initSwitch() {
  $$("[data-switch]").forEach((nav) => {
    const links = $$(".switch__link", nav);
    links.forEach((link, index) =>
      link.addEventListener("click", (event) => {
        const isModified = event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0;
        if (link.getAttribute("aria-current") === "page" || isModified || prefersReducedMotion()) return;
        event.preventDefault();
        nav.classList.add(`is-going-${index + 1}`);
        setTimeout(() => (window.location.href = link.href), SLIDE_MS);
      }),
    );
  });

  // Al volver con el botón "atrás", el navegador puede restaurar la página con la clase puesta.
  window.addEventListener("pageshow", () =>
    $$("[data-switch]").forEach((nav) => nav.classList.remove("is-going-1", "is-going-2")),
  );
}

function initCopy() {
  $$("[data-copy]").forEach((button) =>
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        button.textContent = "¡Copiado!";
        button.classList.add("is-done");
      } catch {
        button.textContent = "Copialo a mano";
      }
      setTimeout(() => {
        button.textContent = "Copiar";
        button.classList.remove("is-done");
      }, 2000);
    }),
  );
}

export function initSite() {
  initSwitch();
  initCopy();
}
