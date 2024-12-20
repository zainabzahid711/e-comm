"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "../../lib/hooks/useAuth"; // Importing the custom hook
import AuthForm from "../../components/auth/authForm";
// import { useRouter } from "next/router";

const Login = () => {
  const { email, password, loading, error, login } = useAuth(); // Using the hook

  useEffect(() => {
    if (error) {
      // Optionally handle errors or reset them
    }
  }, [email, password, error]);

  return (
    <AuthForm
      title="Login"
      onSubmit={login}
      loading={loading}
      error={error}
      fields={[
        { label: "Email", name: "email", type: "email" },
        { label: "Password", name: "password", type: "password" },
      ]} // Explicitly specify fields for login
    />
  );
};

export default Login;
