// React
import React from "react";
// components
import NextButton from "../../../../../../../helpers/NextButton";
import StepsHeader from "../../../../../../../helpers/StepsHeader";
import CustomTextField from "../loginComponents/customTextField";

function LoginFirstStep({
  data,
  steps,
  step,
  setStep,
  setActivePage,
  fStepvalue,
  setfStepValue,
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setStep(2);
        window.scroll(0 , 350);
      }}
    >
      <StepsHeader title="Sign in to Twitter" />
      <CustomTextField
        labelText="Phone, email, or username"
        value={fStepvalue}
        setValue={setfStepValue}
      />
      <NextButton
        name="Next"
        disabled={fStepvalue.length > 0 ? false : true}
        btnData={btnData}
      />
    </form>
  );
}

export default LoginFirstStep;
