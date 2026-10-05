/**
 * Proto-personas: grilla filtrable y ficha completa (estilo hoja de persona) en un modal.
 */
import { $, $$, escapeHtml, setActive } from "../utils/dom.js";
import { avatarSrc, personaColors } from "../config.js";
import { personas, PERSONALITY_AXES } from "../data/personas.js";
import { findPersona } from "../data/people.js";

const FILTERS = {
  all: () => true,
  primary: (persona) => persona.primary,
  secondary: (persona) => !persona.primary,
};

const priorityLabel = (persona) => (persona.primary ? "Primaria" : "Secundaria");
const list = (items) => `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
const shortDevice = (device) => device.split(/[;,(]/)[0];
const chips = (items, className) =>
  `<span class="${className}">${items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</span>`;

/** Barras de motivación (0 a 100). `limit` recorta la lista para la tarjeta. */
const motivationBars = (motivations, limit = motivations.length) =>
  motivations
    .slice(0, limit)
    .map(
      ({ label, value }) => `
        <span class="mbar" role="img" aria-label="${escapeHtml(label)}: ${value} de 100">
          <span class="mbar__fill" style="width:${value}%"></span>
          <span class="mbar__label">${escapeHtml(label)}</span>
        </span>`,
    )
    .join("");

/** Ejes de personalidad con un marcador entre dos extremos. */
const personalitySliders = (values) =>
  PERSONALITY_AXES.map(
    ([left, right], i) => `
      <div class="pslider" role="img" aria-label="${left} a ${right}: ${values[i]} de 100">
        <span class="pslider__track"><span class="pslider__knob" style="left:${values[i]}%"></span></span>
        <span class="pslider__ends"><span>${left}</span><span>${right}</span></span>
      </div>`,
  ).join("");

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
        <span class="persona__block">
          <span class="persona__label">Motivaciones</span>
          <span class="mbars mbars--mini">${motivationBars(persona.motivations, 3)}</span>
        </span>
        <span class="persona__block">
          <span class="persona__label">Dónde está</span>
          ${chips(persona.channels, "persona__channels")}
        </span>
        <span class="persona__more">Ver persona completa →</span>
      </span>
    </button>`;
}

function modalTemplate(persona) {
  return `
    <div class="pm" style="--c:${personaColors[persona.id]}">
      <header class="pm__band">
        <button class="modal__close" aria-label="Cerrar">×</button>
        <div>
          <h3 id="pmTitle">${escapeHtml(persona.name)}</h3>
          <p>${escapeHtml(persona.role)}</p>
        </div>
        <span class="pm__tag">Proto-persona<br><b>${persona.group} · ${priorityLabel(persona)}</b></span>
      </header>

      <div class="pm__grid">
        <div class="pm__col">
          <dl class="pm__facts">
            <div><dt>Edad</dt><dd>${escapeHtml(persona.age)}</dd></div>
            <div><dt>Ocupación</dt><dd>${escapeHtml(persona.job)}</dd></div>
            <div><dt>Familia</dt><dd>${escapeHtml(persona.family)}</dd></div>
            <div><dt>Ubicación</dt><dd>${escapeHtml(persona.location)}</dd></div>
            <div><dt>Dispositivo</dt><dd>${escapeHtml(persona.device)}</dd></div>
          </dl>
          <figure class="pm__portrait">
            <img src="${avatarSrc(persona.id)}" alt="Ilustración de ${escapeHtml(persona.name)}">
            <figcaption class="pm__quote">“${escapeHtml(persona.quote)}”</figcaption>
          </figure>
        </div>

        <div class="pm__col">
          <section>
            <h4 class="pm__h">Motivaciones</h4>
            <div class="mbars">${motivationBars(persona.motivations)}</div>
          </section>
          <section class="pm__bio">
            <h4 class="pm__h">Bio</h4>
            <p>${escapeHtml(persona.bio)}</p>
            <p><b>Contexto:</b> ${escapeHtml(persona.context)}</p>
            <p><b>Cómo llega:</b> ${escapeHtml(persona.arrives)}</p>
          </section>
        </div>

        <div class="pm__col">
          <section>
            <h4 class="pm__h">Objetivos</h4>
            ${list(persona.goals)}
          </section>
          <section>
            <h4 class="pm__h">Frustraciones</h4>
            ${list(persona.frustrations)}
          </section>
          <section>
            <h4 class="pm__h">Personalidad</h4>
            <div class="psliders">${personalitySliders(persona.personality)}</div>
          </section>
          <section>
            <h4 class="pm__h">Canales que usa</h4>
            ${chips(persona.channels, "pm__channels")}
          </section>
        </div>
      </div>

      <div class="pm__foot">
        <div class="pm__needs">
          <h4 class="pm__h">Necesita del sitio</h4>
          <p>${escapeHtml(persona.needs)}</p>
          <p><b>Páginas clave:</b> ${escapeHtml(persona.pages)}</p>
        </div>
        <div class="pm__ga"><b>Dato de Analytics</b>${escapeHtml(persona.ga)}</div>
        <div class="pm__links">
          <a class="btn btn--ghost" href="#empatia" data-empathy="${persona.id}">Ver su mapa de empatía →</a>
          <a class="btn btn--ghost" href="#journeys" data-journey="${persona.id}">Ver su mapa de recorrido →</a>
        </div>
      </div>
    </div>`;
}

/**
 * @param {{ onShowJourney: (id: string) => void, onShowEmpathy: (id: string) => void }} options
 */
export function initPersonas({ onShowJourney, onShowEmpathy }) {
  const grid = $("#personaGrid");
  const filterButtons = $$("[data-pfilter]");
  const modal = $("#personaModal");
  const modalBody = $("#personaModalBody");

  const render = (filter) => {
    grid.innerHTML = personas.filter(FILTERS[filter]).map(cardTemplate).join("");
    setActive(filterButtons, (button) => button.dataset.pfilter === filter);
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

    const journeyLink = event.target.closest("[data-journey]");
    if (journeyLink) {
      modal.close();
      onShowJourney(journeyLink.dataset.journey);
    }

    const empathyLink = event.target.closest("[data-empathy]");
    if (empathyLink) {
      modal.close();
      onShowEmpathy(empathyLink.dataset.empathy);
    }
  });

  render("all");
}
