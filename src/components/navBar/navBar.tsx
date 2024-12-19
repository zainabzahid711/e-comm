import React, { Suspense, lazy } from "react";
import { MenuItem, Box, IconButton, Typography } from "@mui/material";
import { RootState } from "../../lib/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer, setMenuKey } from "@/src/lib/features/nav/navSlice";
const MenuComponent = lazy(() => import("@mui/material/Menu"));
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import MobileNavigation from "./mobileNav";
import dropdownContent from "./dropdownContent";
import Link from "next/link";

const staticMenuItems = [
  "Dress Watches",
  "Metal Watches",
  "Men's Watches",
  "Solar-Powered Watches",
  "Premium Watches",
  "Vintage Watches",
];

// React.memo for individual static items (if needed)
const MenuItemComponent = React.memo(
  ({ title, description }: { title: string; description: string }) => {
    return (
      <MenuItem className="w-full bg-[#D8DBE2] hover:bg-[#5c8dc9]">
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

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    dispatch(toggleDrawer());
  };

  const handleOpenMenu = (
    key: string,
    event: React.MouseEvent<HTMLElement>
  ) => {
    dispatch(setMenuKey(key));
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <div className="flex justify-start md:justify-around items-center gap-4 p-7 bg-[#004080]">
        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <IconButton color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </div>

        <div className="text-center flex items-center">
          <h3 className="text-white font-bold">WATCHES</h3>
        </div>

        {/* Desktop Menu Items */}
        <div className="flex-col gap-6 text-center justify-center items-center hidden md:flex">
          <div>
            <ul className="flex gap-2 md:gap-4 2xl:text-lg md:text-sm">
              {staticMenuItems.map((item) => (
                <li key={item} className="cursor-pointer">
                  <Link
                    href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                    passHref
                    className="text-white hover:text-[#78b3fa]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Desktop Dropdown Menu */}
          <div>
            <ul className="flex gap-4 text-sm text-white">
              {Object.keys(dropdownContent).map((key) => (
                <li
                  key={key}
                  className="2xl:text-lg md:text-sm cursor-pointer hover:text-[#78b3fa] flex items-center gap-0"
                  onClick={(e) => handleOpenMenu(key, e)}
                >
                  {key} <KeyboardArrowDownIcon fontSize="small" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cart, User, Search - Always visible */}
        <div className="items-center flex text-center md:flex md:ml-0 ml-auto">
          <ul className="flex gap-6 justify-center text-white">
            <li className="cursor-pointer">
              {" "}
              <Link href="/signup" passHref>
                SignUp
              </Link>
            </li>
            <li className="cursor-pointer">Cart</li>
          </ul>
        </div>
      </div>

      {/* Desktop Dropdown Menu */}
      <Suspense fallback={<div> Loading... </div>}>
        <MenuComponent
          className="mt-6 "
          anchorEl={anchorEl}
          open={Boolean(menuKey)}
          onClose={() => dispatch(setMenuKey(null))}
          // MenuListProps={{
          //   onClose={()=> dispatch(setMenuKey(null))}, // Closes the menu on mouse leave
          // }}
        >
          {menuKey &&
            dropdownContent[menuKey].map((item, index) => (
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
