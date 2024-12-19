// src/components/auth/Logout.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "@/src/lib/features/auth/authSlice";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    // Optionally redirect or clear local storage
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
