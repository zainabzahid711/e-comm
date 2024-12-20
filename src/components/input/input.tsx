// components/auth/AuthInput.tsx
import React from "react";

interface AuthInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
}

const AuthInput: React.FC<AuthInputProps> = ({
  label,
  type,
  value,
  onChange,
  required = false,
  error,
}) => {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        className={`border bg-[#6497b1] text-black rounded-3xl p-5 w-96 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={!!error}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AuthInput;
