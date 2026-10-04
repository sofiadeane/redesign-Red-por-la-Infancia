/**
 * Configuración compartida del sitio.
 */

/** Color de acento de cada persona (variables definidas en css/tokens.css). */
export const personaColors = {
  laura: "var(--pink)",
  silvia: "var(--lime)",
  martin: "var(--yellow)",
  camila: "var(--mint)",
  diego: "var(--orange)",
  ana: "var(--purple)",
  maya: "var(--teal)",
  equipo: "var(--blue)",
};

/** Ruta de la ilustración de cada persona. */
export const avatarSrc = (id) => `assets/img/personas/${id}.webp`;

export const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
