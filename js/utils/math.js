/**
 * Helpers numéricos para animaciones.
 */

export const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export const lerp = (from, to, t) => from + (to - from) * t;

export const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

/** Generador pseudoaleatorio con semilla, para que el layout sea siempre igual. */
export const seededRandom = (seed = 7) => {
  let state = seed;
  return () => {
    state = (state * 16807) % 2147483647;
    return state / 2147483647;
  };
};
