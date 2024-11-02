import { useEffect, useState } from "react";

export function useMaintenanceMode() {
  const [isMaintenance, setIsMaintenance] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true") {
      setIsMaintenance(true);
    }
  }, []);

  return { isMaintenance, isClient };
}
