import React from "react";
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import "./css/Footer.css";

const footerListIcon = {
  textDecoration: "none",
  color: "#FFFFFF",
  fontSize: "14px",
  display: "block",
  lineHeight: "40px",
};
const Footer = () => {
  return (
    <Box>
      <Box
        sx={{
          zIndex: "-999",
          paddingY: "50px",
          paddingX: { lg: "80px", md: "50px", sm: "30px", xs: "20px" },
          backgroundColor: "#000",
          color: "#fff",
          fontSize: "1.5rem",
          borderTop: "1px solid #ccc",
        }}
      >
        <Grid container spacing={2}>
          <Grid item sm={4} md={2} xs={4}>
            <Typography
              sx={{ color: "#fff", fontSize: "22px", fontWeight: "bold" }}
              variant="h1"
              component="h2"
            >
              {`{`}Finsweet
            </Typography>
          </Grid>
          <Grid item md={2} sm={4} xs={4}>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "bold" }}
              variant="h6"
              component="div"
            >
              Our team
            </Typography>
            <a style={footerListIcon} target="_blank" rel="noreferrer" href="#">
              <Typography variant="p" align="left">
                About us
              </Typography>
            </a>
            <a style={footerListIcon} target="_blank" rel="noreferrer" href="#">
              <Typography variant="p" align="left">
                Team
              </Typography>
            </a>

            <a style={footerListIcon} target="_blank" rel="noreferrer" href="#">
              <Typography variant="p" align="left">
                What we do
              </Typography>
            </a>

            <a style={footerListIcon} target="_blank" rel="noreferrer" href="#">
              <Typography variant="p" align="left">
                Contact
              </Typography>
            </a>
          </Grid>
          <Grid item md={2} sm={4} xs={4}>
            <Typography
              // className={classes.root}
              sx={{ fontSize: "16px", fontWeight: "bold" }}
              variant="h6"
              component="div"
            >
              More
            </Typography>
            <a style={footerListIcon} target="_blank" rel="noreferrer" href="#">
              <Typography variant="p" align="left">
                About us
              </Typography>
            </a>
            <a style={footerListIcon} target="_blank" rel="noreferrer" href="#">
              <Typography variant="p" align="left">
                Team
              </Typography>
            </a>

            <a style={footerListIcon} target="_blank" rel="noreferrer" href="#">
              <Typography variant="p" align="left">
                What we do
              </Typography>
            </a>

            <a style={footerListIcon} target="_blank" rel="noreferrer" href="#">
              <Typography variant="p" align="left">
                Contact
              </Typography>
            </a>
          </Grid>
          <Grid item md={2} sm={4} xs={4}>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "bold" }}
              variant="h6"
              component="div"
            >
              Connect
            </Typography>
            <a style={footerListIcon} target="_blank" rel="noreferrer" href="#">
              <Typography variant="p" align="left">
                About us
              </Typography>
            </a>
            <a style={footerListIcon} target="_blank" rel="noreferrer" href="#">
              <Typography variant="p" align="left">
                Team
              </Typography>
            </a>

            <a style={footerListIcon} target="_blank" rel="noreferrer" href="#">
              <Typography variant="p" align="left">
                What we do
              </Typography>
            </a>

            <a style={footerListIcon} target="_blank" rel="noreferrer" href="#">
              <Typography variant="p" align="left">
                Contact
              </Typography>
            </a>
          </Grid>
          <Grid item md={4} sm={8} xs={8}>
            <div>
              <Typography
                sx={{
                  fontSize: "37px",
                  fontWeight: "bold",
                  lineHeight: "47px",
                }}
                variant="span"
                component="span"
              >
                Subscribe to get latest updates
              </Typography>
              <form class="newsletter-form">
                <input
                  type="email"
                  placeholder=" your email..."
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
