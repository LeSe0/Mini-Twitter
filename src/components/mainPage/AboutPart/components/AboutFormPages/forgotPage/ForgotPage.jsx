// React
import React, { useState } from "react";
// components
import ForgotHeader from "./components/Header";
import StepsHeader from "../../../../../../helpers/StepsHeader";
import ForgotFirstStep from "./steps/ForgotFirstStep";
import ForgotSecondStep from "./steps/ForgotSecondStep";
// MUI
import { Box } from "@mui/material";
import ForgotThirdStep from "./steps/ForgotThirdStep";

function ForgotPage({ setActivePage }) {
  const [step, setStep] = useState(1);
  const [username, setUserName] = useState("");
  const [identify, setIdentify] = useState("");

  const steps = {
    step: step,
    stepsCount: 4,
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
        setStep={setStep}
      />
    ),
    2: (
      <ForgotSecondStep
        setActivePage={setActivePage}
        identify={identify}
        setIdentify={setIdentify}
        setStep={setStep}
      />
    ),
    3: (
      <ForgotThirdStep
        setActivePage={setActivePage}
        setStep={setStep}
      />
    ),
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
      {stage[step]}
    </Box>
  );
}

export default ForgotPage;
