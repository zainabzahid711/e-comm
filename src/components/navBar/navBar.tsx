import React, { useState } from "react";
import { Menu, MenuItem, Button, Typography, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
    {
      title: "Ceramic Watches",
      description: "Scratch-resistant and modern.",
    },
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
    {
      title: "Kids' Watches",
      description: "Colorful, fun, and often themed.",
    },
  ],
  "By Price Range": [
    { title: "Affordable Watches", description: "Budget-friendly options." },
    {
      title: "Mid-Range Watches",
      description: "Balancing quality and cost.",
    },
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

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuKey, setMenuKey] = useState<string | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>, key: string) => {
    setAnchorEl(event.currentTarget);
    setMenuKey(key);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuKey(null);
  };

  return (
    <>
      <div className="flex justify-between p-7 bg-[#375880]">
        <div className="text-center flex items-center">
          <h3 className="text-white font-bold">WATCHES</h3>
        </div>
        <div className="flex flex-col gap-8 text-center justify-center items-center">
          <div>
            <ul className="flex gap-4 text-sm">
              <li className="cursor-pointer">Dress Watches</li>
              <li className="cursor-pointer">Metal Watches</li>
              <li className="cursor-pointer">Men's Watches</li>
              <li className="cursor-pointer">Solar-Powered Watches</li>
              <li className="cursor-pointer">Premium Watches</li>
              <li className="cursor-pointer">Vintage Watches</li>
            </ul>
          </div>
          {/* dropdown div */}
          <div>
            <ul className="flex gap-4 text-sm text-white">
              {Object.keys(dropdownContent).map((key) => (
                <li
                  key={key}
                  className="cursor-pointer hover:underline flex items-center gap-1"
                  onClick={(e) => handleOpen(e, key)}
                >
                  {key} <KeyboardArrowDownIcon fontSize="small" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="items-center flex text-center">
          <ul className="flex gap-6 justify-center text-white">
            <li className="cursor-pointer">Cart</li>
            <li className="cursor-pointer">User</li>
            <li className="cursor-pointer">Search</li>
          </ul>
        </div>
      </div>
      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          onMouseLeave: handleClose, // Closes the menu on mouse leave
        }}
      >
        {menuKey &&
          dropdownContent[menuKey].map((item, index) => (
            <MenuItem key={index} onClick={handleClose}>
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body2">{item.description}</Typography>
              </Box>
            </MenuItem>
          ))}
      </Menu>
    </>
  );
};

export default NavBar;
