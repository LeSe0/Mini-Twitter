// React
import React from "react";
// MUI
import { Typography } from "@mui/material";
// components
import NextButton from "../../../../../../../../helpers/NextButton";
import CustomTextField from "./lastStepComponents/customTextField";
import Footer from "./lastStepComponents/Footer"

function LastStep({
  months,
  selectedYear,
  selectYear,
  selectedMonth,
  selectedDay,
  setStep,
  step,
  email,
  phone,
  name,
}) {
  const date = `${selectedMonth.slice(0, 3)} ${selectedDay} , ${selectedYear}`;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Typography sx={{
          fontSize : "23px",
          color : "#0F1419",
          fontWeight : "700",
          marginTop : "10px",
          marginBottom : "10px"
      }}>Create your account</Typography>
      <CustomTextField
        value={name}
        labelText="Name"
        setStep={setStep}
        goX="0"
        goY="550"
      />
      <CustomTextField
        value={email ? email : phone}
        labelText="Phone"
        setStep={setStep}
        goX="0"
        goY="550"
      />
      <CustomTextField
        value={date}
        labelText="Birth date"
        setStep={setStep}
        goX="0"
        goY="550"
      />

      <Footer />
      <NextButton disabled={false} name="Sign up"/>
    </form>
  );
}

export default LastStep;