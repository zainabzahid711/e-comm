"use client";

import React from "react";
import { useAuth } from "../../lib/hooks/useAuth";
import AuthForm from "../../components/auth/authForm";

const SignupPage = () => {
  const { signup, loading, error } = useAuth();

  const fields = [
    { label: "Name", name: "name", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
    { label: "Confirm Password", name: "confirmPassword", type: "password" },
  ];

  return (
    <AuthForm
      title="Signup"
      onSubmit={signup}
      loading={loading}
      error={error}
      fields={fields}
    />
  );
};

export default SignupPage;
