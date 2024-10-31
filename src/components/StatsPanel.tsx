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
    <div className="p-4">
      <h2 className="text-xl font-bold text-win95-text mb-4">Statistics</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-win95-window p-2 shadow-win95-out">
          <div className="text-sm text-win95-text">Average</div>
          <div className="text-lg font-bold text-win95-text">{stats.avg.toFixed(2)} dBm</div>
        </div>
        <div className="bg-win95-window p-2 shadow-win95-out">
          <div className="text-sm text-win95-text">Minimum</div>
          <div className="text-lg font-bold text-win95-text">{stats.min.toFixed(2)} dBm</div>
        </div>
        <div className="bg-win95-window p-2 shadow-win95-out">
          <div className="text-sm text-win95-text">Maximum</div>
          <div className="text-lg font-bold text-win95-text">{stats.max.toFixed(2)} dBm</div>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;