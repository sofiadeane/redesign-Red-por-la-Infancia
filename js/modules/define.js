/**
 * Etapa Define: problem statements e hipótesis If / Then.
 */
import { $, $$, escapeHtml, restartAnimation } from "../utils/dom.js";
import { avatarSrc } from "../config.js";
import { central, defineItems, uniqueValueProposition } from "../data/define.js";
import { findPersona, personaName, personaRole } from "../data/people.js";

const PAIN_LABELS = {
  financiero: "Financiero",
  producto: "Producto",
  proceso: "Proceso",
  soporte: "Soporte",
};

/** Las personas primarias se muestran primero; el resto, al pedirlo. */
const isPrimary = (id) => Boolean(findPersona(id)?.primary);

const subject = (id) => (id === "equipo" ? "El equipo" : personaName(id));

function statementTemplate(item, index) {
  return `
    <article class="statement card${isPrimary(item.persona) ? "" : " statement--extra"}" style="animation-delay:${index * 50}ms">
      <div class="statement__who">
        <img src="${avatarSrc(item.persona)}" alt="">
        <div>
          <div class="statement__name">${escapeHtml(personaName(item.persona))}</div>
          <div class="statement__role">${escapeHtml(personaRole(item.persona))}</div>
        </div>
      </div>
      <p class="statement__text">
        <b>${escapeHtml(subject(item.persona))}</b> es ${escapeHtml(item.who)}
        <b>que necesita</b> <span class="seg-need">${escapeHtml(item.need)}</span>
        <b>porque</b> <span class="seg-because">${escapeHtml(item.because)}</span>.
      </p>
      <div class="statement__meta">
        ${item.painPoints.map((pain) => `<span class="ptag ptag--${pain}">${PAIN_LABELS[pain]}</span>`).join("")}
        <span>· ${escapeHtml(item.stories)}</span>
      </div>
    </article>`;
}

function hypothesisTemplate({ hypothesis }) {
  return `
    <div class="ifthen__col">
      <span class="ifthen__kw">Si</span>
      <p class="ifthen__text">${escapeHtml(hypothesis.if)},</p>
    </div>
    <div class="ifthen__col">
      <span class="ifthen__kw">entonces</span>
      <p class="ifthen__text">${escapeHtml(hypothesis.then)}.</p>
    </div>
    <div class="ifthen__foot">
      <b>Cómo lo vamos a medir</b>
      <span>${escapeHtml(hypothesis.metric)}</span>
    </div>`;
}

function initHypotheses() {
  const tabs = $("#ifTabs");
  const panel = $("#ifthen");

  tabs.innerHTML = defineItems
    .map(
      ({ persona }) => `
        <button class="tab" role="tab" data-persona="${persona}" aria-selected="false">
          <img src="${avatarSrc(persona)}" alt="">${escapeHtml(personaName(persona))}
        </button>`,
    )
    .join("");

  const show = (id) => {
    $$(".tab", tabs).forEach((tab) => tab.setAttribute("aria-selected", tab.dataset.persona === id));
    panel.innerHTML = hypothesisTemplate(defineItems.find((item) => item.persona === id));
    restartAnimation(panel, "is-swap");
  };

  tabs.addEventListener("click", (event) => {
    const tab = event.target.closest(".tab");
    if (tab) show(tab.dataset.persona);
  });

  show(defineItems[0].persona);
}

function initStatements() {
  const container = $("#statements");
  const more = $("#statementsMore");
  const ordered = [...defineItems].sort((a, b) => isPrimary(b.persona) - isPrimary(a.persona));
  const extras = ordered.filter((item) => !isPrimary(item.persona)).length;

  container.innerHTML = ordered.map(statementTemplate).join("");
  more.textContent = `Ver los ${ordered.length} problem statements (+${extras})`;

  more.addEventListener("click", () => {
    const open = container.classList.toggle("is-all");
    more.setAttribute("aria-expanded", open);
    more.textContent = open
      ? "Ver solo las personas primarias"
      : `Ver los ${ordered.length} problem statements (+${extras})`;
  });
}

export function initDefine() {
  $("#centralProblem").textContent = central.problem;
  $("#centralHypothesis").textContent = central.hypothesis;
  $("#vpGeneral").textContent = central.value;
  $("#vpUnique").textContent = uniqueValueProposition;

  initStatements();
  initHypotheses();
}
