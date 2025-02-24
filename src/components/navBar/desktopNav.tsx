import React, { useState, useRef } from "react";
import DropdownMenu from "./dropdownMenu";
import dropdownContent from "./dropdownContent";

const DesktopNav = () => {
  const [hoverOpen, setHoverOpen] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const navbarHeight = 95;

  const handleOpenMenu = (key: string) => {
    setHoverOpen(key);
  };

  const handleCloseMenu = (key: string) => {
    setTimeout(() => {
      setHoverOpen((prev) => (prev === key ? null : prev));
    }, 100);
  };

  return (
    <div className="hidden md:flex items-center gap-6">
      {Object.keys(dropdownContent).map((key) => (
        <div
          key={key}
          className="relative"
          onMouseEnter={() => handleOpenMenu(key)}
          onMouseLeave={(e) => {
            const relatedTarget = e.relatedTarget as Node | null;
            if (
              e.relatedTarget instanceof Node &&
              e.currentTarget.contains(e.relatedTarget)
            ) {
              return;
            }
            handleCloseMenu(key);
          }}
        >
          <button className="hover:text-[#78b3fa]">{key}</button>
          {hoverOpen === key && (
            <div
              className="absolute top-full left-0"
              onMouseEnter={() => setHoverOpen(key)}
              onMouseLeave={() => handleCloseMenu(key)}
            >
              <DropdownMenu
                items={dropdownContent[key]}
                isOpen={hoverOpen === key}
                // triggerRef={triggerRef}
                navbarHeight={navbarHeight}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DesktopNav;
