# Kraft Digital Solutions Website

Agency website for Kraft Digital Solutions (kraftech.co) - a forward deployed engineering firm specializing in resilient AI architecture and secure tools for non-profit organizations.

## Project Overview

This is a single-page application serving as both a high-end engineering portfolio and an agency landing page. The site showcases the founder's expertise as a Forward Deployed Engineer offering high-level architecture and secure AI tools for non-profits.

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React Router DOM** - Routing (configured for future expansion)

## Design System: "Monastic Utility" / "Refined Brutalism"

### Philosophy

The design aesthetic rejects modern SaaS trends (no gradients, no drop shadows, no rounded soft corners). Instead, it embraces a brutalist, technical specification sheet aesthetic that reflects the engineering-first approach of the agency.

### Color Palette

- **Background**: `bg-stone-50` (#fafaf9) - Paper/Natural
- **Foreground/Text/Borders**: `text-stone-900` (#0c0a09) - Stark Charcoal
- **Accent**: `text-orange-600` / `bg-orange-600` (#ea580c) - International Safety Orange
  - Used sparingly for CTAs and emphasis

### Typography

- **Headers**: `font-mono` (JetBrains Mono) - Monospace font implying code/raw data
- **Body**: `font-sans` (Inter) - Clean, readable sans-serif

### UI Principles

- **Borders**: All elements use solid 2px borders (`border-2 border-stone-900`)
- **No Drop Shadows**: Flat design throughout
- **No Rounded Corners**: Sharp, technical aesthetic
- **Card Layouts**: Styled like technical spec sheets with structured information
- **High Contrast**: Maximum readability and clarity

## Component Architecture

The site is structured as a single-page application with the following sections:

1. **Navbar** (`src/components/Navbar.tsx`)
   - Minimal navigation with monospace logo
   - Smooth scroll links to sections

2. **Hero Section** (`src/components/Hero.tsx`)
   - Headline: "Resilient AI for the Front Lines"
   - High-contrast, brutalist typography
   - Primary CTA button

3. **Philosophy Section** (`src/components/Philosophy.tsx`)
   - Text-heavy manifesto about "The Monastic/Forward Deployed Mindset"
   - Explains the engineering philosophy

4. **Case Study Section** (`src/components/CaseStudy.tsx`)
   - Detailed technical card showcasing "The Digital Hearth"
   - HIPAA-compliant voice-to-action app specifications
   - Technical specs and impact metrics

5. **Services Section** (`src/components/Services.tsx`)
   - Grid of technical capability cards:
     - Rapid Prototyping
     - White-Label Vaults
     - On-Site Crisis Ops
   - Each card styled as a technical spec sheet

6. **Footer** (`src/components/Footer.tsx`)
   - Simple connection points
   - Contact information

## Development Workflow

### Prerequisites

- Node.js 18+ and npm

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

### Project Structure

```
kraftech.co/
├── index.html              # HTML entry point with Google Fonts
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── README.md               # This file
└── src/
    ├── index.css           # Global styles and Tailwind directives
    ├── main.tsx            # React entry point
    ├── App.tsx             # Main app component
    └── components/
        ├── Navbar.tsx      # Navigation component
        ├── Hero.tsx        # Hero section
        ├── Philosophy.tsx  # Philosophy section
        ├── CaseStudy.tsx   # Case study section
        ├── Services.tsx    # Services section
        └── Footer.tsx      # Footer component
```

## Deployment

### Cloudflare Pages

The site is configured for deployment on Cloudflare Pages:

1. Connect your repository to Cloudflare Pages
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Node version: 18 or higher

### Environment Variables

No environment variables are currently required. All configuration is static.

## Design Token Reference

### Tailwind Configuration

The `tailwind.config.js` extends the default theme with:

- **Custom Fonts**:
  - `font-mono`: JetBrains Mono
  - `font-sans`: Inter

- **Custom Colors** (aliases):
  - `paper`: stone-50
  - `charcoal`: stone-900
  - `safety`: orange-600

- **Default Border Width**: 2px

### Global Styles

The `src/index.css` file includes:

- Tailwind base, components, and utilities
- Default border color (stone-900) for all elements
- Body defaults (background, text color, font)
- Header font family (monospace)

## Code Conventions

- **Components**: Functional components with TypeScript
- **Styling**: Tailwind utility classes only (no custom CSS files)
- **Icons**: Lucide React (import as needed)
- **Type Safety**: Strict TypeScript configuration
- **Formatting**: Follow ESLint rules

## Future Enhancements

Potential additions (not in current scope):

- Blog section for technical articles
- Detailed case study pages
- Contact form with validation
- Dark mode toggle (maintaining brutalist aesthetic)
- Animation on scroll (minimal, functional)

## License

Proprietary - Kraft Digital Solutions

