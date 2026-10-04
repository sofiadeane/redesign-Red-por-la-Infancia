/**
 * Mapas de recorrido: tabla por persona con curva emocional.
 */
import { $, $$, escapeHtml } from "../utils/dom.js";
import { avatarSrc, personaColors } from "../config.js";
import { journeys } from "../data/journeys.js";
import { personaName } from "../data/people.js";

const NEGATIVE =
  /angusti|apurad|impacien|perdid|frustr|confundi|insegur|nervios|distra|molest|abrumad|avergonz|asustad|ansios|desconfi|sola|dubitativ|insatisf|desanim|vulnerable|dudas/i;
const POSITIVE =
  /alivi|esperanz|útil|empoder|comprometid|decidid|motivad|responsable|interesad|satisf|tranquil|curios/i;
const LETTERS = "ABCDEFG";

const feelingClass = (feeling) =>
  NEGATIVE.test(feeling) ? "feel--neg" : POSITIVE.test(feeling) ? "feel--pos" : "";

const moodColor = (mood) => (mood <= 2 ? "#ff8fa3" : mood >= 4 ? "#5fd3a5" : "#ffffff");

/** Dibuja la curva emocional (mood de 1 a 5) como SVG. */
function moodCurve(moods) {
  const width = 600;
  const height = 140;
  const padding = 20;
  const points = moods.map((mood, i) => [
    ((i + 0.5) / moods.length) * width,
    height - padding - ((mood - 1) / 4) * (height - padding * 2),
  ]);

  const path = points.reduce((d, [x, y], i) => {
    if (i === 0) return `M${x},${y}`;
    const [prevX, prevY] = points[i - 1];
    const midX = (prevX + x) / 2;
    return `${d} C${midX},${prevY} ${midX},${y} ${x},${y}`;
  }, "");

  const dots = points
    .map(
      ([x, y], i) =>
        `<circle cx="${x}" cy="${y}" r="7" fill="${moodColor(moods[i])}" stroke="#1b1b1f" stroke-width="1.5" vector-effect="non-scaling-stroke"/>`,
    )
    .join("");

  return `
    <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" role="img" aria-label="Curva emocional del recorrido">
      <defs>
        <linearGradient id="moodGradient" x1="0" x2="1">
          <stop offset="0" stop-color="#ff7eb6"/><stop offset=".5" stop-color="#ff9a4d"/><stop offset="1" stop-color="#8b6cf6"/>
        </linearGradient>
      </defs>
      <path d="${path}" fill="none" stroke="url(#moodGradient)" stroke-width="3" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
      ${dots}
    </svg>`;
}

const label = (text) => `<div class="jcell jcell--label">${text}</div>`;

function tableTemplate(journey) {
  const { steps } = journey;
  return [
    label("Acción"),
    ...steps.map(
      (step, i) =>
        `<div class="jcell jcell--action"><span>${i + 1}</span><br>${escapeHtml(step.action)}</div>`,
    ),
    label("Ánimo"),
    `<div class="jcell jcell--curve">${moodCurve(journey.mood)}</div>`,
    label("Lista de tareas"),
    ...steps.map(
      (step) =>
        `<div class="jcell"><ol>${step.tasks.map((task, k) => `<li><b>${LETTERS[k]}.</b> ${escapeHtml(task)}</li>`).join("")}</ol></div>`,
    ),
    label("Sentimientos"),
    ...steps.map(
      (step) =>
        `<div class="jcell">${step.feelings.map((feeling) => `<span class="feel ${feelingClass(feeling)}">${escapeHtml(feeling)}</span>`).join("")}</div>`,
    ),
    label("Oportunidades de mejora"),
    ...steps.map(
      (step) =>
        `<div class="jcell"><ul>${step.opportunities.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>`,
    ),
  ].join("");
}

/** @returns {(id: string) => void} función para mostrar el recorrido de una persona. */
export function initJourneys() {
  const tabs = $("#journeyTabs");
  const container = $("#journey");

  tabs.innerHTML = journeys
    .map(
      ({ persona }) => `
        <button class="tab" role="tab" data-persona="${persona}" aria-selected="false">
          <img src="${avatarSrc(persona)}" alt="">${escapeHtml(personaName(persona))}
        </button>`,
    )
    .join("");

  const show = (id) => {
    const journey = journeys.find((item) => item.persona === id);

    $$(".tab", tabs).forEach((tab) => tab.setAttribute("aria-selected", tab.dataset.persona === id));
    const selected = $(`.tab[data-persona="${id}"]`, tabs);
    tabs.scrollTo({ left: selected.offsetLeft - 16, behavior: "smooth" });

    container.style.setProperty("--c", personaColors[id]);
    container.innerHTML = `
      <div class="journey__head">
        <img src="${avatarSrc(id)}" alt="">
        <div>
          <h3>Persona: ${escapeHtml(personaName(id))}</h3>
          <p><b>Objetivo:</b> ${escapeHtml(journey.goal)}</p>
        </div>
      </div>
      <div class="journey__scroll" tabindex="0" aria-label="Mapa de recorrido, desplazable horizontalmente">
        <div class="jtable">${tableTemplate(journey)}</div>
      </div>
      <p class="journey__hint">← Deslizá para ver todo el recorrido →</p>`;
  };

  tabs.addEventListener("click", (event) => {
    const tab = event.target.closest(".tab");
    if (tab) show(tab.dataset.persona);
  });

  show(journeys[0].persona);
  return show;
}
