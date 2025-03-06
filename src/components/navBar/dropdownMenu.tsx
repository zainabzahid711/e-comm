import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

interface MenuItem {
  title: string;
  href?: string;
}

interface DropdownCategory {
  title: string;
  items: MenuItem[];
  imageUrl?: string;
}

interface DropdownMenuProps {
  items: DropdownCategory[];
  isOpen: boolean;
  navbarHeight: number;
}

const DropdownMenu = ({ items, isOpen, navbarHeight }: DropdownMenuProps) => {
  const [activeCategory, setActiveCategory] = useState<string>(
    items.length > 0 ? items[0]?.title : ""
  );

  const activeCategoryData = items.find(
    (category) => category.title === activeCategory
  ) || { title: "", items: [], imageUrl: "" };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="dropdown"
          role="menu"
          aria-labelledby="dropdown-button"
          tabIndex={0}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={dropdownVariants}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="fixed bg-white shadow-lg z-50 flex p-0 gap-0 h-[400px] w-screen left-0 right-0"
          style={{ top: `${navbarHeight}px` }}
        >
          {/* Left Section - Categories */}
          <div className="w-1/3 border-r bg-[#171717]">
            <div className="p-12">
              <h3 className="font-bold mb-2 uppercase">Categories</h3>
              <ul>
                {items.map((category) => (
                  <li
                    key={category.title}
                    className={`py-1 cursor-pointer ${
                      activeCategory === category.title
                        ? "font-bold text-blue-500"
                        : "text-gray-800"
                    } transition-colors`}
                    onClick={() => setActiveCategory(category.title)}
                  >
                    {category.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Right Section - Items */}
          <div className="w-2/3 flex flex-col gap-2 bg-[#171717]">
            <div className="p-12">
              <h3 className="font-bold mb-2 uppercase">{activeCategory}</h3>
              <div className="flex gap-24">
                <ul className="flex flex-col gap-2">
                  {activeCategoryData.items.map((item) => (
                    <li
                      key={item.title}
                      className="py-1 cursor-pointer hover:text-blue-500 hover:underline"
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
                {/* Display Image for Active Category */}
                {activeCategoryData?.imageUrl && (
                  <div>
                    <img
                      src={activeCategoryData.imageUrl}
                      alt={activeCategory}
                      className="mt-4 w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropdownMenu;
