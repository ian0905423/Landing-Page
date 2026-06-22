---
name: moss-design
description: Design system and visual identity skill for Suplidora MOSS landing page (ISW-521 Lab 1). Use this skill whenever generating HTML, CSS, components, sections, or any visual output for the Suplidora MOSS project. Covers color palette, typography, spacing, card patterns, layout conventions, dark sections, buttons, and all UI patterns observed in the approved mockup. ALWAYS trigger this skill before writing any CSS or HTML for the MOSS project, even for small components or single sections.
---

# Suplidora MOSS — Design System

Este skill codifica el sistema visual completo de la Landing Page de Suplidora MOSS,
derivado del mockup aprobado. Toda generación de código HTML/CSS para este proyecto
debe respetar estas especificaciones sin excepción.

Antes de generar código, lee:
- `references/tokens.md` — variables CSS, tipografía, colores, espaciado
- `references/components.md` — patrones de cards, botones, nav, secciones
- `references/layout.md` — estructura de grids, breakpoints, secciones oscuras

---

## Identidad Visual en Una Frase

> Feminidad profesional: fondo blanco limpio, acentos en fucsia/magenta intenso,
> tipografía bold en títulos, cards con sombra suave, una sección oscura (negra)
> que rompe el ritmo visual y ancla la página.

---

## Decisiones de Diseño Clave

### 1. El color fucsia ES la marca
- `#D81B7A` o `#C2185B` es el color primario — botones, highlights, títulos con acento
- No suavizar hacia rosa pastel: debe ser vibrante, seguro, de alta saturación
- El dorado (`#C9A84C`) aparece solo como detalle decorativo en íconos de oferta

### 2. Fondo blanco, no gris
- El fondo base es `#FFFFFF` puro — sin `#f5f5f5` ni grises suaves
- El contraste con el fucsia debe ser máximo para cumplir WCAG 4.5:1

### 3. Tipografía: Poppins + Montserrat
- Títulos de sección: **Montserrat Bold** o **Poppins Bold**, 700 weight
- El acento en el título hero ("MOSS") va en fucsia, el resto en negro/blanco
- Cuerpo de texto: Poppins Regular 400, tamaño mínimo 14px

### 4. Sección oscura rompe el ritmo
- La sección de Beneficios/Valores tiene `background: #1A1A1A` o `#111111`
- Texto blanco, íconos en fucsia — NO usar background azul marino ni gris
- Es el único elemento dark en toda la página

### 5. Cards: sombra, sin borde duro
- Las product cards usan `box-shadow: 0 4px 15px rgba(0,0,0,0.08)`
- Border-radius: `12px` o `16px` — nunca esquinas duras
- Al hover: `transform: translateY(-4px)` + sombra más pronunciada

### 6. El hero usa imagen real con overlay de texto
- Lado izquierdo: texto + CTA sobre fondo blanco o semitransparente
- Lado derecho: imagen de modelo con fondo de splash de colores (rosa/magenta)
- Implementar con CSS Grid de 2 columnas en desktop

---

## Quick Reference

| Elemento | Valor |
|---|---|
| Color primario | `#D81B7A` |
| Color hover | `#AD1457` |
| Color dark section | `#111111` |
| Color texto principal | `#1A1A1A` |
| Color texto secundario | `#666666` |
| Color dorado acento | `#C9A84C` |
| Font títulos | Poppins 700 / Montserrat 700 |
| Font cuerpo | Poppins 400 |
| Border radius cards | `12px` |
| Sombra cards | `0 4px 15px rgba(0,0,0,0.08)` |
| Breakpoint tablet | `768px` |
| Breakpoint desktop | `1024px` |

---

## Flujo de Trabajo Recomendado

1. Leer `references/tokens.md` → pegar variables CSS en `:root`
2. Leer `references/components.md` → identificar los componentes necesarios
3. Leer `references/layout.md` → armar la estructura de la sección
4. Generar el código respetando los patrones documentados
5. Verificar: ¿el contraste fucsia/blanco cumple 4.5:1? ✓ (es ~5.2:1)
