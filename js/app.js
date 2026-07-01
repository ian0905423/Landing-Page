/**
 * ============================================================
 * SUPLIDORA MOSS — app.js
 * Curso: ISW-521 | Laboratorio #1
 * ============================================================
 *
 * FASE 6 — Modo Oscuro + Persistencia con localStorage
 *
 * Requisitos del Roadmap:
 *  - classList.toggle('dark-mode') para alternar el tema
 *  - localStorage.setItem('theme', ...) para guardar la preferencia
 *  - localStorage.getItem('theme') para recuperarla al cargar
 * ============================================================
 */

/**
 * Módulo de Modo Oscuro (Dark Mode).
 * Se encapsula en un IIFE para evitar contaminar el scope global.
 * El script está al final del <body>, por lo que el DOM ya está listo.
 */
(function () {

  // ── Constantes ──────────────────────────────────────────────
  /** Clave usada en localStorage para persistir la preferencia de tema */
  const STORAGE_KEY  = 'theme';
  /** Valor que identifica el modo oscuro */
  const DARK_VALUE   = 'dark';
  /** Valor que identifica el modo claro */
  const LIGHT_VALUE  = 'light';
  /** Clase CSS que activa las variables del modo oscuro en body */
  const DARK_CLASS   = 'dark-mode';

  // ── Referencias al DOM ───────────────────────────────────────
  /** Checkbox de alternancia en el navbar (id="darkToggle") */
  const toggleInput = document.getElementById('darkToggle');

  // Validación defensiva: si el checkbox no existe, salir sin error
  if (!toggleInput) {
    console.warn('MOSS DarkMode: checkbox #darkToggle no encontrado en el DOM.');
    return;
  }

  // ── Funciones utilitarias ────────────────────────────────────

  /**
   * Aplica el tema oscuro o claro en el DOM y actualiza el botón.
   * @param {boolean} isDark - true para activar el modo oscuro.
   */
  function applyTheme(isDark) {
    if (isDark) {
      document.body.classList.add(DARK_CLASS);
      toggleInput.checked = true;
      toggleInput.setAttribute('aria-pressed', 'true');
      toggleInput.setAttribute('aria-label', 'Desactivar modo oscuro');
    } else {
      document.body.classList.remove(DARK_CLASS);
      toggleInput.checked = false;
      toggleInput.setAttribute('aria-pressed', 'false');
      toggleInput.setAttribute('aria-label', 'Activar modo oscuro');
    }
  }

  /**
   * Guarda la preferencia de tema en localStorage para persistencia
   * entre recargas y sesiones del navegador.
   * @param {boolean} isDark - true si el modo oscuro está activo.
   */
  function saveTheme(isDark) {
    localStorage.setItem(STORAGE_KEY, isDark ? DARK_VALUE : LIGHT_VALUE);
  }

  // ── Paso 1: Recuperar preferencia guardada al cargar la página ──
  // Se lee ANTES de que el navegador pinte el primer frame para evitar
  // el parpadeo blanco (FOUC — Flash of Unstyled Content).
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  const startDark  = savedTheme === DARK_VALUE;  // true si ya era dark
  applyTheme(startDark);

  // ── Paso 2: Escuchar el evento 'change' del checkbox toggle ──
  // 'change' se dispara cuando el usuario hace clic o usa la tecla Espacio
  toggleInput.addEventListener('change', function () {
    // toggleInput.checked indica el NUEVO estado tras el cambio
    const willBeDark = toggleInput.checked;

    // Aplicar el nuevo tema en el DOM y sincronizar el interruptor
    applyTheme(willBeDark);

    // Paso 3: Persistir la nueva preferencia en localStorage
    saveTheme(willBeDark);
  });

})(); // Fin del IIFE

/**
 * ============================================================
 * FASE 7 — Carrusel de Pestañas Fantasy (Modal Interactivo)
 * Uso de <dialog> y JS nativo.
 * ============================================================
 */
(function() {
  const modal = document.getElementById('productCarouselModal');
  // Si no estamos en la página que tiene el modal, salimos sin error
  if (!modal) return; 

  const carouselImg = document.getElementById('carouselImg');
  const carouselItemPrice = document.getElementById('carouselItemPrice');
  const carouselItemDesc = document.getElementById('carouselItemDesc');

  // Datos del producto solicitados
  // Datos de los carruseles disponibles
  const carouselsData = {
    fantasy: [
      { name: 'Pestañas YY', price: '₡4500', img: 'img/productos/pestañas_accesorios/pestañas_fantasy/YY.png' },
      { name: 'Pestañas 3D', price: '₡4500', img: 'img/productos/pestañas_accesorios/pestañas_fantasy/3D.png' },
      { name: 'Pestañas 4D', price: '₡5000', img: 'img/productos/pestañas_accesorios/pestañas_fantasy/4D.png' },
      { name: 'Pestañas 5D', price: '₡5500', img: 'img/productos/pestañas_accesorios/pestañas_fantasy/5D.png' },
      { name: 'Pestañas 6D', price: '₡6500', img: 'img/productos/pestañas_accesorios/pestañas_fantasy/6D.png' }
    ],
    blister: [
      { name: 'Blister Curvatura C 0.05', price: '₡4500', img: 'img/productos/pestañas_accesorios/Variedad_blister_de_pestañas/1.png' },
      { name: 'Blister Curvatura C 0.07', price: '₡4500', img: 'img/productos/pestañas_accesorios/Variedad_blister_de_pestañas/2.png' },
      { name: 'Blister Curvatura CC 0.05', price: '₡4500', img: 'img/productos/pestañas_accesorios/Variedad_blister_de_pestañas/3.png' },
      { name: 'Blister Curvatura CC 0.07', price: '₡4500', img: 'img/productos/pestañas_accesorios/Variedad_blister_de_pestañas/4.png' },
      { name: 'Blister Curvatura D 0.05', price: '₡4500', img: 'img/productos/pestañas_accesorios/Variedad_blister_de_pestañas/5.png' },
      { name: 'Blister Curvatura D 0.07', price: '₡4500', img: 'img/productos/pestañas_accesorios/Variedad_blister_de_pestañas/6.png' },
      { name: 'Blister Mix C', price: '₡5000', img: 'img/productos/pestañas_accesorios/Variedad_blister_de_pestañas/7.png' },
      { name: 'Blister Mix D', price: '₡5000', img: 'img/productos/pestañas_accesorios/Variedad_blister_de_pestañas/8.png' }
    ],
    kit_lifting: [
      { 
        name: 'Kit Lifting ICONSIGN', 
        price: '₡9900', 
        img: 'img/productos/pestañas_accesorios/Kit Lifting ICONSIGN/kit-lifting.png',
        desc: '<strong>Contenido del kit:</strong><br>– 1 pegamento<br>– 1 fijador<br>– 1 permanente<br>– 1 nutriente<br>– 1 limpiador<br>– 5 pares de almohadillas de silicón de diferentes medidas: S/M/M1/M2/L'
      },
      { 
        name: 'Kit Lifting ICONSIGN (Contenido)', 
        price: '₡9900', 
        img: 'img/productos/pestañas_accesorios/Kit Lifting ICONSIGN/kit-lifting-2.jpg',
        desc: '<strong>Contenido del kit:</strong><br>– 1 pegamento<br>– 1 fijador<br>– 1 permanente<br>– 1 nutriente<br>– 1 limpiador<br>– 5 pares de almohadillas de silicón de diferentes medidas: S/M/M1/M2/L'
      }
    ],
    luminary: [
      { name: 'Luminary Base + Color', price: '₡12500', img: 'img/productos/Semi-permanentes y Efectos/Luminary base + color/lumi-one.png', desc: 'Sistema multi-flex en gel que actúa como base y color.' },
      { name: 'Luminary Base + Color', price: '₡12500', img: 'img/productos/Semi-permanentes y Efectos/Luminary base + color/lumi-two.png', desc: 'Sistema multi-flex en gel que actúa como base y color.' },
      { name: 'Luminary Base + Color', price: '₡12500', img: 'img/productos/Semi-permanentes y Efectos/Luminary base + color/lumi-three.png', desc: 'Sistema multi-flex en gel que actúa como base y color.' },
      { name: 'Luminary Base + Color', price: '₡12500', img: 'img/productos/Semi-permanentes y Efectos/Luminary base + color/lumi-four.png', desc: 'Sistema multi-flex en gel que actúa como base y color.' }
    ],
    victoria: [
      { name: 'Semi-permanentes Victoria', price: 'A partir de ₡2.000', img: 'img/productos/Semi-permanentes y Efectos/Semi-permanentes Victoria/principal.png', desc: '<strong>Precios:</strong><br>• Colores lisos: ₡2.000<br>• Escarchados: ₡2.300' },
      { name: 'Semi-permanentes Victoria', price: 'A partir de ₡2.000', img: 'img/productos/Semi-permanentes y Efectos/Semi-permanentes Victoria/secundary.png', desc: '<strong>Precios:</strong><br>• Colores lisos: ₡2.000<br>• Escarchados: ₡2.300' },
      { name: 'Semi-permanentes Victoria', price: 'A partir de ₡2.000', img: 'img/productos/Semi-permanentes y Efectos/Semi-permanentes Victoria/Third.png', desc: '<strong>Precios:</strong><br>• Colores lisos: ₡2.000<br>• Escarchados: ₡2.300' }
    ]
  };

  let currentIndex = 0;
  let activeDataset = [];

  /**
   * Actualiza la vista del carrusel con la información del índice actual
   */
  function updateSlide(index) {
    const data = activeDataset[index];
    carouselImg.src = data.img;
    carouselImg.alt = data.name;
    carouselItemPrice.textContent = 'Precio: ' + data.price;
    if (carouselItemDesc) {
      if (data.desc) {
        carouselItemDesc.innerHTML = data.desc;
        carouselItemDesc.style.display = 'block';
      } else {
        carouselItemDesc.style.display = 'none';
      }
    }
  }

  // Funciones expuestas al objeto window para poder usarse en onclick="" desde el HTML
  window.openCarouselModal = function(type) {
    activeDataset = carouselsData[type] || carouselsData['fantasy'];
    currentIndex = 0; // Resetear al primer elemento al abrir
    updateSlide(currentIndex);
    modal.showModal(); // API nativa de la etiqueta <dialog>
  };

  window.closeCarouselModal = function() {
    modal.close();
  };

  window.nextSlide = function() {
    // Aritmética modular para hacer el loop del carrusel hacia adelante
    currentIndex = (currentIndex + 1) % activeDataset.length;
    updateSlide(currentIndex);
  };

  window.prevSlide = function() {
    // Aritmética modular para hacer el loop del carrusel hacia atrás
    currentIndex = (currentIndex - 1 + activeDataset.length) % activeDataset.length;
    updateSlide(currentIndex);
  };

  // Accesibilidad extra: Cerrar el modal al hacer clic en el fondo oscuro (backdrop)
  modal.addEventListener('click', function(event) {
    const rect = modal.getBoundingClientRect();
    const isInDialog = (
      rect.top <= event.clientY && 
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX && 
      event.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      modal.close();
    }
  });

})();

/**
 * ============================================================
 * FASE 8 — Filtros de Catálogo y Búsqueda
 * ============================================================
 */
(function() {
  const filterBtns = document.querySelectorAll('.catalog-filter-btn');
  const searchInput = document.querySelector('.catalog-search');
  const catalogItems = document.querySelectorAll('.catalog-item');
  const catalogTitle = document.querySelector('.catalog-title');

  function filterProducts() {
    const activeBtn = document.querySelector('.catalog-filter-btn--active');
    // Si no hay botón activo, por defecto mostramos 'pestanas'
    const activeFilter = activeBtn ? activeBtn.getAttribute('data-filter') : 'pestanas';
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

    if (catalogTitle) {
      catalogTitle.textContent = activeBtn ? activeBtn.textContent : 'Pestañas y accesorios';
    }

    catalogItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      const itemTitle = item.querySelector('.catalog-item__title').textContent.toLowerCase();

      // Coincidencia de categoría
      const matchesCategory = (activeFilter === 'todos' || itemCategory === activeFilter);
      // Coincidencia de búsqueda (texto)
      const matchesSearch = itemTitle.includes(searchTerm);

      // Solo mostramos el ítem si cumple ambos filtros
      if (matchesCategory && matchesSearch) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // Eventos para los botones de categoría
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('catalog-filter-btn--active'));
      this.classList.add('catalog-filter-btn--active');
      filterProducts();
    });
  });

  // Evento para el campo de búsqueda
  if (searchInput) {
    searchInput.addEventListener('input', filterProducts);
  }

  // Ejecución inicial para aplicar el estado del botón que esté activo por defecto
  filterProducts();
})();

/**
 * ============================================================
 * FASE 9 — Carrusel de Testimonios y Formulario de Reseñas
 * ============================================================
 */
(function() {
  const carouselContainer = document.getElementById('testimonialsCarousel');
  const reviewForm = document.getElementById('reviewForm');
  const nameInput = document.getElementById('reviewName');
  const textInput = document.getElementById('reviewText');

  if (!carouselContainer) return;

  // 1. Testimonios base
  const defaultTestimonials = [
    { text: "Los esmaltes de MOSS tienen una duración excepcional. Me encantan todos los tonos.", author: "Laura G." },
    { text: "Excelente atención y los precios son súper competitivos. Siempre encuentro lo que busco.", author: "Mariana V." },
    { text: "Encontré la base perfecta para mi tono de piel. Definitivamente volveré a comprar aquí.", author: "Sofía R." }
  ];

  // 2. Cargar testimonios del usuario desde localStorage
  let userReviews = [];
  try {
    const saved = localStorage.getItem('userReviews');
    if (saved) {
      userReviews = JSON.parse(saved);
    }
  } catch (e) {
    console.error('Error parseando userReviews', e);
  }

  // 3. Unir ambos
  let allTestimonials = [...defaultTestimonials, ...userReviews];
  let currentIndex = 0;
  let intervalId = null;

  // 4. Función para renderizar los testimonios
  function renderCarousel() {
    carouselContainer.innerHTML = '';
    allTestimonials.forEach((review, index) => {
      const article = document.createElement('article');
      article.className = 'testimonial-card';
      if (index === currentIndex) article.classList.add('active');
      
      article.innerHTML = `
        <span class="testimonial-card__quote" aria-hidden="true">"</span>
        <blockquote class="testimonial-card__text">${review.text}</blockquote>
        <cite class="testimonial-card__author">— ${review.author}</cite>
      `;
      carouselContainer.appendChild(article);
    });
  }

  // 5. Rotación automática
  function showNext() {
    const cards = carouselContainer.querySelectorAll('.testimonial-card');
    if (cards.length === 0) return;
    
    cards[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % cards.length;
    cards[currentIndex].classList.add('active');
  }

  function startCarousel() {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(showNext, 5000);
  }

  // Render inicial
  renderCarousel();
  startCarousel();

  // 6. Manejo del formulario
  if (reviewForm) {
    reviewForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const newReview = {
        author: nameInput.value.trim(),
        text: textInput.value.trim()
      };

      if (newReview.author && newReview.text) {
        // Guardar en array
        userReviews.push(newReview);
        allTestimonials.push(newReview);
        
        // Guardar en localStorage
        localStorage.setItem('userReviews', JSON.stringify(userReviews));
        
        // Re-renderizar y reiniciar carrusel en el nuevo elemento
        currentIndex = allTestimonials.length - 1;
        renderCarousel();
        startCarousel();

        // Limpiar form
        reviewForm.reset();
        alert('¡Gracias por tu opinión! Tu comentario ha sido publicado.');
      }
    });
  }
})();

/**
 * ============================================================
 * FASE 10 — Modal de Términos y Condiciones
 * ============================================================
 */
(function() {
  const termsModal = document.getElementById('termsModal');

  if (!termsModal) return;

  window.openTermsModal = function() {
    termsModal.showModal();
  };

  window.closeTermsModal = function() {
    termsModal.close();
  };

  // Cerrar el modal al hacer clic en el fondo oscuro (backdrop)
  termsModal.addEventListener('click', function(event) {
    const rect = termsModal.getBoundingClientRect();
    const isInDialog = (
      rect.top <= event.clientY && 
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX && 
      event.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      termsModal.close();
    }
  });
})();

/**
 * ============================================================
 * 6. ACCESIBILIDAD (A11Y)
 * Lógica para el widget flotante y almacenamiento de preferencias.
 * ============================================================
 */
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('a11yToggle');
  const panel = document.getElementById('a11yMenu');
  const closeBtn = document.getElementById('a11yClose');

  if (!toggleBtn || !panel) return;

  // --- Abrir / Cerrar menú ---
  function togglePanel() {
    const isHidden = panel.getAttribute('aria-hidden') === 'true';
    panel.setAttribute('aria-hidden', !isHidden);
    toggleBtn.setAttribute('aria-expanded', !isHidden);
  }

  toggleBtn.addEventListener('click', togglePanel);
  if(closeBtn) closeBtn.addEventListener('click', togglePanel);

  // Cerrar al hacer clic fuera del panel
  document.addEventListener('click', function(e) {
    if (!panel.contains(e.target) && !toggleBtn.contains(e.target) && panel.getAttribute('aria-hidden') === 'false') {
      togglePanel();
    }
  });

  // --- Configuración y LocalStorage ---
  const htmlElement = document.documentElement; // Usamos <html> para las clases
  const defaultSettings = {
    textSize: 16, // px base
    grayscale: false,
    highlightLinks: false,
    readableFont: false,
    pauseAnimations: false
  };

  let a11ySettings = JSON.parse(localStorage.getItem('mossA11y')) || defaultSettings;

  // Elementos DOM de Opciones
  const btnDecrease = document.getElementById('a11yTextDecrease');
  const btnReset = document.getElementById('a11yTextReset');
  const btnIncrease = document.getElementById('a11yTextIncrease');
  
  const chkGrayscale = document.getElementById('a11yGrayscale');
  const chkHighlight = document.getElementById('a11yHighlightLinks');
  const chkReadable = document.getElementById('a11yReadableFont');
  const chkPause = document.getElementById('a11yPauseAnimations');

  function saveSettings() {
    localStorage.setItem('mossA11y', JSON.stringify(a11ySettings));
    applySettings();
  }

  function applySettings() {
    // Texto
    htmlElement.style.fontSize = `${a11ySettings.textSize}px`;
    
    // Toggles (Clases CSS)
    htmlElement.classList.toggle('a11y-grayscale', a11ySettings.grayscale);
    htmlElement.classList.toggle('a11y-highlight-links', a11ySettings.highlightLinks);
    htmlElement.classList.toggle('a11y-readable-font', a11ySettings.readableFont);
    htmlElement.classList.toggle('a11y-pause-animations', a11ySettings.pauseAnimations);

    // Actualizar UI para reflejar estado actual (por si se recarga)
    if(chkGrayscale) chkGrayscale.checked = a11ySettings.grayscale;
    if(chkHighlight) chkHighlight.checked = a11ySettings.highlightLinks;
    if(chkReadable) chkReadable.checked = a11ySettings.readableFont;
    if(chkPause) chkPause.checked = a11ySettings.pauseAnimations;
  }

  // --- Eventos Tamaño de Texto ---
  if (btnDecrease && btnReset && btnIncrease) {
    btnDecrease.addEventListener('click', () => {
      if (a11ySettings.textSize > 12) a11ySettings.textSize -= 2;
      saveSettings();
    });
    btnReset.addEventListener('click', () => {
      a11ySettings.textSize = 16;
      saveSettings();
    });
    btnIncrease.addEventListener('click', () => {
      if (a11ySettings.textSize < 24) a11ySettings.textSize += 2;
      saveSettings();
    });
  }

  // --- Eventos Toggles ---
  if (chkGrayscale) {
    chkGrayscale.addEventListener('change', (e) => {
      a11ySettings.grayscale = e.target.checked;
      saveSettings();
    });
  }
  if (chkHighlight) {
    chkHighlight.addEventListener('change', (e) => {
      a11ySettings.highlightLinks = e.target.checked;
      saveSettings();
    });
  }
  if (chkReadable) {
    chkReadable.addEventListener('change', (e) => {
      a11ySettings.readableFont = e.target.checked;
      saveSettings();
    });
  }
  if (chkPause) {
    chkPause.addEventListener('change', (e) => {
      a11ySettings.pauseAnimations = e.target.checked;
      saveSettings();
    });
  }

  // Inicializar al cargar la página
  applySettings();
});
