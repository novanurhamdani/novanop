Excellent. Here is the complete Product Requirements Document (PRD) for your gamified portfolio website, formatted in Markdown.

-----

# Product Requirements Document: The Gamified Developer Portfolio

  * **Author:** Gemini
  * **Version:** 1.0
  * **Date:** 2024-05-23
  * **Status:** Draft

-----

## 1\. Introduction & Overview

This document outlines the requirements for a personal portfolio website for a Software Engineer. The project's core differentiator is the integration of **gamification** to create an engaging, memorable, and interactive user experience. The website will serve as a dynamic CV, showcasing technical skills, projects, and professional experience in a format that stands out.

The technical foundation will be a modern, responsive web application built with **Next.js 15**, styled with **Tailwind CSS**, and brought to life with animations from **Framer Motion**.

### 1.1. Project Goals

  * **Primary Goal:** To create a unique and engaging portfolio that effectively showcases the owner's skills and projects to potential employers, recruiters, and collaborators.
  * **Secondary Goals:**
      * Increase user engagement and time spent on the site compared to a traditional portfolio.
      * Create a memorable brand identity for the owner as a creative and skilled software engineer.
      * Demonstrate proficiency in modern web technologies (Next.js, Tailwind CSS, Framer Motion) and thoughtful UX design.
  * **Problem Statement:** Traditional portfolios can be static and fail to capture an employer's attention. A gamified approach turns the passive act of Browse into an active, rewarding experience.

### 1.2. Target Audience

  * **Primary:** Tech Recruiters and Hiring Managers. They are often short on time and scan many portfolios. The goal is to grab their attention quickly and guide them to key information.
  * **Secondary:** Fellow Developers and Potential Collaborators. They are more likely to appreciate the technical implementation, creative design, and interactive elements.

-----

## 2\. Brand Identity: "The Code Alchemist"

To unify the gamification elements, we will adopt the brand identity of **"The Code Alchemist"**—a theme that blends the technical precision of coding with the magic of creation.

  * **Name/Title:** The Code Alchemist
  * **Tagline:** "Transmuting ideas into powerful software."
  * **Core Concept:** The portfolio is a "laboratory" or a "spellbook." The user explores this space, uncovering "potions" (projects), "spells" (skills), and "artifacts" (accomplishments). The user isn't just a visitor; they are an apprentice on a quest.
  * **Logo Concept:** A stylized Erlenmeyer flask or a potion bottle containing a binary code pattern (`0101`) or a glowing atom symbol. The logo should be simple enough to work as a favicon.

-----

## 3\. Design Guideline & UI System

The design will be a professional, dark-themed interface with vibrant, magical accents that reinforce the "Code Alchemist" brand. The UI must be clean, accessible, and fully responsive.

### 3.1. Color Palette

The theme will be dark-mode first to create a modern, focused feel.

| Role              | Color (Hex) | Tailwind Config (`tailwind.config.js`) | Notes                                             |
| ----------------- | ----------- | -------------------------------------- | ------------------------------------------------- |
| **Background** | `#0F051D`   | `background: '#0F051D'`                | Deep, dark purple. The "night sky" or "lab wall." |
| **Primary Text** | `#E0D8F0`   | `foreground: '#E0D8F0'`                | Soft, off-white lavender for readability.         |
| **Card/Surface** | `#1A0A33`   | `card: '#1A0A33'`                      | Slightly lighter surface for cards and sections.  |
| **Accent (Magic)**| `#A855F7`   | `primary: '#A855F7'`                   | Vibrant purple for buttons, links, highlights.    |
| **Accent (Gold)** | `#FBBF24`   | `secondary: '#FBBF24'`                 | Bright gold for XP bars, rewards, special icons.  |
| **Success** | `#22C55E`   | `success: '#22C55E'`                   | Green for success notifications.                  |
| **Border** | `#392A54`   | `border: '#392A54'`                    | Subtle border for cards and inputs.               |

### 3.2. Typography

We will use Google Fonts for a clean, modern, and highly readable text hierarchy.

  * **Headings:** **Montserrat** - A clean, geometric sans-serif that is modern and impactful.
  * **Body & UI Text:** **Work Sans** - A versatile sans-serif optimized for on-screen readability at all sizes.

**Implementation (`app/layout.tsx`):**

```typescript
import { Montserrat, Work_Sans } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const workSans = Work_Sans({ subsets: ['latin'], variable: '--font-work-sans' });

// In the <html> tag:
// className={`${montserrat.variable} ${workSans.variable}`}
```

**Tailwind Config (`tailwind.config.js`):**

```javascript
theme: {
  extend: {
    fontFamily: {
      heading: ['var(--font-montserrat)'],
      sans: ['var(--font-work-sans)'],
    },
  },
},
```

### 3.3. Iconography

A consistent icon style is crucial. We will use two libraries for different purposes.

  * **UI Icons:** **Feather Icons** or **Heroicons**. They offer a clean, professional, and minimalist style perfect for navigation, buttons, and links.
  * **Gamification/Badge Icons:** **Game-icons.net**. This library provides a vast collection of thematic SVG icons (potions, scrolls, gems, etc.) that perfectly match the "Code Alchemist" brand for achievement badges.

### 3.4. UI Components

All components will be built with Tailwind CSS and will be fully responsive. Key components include:

  * **Buttons:** Custom styles for primary (accent color), secondary (outline), and text-only actions. They will feature interactive `whileHover` and `whileTap` animations using Framer Motion.
  * **Cards:** Used for projects and experience. Will have subtle hover effects (e.g., lift, border glow).
  * **Modals:** For displaying project details or achievement notifications.
  * **XP Bar:** A persistent element, perhaps in the navbar or footer, showing user progress.
  * **Badge Display:** A grid or list to showcase unlocked achievements.

-----

## 4\. Information Architecture & User Flow

### 4.1. Sitemap

The website will have a single-page feel but with distinct, anchor-linked sections.

  * `/` (Home): Main entry point.
      * `#hero`: Above-the-fold intro with the tagline and a call-to-action (e.g., "Begin the Experiment").
      * `#about`: The alchemist's story (professional bio).
      * `#skills`: The "spellbook" or "potion rack" of technologies.
      * `#projects`: The "creations" or "successful experiments."
      * `#experience`: Career journey and timeline.
      * `#contact`: How to get in touch.

### 4.2. Gamified User Flow Example

1.  **Landing:** User arrives on the Hero section. A prompt "Begin Your Quest" appears. **+10 XP** for the first visit.
2.  **Scrolling:** As the user scrolls down, sections reveal with subtle `Framer Motion` animations. The persistent XP bar in the navigation fills slightly.
3.  **Exploring Skills:** The user hovers over a skill icon (e.g., React). A tooltip appears with proficiency details. Clicking it might reveal projects using that skill. **+5 XP** for each skill inspected.
4.  **Viewing Projects:** The user clicks a project card. **+20 XP**. A modal opens with project details, a link to the live demo, and the GitHub repository.
5.  **Unlocking a Badge:** After viewing 3 projects, a `Framer Motion` notification appears: "**Badge Unlocked: Curious Apprentice**". **+50 XP**. The badge is now visible in the user's "Trophy Case" section.
6.  **Deeper Engagement:** Clicking the "Live Demo" link for a project opens a new tab. **+30 XP**.
7.  **Contact:** The user reaches the contact form. After sending a message, a success animation plays. **+100 XP** and potentially a "**Messenger**" badge.

-----

## 5\. Functional Requirements & Gamification System

### 5.1. Core Features

| Feature ID | Feature Name          | Description                                                                                                                              |
| ---------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `F-01`     | Responsive Layout     | The website must be fully functional and aesthetically pleasing on all major device sizes (mobile, tablet, desktop).                       |
| `F-02`     | Project Showcase      | Display a list of projects with images/videos, descriptions, tech stacks used, and links to GitHub and live demos.                        |
| `F-03`     | Skills Display        | Visually represent skills and technologies (e.g., as icons in a grid). Hovering reveals proficiency level or years of experience.       |
| `F-04`     | Experience Timeline   | Chronologically display professional experience and education.                                                                           |
| `F-05`     | Contact Form          | A functional contact form that sends an email to the owner. Must include spam protection (e.g., Turnstile).                          |
| `F-06`     | SEO & Accessibility   | The site must have proper meta tags, semantic HTML, and ARIA attributes to ensure it is discoverable and usable by everyone.             |

### 5.2. Gamification System

This system is designed to be simple and rewarding, without being intrusive. All state will be managed client-side in `localStorage`.

#### 5.2.1. Experience Points (XP) System

| Action                                     | XP Awarded | Notes                                    |
| ------------------------------------------ | ---------- | ---------------------------------------- |
| First visit to the site (session)          | `10 XP`    | Awarded once per browser session.        |
| Scrolling to a new section                 | `5 XP`     | Awarded once per section per session.    |
| Clicking on a skill to view details        | `5 XP`     | Capped at 5 unique skill clicks.         |
| Opening a project detail modal             | `20 XP`    | Awarded per project.                     |
| Clicking a "Live Demo" or "GitHub" link    | `30 XP`    | Awarded once per unique link.            |
| Successfully sending a contact message     | `100 XP`   | The "final boss" reward.                 |
| Finding a hidden "Easter Egg"              | `75 XP`    | E.g., clicking the logo 5 times.         |

#### 5.2.2. Badges & Achievements System

| Badge Name              | Icon Concept            | Unlock Criteria                                               |
| ----------------------- | ----------------------- | ------------------------------------------------------------- |
| **Apprentice Alchemist**| A single glowing orb    | Automatically awarded on the first visit.                     |
| **Curious Explorer** | A magnifying glass      | Visit all main sections of the portfolio (\#about, \#projects, etc.). |
| **Project Inspector** | A scroll or blueprint   | View details for at least 3 different projects.               |
| **Code Cartographer** | A compass or map        | Click on at least 2 external GitHub links.                    |
| **Master of Arts** | A bubbling potion       | View all available projects.                                  |
| **The Messenger** | A carrier pigeon/raven  | Successfully send a message via the contact form.             |

-----

## 6\. Technical Requirements

### 6.1. Tech Stack

  * **Framework:** **Next.js 15** (using App Router)
  * **Language:** **TypeScript**
  * **Styling:** **Tailwind CSS**
  * **Animation:** **Framer Motion**
  * **Deployment:** Vercel

### 6.2. Recommended Folder Structure (`src` directory)

This structure promotes scalability and separation of concerns.

```
src/
├── app/
│   ├── api/                  # API routes (e.g., for contact form)
│   ├── (main)/
│   │   ├── layout.tsx        # Root layout with fonts, navbar, footer
│   │   └── page.tsx          # The main page component assembling all sections
│   └── global.css            # Global styles and Tailwind directives
├── components/
│   ├── features/             # Components with complex business logic
│   │   ├── gamification/
│   │   │   ├── XPBar.tsx
│   │   │   └── BadgeNotification.tsx
│   │   └── projects/
│   │       └── ProjectCard.tsx
│   ├── layout/               # Page structure components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Section.tsx       # Reusable section wrapper
│   └── ui/                   # Reusable, "dumb" UI elements
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Modal.tsx
│       └── Tooltip.tsx
├── hooks/
│   └── useGamification.ts    # Custom hook to manage all game logic (XP, badges)
├── lib/
│   ├── data.ts               # Static data (project details, experience)
│   └── utils.ts              # Utility functions (e.g., classname merger)
├── styles/
│   └── fonts.ts              # Font definitions (if needed separately)
└── types/
    └── index.ts              # Global TypeScript types (Project, Experience, etc.)
```

### 6.3. Animation & Interactivity

  * **Recommendation:** Use **Framer Motion**. It offers a declarative API that integrates seamlessly with React/Next.js, making it ideal for UI animations. GSAP is more powerful for complex timeline choreography but is overkill for this project's needs.
  * **Implementation:**
      * **Page/Section Transitions:** Use `motion.div` with `initial`, `animate`, and `viewport` props for elegant scroll-triggered animations.
      * **UI Feedback:** Use `whileHover` and `whileTap` props on buttons and interactive elements for immediate visual feedback.
      * **Notifications:** Use `AnimatePresence` to animate the appearance and disappearance of modals and badge notifications.

### 6.4. Responsiveness

  * **Strategy:** Mobile-first. Styles should be defined for the smallest breakpoint and expanded using Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`).
  * **Testing:** Test thoroughly on Chrome DevTools, Firefox Responsive Design Mode, and real devices if possible. Pay close attention to navigation, text wrapping, and tappable areas on mobile.

-----

## 7\. Success Metrics

  * **Engagement:**
      * Average session duration (Goal: \> 1.5 minutes).
      * Scroll depth (Goal: \> 80% of users reach the projects section).
      * Number of badges unlocked per session.
  * **Conversion:**
      * Number of clicks on GitHub/live demo links.
      * Number of contact form submissions.
  * **Qualitative Feedback:** Positive comments from recruiters, managers, or peers on the unique design and experience.