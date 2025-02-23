import React, { useState } from "react";

interface MenuItem {
  title: string;
  href?: string;
}

interface DropdownCategory {
  title: string;
  items: MenuItem[];
}

interface DropdownMenuProps {
  items: DropdownCategory[];
  isOpen: boolean;
}

const DropdownMenu = ({ items, isOpen }: DropdownMenuProps) => {
  const [activeCategory, setActiveCategory] = useState<string>(
    items[0]?.title || ""
  );

  return (
    <div
      className={`w-96 text-black absolute top-full left-0 right-0 bg-white shadow-lg z-50 transition-all duration-300 transform ${
        isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2 pointer-events-none"
      } flex p-4 gap-4 h-[400px]`}
    >
      <div className="w-1/3 border-r pr-4">
        <h3 className="font-bold mb-2 uppercase">Categories</h3>
        <ul>
          {items.map((category) => (
            <li
              key={category.title}
              onMouseEnter={() => setActiveCategory(category.title)}
              className={`py-1 cursor-pointer ${
                activeCategory === category.title
                  ? "font-bold text-blue-500"
                  : "text-gray-800"
              } transition-colors`}
            >
              {category.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3 flex flex-col gap-2">
        <h3 className="font-bold mb-2 uppercase">{activeCategory}</h3>
        <ul className="flex flex-wrap gap-2">
          {items
            .find((category) => category.title === activeCategory)
            ?.items.map((item) => (
              <li
                key={item.title}
                className="py-1 cursor-pointer hover:text-blue-500 hover:underline"
              >
                {item.title}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
