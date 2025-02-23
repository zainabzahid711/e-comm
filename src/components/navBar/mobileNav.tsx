import React, { Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../lib/store";
import {
  toggleDrawer,
  setExpandedCategory,
} from "../../lib/features/nav/navSlice";
import dropdownContent from "./dropdownContent";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const DrawerComponent = lazy(() => import("@mui/material/Drawer"));

const MobileNav = () => {
  const dispatch = useDispatch();
  const { drawerOpen, expandedCategory } = useSelector(
    (state: RootState) => state.nav
  );

  const handleDrawerToggle = () => {
    dispatch(toggleDrawer());
  };

  const handleCategoryToggle = (category: string) => {
    dispatch(
      setExpandedCategory(expandedCategory === category ? null : category)
    );
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DrawerComponent
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#2f5686",
            color: "white",
          },
        }}
      >
        <div className="w-64">
          <button onClick={handleDrawerToggle} className="p-4">
            <CloseIcon />
          </button>
          <div>
            {Object.keys(dropdownContent).map((category) => (
              <div key={category}>
                <button
                  onClick={() => handleCategoryToggle(category)}
                  className="w-full p-4 text-left flex justify-between items-center"
                >
                  <span>{category}</span>
                  <KeyboardArrowDownIcon />
                </button>
                {expandedCategory === category && (
                  <div className="pl-8">
                    {dropdownContent[category].map((item, index) => (
                      <div key={index} className="p-2">
                        {item.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </DrawerComponent>
    </Suspense>
  );
};

export default MobileNav;
