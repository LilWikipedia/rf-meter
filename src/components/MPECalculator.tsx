import React from 'react';
import { RFReading, formatMPE, isSafeExposure } from '../utils/rfCalculations';

interface MPECalculatorProps {
  reading: RFReading | null;
}

const MPECalculator: React.FC<MPECalculatorProps> = ({ reading }) => {
  const mpe = reading?.mpe ?? 0;
  const isSafe = isSafeExposure(mpe);

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">MPE Level</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">
            {reading ? formatMPE(mpe) : "N/A"}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-white ${
              isSafe ? "bg-safe" : "bg-warning"
            }`}
          >
            {isSafe ? "Safe" : "Warning"}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`h-full rounded-full transition-all duration-300 ${
              isSafe ? "bg-safe" : "bg-warning"
            }`}
            style={{ width: `${Math.min(mpe * 100, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default MPECalculator;