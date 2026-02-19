# Portfolio Personal

Portfolio personal construido con Astro y Tailwind CSS. Minimalista, rápido y desplegado en GitHub Pages.

**[jsalas404.github.io/miPortfolio](https://jsalas404.github.io/miPortfolio)**

---

## Secciones

- **Hero** — Presentación con simulación de terminal
- **Sobre mí** — Descripción personal y stack de tecnologías con logos SVG
- **Proyectos** — Tarjetas con proyectos destacados y otros proyectos
- **Experiencia** — Línea de tiempo con experiencia profesional
- **Contacto** — Formulario funcional via Web3Forms
- **Blog** — Artículos en Markdown con buscador y filtros por tag y fecha

---

## Stack

| Tecnología | Uso |
|---|---|
| [Astro](https://astro.build) | Framework principal |
| [Tailwind CSS v4](https://tailwindcss.com) | Estilos |
| [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography) | Estilos del blog |
| [Simple Icons](https://simpleicons.org) | Logos SVG de tecnologías |
| [Web3Forms](https://web3forms.com) | Formulario de contacto |
| [GitHub Pages](https://pages.github.com) | Despliegue |
| [GitHub Actions](https://github.com/features/actions) | CI/CD |

---

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.astro
│   ├── Hero.astro
│   ├── SobreMi.astro
│   ├── Proyectos.astro
│   ├── ProjectCard.astro
│   ├── Experiencia.astro
│   ├── Contacto.astro
│   └── Footer.astro
├── content/
│   ├── config.ts
│   └── blog/
│       └── *.md
├── data/
│   ├── projects.js
│   └── experience.js
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro
│   └── blog/
│       ├── index.astro
│       └── [slug].astro
└── styles/
    └── global.css
```

---

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Arrancar servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

---

## Añadir un post al blog

Crea un archivo `.md` en `src/content/blog/`:

```md
---
title: "Título del post"
description: "Descripción corta."
date: 2024-01-15
tags: ["Tag1", "Tag2"]
draft: false
---

Contenido en Markdown...
```

El post aparecerá automáticamente en el listado del blog.

---

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```
PUBLIC_WEB3FORMS_KEY=tu-access-key
```

Para producción, añade el secret `PUBLIC_WEB3FORMS_KEY` en **GitHub → Settings → Secrets and variables → Actions**.

---

## Despliegue

El despliegue es automático via GitHub Actions cada vez que se hace push a `master`. El workflow se encuentra en `.github/workflows/deploy.yml`.