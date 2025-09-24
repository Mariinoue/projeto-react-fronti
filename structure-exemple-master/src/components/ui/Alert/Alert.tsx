import React from 'react';
import './Alert.css';

interface AlertProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
}

const Alert: React.FC<AlertProps> = ({ message, type = 'info' }) => {
  return (
    <div className={`alert alert-${type}`}>
      {message}
    </div>
  );
};

export default Alert;
