// React
import React, { useState } from "react";
// components
import ForgotHeader from "./components/Header";
import StepsHeader from "../../../../../../helpers/StepsHeader";
import ForgotFirstStep from "./steps/ForgotFirstStep";
// MUI
import { Box } from "@mui/material";

function ForgotPage({ setActivePage }) {
  const [step, setStep] = useState(1);
  const [username, setUserName] = useState("");
  //   const [password, setPassword] = useState("");

  const steps = {
    step: step,
    stepsCount: 3,
  };

  const data = {
    prevPage: "defaultPage",
    key: "firstForgotPage",
  };

  const stage = {
    1: (
      <ForgotFirstStep
        setActivePage={setActivePage}
        username={username}
        setUserName={setUserName}
        setStep = {setStep}
      />
    ),
    2: "",
  };

  return (
    <Box>
      <ForgotHeader
        data={data}
        steps={steps}
        step={step}
        setStep={setStep}
        setActivePage={setActivePage}
      />
      <StepsHeader title="Find your Twitter account" />
      {stage[step]}
    </Box>
  );
}

export default ForgotPage;
