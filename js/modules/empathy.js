/**
 * Mapas de empatía: un lienzo por persona (Dice, Piensa, Hace, Siente + Dolores y Ganancias).
 */
import { $, $$, escapeHtml } from "../utils/dom.js";
import { avatarSrc, personaColors } from "../config.js";
import { empathyMaps } from "../data/empathy.js";
import { findPersona } from "../data/people.js";

const QUADRANTS = [
  { key: "says", label: "Dice", hint: "Frases que diría en voz alta" },
  { key: "thinks", label: "Piensa", hint: "Lo que le preocupa y no siempre dice" },
  { key: "does", label: "Hace", hint: "Acciones y comportamientos en el sitio" },
  { key: "feels", label: "Siente", hint: "Emociones a lo largo de la experiencia" },
];

const list = (items) => `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;

function mapTemplate(map) {
  const persona = findPersona(map.persona);

  const quadrants = QUADRANTS.map(
    ({ key, label, hint }) => `
      <section class="emap__q emap__q--${key}" aria-label="${label}">
        <h4 class="emap__label">${label}</h4>
        <p class="emap__hint">${hint}</p>
        ${list(map[key])}
      </section>`,
  ).join("");

  return `
    <div class="emap__head">
      <img src="${avatarSrc(map.persona)}" alt="">
      <div>
        <h3>${escapeHtml(persona.name)} <span>${escapeHtml(persona.role)}</span></h3>
        <p><b>Escenario:</b> ${escapeHtml(map.scenario)}</p>
      </div>
    </div>
    <div class="emap__canvas">
      ${quadrants}
      <div class="emap__center" aria-hidden="true">
        <img src="${avatarSrc(map.persona)}" alt="">
        <span>${escapeHtml(persona.name)}</span>
      </div>
    </div>
    <div class="emap__bottom">
      <section class="emap__pg emap__pg--pains" aria-label="Dolores">
        <h4 class="emap__label">Dolores</h4>
        <p class="emap__hint">Miedos, frustraciones y obstáculos</p>
        ${list(map.pains)}
      </section>
      <section class="emap__pg emap__pg--gains" aria-label="Ganancias">
        <h4 class="emap__label">Ganancias</h4>
        <p class="emap__hint">Lo que espera lograr y le haría la vida más fácil</p>
        ${list(map.gains)}
      </section>
    </div>`;
}

/** @returns {(id: string) => void} función para mostrar el mapa de empatía de una persona. */
export function initEmpathy() {
  const tabs = $("#empathyTabs");
  const container = $("#empathyMap");

  tabs.innerHTML = empathyMaps
    .map(
      ({ persona }) => `
        <button class="tab" role="tab" data-persona="${persona}" aria-selected="false">
          <img src="${avatarSrc(persona)}" alt="">${escapeHtml(findPersona(persona).name)}
        </button>`,
    )
    .join("");

  const show = (id) => {
    const map = empathyMaps.find((item) => item.persona === id);
    if (!map) return;

    $$(".tab", tabs).forEach((tab) => tab.setAttribute("aria-selected", tab.dataset.persona === id));
    const selected = $(`.tab[data-persona="${id}"]`, tabs);
    tabs.scrollTo({ left: selected.offsetLeft - 16, behavior: "smooth" });

    container.style.setProperty("--c", personaColors[id]);
    container.innerHTML = mapTemplate(map);
  };

  tabs.addEventListener("click", (event) => {
    const tab = event.target.closest(".tab");
    if (tab) show(tab.dataset.persona);
  });

  show(empathyMaps[0].persona);
  return show;
}
