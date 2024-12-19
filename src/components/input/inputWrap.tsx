// components/InputWrapper.tsx
import React from "react";

interface InputWrapperProps {
  label: string;
  children: React.ReactNode;
}

const InputWrapper: React.FC<InputWrapperProps> = ({ label, children }) => {
  return (
    <div>
      <label>{label}</label>
      {children}
    </div>
  );
};

export default InputWrapper;
