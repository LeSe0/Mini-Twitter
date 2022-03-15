// React
import React from "react";
// MUI
import { Box } from "@mui/material";
// components
import CustomTextField from "../loginComponents/customTextField";
import NextButton from "../../../../../../../helpers/NextButton";

function SecondStep({
  data,
  steps,
  step,
  setStep,
  setActivePage,
  username,
  setPassword,
  password,
}) {
  const btnData = {
    color: "white",
    borderColor: "rgba(0,0,0,0)",
    backgroundColor: "rgb(15, 20, 25)",
    focusedColor: "white",
    focusedBackground: "rgb(39, 44, 48)",
    focusedBorder: "rgba(0,0,0,0)",
    disabledColor: "white",
    disabledBackground: "gray",
    disabledBorder: "blue",
  };

  return (
    <Box>
      <CustomTextField
        labelText="Phone , email, or username"
        value={username}
        setValue=""
        disabled={true}
      />
      <CustomTextField
        labelText="Password"
        value={password}
        setValue={setPassword}
        type="password"
      />
      <NextButton btnData={btnData} disabled={password ? false : true} name = "Log in"/>
    </Box>
  );
}

export default SecondStep;
