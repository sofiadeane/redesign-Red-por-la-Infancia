/**
 * Propuestas de valor: animación de sticky notes controlada por el scroll.
 *
 * Fases (según el progreso de scroll dentro de la sección):
 *   1. Brainstorm: las notas aparecen una a una en posiciones al azar.
 *   2. Filtro: se caen las ideas que no resuelven el dolor de ninguna persona.
 *   3. Conectar: las que sobreviven se ordenan en una grilla con su persona.
 */
import { $, $$, escapeHtml } from "../utils/dom.js";
import { clamp, lerp, easeOutCubic, seededRandom } from "../utils/math.js";
import { avatarSrc, prefersReducedMotion } from "../config.js";
import { brainstorm, defineItems, valueCategories } from "../data/define.js";
import { personaName } from "../data/people.js";

const PHASES = [
  {
    until: 0.42,
    title: "Primero, todas las ideas.",
    caption:
      "Listamos todas las funcionalidades y beneficios posibles, grandes y chicos, sin filtrar. Cada color es una categoría de valor.",
  },
  {
    until: 0.66,
    title: "Después, el filtro.",
    caption:
      "Se caen las ideas que no resuelven el punto de dolor más grande de ninguna persona, como el chatbot, el modo oscuro o la app nativa. Más idiomas quedan para más adelante.",
  },
  {
    until: Infinity,
    title: "Lo que sobrevive.",
    caption:
      "Ocho propuestas de valor, cada una conectada con la necesidad principal de una persona. La versión en inglés, que al principio descartamos, volvió con Maya.",
  },
];

/** Tramos del progreso (0 a 1) que usa cada parte de la animación. */
const TIMING = {
  appearSpread: 0.36,
  appearDuration: 0.05,
  fallStart: 0.44,
  fallSpread: 0.12,
  fallDuration: 0.1,
  gridStart: 0.66,
  gridDuration: 0.14,
};

const GRID_GAP = 16;
const MAX_NOTE_WIDTH = 240;
const FALL_DISTANCE = 260;

const valuePropositionFor = (id) => defineItems.find((item) => item.persona === id).valueProposition;

function createNote(idea, index, random) {
  const element = document.createElement("div");
  element.className = "sticky";
  element.style.setProperty("--nc", valueCategories[idea.category].color);
  element.innerHTML = `
    <span class="sticky__text">${escapeHtml(idea.text)}</span>
    ${idea.persona ? `<span class="sticky__who"><img src="${avatarSrc(idea.persona)}" alt="">${escapeHtml(personaName(idea.persona))}</span>` : ""}`;

  return {
    element,
    text: element.querySelector(".sticky__text"),
    idea,
    survives: Boolean(idea.persona),
    order: index / brainstorm.length,
    x: random(),
    y: random(),
    rotation: (random() - 0.5) * 16,
    fallRotation: (random() - 0.5) * 60,
  };
}

function gridPosition(index, total, board, noteHeight) {
  const columns = board.width < 600 ? 2 : board.width < 900 ? 3 : 4;
  const width = Math.min(MAX_NOTE_WIDTH, (board.width - (columns - 1) * GRID_GAP) / columns);
  const rows = Math.ceil(total / columns);
  const rowHeight = noteHeight + 62;
  const top = Math.max(0, (board.height - rows * rowHeight) / 2);

  const column = index % columns;
  const row = Math.floor(index / columns);
  const itemsInRow = Math.min(columns, total - row * columns);
  const rowWidth = itemsInRow * width + (itemsInRow - 1) * GRID_GAP;

  return {
    x: (board.width - rowWidth) / 2 + column * (width + GRID_GAP),
    y: top + row * rowHeight,
    width,
  };
}

export function initValuePropositions() {
  const section = $("#value");
  const boardElement = $("#vpBoard");
  const random = seededRandom(7);
  const reducedMotion = prefersReducedMotion();

  $("#vpLegend").innerHTML = Object.values(valueCategories)
    .map(({ name, color }) => `<li><i style="background:${color}"></i>${name}</li>`)
    .join("");
  $("#vpList").innerHTML = defineItems
    .map((item) => `<li>${escapeHtml(item.valueProposition)} (${escapeHtml(personaName(item.persona))})</li>`)
    .join("");

  const notes = brainstorm.map((idea, i) => createNote(idea, i, random));
  notes.forEach((note) => boardElement.appendChild(note.element));
  const survivors = notes.filter((note) => note.survives);
  let currentPhase = -1;

  const setPhase = (progress) => {
    const phase = PHASES.findIndex((item) => progress < item.until);
    if (phase === currentPhase) return;
    currentPhase = phase;
    $("#vpTitle").textContent = PHASES[phase].title;
    $("#vpCaption").textContent = PHASES[phase].caption;
    $$(".vp__step").forEach((step) => step.classList.toggle("is-on", Number(step.dataset.vstep) === phase));
  };

  const layout = () => {
    const board = { width: boardElement.clientWidth, height: boardElement.clientHeight };
    const noteWidth = notes[0].element.offsetWidth;
    const noteHeight = notes[0].element.offsetHeight;
    const scrollable = Math.max(1, section.offsetHeight - window.innerHeight);
    const progress = reducedMotion ? 1 : clamp(-section.getBoundingClientRect().top / scrollable);

    setPhase(progress);

    notes.forEach((note) => {
      const appear = easeOutCubic(
        clamp((progress - note.order * TIMING.appearSpread) / TIMING.appearDuration),
      );
      const startX = note.x * (board.width - noteWidth);
      const startY = note.y * (board.height - noteHeight);
      let x = startX;
      let y = startY;
      let rotation = note.rotation;
      let opacity = appear;
      let width = "";

      if (note.survives) {
        const index = survivors.indexOf(note);
        const target = gridPosition(index, survivors.length, board, noteHeight);
        const toGrid = easeOutCubic(clamp((progress - TIMING.gridStart) / TIMING.gridDuration));
        const isFinal = toGrid > 0.6;

        x = lerp(startX, target.x, toGrid);
        y = lerp(startY, target.y, toGrid);
        rotation = lerp(note.rotation, 0, toGrid);
        note.element.classList.toggle("is-final", isFinal);
        note.text.textContent = isFinal ? valuePropositionFor(note.idea.persona) : note.idea.text;
        note.element.style.zIndex = toGrid > 0 ? 50 + index : "";
        if (isFinal) width = `${target.width}px`;
      } else {
        const fall = easeOutCubic(
          clamp((progress - TIMING.fallStart - note.order * TIMING.fallSpread) / TIMING.fallDuration),
        );
        y = startY + fall * (board.height + FALL_DISTANCE);
        rotation = note.rotation + fall * note.fallRotation;
        opacity = appear * (1 - fall * 0.9);
      }

      const scale = lerp(0.8, 1, appear);
      note.element.style.width = width;
      note.element.style.opacity = opacity.toFixed(3);
      note.element.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) rotate(${rotation.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
    });
  };

  let scheduled = false;
  const requestLayout = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      layout();
    });
  };

  window.addEventListener("scroll", requestLayout, { passive: true });
  window.addEventListener("resize", requestLayout);
  layout();
}
