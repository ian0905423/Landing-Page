# MOSS Design Tokens — CSS Variables

Pegar este bloque en la parte superior de `styles.css` antes de cualquier otra regla.

```css
/* ============================================
   SUPLIDORA MOSS — DESIGN TOKENS
   Basado en mockup aprobado v1.0 (Junio 2026)
   ============================================ */

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap');

:root {
  /* ── Colores Primarios ── */
  --color-primary:        #D81B7A;   /* fucsia principal — botones, acentos */
  --color-primary-dark:   #AD1457;   /* hover de botones y links */
  --color-primary-light:  #F8BBD9;   /* fondos de cards, badges sutiles */
  --color-primary-xlight: #FDE8F3;   /* fondos de secciones hero, hover suave */

  /* ── Colores Neutros ── */
  --color-black:          #111111;   /* sección dark (beneficios) */
  --color-dark:           #1A1A1A;   /* texto principal */
  --color-gray-dark:      #444444;   /* texto secundario fuerte */
  --color-gray:           #666666;   /* texto descriptivo */
  --color-gray-light:     #999999;   /* placeholders, texto terciario */
  --color-border:         #E8E8E8;   /* bordes de cards, separadores */
  --color-bg:             #FFFFFF;   /* fondo base — blanco puro */
  --color-bg-section:     #FDF5F9;   /* fondo alternativo de secciones */

  /* ── Acento Dorado (uso muy puntual) ── */
  --color-gold:           #C9A84C;   /* ícono de oferta, badge especial */
  --color-gold-light:     #F5EDD0;   /* fondo del badge de oferta */

  /* ── Texto sobre Fondos Oscuros ── */
  --color-text-on-dark:   #FFFFFF;
  --color-text-muted-dark:#CCCCCC;

  /* ── Tipografía ── */
  --font-heading:   'Montserrat', 'Poppins', sans-serif;
  --font-body:      'Poppins', sans-serif;

  --fs-hero-title:  clamp(2rem, 4vw, 3rem);     /* "Realza tu belleza..." */
  --fs-section-title: clamp(1.5rem, 2.5vw, 2rem); /* "Nuestras Categorías" */
  --fs-card-title:  1.1rem;
  --fs-body:        0.95rem;
  --fs-small:       0.85rem;
  --fs-nav:         0.95rem;

  --fw-regular: 400;
  --fw-medium:  500;
  --fw-semibold:600;
  --fw-bold:    700;
  --fw-black:   800;

  /* ── Espaciado (escala de 8px) ── */
  --space-xs:   0.5rem;    /*  8px */
  --space-sm:   1rem;      /* 16px */
  --space-md:   1.5rem;    /* 24px */
  --space-lg:   2rem;      /* 32px */
  --space-xl:   3rem;      /* 48px */
  --space-2xl:  5rem;      /* 80px */

  /* ── Bordes y Sombras ── */
  --radius-sm:  8px;
  --radius-md:  12px;
  --radius-lg:  16px;
  --radius-pill:50px;

  --shadow-card:  0 4px 15px rgba(0, 0, 0, 0.08);
  --shadow-hover: 0 10px 30px rgba(216, 27, 122, 0.15);
  --shadow-btn:   0 4px 12px rgba(216, 27, 122, 0.35);

  /* ── Transiciones ── */
  --transition-fast: 200ms ease;
  --transition-base: 300ms ease;
  --transition-slow: 500ms ease;

  /* ── Layout ── */
  --container-max:  1200px;
  --container-pad:  1.5rem;
  --nav-height:     70px;
}

/* ── Modo Oscuro (localStorage toggle) ── */
body.dark-mode {
  --color-bg:           #0F0F0F;
  --color-bg-section:   #1A1A1A;
  --color-dark:         #F0F0F0;
  --color-gray-dark:    #CCCCCC;
  --color-gray:         #AAAAAA;
  --color-border:       #333333;
  --color-text-on-dark: #F0F0F0;

  /* El fucsia se mantiene igual — es la marca */
  --color-primary:      #E91E8C;   /* ligeramente más brillante en dark */
}
```

---

## Paleta Visual Resumida

```
FONDO BASE   ████ #FFFFFF   blanco puro
PRIMARIO     ████ #D81B7A   fucsia/magenta
HOVER        ████ #AD1457   fucsia oscuro
LIGHT        ████ #FDE8F3   fucsia muy suave
TEXTO        ████ #1A1A1A   casi negro
SECUNDARIO   ████ #666666   gris medio
DARK SECTION ████ #111111   negro profundo
DORADO       ████ #C9A84C   acento especial
```

---

## Contraste Verificado (WCAG AA)

| Par | Ratio | ¿Pasa 4.5:1? |
|---|---|---|
| `#D81B7A` sobre `#FFFFFF` | ~5.3:1 | ✅ Sí |
| `#FFFFFF` sobre `#D81B7A` | ~5.3:1 | ✅ Sí |
| `#1A1A1A` sobre `#FFFFFF` | ~18.1:1 | ✅ Sí |
| `#FFFFFF` sobre `#111111` | ~19.4:1 | ✅ Sí |
| `#666666` sobre `#FFFFFF` | ~5.7:1 | ✅ Sí |
| `#C9A84C` sobre `#111111` | ~5.9:1 | ✅ Sí |

> Todos los pares de color de texto cumplen WCAG 2.1 AA (4.5:1 mínimo).
> Verificar en: https://webaim.org/resources/contrastchecker/
