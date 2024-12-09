// src/components/UpdateIntervalSettings.tsx
import React from 'react';

interface UpdateIntervalSettingsProps {
  interval: number;
  onIntervalChange: (interval: number) => void;
}

const UpdateIntervalSettings: React.FC<UpdateIntervalSettingsProps> = ({
  interval,
  onIntervalChange,
}) => {
  return (
    <div className="absolute top-4 right-4 flex items-center gap-2 bg-win95-window p-2 shadow-win95-out">
      <label htmlFor="updateInterval" className="text-sm text-win95-text">
        Update Rate (ms):
      </label>
      <select
        id="updateInterval"
        value={interval}
        onChange={(e) => onIntervalChange(Number(e.target.value))}
        className="bg-white border border-win95-border px-2 py-1 text-sm shadow-win95-in"
      >
        <option value={100}>100</option>
        <option value={500}>500</option>
        <option value={1000}>1000</option>
        <option value={2000}>2000</option>
        <option value={5000}>5000</option>
      </select>
    </div>
  );
};

export default UpdateIntervalSettings;
