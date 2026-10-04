/**
 * Animaciones al entrar en pantalla: aparición, contadores y barras.
 */
import { $$ } from "../utils/dom.js";
import { easeOutCubic } from "../utils/math.js";
import { prefersReducedMotion } from "../config.js";

const COUNT_DURATION = 1200;

function formatCount(element, value) {
  const { prefix = "", suffix = "" } = element.dataset;
  return `${prefix}${Math.round(value).toLocaleString("es-AR")}${suffix}`;
}

function countUp(element) {
  const target = Number(element.dataset.count);
  const start = performance.now();

  const step = (now) => {
    const progress = Math.min(1, (now - start) / COUNT_DURATION);
    element.textContent = formatCount(element, target * easeOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function fillBars(list) {
  $$(".bar__fill", list).forEach((fill) => {
    fill.style.width = `${fill.dataset.width}%`;
  });
}

export function initReveal() {
  const reducedMotion = prefersReducedMotion();
  const counters = $$("[data-count]");

  if (!reducedMotion) {
    counters.forEach((counter) => (counter.textContent = formatCount(counter, 0)));
  }

  $$(".section .wrap > *, .card:not(.shot):not(.persona):not(.story)").forEach((element) =>
    element.classList.add("reveal"),
  );

  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) return;
        target.classList.add("is-in");
        if (target.matches("[data-count]") && !reducedMotion) countUp(target);
        if (target.matches(".bars")) fillBars(target);
        observer.unobserve(target);
      }),
    { threshold: 0.15 },
  );

  $$(".reveal, [data-count], .bars").forEach((element) => observer.observe(element));
}
