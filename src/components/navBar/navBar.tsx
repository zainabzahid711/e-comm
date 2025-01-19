import React, { useState, Suspense, lazy, useCallback } from "react";
import {
  MenuItem,
  Box,
  IconButton,
  Typography,
  CircularProgress,
} from "@mui/material";
import { RootState } from "../../lib/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer, setMenuKey } from "../../lib/features/nav/navSlice";
const MenuComponent = lazy(() => import("@mui/material/Menu"));
import MenuIcon from "@mui/icons-material/Menu";
import MobileNavigation from "./mobileNav";
import dropdownContent from "./dropdownContent";
import Link from "next/link";
import { logout } from "../../lib/features/auth/authSlice";

// React.memo for individual static items (if needed)
const MenuItemComponent = React.memo(
  ({ title, description }: { title: string; description: string }) => {
    return (
      <MenuItem
        className="w-full bg-[#D8DBE2] hover:bg-[#5c8dc9]"
        role="menuitem"
      >
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </Box>
      </MenuItem>
    );
  }
);

// Add displayName for better debugging
MenuItemComponent.displayName = "MenuItemComponent";

const NavBar = () => {
  const dispatch = useDispatch();
  const { menuKey } = useSelector((state: RootState) => state.nav);

  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleDrawerToggle = useCallback(() => {
    dispatch(toggleDrawer());
  }, [dispatch]);

  const handleOpenMenu = useCallback(
    (key: string, event: React.MouseEvent<HTMLElement>) => {
      dispatch(setMenuKey(key));
      setAnchorEl(event.currentTarget);
      setHovered(key);
    },
    [dispatch]
  );

  const handleCloseMenu = () => {
    const timeout = setTimeout(() => {
      if (!hovered) {
        setHovered(null);
        dispatch(setMenuKey(null));
        setAnchorEl(null);
      }
    }, 150);

    return () => clearTimeout(timeout);
  };

  return (
    <>
      <div className="flex justify-start md:justify-between items-center gap-4 p-7 bg-[#004080]">
        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <IconButton color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </div>

        <div className="flex justify-around gap-12">
          <div className="text-center flex items-center">
            <h3 className="text-white font-bold text-3xl font-stylish">
              Aurelia Valor
            </h3>
          </div>

          {/* Desktop Menu Items */}
          <div className="flex-col gap-6 text-center justify-center items-center hidden md:flex">
            {/* Desktop Dropdown Menu */}
            <div>
              <ul className="flex w-full gap-4 text-sm text-white">
                {Object.keys(dropdownContent).map((key) => (
                  <li
                    key={key}
                    className="2xl:text-lg md:text-sm cursor-pointer hover:text-[#78b3fa] flex items-center gap-0"
                    onClick={(e) => handleOpenMenu(key, e)}
                    onMouseOver={(e) => {
                      handleOpenMenu(key, e);
                      // setHovered(true);
                    }}
                    onMouseLeave={() => {
                      // setHovered(false);
                      handleCloseMenu();
                    }}
                    role="menuitem"
                    aria-haspopup="true"
                  >
                    {key}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Cart, User, Search - Always visible */}
        <div className="items-center flex text-center md:flex md:ml-0 ml-auto">
          <ul className="flex gap-6 justify-center text-white">
            {isAuthenticated ? (
              <>
                <li className="cursor-pointer">
                  Welcome, {user?.name || "User"}
                </li>
                <li className="cursor-pointer" onClick={handleLogout}>
                  Logout
                </li>
              </>
            ) : (
              <li className="cursor-pointer">
                <Link href="/signup" passHref>
                  SignUp
                </Link>
              </li>
            )}
            <li className="cursor-pointer">Cart</li>
          </ul>
        </div>
      </div>
      {/* Desktop Dropdown Menu */}
      <Suspense fallback={<CircularProgress color="inherit" />}>
        <MenuComponent
          className="mt-6"
          anchorEl={anchorEl}
          open={Boolean(menuKey)}
          onClose={() => {
            setAnchorEl(null);
            dispatch(setMenuKey(null));
            setHovered(null);
          }}
          MenuListProps={{
            onMouseLeave: () => {
              setTimeout(() => {
                setHovered(null);
                dispatch(setMenuKey(null));
                setAnchorEl(null);
              }, 150); // Debounce
            },
          }}
        >
          {menuKey &&
            dropdownContent[menuKey]?.map((item, index) => (
              <MenuItemComponent key={index} {...item} />
            ))}
        </MenuComponent>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <MobileNavigation />
      </Suspense>
    </>
  );
};
// Add displayName for better debugging
NavBar.displayName = "NavBar";

export default NavBar;
