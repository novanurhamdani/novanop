# The Code Alchemist - Gamified Developer Portfolio

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

## Google Analytics Integration

This project includes Google Analytics 4 integration to track visitor interactions. To set up Google Analytics:

1. Create a Google Analytics 4 property and get your Measurement ID (format: G-XXXXXXXXXX)
2. Create a `.env.local` file in the project root with the following content:

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

3. Replace `G-XXXXXXXXXX` with your actual Google Analytics Measurement ID

### Features

- Automatically tracks page views
- Only loads in production environment to avoid polluting analytics data during development
- Custom event tracking for:
  - Project views
  - GitHub link clicks
  - Contact form submissions
  - Level-up events
  - Modal interactions

### Custom Event Tracking

To track custom events in your components, use the `useAnalytics` hook:

```jsx
import { useAnalytics } from '../hooks/useAnalytics';

function MyComponent() {
  const { trackEvent } = useAnalytics();
  
  const handleClick = () => {
    // Track a custom event
    trackEvent('button_click', { button_name: 'example' });
  };
  
  return <button onClick={handleClick}>Click Me</button>;
}
```
