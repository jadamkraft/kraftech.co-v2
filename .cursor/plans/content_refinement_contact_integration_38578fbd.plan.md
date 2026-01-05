---
name: Content Refinement Contact Integration
overview: Update hero section copy to broaden appeal, enhance case study with live platform link, update impact text, and replace footer email link with a Formspree contact form using brutalist styling.
todos:
  - id: update-hero-copy
    content: Update Hero.tsx sub-headline from 'non-profits' to 'mission-critical sectors'
    status: completed
  - id: update-case-study-impact
    content: Update CaseStudy.tsx IMPACT text to focus on capability/capacity rather than current volume
    status: completed
  - id: add-platform-link
    content: Add 'VISIT LIVE PLATFORM' button with ExternalLink icon to CaseStudy.tsx linking to https://digitalhearth.care
    status: completed
  - id: create-contact-form
    content: Replace Footer.tsx email link with Formspree contact form using useForm hook and brutalist styling
    status: completed
  - id: implement-form-styling
    content: Apply brutalist styling to form inputs, labels, and submit button (transparent bg, 2px borders, monospace labels, orange hover)
    status: completed
    dependencies:
      - create-contact-form
  - id: add-form-success-state
    content: Implement success state displaying 'Message Transmitted.' after form submission
    status: completed
    dependencies:
      - create-contact-form
---

# Phase 2: Content

Refinement & Contact Integration

## Overview

Update content to broaden appeal beyond non-profits, refine case study messaging, and integrate a functional Formspree contact form with brutalist styling.

## Task 1: Content Updates

### 1.1 Update Hero Section

**File:** [`src/components/Hero.tsx`](src/components/Hero.tsx)

- Update line 10: Change sub-headline from `"Forward deployed engineering for non-profits."` to `"Forward deployed engineering for mission-critical sectors."`
- Keep the rest of the text unchanged ("High-level architecture...")

### 1.2 Update Case Study Section

**File:** [`src/components/CaseStudy.tsx`](src/components/CaseStudy.tsx)**1.2.1 Add Live Platform Link:**

- After the IMPACT section (after line 61, before closing the card div), add a new div section with a button/link
- Button text: `[ VISIT LIVE PLATFORM ]`
- Link to: `https://digitalhearth.care`
- Include Lucide `ExternalLink` icon
- Style: Brutalist aesthetic matching the design system (border-2, font-mono, etc.)
- Open link in new tab (`target="_blank" rel="noopener noreferrer"`)

**1.2.2 Update Impact Text:**

- Replace line 59-61 text from:
- `"Deployed for a non-profit crisis response organization, The Digital Hearth processes thousands of voice interactions daily, converting spoken requests into actionable workflows while maintaining strict HIPAA compliance. The system operates with zero-downtime deployments and provides complete auditability for regulatory requirements."`
- To:
- `"Architected to process thousands of voice interactions daily, converting spoken requests into actionable workflows while maintaining strict HIPAA compliance. The system is built for zero-downtime deployments and provides complete auditability for regulatory requirements."`

## Task 2: Formspree Contact Form

**File:** [`src/components/Footer.tsx`](src/components/Footer.tsx)

### 2.1 Install Dependency

- **Note:** User will run `npm install @formspree/react` separately

### 2.2 Replace Contact Section

- Remove the simple email link (`contact@kraftech.co` link) from the CONNECT section
- Replace with a functional Formspree contact form

### 2.3 Form Implementation Details

**2.3.1 Form Structure:**

- Use `useForm` hook from `@formspree/react`
- Form ID: `"YOUR_FORM_ID"` (placeholder string for user to replace later)
- Fields:
- Name (text input)
- Email (email input)
- Project Brief (textarea)

**2.3.2 Brutalist Styling:**

- **Input/Textarea fields:**
- Classes: `bg-transparent`, `border-2 border-stone-900`, `p-3`, `rounded-none`
- Focus state: `ring-0`, `bg-stone-200` (subtle highlight)
- Full width within container
- **Labels:**
- Uppercase text
- `font-mono` (monospace)
- `text-xs`
- `mb-1`
- **Submit Button:**
- `bg-stone-900`
- `text-stone-50`
- Hover: `bg-orange-600`
- `font-mono`
- `border-2 border-stone-900`
- `px-8 py-3` (or similar padding)

**2.3.3 Success State:**

- Display "Message Transmitted." upon successful submission
- Clean, minimal styling matching the brutalist aesthetic
- Use Formspree's success state from `useForm` hook

**2.3.4 Layout:**

- Maintain the existing grid layout structure
- Form should fit within the CONNECT section (right column on desktop)
- Ensure responsive design (stacks on mobile)

### 2.4 Imports

- Import `useForm` from `@formspree/react`
- Import `ExternalLink` from `lucide-react` (for CaseStudy button)

## Implementation Notes

- All styling must maintain the "Monastic Utility" / "Refined Brutalism" aesthetic
- No rounded corners (except where explicitly overridden - use `rounded-none`)
- 2px borders throughout (`border-2`)
- Monospace font for labels and buttons
- Sans-serif (Inter) for body text
- Color palette: stone-50, stone-900, orange-600

## Files to Modify

1. [`src/components/Hero.tsx`](src/components/Hero.tsx) - Update hero sub-headline