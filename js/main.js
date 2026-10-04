/* Rediseño Red por la Infancia · interacciones del caso de estudio */
(() => {
  const D = window.CASE_DATA;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s = "") => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const COLORS = { laura: "var(--pink)", silvia: "var(--lime)", martin: "var(--yellow)", camila: "var(--mint)", diego: "var(--orange)", ana: "var(--lilac)", equipo: "var(--teal)" };
  const persona = id => D.personas.find(p => p.id === id);
  const avatar = id => `assets/img/personas/${id}.webp`;

  /* ---------- scroll progress ---------- */
  const bar = $("#progressBar");
  const onScroll = () => {
    const h = document.documentElement;
    bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + "%";
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* ---------- locked stage links ---------- */
  $$(".stage-link.is-locked").forEach(a => a.addEventListener("click", e => {
    e.preventDefault();
    $("#proximamente").scrollIntoView({ behavior: "smooth" });
  }));

  /* ---------- pain point categories ---------- */
  const PAIN_DESC = {
    all: "Financiero: dinero · Producto: calidad · Proceso: recorrido del usuario · Soporte: conseguir ayuda.",
    financiero: "Financiero: puntos de dolor relacionados con el dinero, como no poder donar.",
    producto: "Producto: problemas de calidad del sitio, como errores visuales o contenido ilegible.",
    proceso: "Proceso: problemas en el recorrido del usuario, como no encontrar lo que busca.",
    soporte: "Soporte: problemas para conseguir ayuda, tanto para quien la busca como para el equipo que mantiene el sitio."
  };
  $$("[data-pain]").forEach(b => b.addEventListener("click", () => {
    const c = b.dataset.pain;
    $$("[data-pain]").forEach(x => x.classList.toggle("is-on", x === b));
    $$(".problem").forEach(p => p.classList.toggle("is-dim", c !== "all" && !p.dataset.cats.split(" ").includes(c)));
    $("#painDesc").textContent = PAIN_DESC[c];
  }));

  /* ---------- process tabs ---------- */
  const STAGES = [
    { name: "Empathize", status: "Completa", text: "Entender a las personas usuarias y el contexto antes de diseñar.", items: ["Auditoría del sitio en celular, tablet y computadora", "Análisis de 12 meses de Google Analytics", "6 proto-personas, 20 historias de usuario y 6 mapas de recorrido"], cta: true },
    { name: "Define", status: "Próximamente", text: "Sintetizar la investigación en problemas concretos y priorizados.", items: ["Problem statements por persona", "Preguntas \"¿Cómo podríamos…?\"", "Priorización de oportunidades"] },
    { name: "Ideate", status: "Próximamente", text: "Explorar muchas soluciones antes de elegir una.", items: ["Crazy 8s y bocetos", "Nueva arquitectura de información", "Flujos para pedir ayuda y donar"] },
    { name: "Prototype", status: "Próximamente", text: "Darle forma a las ideas para poder probarlas.", items: ["Wireframes mobile-first", "Sistema de diseño y plantillas editables", "Prototipo navegable en Figma"] },
    { name: "Test", status: "Próximamente", text: "Probar con personas reales y mejorar.", items: ["Tests de usabilidad moderados", "Métricas de éxito en Analytics", "Iteración del diseño"] }
  ];
  const panel = $("#processPanel");
  const renderStage = i => {
    const s = STAGES[i];
    panel.innerHTML = `<div><h3>${String(i + 1).padStart(2, "0")} · ${s.name}</h3><p>${s.text}</p><ul>${s.items.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
      ${s.cta ? `<a class="btn" href="#empathize">Ver la etapa ↓</a>` : `<span class="lock">${s.status}</span>`}`;
    $$(".process__step").forEach((b, k) => b.setAttribute("aria-selected", k === i));
  };
  $$(".process__step").forEach((b, i) => b.addEventListener("click", () => renderStage(i)));
  renderStage(0);

  /* ---------- audit ---------- */
  const AUDIT = [
    ["01-desktop-header-cta-cut-off", "desktop", "El botón \"Quiero Colaborar\" se corta y el menú se parte en dos líneas"],
    ["02-desktop-first-load-no-logo-no-hero-image", "desktop", "En la primera carga no aparecen el logo ni la imagen principal"],
    ["03-desktop-inspire-card-cut-off-right", "desktop", "La tarjeta de INSPIRE se sale de la pantalla"],
    ["04-desktop-campaign-cards-uneven-sizes", "desktop", "Tarjetas de campañas con tamaños desparejos"],
    ["05-desktop-resource-cards-uneven-sizes", "desktop", "Tarjetas de recursos con alturas distintas"],
    ["06-desktop-footer-misaligned-outdated-2024", "desktop", "Footer desalineado y copyright desactualizado (2024)"],
    ["07-desktop-quienes-somos-text-cut-off", "desktop", "En ¿Quiénes Somos? el texto se corta a la derecha"],
    ["08-desktop-quienes-somos-empty-column", "desktop", "Columnas vacías en ¿Quiénes Somos?"],
    ["09-mobile-home-headline-below-fold-no-ctas", "mobile", "Home en celular: sin botones de ayuda y el título queda abajo"],
    ["10-mobile-menu-missing-help-donate-ctas", "mobile", "El menú no incluye \"Necesito Ayuda\" ni \"Quiero Colaborar\""],
    ["11-mobile-heading-breaks-language-widget-overlap", "mobile", "Títulos que se parten y el selector de idioma tapa contenido"],
    ["12-mobile-inconsistent-alignment-empty-block", "mobile", "Alineaciones inconsistentes y bloques vacíos"],
    ["13-mobile-text-baked-into-images", "mobile", "Texto dentro de imágenes: ilegible en pantallas chicas"],
    ["14-mobile-campaign-cards-uneven-widths", "mobile", "Tarjetas de campañas con anchos distintos"],
    ["15-mobile-footer-icons-clipped", "mobile", "Íconos de redes cortados en el footer"],
    ["16-mobile-help-page-numbers-not-tappable", "mobile", "Necesito Ayuda: los teléfonos no se pueden tocar para llamar"],
    ["17-tablet-help-page-overlapping-text", "tablet", "Necesito Ayuda en tablet: textos superpuestos"],
    ["18-tablet-campanas-header-broken", "tablet", "Campañas: header roto y título sobre la línea divisoria"],
    ["19-tablet-evidencia-heading-overlaps-text", "tablet", "Evidencia: el título se sale y tapa el texto"],
    ["20-tablet-evidencia-text-cut-off-left", "tablet", "Evidencia: texto cortado en el borde izquierdo"],
    ["21-search-and-404-blank-page", "nav", "La búsqueda y la página de error aparecen en blanco"]
  ].map(([f, d, t]) => ({ src: `assets/img/audit/${f}.webp`, device: d, title: t }));
  const DEV = { mobile: "Celular", tablet: "Tablet", desktop: "Computadora", nav: "Navegación" };
  const FOLDERS = [
    { key: "mobile", title: "Celular", kicker: "Capturas", c: "#ffc2dc" },
    { key: "tablet", title: "Tablet", kicker: "Capturas", c: "#ffe39a" },
    { key: "desktop", title: "Computadora", kicker: "Capturas", c: "#d6c9ff" },
    { key: "nav", title: "Navegación", kicker: "Capturas", c: "#def59c" }
  ];
  const folders = $("#folders"), grid = $("#auditGrid");
  folders.innerHTML = FOLDERS.map(f => {
    const items = AUDIT.filter(a => a.device === f.key);
    const papers = (items.length >= 3 ? items.slice(0, 3) : [...items, ...AUDIT.slice(0, 3 - items.length)]);
    return `<button class="folder" style="--c:${f.c}" data-folder="${f.key}" aria-label="Ver capturas de ${f.title}">
      <span class="folder__back"></span>
      <span class="folder__papers">${papers.map(p => `<img src="${p.src}" alt="">`).join("")}</span>
      <span class="folder__front"><span class="folder__count">${items.length}</span><span class="folder__kicker">${f.kicker}</span><span class="folder__title">${f.title} →</span></span>
    </button>`;
  }).join("");

  let auditFilter = "all", visible = AUDIT, expanded = false;
  const moreBtn = $("#auditMore");
  moreBtn.addEventListener("click", () => { expanded = !expanded; renderAudit(); if (!expanded) grid.scrollIntoView({ behavior: "smooth" }); });
  const renderAudit = () => {
    visible = auditFilter === "all" ? AUDIT : AUDIT.filter(a => a.device === auditFilter);
    const LIMIT = 6, shown = expanded ? visible : visible.slice(0, LIMIT);
    moreBtn.hidden = visible.length <= LIMIT;
    moreBtn.textContent = expanded ? "Ver menos ↑" : `Ver las ${visible.length} capturas ↓`;
    grid.innerHTML = shown.map((a, i) => `<button class="shot card" data-i="${i}" style="animation-delay:${i * 30}ms">
      <span class="shot__img"><img src="${a.src}" alt="${esc(a.title)}" loading="lazy"></span>
      <span class="shot__body"><span class="shot__device" data-d="${a.device === "nav" ? "desktop" : a.device}">${DEV[a.device]}</span><p class="shot__title">${esc(a.title)}</p></span>
    </button>`).join("");
    $$("[data-filter]").forEach(b => b.classList.toggle("is-on", b.dataset.filter === auditFilter));
    $$(".folder").forEach(b => b.classList.toggle("is-open", b.dataset.folder === auditFilter));
  };
  $$("[data-filter]").forEach(b => b.addEventListener("click", () => { auditFilter = b.dataset.filter; expanded = false; renderAudit(); }));
  $$(".folder").forEach(b => b.addEventListener("click", () => {
    auditFilter = auditFilter === b.dataset.folder ? "all" : b.dataset.folder;
    expanded = true;
    renderAudit();
    grid.scrollIntoView({ behavior: "smooth", block: "start" });
  }));
  renderAudit();

  /* lightbox */
  const imgModal = $("#imgModal"), imgBody = $("#imgModalBody");
  let cur = 0;
  const showImg = i => {
    cur = (i + visible.length) % visible.length;
    const a = visible[cur];
    imgBody.innerHTML = `<button class="modal__close" aria-label="Cerrar">×</button>
      <figure><img src="${a.src}" alt="${esc(a.title)}"><figcaption>${DEV[a.device]} · ${esc(a.title)}</figcaption></figure>
      <div class="modal__nav"><button class="chip" data-nav="-1">← Anterior</button><span style="color:#fff;font-weight:700;align-self:center">${cur + 1} / ${visible.length}</span><button class="chip" data-nav="1">Siguiente →</button></div>`;
  };
  grid.addEventListener("click", e => { const b = e.target.closest(".shot"); if (!b) return; showImg(+b.dataset.i); imgModal.showModal(); });
  imgModal.addEventListener("click", e => {
    if (e.target === imgModal || e.target.closest(".modal__close")) imgModal.close();
    const n = e.target.closest("[data-nav]"); if (n) showImg(cur + +n.dataset.nav);
  });
  imgModal.addEventListener("keydown", e => { if (e.key === "ArrowRight") showImg(cur + 1); if (e.key === "ArrowLeft") showImg(cur - 1); });

  /* ---------- data: bars + counters ---------- */
  const PAGES = [["Home", 5147], ["¿Quiénes Somos?", 1489], ["Bajalo Ya!", 706, 1], ["Guías Orientativas", 452], ["Campañas", 407], ["Necesito Ayuda", 306, 1], ["Evidencia", 269], ["Quiero Colaborar", 241, 1]];
  const max = PAGES[0][1];
  $("#bars").innerHTML = PAGES.map(([n, v, k]) => `<li class="bar${k ? " is-key" : ""}"><span>${n}</span><span class="bar__track"><span class="bar__fill" data-w="${Math.max(8, (v / max) * 100)}"></span><span class="bar__val">${v.toLocaleString("es-AR")}</span></span></li>`).join("");

  $$("[data-count]").forEach(el => { if (!matchMedia("(prefers-reduced-motion: reduce)").matches) el.textContent = (el.dataset.prefix || "") + "0" + (el.dataset.suffix || ""); });
  const countUp = el => {
    const target = +el.dataset.count, pre = el.dataset.prefix || "", suf = el.dataset.suffix || "";
    const t0 = performance.now(), dur = 1200;
    const step = t => {
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + Math.round(target * e).toLocaleString("es-AR") + suf;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  /* ---------- personas ---------- */
  const pgrid = $("#personaGrid");
  const renderPersonas = f => {
    const list = D.personas.filter(p => f === "all" || (f === "primary" ? p.primary : !p.primary));
    pgrid.innerHTML = list.map((p, i) => `<button class="persona card" style="--c:${COLORS[p.id]};animation-delay:${i * 50}ms" data-p="${p.id}" aria-haspopup="dialog">
      <span class="persona__top"><img class="persona__img" src="${avatar(p.id)}" alt="" loading="lazy">
        <span><span class="persona__name">${esc(p.name)}</span><span class="persona__role">${esc(p.role)}</span><br><span class="persona__badge">${p.group} · ${p.primary ? "Primaria" : "Secundaria"}</span></span></span>
      <span class="persona__body"><span class="persona__quote">“${esc(p.quote)}”</span>
        <span class="persona__facts"><span>${esc(p.age)}</span><span>${esc(p.location)}</span><span>${esc(p.device.split(/[;,(]/)[0])}</span></span>
        <span class="persona__more">Ver persona completa →</span></span>
    </button>`).join("");
    $$("[data-pfilter]").forEach(b => b.classList.toggle("is-on", b.dataset.pfilter === f));
  };
  $$("[data-pfilter]").forEach(b => b.addEventListener("click", () => renderPersonas(b.dataset.pfilter)));
  renderPersonas("all");

  const pModal = $("#personaModal"), pBody = $("#personaModalBody");
  const openPersona = id => {
    const p = persona(id);
    const tabs = [["goals", "Objetivos", `<ul>${p.goals.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`],
      ["pains", "Frustraciones", `<ul>${p.frustrations.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`],
      ["needs", "Necesita del sitio", `<p style="margin:0">${esc(p.needs)}</p><p style="margin:10px 0 0"><b>Páginas clave:</b> ${esc(p.pages)}</p>`]];
    pBody.innerHTML = `<div class="pm__head" style="--c:${COLORS[p.id]}"><button class="modal__close" aria-label="Cerrar">×</button>
        <img src="${avatar(p.id)}" alt="Ilustración de ${esc(p.name)}">
        <div><span class="persona__badge">${p.group} · ${p.primary ? "Persona primaria" : "Persona secundaria"}</span><h3 id="pmTitle">${esc(p.name)}</h3><p>${esc(p.role)}</p></div></div>
      <div class="pm__body">
        <p class="pm__quote">“${esc(p.quote)}”</p>
        <dl class="pm__facts"><div><dt>Edad</dt><dd>${esc(p.age)}</dd></div><div><dt>Ubicación</dt><dd>${esc(p.location)}</dd></div>
          <div><dt>Ocupación</dt><dd>${esc(p.job)}</dd></div><div><dt>Dispositivo</dt><dd>${esc(p.device)}</dd></div>
          <div style="grid-column:1/-1"><dt>Cómo llega</dt><dd>${esc(p.arrives)}</dd></div></dl>
        <p style="margin:0"><b>Contexto:</b> ${esc(p.context)}</p>
        <div class="pm__tabs" role="tablist">${tabs.map((t, i) => `<button class="chip${i === 0 ? " is-on" : ""}" role="tab" data-ptab="${t[0]}">${t[1]}</button>`).join("")}</div>
        ${tabs.map((t, i) => `<div class="pm__panel" data-ppanel="${t[0]}" ${i ? "hidden" : ""}>${t[2]}</div>`).join("")}
        <div class="pm__ga"><b>Dato de Analytics</b>${esc(p.ga)}</div>
        <a class="btn btn--ghost" href="#journeys" data-gojourney="${p.id}">Ver su mapa de recorrido →</a>
      </div>`;
    pModal.showModal();
  };
  pgrid.addEventListener("click", e => { const b = e.target.closest(".persona"); if (b) openPersona(b.dataset.p); });
  pModal.addEventListener("click", e => {
    if (e.target === pModal || e.target.closest(".modal__close")) pModal.close();
    const t = e.target.closest("[data-ptab]");
    if (t) { $$("[data-ptab]", pModal).forEach(x => x.classList.toggle("is-on", x === t)); $$("[data-ppanel]", pModal).forEach(x => x.hidden = x.dataset.ppanel !== t.dataset.ptab); }
    const g = e.target.closest("[data-gojourney]");
    if (g) { pModal.close(); renderJourney(g.dataset.gojourney); }
  });

  /* ---------- stories ---------- */
  const sFilters = $("#storyPersonaFilters");
  sFilters.innerHTML = `<button class="chip is-on" data-sper="all">Todas las personas</button>` +
    [...D.personas.map(p => p.id), "equipo"].map(id => {
      const p = persona(id);
      return `<button class="chip" data-sper="${id}">${p ? `<img src="${avatar(id)}" alt="">` : ""}${p ? esc(p.name) : "Equipo RxI"}</button>`;
    }).join("");
  let sPrio = "all", sPer = "all";
  const PRIO_C = { "Debe": "var(--pink)", "Debería": "var(--yellow)", "Podría": "var(--mint)" };
  const renderStories = () => {
    const list = D.stories.filter(s => (sPrio === "all" || s.priority === sPrio) && (sPer === "all" || s.persona === sPer));
    $("#countAll").textContent = D.stories.length;
    $("#stories").innerHTML = list.length ? list.map((s, i) => {
      const p = persona(s.persona);
      return `<article class="story card" style="--c:${PRIO_C[s.priority]};animation-delay:${i * 25}ms">
        <div class="story__head"><span class="story__id">${s.id}</span><span class="story__prio">${s.priority === "Debe" ? "Debe · MVP" : s.priority}</span></div>
        <div class="story__body">
          <div class="story__who">${p ? `<img src="${avatar(p.id)}" alt="">${esc(p.name)}` : "Equipo de Red por la Infancia"}</div>
          <p class="story__text" style="margin-top:10px">${esc(s.text)}</p>
          <details><summary>Criterios de aceptación</summary><ul>${s.criteria.map(c => `<li>${esc(c)}</li>`).join("")}</ul>
          ${s.evidence ? `<p class="story__ev"><b>Respaldo</b><br>${esc(s.evidence.charAt(0).toUpperCase() + s.evidence.slice(1))}</p>` : ""}</details>
        </div></article>`;
    }).join("") : `<p class="empty card">No hay historias con estos filtros.</p>`;
    $$("[data-sprio]").forEach(b => b.classList.toggle("is-on", b.dataset.sprio === sPrio));
    $$("[data-sper]").forEach(b => b.classList.toggle("is-on", b.dataset.sper === sPer));
  };
  $$("[data-sprio]").forEach(b => b.addEventListener("click", () => { sPrio = b.dataset.sprio; renderStories(); }));
  sFilters.addEventListener("click", e => { const b = e.target.closest("[data-sper]"); if (b) { sPer = b.dataset.sper; renderStories(); } });
  renderStories();

  /* ---------- journeys ---------- */
  const NEG = /angusti|apurad|impacien|perdid|frustr|confundi|insegur|nervios|distra|molest|abrumad|avergonz|asustad|ansios|desconfi|sola|dubitativ|insatisf|desanim|vulnerable|dudas/i;
  const POS = /alivi|esperanz|útil|empoder|comprometid|decidid|motivad|responsable|interesad|satisf|tranquil|curios/i;
  const tabsEl = $("#journeyTabs"), jEl = $("#journey");
  tabsEl.innerHTML = D.journeys.map(j => `<button class="tab" role="tab" style="--c:${COLORS[j.persona]}" data-j="${j.persona}" aria-selected="false"><img src="${avatar(j.persona)}" alt="">${esc(persona(j.persona).name)}</button>`).join("");
  const curve = scores => {
    const W = 600, H = 140, n = scores.length, pad = 20;
    const pts = scores.map((s, i) => [((i + .5) / n) * W, H - pad - ((s - 1) / 4) * (H - pad * 2)]);
    let d = `M${pts[0][0]},${pts[0][1]}`;
    for (let i = 1; i < pts.length; i++) { const [x0, y0] = pts[i - 1], [x1, y1] = pts[i], cx = (x0 + x1) / 2; d += ` C${cx},${y0} ${cx},${y1} ${x1},${y1}`; }
        return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label="Curva emocional del recorrido">
      <defs><linearGradient id="cg" x1="0" x2="1"><stop offset="0" stop-color="#ff6bc1"/><stop offset=".5" stop-color="#ff7a1a"/><stop offset="1" stop-color="#8b5cf6"/></linearGradient></defs>
      <path d="${d}" fill="none" stroke="url(#cg)" stroke-width="3" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
      ${pts.map(([x, y], i) => `<g><circle cx="${x}" cy="${y}" r="7" fill="${scores[i] <= 2 ? "#ff8fa3" : scores[i] >= 4 ? "#5fd3a5" : "#ffffff"}" stroke="#1b1b1f" stroke-width="1.5" vector-effect="non-scaling-stroke"/></g>`).join("")}
    </svg>`;
  };
  function renderJourney(id) {
    const j = D.journeys.find(x => x.persona === id), p = persona(id), L = "ABCDEFG";
    $$(".tab", tabsEl).forEach(t => t.setAttribute("aria-selected", t.dataset.j === id));
    const sel = $(`.tab[data-j="${id}"]`, tabsEl); if (sel) tabsEl.scrollTo({ left: sel.offsetLeft - 16, behavior: "smooth" });
    const cells = [];
    cells.push(`<div class="jcell jcell--label">Acción</div>`, ...j.a.map((a, i) => `<div class="jcell jcell--action"><span>${i + 1}</span><br>${esc(a)}</div>`));
    cells.push(`<div class="jcell jcell--label">Ánimo</div>`, `<div class="jcell jcell--curve">${curve(j.score)}</div>`);
    cells.push(`<div class="jcell jcell--label">Lista de tareas</div>`, ...j.t.map(t => `<div class="jcell"><ol>${t.map((x, k) => `<li><b>${L[k]}.</b> ${esc(x)}</li>`).join("")}</ol></div>`));
    cells.push(`<div class="jcell jcell--label">Sentimientos</div>`, ...j.f.map(f => `<div class="jcell">${f.map(x => `<span class="feel ${NEG.test(x) ? "feel--neg" : POS.test(x) ? "feel--pos" : ""}">${esc(x)}</span>`).join("")}</div>`));
    cells.push(`<div class="jcell jcell--label">Oportunidades de mejora</div>`, ...j.o.map(o => `<div class="jcell"><ul>${o.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>`));
    jEl.style.setProperty("--c", COLORS[id]);
    jEl.innerHTML = `<div class="journey__head"><img src="${avatar(id)}" alt=""><div><h3>Persona: ${esc(p.name)}</h3><p><b>Objetivo:</b> ${esc(j.g)}</p></div></div>
      <div class="journey__scroll" tabindex="0" aria-label="Mapa de recorrido, desplazable horizontalmente"><div class="jtable">${cells.join("")}</div></div>
      <p class="journey__hint">← Deslizá para ver todo el recorrido →</p>`;
  }
  tabsEl.addEventListener("click", e => { const b = e.target.closest(".tab"); if (b) renderJourney(b.dataset.j); });
  renderJourney("laura");

  /* ---------- reveal + counters + bars on view ---------- */
  $$(".section .wrap > *, .card:not(.shot):not(.persona):not(.story)").forEach(el => el.classList.add("reveal"));
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target;
    el.classList.add("is-in");
    if (el.matches("[data-count]")) countUp(el);
    if (el.matches(".bars")) $$(".bar__fill", el).forEach(f => f.style.width = f.dataset.w + "%");
    io.unobserve(el);
  }), { threshold: .15 });
  $$(".reveal, [data-count], .bars").forEach(el => io.observe(el));

  /* ---------- active stage link while scrolling ---------- */
  const emp = $("#empathize"), next = $("#proximamente");
  addEventListener("scroll", () => {
    const y = scrollY + innerHeight / 2;
    $(".stage-link[data-stage='empathize']").classList.toggle("is-active", y < next.offsetTop || y < emp.offsetTop);
  }, { passive: true });
})();
