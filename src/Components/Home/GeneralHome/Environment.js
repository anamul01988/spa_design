import React from "react";
import { Box, Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import "./css/Environment.css";
const Environment = ({ image }) => {
  return (
    <Box
      // position="static"

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
      //   style={sectionStyle}
    >
      <Box className="environmentArea" component="div"></Box>
      <Box>
        <Box className="enviContent">
          <Typography
            variant="h3"
            component="h3"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: "45px",
              marginBottom: "24px",
              letterSpacing: "1px",
              textTransform: "inherit",
              lineHeight: "57px",
              // cursor: "pointer",
            }}
          >
            You can contribute to make the environment greener!
          </Typography>
          <Box>
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
              Join as a volunteer
            </Button>
            <Button
              style={{
                backgroundColor: "#fff",
                color: "#000",
                padding: "10px 32px",
                fontSize: "16px",
                fontWeight: "500",
                textTransform: "capitalize",
                marginLeft:"20px"
              }}
              variant="contained"
              // size="large"
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
