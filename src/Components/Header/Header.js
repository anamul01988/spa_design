import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

import { Tab, Tabs } from "@mui/material";
import DrawerComp from "./DrawerComp";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

import "./Header.css";
const drawerWidth = 240;
const toolbarArea1 ={
  paddingLeft: "0px",
  paddingRight: "0px",
  
}
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
  const navigate = useNavigate();

  const [value, setValue] = useState();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const routes = ["/", "/about_us", "/what_we_do", "/media", "/contact"];
  return (
    <Box>
      <CssBaseline />
      <Box>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#EFF7F2",
            paddingX: { md: "80px", sm: "30px", xs: "20px" },
            boxShadow: "none",
          }}
        >
          <Toolbar
            // className="toolbarArea"
            style={toolbarArea1}
            // sx={{ paddingX: "0px" }}
          >
            <Box sx={{ display: "flex", alignItems: "right" }}>
              <Box
                onClick={() => {
                  navigate("/");
                }}
              >
                <Typography
                  sx={{ color: "#000", fontSize: "22px", fontWeight: "bold" }}
                  variant="h1"
                  component="h2"
                >
                  {`{`}Finsweet
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ flexGrow: { lg: "1", md: "1", sm: "1", xs: "1" } }}
            ></Box>
            <Toolbar>
              {isMatch ? (
                <>
                  <DrawerComp />
                </>
              ) : (
                <>
                  <Tabs
                    sx={{ marginLeft: "auto", color: "#525560" }}
                    className="list-navArea"
                    indicatorColor="secondary"
                    // textColor="inherit"
                    value={value}
                    onChange={(e, value) => setValue(value)}
                  >
                    <Tab
                      className="list-nav list-nav-active"
                      label="Home"
                      value={routes[0]}
                      component={Link}
                      to={routes[0]}
                    />

                    <Tab
                      className="list-nav"
                      label="About us"
                      value={routes[1]}
                      component={Link}
                      to={routes[1]}
                    />
                    <Tab
                      className="list-nav"
                      label="What We Do"
                      value={routes[2]}
                      component={Link}
                      to={routes[2]}
                    />
                    <Tab
                      className="list-nav"
                      label="Media"
                      value={routes[3]}
                      component={Link}
                      to={routes[3]}
                    />
                    <Tab
                      className="list-nav"
                      label="Contact"
                      value={routes[4]}
                      component={Link}
                      to={routes[4]}
                    />
                  </Tabs>
                </>
              )}
            </Toolbar>

            {/*  ====== nicer gula delete hobe nah so carefull =========== */}

            <Button
              variant="contained"
              size="small"
              sx={{
                fontSize: "16px",
                fontWeight: "500",
                textTransform: "capitalize",
                backgroundColor: "#000",
                color: "#fff",
                padding: "5px 32px",
              }}
            >
              Donate
            </Button>

            <Box sx={{ display: { xs: "flex", md: "none" } }}></Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};

export default Header;
