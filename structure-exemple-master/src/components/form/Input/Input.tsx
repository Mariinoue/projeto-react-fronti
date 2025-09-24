import React from 'react';
import './Input.css';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}

export const Input: React.FC<InputProps> = ({ value, onChange, placeholder, type = 'text' }) => (
  <input
    className="custom-input"
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder={placeholder}
    type={type}
  />
);
