import { useState, useEffect } from 'react';
import { RFReading, calculateMPE } from '../utils/rfCalculations';

export const useSignalStrength = () => {
  const [readings, setReadings] = useState<RFReading[]>([]);
  const [currentReading, setCurrentReading] = useState<RFReading | null>(null);

  useEffect(() => {
    // Simulate signal readings
    const interval = setInterval(() => {
      // In a real implementation, this would come from actual RF hardware
      const signalStrength = -Math.random() * 100; // Simulate dBm readings
      const newReading: RFReading = {
        timestamp: Date.now(),
        signalStrength,
        mpe: calculateMPE(Math.abs(signalStrength)),
      };

      setCurrentReading(newReading);
      setReadings(prev => [...prev.slice(-50), newReading]); // Keep last 50 readings
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { readings, currentReading };
};