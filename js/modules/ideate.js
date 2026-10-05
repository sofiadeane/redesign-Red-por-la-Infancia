/**
 * Etapa Ideate: goal statement interactivo, competidores filtrables,
 * matriz comparativa por lente, gap y hallazgo → implicancia.
 */
import { $, $$, escapeHtml, setActive } from "../utils/dom.js";
import {
  goal,
  auditGoal,
  competitors,
  matrixOrgs,
  lenses,
  gapBars,
  implications,
  docsUrl,
} from "../data/ideate.js";

const TYPE_LABELS = { direct: "Directo", indirect: "Indirecto" };
const VALUE_LABELS = { yes: "Sí", partial: "Parcial", no: "No", unknown: "No verificable" };
const TOTAL_COMPETITORS = competitors.length;

/* ---------- Goal statement ---------- */

function initGoal() {
  const [product, action, audience, impact, criteria] = goal.parts.map(
    (part) =>
      `<span class="gs__seg gs__seg--${part.key}" data-part="${part.key}">${escapeHtml(part.text)}</span>`,
  );

  $("#goalProblem").textContent = goal.problem;
  $("#goalStatement").innerHTML =
    `Nuestro ${product} permitirá a los usuarios ${action}, lo que afectará a ${audience} al ${impact}. ` +
    `Mediremos la efectividad con ${criteria}.`;
  $("#goalAchieve").innerHTML = goal.achieve.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

  const chips = $("#goalChips");
  const why = $("#goalWhy");
  chips.innerHTML = goal.parts
    .map(
      (part) =>
        `<button class="chip gs__chip gs__chip--${part.key}" data-part="${part.key}">${part.label}</button>`,
    )
    .join("");

  const select = (key) => {
    const part = goal.parts.find((item) => item.key === key);
    setActive($$("[data-part]", chips), (button) => button.dataset.part === key);
    $$(".gs__seg").forEach((seg) => seg.classList.toggle("is-on", seg.dataset.part === key));
    why.innerHTML = `<b>${part.label}:</b> ${escapeHtml(part.why)}`;
  };

  chips.addEventListener("click", (event) => {
    const button = event.target.closest("[data-part]");
    if (button) select(button.dataset.part);
  });
  $("#goalStatement").addEventListener("click", (event) => {
    const seg = event.target.closest("[data-part]");
    if (seg) select(seg.dataset.part);
  });

  select(goal.parts[0].key);
}

/* ---------- Competidores ---------- */

function competitorTemplate(item, index) {
  return `
    <article class="rival card" data-type="${item.type}" style="animation-delay:${index * 50}ms">
      <img class="rival__shot" src="assets/img/competitors/${item.id}.webp" alt="${escapeHtml(item.shot ?? `Home de ${item.name} en el celular`)}" loading="lazy">
      <div class="rival__body">
        <div class="rival__top">
          <h3>${escapeHtml(item.name)}</h3>
          <span class="rival__type rival__type--${item.type}">${TYPE_LABELS[item.type]}</span>
        </div>
        <p class="rival__meta">${escapeHtml(item.place)} · ${escapeHtml(item.what)}</p>
        <p class="rival__lesson"><b>Lo que me llevo</b>${escapeHtml(item.lesson)}</p>
      </div>
    </article>`;
}

function initCompetitors() {
  const grid = $("#rivals");
  const buttons = $$("[data-rfilter]");
  $("#auditGoal").textContent = auditGoal;

  const render = (filter) => {
    const visible = competitors.filter(
      (item) => filter === "all" || item.type === filter || item.region === filter,
    );
    grid.innerHTML = visible.map(competitorTemplate).join("");
    setActive(buttons, (button) => button.dataset.rfilter === filter);
  };

  buttons.forEach((button) => button.addEventListener("click", () => render(button.dataset.rfilter)));
  render("all");
}

/* ---------- Matriz por lente ---------- */

function initMatrix() {
  const table = $("#matrix");
  const evidence = $("#matrixEvidence");

  const header = `<div class="mx__cell mx__cell--head"></div>${matrixOrgs
    .map(
      (org) =>
        `<div class="mx__cell mx__cell--head${org.id === "rpi" ? " mx__cell--rpi" : ""}">${escapeHtml(org.name)}</div>`,
    )
    .join("")}`;

  const rows = lenses
    .map(
      (lens, i) => `
        <button class="mx__row" data-lens="${i}" aria-pressed="false">
          <span class="mx__cell mx__cell--label">${escapeHtml(lens.name)}</span>
          ${lens.values
            .map(
              (value, k) =>
                `<span class="mx__cell${matrixOrgs[k].id === "rpi" ? " mx__cell--rpi" : ""}"><i class="mx__dot mx__dot--${value}" title="${VALUE_LABELS[value]}"></i><span class="sr-only">${matrixOrgs[k].name}: ${VALUE_LABELS[value]}</span></span>`,
            )
            .join("")}
        </button>`,
    )
    .join("");

  table.style.setProperty("--cols", matrixOrgs.length);
  table.innerHTML = `<div class="mx__head">${header}</div>${rows}`;

  const select = (index) => {
    $$(".mx__row", table).forEach((row) => {
      const on = Number(row.dataset.lens) === index;
      row.classList.toggle("is-on", on);
      row.setAttribute("aria-pressed", on);
    });
    evidence.innerHTML = `<b>${escapeHtml(lenses[index].name)}</b>${escapeHtml(lenses[index].evidence)}`;
  };

  table.addEventListener("click", (event) => {
    const row = event.target.closest(".mx__row");
    if (row) select(Number(row.dataset.lens));
  });

  select(0);
}

/* ---------- Gap ---------- */

function initGap() {
  $("#gapBars").innerHTML = gapBars
    .map(
      (bar) => `
        <li class="gapbar gapbar--${bar.kind}">
          <span class="gapbar__label">${escapeHtml(bar.label)}${bar.note ? ` <small>${escapeHtml(bar.note)}</small>` : ""}</span>
          <span class="gapbar__dots" aria-label="${bar.count} de ${TOTAL_COMPETITORS} competidores">
            ${Array.from({ length: TOTAL_COMPETITORS }, (_, i) => `<i class="${i < bar.count ? "is-on" : ""}"></i>`).join("")}
          </span>
          <span class="gapbar__count">${bar.count}/${TOTAL_COMPETITORS}</span>
        </li>`,
    )
    .join("");
}

/* ---------- Hallazgo → implicancia ---------- */

function initImplications() {
  $("#implications").innerHTML = implications
    .map(
      (item, index) => `
        <article class="impl card" style="animation-delay:${index * 40}ms">
          <div class="impl__finding">
            <span class="impl__label">Hallazgo</span>
            <p>${escapeHtml(item.finding)}</p>
            <span class="impl__source">${escapeHtml(item.source)}</span>
          </div>
          <span class="impl__arrow" aria-hidden="true">→</span>
          <div class="impl__implication">
            <span class="impl__label">Implicancia de diseño <span class="impl__prio impl__prio--${item.priority.toLowerCase()}">${item.priority === "High" ? "Prioridad alta" : "Prioridad media"}</span></span>
            <p>${escapeHtml(item.implication)}</p>
          </div>
        </article>`,
    )
    .join("");
  $("#ideateDocs").href = docsUrl;
}

export function initIdeate() {
  initGoal();
  initCompetitors();
  initMatrix();
  initGap();
  initImplications();
}
