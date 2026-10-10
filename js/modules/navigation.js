/**
 * Barra superior: progreso de lectura, etapa activa y etapas bloqueadas.
 */
import { $, $$ } from "../utils/dom.js";

const STAGE_SECTIONS = [
  { stage: "empathize", selector: "#empathize" },
  { stage: "define", selector: "#define" },
  { stage: "ideate", selector: "#ideate" },
  { stage: "prototype", selector: "#aprendizajes" },
];

function updateProgress(bar) {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  bar.style.width = `${(scrollTop / (scrollHeight - clientHeight)) * 100}%`;
}

function updateActiveStage(nav) {
  const threshold = window.scrollY + window.innerHeight * 0.35;
  let current = STAGE_SECTIONS[0].stage;

  STAGE_SECTIONS.forEach(({ stage, selector }) => {
    const section = $(selector);
    if (section && section.getBoundingClientRect().top + window.scrollY <= threshold) current = stage;
  });

  $$(".stage-link", nav).forEach((link) => {
    const isActive = link.dataset.stage === current;
    if (isActive && !link.classList.contains("is-active")) {
      nav.scrollTo({ left: link.offsetLeft - 8, behavior: "smooth" });
    }
    link.classList.toggle("is-active", isActive);
  });
}

export function initNavigation() {
  const bar = $("#progressBar");
  const nav = $(".stages");

  $$(".stage-link.is-locked", nav).forEach((link) =>
    link.addEventListener("click", (event) => {
      event.preventDefault();
      $("#lo-que-viene").scrollIntoView({ behavior: "smooth" });
    }),
  );

  const onScroll = () => {
    updateProgress(bar);
    updateActiveStage(nav);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
