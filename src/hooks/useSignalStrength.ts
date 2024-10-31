import { useState, useEffect } from 'react';
import { RFReading, calculateMPE } from '../utils/rfCalculations';
import { useToast } from "@/components/ui/use-toast";

export const useSignalStrength = () => {
  const [readings, setReadings] = useState<RFReading[]>([]);
  const [currentReading, setCurrentReading] = useState<RFReading | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Check if we can use the Network Information API
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      
      const updateSignalStrength = () => {
        // Get signal strength from various available APIs
        let signalStrength = 0;

        if (connection.signalStrength) {
          // Use Network Information API if available
          signalStrength = connection.signalStrength;
        } else if ('mozConnection' in navigator) {
          // Firefox-specific API
          const mozConnection = (navigator as any).mozConnection;
          if (mozConnection && mozConnection.signalStrength) {
            signalStrength = mozConnection.signalStrength;
          }
        } else {
          // Fallback: estimate based on connection type
          switch (connection.effectiveType) {
            case '4g':
              signalStrength = -65;
              break;
            case '3g':
              signalStrength = -85;
              break;
            case '2g':
              signalStrength = -95;
              break;
            default:
              signalStrength = -100;
          }
        }

        const newReading: RFReading = {
          timestamp: Date.now(),
          signalStrength: signalStrength,
          mpe: calculateMPE(Math.abs(signalStrength)),
        };

        setCurrentReading(newReading);
        setReadings(prev => [...prev.slice(-50), newReading]); // Keep last 50 readings
      };

      // Update every second
      const interval = setInterval(updateSignalStrength, 1000);

      // Listen for connection changes
      connection.addEventListener('change', updateSignalStrength);

      return () => {
        clearInterval(interval);
        connection.removeEventListener('change', updateSignalStrength);
      };
    } else {
      // Show toast if APIs are not available
      toast({
        title: "Limited Functionality",
        description: "Your device doesn't support direct RF measurements. Some features may be limited.",
        duration: 5000,
      });

      // Provide mock data for testing
      const mockInterval = setInterval(() => {
        const mockStrength = -70 - (Math.random() * 30);
        const newReading: RFReading = {
          timestamp: Date.now(),
          signalStrength: mockStrength,
          mpe: calculateMPE(Math.abs(mockStrength)),
        };

        setCurrentReading(newReading);
        setReadings(prev => [...prev.slice(-50), newReading]);
      }, 1000);

      return () => clearInterval(mockInterval);
    }
  }, []);

  return { readings, currentReading };
};