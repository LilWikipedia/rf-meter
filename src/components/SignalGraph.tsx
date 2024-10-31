import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { RFReading } from '../utils/rfCalculations';

interface SignalGraphProps {
  readings: RFReading[];
}

const SignalGraph: React.FC<SignalGraphProps> = ({ readings }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-win95-text mb-4">Signal History</h2>
      <div className="h-[200px] w-full bg-white shadow-win95-in p-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={readings}>
            <XAxis
              dataKey="timestamp"
              tickFormatter={(timestamp) => new Date(timestamp).toLocaleTimeString()}
              interval="preserveStartEnd"
              stroke="#000080"
            />
            <YAxis stroke="#000080" />
            <Tooltip
              labelFormatter={(timestamp) => new Date(timestamp).toLocaleTimeString()}
              formatter={(value: number) => [`${value.toFixed(2)} dBm`, "Signal Strength"]}
              contentStyle={{
                backgroundColor: '#c0c0c0',
                border: '2px solid #404040',
                borderTop: '2px solid #ffffff',
                borderLeft: '2px solid #ffffff',
              }}
            />
            <Line
              type="monotone"
              dataKey="signalStrength"
              stroke="#000080"
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