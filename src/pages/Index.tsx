import React from 'react';
import { useSignalStrength } from '../hooks/useSignalStrength';
import SignalMeter from '../components/SignalMeter';
import MPECalculator from '../components/MPECalculator';
import SignalGraph from '../components/SignalGraph';
import StatsPanel from '../components/StatsPanel';

const Index = () => {
  const { readings, currentReading } = useSignalStrength();

  return (
    <div className="min-h-screen bg-win95-bg p-4 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-win95-window p-2 shadow-win95-out">
          <div className="bg-win95-title px-2 py-1 text-white font-bold mb-2" style={{ background: 'linear-gradient(90deg, #000080, #1084d0)' }}>
            RF Meter Dashboard
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            <div className="bg-win95-window p-2 shadow-win95-out">
              <SignalMeter reading={currentReading} />
            </div>
            <div className="bg-win95-window p-2 shadow-win95-out">
              <MPECalculator reading={currentReading} />
            </div>
          </div>
          
          <div className="space-y-6 p-4">
            <div className="bg-win95-window p-2 shadow-win95-out">
              <SignalGraph readings={readings} />
            </div>
            <div className="bg-win95-window p-2 shadow-win95-out">
              <StatsPanel readings={readings} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;