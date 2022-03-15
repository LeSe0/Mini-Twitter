// React
import React from "react";
// MUI
import { Box, Typography } from "@mui/material";
// components
import NextButton from "../../../../../../../../helpers/NextButton";

function FooterOverlay({setActivePage}) {

  const forgotBtnData = {
    color: "#0F1419",
    borderColor: "rgb(207, 217, 222)",
    backgroundColor: "#fff",
    focusedColor: "white",
    focusedBackground: "rgba(15, 20, 25, 0.1)",
    focusedBorder: "rgba(0,0,0,0)",
    disabledColor: "white",
    disabledBackground: "gray",
    disabledBorder: "blue",
  };

  return (
    <Box>
      <Box
        sx={{
          marginTop: "15px",
        }}
        component="div"
        onClick={() => {
          setActivePage("forgotPasswordPage");
        }}
      >
        <NextButton
          name="Forgot password?"
          disabled={false}
          btnData={forgotBtnData}
        />
      </Box>
      <Box
        sx={{
          marginTop: "20px",
        }}
        component="div"
      >
        <Typography
          component="span"
          sx={{
            color: "#536471",
            fontSize: "15px",
          }}
        >
          Don't have an account?
        </Typography>
        <Typography
          onClick={() => {
            setActivePage("registerPage");
            window.scroll(0, 550);
          }}
          sx={{
            color: "rgb(29, 155, 240)",
            cursor: "pointer",
            marginLeft: "5px",
            "&:hover": {
              textDecoration: "underline",
            },
            fontSize: "15px",
          }}
          component="span"
        >
          Sign up
        </Typography>
      </Box>
    </Box>
  );
}

export default FooterOverlay;
