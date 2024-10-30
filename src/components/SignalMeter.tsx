import React from 'react';
import { RFReading, formatSignalStrength } from '../utils/rfCalculations';

interface SignalMeterProps {
  reading: RFReading | null;
}

const SignalMeter: React.FC<SignalMeterProps> = ({ reading }) => {
  const signalStrength = reading?.signalStrength ?? 0;
  const normalizedStrength = Math.min(Math.abs(signalStrength) / 100, 1);

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Signal Strength</h2>
      <div className="relative h-40 w-full">
        <div className="absolute bottom-0 w-full h-2 bg-gray-200 rounded">
          <div
            className="h-full bg-primary animate-signal-pulse rounded"
            style={{ width: `${normalizedStrength * 100}%` }}
          />
        </div>
        <div className="absolute bottom-4 w-full text-center text-2xl font-bold text-primary">
          {reading ? formatSignalStrength(signalStrength) : "No Signal"}
        </div>
      </div>
    </div>
  );
};

export default SignalMeter;