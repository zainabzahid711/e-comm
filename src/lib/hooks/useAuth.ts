import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { setUser, setError, setLoading } from "../features/user/userSlice";
import { RootState } from "../store";
import { app } from "../../firebase/config";
import { useRouter } from "next/navigation"; // Import useRouter from next/router

const auth = getAuth(app);

export const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const router = useRouter(); // Use the useRouter hook for navigation

  const handleAuth = async (
    authAction: () => Promise<void>, // Generic action (login/signup)
    successRedirect: string
  ) => {
    try {
      dispatch(setLoading(true));
      await authAction(); // Perform the authentication action
      router.push(successRedirect); // Redirect to the desired page
    } catch (err: unknown) {
      if (err instanceof Error) {
        dispatch(setError(err.message));
      } else {
        dispatch(setError("An unknown error occurred"));
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleAuth(async () => {
      dispatch(setLoading(true));
      try {
        const { email, password } = user;
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        dispatch(
          setUser({
            email: userCredential.user.email!,
            uid: userCredential.user.uid,
          })
        );
        dispatch(setLoading(false));
        // if (router) router.push("/home");
      } catch (err: unknown) {
        if (err instanceof Error) {
          dispatch(setError(err.message));
        } else {
          dispatch(setError("An unknown error occurred"));
        }
      } finally {
        dispatch(setLoading(false));
      }
    }, "/home");
  };

  const signup = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));
    await handleAuth(async () => {
      try {
        const { email, password, confirmPassword, name } = user;
        if (password !== confirmPassword) {
          dispatch(setError("Passwords do not match"));
          dispatch(setLoading(false));
          return;
        }
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (name) {
          await updateProfile(userCredential.user, { displayName: name });
        }
        dispatch(
          setUser({
            email: userCredential.user.email!,
            uid: userCredential.user.uid,
          })
        );
        // Update profile with additional fields like name
        if (name) {
          await updateProfile(userCredential.user, { displayName: name });
        }
        dispatch(setLoading(false));
        // if (router) router.push("/home");
      } catch (err: unknown) {
        if (err instanceof Error) {
          dispatch(setError(err.message));
        } else {
          dispatch(setError("An unknown error occurred"));
        }
      } finally {
        dispatch(setLoading(false));
      }
    }, "/home");
  };

  return {
    ...user,
    login,
    signup,
  };
};
