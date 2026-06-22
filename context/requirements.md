REQUERIMIENTOS DEL PROYECTO

LANDING PAGE RESPONSIVA – SUPLIDORA MOSS

Proyecto:

Desarrollo de Landing Page Responsiva para Suplidora MOSS

Versión:

1.0

Fecha:

Junio 2026

DESCRIPCIÓN DEL NEGOCIO

Suplidora MOSS es un negocio dedicado a la venta de esmaltes, productos de belleza y cosméticos para mujeres. La Landing Page tendrá como objetivo presentar la marca, exhibir sus productos principales, generar confianza y facilitar el contacto con potenciales clientes.

OBJETIVO DEL PROYECTO

Desarrollar una Landing Page moderna, accesible y completamente responsiva que permita:



Presentar la marca Suplidora MOSS.

Mostrar las principales categorías de productos.

Destacar promociones y beneficios.

Facilitar el contacto con clientes.

Cumplir todos los requisitos académicos del Laboratorio #1 de Programación en Ambiente Web I.

REQUERIMIENTOS FUNCIONALES

RF-01: Página de Inicio

La página deberá mostrar un banner principal (Hero Section) con:

Nombre de la empresa.

Eslogan comercial.

Imagen destacada relacionada con cosméticos.

Botón de llamada a la acción.

RF-02: Menú de Navegación

La página deberá incluir un menú con enlaces a:

Inicio

Productos

Beneficios

Testimonios

Contacto

RF-03: Sección de Productos

La página deberá mostrar categorías principales:

Esmaltes

Maquillaje

Cuidado facial

Accesorios de belleza

Cada categoría deberá incluir:



Imagen

Nombre

Descripción breve

RF-04: Sección de Beneficios

La página deberá destacar:

Productos de calidad.

Amplio catálogo.

Atención personalizada.

Precios competitivos.

RF-05: Sección de Testimonios

La página deberá mostrar testimonios de clientes utilizando tarjetas informativas.

RF-06: Sección de Contacto

La página deberá incluir:

Nombre del negocio.

Número telefónico.

Correo electrónico.

Redes sociales.

Formulario de contacto.

RF-07: Footer

La página deberá incluir:

Derechos reservados.

Información de contacto.

Redes sociales.

RF-08: Modo Oscuro

El usuario podrá activar o desactivar el modo oscuro.

RF-09: Persistencia de Preferencias

La preferencia del modo oscuro deberá almacenarse mediante localStorage y mantenerse después de recargar la página.

REQUERIMIENTOS TÉCNICOS

RT-01: HTML5 Semántico

La estructura deberá utilizar:



header

nav

main

section

article

aside

footer

RT-02: CSS Externo

Todo el diseño deberá implementarse en archivos CSS externos.

RT-03: Flexbox

Se utilizará Flexbox para:



Barra de navegación.

Distribución de tarjetas.

Sección de beneficios.

RT-04: CSS Grid

Se utilizará Grid para:



Galería de productos.

Distribución de testimonios.

RT-05: Responsividad

La página deberá funcionar correctamente en:



Móviles

Tablets

Escritorio

Breakpoints recomendados:



768px

1024px

RT-06: Frameworks

No se permitirá el uso de:



Bootstrap

Tailwind CSS

Bulma

Foundation

Ningún framework CSS externo

REQUERIMIENTOS DE ACCESIBILIDAD

RA-01

Todas las imágenes deberán incluir atributo alt descriptivo.

RA-02

Todos los botones y enlaces deberán ser accesibles mediante teclado.

RA-03

Los elementos interactivos personalizados deberán incluir atributos ARIA cuando corresponda.

RA-04

El contraste de colores deberá cumplir la relación mínima 4.5:1.

RA-05

El foco de navegación deberá ser visible mediante CSS ().

REQUERIMIENTOS DE DISEÑO

Paleta sugerida:



Rosa fucsia

Blanco

Negro

Dorado suave

Tipografías:



Poppins

Montserrat

Open Sans

Estilo visual:



Femenino

Profesional

Elegante

Moderno

ESTRUCTURA PROPUESTA DEL SITIO

HEADER

│

├── Logo

├── Menú de navegación

│

MAIN

│

├── Hero Section

├── Productos

├── Beneficios

├── Testimonios

├── Contacto

│

FOOTER

│

├── Redes Sociales

├── Información de Contacto

└── Derechos Reservados

ESTRUCTURA DE CARPETAS

laboratorio-01/

│

├── index.html

│

├── css/

│ └── styles.css

│

├── js/

│ └── app.js

│

├── img/

│ ├── hero.jpg

│ ├── esmaltes.jpg

│ ├── maquillaje.jpg

│ ├── facial.jpg

│ └── accesorios.jpg

CRITERIOS DE ACEPTACIÓN

CA-01

La página valida correctamente en el validador W3C.

CA-02

La página utiliza HTML5 semántico correctamente.

CA-03

Se utiliza Flexbox al menos una vez.

CA-04

Se utiliza CSS Grid al menos una vez.

CA-05

La página es completamente responsiva.

CA-06

La página cumple requisitos básicos WCAG 2.1 Nivel A.

CA-07

La funcionalidad de localStorage funciona correctamente.

CA-08

No existen errores en consola.

CA-09

La estructura del proyecto cumple con las especificaciones del laboratorio.

CA-10

El estudiante puede justificar técnicamente cada decisión durante la defensa oral.

TECNOLOGÍAS A UTILIZAR

HTML5

CSS3

JavaScript ES6

localStorage

Flexbox

CSS Grid