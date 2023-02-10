import React, { useEffect, useState } from "react";
import { Avatar, Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { ImHome } from "react-icons/im";
import ghoramiLogo from "../../assets/footer/ghorami_logo.png";
import { GrFacebookOption } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";
import { RiWhatsappLine } from "react-icons/ri";
import { FaViber } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import Stack from "@mui/material/Stack";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Link } from "react-router-dom";
import "./css/Footer.css";
const useStyles = makeStyles({
  root: {
    "&::before": {
      content: '""',

      height: "4px",
      width: "72px",

      backgroundColor: "#00C194",
      border: "none",
      borderRadius: "10px",
      position: "absolute",
      bottom: "-54px",
    },
  },
});
const footerListIcon = {
  textDecoration: "none",
  color: "#FFFFFF",
  fontSize: "14px",
  display: "block",
  lineHeight: "40px",
};
const Footer = () => {
  const [blog, setBlog] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    fetch("https://ghorami.com/ghoramidesk/landing_api/pack_vlog.php")
      .then((res) => res.json())
      .then((data) => {
        console.log("blog data", data);
        setBlog(data);
      });
  }, []);
  const openTab = (link) => {
    console.log(link);
    window.open(`'${link}'`);
  };
  return (
    <Box>
      <Box
        sx={{
          // marginTop: "30px",
          zIndex: "-999",
          paddingY: "50px",
          paddingX: { lg: "80px", md: "50px", sm: "30px", xs: "20px" },
          backgroundColor: "#000",
          color: "#fff",
          fontSize: "1.5rem",
          // flexDirection: "column",
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
              // className={classes.root}
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
              // className={classes.root}
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
          <Grid item md={4} sm={6} xs={6}>
            <div>
              <Typography
                sx={{
                  fontSize: "40px",
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
