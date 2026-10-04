/**
 * Capturas de la auditoría del sitio actual (redporlainfancia.org).
 */

export const deviceLabels = {
  mobile: "Celular",
  tablet: "Tablet",
  desktop: "Computadora",
  nav: "Navegación",
};

/** Carpetas que agrupan las capturas en la sección de auditoría. */
export const auditFolders = [
  { device: "mobile", color: "#ffc2dc" },
  { device: "tablet", color: "#ffe39a" },
  { device: "desktop", color: "#d6c9ff" },
  { device: "nav", color: "#def59c" },
];

const shot = (file, device, title) => ({
  src: `assets/img/audit/${file}.webp`,
  device,
  title,
});

export const auditShots = [
  shot(
    "01-desktop-header-cta-cut-off",
    "desktop",
    'El botón "Quiero Colaborar" se corta y el menú se parte en dos líneas',
  ),
  shot(
    "02-desktop-first-load-no-logo-no-hero-image",
    "desktop",
    "En la primera carga no aparecen el logo ni la imagen principal",
  ),
  shot("03-desktop-inspire-card-cut-off-right", "desktop", "La tarjeta de INSPIRE se sale de la pantalla"),
  shot("04-desktop-campaign-cards-uneven-sizes", "desktop", "Tarjetas de campañas con tamaños desparejos"),
  shot("05-desktop-resource-cards-uneven-sizes", "desktop", "Tarjetas de recursos con alturas distintas"),
  shot(
    "06-desktop-footer-misaligned-outdated-2024",
    "desktop",
    "Footer desalineado y copyright desactualizado (2024)",
  ),
  shot(
    "07-desktop-quienes-somos-text-cut-off",
    "desktop",
    "En ¿Quiénes Somos? el texto se corta a la derecha",
  ),
  shot("08-desktop-quienes-somos-empty-column", "desktop", "Columnas vacías en ¿Quiénes Somos?"),
  shot(
    "09-mobile-home-headline-below-fold-no-ctas",
    "mobile",
    "Home en celular: sin botones de ayuda y el título queda abajo",
  ),
  shot(
    "10-mobile-menu-missing-help-donate-ctas",
    "mobile",
    'El menú no incluye "Necesito Ayuda" ni "Quiero Colaborar"',
  ),
  shot(
    "11-mobile-heading-breaks-language-widget-overlap",
    "mobile",
    "Títulos que se parten y el selector de idioma tapa contenido",
  ),
  shot(
    "12-mobile-inconsistent-alignment-empty-block",
    "mobile",
    "Alineaciones inconsistentes y bloques vacíos",
  ),
  shot(
    "13-mobile-text-baked-into-images",
    "mobile",
    "Texto dentro de imágenes: ilegible en pantallas chicas",
  ),
  shot("14-mobile-campaign-cards-uneven-widths", "mobile", "Tarjetas de campañas con anchos distintos"),
  shot("15-mobile-footer-icons-clipped", "mobile", "Íconos de redes cortados en el footer"),
  shot(
    "16-mobile-help-page-numbers-not-tappable",
    "mobile",
    "Necesito Ayuda: los teléfonos no se pueden tocar para llamar",
  ),
  shot("17-tablet-help-page-overlapping-text", "tablet", "Necesito Ayuda en tablet: textos superpuestos"),
  shot(
    "18-tablet-campanas-header-broken",
    "tablet",
    "Campañas: header roto y título sobre la línea divisoria",
  ),
  shot("19-tablet-evidencia-heading-overlaps-text", "tablet", "Evidencia: el título se sale y tapa el texto"),
  shot("20-tablet-evidencia-text-cut-off-left", "tablet", "Evidencia: texto cortado en el borde izquierdo"),
  shot("21-search-and-404-blank-page", "nav", "La búsqueda y la página de error aparecen en blanco"),
];
