# Estructura del Proyecto Seleccionada — Opción A

Basado en el análisis de los requerimientos y las condiciones de entrega del Laboratorio #1 del curso Programación en Ambiente Web I (ISW-521), se ha seleccionado la **Opción A: Estructura de Entrega Académica Estricta** como la arquitectura idónea para este proyecto.

Este documento describe la estructura y proporciona la justificación técnica de su elección.

---

## 1. Esquema de Carpetas y Archivos

El proyecto final de producción (excluyendo documentación de desarrollo y herramientas de agentes de IA) se organizará de la siguiente forma:

```text
Landing-Page/
├── index.html                      # Página web semántica principal
├── css/
│   └── styles.css                  # Archivo único de estilos (tokens, layouts, componentes)
├── js/
│   └── app.js                      # Lógica interactiva del modo oscuro y persistencia
├── img/                            # Directorio de recursos gráficos e imágenes
│   ├── categories/                 # Imágenes representativas de las categorías
│   │   ├── beauty_utensiels.png    # Imagen de catálogo para Accesorios
│   │   ├── creams_categories.png   # Imagen de catálogo para Cuidado Facial
│   │   └── ... (adicionales)
│   ├── logo/
│   │   └── Logo.png                # Logotipo oficial de Suplidora MOSS
│   └── panel/                      # Íconos de beneficios y redes sociales
│       ├── Facebook_panel.png
│       ├── instagram_panel.png
│       ├── whatsapp_panel.png
│       └── ... (demás recursos del panel)
```

---

## 2. Justificación Técnica de la Elección

### A. Compatibilidad con Calificación Local (Protocolo `file://`)
La modularización de JavaScript (Opción B) implementa módulos ES6 (`import`/`export`), los cuales generan errores de CORS cuando un navegador los ejecuta de manera local sin pasar por un servidor web. Dado que la revisión del laboratorio puede realizarse abriendo el archivo [index.html](file:///c:/Users/ACER/Desktop/Landing-Page/index.html) directamente con doble clic (lo que usa el protocolo `file://`), la **Opción A** garantiza que toda la interactividad (como la alternancia del modo oscuro y el almacenamiento en `localStorage`) funcione perfectamente de manera local e independiente.

### B. Cumplimiento Estricto de la Rúbrica
El criterio de aceptación **CA-09** en la rúbrica del laboratorio establece que el proyecto debe alinearse con la estructura solicitada en la cátedra académica. La estructura especificada en [requirements.md](file:///c:/Users/ACER/Desktop/Landing-Page/context/requirements.md#L315-L348) exige la distribución exacta en las carpetas `css/` y `js/` con un solo archivo de estilos y lógica respectivamente. La Opción A se adapta 1:1 a esta regla evitando cualquier potencial deducción de puntos.

### C. Eficiencia y Mantenibilidad del Código (Principio KISS)
Para una Landing Page de una sola página y de alcance delimitado, la centralización de los estilos en `styles.css` y el comportamiento en `app.js` es suficiente. Agrupar los estilos del sistema de diseño (tokens, layouts y componentes) en un solo archivo evita la sobrecarga de peticiones HTTP en el navegador del usuario final y mantiene un flujo de desarrollo simple y ágil.

---

## 3. Distribución de Responsabilidades por Archivo

*   **[index.html](file:///c:/Users/ACER/Desktop/Landing-Page/index.html)**: Estructura semántica base en HTML5 (uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`). Implementa la accesibilidad web requerida (atributos `alt` en imágenes y elementos `aria` interactivos).
*   **[css/styles.css](file:///c:/Users/ACER/Desktop/Landing-Page/css/styles.css)**: Centraliza la importación de fuentes desde Google Fonts, la inyección de los tokens visuales de la marca (fucsia `#D81B7A` y dorado `#C9A84C`), el reset básico de estilos, los esquemas de rejilla (Flexbox para flujos lineales y CSS Grid para matrices bidimensionales) y las reglas específicas del Modo Oscuro a través de la clase selectora `body.dark-mode`.
*   **[js/app.js](file:///c:/Users/ACER/Desktop/Landing-Page/js/app.js)**: Controla el evento del botón toggle en el Menú de navegación, aplica la alternancia de la clase del tema en el cuerpo de la página e implementa la API de persistencia `localStorage` para recordar la preferencia del usuario en futuras visitas.
