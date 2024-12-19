// components/input.tsx
import React from "react";

interface InputProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ type, value, onChange, required }) => {
  return (
    <input type={type} value={value} onChange={onChange} required={required} />
  );
};

export default Input;
