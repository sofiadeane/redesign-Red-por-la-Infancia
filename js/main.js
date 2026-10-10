/**
 * Rediseño Red por la Infancia · UX Case Study
 * Página de proceso: inicializa cada sección del caso completo.
 */
import { initSite } from "./modules/site.js";
import { initNavigation } from "./modules/navigation.js";
import { initAudit } from "./modules/audit.js";
import { initPainPoints } from "./modules/pain-points.js";
import { initAnalytics } from "./modules/analytics.js";
import { initPersonas } from "./modules/personas.js";
import { initEmpathy } from "./modules/empathy.js";
import { initStories } from "./modules/stories.js";
import { initJourneys } from "./modules/journeys.js";
import { initDefine } from "./modules/define.js";
import { initValuePropositions } from "./modules/value-propositions.js";
import { initIdeate } from "./modules/ideate.js";
import { initClosing } from "./modules/closing.js";
import { initReveal } from "./modules/reveal.js";

// Navegación general y contacto
initSite();
initNavigation();

// 01 · Empathize
initAudit();
initPainPoints();
initAnalytics();
const showJourney = initJourneys();
const showEmpathy = initEmpathy();
initPersonas({ onShowJourney: showJourney, onShowEmpathy: showEmpathy });
initStories();

// 02 · Define
initDefine();
initValuePropositions();

// 03 · Ideate
initIdeate();

// Cierre: aprendizajes y lo que viene
initClosing();

// Animaciones de entrada (al final, para incluir el contenido generado)
initReveal();
