import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
import {
  useMediaQuery,
} from "@mui/material";

import {
  Tab,
  Tabs,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/ghorami_tracker_icon.png";
// import logoIcon from "./assets/call-common.png";
// import useAuth from "../../Hooks/useAuth";
import "./Header.css";
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = () => {
  const theme = useTheme();
  // const current = new Date();
  // const date = `${current.getDate()}/${
  //   current.getMonth() + 1
  // }/${current.getFullYear()}`;

  const navigate = useNavigate();

  //get user information from localStorage
  // const user = JSON.parse(localStorage.getItem("user"));
  // get data or object from context auth provider
  const [value, setValue] = useState();
  //  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // console.log(isMatch);
  const routes = [
    "/features",
    "/solutions",
    "/pricing",
    "/book_a_demo",
    // "/contact",
  ];
  return (
    <Box>
      <CssBaseline />
      <Box>
        <AppBar
          position="static"
          sx={{ backgroundColor: "#fff", paddingX: "150px" }}
        >
          <Toolbar>
            <Box sx={{ display: "flex", alignItems: "right" }}>
              {/* <Box
                component="img"
                //  style={{ position: "absolute", bottom: "0",zIndex:"-1", opacity:".3" }}
                sx={{
                  height: "auto",
                  width: "80px",
                  padding: "7px",
                  // marginTop: "-68px",
                  //   maxHeight: { xs: 233, md: "650px" },
                  //   maxWidth: { xs: 350, md: "960px" },
                }}
                // className={classes.root}
                alt="The house from the offer."
                src={Logo}
              /> */}
              <Box
                onClick={() => {
                  navigate("/");
                }}
                className="headerLogoArea"
              >
                <img
                  className="headerLogo"
                  width="512"
                  height="70"
                  src={Logo}
                  alt="logo"
                />
              </Box>
            </Box>
            <Box
              sx={{ flexGrow: { lg: "1", md: "0", sm: "0", xs: "0" } }}
            ></Box>
            <Toolbar>
              {isMatch ? (
                <>
                  <DrawerComp />
                </>
              ) : (
                <>
                  <Tabs
                    sx={{ marginLeft: "auto", color: "#000" }}
                    // to={routes[0]}
                    className="list-navArea"
                    indicatorColor="secondary"
                    textColor="inherit"
                    value={value}
                    onChange={(e, value) => setValue(value)}
                  >
                    <Tab
                      className="list-nav"
                      label="Features"
                      // label="Home"
                      value={routes[0]}
                      component={Link}
                      to={routes[0]}
                    />

                    <Tab
                      className="list-nav"
                      label="Solutions"
                      // label="Profile"
                      value={routes[1]}
                      component={Link}
                      to={routes[1]}
                    />
                    <Tab
                      className="list-nav"
                      // label="Product List"
                      label="Pricing"
                      value={routes[2]}
                      component={Link}
                      to={routes[2]}
                    />
                    <Tab
                      className="list-nav"
                      label="Book a Demo"
                      // label="Organogram"
                      value={routes[3]}
                      component={Link}
                      to={routes[3]}
                    />
                    {/* <Tab
                      className="list-nav"
                      label="contact"
                      value={routes[3]}
                      component={Link}
                      to={routes[3]}
                    /> */}
                  </Tabs>
                </>
              )}
            </Toolbar>
           
            {/* <AppBar position="static" sx={{ background: "#063970" }}>
          
            </AppBar> */}

    
         
            {/*  ====== nicer gula delete hobe nah so carefull =========== */}
           

            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                fontSize: "0.6rem",
                marginLeft: "15px",
              }}
              onClick={() => {
                let newWindow = window.open(
                  "https://ghorami.com/ghoramidesk/download/download.php?val=ghorami_desk_1.2.0.zip"
                );

                setTimeout(function () {
                  newWindow.document.title = "G-desk software";
                }, 100);
                // navigate("/download");
              }}
            >
              Download
            </Button>

            <Box sx={{ display: { xs: "flex", md: "none" } }}></Box>
          </Toolbar>
        </AppBar>
      </Box>
      {/* <Navbar></Navbar> */}
    </Box>
  );
};

export default Header;
