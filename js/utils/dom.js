/**
 * Helpers de DOM.
 */

export const $ = (selector, root = document) => root.querySelector(selector);

export const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const HTML_ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };

/** Escapa texto para insertarlo de forma segura en un template de HTML. */
export const escapeHtml = (value = "") => String(value).replace(/[&<>"]/g, (char) => HTML_ESCAPES[char]);

/** Marca un único botón como activo dentro de un grupo. */
export const setActive = (buttons, isActive, className = "is-on") =>
  buttons.forEach((button) => button.classList.toggle(className, isActive(button)));

/** Reinicia una animación CSS volviendo a agregar la clase. */
export const restartAnimation = (element, className) => {
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
};
