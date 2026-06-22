Roadmap de Construcción — Suplidora MOSS
Fase 0 — Setup (30 min) ##COMPLETADO
Crear la estructura de carpetas según lo especificado: laboratorio-01/ con subcarpetas css/, js/, img/. Inicializar repositorio GitHub, crear index.html base con <!DOCTYPE html>, meta viewport, y enlazar styles.css y app.js.






Fase 1 — Estructura HTML Semántica (1–2 h) COMPLETADO
Construir el esqueleto completo en index.html usando todas las etiquetas requeridas: <header>, <nav>, <main> con sus <section> internas (hero, productos, beneficios, testimonios, contacto), y <footer>. Sin CSS aún — solo estructura y contenido de texto real. Agregar todos los atributos alt en imágenes y atributos ARIA donde aplique. Al finalizar, validar en validator.w3.org.


Fase 2 — CSS Base + Variables (1 h)
En styles.css, declarar las custom properties (--color-fucsia, --color-dorado, etc.), importar las fuentes (Poppins, Montserrat) desde Google Fonts, definir el reset básico, y establecer los estilos tipográficos globales.



Fase 3 — Flexbox (1–2 h)
Aplicar Flexbox a: barra de navegación (logo + links alineados), sección de beneficios (iconos + texto en fila), y layout de tarjetas de testimonios. Verificar comportamiento en pantalla completa antes de agregar responsividad.
Fase 4 — CSS Grid (1–2 h)
Aplicar Grid a: galería de productos (4 categorías en cuadrícula) y sección de testimonios si se usa layout de 2–3 columnas. Definir las áreas nombradas si aplica.
Fase 5 — Responsividad (1–2 h)
Agregar media queries para los breakpoints 768px y 1024px. En móvil: nav colapsado o en columna, grid de 1 columna, hero apilado. En tablet: 2 columnas. Probar redimensionando el navegador manualmente.
Fase 6 — Modo Oscuro + localStorage (1 h)
En app.js: implementar el toggle de modo oscuro con classList.toggle('dark-mode'), guardar preferencia en localStorage.setItem('theme', ...), y al cargar la página recuperarla con localStorage.getItem('theme') para aplicarla inmediatamente.
Fase 7 — Accesibilidad y Contraste (30–45 min)
Verificar contraste de todos los pares texto/fondo en tools.w3.org/~fmbod/color-contrast (mínimo 4.5:1). Confirmar navegación con Tab visible en todos los elementos interactivos mediante :focus CSS.
Fase 8 — QA Final (30 min)
Revisar consola del navegador (cero errores), validar W3C, confirmar localStorage funciona al recargar, comprobar todos los CAs del laboratorio uno por uno.
Fase 9 — Commit y Defensa
Push final al repositorio con mensaje descriptivo. Preparar justificaciones técnicas: ¿por qué Flexbox aquí y Grid allá? ¿Qué hace cada función en app.js? ¿Diferencia entre localStorage y sessionStorage?