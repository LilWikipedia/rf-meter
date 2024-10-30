import React from 'react';
import { useSignalStrength } from '../hooks/useSignalStrength';
import SignalMeter from '../components/SignalMeter';
import MPECalculator from '../components/MPECalculator';
import SignalGraph from '../components/SignalGraph';
import StatsPanel from '../components/StatsPanel';

const Index = () => {
  const { readings, currentReading } = useSignalStrength();

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">RF Meter Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SignalMeter reading={currentReading} />
          <MPECalculator reading={currentReading} />
        </div>
        
        <SignalGraph readings={readings} />
        <StatsPanel readings={readings} />
      </div>
    </div>
  );
};

export default Index;