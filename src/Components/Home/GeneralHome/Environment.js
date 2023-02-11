import React from "react";
import { Box, Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import "./css/Environment.css";
const Environment = ({ image }) => {
  return (
    <Box
      sx={{
        marginBottom: "100px",
        marginX: { lg: "80px", md: "50px", sm: "30px", xs: "20px" },
        overflow: "hidden",
        height: "400px",
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 0",
        backgroundSize: "cover",
        position: "relative",
        zIndex: "100",
      }}
    >
      <Box className="environmentArea" component="div"></Box>
      <Box>
        <Box className="enviContent"
         sx={{width: {lg: "631px", md:"631px",sm:"100%",xs:"100%"},
         paddingX: { lg: "260px", md: "100px", sm: "50px", xs: "10px" },
        }}
         >
          <Typography
            variant="h3"
            component="h3"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: {lg:"45px",md:"35px",sm:"30px",xs:"25px"},
              marginBottom: "24px",
              letterSpacing: "1px",
              textTransform: "inherit",
              lineHeight: "57px",
            }}
          >
            You can contribute to make the environment greener!
          </Typography>
          <Box>
            <Button
              style={{
                backgroundColor: "#70C174",
                padding: {lg:"10px 32px",md:"10px 32px",sm:"10px 15px",xs:"10px 15px"},
                fontSize: "16px",
                fontWeight: "500",
                textTransform: "capitalize",
              }}
              variant="contained"
            >
              Join as a volunteer
            </Button>
            <Button
              style={{
                backgroundColor: "#fff",
                color: "#000",
                padding: {lg:"10px 32px",md:"10px 32px",sm:"10px 15px",xs:"10px 15px"},
                fontSize: "16px",
                fontWeight: "500",
                textTransform: "capitalize",
                marginLeft:"20px"
              }}
              variant="contained"
            >
              Donate
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Environment;
