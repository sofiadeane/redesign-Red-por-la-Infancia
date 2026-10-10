/**
 * Mapas de empatía explorables: al principio solo se ven los títulos alrededor de la persona
 * (Dice, Piensa, Hace, Siente, Dolores y Ganancias). Al elegir uno, su contenido aparece en el panel.
 */
import { $, $$, escapeHtml, restartAnimation } from "../utils/dom.js";
import { avatarSrc, personaColors, prefersReducedMotion } from "../config.js";
import { empathyMaps } from "../data/empathy.js";
import { findPersona } from "../data/people.js";

const PARTS = [
  { key: "says", label: "Dice", hint: "Frases que diría en voz alta", unit: ["frase", "frases"] },
  { key: "thinks", label: "Piensa", hint: "Lo que le preocupa y no siempre dice", unit: ["idea", "ideas"] },
  {
    key: "does",
    label: "Hace",
    hint: "Acciones y comportamientos en el sitio",
    unit: ["acción", "acciones"],
  },
  {
    key: "feels",
    label: "Siente",
    hint: "Emociones a lo largo de la experiencia",
    unit: ["emoción", "emociones"],
  },
  { key: "pains", label: "Dolores", hint: "Miedos, frustraciones y obstáculos", unit: null },
  {
    key: "gains",
    label: "Ganancias",
    hint: "Lo que espera lograr y le haría la vida más fácil",
    unit: null,
  },
];

const QUADRANTS = PARTS.slice(0, 4);
const BOTTOM = PARTS.slice(4);
const MOBILE = "(max-width: 760px)";

const count = (map, part) => {
  const total = map[part.key].length;
  // Dolores y Ganancias muestran solo el número: el nombre ya dice qué son.
  return part.unit ? `${total} ${part.unit[total === 1 ? 0 : 1]}` : total;
};

function tileTemplate(map, part, index) {
  return `
    <button class="emap__tile emap__tile--${part.key}" type="button" data-part="${part.key}"
      aria-pressed="false" aria-controls="empathyPanel" style="--i:${index}">
      <span class="emap__tile-label">${part.label}</span>
      <span class="emap__tile-count">${count(map, part)}</span>
    </button>`;
}

function mapTemplate(map) {
  const persona = findPersona(map.persona);
  return `
    <div class="emap__head">
      <img src="${avatarSrc(map.persona)}" alt="">
      <div>
        <h3>${escapeHtml(persona.name)} <span>${escapeHtml(persona.role)}</span></h3>
        <p><b>Escenario:</b> ${escapeHtml(map.scenario)}</p>
      </div>
    </div>
    <div class="emap__body">
      <div class="emap__canvas">
        <div class="emap__quads">
          ${QUADRANTS.map((part, i) => tileTemplate(map, part, i + 1)).join("")}
          <div class="emap__center" aria-hidden="true">
            <img src="${avatarSrc(map.persona)}" alt="">
            <span>${escapeHtml(persona.name)}</span>
          </div>
        </div>
        <div class="emap__pair">
          ${BOTTOM.map((part, i) => tileTemplate(map, part, i + 5)).join("")}
        </div>
      </div>
      <div class="emap__panel" id="empathyPanel" aria-live="polite"></div>
    </div>`;
}

function emptyPanel() {
  return `
    <div class="emap__empty">
      <span class="emap__empty-icon" aria-hidden="true">↖</span>
      <p><b>Elegí una parte del mapa</b> para ver qué dice, piensa, hace y siente, y qué la frena o la ayudaría.</p>
    </div>`;
}

function partPanel(map, index) {
  const part = PARTS[index];
  const prev = PARTS[(index + PARTS.length - 1) % PARTS.length];
  const next = PARTS[(index + 1) % PARTS.length];
  return `
    <div class="emap__detail emap__detail--${part.key}">
      <span class="emap__label">${part.label}</span>
      <p class="emap__hint">${part.hint}</p>
      <ul>${map[part.key].map((item, i) => `<li style="--i:${i}">${escapeHtml(item)}</li>`).join("")}</ul>
    </div>
    <div class="emap__nav">
      <button type="button" data-go="${prev.key}">← ${prev.label}</button>
      <span>${index + 1} / ${PARTS.length}</span>
      <button type="button" data-go="${next.key}">${next.label} →</button>
    </div>`;
}

/** @returns {(id: string) => void} función para mostrar el mapa de empatía de una persona. */
export function initEmpathy() {
  const tabs = $("#empathyTabs");
  const container = $("#empathyMap");
  let current = null;
  let seen = false;

  tabs.innerHTML = empathyMaps
    .map(
      ({ persona }) => `
        <button class="tab" role="tab" data-persona="${persona}" aria-selected="false">
          <img src="${avatarSrc(persona)}" alt="">${escapeHtml(findPersona(persona).name)}
        </button>`,
    )
    .join("");

  const select = (key, { scroll = false } = {}) => {
    const index = PARTS.findIndex((part) => part.key === key);
    const panel = $(".emap__panel", container);
    $$(".emap__tile", container).forEach((tile) =>
      tile.setAttribute("aria-pressed", tile.dataset.part === key),
    );
    container.classList.add("has-selection");
    panel.innerHTML = partPanel(current, index);
    restartAnimation(panel, "is-swap");
    // En el celular el panel queda debajo del mapa: lo acercamos para que se vea el contenido.
    if (scroll && window.matchMedia(MOBILE).matches) {
      panel.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "nearest" });
    }
  };

  const playEntrance = () => restartAnimation(container, "is-entering");

  const show = (id) => {
    const map = empathyMaps.find((item) => item.persona === id);
    if (!map) return;
    current = map;

    $$(".tab", tabs).forEach((tab) => tab.setAttribute("aria-selected", tab.dataset.persona === id));
    const selected = $(`.tab[data-persona="${id}"]`, tabs);
    tabs.scrollTo({ left: selected.offsetLeft - 16, behavior: "smooth" });

    container.style.setProperty("--c", personaColors[id]);
    container.classList.remove("has-selection");
    container.innerHTML = mapTemplate(map);
    $(".emap__panel", container).innerHTML = emptyPanel();
    if (seen) playEntrance();
  };

  tabs.addEventListener("click", (event) => {
    const tab = event.target.closest(".tab");
    if (tab) show(tab.dataset.persona);
  });

  container.addEventListener("click", (event) => {
    const tile = event.target.closest(".emap__tile");
    if (tile) return select(tile.dataset.part, { scroll: true });
    const go = event.target.closest("[data-go]");
    if (go) select(go.dataset.go);
  });

  show(empathyMaps[0].persona);

  // La primera animación arranca cuando el mapa entra en pantalla.
  container.classList.add("is-waiting");
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      seen = true;
      container.classList.remove("is-waiting");
      playEntrance();
    },
    { threshold: 0.35 },
  );
  observer.observe(container);

  return show;
}
