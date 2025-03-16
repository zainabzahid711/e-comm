import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../lib/store";
import { toggleDrawer } from "../../lib/features/nav/navSlice"; // Removed unused `setMenuKey`
import { logout } from "../../lib/features/auth/authSlice";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";

const NavBar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleDrawerToggle = useCallback(() => {
    dispatch(toggleDrawer());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!isHydrated) {
    return null;
  }

  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={handleDrawerToggle}>
            <MenuIcon />
          </button>
        </div>

        {/* Logo */}
        <div className=" text-3xl font-bold">
          <Link href="/">MORAYNE</Link>
        </div>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* User Actions */}
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <span>Welcome, {user?.name || "User"}</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link href="/signup">Sign Up</Link>
          )}
          <Link href="/cart">Cart</Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav />
    </nav>
  );
};

export default NavBar;
