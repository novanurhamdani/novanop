import { GoogleAnalytics } from "@next/third-parties/google";

export const GA_MEASUREMENT_ID = "G-8D54ZR3Q3T";

export default function Analytics() {
  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}
