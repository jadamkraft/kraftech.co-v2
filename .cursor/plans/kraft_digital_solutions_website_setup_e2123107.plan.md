---
name: Kraft Digital Solutions Website Setup
overview: Initialize a Vite React TypeScript project with Tailwind CSS configured for the "Monastic Utility" design system, create comprehensive README documentation, and scaffold the main App component with all required sections.
todos:
  - id: init-project
    content: Initialize Vite React TypeScript project and install all dependencies (react-router-dom, lucide-react, tailwindcss)
    status: completed
  - id: config-tailwind
    content: Configure tailwind.config.js with custom colors (stone-50, stone-900, orange-600) and font families (JetBrains Mono, Inter)
    status: completed
    dependencies:
      - init-project
  - id: setup-global-styles
    content: Configure index.css with Tailwind directives, default background/text colors, and Google Fonts imports
    status: completed
    dependencies:
      - init-project
  - id: update-html
    content: Update index.html with Google Fonts links and proper meta tags
    status: completed
    dependencies:
      - init-project
  - id: create-readme
    content: Create comprehensive README.md documenting architecture, design system, and development workflow
    status: completed
  - id: scaffold-app
    content: Create App.tsx with all section placeholders (Navbar, Hero, Philosophy, CaseStudy, Services, Footer)
    status: completed
    dependencies:
      - config-tailwind
      - setup-global-styles
  - id: create-components
    content: Create individual component files in src/components/ with placeholder content demonstrating the design aesthetic
    status: completed
    dependencies:
      - scaffold-app
---

# Kraft Digital Solutions Website Setup Plan

## Overview

Build a single-page agency website for Kraft Digital Solutions (kraftech.co) using React, TypeScript, and Tailwind CSS with a "Monastic Utility" / "Refined Brutalism" aesthetic.

## Phase 1: Project Initialization

### 1.1 Initialize Vite React TypeScript Project

- Run `npm create vite@latest . -- --template react-ts` to initialize the project
- Install dependencies: `npm install`
- Install additional dependencies:
- `tailwindcss postcss autoprefixer` (dev dependencies)
- `react-router-dom` (for routing structure, even if single-page)
- `lucide-react` (for icons)

### 1.2 Configure Tailwind CSS

- Initialize Tailwind: `npx tailwindcss init -p`
- Configure `tailwind.config.js`:
- Extend theme with custom colors:
    - `stone-50` (background)
    - `stone-900` (foreground/text/borders)
    - `orange-600` (accent)
- Configure font families:
    - `'jetbrains-mono'` for headers
    - `'inter'` for body text
- Set default border width to `2px` for consistency

### 1.3 Global Styles Configuration

- Update `src/index.css`:
- Import Tailwind directives
- Set default background: `bg-stone-50`
- Set default text color: `text-stone-900`
- Import Google Fonts via `@import` or configure in `index.html`
- Remove default browser styles (reset/normalize)

### 1.4 HTML Configuration

- Update `index.html`:
- Add Google Fonts links for 'JetBrains Mono' and 'Inter'
- Set proper meta tags for SEO
- Configure title: "Kraft Digital Solutions"

## Phase 2: Documentation

### 2.1 Create README.md

Document the following:

- **Project Overview**: Agency website for Kraft Digital Solutions
- **Tech Stack**: React (Vite), TypeScript, Tailwind CSS, Lucide React, React Router DOM
- **Design System**: "Monastic Utility" / "Refined Brutalism"
- Color palette (stone-50, stone-900, orange-600)
- Typography (JetBrains Mono for headers, Inter for body)
- Design principles (2px borders, no shadows, flat design)
- **Component Architecture**: Single-page structure with sections
- **Deployment**: Cloudflare Pages configuration
- **Development Workflow**: Setup instructions, scripts, and conventions

## Phase 3: Component Scaffolding

### 3.1 Create App.tsx Structure

Scaffold the main component with placeholder sections:

- **Navbar Component**: Minimal navigation with logo (monospace) and links
- **Hero Section**: "Resilient AI for the Front Lines" headline with brutalist typography
- **Philosophy Section**: Text-heavy manifesto about "The Monastic/Forward Deployed Mindset"
- **Case Study Section**: Technical card for "The Digital Hearth" (HIPAA-compliant voice-to-action app)
- **Services Section**: Grid of technical capability cards:
- Rapid Prototyping
- White-Label Vaults
- On-Site Crisis Ops
- **Footer Component**: Simple connection points

### 3.2 Component Structure

- Use functional components with TypeScript
- Apply design tokens consistently (borders, colors, typography)
- Create placeholder content that demonstrates the aesthetic
- Ensure all sections follow the "technical spec sheet" card style

## Phase 4: File Structure

```javascript
kraftech.co/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── src/
    ├── index.css
    ├── main.tsx
    ├── App.tsx
    └── components/
        ├── Navbar.tsx
        ├── Hero.tsx
        ├── Philosophy.tsx
        ├── CaseStudy.tsx
        ├── Services.tsx
        └── Footer.tsx
```



## Design Token Implementation Details

### Colors

- Background: `bg-stone-50` (paper/natural)
- Foreground: `text-stone-900` (stark charcoal)
- Accent: `text-orange-600` / `bg-orange-600` (international safety orange)
- Borders: `border-2 border-stone-900` (solid 2px borders)

### Typography

- Headers: `font-['JetBrains_Mono']` or configured font family
- Body: `font-['Inter']` or configured font family

### UI Principles

- No drop shadows
- No rounded corners (or minimal if needed)
- Flat design