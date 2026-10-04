/**
 * Proto-personas: grilla filtrable y ficha completa en un modal.
 */
import { $, $$, escapeHtml, setActive } from "../utils/dom.js";
import { avatarSrc, personaColors } from "../config.js";
import { personas } from "../data/personas.js";
import { findPersona } from "../data/people.js";

const FILTERS = {
  all: () => true,
  primary: (persona) => persona.primary,
  secondary: (persona) => !persona.primary,
};

const priorityLabel = (persona) => (persona.primary ? "Primaria" : "Secundaria");
const list = (items) => `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
const shortDevice = (device) => device.split(/[;,(]/)[0];

function cardTemplate(persona, index) {
  return `
    <button class="persona card" style="--c:${personaColors[persona.id]};animation-delay:${index * 50}ms"
            data-persona="${persona.id}" aria-haspopup="dialog">
      <span class="persona__top">
        <img class="persona__img" src="${avatarSrc(persona.id)}" alt="" loading="lazy">
        <span class="persona__id">
          <span class="persona__name">${escapeHtml(persona.name)}</span>
          <span class="persona__role">${escapeHtml(persona.role)}</span>
          <span class="persona__badge">${persona.group} · ${priorityLabel(persona)}</span>
        </span>
      </span>
      <span class="persona__body">
        <span class="persona__quote">“${escapeHtml(persona.quote)}”</span>
        <span class="persona__facts">
          <span>${escapeHtml(persona.age)}</span>
          <span>${escapeHtml(persona.location)}</span>
          <span>${escapeHtml(shortDevice(persona.device))}</span>
        </span>
        <span class="persona__more">Ver persona completa →</span>
      </span>
    </button>`;
}

function modalTemplate(persona) {
  const tabs = [
    { id: "goals", label: "Objetivos", content: list(persona.goals) },
    { id: "pains", label: "Frustraciones", content: list(persona.frustrations) },
    {
      id: "needs",
      label: "Necesita del sitio",
      content: `<p>${escapeHtml(persona.needs)}</p><p><b>Páginas clave:</b> ${escapeHtml(persona.pages)}</p>`,
    },
  ];

  return `
    <div class="pm__head" style="--c:${personaColors[persona.id]}">
      <button class="modal__close" aria-label="Cerrar">×</button>
      <img src="${avatarSrc(persona.id)}" alt="Ilustración de ${escapeHtml(persona.name)}">
      <div>
        <span class="persona__badge">${persona.group} · Persona ${priorityLabel(persona).toLowerCase()}</span>
        <h3 id="pmTitle">${escapeHtml(persona.name)}</h3>
        <p>${escapeHtml(persona.role)}</p>
      </div>
    </div>
    <div class="pm__body">
      <p class="pm__quote">“${escapeHtml(persona.quote)}”</p>
      <dl class="pm__facts">
        <div><dt>Edad</dt><dd>${escapeHtml(persona.age)}</dd></div>
        <div><dt>Ubicación</dt><dd>${escapeHtml(persona.location)}</dd></div>
        <div><dt>Ocupación</dt><dd>${escapeHtml(persona.job)}</dd></div>
        <div><dt>Dispositivo</dt><dd>${escapeHtml(persona.device)}</dd></div>
        <div class="pm__facts-wide"><dt>Cómo llega</dt><dd>${escapeHtml(persona.arrives)}</dd></div>
      </dl>
      <p class="pm__context"><b>Contexto:</b> ${escapeHtml(persona.context)}</p>
      <div class="pm__tabs" role="tablist">
        ${tabs.map((tab, i) => `<button class="chip${i === 0 ? " is-on" : ""}" role="tab" data-tab="${tab.id}">${tab.label}</button>`).join("")}
      </div>
      ${tabs.map((tab, i) => `<div class="pm__panel" data-panel="${tab.id}" ${i ? "hidden" : ""}>${tab.content}</div>`).join("")}
      <div class="pm__ga"><b>Dato de Analytics</b>${escapeHtml(persona.ga)}</div>
      <a class="btn btn--ghost" href="#journeys" data-journey="${persona.id}">Ver su mapa de recorrido →</a>
    </div>`;
}

/**
 * @param {{ onShowJourney: (id: string) => void }} options
 */
export function initPersonas({ onShowJourney }) {
  const grid = $("#personaGrid");
  const filterButtons = $$("[data-pfilter]");
  const modal = $("#personaModal");
  const modalBody = $("#personaModalBody");

  const render = (filter) => {
    grid.innerHTML = personas.filter(FILTERS[filter]).map(cardTemplate).join("");
    setActive(filterButtons, (button) => button.dataset.pfilter === filter);
  };

  const selectTab = (tabId) => {
    setActive($$("[data-tab]", modal), (tab) => tab.dataset.tab === tabId);
    $$("[data-panel]", modal).forEach((panel) => (panel.hidden = panel.dataset.panel !== tabId));
  };

  filterButtons.forEach((button) => button.addEventListener("click", () => render(button.dataset.pfilter)));

  grid.addEventListener("click", (event) => {
    const card = event.target.closest(".persona");
    if (!card) return;
    modalBody.innerHTML = modalTemplate(findPersona(card.dataset.persona));
    modal.showModal();
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.closest(".modal__close")) modal.close();

    const tab = event.target.closest("[data-tab]");
    if (tab) selectTab(tab.dataset.tab);

    const journeyLink = event.target.closest("[data-journey]");
    if (journeyLink) {
      modal.close();
      onShowJourney(journeyLink.dataset.journey);
    }
  });

  render("all");
}
