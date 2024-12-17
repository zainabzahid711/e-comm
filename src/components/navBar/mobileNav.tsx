import React, { Suspense, lazy } from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  Divider,
  ListItemText,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleDrawer,
  setExpandedCategory,
} from "../../lib/features/nav/navSlice";
import { RootState } from "../../lib/store";
const DrawerComponent = lazy(() => import("@mui/material/Drawer"));
import dropdownContent from "./dropdownContent";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";

const MobileNavigation = () => {
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
    <>
      {/* Mobile Drawer */}
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

export default MobileNavigation;
