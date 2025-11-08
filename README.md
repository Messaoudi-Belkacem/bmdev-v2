This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Structure Overview

project-root/
├─ `package.json`                # scripts: start, build, test, lint
├─ `tsconfig.json`
├─ `public/`
│  └─ `index.html`
└─ `src/`
├─ `index.tsx`                # app bootstrap, ReactDOM.render
├─ `App.tsx`                  # single page routing via sections + context (theme)
├─ `app.css`                  # global styles / CSS variables
├─ `assets/`
│  ├─ `images/`               # project thumbnails, avatar
│  └─ `icons/`
├─ `components/`
│  ├─ `Header/`
│  │  ├─ `Header.tsx`         # sticky nav, smooth scroll, theme toggle
│  │  └─ `Header.module.css`
│  ├─ `Hero/`
│  │  └─ `Hero.tsx`           # intro, CTA to Projects / Contact
│  ├─ `Projects/`
│  │  ├─ `Projects.tsx`       # grid of ProjectCard
│  │  └─ `ProjectCard.tsx`
│  ├─ `About/`
│  │  └─ `About.tsx`
│  ├─ `Contact/`
│  │  └─ `Contact.tsx`        # form (Netlify/emailjs/SMTP)
│  ├─ `Footer/`
│  │  └─ `Footer.tsx`
│  └─ `UI/`
│     ├─ `Modal.tsx`          # project details
│     └─ `Button.tsx`
├─ `hooks/`
│  └─ `useScrollSpy.ts`       # highlight active section
├─ `context/`
│  └─ `ThemeContext.tsx`      # dark/light
├─ `models/`
│  └─ `project.ts`            # types / interfaces
├─ `data/`
│  └─ `projects.ts`           # static project list or fetched data
└─ `tests/`
├─ `App.test.tsx`
└─ `components/Projects.test.tsx`

Example key files (templates):

`src/index.tsx`
```tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './app.css';

createRoot(document.getElementById('root')!).render(<App />);

