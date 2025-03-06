import React, { useState } from "react";
import DropdownMenu from "./dropdownMenu";
import dropdownContent from "./dropdownContent";

const DesktopNav = () => {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  return (
    <div className="hidden md:flex items-center gap-6">
      {Object.keys(dropdownContent).map((key) => (
        <div
          key={key}
          className="relative"
          onMouseEnter={() => setHoveredKey(key)} // Open dropdown on mouse enter
          onMouseLeave={() => setHoveredKey(null)} // Close dropdown on mouse leave
        >
          <button className="hover:text-[#78b3fa]">{key}</button>
          {/* Dropdown Menu */}
          {hoveredKey === key && (
            <div
              className="dropdown-container"
              onMouseEnter={() => setHoveredKey(key)} // Keep dropdown open when hovering over it
              onMouseLeave={() => setHoveredKey(null)} // Close dropdown when mouse leaves
            >
              <DropdownMenu
                items={dropdownContent[key]}
                isOpen={hoveredKey === key}
                navbarHeight={95}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DesktopNav;
