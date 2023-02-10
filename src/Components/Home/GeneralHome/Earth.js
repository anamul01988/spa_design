import React from "react";
import { Box, Button, Divider } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
const Earth = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box
        sx={{
          paddingY: "70px",
          paddingX: { lg: "80px", md: "50px", sm: "30px", xs: "20px" },
          overflow: "hidden",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                color: "#1D2130",
                fontWeight: "bold",
                fontSize: "45px",
                marginBottom: "24px",
                letterSpacing: "1px",
                textTransform: "inherit",
                // cursor: "pointer",
              }}
            >
              How you can contribute to protect Earth
            </Typography>
            <Typography
              variant="span"
              component="span"
              sx={{
                //   display: { xs: "none" },
                color: "#777",
                //   width: "250px",
                // fontWeight: "bold",
                fontSize: "16px",
                // cursor: "pointer",
                lineHeight: "26px",
              }}
            >
              Challenges—an investment in the future of our When you donate,
              you’re supporting effective solutions to big environmental
              challenges—an investment in the future of our planet.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Box
              sx={{ width: "100%", typography: "body1", paddingLeft: "40px" }}
            >
              <TabContext value={value}>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    width: { lg: "60%", md: "70%", sm: "100%" },
                  }}
                >
                  <TabList
                    sx={{ fontSize: "16px", textTransform: "capitalize" }}
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    TabIndicatorProps={{
                      style: {
                        backgroundColor: "#70C174",
                      },
                    }}
                  >
                    <Tab label="Overview" value="1" />
                    <Tab label="Impact" value="2" />
                    <Tab label="What You get" value="3" />
                  </TabList>
                </Box>
                <TabPanel sx={{ padding: "20px 0px 0px 0px" }} value="1">
                  <Box>
                    <Typography
                      variant="span"
                      component="span"
                      sx={{
                        color: "#777",
                        fontSize: "16px",
                        lineHeight: "26px",
                      }}
                    >
                      lLorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                      <br /> <br /> Aenean faucibus nibh et justo cursus id
                      rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
                      posuere.
                    </Typography>
                  </Box>
                </TabPanel>
                <TabPanel sx={{ padding: "20px 0px 0px 0px" }} value="2">
                  {" "}
                  <Box>
                    <Typography
                      variant="span"
                      component="span"
                      sx={{
                        color: "#777",
                        fontSize: "16px",
                        lineHeight: "26px",
                      }}
                    >
                      lLorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                      <br /> <br /> Aenean faucibus nibh et justo cursus id
                      rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
                      posuere.
                    </Typography>
                  </Box>
                </TabPanel>
                <TabPanel sx={{ padding: "20px 0px 0px 0px" }} value="3">
                  {" "}
                  <Box>
                    <Typography
                      variant="span"
                      component="span"
                      sx={{
                        color: "#777",
                        fontSize: "16px",
                        lineHeight: "26px",
                      }}
                    >
                      lLorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                      <br /> <br /> Aenean faucibus nibh et justo cursus id
                      rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
                      posuere.
                    </Typography>
                  </Box>
                </TabPanel>
              </TabContext>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ marginY: "70px" }} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                color: "#1D2130",
                fontWeight: "bold",
                fontSize: "45px",
                marginBottom: "24px",
                letterSpacing: "1px",
                textTransform: "inherit",
                // cursor: "pointer",
              }}
            >
              How we use your donation
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Typography
              variant="span"
              component="span"
              sx={{
                //   display: { xs: "none" },
                color: "#777",
                //   width: "250px",
                // fontWeight: "bold",
                fontSize: "16px",
                // cursor: "pointer",
                lineHeight: "26px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Nunc ut sem vitae risus tristique posuere.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Typography
              variant="span"
              component="span"
              sx={{
                //   display: { xs: "none" },
                color: "#777",
                //   width: "250px",
                // fontWeight: "bold",
                fontSize: "16px",
                // cursor: "pointer",
                lineHeight: "26px",
              }}
            >
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere. Aenean faucibus nibh et
              justo cursus id rutrum lorem imperdiet.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Earth;
