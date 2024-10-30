import { useState, useEffect } from 'react';
import { RFReading, calculateMPE } from '../utils/rfCalculations';
import { useQuery } from '@tanstack/react-query';

const fetchRFStrength = async (): Promise<number> => {
  const response = await fetch('http://localhost:3001/rf-strength');
  const data = await response.json();
  return data.rfStrength;
};

export const useSignalStrength = () => {
  const [readings, setReadings] = useState<RFReading[]>([]);
  const [currentReading, setCurrentReading] = useState<RFReading | null>(null);

  const { data: rfStrength } = useQuery({
    queryKey: ['rfStrength'],
    queryFn: fetchRFStrength,
    refetchInterval: 1000, // Fetch every second
    retry: true,
    retryDelay: 1000,
  });

  useEffect(() => {
    if (typeof rfStrength === 'number') {
      const newReading: RFReading = {
        timestamp: Date.now(),
        signalStrength: rfStrength,
        mpe: calculateMPE(Math.abs(rfStrength)),
      };

      setCurrentReading(newReading);
      setReadings(prev => [...prev.slice(-50), newReading]); // Keep last 50 readings
    }
  }, [rfStrength]);

  return { readings, currentReading };
};