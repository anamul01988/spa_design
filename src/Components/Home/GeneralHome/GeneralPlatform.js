import React from "react";

import { useTheme } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SwipeableViews from "react-swipeable-views";
import PropTypes from "prop-types";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import img1 from "../../../assets/general-home/final/software/home.png";
import img2 from "../../../assets/general-home/final/software/tracker.png";
import img3 from "../../../assets/general-home/final/software/messenger.png";
import img4 from "../../../assets/general-home/final/software/setting.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


function GeneralPlatform() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = () => {
    console.log("first")
    navigate('/pricing')
  };
  return (
    <Box
      sx={{
        paddingY: "50px",
        paddingX: { lg: "80px", md: "50px", sm: "30px", xs: "20px" },
        background: "#fafafa",
        marginX: "auto",
        // height:"600px"
      }}
    >
      {/* <Grid item xs={12} md={12}></Grid> */}

      <Box
        sx={{
          background: "#F2F0FD",
          // paddingX: { lg: "200px", md: "100px", sm: "30px", xs: "10px" },
          // paddingY: "50px",
        }}
        style={{ borderRadius: "0px 0px 60px 60px" }}
      >
        <Typography
          variant="h4"
          component="h3"
          sx={{
            //   display: { xs: "none" },
            color: "#063970",
            //   width: "250px",
            fontWeight: "bold",
            // fontSize: "1.5rem",
            textAlign: "center",
            textTransform: "capitalize",
            paddingTop: "60px",
            // paddingBottom: "30px",
            // cursor: "pointer",
          }}
        >
          Software
        </Typography>
        <Box
          sx={{
            paddingX: { lg: "50px", md: "50px", sm: "30px", xs: "10px" },
            paddingY: "50px",
          }}
        >
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                  <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                      //   display: { xs: "none" },
                      color: "#000",
                      //   width: "250px",
                      fontWeight: "bold",
                      fontSize: "2rem",
                      // lineHeight:"80px",
                      //   marginTop: "57px",
                      marginBottom: "17px",
                      letterSpacing: "1px",
                      textTransform: "capitalize",
                      // cursor: "pointer",
                    }}
                  >
                    The world's most powerfull & effective tools
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h5"
                    sx={{
                      //   display: { xs: "none" },
                      color: "#777",
                      //   width: "250px",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      marginBottom: "20px",
                      // cursor: "pointer",
                    }}
                  >
                    Manage your project and task easily in which every task will
                    be reserved and workplace will become convenient. Maintain
                    your work easily through the strong task management feature.
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>
                      {/* <Typography
                        variant="subtitle1"
                        component="h6"
                        sx={{
                          //   display: { xs: "none" },
                          color: "#000",
                          //   width: "250px",
                          lineHeight: "60px",
                          fontWeight: "bold",
                          fontSize: "1rem",
                          marginTop: "10px",
                          textTransform: "capitalize",
                          // cursor: "pointer",
                        }}
                      >
                        Replace : Monday || Jira || Trello
                      </Typography> */}
                      {/* <Link to="/pricing" style={{ textDecoration: "none" }}> */}
                        {" "}
                      <Button
                        onClick={handleClick}
                          style={{
                            backgroundColor: "#063970",
                            marginTop: "17px",
                            //   padding: "15px",
                            fontWeight: "bold",
                            // textTransform: "upp",
                            letterSpacing: "1px",
                          }}
                          // sx={{ backgroundColor: "#063970" }}
                          variant="contained"
                          size="large"
                        >
                          Let's Get Started
                        </Button>
                 
                    </Box>
                    <Box sx={{ marginRight: "0px", marginTop: "17px" }}>
                      <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: "divider" }}
                      >
                        <Tab
                          style={{ fontWeight: "bold" }}
                          label="Home"
                          {...a11yProps(0)}
                        />
                        <Tab
                          style={{ fontWeight: "bold" }}
                          label="Trackers"
                          {...a11yProps(1)}
                        />
                        <Tab
                          style={{ fontWeight: "bold" }}
                          label="Messenger"
                          {...a11yProps(3)}
                        />
                        <Tab
                          style={{ fontWeight: "bold" }}
                          label="Setting"
                          {...a11yProps(4)}
                        />
                      </Tabs>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Box style={{ textAlign: "center" }}>
                    <Box
                      component="img"
                      sx={{
                        height: "100%",
                        width: "100%",
                        //   maxHeight: { xs: 233, md: "650px" },
                        //   maxWidth: { xs: 350, md: "960px" },
                      }}
                      alt="The house from the offer."
                      src={img1}
                    />
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                  <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                      //   display: { xs: "none" },
                      color: "#000",
                      //   width: "250px",
                      fontWeight: "bold",
                      fontSize: "2rem",
                      // lineHeight:"80px",
                      //   marginTop: "57px",
                      marginBottom: "17px",
                      letterSpacing: "1px",
                      textTransform: "capitalize",
                      // cursor: "pointer",
                    }}
                  >
                    Secure & live time tracking tool With screenshot & Session
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h5"
                    sx={{
                      //   display: { xs: "none" },
                      color: "#777",
                      //   width: "250px",
                      marginBottom: "20px",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      // cursor: "pointer",
                    }}
                  >
                    Ghorami tracker create to track employee working hour &
                    monitor to work from better inspection as a result employee
                    in the office have been proven workflow
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>
                      {/* <Typography
                        variant="subtitle1"
                        component="h6"
                        sx={{
                          //   display: { xs: "none" },
                          color: "#000",
                          //   width: "250px",
                          lineHeight: "60px",
                          fontWeight: "bold",
                          fontSize: "1rem",
                          marginTop: "10px",
                          textTransform: "capitalize",
                          // cursor: "pointer",
                        }}
                      >
                        Replace : Monday || Jira || Trello
                      </Typography> */}

                      <Link to="/pricing" style={{ textDecoration: "none" }}>
                        {" "}
                        <Button
                          style={{
                            backgroundColor: "#063970",
                            marginTop: "17px",
                            //   padding: "15px",
                            fontWeight: "bold",
                            // textTransform: "upp",
                            letterSpacing: "1px",
                          }}
                          // sx={{ backgroundColor: "#063970" }}
                          variant="contained"
                          size="large"
                        >
                          Let's Get Started
                        </Button>
                      </Link>
                    </Box>
                    <Box sx={{ marginRight: "0px", marginTop: "17px" }}>
                      <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: "divider" }}
                      >
                        <Tab
                          style={{ fontWeight: "bold" }}
                          label="Home"
                          {...a11yProps(0)}
                        />
                        <Tab
                          style={{ fontWeight: "bold" }}
                          label="Trackers"
                          {...a11yProps(1)}
                        />
                        <Tab
                          style={{ fontWeight: "bold" }}
                          label="Messenger"
                          {...a11yProps(3)}
                        />
                        <Tab
                          style={{ fontWeight: "bold" }}
                          label="Setting"
                          {...a11yProps(4)}
                        />
                      </Tabs>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Box style={{ textAlign: "center" }}>
                    <Box
                      component="img"
                      sx={{
                        height: "100%",
                        width: "100%",
                        //   maxHeight: { xs: 233, md: "650px" },
                        //   maxWidth: { xs: 350, md: "960px" },
                      }}
                      alt="The house from the offer."
                      src={img2}
                    />
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                  <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                      //   display: { xs: "none" },
                      color: "#000",
                      //   width: "250px",
                      fontWeight: "bold",
                      fontSize: "2rem",
                      // lineHeight:"80px",
                      //   marginTop: "57px",
                      marginBottom: "17px",
                      letterSpacing: "1px",
                      textTransform: "capitalize",
                      // cursor: "pointer",
                    }}
                  >
                    Connect Everyone Together In Live Chat
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h5"
                    sx={{
                      //   display: { xs: "none" },
                      color: "#777",
                      //   width: "250px",
                      fontWeight: "bold",
                      marginBottom: "20px",
                      fontSize: "1rem",
                      // cursor: "pointer",
                    }}
                  >
                    Get connected by live chat on Ghorami Desk. Share your file
                    & own opinion with each other. To know something special
                    everyone should focus and discuss.
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>
                      {/* <Typography
                        variant="subtitle1"
                        component="h6"
                        sx={{
                          //   display: { xs: "none" },
                          color: "#000",
                          //   width: "250px",
                          lineHeight: "60px",
                          fontWeight: "bold",
                          fontSize: "1rem",
                          marginTop: "10px",
                          textTransform: "capitalize",
                          // cursor: "pointer",
                        }}
                      >
                        Replace : Monday || Jira || Trello
                      </Typography> */}

                      <Link to="/pricing" style={{ textDecoration: "none" }}>
                        {" "}
                        <Button
                          style={{
                            backgroundColor: "#063970",
                            marginTop: "17px",
                            //   padding: "15px",
                            fontWeight: "bold",
                            // textTransform: "upp",
                            letterSpacing: "1px",
                          }}
                          // sx={{ backgroundColor: "#063970" }}
                          variant="contained"
                          size="large"
                        >
                          Let's Get Started
                        </Button>
                      </Link>
                    </Box>
                    <Box sx={{ marginRight: "0px", marginTop: "17px" }}>
                      <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: "divider" }}
                      >
                        <Tab
                          style={{ fontWeight: "bold" }}
                          label="Home"
                          {...a11yProps(0)}
                        />
                        <Tab
                          style={{ fontWeight: "bold" }}
                          label="Trackers"
                          {...a11yProps(1)}
                        />
                        <Tab
                          style={{ fontWeight: "bold" }}
                          label="Messenger"
                          {...a11yProps(3)}
                        />
                        <Tab
                          style={{ fontWeight: "bold" }}
                          label="Setting"
                          {...a11yProps(4)}
                        />
                      </Tabs>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Box style={{ textAlign: "center" }}>
                    <Box
                      component="img"
                      sx={{
                        height: "100%",
                        width: "100%",
                        //   maxHeight: { xs: 233, md: "650px" },
                        //   maxWidth: { xs: 350, md: "960px" },
                      }}
                      alt="The house from the offer."
                      src={img3}
                    />
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                  <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                      //   display: { xs: "none" },
                      color: "#000",
                      //   width: "250px",
                      fontWeight: "bold",
                      fontSize: "2rem",
                      // lineHeight:"80px",
                      //   marginTop: "57px",
                      marginBottom: "17px",
                      letterSpacing: "1px",
                      textTransform: "capitalize",
                      // cursor: "pointer",
                    }}
                  >
                    Control your software from Settings
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h5"
                    sx={{
                      //   display: { xs: "none" },
                      color: "#777",
                      //   width: "250px",
                      fontWeight: "bold",
                      marginBottom: "20px",
                      fontSize: "1rem",
                      // cursor: "pointer",
                    }}
                  >
                    Stay connected with cloud by changing software setting and
                    get live notification. Run your software without having any
                    effort.
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>
                      {/* <Typography
                        variant="subtitle1"
                        component="h6"
                        sx={{
                          //   display: { xs: "none" },
                          color: "#000",
                          //   width: "250px",
                          lineHeight: "60px",
                          fontWeight: "bold",
                          fontSize: "1rem",
                          marginTop: "10px",
                          textTransform: "capitalize",
                          // cursor: "pointer",
                        }}
                      >
                        Replace : Monday || Jira || Trello
                      </Typography> */}

                      <Link to="/pricing" style={{ textDecoration: "none" }}>
                        {" "}
                        <Button
                          style={{
                            backgroundColor: "#063970",
                            marginTop: "17px",
                            //   padding: "15px",
                            fontWeight: "bold",
                            // textTransform: "upp",
                            letterSpacing: "1px",
                          }}
                          // sx={{ backgroundColor: "#063970" }}
                          variant="contained"
                          size="large"
                        >
                          Let's Get Started
                        </Button>
                      </Link>
                    </Box>
                    <Box sx={{ marginRight: "0px", marginTop: "17px" }}>
                      <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: "divider" }}
                      >
                        <Tab
                          style={{ fontWeight: "bold" }}
                          label="Home"
                          {...a11yProps(0)}
                        />
                        <Tab
                          style={{ fontWeight: "bold" }}
                          label="Trackers"
                          {...a11yProps(1)}
                        />
                        <Tab
                          style={{ fontWeight: "bold" }}
                          label="Messenger"
                          {...a11yProps(3)}
                        />
                        <Tab
                          style={{ fontWeight: "bold" }}
                          label="Setting"
                          {...a11yProps(4)}
                        />
                      </Tabs>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Box style={{ textAlign: "center" }}>
                    <Box
                      component="img"
                      sx={{
                        height: "100%",
                        width: "100%",
                        //   maxHeight: { xs: 233, md: "650px" },
                        //   maxWidth: { xs: 350, md: "960px" },
                      }}
                      alt="The house from the offer."
                      src={img4}
                    />
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>
          </Box>
        </Box>
        <Box
          sx={{
            paddingBottom: "40px",
            textAlign: "center",
            background: "#b1a9a91c",
            borderRadius: "0px 0px 60px 60px",
          }}
        >
          <Link to="/features" style={{ textDecoration: "none" }}>
            <Button
              style={{
                backgroundColor: "#063970",
                marginTop: "17px",
                //   padding: "15px",
                fontWeight: "bold",
                // textTransform: "upp",
                letterSpacing: "1px",
              }}
              // sx={{ backgroundColor: "#063970" }}
              variant="contained"
              size="large"
            >
              Show More{" "}
              <ArrowForwardIosIcon
                sx={{ fontSize: "15px", marginLeft: "10px" }}
              />
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default GeneralPlatform;
