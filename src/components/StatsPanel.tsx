import React from 'react';
import { RFReading } from '../utils/rfCalculations';

interface StatsPanelProps {
  readings: RFReading[];
}

const StatsPanel: React.FC<StatsPanelProps> = ({ readings }) => {
  const calculateStats = () => {
    if (readings.length === 0) return { avg: 0, min: 0, max: 0 };
    
    const signalStrengths = readings.map(r => r.signalStrength);
    return {
      avg: signalStrengths.reduce((a, b) => a + b, 0) / readings.length,
      min: Math.min(...signalStrengths),
      max: Math.max(...signalStrengths),
    };
  };

  const stats = calculateStats();

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Statistics</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-sm text-gray-500">Average</div>
          <div className="text-lg font-semibold">{stats.avg.toFixed(2)} dBm</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">Minimum</div>
          <div className="text-lg font-semibold">{stats.min.toFixed(2)} dBm</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">Maximum</div>
          <div className="text-lg font-semibold">{stats.max.toFixed(2)} dBm</div>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;