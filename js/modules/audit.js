/**
 * Auditoría: carpetas por dispositivo y visor de capturas.
 */
import { $, $$, escapeHtml } from "../utils/dom.js";
import { auditFolders, auditShots, deviceLabels } from "../data/audit.js";

const shotsFor = (device) => auditShots.filter((shot) => shot.device === device);

function folderTemplate({ device, color }) {
  const shots = shotsFor(device);
  const previews = [...shots, ...auditShots].slice(0, 3);
  const label = deviceLabels[device];

  return `
    <button class="folder" style="--c:${color}" data-folder="${device}" aria-expanded="false" aria-controls="auditPanel">
      <span class="folder__back"></span>
      <span class="folder__papers">${previews.map((shot) => `<img src="${shot.src}" alt="">`).join("")}</span>
      <span class="folder__front">
        <span class="folder__count">${shots.length}</span>
        <span class="folder__kicker">Capturas</span>
        <span class="folder__title">${label} →</span>
      </span>
    </button>`;
}

function shotTemplate(shot, index) {
  return `
    <button class="shot card" data-index="${index}" style="animation-delay:${index * 40}ms">
      <span class="shot__img"><img src="${shot.src}" alt="${escapeHtml(shot.title)}" loading="lazy"></span>
      <span class="shot__body"><p class="shot__title">${escapeHtml(shot.title)}</p></span>
    </button>`;
}

function initLightbox(getShots) {
  const modal = $("#imgModal");
  const body = $("#imgModalBody");
  let current = 0;

  const show = (index) => {
    const shots = getShots();
    current = (index + shots.length) % shots.length;
    const shot = shots[current];
    body.innerHTML = `
      <button class="modal__close" aria-label="Cerrar">×</button>
      <figure>
        <img src="${shot.src}" alt="${escapeHtml(shot.title)}">
        <figcaption>${deviceLabels[shot.device]} · ${escapeHtml(shot.title)}</figcaption>
      </figure>
      <div class="modal__nav">
        <button class="chip" data-step="-1">← Anterior</button>
        <span class="modal__count">${current + 1} / ${shots.length}</span>
        <button class="chip" data-step="1">Siguiente →</button>
      </div>`;
  };

  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.closest(".modal__close")) modal.close();
    const step = event.target.closest("[data-step]");
    if (step) show(current + Number(step.dataset.step));
  });
  modal.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") show(current + 1);
    if (event.key === "ArrowLeft") show(current - 1);
  });

  return (index) => {
    show(index);
    modal.showModal();
  };
}

export function initAudit() {
  const folders = $("#folders");
  const panel = $("#auditPanel");
  const grid = $("#auditGrid");
  let openDevice = null;

  folders.innerHTML = auditFolders.map(folderTemplate).join("");

  const render = () => {
    $$(".folder", folders).forEach((folder) => {
      const isOpen = folder.dataset.folder === openDevice;
      folder.classList.toggle("is-open", isOpen);
      folder.setAttribute("aria-expanded", isOpen);
    });

    panel.hidden = !openDevice;
    if (!openDevice) return;

    const shots = shotsFor(openDevice);
    const noun = shots.length === 1 ? "captura" : "capturas";
    $("#auditTitle").textContent = `${deviceLabels[openDevice]} · ${shots.length} ${noun}`;
    grid.innerHTML = shots.map(shotTemplate).join("");
  };

  const openLightbox = initLightbox(() => shotsFor(openDevice));

  folders.addEventListener("click", (event) => {
    const folder = event.target.closest(".folder");
    if (!folder) return;
    openDevice = openDevice === folder.dataset.folder ? null : folder.dataset.folder;
    render();
    if (openDevice) panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  $("#auditClose").addEventListener("click", () => {
    openDevice = null;
    render();
    folders.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  grid.addEventListener("click", (event) => {
    const shot = event.target.closest(".shot");
    if (shot) openLightbox(Number(shot.dataset.index));
  });
}
