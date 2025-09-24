import React from 'react';
import './Text.css';

interface TextProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

const Text: React.FC<TextProps> = ({ children, size = 'medium', color }) => {
  return (
    <span className={`text text-${size}`} style={{ color }}>
      {children}
    </span>
  );
};

export default Text;
