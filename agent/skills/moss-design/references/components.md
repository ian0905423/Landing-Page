# MOSS Components — Patrones de Código

Patrones CSS/HTML exactos derivados del mockup aprobado.
Cada componente incluye su estructura HTML semántica y CSS.

---

## 1. Botón Primario (CTA)

Usado en: Hero ("Descubrir Catálogo"), Contacto ("Enviar Mensaje").

```html
<a href="#productos" class="btn-primary">
  Descubrir Catálogo <span aria-hidden="true">→</span>
</a>
```

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  background-color: var(--color-primary);
  color: var(--color-text-on-dark);
  font-family: var(--font-body);
  font-size: var(--fs-body);
  font-weight: var(--fw-semibold);
  padding: 0.85rem 1.75rem;
  border-radius: var(--radius-pill);
  border: none;
  cursor: pointer;
  text-decoration: none;
  box-shadow: var(--shadow-btn);
  transition: background-color var(--transition-fast),
              transform var(--transition-fast),
              box-shadow var(--transition-fast);
}

.btn-primary:hover,
.btn-primary:focus-visible {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(216, 27, 122, 0.45);
}

.btn-primary:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 3px;
}
```

---

## 2. Navbar

Barra de navegación con logo izquierda, links centro-derecha, botón dark mode.
Usa **Flexbox** (requerimiento RT-03).

```html
<header>
  <nav class="navbar" aria-label="Navegación principal">
    <div class="container navbar__inner">
      <a href="#inicio" class="navbar__logo" aria-label="Suplidora MOSS - Inicio">
        <img src="img/logo.svg" alt="MOSS" width="80" height="40">
      </a>
      <ul class="navbar__links" role="list">
        <li><a href="#inicio" class="navbar__link navbar__link--active" aria-current="page">Inicio</a></li>
        <li><a href="#productos" class="navbar__link">Productos</a></li>
        <li><a href="#beneficios" class="navbar__link">Beneficios</a></li>
        <li><a href="#testimonios" class="navbar__link">Testimonios</a></li>
        <li><a href="#contacto" class="navbar__link">Contacto</a></li>
      </ul>
      <button class="navbar__dark-toggle" id="darkToggle"
              aria-label="Activar modo oscuro" aria-pressed="false">
        🌙
      </button>
    </div>
  </nav>
</header>
```

```css
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
  height: var(--nav-height);
}

.navbar__inner {
  display: flex;              /* ← FLEXBOX requerido RT-03 */
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.navbar__links {
  display: flex;
  list-style: none;
  gap: var(--space-md);
  margin: 0;
  padding: 0;
}

.navbar__link {
  font-family: var(--font-body);
  font-size: var(--fs-nav);
  font-weight: var(--fw-medium);
  color: var(--color-dark);
  text-decoration: none;
  padding-bottom: 3px;
  border-bottom: 2px solid transparent;
  transition: color var(--transition-fast), border-color var(--transition-fast);
}

.navbar__link:hover,
.navbar__link--active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

.navbar__link:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 4px;
  border-radius: 2px;
}

.navbar__dark-toggle {
  background: var(--color-dark);
  color: var(--color-text-on-dark);
  border: none;
  border-radius: var(--radius-pill);
  padding: 0.45rem 1rem;
  font-size: var(--fs-small);
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.navbar__dark-toggle:hover { background: var(--color-primary); }
.navbar__dark-toggle:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}

/* Responsive: colapsar en móvil */
@media (max-width: 768px) {
  .navbar__links {
    display: none; /* Implementar burger menu en app.js si se desea */
  }
}
```

---

## 3. Product Card

Usada en la sección "Nuestras Categorías". Grid de 4 columnas en desktop (RT-04).

```html
<article class="product-card">
  <figure class="product-card__img-wrapper">
    <img src="img/esmaltes.jpg" alt="Colección de esmaltes de uñas en tonos fucsia y morado" 
         class="product-card__img" loading="lazy">
  </figure>
  <div class="product-card__body">
    <h3 class="product-card__title">Esmaltes</h3>
    <p class="product-card__desc">Descubre uñas radiantes con nuestra amplia gama de esmaltes.</p>
  </div>
</article>
```

```css
.product-card {
  background: var(--color-bg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}

.product-card__img-wrapper {
  margin: 0;
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.product-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.product-card:hover .product-card__img {
  transform: scale(1.05);
}

.product-card__body {
  padding: var(--space-sm) var(--space-sm) var(--space-md);
}

.product-card__title {
  font-family: var(--font-heading);
  font-size: var(--fs-card-title);
  font-weight: var(--fw-bold);
  color: var(--color-dark);
  margin: 0 0 var(--space-xs);
}

.product-card__desc {
  font-size: var(--fs-small);
  color: var(--color-gray);
  line-height: 1.6;
  margin: 0;
}
```

---

## 4. Benefit Card (sección oscura)

Usada dentro de la sección negra `.section--dark`.

```html
<div class="benefit-card" role="listitem">
  <div class="benefit-card__icon" aria-hidden="true">
    <!-- SVG icon aquí -->
  </div>
  <h3 class="benefit-card__title">Ingredientes Naturales</h3>
  <p class="benefit-card__desc">Fórmulas con extractos de plantas y sin parabenos.</p>
</div>
```

```css
/* La sección contenedora */
.section--dark {
  background-color: var(--color-black);
  color: var(--color-text-on-dark);
}

.benefit-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--space-lg) var(--space-sm);
  gap: var(--space-sm);
}

.benefit-card__icon {
  width: 56px;
  height: 56px;
  color: var(--color-primary); /* íconos en fucsia sobre negro */
}

.benefit-card__title {
  font-family: var(--font-heading);
  font-size: var(--fs-card-title);
  font-weight: var(--fw-bold);
  color: var(--color-text-on-dark);
  margin: 0;
}

.benefit-card__desc {
  font-size: var(--fs-small);
  color: var(--color-text-muted-dark);
  line-height: 1.6;
  margin: 0;
}
```

---

## 5. Testimonial Card

Usada en la sección "Lo que dicen nuestras clientas".

```html
<article class="testimonial-card">
  <span class="testimonial-card__quote" aria-hidden="true">"</span>
  <blockquote class="testimonial-card__text">
    Me encantan sus productos, son de excelente calidad y mi piel nunca había estado tan hermosa.
  </blockquote>
  <cite class="testimonial-card__author">— Sofía R.</cite>
</article>
```

```css
.testimonial-card {
  background: var(--color-bg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  padding: var(--space-lg) var(--space-md);
  position: relative;
}

.testimonial-card__quote {
  font-family: var(--font-heading);
  font-size: 4rem;
  font-weight: var(--fw-black);
  color: var(--color-primary);
  line-height: 1;
  display: block;
  margin-bottom: -1rem; /* pull up the text */
}

.testimonial-card__text {
  font-size: var(--fs-body);
  color: var(--color-gray-dark);
  line-height: 1.7;
  margin: 0 0 var(--space-md);
  font-style: normal;
}

.testimonial-card__author {
  font-size: var(--fs-small);
  font-weight: var(--fw-semibold);
  color: var(--color-primary);
  font-style: normal;
}
```

---

## 6. Formulario de Contacto

```html
<form class="contact-form" id="contactForm" novalidate>
  <div class="contact-form__group">
    <label for="nombre" class="contact-form__label">Nombre completo</label>
    <input type="text" id="nombre" name="nombre" class="contact-form__input"
           placeholder="Tu nombre" required aria-required="true">
  </div>
  <div class="contact-form__group">
    <label for="correo" class="contact-form__label">Correo electrónico</label>
    <input type="email" id="correo" name="correo" class="contact-form__input"
           placeholder="tu@correo.com" required aria-required="true">
  </div>
  <div class="contact-form__group">
    <label for="mensaje" class="contact-form__label">Mensaje</label>
    <textarea id="mensaje" name="mensaje" class="contact-form__input contact-form__textarea"
              placeholder="¿En qué podemos ayudarte?" rows="4" required aria-required="true"></textarea>
  </div>
  <button type="submit" class="btn-primary btn-primary--full">Enviar Mensaje</button>
</form>
```

```css
.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.contact-form__group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.contact-form__label {
  font-size: var(--fs-small);
  font-weight: var(--fw-medium);
  color: var(--color-gray-dark);
}

.contact-form__input {
  font-family: var(--font-body);
  font-size: var(--fs-body);
  color: var(--color-dark);
  background: var(--color-bg);
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 0.75rem 1rem;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.contact-form__input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(216, 27, 122, 0.12);
}

.contact-form__textarea {
  resize: vertical;
  min-height: 110px;
}

.btn-primary--full { width: 100%; justify-content: center; }
```

---

## 7. Hero Section Title

```css
/* El título principal del hero tiene acento de color */
.hero__title {
  font-family: var(--font-heading);
  font-size: var(--fs-hero-title);
  font-weight: var(--fw-black);
  line-height: 1.2;
  color: var(--color-dark);
  margin: 0 0 var(--space-sm);
}

/* "MOSS" o palabra clave va en fucsia */
.hero__title .accent {
  color: var(--color-primary);
}
```

```html
<h1 class="hero__title">
  Realza tu belleza<br>natural con <span class="accent">MOSS</span>
</h1>
```

---

## 8. Section Title Pattern

```css
.section-title {
  font-family: var(--font-heading);
  font-size: var(--fs-section-title);
  font-weight: var(--fw-bold);
  color: var(--color-primary);
  margin: 0 0 var(--space-lg);
}

/* Variante centrada con líneas decorativas */
.section-title--centered {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
}

.section-title--centered::before,
.section-title--centered::after {
  content: '';
  flex: 1;
  height: 2px;
  background: var(--color-primary);
  opacity: 0.3;
}
```
