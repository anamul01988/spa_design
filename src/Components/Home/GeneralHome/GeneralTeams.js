import React from "react";

import { useTheme } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SwipeableViews from "react-swipeable-views";
import PropTypes from "prop-types";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { FaTasks } from "react-icons/fa";
// import { GiMushroomHouse } from "react-icons/gi";
import { GiDesk } from "react-icons/gi";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";
import { MdTask } from "react-icons/md";
import { FcParallelTasks } from "react-icons/fc";
import { AiFillProject } from "react-icons/ai";
import { VscCommentDiscussion } from "react-icons/vsc";
import { TiCloudStorageOutline } from "react-icons/ti";
import { CgTimer } from "react-icons/cg";
import { TbColorSwatch } from "react-icons/tb";
import { MdOutlineScreenShare } from "react-icons/md";
import { MdStorage } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { MdAssignmentInd } from "react-icons/md";
import { FiCheckSquare } from "react-icons/fi";
import img1 from "../../../assets/general-home/final/team/room.png";
import img2 from "../../../assets/general-home/final/team/task.png";
import img3 from "../../../assets/general-home/final/team/tracker.png";
import img4 from "../../../assets/general-home/final/team/session_manage.png";
import img5 from "../../../assets/general-home/final/team/work_calendar.png";
import img6 from "../../../assets/general-home/final/team/team.png";
import "./GeneralTeams.css";

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

function GeneralTeams() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  let iconStyles = { color: "white", fontSize: "43px" };
  return (
    <Box
      sx={{
        paddingY: "50px",
        paddingX: { lg: "80px", md: "50px", sm: "30px", xs: "20px" },
        background: "#fafafa",
        marginX: "auto",
      }}
    >
      {/* <Grid item xs={12} md={12}></Grid> */}
      <Box
        sx={{
          background: "#ECF9FD",
          // paddingX: { lg: "200px", md: "100px", sm: "30px", xs: "10px" },
          // paddingY: "50px",
        }}
        style={{ borderRadius: "0px 0px 60px 60px" }}
      >
        <Typography
          variant="subtitle2"
          component="p"
          sx={{
            //   display: { xs: "none" },
            color: "green",
            //   width: "250px",
            textAlign: "center",
            fontWeight: "bold",
            // fontSize: "1.5rem",

            textTransform: "capitalize",
            paddingTop: "50px",
            paddingBottom: "10px",
            // cursor: "pointer",
          }}
        >
          Build For Teams
        </Typography>
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
            // paddingTop: "50px",
            paddingBottom: "10px",
            // cursor: "pointer",
          }}
        >
          Built for teams from 1 to 1,000+.
        </Typography>
        <Box
          sx={{
            paddingX: { lg: "100px", md: "50px", sm: "20px", xs: "10px" },
            paddingBottom: "50px",
          }}
        >
          <Box
            sx={{
              //    maxWidth: { xs: 380, sm: 480 },
              width: "100%",
              //   textAlign: "center",
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
                label="Project Management"
                {...a11yProps(0)}
              />
              <Tab
                style={{ fontWeight: "bold" }}
                label="Task Management"
                {...a11yProps(1)}
              />
              <Tab
                style={{ fontWeight: "bold" }}
                label="Tracker"
                {...a11yProps(2)}
              />
              <Tab
                style={{ fontWeight: "bold" }}
                label="Time Management"
                {...a11yProps(3)}
              />
              <Tab
                style={{ fontWeight: "bold" }}
                label="Work Calender"
                {...a11yProps(4)}
              />
              <Tab
                style={{ fontWeight: "bold" }}
                label="Team"
                {...a11yProps(5)}
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
              <TabPanel
                style={{ marginTop: "100px" }}
                value={value}
                index={0}
                dir={theme.direction}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} md={5}>
                    <Box
                      sx={{
                        display: "flex",
                        // alignItems: "center",
                        // marginTop: "40px",
                      }}
                    >
                      <span
                        style={{
                          borderRadius: "0px 0px 60px 60px",
                          height: "54px",
                          width: "60px",
                          backgroundColor: "green",
                          marginTop: "8px",
                        }}
                        // className={circleClasses}
                      >
                        <GiDesk style={iconStyles} />
                      </span>
                      <Box sx={{ marginLeft: "20px" }}>
                        <Typography
                          variant="h6"
                          component="h6"
                          sx={{
                            //   display: { xs: "none" },
                            color: "#000",
                            //   width: "250px",
                            fontWeight: "bold",
                            // fontSize: "1.5rem",
                            // lineHeight:"80px",
                            // marginTop: "37px",
                            marginBottom: "10px",
                            letterSpacing: "1px",
                            textTransform: "capitalize",
                            // cursor: "pointer",
                          }}
                        >
                          Project Room
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="h5"
                          sx={{
                            color: "#777",

                            fontWeight: "bold",
                          }}
                        >
                          Manage any project from start to finish with highly
                          customizable views that make project planning a
                          breeze.
                        </Typography>
                        {/* <Button
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
                          size="medium"
                        >
                          Get Started
                        </Button> */}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        // alignItems: "center",
                        marginTop: "40px",
                      }}
                    >
                      <span
                        style={{
                          borderRadius: "0px 0px 60px 60px",
                          height: "54px",
                          width: "50px",
                          backgroundColor: "#e94a0e",
                          marginTop: "8px",
                        }}
                        // className={circleClasses}
                      >
                        <MdOutlinePlaylistAddCheck style={iconStyles} />
                      </span>
                      <Box sx={{ marginLeft: "20px" }}>
                        <Typography
                          variant="h6"
                          component="h6"
                          sx={{
                            //   display: { xs: "none" },
                            color: "#000",
                            //   width: "250px",
                            fontWeight: "bold",
                            // fontSize: "1.5rem",
                            // lineHeight:"80px",
                            // marginTop: "37px",
                            marginBottom: "10px",
                            letterSpacing: "1px",
                            textTransform: "capitalize",
                            // cursor: "pointer",
                          }}
                        >
                          Task List
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="h5"
                          sx={{
                            color: "#777",

                            fontWeight: "bold",
                          }}
                        >
                          Manage your tasks with drag and drop feature facility
                          for utilize time.
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        // alignItems: "center",
                        marginTop: "40px",
                      }}
                    >
                      <span
                        style={{
                          borderRadius: "0px 0px 60px 60px",
                          height: "54px",
                          width: "44px",
                          backgroundColor: "#063970",
                          marginTop: "8px",
                        }}
                        // className={circleClasses}
                      >
                        <AiFillProject style={iconStyles} />
                      </span>
                      <Box sx={{ marginLeft: "20px" }}>
                        <Typography
                          variant="h6"
                          component="h6"
                          sx={{
                            //   display: { xs: "none" },
                            color: "#000",
                            //   width: "250px",
                            fontWeight: "bold",
                            // fontSize: "1.5rem",
                            // lineHeight:"80px",
                            // marginTop: "37px",
                            marginBottom: "10px",
                            letterSpacing: "1px",
                            textTransform: "capitalize",
                            // cursor: "pointer",
                          }}
                        >
                          Project Status
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="h5"
                          sx={{
                            color: "#777",

                            fontWeight: "bold",
                          }}
                        >
                          Project Status through Gantt Chart.
                        </Typography>
                        {/* <Button
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
                          size="medium"
                        >
                          Get Started
                        </Button> */}
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <Box sx={{ marginRight: "20px" }}>
                      <Box
                        component="img"
                        sx={{
                          height: "100%",
                          width: "100%",
                          //   marginTop: "40px",
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
              <TabPanel
                style={{ marginTop: "100px" }}
                value={value}
                index={1}
                dir={theme.direction}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} md={5}>
                    <Box
                      sx={{
                        display: "flex",
                        // justifyContent:"center",
                        // alignItems: "center",
                        // marginTop: "40px",
                      }}
                    >
                      <span
                        style={{
                          borderRadius: "0px 0px 60px 60px",
                          height: "54px",
                          width: "46px",
                          backgroundColor: "orange",
                          marginTop: "8px",
                        }}
                        // className={circleClasses}
                      >
                        <FcParallelTasks style={iconStyles} />
                      </span>
                      <Box sx={{ marginLeft: "20px" }}>
                        <Typography
                          variant="h6"
                          component="h6"
                          sx={{
                            //   display: { xs: "none" },
                            color: "#000",
                            //   width: "250px",
                            fontWeight: "bold",
                            // fontSize: "1.5rem",
                            // lineHeight:"80px",
                            // marginTop: "37px",
                            marginBottom: "10px",
                            letterSpacing: "1px",
                            textTransform: "capitalize",
                            // cursor: "pointer",
                          }}
                        >
                          Multitask in a single row
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="h5"
                          sx={{
                            color: "#777",

                            fontWeight: "bold",
                          }}
                        >
                          Manage multiple task for a project in a room.
                        </Typography>
                        {/* <Button
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
                          size="medium"
                        >
                          Get Started
                        </Button> */}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        // alignItems: "center",
                        marginTop: "40px",
                      }}
                    >
                      <span
                        style={{
                          borderRadius: "0px 0px 60px 60px",
                          height: "54px",
                          width: "46px",
                          backgroundColor: "green",
                          marginTop: "8px",
                        }}
                        // className={circleClasses}
                      >
                        <FaTasks style={iconStyles} />
                      </span>
                      <Box sx={{ marginLeft: "20px" }}>
                        <Typography
                          variant="h6"
                          component="h6"
                          sx={{
                            //   display: { xs: "none" },
                            color: "#000",
                            //   width: "250px",
                            fontWeight: "bold",
                            // fontSize: "1.5rem",
                            // lineHeight:"80px",
                            // marginTop: "37px",
                            marginBottom: "10px",
                            letterSpacing: "1px",
                            textTransform: "capitalize",
                            // cursor: "pointer",
                          }}
                        >
                          Task Priority
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="h5"
                          sx={{
                            color: "#777",

                            fontWeight: "bold",
                          }}
                        >
                          Rearrange task module with single drag and drop
                          feature for setting work priority.
                        </Typography>
                        {/* <Button
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
                          size="medium"
                        >
                          Get Started
                        </Button> */}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        // alignItems: "center",
                        marginTop: "40px",
                      }}
                    >
                      <span
                        style={{
                          borderRadius: "0px 0px 60px 60px",
                          height: "54px",
                          width: "46px",
                          backgroundColor: "rgb(6, 57, 112)",
                          marginTop: "8px",
                        }}
                        // className={circleClasses}
                      >
                        <MdTask style={iconStyles} />
                      </span>
                      <Box sx={{ marginLeft: "20px" }}>
                        <Typography
                          variant="h6"
                          component="h6"
                          sx={{
                            //   display: { xs: "none" },
                            color: "#000",
                            //   width: "250px",
                            fontWeight: "bold",
                            // fontSize: "1.5rem",
                            // lineHeight:"80px",
                            // marginTop: "37px",
                            marginBottom: "10px",
                            letterSpacing: "1px",
                            textTransform: "capitalize",
                            // cursor: "pointer",
                          }}
                        >
                          Seamless Update
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="h5"
                          sx={{
                            color: "#777",

                            fontWeight: "bold",
                          }}
                        >
                          Update or close any task through drag and drop.
                        </Typography>
                        {/* <Button
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
                          size="medium"
                        >
                          Get Started
                        </Button> */}
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <Box sx={{ marginRight: "20px" }}>
                      <Box
                        component="img"
                        sx={{
                          height: "100%",
                          width: "100%",
                          //   marginTop: "40px",
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
              <TabPanel
                style={{ marginTop: "100px" }}
                value={value}
                index={2}
                dir={theme.direction}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} md={5}>
                    <Box
                      sx={{
                        display: "flex",
                        // alignItems: "center",
                        // marginTop: "40px",
                      }}
                    >
                      <span
                        style={{
                          borderRadius: "0px 0px 60px 60px",
                          height: "54px",
                          width: "46px",
                          backgroundColor: "rgb(6, 57, 112)",
                          marginTop: "8px",
                        }}
                        // className={circleClasses}
                      >
                        <FiCheckSquare style={iconStyles} />
                      </span>
                      <Box sx={{ marginLeft: "20px" }}>
                        <Typography
                          variant="h6"
                          component="h6"
                          sx={{
                            //   display: { xs: "none" },
                            color: "#000",
                            //   width: "250px",
                            fontWeight: "bold",
                            // fontSize: "1.5rem",
                            // lineHeight:"80px",
                            // marginTop: "37px",
                            marginBottom: "10px",
                            letterSpacing: "1px",
                            textTransform: "capitalize",
                            // cursor: "pointer",
                          }}
                        >
                          Comprehensive Checklist
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="h5"
                          sx={{
                            color: "#777",

                            fontWeight: "bold",
                          }}
                        >
                          Distribute task as a checklist for faster work
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        // alignItems: "center",
                        marginTop: "40px",
                      }}
                    >
                      <span
                        style={{
                          borderRadius: "0px 0px 60px 60px",
                          height: "54px",
                          width: "46px",
                          backgroundColor: "orange",
                          marginTop: "8px",
                        }}
                        // className={circleClasses}
                      >
                        <VscCommentDiscussion style={iconStyles} />
                      </span>
                      <Box sx={{ marginLeft: "20px" }}>
                        <Typography
                          variant="h6"
                          component="h6"
                          sx={{
                            //   display: { xs: "none" },
                            color: "#000",
                            //   width: "250px",
                            fontWeight: "bold",
                            // fontSize: "1.5rem",
                            // lineHeight:"80px",
                            // marginTop: "37px",
                            marginBottom: "10px",
                            letterSpacing: "1px",
                            textTransform: "capitalize",
                            // cursor: "pointer",
                          }}
                        >
                          Live Comment
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="h5"
                          sx={{
                            color: "#777",

                            fontWeight: "bold",
                          }}
                        >
                          Post comment in every work update & make a reply for a
                          member of comment
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        // alignItems: "center",
                        marginTop: "40px",
                      }}
                    >
                      <span
                        style={{
                          borderRadius: "0px 0px 60px 60px",
                          height: "54px",
                          width: "46px",
                          backgroundColor: "green",
                          marginTop: "8px",
                        }}
                        // className={circleClasses}
                      >
                        <TiCloudStorageOutline style={iconStyles} />
                      </span>
                      <Box sx={{ marginLeft: "20px" }}>
                        <Typography
                          variant="h6"
                          component="h6"
                          sx={{
                            //   display: { xs: "none" },
                            color: "#000",
                            //   width: "250px",
                            fontWeight: "bold",
                            // fontSize: "1.5rem",
                            // lineHeight:"80px",
                            // marginTop: "37px",
                            marginBottom: "10px",
                            letterSpacing: "1px",
                            textTransform: "capitalize",
                            // cursor: "pointer",
                          }}
                        >
                          File Management
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="h5"
                          sx={{
                            color: "#777",

                            fontWeight: "bold",
                          }}
                        >
                          Manage and share file with your team member easily for
                          any specific task
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <Box sx={{ marginRight: "20px" }}>
                      <Box
                        component="img"
                        sx={{
                          height: "100%",
                          width: "100%",
                          //   marginTop: "40px",
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
              <TabPanel
                style={{ marginTop: "100px" }}
                value={value}
                index={3}
                dir={theme.direction}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} md={5}>
                    <Box
                      sx={{
                        display: "flex",
                        // alignItems: "center",
                        // marginTop: "40px",
                      }}
                    >
                      <span
                        style={{
                          borderRadius: "0px 0px 60px 60px",
                          height: "54px",
                          width: "46px",
                          backgroundColor: "rgb(6, 57, 112)",
                          marginTop: "8px",
                        }}
                        // className={circleClasses}
                      >
                        <CgTimer style={iconStyles} />
                      </span>
                      <Box sx={{ marginLeft: "20px" }}>
                        <Typography
                          variant="h6"
                          component="h6"
                          sx={{
                            //   display: { xs: "none" },
                            color: "#000",
                            //   width: "250px",
                            fontWeight: "bold",
                            // fontSize: "1.5rem",
                            // lineHeight:"80px",
                            // marginTop: "37px",
                            marginBottom: "10px",
                            letterSpacing: "1px",
                            textTransform: "capitalize",
                            // cursor: "pointer",
                          }}
                        >
                          Time Tracking for a task
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="h5"
                          sx={{
                            color: "#777",

                            fontWeight: "bold",
                          }}
                        >
                          Get a actual time for completing a task through
                          Ghorami time tracker without any third party software.
                        </Typography>
                        {/* <Button
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
                          size="medium"
                        >
                          Get Started
                        </Button> */}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        // alignItems: "center",
                        marginTop: "40px",
                      }}
                    >
                      <span
                        style={{
                          borderRadius: "0px 0px 60px 60px",
                          height: "54px",
                          width: "46px",
                          backgroundColor: "green",
                          marginTop: "8px",
                        }}
                        // className={circleClasses}
                      >
                        <TbColorSwatch style={iconStyles} />
                      </span>
                      <Box sx={{ marginLeft: "20px" }}>
                        <Typography
                          variant="h6"
                          component="h6"
                          sx={{
                            //   display: { xs: "none" },
                            color: "#000",
                            //   width: "250px",
                            fontWeight: "bold",
                            // fontSize: "1.5rem",
                            // lineHeight:"80px",
                            // marginTop: "37px",
                            marginBottom: "10px",
                            letterSpacing: "1px",
                            textTransform: "capitalize",
                            // cursor: "pointer",
                          }}
                        >
                          Session
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="h5"
                          sx={{
                            color: "#777",

                            fontWeight: "bold",
                          }}
                        >
                          Show your activity to team member through Ghorami
                          session manager.
                        </Typography>
                        {/* <Button
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
                          size="medium"
                        >
                          Get Started
                        </Button> */}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        // alignItems: "center",
                        marginTop: "40px",
                      }}
                    >
                      <span
                        style={{
                          borderRadius: "0px 0px 60px 60px",
                          height: "54px",
                          width: "46px",
                          backgroundColor: "orange",
                          marginTop: "8px",
                        }}
                        // className={circleClasses}
                      >
                        <MdOutlineScreenShare style={iconStyles} />
                      </span>
                      <Box sx={{ marginLeft: "20px" }}>
                        <Typography
                          variant="h6"
                          component="h6"
                          sx={{
                            //   display: { xs: "none" },
                            color: "#000",
                            //   width: "250px",
                            fontWeight: "bold",
                            // fontSize: "1.5rem",
                            // lineHeight:"80px",
                            // marginTop: "37px",
                            marginBottom: "10px",
                            letterSpacing: "1px",
                            textTransform: "capitalize",
                            // cursor: "pointer",
                          }}
                        >
                          Screen Share
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="h5"
                          sx={{
                            color: "#777",

                            fontWeight: "bold",
                          }}
                        >
                          Sharing live screen for a task to team leader for
                          getting a positive review
                        </Typography>
                        {/* <Button
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
                          size="medium"
                        >
                          Get Started
                        </Button> */}
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <Box sx={{ marginRight: "20px" }}>
                      <Box
                        component="img"
                        sx={{
                          height: "100%",
                          width: "100%",
                          //   marginTop: "40px",
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
              <TabPanel
                style={{ marginTop: "100px" }}
                value={value}
                index={4}
                dir={theme.direction}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} md={5}>
                    <Box
                      sx={{
                        display: "flex",
                        // alignItems: "center",
                        // marginTop: "40px",
                      }}
                    >
                      <span
                        style={{
                          borderRadius: "0px 0px 60px 60px",
                          height: "54px",
                          width: "46px",
                          backgroundColor: "orange",
                          marginTop: "8px",
                        }}
                        // className={circleClasses}
                      >
                        <FaCalendarAlt style={iconStyles} />
                      </span>
                      <Box sx={{ marginLeft: "20px" }}>
                        <Typography
                          variant="h6"
                          component="h6"
                          sx={{
                            //   display: { xs: "none" },
                            color: "#000",
                            //   width: "250px",
                            fontWeight: "bold",
                            // fontSize: "1.5rem",
                            // lineHeight:"80px",
                            // marginTop: "37px",
                            marginBottom: "10px",
                            letterSpacing: "1px",
                            textTransform: "capitalize",
                            // cursor: "pointer",
                          }}
                        >
                          Work Calender
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="h5"
                          sx={{
                            color: "#777",

                            fontWeight: "bold",
                          }}
                        >
                          Create short note for remember any schedule .
                        </Typography>
                        {/* <Button
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
                          size="medium"
                        >
                          Get Started
                        </Button> */}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        // alignItems: "center",
                        marginTop: "40px",
                      }}
                    >
                      <span
                        style={{
                          borderRadius: "0px 0px 60px 60px",
                          height: "54px",
                          width: "46px",
                          backgroundColor: "green",
                          marginTop: "8px",
                        }}
                        // className={circleClasses}
                      >
                        <MdStorage style={iconStyles} />
                      </span>
                      <Box sx={{ marginLeft: "20px" }}>
                        <Typography
                          variant="h6"
                          component="h6"
                          sx={{
                            //   display: { xs: "none" },
                            color: "#000",
                            //   width: "250px",
                            fontWeight: "bold",
                            // fontSize: "1.5rem",
                            // lineHeight:"80px",
                            // marginTop: "37px",
                            marginBottom: "10px",
                            letterSpacing: "1px",
                            textTransform: "capitalize",
                            // cursor: "pointer",
                          }}
                        >
                          File List
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="h5"
                          sx={{
                            color: "#777",

                            fontWeight: "bold",
                          }}
                        >
                          Get all of your file, comment and checklist of a
                          certain task in date-wise.
                        </Typography>
                        {/* <Button
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
                          size="medium"
                        >
                          Get Started
                        </Button> */}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        // alignItems: "center",
                        marginTop: "40px",
                      }}
                    >
                      <span
                        style={{
                          borderRadius: "0px 0px 60px 60px",
                          height: "54px",
                          width: "46px",
                          backgroundColor: "rgb(6, 57, 112)",
                          marginTop: "8px",
                        }}
                        // className={circleClasses}
                      >
                        <RiTeamFill style={iconStyles} />
                      </span>
                      <Box sx={{ marginLeft: "20px" }}>
                        <Typography
                          variant="h6"
                          component="h6"
                          sx={{
                            //   display: { xs: "none" },
                            color: "#000",
                            //   width: "250px",
                            fontWeight: "bold",
                            // fontSize: "1.5rem",
                            // lineHeight:"80px",
                            // marginTop: "37px",
                            marginBottom: "10px",
                            letterSpacing: "1px",
                            textTransform: "capitalize",
                            // cursor: "pointer",
                          }}
                        >
                          Team List
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="h5"
                          sx={{
                            color: "#777",

                            fontWeight: "bold",
                          }}
                        >
                          See your team member joining date through work
                          calender
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <Box sx={{ marginRight: "20px" }}>
                      <Box
                        component="img"
                        sx={{
                          height: "100%",
                          width: "100%",
                          //   marginTop: "40px",
                          //   maxHeight: { xs: 233, md: "650px" },
                          //   maxWidth: { xs: 350, md: "960px" },
                        }}
                        alt="The house from the offer."
                        src={img5}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel
                style={{ marginTop: "100px" }}
                value={value}
                index={5}
                dir={theme.direction}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} md={5}>
                    <Box
                      sx={{
                        display: "flex",
                        // alignItems: "center",
                        // marginTop: "40px",
                      }}
                    >
                      <span
                        style={{
                          borderRadius: "0px 0px 60px 60px",
                          height: "54px",
                          width: "46px",
                          backgroundColor: "rgb(6, 57, 112)",
                          marginTop: "8px",
                        }}
                        // className={circleClasses}
                      >
                        <RiTeamFill style={iconStyles} />
                      </span>
                      <Box sx={{ marginLeft: "20px" }}>
                        <Typography
                          variant="h6"
                          component="h6"
                          sx={{
                            //   display: { xs: "none" },
                            color: "#000",
                            //   width: "250px",
                            fontWeight: "bold",
                            // fontSize: "1.5rem",
                            // lineHeight:"80px",
                            // marginTop: "37px",
                            marginBottom: "10px",
                            letterSpacing: "1px",
                            textTransform: "capitalize",
                            // cursor: "pointer",
                          }}
                        >
                          Team Member
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="h5"
                          sx={{
                            color: "#777",

                            fontWeight: "bold",
                          }}
                        >
                          See all of your team member in specific task and
                          mention then with comment.
                        </Typography>
                        {/* <Button
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
                          size="medium"
                        >
                          Get Started
                        </Button> */}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        // alignItems: "center",
                        marginTop: "40px",
                      }}
                    >
                      <span
                        style={{
                          borderRadius: "0px 0px 60px 60px",
                          height: "54px",
                          width: "46px",
                          backgroundColor: "green",
                          marginTop: "8px",
                        }}
                        // className={circleClasses}
                      >
                        <GrUserAdmin style={iconStyles} />
                      </span>
                      <Box sx={{ marginLeft: "20px" }}>
                        <Typography
                          variant="h6"
                          component="h6"
                          sx={{
                            //   display: { xs: "none" },
                            color: "#000",
                            //   width: "250px",
                            fontWeight: "bold",
                            // fontSize: "1.5rem",
                            // lineHeight:"80px",
                            // marginTop: "37px",
                            marginBottom: "10px",
                            letterSpacing: "1px",
                            textTransform: "capitalize",
                            // cursor: "pointer",
                          }}
                        >
                          Admin
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="h5"
                          sx={{
                            color: "#777",

                            fontWeight: "bold",
                          }}
                        >
                          You can add and remove admin for supervising any task
                          through mobile number or email id.
                        </Typography>
                        {/* <Button
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
                          size="medium"
                        >
                          Get Started
                        </Button> */}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        // alignItems: "center",
                        marginTop: "40px",
                      }}
                    >
                      <span
                        style={{
                          borderRadius: "0px 0px 60px 60px",
                          height: "54px",
                          width: "46px",
                          backgroundColor: "rgb(6, 57, 112)",
                          marginTop: "8px",
                        }}
                        // className={circleClasses}
                      >
                        <MdAssignmentInd style={iconStyles} />
                      </span>
                      <Box sx={{ marginLeft: "20px" }}>
                        <Typography
                          variant="h6"
                          component="h6"
                          sx={{
                            //   display: { xs: "none" },
                            color: "#000",
                            //   width: "250px",
                            fontWeight: "bold",
                            // fontSize: "1.5rem",
                            // lineHeight:"80px",
                            // marginTop: "37px",
                            marginBottom: "10px",
                            letterSpacing: "1px",
                            textTransform: "capitalize",
                            // cursor: "pointer",
                          }}
                        >
                          Assigner
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="h5"
                          sx={{
                            color: "#777",

                            fontWeight: "bold",
                          }}
                        >
                          Add or remove any expert for certain task throughout
                          email or mobile number.
                        </Typography>
                        {/* <Button
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
                          size="medium"
                        >
                          Get Started
                        </Button> */}
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <Box sx={{ marginRight: "20px" }}>
                      <Box
                        component="img"
                        sx={{
                          height: "100%",
                          width: "100%",
                          //   marginTop: "40px",
                          //   maxHeight: { xs: 233, md: "650px" },
                          //   maxWidth: { xs: 350, md: "960px" },
                        }}
                        alt="The house from the offer."
                        src={img6}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </TabPanel>
            </SwipeableViews>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default GeneralTeams;
