import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import { HiHome } from "react-icons/hi";
import { BiLogIn } from "react-icons/bi";
import { TbBrandBooking } from "react-icons/tb";
import {
  MdOutlinePriceChange,
  MdOutlineFeaturedPlayList,
} from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";

import {  NavLink, useLocation } from 'react-router-dom';
const pages1 = [
  { label: "Home", path: "/home", icon: <MdOutlineFeaturedPlayList /> },
  { label: "About Us", path: "/about_us", icon: <AiOutlineSolution /> },
  { label: "What We Do", path: "/what_we_do", icon: <MdOutlinePriceChange /> },
  { label: "Media", path: "/media", icon: <TbBrandBooking /> },
  { label: "Contact", path: "/contact", icon: <BiLogIn /> },
  { label: "Donate", path: "/donate", icon: <HiHome /> },
];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
   const location = useLocation();
  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{ "& .MuiDrawer-paper": { width: 230, backgroundColor: "" } }}
      >
        <List style={{ margin: "0px", paddingTop: "0px" }}>
          <Box
            sx={{
              paddingY: "17px",
              backgroundColor: "#000",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
             <Typography
              sx={{ color: "#fff", fontSize: "22px", fontWeight: "bold", marginLeft:"15px" }}
              variant="h1"
              component="h2"
            >
              {`{`}Finsweet
            </Typography>    
            <CancelIcon
              onClick={() => setOpenDrawer(!openDrawer)}
              style={{ color: "white", marginRight: "10px" }}
            />
          </Box>
          {pages1.map((page, index) => (
            <ListItemButton
              style={{
                backgroundColor:
                  page?.path === location?.pathname ? "#C7E5F5" : "#fff",
                borderLeft:
                  page?.path === location?.pathname && "12px solid #A3A0FB",
                textDecoration: "none",
                padding: "12px",
              }}
              key={index}
            >
              <NavLink
                exact
                activeClassName="active"
                key={index}
                to={`${page.path}`}
                style={{ textDecoration: "none" }}
              >
                {page.label === "Donate" ? (
                  <Button
                    style={{
                      backgroundColor: "#063970",

                      // marginY: "17px",
                      fontSize: "1rem",
                      // padding: "15px",
                      // fontWeight: "bold",
                      // textTransform: "upp",
                      letterSpacing: "1px",
                    }}
                    variant="contained"
                    size="small"
                    onClick={() => setOpenDrawer(!openDrawer)}
                  >
                    {page.label}
                    {/* <ArrowForwardIosIcon
                      sx={{ fontSize: "15px", marginLeft: "10px" }}
                    /> */}
                  </Button>
                ) : (
                  <Button
                    style={{
                      letterSpacing: "1px",
                      color: "black",
                    }}
                    size="small"
                    onClick={() => setOpenDrawer(!openDrawer)}
                  >
                    <ListItemIcon
                      style={{ marginRight: "-20px", fontSize: "20px" }}
                    >
                      {page.icon}
                    </ListItemIcon>
                    {page.label}
                  </Button>
                )}
              </NavLink>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "#000", backgroundColor: "#70C174", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon style={{ color: "#000" }} />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
