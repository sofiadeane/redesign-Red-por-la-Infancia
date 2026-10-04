/**
 * Puntos de dolor: filtro por categoría (Financiero, Producto, Proceso, Soporte).
 */
import { $, $$, setActive, restartAnimation } from "../utils/dom.js";

const DESCRIPTIONS = {
  all: "Financiero: dinero · Producto: calidad · Proceso: recorrido del usuario · Soporte: conseguir ayuda.",
  financiero: "Financiero: puntos de dolor relacionados con el dinero, como no poder donar.",
  producto: "Producto: problemas de calidad del sitio, como errores visuales o contenido ilegible.",
  proceso: "Proceso: problemas en el recorrido del usuario, como no encontrar lo que busca.",
  soporte:
    "Soporte: problemas para conseguir ayuda, tanto para quien la busca como para el equipo que mantiene el sitio.",
};

export function initPainPoints() {
  const buttons = $$("[data-pain]");
  const cards = $$(".problem");

  const filter = (category) => {
    setActive(buttons, (button) => button.dataset.pain === category);
    cards.forEach((card) => {
      const visible = category === "all" || card.dataset.cats.split(" ").includes(category);
      card.classList.toggle("is-hidden", !visible);
      if (visible) {
        card.classList.add("is-in");
        restartAnimation(card, "is-match");
      }
    });
    $("#painDesc").textContent = DESCRIPTIONS[category];
  };

  buttons.forEach((button) => button.addEventListener("click", () => filter(button.dataset.pain)));
}
