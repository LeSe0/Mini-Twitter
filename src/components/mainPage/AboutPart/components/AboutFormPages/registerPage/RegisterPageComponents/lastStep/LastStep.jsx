// React
import React from "react";
// components
import NextButton from "../../../../../../../../helpers/NextButton";
import CustomTextField from "./lastStepComponents/customTextField";
import Footer from "./lastStepComponents/Footer";
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
      }}
    >
      <StepsHeader title="Create your account" />
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
      <NextButton disabled={false} name="Sign up" btnData={btnData} />
    </form>
  );
}

export default LastStep;
