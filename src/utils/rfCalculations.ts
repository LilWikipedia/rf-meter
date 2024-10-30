// Constants for MPE calculations (example values - should be adjusted based on actual standards)
const MPE_THRESHOLD = 1.0; // mW/cm²
const FREQUENCY_FACTOR = 0.2; // Example factor for frequency adjustment

export interface RFReading {
  timestamp: number;
  signalStrength: number;
  mpe: number;
}

export const calculateMPE = (signalStrength: number): number => {
  // This is a simplified MPE calculation
  // In reality, this would need to account for frequency, duration, and other factors
  return (signalStrength * FREQUENCY_FACTOR) / MPE_THRESHOLD;
};

export const isSafeExposure = (mpe: number): boolean => {
  return mpe <= 1.0; // MPE ratio <= 1.0 is considered safe
};

export const formatSignalStrength = (value: number): string => {
  return `${value.toFixed(2)} dBm`;
};

export const formatMPE = (value: number): string => {
  return `${(value * 100).toFixed(1)}%`;
};