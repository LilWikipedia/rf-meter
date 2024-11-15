import React from 'react';
import { RFReading, formatSignalStrength } from '../utils/rfCalculations';

interface SignalMeterProps {
  reading: RFReading | null;
}

const SignalMeter: React.FC<SignalMeterProps> = ({ reading, isLoading, error }) => {
  if (error) {
    throw error;
  }

  if (isLoading) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold text-win95-text mb-4">Signal Strength</h2>
        <div className="flex items-center justify-center h-40">
          <div className="animate-pulse text-win95-text">Loading...</div>
        </div>
      </div>
    );
  }
  const signalStrength = reading?.signalStrength ?? 0;
  const normalizedStrength = Math.min(Math.abs(signalStrength) / 100, 1);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-win95-text mb-4">Signal Strength</h2>
      <div className="relative h-40 w-full">
        <div className="absolute bottom-0 w-full h-2.5 bg-win95-window shadow-win95-in">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${normalizedStrength * 100}%` }}
          />
        </div>
        <div className="absolute bottom-8 w-full text-center text-2xl font-bold text-win95-text">
          {reading ? formatSignalStrength(signalStrength) : "No Signal"}
        </div>
      </div>
    </div>
  );
};

export default React.memo(SignalMeter);