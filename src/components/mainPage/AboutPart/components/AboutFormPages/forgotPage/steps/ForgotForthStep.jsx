// React
import React, { useState } from "react";
// MUI
import { Box, Typography } from "@mui/material";
// button style
import { nextButton } from "../../../../../../../constant/btnDatas";
// components
import StepsHeader from "../../../../../../../helpers/StepsHeader";
import CustomTextField from "../../loginPage/loginComponents/customTextField";
import NextButton from "../../../../../../../helpers/NextButton";

function ForgotForthStep({ setActivePage, setStep }) {
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  return (
    <form onSubmit = {(e) =>{
        e.preventDefault();
        setActivePage("defaultPage")
    }}>
      <StepsHeader title={"Change password"} />
      <Typography
        sx={{
          fontSize: "14px",
          color: "#536471",
        }}
      >
        Change your password or recover your current one
      </Typography>
      <CustomTextField
        labelText="New password"
        value={password}
        setValue={setPassword}
        type="password"
      />
      <CustomTextField
        labelText="Repeat password"
        value={verifyPassword}
        setValue={setVerifyPassword}
        type="password"
      />
      <NextButton
        name="Change password"
        btnData={nextButton}
        disabled={password != verifyPassword ? true : false}
      />
    </form>
  );
}

export default ForgotForthStep;
