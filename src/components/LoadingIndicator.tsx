import React from 'react';

interface LoadingIndicatorProps {
  message?: string;
  height?: string;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ 
  message = 'Loading...', 
  height = 'h-20' 
}) => {
  return (
    <div className={`flex items-center justify-center ${height}`}>
      <div className="animate-pulse text-win95-text">{message}</div>
    </div>
  );
};

export default LoadingIndicator;