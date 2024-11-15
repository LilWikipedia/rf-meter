import React from 'react';
import { RFReading, formatMPE, isSafeExposure } from '../utils/rfCalculations';

interface MPECalculatorProps {
  reading: RFReading | null;
}

const MPECalculator: React.FC<MPECalculatorProps> = ({ reading, isLoading, error }) => {
  if (error) {
    throw error;
  }

  if (isLoading) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold text-win95-text mb-4">MPE Level</h2>
        <div className="flex items-center justify-center h-20">
          <div className="animate-pulse text-win95-text">Loading...</div>
        </div>
      </div>
    );
  }
  const mpe = reading?.mpe ?? 0;
  const isSafe = isSafeExposure(mpe);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-win95-text mb-4">MPE Level</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-win95-text">
            {reading ? formatMPE(mpe) : "N/A"}
          </span>
          <span
            className={`px-3 py-1 shadow-win95-out text-win95-text ${
              isSafe ? "bg-safe" : "bg-warning"
            }`}
          >
            {isSafe ? "Safe" : "Warning"}
          </span>
        </div>
        <div className="w-full bg-win95-window shadow-win95-in h-2.5">
          <div
            className={`h-full transition-all duration-300 ${
              isSafe ? "bg-safe" : "bg-warning"
            }`}
            style={{ width: `${Math.min(mpe * 100, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(MPECalculator);