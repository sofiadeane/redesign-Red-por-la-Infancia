/**
 * Rediseño Red por la Infancia · UX Case Study
 * Punto de entrada: inicializa cada sección del sitio.
 */
import { initNavigation } from "./modules/navigation.js";
import { initAudit } from "./modules/audit.js";
import { initPainPoints } from "./modules/pain-points.js";
import { initAnalytics } from "./modules/analytics.js";
import { initPersonas } from "./modules/personas.js";
import { initStories } from "./modules/stories.js";
import { initJourneys } from "./modules/journeys.js";
import { initDefine } from "./modules/define.js";
import { initValuePropositions } from "./modules/value-propositions.js";
import { initReveal } from "./modules/reveal.js";

// 00 · Navegación general
initNavigation();

// 01 · Empathize
initAudit();
initPainPoints();
initAnalytics();
const showJourney = initJourneys();
initPersonas({ onShowJourney: showJourney });
initStories();

// 02 · Define
initDefine();
initValuePropositions();

// Animaciones de entrada (al final, para incluir el contenido generado)
initReveal();
