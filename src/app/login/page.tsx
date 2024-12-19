// app/login/page.tsx
"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase/config";
import { setUser } from "../../lib/features/user/userSlice";
import InputWrapper from "../../components/input/inputWrap";
import Input from "../../components/input/input";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "@/src/lib/features/auth/authSlice";

const auth = getAuth(app);

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(
        loginSuccess({
          user: userCredential.user,
          token: userCredential.user.refreshToken,
        })
      );
      setEmail("");
      setPassword("");
    } catch (err: any) {
      dispatch(loginFailure(err.message));
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <InputWrapper label="Email">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputWrapper>
        <InputWrapper label="Password">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputWrapper>
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;
