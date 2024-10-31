// Constants for MPE calculations (adjusted for mobile device RF measurements)
const MPE_THRESHOLD = 0.08; // Adjusted threshold for mobile RF readings
const FREQUENCY_FACTOR = 0.001; // Reduced factor for more realistic readings

export interface RFReading {
  timestamp: number;
  signalStrength: number;
  mpe: number;
}

export const calculateMPE = (signalStrength: number): number => {
  // Convert dBm to mW/cm² and calculate MPE ratio
  const powerDensity = Math.pow(10, (signalStrength - 30) / 10) / 100;
  return (powerDensity * FREQUENCY_FACTOR) / MPE_THRESHOLD;
};

export const isSafeExposure = (mpe: number): boolean => {
  return mpe <= 1.0;
};

export const formatSignalStrength = (value: number): string => {
  return `${value.toFixed(2)} dBm`;
};

export const formatMPE = (value: number): string => {
  return `${(value * 100).toFixed(3)}%`;
};