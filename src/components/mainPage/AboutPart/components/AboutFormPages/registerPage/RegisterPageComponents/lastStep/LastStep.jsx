// React
import React from "react";
// components
import NextButton from "../../../../../../../../helpers/NextButton";
import CustomTextField from "./lastStepComponents/customTextField";
import Footer from "./lastStepComponents/Footer"
import StepsHeader from "../../../../../../../../helpers/StepsHeader";

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
      <StepsHeader title = "Create your account" />
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