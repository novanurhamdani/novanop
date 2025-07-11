'use client';

import Script from 'next/script';

interface GoogleAnalyticsProps {
  measurementId?: string;
}

/**
 * Google Analytics component that adds GA4 tracking to the site
 * Only loads in production environment
 * 
 * Usage:
 * 1. Add your GA4 Measurement ID to .env.local as NEXT_PUBLIC_GA_MEASUREMENT_ID
 * 2. Import and add this component to your root layout
 * 3. Track events using the useAnalytics hook
 */
const GoogleAnalytics = ({ measurementId }: GoogleAnalyticsProps) => {
  // Get measurement ID from props or environment variable
  const gaId = measurementId || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  
  // Only render scripts in production and if measurement ID exists
  if (process.env.NODE_ENV !== 'production' || !gaId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
