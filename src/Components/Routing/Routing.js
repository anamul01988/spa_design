import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Box } from "@mui/material";
import Footer from "../Footer/Footer";
import Header from "./../Header/Header";
import GeneralHome from "../Home/GeneralHome/GeneralHome";
import Image from "./Image";
const Error = React.lazy(() => import("../Error/Error"));

const Routing = () => {
  const formData = new FormData();
  useEffect(() => {
    const topButton = document.getElementById("topButton");
    window.onscroll = function () {
      if (window.pageYOffset > 100) {
        topButton.style.display = "block";
        topButton.style.position = "fixed";
        // topButton.style.right = 0;
        topButton.style.left = 0;
        topButton.style.bottom = 0;
        topButton.style.zIndex = "1000";
      } else {
        topButton.style.display = "none";
      }
    };
    topButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 100,
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <>
      <Box
        sx={[
          {
            width: "100%",
          },
        ]}
      >
        <Header />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<GeneralHome />}>
            {" "}
          </Route>
        </Routes>
        {/* scrolling back to top  */}

        <div>
          <button
            id="topButton"
            style={{
              display: "none",
              color: "#1BB096",
              zIndex: "999",
              margin: "2rem",
              fontSize: "1.5rem",
              border: "none",
              borderRadius: "50%",
              padding: "0.5rem",
              cursor: "pointer",
            }}
          >
            <BsFillArrowUpCircleFill />
          </button>
   
        </div>
      </Box>
      <Box
        sx={[
          {
            position: "relative",
            bottom: 0,
            width: "100%",
            height: "50px",
          },
        ]}
      >
        <Footer />
      </Box>
    </>
  );
};

export default Routing;
