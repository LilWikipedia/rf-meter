import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { RFReading } from '../utils/rfCalculations';

interface SignalGraphProps {
  readings: RFReading[];
}

const SignalGraph: React.FC<SignalGraphProps> = ({ readings }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Signal History</h2>
      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={readings}>
            <XAxis
              dataKey="timestamp"
              tickFormatter={(timestamp) => new Date(timestamp).toLocaleTimeString()}
              interval="preserveStartEnd"
            />
            <YAxis />
            <Tooltip
              labelFormatter={(timestamp) => new Date(timestamp).toLocaleTimeString()}
              formatter={(value: number) => [`${value.toFixed(2)} dBm`, "Signal Strength"]}
            />
            <Line
              type="monotone"
              dataKey="signalStrength"
              stroke="#0EA5E9"
              dot={false}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SignalGraph;