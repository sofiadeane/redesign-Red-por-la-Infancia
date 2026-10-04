/**
 * Datos de Google Analytics (oct 2025 – oct 2026).
 */

/** Páginas más vistas. "highlight" marca las páginas clave para las personas. */
export const topPages = [
  { name: "Home", views: 5147 },
  { name: "¿Quiénes Somos?", views: 1489 },
  { name: "Bajalo Ya!", views: 706, highlight: true },
  { name: "Guías Orientativas", views: 452 },
  { name: "Campañas", views: 407 },
  { name: "Necesito Ayuda", views: 306, highlight: true },
  { name: "Evidencia", views: 269 },
  { name: "Quiero Colaborar", views: 241, highlight: true },
];

/**
 * Usuarios activos por país. Parte del tráfico de EE.UU. viene de centros de datos
 * (Ashburn, Council Bluffs), así que probablemente incluye bots.
 */
export const topCountries = [
  { name: "Argentina", views: 3700 },
  { name: "Estados Unidos", views: 687, highlight: true },
  { name: "China", views: 132, highlight: true },
  { name: "México", views: 103, highlight: true },
  { name: "España", views: 58, highlight: true },
  { name: "Irlanda", views: 54, highlight: true },
  { name: "Reino Unido", views: 53, highlight: true },
];
