# MOSS Layout — Estructura, Grids y Responsividad

---

## Contenedor Base

```css
.container {
  width: 100%;
  max-width: var(--container-max); /* 1200px */
  margin: 0 auto;
  padding: 0 var(--container-pad);
}
```

---

## Reset Mínimo Recomendado

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  font-size: var(--fs-body);
  background-color: var(--color-bg);
  color: var(--color-dark);
  line-height: 1.6;
  transition: background-color var(--transition-base), color var(--transition-base);
}

img { max-width: 100%; display: block; }

ul { list-style: none; }

a { color: inherit; }

/* Focus visible global */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
  border-radius: 3px;
}
```

---

## Estructura de Secciones

Cada sección del `<main>` sigue este patrón:

```html
<section id="[id]" class="section [section--modifier]">
  <div class="container">
    <h2 class="section-title">[Título]</h2>
    <!-- contenido -->
  </div>
</section>
```

```css
.section {
  padding: var(--space-xl) 0;
}

/* Sección con fondo alternativo */
.section--alt {
  background-color: var(--color-bg-section);
}

/* Sección oscura (Beneficios/Valores) */
.section--dark {
  background-color: var(--color-black);
  color: var(--color-text-on-dark);
}
```

---

## Hero Section Layout (CSS Grid)

Layout de 2 columnas: texto | imagen.

```css
.hero {
  padding: var(--space-xl) 0;
  min-height: calc(100vh - var(--nav-height));
  display: flex;
  align-items: center;
}

.hero__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: center;
}

.hero__content { /* columna izquierda */ }

.hero__image-wrapper {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 4 / 5;
}

.hero__image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Fondo decorativo detrás de la imagen */
.hero__image-wrapper::before {
  content: '';
  position: absolute;
  inset: -20px -20px 20px 20px;
  background: linear-gradient(135deg, var(--color-primary-light), var(--color-primary-xlight));
  border-radius: var(--radius-lg);
  z-index: -1;
}

/* Responsive hero */
@media (max-width: 768px) {
  .hero__grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero__image-wrapper {
    order: -1; /* imagen arriba en móvil */
    aspect-ratio: 16/9;
  }
}
```

---

## Products Grid (CSS Grid RT-04)

Grid de 4 columnas en desktop, adaptable.

```css
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
}

/* + tarjeta de oferta especial (card 5ta, más grande) */
.products-grid .offer-card {
  background: var(--color-primary);
  color: var(--color-text-on-dark);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: var(--space-md);
  grid-row: span 1;
}

@media (max-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## Benefits Grid (Flexbox RT-03)

4 beneficios en fila sobre fondo negro.

```css
.benefits-row {
  display: flex;          /* ← FLEXBOX requerido */
  justify-content: space-between;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.benefits-row .benefit-card {
  flex: 1 1 200px;        /* mínimo 200px, crece equitativamente */
}

@media (max-width: 768px) {
  .benefits-row {
    flex-direction: column;
    align-items: center;
  }
  .benefits-row .benefit-card {
    flex: unset;
    width: 100%;
    max-width: 320px;
  }
}
```

---

## Testimonials Grid (CSS Grid RT-04)

3 columnas en desktop.

```css
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
}

@media (max-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## Contact Section Layout (Flexbox RT-03)

2 columnas: info izquierda | formulario derecha.

```css
.contact-layout {
  display: flex;          /* ← FLEXBOX requerido */
  gap: var(--space-2xl);
  align-items: flex-start;
}

.contact-info { flex: 0 0 300px; }
.contact-form-wrapper { flex: 1; }

@media (max-width: 768px) {
  .contact-layout {
    flex-direction: column;
  }
  .contact-info { flex: unset; width: 100%; }
}
```

---

## Footer Layout

```css
.footer {
  background-color: var(--color-black);
  color: var(--color-text-muted-dark);
  padding: var(--space-lg) 0;
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.footer__copy {
  font-size: var(--fs-small);
}

.footer__social {
  display: flex;
  gap: var(--space-sm);
}

.footer__social a {
  color: var(--color-text-muted-dark);
  transition: color var(--transition-fast);
}

.footer__social a:hover { color: var(--color-primary); }
```

---

## Breakpoints Resumen

| Breakpoint | Valor | Descripción |
|---|---|---|
| Móvil (base) | `< 768px` | 1 columna, nav colapsada, stacked layouts |
| Tablet | `768px` | 2 columnas en grid, flex-wrap activo |
| Desktop | `1024px` | 4 columnas productos, 3 testimonios, full nav |

```css
/* Estructura de media queries en styles.css */

/* ── Tablet (768px) ── */
@media (max-width: 768px) { ... }

/* ── Desktop pequeño (1024px) ── */
@media (max-width: 1024px) { ... }
```

> Usar mobile-first solo si el docente lo solicita. El mockup está diseñado en desktop-first,
> por lo que es coherente con ese enfoque para este proyecto.

---

## Matriz de Flexbox vs Grid (para la defensa oral)

| Sección | Técnica | Justificación |
|---|---|---|
| Navbar | Flexbox | Distribución lineal en 1 eje: logo — links — botón |
| Hero | CSS Grid | 2 columnas de igual peso con alineación vertical |
| Beneficios | Flexbox | Fila de items iguales con `flex: 1`, wrap en móvil |
| Productos | CSS Grid | Cuadrícula 2D definida, necesita `grid-column` para oferta |
| Testimonios | CSS Grid | Cuadrícula uniforme sin relaciones padre-hijo complejas |
| Contacto | Flexbox | 2 columnas con tamaños fijos distintos (`flex: 0 0 300px` vs `flex: 1`) |
| Footer | Flexbox | Distribución horizontal simple en 1 eje |

> Regla general: Grid cuando necesitas control en 2 ejes o tamaños de celda definidos.
> Flexbox cuando distribuyes items en una sola dirección (fila o columna).
