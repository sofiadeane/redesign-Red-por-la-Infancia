/**
 * Rediseño Red por la Infancia · UX Case Study
 * Página de resumen: estado del proyecto, acceso a las etapas y comparador antes / concepto.
 */
import { $, escapeHtml } from "./utils/dom.js";
import { stages, STATE_LABELS } from "./data/stages.js";
import { initSite } from "./modules/site.js";
import { initReveal } from "./modules/reveal.js";
import { prefersReducedMotion } from "./config.js";

/** "Etapa 3 de 5 · Ideate en curso", calculado desde los datos. */
function initStatus() {
  const index = stages.findIndex((stage) => stage.state === "current");
  const current = stages[index];
  $("#heroStatus").textContent = current
    ? `Etapa ${index + 1} de ${stages.length} · ${current.name} en curso`
    : "Proyecto completo";
}

function stageCardTemplate(stage) {
  const isOpen = stage.state !== "next";
  const link = isOpen ? `<a class="tl__link" href="proceso.html#${stage.id}">Ver la etapa →</a>` : "";
  return `
    <li class="tl card${isOpen ? " tl--done" : ""}${stage.state === "current" ? " tl--current" : ""}" style="--c:${stage.color}">
      <span class="tl__n">${stage.num}</span>
      <h3>${escapeHtml(stage.name)}</h3>
      <span class="tl__state">${STATE_LABELS[stage.state]}</span>
      <ul>${stage.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      ${link}
    </li>`;
}

function initStageCards() {
  $("#stageCards").innerHTML = stages.map(stageCardTemplate).join("");
}

/** Comparador antes / después, como en los editores de imagen. El range lo hace accesible con teclado. */
function initBeforeAfter() {
  const figure = $("[data-ba]");
  const range = $(".ba__range", figure);
  const set = (value) => figure.style.setProperty("--pos", `${value}%`);

  range.addEventListener("input", () => {
    figure.classList.remove("is-hinting");
    set(range.value);
  });

  // Una pista de movimiento la primera vez que aparece en pantalla.
  if (prefersReducedMotion()) return;
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      figure.classList.add("is-hinting");
      setTimeout(() => figure.classList.remove("is-hinting"), 1800);
    },
    { threshold: 0.6 },
  );
  observer.observe(figure);
}

function initProgress() {
  const bar = $("#progressBar");
  const update = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    bar.style.width = `${(scrollTop / (scrollHeight - clientHeight)) * 100}%`;
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

initSite();
initProgress();
initStatus();
initStageCards();
initBeforeAfter();
initReveal();
