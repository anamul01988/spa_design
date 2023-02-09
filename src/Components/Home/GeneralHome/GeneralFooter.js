import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Image from "material-ui-image";
import women from '../../../assets/team/women.png';
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    "&, &:before, &:after": {
      // "&:after": {
      // "&::before": {
      content: '""',
      position: "absolute",
      bottom: "0",
      left: "0",
      opacity: "0.3",
      height: "auto",
      width: "220px",
      zIndex: "-1",
      // filter: brightness(110%) contrast(58%) saturate(68%) blur(0px) hue-rotate(336deg);
    },
  },
  root1: {
    "&, &:before, &:after": {
      // "&:after": {
      // "&::before": {
      content: '""',
      position: "absolute",
      bottom: "0",
      right: "0",
      opacity: "0.3",
      height: "auto",
      width: "220px",
      zIndex: "-1",
      // filter: brightness(110%) contrast(58%) saturate(68%) blur(0px) hue-rotate(336deg);
    },
  },
});
// const useStyles = makeStyles({
//   root: {
//     "&, &:before, &:after": {
//       // "&:after": {
//       // "&::before": {
//       content: '""',
//       position: "absolute",
//       bottom: "0",
//       left: "0",
//       opacity: "0.3",
//       height: "auto",
//       width: "220px",
//       zIndex: "-1",
//       // filter: brightness(110%) contrast(58%) saturate(68%) blur(0px) hue-rotate(336deg);
//     },
//   },
// });

function GeneralFooter() {
  const classes = useStyles();
  return (
    <Box
      sx={{
        // paddingY: "50px",
        //  paddingX: { lg: "80px", md:"50px", sm:"30px",xs:"20px"},
        // marginTop: "50px",
        background: "#eaf7f4",
        position: "relative",
        height: "auto",
        zIndex: "1",
        // overflow:"hidden"

        // height:"600px"
      }}
    >
      <Box
        component="img"
        //  style={{ position: "absolute", bottom: "0",zIndex:"-1", opacity:".3" }}
        sx={{
          // height: "auto",
          // width: "250px",
          //   maxHeight: { xs: 233, md: "650px" },
          //   maxWidth: { xs: 350, md: "960px" },
          display: { md: "block", sm: "none", xs: "none" },
        }}
        className={classes.root}
        alt="The house from the offer."
        src="https://radiustheme.com/demo/html/homlisti/img/svg/video-bg-2.svg"
      />

      {/* <img
        style={{ position: "absolute", bottom: "0" }}
        src="https://radiustheme.com/demo/html/homlisti/img/svg/video-bg-2.svg"
        alt="logo"
        className={classes.root}
      />
   */}

      <Box
        sx={{
          // paddingY: "50px",
          // paddingX: "200px",
          paddingX: { lg: "200px", md: "100px", sm: "30px", xs: "20px" },
          // display: "flex",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={8}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <Box
                  component="img"
                  //  style={{ position: "absolute", bottom: "0",zIndex:"-1", opacity:".3" }}
                  sx={{
                    height: "134px",
                    width: "208px",
                    // marginTop: "-68px",
                    //   maxHeight: { xs: 233, md: "650px" },
                    //   maxWidth: { xs: 350, md: "960px" },
                  }}
                  // className={classes.root}
                  alt="The house from the offer."
                  // src="https://radiustheme.com/demo/html/homlisti/img/banner/banner1.png"
                  src={women}
                />
              </Box>
              <Box
                sx={{
                  marginLeft: {
                    lg: "40px",
                    md: "30px",
                    sm: "20px",
                    xs: "10px",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  component="h5"
                  sx={{
                    //   display: { xs: "none" },
                    color: "#000",
                    //   width: "250px",
                    fontWeight: "bold",
                    // fontSize: "1.5rem",
                    // lineHeight:"80px",
                    // marginTop: "57px",
                    // marginBottom: "17px",
                    letterSpacing: "1px",
                    textTransform: "capitalize",
                    // cursor: "pointer",
                  }}
                >
                  Make your life ease with digital workplace
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  sx={{
                    //   display: { xs: "none" },
                    color: "#777",
                    //   width: "250px",
                    fontWeight: "bold",
                    // fontSize: "1.5rem",
                    // cursor: "pointer",
                  }}
                >
                  We only work with the best companies around the globe to
                  survey
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { lg: " flex-end", md: "center", xs: "center" },
              marginLeft: {
                lg: "0px",
                md: "30px",
                sm: "60px",
                xs: "60px",
              },
              marginBottom: {
                lg: "0px",
                md: "30px",
                sm: "30px",
                xs: "30px",
              },
            }}
            item
            xs={12}
            md={12}
            lg={4}
          >
            <Box>
              <Link to="/book_a_demo" style={{ textDecoration: "none" }}>
                {" "}
                <Button
                  style={{
                    backgroundColor: "#063970",
                    // marginTop: "22px",
                    //   padding: "15px",
                    fontWeight: "bold",
                    // textTransform: "upp",
                    letterSpacing: "1px",
                  }}
                  // sx={{ backgroundColor: "#063970" }}
                  variant="contained"
                  size="large"
                >
                  Register Now
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        component="img"
        //  style={{ position: "absolute", bottom: "0",zIndex:"-1", opacity:".3" }}
        sx={{
          display: { md: "block", sm: "none", xs: "none" },
        }}
        className={classes.root1}
        alt="The house from the offer."
        src="https://radiustheme.com/demo/html/homlisti/img/svg/video-bg-2.svg"
      />
    </Box>
  );
}

export default GeneralFooter;
