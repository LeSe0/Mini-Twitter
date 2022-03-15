// React
import React, { useState } from "react";
// components
import LoginFirstStep from "./loginSteps/firstStep";
import LoginHeader from "./loginComponents/Header";
import SecondStep from "./loginSteps/secondStep";
import FooterOverlay from "./loginSteps/overLays/footerOverlay";
// MUI
import { Box } from "@mui/material";

function Login({ setActivePage }) {
  const [step, setStep] = useState(1);
  const [fStepvalue, setfStepValue] = useState("");
  const [password, setPassword] = useState("");

  const steps = {
    step: step,
    stepsCount: 3,
  };

  const data = {
    prevPage: "defaultPage",
    key: "firstRegPage",
  };

  const stage = {
    1: (
      <LoginFirstStep
        data={data}
        steps={steps}
        step={step}
        setStep={setStep}
        setActivePage={setActivePage}
        fStepvalue={fStepvalue}
        setfStepValue={setfStepValue}
      />
    ),
    2: (
      <SecondStep
        data={data}
        steps={steps}
        step={step}
        setStep={setStep}
        setActivePage={setActivePage}
        username={fStepvalue}
        setPassword={setPassword}
        password = {password}
      />
    ),
  };

  console.log(fStepvalue);

  return (
    <Box>
      <LoginHeader
        data={data}
        steps={steps}
        step={step}
        setStep={setStep}
        setActivePage={setActivePage}
      />
      {stage[step]}
      <FooterOverlay setActivePage={setActivePage} />
    </Box>
  );
}

export default Login;
