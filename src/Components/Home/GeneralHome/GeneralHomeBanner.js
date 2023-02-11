import React from "react";
import { Box, Button, Divider } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import donate from "./asset/Image.png";
const sectionStyle = {
  height: "auto",
  background: "#EFF7F2",
};

function GeneralHomeBanner() {
  return (
    <Box
      sx={{
        paddingY: "70px",
        paddingX: { lg: "80px", md: "50px", sm: "30px", xs: "20px" },
        overflow: "hidden",
      }}
      style={sectionStyle}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={8}>
          <Box sx={{ position: "relative", display: "flex" }}>
            <Box>
              <Divider
                color="red"
                style={{ background: "black" }}
                sx={{
                  opacity: "1",
                  marginTop: "10px",
                  marginRight: "12px",
                  height: 2,
                  width: "40px",
                }}
              />
            </Box>
            <Box>
              {" "}
              <Typography
                variant="subtitle2"
                component="p"
                sx={{
                  color: "#1D2130",
                  fontWeight: "bold",
                  fontSize: "16px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Donate
              </Typography>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  color: "#1D2130",
                  fontWeight: "bold",
                  fontSize: "53px",
                  marginTop: "28px",
                  marginBottom: "24px",
                  letterSpacing: "1px",
                  textTransform: "capitalize",
                }}
              >
                Making a donation For Nature
              </Typography>
              <Typography
                variant="h6"
                component="h5"
                sx={{
                  color: "#777",
                  fontSize: "16px",
                }}
              >
                When you donate, you’re supporting effective solutions to big
                environmental challenges—an investment in the future of our
                planet.
              </Typography>
              <Box sx={{ "& button": { m: 0 }, marginTop: "28px" }}>
                <Button
                  style={{
                    backgroundColor: "#70C174",
                    padding: "10px 32px",
                    fontSize: "16px",
                    fontWeight: "500",
                    textTransform: "capitalize",
                  }}
                  variant="contained"
                  // size="large"
                >
                  Donate Now
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <Box sx={{ textAlign: "center" }}>
            <Box
              component="img"
              sx={{
                height: "100%",
                width: "100%",
              }}
              alt="The house from the offer."
              src={donate}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default GeneralHomeBanner;
