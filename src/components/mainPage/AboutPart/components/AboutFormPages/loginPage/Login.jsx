// React
import React, { useState } from "react";
// components

import NextButton from "../../../../../../helpers/NextButton";
import LoginFirstStep from "./loginSteps/firstStep";
import LoginHeader from "./loginComponents/Header";
import SecondStep from "./loginSteps/secondStep";
// MUI
import { Box } from "@mui/material";

function Login({ setActivePage }) {
  const [step, setStep] = useState(1);
  const [fStepvalue, setfStepValue] = useState("");

  const steps = {
    step: step,
    stepsCount: 3,
  };

  const data = {
    prevPage: "defaultPage",
    key: "firstRegPage",
  };

  const stage = {
      1 : <LoginFirstStep
      data={data}
      steps={steps}
      step={step}
      setStep={setStep}
      setActivePage={setActivePage}
      fStepvalue = {fStepvalue}
      setfStepValue = {setfStepValue}
    />,
    2 : <SecondStep />
  }

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
      <LoginHeader
        data={data}
        steps={steps}
        step={step}
        setStep={setStep}
        setActivePage={setActivePage}
      />
      {stage[step]}
      <Box
        sx={{
          marginTop: "15px",
        }}
        component = "div"
        onClick={() =>{
            setActivePage('forgotPasswordPage');
        }}
      >
        <NextButton
          name="Forgot password?"
          disabled={false}
          btnData={forgotBtnData}
        />
      </Box>
    </Box>
  );
}

export default Login;
