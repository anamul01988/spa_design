import React from "react";

import { useTheme } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SwipeableViews from "react-swipeable-views";
import PropTypes from "prop-types";
import { borderRadius } from "@mui/system";
import Image from "material-ui-image";
import img1 from '../../../assets/general-home/final/tracker.png';
import img2 from '../../../assets/general-home/final/project_&_task.png';
import img3 from '../../../assets/general-home/final/live_chat.png';
import img4 from '../../../assets/general-home/final/gant_chart.png';
import { Link } from "react-router-dom";

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

function GeneralFeatures() {
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
        //   background: "#777"
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
        Awesome New Features
      </Typography>
      <Grid
        borderRadius="5%"
        style={{ background: "#FFF8FB", padding: "30px", marginLeft: "0px" }}
        container
        spacing={2}
      >
        {/* <Grid item xs={12} md={12}></Grid> */}
        <Grid xs={12} md={12} lg={12} style={{ marginBottom: "40px" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab
              style={{ fontWeight: "bold" }}
              label="Digital Workplace"
              {...a11yProps(0)}
            />
            <Tab
              style={{ fontWeight: "bold" }}
              label="Project & Task"
              {...a11yProps(1)}
            />
            <Tab
              style={{ fontWeight: "bold" }}
              label="Live Chatting"
              {...a11yProps(3)}
            />
            <Tab
              style={{ fontWeight: "bold" }}
              label="Gantt Chart"
              {...a11yProps(4)}
            />
            {/* <Tab label="Item Five" {...a11yProps(5)} />
                <Tab label="Item Six" {...a11yProps(6)} />
                <Tab label="Item Seven" {...a11yProps(7)} /> */}
          </Tabs>
        </Grid>

        <Grid xs={12} md={12} lg={12}>
          <Box
            sx={{
              //    maxWidth: { xs: 380, sm: 480 },
              width: "100%",
              //   bgcolor: "background.paper"
            }}
          >
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <Grid container spacing={2}>
                  <Grid item sx={{ paddingTop: "16px" }} xs={12} sm={12} md={5}>
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
                        // marginTop: "57px",
                        marginBottom: "17px",
                        letterSpacing: "1px",
                        textTransform: "capitalize",
                        // cursor: "pointer",
                      }}
                    >
                      Make your life ease with digital workplace
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
                        // cursor: "pointer",
                      }}
                    >
                      Manage your team work dynamically in which every documents
                      will be reserved and platform will become convenient. Keep
                      track your work hour easily through time tracking feature.
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
                      Replace : Click Up || Monday || Jira || Trello
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
                  </Grid>
                  <Grid item xs={12} sm={12} md={7}>
                    <Box
                      component="img"
                      sx={{
                        height: "100%",
                        width: "100%",
                        //   maxHeight: { xs: 233, md: "650px" },
                        //   maxWidth: { xs: 350, md: "960px" },
                      }}
                      alt="The house from the offer."
                      // src="https://clickup.com/landing/images/main/views/all.png"
                      src={img1}
                    />
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={5}>
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
                        // marginTop: "57px",
                        marginBottom: "17px",
                        letterSpacing: "1px",
                        textTransform: "capitalize",
                        // cursor: "pointer",
                      }}
                    >
                      All task of a project in a single room
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
                        // cursor: "pointer",
                      }}
                    >
                      Create & Manage unlimited tasks in the convenient way.
                      Ghorami Desk provides drag and drop feature facility for
                      utilize time.
                    </Typography>
                    <Typography
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
                      {/* Replace : Click Up || Monday || Jira || Trello */}
                    </Typography>

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
                  </Grid>
                  <Grid item xs={12} sm={12} md={7}>
                    <Box
                      component="img"
                      sx={{
                        height: "100%",
                        width: "100%",
                        //   maxHeight: { xs: 233, md: "650px" },
                        //   maxWidth: { xs: 350, md: "960px" },
                      }}
                      alt="The house from the offer."
                      // src="https://clickup.com/landing/images/main/views/all.png"
                      src={img2}
                    />
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={5}>
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
                        // marginTop: "57px",
                        marginBottom: "17px",
                        letterSpacing: "1px",
                        textTransform: "capitalize",
                        // cursor: "pointer",
                      }}
                    >
                      Connect everyone together in live chat
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
                        // cursor: "pointer",
                      }}
                    >
                      Get connected by live chat on Ghorami Desk. Share your
                      file & own opinion with each other. To know something
                      special everyone should focus and discuss.
                    </Typography>
                    <Typography
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
                      {/* Replace : Click Up || Monday || Jira || Trello */}
                    </Typography>

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
                  </Grid>
                  <Grid item xs={12} sm={12} md={7}>
                    <Box
                      component="img"
                      sx={{
                        height: "100%",
                        width: "100%",
                        //   maxHeight: { xs: 233, md: "650px" },
                        //   maxWidth: { xs: 350, md: "960px" },
                      }}
                      alt="The house from the offer."
                      // src="https://clickup.com/landing/images/main/views/all.png"
                      src={img3}
                    />
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={3} dir={theme.direction}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={5}>
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
                        // marginTop: "57px",
                        marginBottom: "17px",
                        letterSpacing: "1px",
                        textTransform: "capitalize",
                        // cursor: "pointer",
                      }}
                    >
                      Visualize project status & reports in Gantt chart
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
                        // cursor: "pointer",
                      }}
                    >
                      Project status, summery , starting date, ending date & all
                      necessery tools are set up in Gantt chart. Everything is
                      visible to understand easily that provide initial comfort
                      structure
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
                      Replace : Click Up || Monday || Jira || Trello
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
                  </Grid>
                  <Grid item xs={12} sm={12} md={7}>
                    <Box
                      component="img"
                      sx={{
                        height: "100%",
                        width: "100%",
                        //   maxHeight: { xs: 233, md: "650px" },
                        //   maxWidth: { xs: 350, md: "960px" },
                      }}
                      alt="The house from the offer."
                      // src="https://clickup.com/landing/images/main/views/all.png"
                      src={img4}
                    />
                  </Grid>
                </Grid>
              </TabPanel>
            </SwipeableViews>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default GeneralFeatures;
