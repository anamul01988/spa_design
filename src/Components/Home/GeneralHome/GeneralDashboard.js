import React from "react";

import { useTheme } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SwipeableViews from "react-swipeable-views";
import PropTypes from "prop-types";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import img1 from "../../../assets/general-home/final/dashboard/dash_summery.png" ;
import img2 from "../../../assets/general-home/final/dashboard/dash_note.png" ;
import img3 from "../../../assets/general-home/final/dashboard/dash_gantt.png" ;
import img4 from "../../../assets/general-home/final/dashboard/dash_teammember.png" ;
import img5 from "../../../assets/general-home/final/dashboard/dash_work_hour.png" ;
import { Link } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function GeneralDashboard() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <Box
      sx={{
        paddingY: "50px",
        paddingX: { lg: "80px", md: "50px", sm: "30px", xs: "20px" },
        background: "#fafafa",
        marginX: "auto",
      }}
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
          paddingBottom: "30px",
          // cursor: "pointer",
        }}
      >
        Dashboard
      </Typography>

      {/* <Grid item xs={12} md={12}></Grid> */}
      <Box
        sx={{
          background: "#F2F0FD",
          // paddingX: { lg: "200px", md: "100px", sm: "30px", xs: "10px" },
          // paddingY: "50px",
        }}
        style={{ borderRadius: "0px 0px 60px 60px" }}
      >
        <Box
          sx={{
            paddingX: { lg: "200px", md: "100px", sm: "30px", xs: "10px" },
            paddingY: "50px",
          }}
        >
          <Box
            sx={{
              //    maxWidth: { xs: 380, sm: 480 },
              width: "100%",
              textAlign: "center",
              marginBottom: "35px",
              //   display: "flex",
              //  flexDirection:"column"
              //   bgcolor: "background.paper"
            }}
          >
            <Tabs
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab
                style={{ fontWeight: "bold" }}
                label="Summery"
                {...a11yProps(0)}
              />
              <Tab
                style={{ fontWeight: "bold" }}
                label="Notes"
                {...a11yProps(1)}
              />
              <Tab
                style={{ fontWeight: "bold" }}
                label="Gantt"
                {...a11yProps(2)}
              />
              <Tab
                style={{ fontWeight: "bold" }}
                label="Team"
                {...a11yProps(3)}
              />
              <Tab
                style={{ fontWeight: "bold" }}
                label="Work Time"
                {...a11yProps(4)}
              />

              {/* <Tab label="Item Five" {...a11yProps(5)} />
                <Tab label="Item Six" {...a11yProps(6)} />
                <Tab label="Item Seven" {...a11yProps(7)} /> */}
            </Tabs>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
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
                    marginTop: "57px",
                    marginBottom: "17px",
                    letterSpacing: "1px",
                    textTransform: "Capitalize",
                    // cursor: "pointer",
                  }}
                >
                  See project summery at a glance
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
                  Everything is here to see Total project, task, messages with
                  new invitation & controlling easily.
                </Typography>
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
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
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
                    marginTop: "17px",
                    marginBottom: "17px",
                    letterSpacing: "1px",
                    textTransform: "capitalize",
                    // cursor: "pointer",
                  }}
                >
                  All Essential Notes
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
                  Notes are required to maintain good structures & providing
                  strength of work. Reserved all notes together and safely.
                </Typography>
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

                    textTransform: "capitalize",
                    // cursor: "pointer",
                  }}
                >
                  Replace : Monday || Jira || Trello
                </Typography> */}

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
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
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
                    marginTop: "17px",
                    marginBottom: "17px",
                    letterSpacing: "1px",
                    textTransform: "capitalize",
                    // cursor: "pointer",
                  }}
                >
                  Professional Gantt Chart
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
                  All information in one structure to introduce with our
                  informatics data. Everything is set up to contribute our
                  functionality and let know everyone.
                </Typography>
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
              </TabPanel>
              <TabPanel value={value} index={3} dir={theme.direction}>
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
                    marginTop: "17px",
                    marginBottom: "17px",
                    letterSpacing: "1px",
                    textTransform: "capitalize",
                    // cursor: "pointer",
                  }}
                >
                  Meet all team member
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
                  See team-member from all of your projects & tasks in
                  individual interface.
                </Typography>
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
              </TabPanel>
              <TabPanel value={value} index={4} dir={theme.direction}>
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
                    marginTop: "17px",
                    marginBottom: "17px",
                    letterSpacing: "1px",
                    textTransform: "capitalize",
                    // cursor: "pointer",
                  }}
                >
                  Utilize your working hour
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
                  Get actual work time for a project throughout Ghormi time
                  tracker
                </Typography>
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
              </TabPanel>
            </SwipeableViews>
          </Box>

          <Box>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
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
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
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
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
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
              </TabPanel>
              <TabPanel value={value} index={3} dir={theme.direction}>
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
              </TabPanel>
              <TabPanel value={value} index={4} dir={theme.direction}>
                <Box
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                    //   maxHeight: { xs: 233, md: "650px" },
                    //   maxWidth: { xs: 350, md: "960px" },
                  }}
                  alt="The house from the offer."
                  src={img5}
                />
              </TabPanel>
            </SwipeableViews>
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

export default GeneralDashboard;
