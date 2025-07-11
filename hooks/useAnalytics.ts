'use client';

/**
 * Custom hook for tracking events and page views with Google Analytics
 */
export const useAnalytics = () => {
  /**
   * Track a page view
   * @param url The URL of the page
   * @param title The title of the page
   */
  const trackPageView = (url: string, title: string) => {
    if (!window.gtag || process.env.NODE_ENV !== 'production') return;
    
    window.gtag('event', 'page_view', {
      page_title: title,
      page_location: url
    });
  };

  /**
   * Track a custom event
   * @param eventName Name of the event
   * @param eventParams Additional parameters for the event
   */
  const trackEvent = (eventName: string, eventParams = {}) => {
    if (!window.gtag || process.env.NODE_ENV !== 'production') return;
    
    window.gtag('event', eventName, eventParams);
  };

  return {
    trackPageView,
    trackEvent
  };
};

// Add TypeScript declaration for gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer: Array<Record<string, unknown>>;
  }
}
