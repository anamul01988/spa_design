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
    // "&, &:before, &:after": {
    "&::before": {
      // color: "red",
      content: '""',

      height: "4px",
      width: "72px",

      backgroundColor: "#00C194",
      border: "none",
      borderRadius: "10px",
      position: "absolute",
      bottom: "-54px",
      // left: "0"
    },
  },
});
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
          backgroundColor: "#1B3858",
          color: "#fff",
          fontSize: "1.5rem",
          // flexDirection: "column",
          borderTop: "1px solid #ccc",
        }}
      >
        <Grid container spacing={2}>
          <Grid style={{ paddingRight: "25px" }} item sm={12} md={3} xs={12}>
            <Typography
              className={classes.root}
              sx={{ mb: "40px", fontSize: "24px" }}
              variant="h6"
              component="div"
            >
              {/* <ImHome
                style={{
                  fontSize: "24px",
                  color: "#00C194",
                  marginRight: "5px",
                  marginTop: "-5px",
                }}
              /> */}
              <img
                src={ghoramiLogo}
                style={{ height: "auto", width: "50px", marginRight: "10px" }}
                alt="ghoramiLogo"
              />
              Ghorami Desk
            </Typography>
            <Typography sx={{ mb: "40px" }} variant="subtitle1" align="left">
              Ghorami desk is an awesome tool to track working hour & monitor to
              work from anywhere. Easier for managing individual/team work
              dynamically that Can reduce cost & increase productivity.
            </Typography>
            <Stack
              style={{ display: "flex", flexWrap: "wrap" }}
              direction="row"
              spacing={2}
            >
              <a
                style={{ textDecoration: "none", color: "#fff" }}
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/ghoramidesk"
              >
                {" "}
                <Avatar
                  variant="rounded"
                  sx={{
                    width: 37,
                    height: 46,
                    backgroundColor: "#213E5D",
                    marginBottom: "10px",
                  }}
                >
                  <GrFacebookOption style={{ fontSize: "24px" }} />{" "}
                </Avatar>
              </a>
              <a
                style={{ textDecoration: "none", color: "#fff" }}
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/DeskGhorami"
              >
                {" "}
                <Avatar
                  variant="rounded"
                  sx={{
                    width: 37,
                    height: 46,
                    backgroundColor: "#213E5D",
                    marginBottom: "10px",
                  }}
                >
                  <FiTwitter style={{ fontSize: "24px" }} />
                </Avatar>
              </a>

              {/* <Avatar
                variant="rounded"
                sx={{
                  width: 37,
                  height: 46,
                  backgroundColor: "#213E5D",
                  marginBottom: "10px",
                }}
              >
                <FaPinterestP style={{ fontSize: "24px" }} />{" "}
              </Avatar> */}
              <a
                style={{ textDecoration: "none", color: "#fff" }}
                target="_blank"
                rel="noreferrer"
                href="https://api.whatsapp.com/send?phone=8801790675227&text=HelloGdesk"
              >
                {" "}
                <Avatar
                  variant="rounded"
                  sx={{
                    width: 37,
                    height: 46,
                    backgroundColor: "#213E5D",
                    marginBottom: "10px",
                  }}
                >
                  <RiWhatsappLine style={{ fontSize: "24px" }} />{" "}
                </Avatar>
              </a>

              <a
                style={{ textDecoration: "none", color: "#fff" }}
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/ghorami-technology/"
              >
                {" "}
                <Avatar
                  variant="rounded"
                  sx={{
                    width: 37,
                    height: 46,
                    backgroundColor: "#213E5D",
                    marginBottom: "10px",
                  }}
                >
                  <FaLinkedinIn style={{ fontSize: "24px" }} />{" "}
                </Avatar>
              </a>
            </Stack>
          </Grid>
          <Grid style={{ paddingRight: "25px" }} item md={3} sm={12} xs={12}>
            <Typography
              className={classes.root}
              sx={{ mb: "40px", fontSize: "24px" }}
              variant="h6"
              component="div"
            >
              Quick Links
            </Typography>
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              target="_blank"
              rel="noreferrer"
              href="https://ghorami.com/about/"
            >
              <Typography variant="subtitle1" align="left">
                <GoPrimitiveDot
                  style={{ marginTop: "-3px", marginRight: "5px" }}
                />{" "}
                About Ghorami
              </Typography>
            </a>
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to="/book_a_demo"
            >
              <Typography variant="subtitle1" align="left">
                <GoPrimitiveDot
                  style={{ marginTop: "-3px", marginRight: "5px" }}
                />{" "}
                Contact Us
              </Typography>
            </Link>
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              target="_blank"
              rel="noreferrer"
              href="https://ghorami.com/news/"
            >
              {" "}
              <Typography variant="subtitle1" align="left">
                <GoPrimitiveDot
                  style={{ marginTop: "-3px", marginRight: "5px" }}
                />{" "}
                News
              </Typography>
            </a>
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              target="_blank"
              rel="noreferrer"
              href="https://ghorami.com/privacy/"
            >
              {" "}
              <Typography variant="subtitle1" align="left">
                <GoPrimitiveDot
                  style={{ marginTop: "-3px", marginRight: "5px" }}
                />{" "}
                Privacy Policy
              </Typography>
            </a>
          </Grid>
          <Grid style={{ paddingRight: "25px" }} item md={3} sm={12} xs={12}>
            <Typography
              className={classes.root}
              sx={{ mb: "40px", fontSize: "24px" }}
              variant="h6"
              component="div"
            >
              Vlog
            </Typography>

            <ImageList
              cols={3}

              // rowHeight={164}
            >
              {blog?.map((item) => (
                <ImageListItem key={item.image}>
                  {/* <button onClick={() => openTab(item.web_url)}> */}
                  <Box>
                    <a
                      style={{ textDecoration: "none", color: "#fff" }}
                      target="_blank"
                      rel="noreferrer"
                      href={item.web_url}
                    >
                      <Box className="all-photos">
                        <img
                          className="all-photos-img"
                          style={{
                            // padding: "3px",
                            // height: "auto",
                            // width: "90px",
                            cursor: "pointer",
                          }}
                          src={`${item?.image}?w=164&h=164&fit=crop&auto=format`}
                          // srcSet={`${item?.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                          alt={item?.title}
                          loading="lazy"
                        />
                      </Box>
                    </a>
                  </Box>
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>

          <Grid item style={{ paddingRight: "25px" }} md={3} sm={12} xs={12}>
            <Typography
              className={classes.root}
              align="left"
              sx={{ mb: "40px", fontSize: "24px" }}
              variant="h6"
              component="div"
            >
              Contact
            </Typography>
            <Typography
              variant="subtitle1"
              // sx={{ fontWeight: "bold" }}
              align="left"
            >
              <GoLocation style={{ fontSize: "17px", marginRight: "5px" }} /> Al
              Numaimeya-2, Ajman, UAE
            </Typography>
            <Typography variant="subtitle1" align="left">
              <HiOutlineMail style={{ fontSize: "17px", marginRight: "5px" }} />{" "}
              ghoramidesk@gmail.com
            </Typography>
            <Typography variant="subtitle1" align="left">
              <BsFillTelephoneFill
                style={{ fontSize: "17px", marginRight: "5px" }}
              />{" "}
              (+880) 1849225187
            </Typography>
            <Typography variant="subtitle1" align="left">
              <BsFillTelephoneFill
                style={{ fontSize: "17px", marginRight: "5px" }}
              />{" "}
              (+971) 558332996
            </Typography>
            <Typography variant="subtitle1" align="left">
              <a
                style={{
                  textDecoration: "none",
                  color: "green",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
                target="_blank"
                rel="noreferrer"
                href="https://ghroamitechnology.com"
              >
                ghoramitechnology.com
              </a>
            </Typography>
          </Grid>
        </Grid>
        <Grid sx={{ mt: "20px" }} container spacing={1}>
          <Grid item md={4} sm={12}>
            {/* <Box
              component="div"
              sx={{ mr: "8px", display: "flex", alignItems: "center" }}
            >
              <Typography sx={{ mr: "8px" }} variant="subtitle2">
                PAYMENT METHODS
              </Typography>
              <ImageList
                // sx={{ width: 100, height: 150 }}
                cols={3}
                // rowHeight={164}
              >
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      style={{ height: "50px", width: "70px" }}
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box> */}
          </Grid>
          <Grid item xs={12} md={12} sx={{ display: "flex" }}>
            {/* <Box
              component="div"
              sx={{ mr: "8px", display: "flex", alignItems: "center" }}
              // display="flex"
              // align-items="center"
            >
              <Typography sx={{ mr: "8px" }} variant="subtitle2">
                BUY WITH CONFIDENCE
              </Typography>
              <ImageList
                // sx={{ width: 100, height: 150 }}
                cols={3}
                // rowHeight={164}
              >
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      style={{ height: "50px", width: "70px" }}
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box> */}
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          // marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: "#082039",
          color: "#fff",
          fontSize: "1.5rem",
          flexDirection: "column",
          // borderTop: "1px solid #ccc",
        }}
      >
        <Typography variant="subtitle2" align="center">
          &copy; 2018 ghorami.com. All rights reserved |Powered by Ghorami.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
];
