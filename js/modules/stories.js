/**
 * Historias de usuario: filtros por prioridad (MoSCoW) y por persona.
 */
import { $, $$, escapeHtml, setActive } from "../utils/dom.js";
import { avatarSrc } from "../config.js";
import { stories } from "../data/stories.js";
import { allPeopleIds, personaName } from "../data/people.js";

const PRIORITY_COLORS = {
  Debe: "var(--pink)",
  Debería: "var(--yellow)",
  Podría: "var(--mint)",
};

const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

function storyTemplate(story, index) {
  const priority = story.priority === "Debe" ? "Debe · MVP" : story.priority;
  const evidence = story.evidence
    ? `<p class="story__ev"><b>Respaldo</b><br>${escapeHtml(capitalize(story.evidence))}</p>`
    : "";

  return `
    <article class="story card" style="--c:${PRIORITY_COLORS[story.priority]};animation-delay:${index * 25}ms">
      <div class="story__head">
        <span class="story__id">${story.id}</span>
        <span class="story__prio">${priority}</span>
      </div>
      <div class="story__body">
        <div class="story__who"><img src="${avatarSrc(story.persona)}" alt="">${escapeHtml(personaName(story.persona))}</div>
        <p class="story__text">${escapeHtml(story.text)}</p>
        <details>
          <summary>Criterios de aceptación</summary>
          <ul>${story.criteria.map((criterion) => `<li>${escapeHtml(criterion)}</li>`).join("")}</ul>
          ${evidence}
        </details>
      </div>
    </article>`;
}

export function initStories() {
  const container = $("#stories");
  const personaFilters = $("#storyPersonaFilters");
  const state = { priority: "Debe", persona: "all" };

  personaFilters.innerHTML = [
    `<button class="chip is-on" data-sper="all">Todas las personas</button>`,
    ...allPeopleIds.map(
      (id) =>
        `<button class="chip" data-sper="${id}"><img src="${avatarSrc(id)}" alt="">${escapeHtml(personaName(id))}</button>`,
    ),
  ].join("");
  $("#countAll").textContent = stories.length;
  $("#countMust").textContent = stories.filter((story) => story.priority === "Debe").length;

  const render = () => {
    const visible = stories.filter(
      (story) =>
        (state.priority === "all" || story.priority === state.priority) &&
        (state.persona === "all" || story.persona === state.persona),
    );

    container.innerHTML = visible.length
      ? visible.map(storyTemplate).join("")
      : `<p class="empty card">No hay historias con estos filtros.</p>`;

    setActive($$("[data-sprio]"), (button) => button.dataset.sprio === state.priority);
    setActive($$("[data-sper]"), (button) => button.dataset.sper === state.persona);
  };

  $$("[data-sprio]").forEach((button) =>
    button.addEventListener("click", () => {
      state.priority = button.dataset.sprio;
      render();
    }),
  );

  personaFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-sper]");
    if (!button) return;
    state.persona = button.dataset.sper;
    render();
  });

  render();
}
