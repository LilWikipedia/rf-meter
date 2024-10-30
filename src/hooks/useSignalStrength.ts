import { useState, useEffect } from 'react';
import { RFReading, calculateMPE } from '../utils/rfCalculations';

export const useSignalStrength = () => {
  const [readings, setReadings] = useState<RFReading[]>([]);
  const [currentReading, setCurrentReading] = useState<RFReading | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRFStrength = async () => {
      try {
        const response = await fetch('http://localhost:3001/rf-strength');
        if (!response.ok) {
          throw new Error('Failed to fetch RF strength');
        }
        const data = await response.json();
        
        const newReading: RFReading = {
          timestamp: Date.now(),
          signalStrength: data.rfStrength,
          mpe: calculateMPE(Math.abs(data.rfStrength)),
        };

        setCurrentReading(newReading);
        setReadings(prev => [...prev.slice(-50), newReading]); // Keep last 50 readings
        setError(null);
      } catch (err) {
        setError('Failed to connect to RF meter. Please ensure the backend server is running.');
        console.error('Error fetching RF strength:', err);
      }
    };

    // Fetch data every second
    const interval = setInterval(fetchRFStrength, 1000);

    return () => clearInterval(interval);
  }, []);

  return { readings, currentReading, error };
};