import React, { useState, Suspense, lazy } from "react";
import {
  MenuItem,
  Box,
  IconButton,
  List,
  ListItem,
  Divider,
  ListItemText,
  Typography,
} from "@mui/material";
const MenuComponent = lazy(() => import("@mui/material/Menu"));
const DrawerComponent = lazy(() => import("@mui/material/Drawer"));

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

type DropdownContent = {
  [key: string]: { title: string; description: string }[];
};

const dropdownContent: DropdownContent = {
  "By Style": [
    {
      title: "Casual Watches",
      description: "Everyday designs suitable for daily wear.",
    },
    {
      title: "Dress Watches",
      description: "Sleek and elegant, ideal for formal occasions.",
    },
    {
      title: "Sports Watches",
      description:
        "Rugged, durable, and often equipped with features like water resistance and stopwatch.",
    },
    {
      title: "Luxury Watches",
      description:
        "High-end, premium-quality timepieces featuring sophisticated designs and materials.",
    },
    {
      title: "Smart Watches",
      description:
        "Technology-driven watches with features like fitness tracking, notifications, and apps.",
    },
  ],
  "By Functionality": [
    {
      title: "Chronograph Watches",
      description: "Watches with stopwatch functions.",
    },
    {
      title: "Diver's Watches",
      description:
        "Water-resistant watches with features designed for underwater use.",
    },
    {
      title: "Pilot Watches",
      description: "Inspired by aviation, often with large, legible dials.",
    },
    {
      title: "Solar-Powered Watches",
      description: "Environmentally friendly watches powered by sunlight.",
    },
    {
      title: "Skeleton Watches",
      description: "Featuring visible inner mechanics for an artistic flair.",
    },
  ],
  "By Material": [
    {
      title: "Metal Watches",
      description: "Stainless steel, titanium, or precious metals like gold.",
    },
    {
      title: "Leather Strap Watches",
      description: "Sophisticated and timeless.",
    },
    {
      title: "Silicone/Rubber Watches",
      description: "Comfortable and sporty.",
    },
    { title: "Ceramic Watches", description: "Scratch-resistant and modern." },
    {
      title: "Wooden Watches",
      description: "Eco-friendly and unique designs.",
    },
  ],
  "By Audience": [
    { title: "Men's Watches", description: "Robust and masculine designs." },
    {
      title: "Women's Watches",
      description: "Elegant and often embellished with decorative elements.",
    },
    { title: "Unisex Watches", description: "Gender-neutral designs." },
    { title: "Kids' Watches", description: "Colorful, fun, and often themed." },
  ],
  "By Price Range": [
    { title: "Affordable Watches", description: "Budget-friendly options." },
    { title: "Mid-Range Watches", description: "Balancing quality and cost." },
    { title: "Premium Watches", description: "Luxury yet accessible." },
    {
      title: "High-End Watches",
      description: "Exclusively premium brands and designs.",
    },
  ],
  "By Design Theme": [
    {
      title: "Minimalist Watches",
      description: "Clean, simple, and understated.",
    },
    {
      title: "Vintage/Retro Watches",
      description: "Classic designs reminiscent of past eras.",
    },
    { title: "Modern Watches", description: "Sleek and contemporary." },
    {
      title: "Themed Watches",
      description: "Movie-inspired, character-branded, or artistic designs.",
    },
  ],
};

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
      <MenuItem>
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

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuKey, setMenuKey] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false); // State for mobile sidebar
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null); // Track expanded category for dropdown

  const handleOpen = (event: React.MouseEvent<HTMLElement>, key: string) => {
    setAnchorEl(event.currentTarget);
    setMenuKey(key);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuKey(null);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const handleCategoryToggle = (category: string) => {
    setExpandedCategory((prevCategory) =>
      prevCategory === category ? null : category
    ); // Toggle category dropdown
  };

  return (
    <>
      <div className="flex justify-start md:justify-around items-center gap-4 p-7 bg-[#2f5686]">
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
                  {item}
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
                  className="2xl:text-lg md:text-sm cursor-pointer hover:underline flex items-center gap-0"
                  onClick={(e) => handleOpen(e, key)}
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
            <li className="cursor-pointer">Cart</li>
            <li className="cursor-pointer">User</li>
          </ul>
        </div>
      </div>

      {/* Desktop Dropdown Menu */}
      <Suspense fallback={<div> Loading... </div>}>
        <MenuComponent
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{
            onMouseLeave: handleClose, // Closes the menu on mouse leave
          }}
        >
          {menuKey &&
            dropdownContent[menuKey].map((item, index) => (
              <MenuItemComponent key={index} {...item} />
            ))}
        </MenuComponent>
      </Suspense>

      <Suspense fallback={<div> Loading... </div>}>
        <DrawerComponent
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "#2f5686", // Same as NavBar background color
              color: "white", // Text color for the drawer
            },
          }}
        >
          <Box sx={{ width: 250 }} role="presentation">
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
            <List>
              {Object.keys(dropdownContent).map((category) => (
                <div key={category}>
                  <ListItem onClick={() => handleCategoryToggle(category)}>
                    <ListItemText primary={category} />
                    <KeyboardArrowDownIcon />
                  </ListItem>
                  {expandedCategory === category && (
                    <List component="div" disablePadding>
                      {dropdownContent[category].map((item, index) => (
                        <ListItem
                          onClick={() => handleCategoryToggle(category)}
                          key={index}
                        >
                          <ListItemText primary={item.title} />
                        </ListItem>
                      ))}
                    </List>
                  )}
                  <Divider />
                </div>
              ))}
            </List>
          </Box>
        </DrawerComponent>
      </Suspense>
    </>
  );
};

export default NavBar;
