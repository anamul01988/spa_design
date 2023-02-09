import React from "react";
import { Box, Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const sectionStyle = {
  height: "auto",
  backgroundImage:
    "url('https://ghorami.com/ghoramidesk/banner_all/home_banner.png') ",

  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

function GeneralHomeBanner() {
  return (
    <Box
      // position="static"
      sx={{
        paddingY: "100px",
        paddingX: { lg: "80px", md: "50px", sm: "30px", xs: "20px" },
        overflow: "hidden",
      }}
      style={sectionStyle}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={7}>
          <Typography
            variant="subtitle2"
            component="p"
            sx={{
              //   display: { xs: "none" },
              color: "#063970",
              //   width: "250px",
              fontWeight: "bold",
              // fontSize: "1.5rem",

              textTransform: "capitalize",
              // cursor: "pointer",
            }}
          >
            Welcome to Ghorami
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              //   display: { xs: "none" },
              color: "#000",
              //   width: "250px",
              fontWeight: "bold",
              // fontSize: "1.5rem",
              // lineHeight:"80px",
              marginTop: "28px",
              marginBottom: "24px",
              letterSpacing: "1px",
              textTransform: "capitalize",
              // cursor: "pointer",
            }}
          >
            Easiest Tool to Manage People
          </Typography>
          <Typography
            variant="h6"
            component="h5"
            sx={{
              //   display: { xs: "none" },
              color: "#777",
              //   width: "250px",
              fontWeight: "bold",
              // fontSize: "1.5rem",
              // cursor: "pointer",
            }}
          >
            Manage tasks, files & communication in the simplest way & trusted
            app to make days beautifull. Ghorami provides professional siplest
            work of Android , ios, web , Graphics including backend server.
          </Typography>
          <Box
            sx={{ "& button": { m: 1 }, display: "flex", marginTop: "28px" }}
          >
            <div>
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
            </div>
            <div>
              <Link to="/features" style={{textDecoration:"none"}}>
                {" "}
                <Button
                  style={{
                    // padding: "15px",
                    fontWeight: "bold",
                    // textTransform: "capitalize",
                    letterSpacing: "1px",
                  }}
                  variant="outlined"
                  size="large"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={5}>
          <Box sx={{ textAlign: "center" }}>
            <Box
              component="img"
              sx={{
                height: "100%",
                width: "100%",
                //   marginTop: "67px",
                // maxHeight: { xs: "300px", md: "300px" },
                // maxWidth: { xs: "456px", md: "400px" },
              }}
              alt="The house from the offer."
              src="https://ghorami.com/ghoramidesk/banner_all/home_pic.png"
              // src="   https://ncmaz.chisnghiax.com/wp-content/uploads/2021/10/SVG-subcribe2.webp"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default GeneralHomeBanner;
