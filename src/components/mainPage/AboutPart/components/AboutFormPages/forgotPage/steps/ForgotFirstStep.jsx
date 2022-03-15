// React
import React from "react";
// MUI
import { Box } from "@mui/material";
// components
import CustomTextField from "../../loginPage/loginComponents/customTextField";
import NextButton from "../../../../../../../helpers/NextButton";
// button data
import { nextButton } from "../../../../../../../constant/btnDatas";

function ForgotFirstStep({ setActivePage, username, setUserName, setStep }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setStep(2);
      }}
    >
      <CustomTextField
        labelText="Enter your email, phone number, or username"
        value={username}
        setValue={setUserName}
      />
      <NextButton
        btnData={nextButton}
        name="Search"
        disabled={username.length > 0 ? false : true}
      />
    </form>
  );
}

export default ForgotFirstStep;
