import React, { useState } from "react";
import Logo from "../../assets/logo/ghorami_tracker_icon.png";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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

import { Link, Navigate, NavLink, useLocation } from 'react-router-dom';
const pages = ["Features", "Solutions", "Pricing", "Book a Demu", "Login", "Download"];
const pages1 = [
  { label: "Features", path: "/features", icon: <MdOutlineFeaturedPlayList /> },
  { label: "Solutions", path: "/solutions", icon: <AiOutlineSolution /> },
  { label: "Pricing", path: "/pricing", icon: <MdOutlinePriceChange /> },
  { label: "Book a Demo", path: "/book_a_demo", icon: <TbBrandBooking /> },
  { label: "Login", path: "/login", icon: <BiLogIn /> },
  { label: "Download", path: "/download", icon: <HiHome /> },
];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
   const location = useLocation();
  const routes = ["/features", "/solutions", "/pricing", "/book_a_demo"];
  console.log(location)
  console.log(location.pathname)
  console.log(typeof location.pathname)
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
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                component="img"
                //  style={{ position: "absolute", bottom: "0",zIndex:"-1", opacity:".3" }}
                sx={{
                  height: "auto",
                  width: "40px",
                  padding: "7px",
                  // marginTop: "-68px",
                  //   maxHeight: { xs: 233, md: "650px" },
                  //   maxWidth: { xs: 350, md: "960px" },
                }}
                // className={classes.root}
                alt="The house from the offer."
                src={Logo}
              />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  // display: { xs: "none", sm: "block" },
                  color: "#1BB096",
                  fontWeight: "bold",
                  fontSize: "1rem",

                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
                onClick={() => {
                  Navigate("/");
                }}
              >
                Ghorami
              </Typography>
            </Box>
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
                {page.label === "Download" ? (
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
                      // backgroundColor: "#063970",
                      // marginTop: "17px",
                      //   padding: "15px",
                      // fontWeight: "bold",
                      // textTransform: "upp",
                      letterSpacing: "1px",
                      color: "black",
                    }}
                    // variant="contained"
                    size="small"
                    onClick={() => setOpenDrawer(!openDrawer)}
                  >
                    <ListItemIcon
                      style={{ marginRight: "-20px", fontSize: "20px" }}
                    >
                      {page.icon}
                    </ListItemIcon>
                    {page.label}
                    {/* <ArrowForwardIosIcon
                      sx={{ fontSize: "15px", marginLeft: "10px" }}
                    /> */}
                  </Button>
                )}
              </NavLink>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "#000", backgroundColor: "blue", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon style={{ color: "white" }} />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
