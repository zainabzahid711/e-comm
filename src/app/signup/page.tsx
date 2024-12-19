// app/signup/page.tsx
"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase/config";
import {
  setLoading,
  setUser,
  setError,
  setCredentials,
} from "../../lib/features/user/userSlice";
import InputWrapper from "../../components/input/inputWrap";
import Input from "../../components/input/input";

import { RootState } from "@/src/lib/store";

const auth = getAuth(app);

const SignupPage = () => {
  const dispatch = useDispatch();
  const { email, password, error, loading } = useSelector(
    (state: RootState) => state.user
  );

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(setLoading(true));

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email!,
        password!
      );
      dispatch(
        setUser({
          email: userCredential.user.email!,
          uid: userCredential.user.uid,
        })
      );
      dispatch(setLoading(false));
    } catch (err: any) {
      dispatch(setError(err.message));
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    // If there is an error, reset it when the user starts typing
    if (error) {
      dispatch(setError(null));
    }
  }, [email, password, dispatch, error]);

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <InputWrapper label="Email">
          <Input
            type="email"
            value={email || ""}
            onChange={(e) =>
              dispatch(
                setCredentials({ email: e.target.value, password: password! })
              )
            }
            required
          />
        </InputWrapper>
        <InputWrapper label="Password">
          <Input
            type="password"
            value={password || ""}
            onChange={(e) =>
              dispatch(
                setCredentials({ password: e.target.value, email: email! })
              )
            }
            required
          />
        </InputWrapper>
        <button type="submit">{loading ? "Signing up.." : "sign up"}</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignupPage;
