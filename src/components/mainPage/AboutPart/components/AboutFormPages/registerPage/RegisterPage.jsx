// React
import { React, useState } from "react";
// components
import FirstStep from "./RegisterPageComponents/firstStep/FirstStep";
import SecondStep from "./RegisterPageComponents/secondStep/SecondStep";
import PrevPages from "../../../../../../helpers/PrevPages";
import Steps from "../../../../../../helpers/Steps"
// MUI
import { Box, Grid } from "@mui/material";

export default function RegisterPage({ setActivePage }) {
  const months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  const [name, setNameValue] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedYear, selectYear] = useState();
  const [selectedMonth, selectMonth] = useState();
  const [selectedDay, selectDay] = useState();
  const [error, addError] = useState(false);
  const [errorForPhone, setErrorForPhone] = useState(false);
  const [errorForEmail, setErrorForEmail] = useState(false);
  const [step , setStep] = useState(1);

  let dateFromPicker =
    selectedYear &&
    selectedMonth &&
    selectedDay &&
    new Date(selectedYear, months[selectedMonth.slice(0, 3)] - 1, 1);

  const data = {
    prevPage: "defaultPage",
    key: "firstRegPage",
  };


  const steps = {
    step : step,
    stepsCount : 3
  }

  const activeStep = {
    1 :       <FirstStep
    setActivePage={setActivePage}
    name={name}
    setNameValue={setNameValue}
    email={email}
    setEmail={setEmail}
    phone={phone}
    setPhone={setPhone}
    selectedYear={selectedYear}
    selectYear={selectYear}
    selectedMonth={selectedMonth}
    selectMonth={selectMonth}
    selectedDay={selectedDay}
    selectDay={selectDay}
    error={error}
    addError={addError}
    errorForPhone={errorForPhone}
    errorForEmail={errorForEmail}
    setErrorForEmail={setErrorForEmail}
    setErrorForPhone={setErrorForPhone}
    setStep = {setStep}
    step = {step}
  />,
  2 : <SecondStep/>
  }

  return (
    <Box className="mt-[12px]">
      <Grid container justifyContent={"space-between"}>
        <Grid item>
          <PrevPages setActivePage={setActivePage} setStep = {setStep} data={step == 1 ? data : {
            key : "goBackIcon",
            prevPage : step - 1
          }} icon={step == 1 ? "close" : "prev"} />
        </Grid>
        <Grid item>
          <Steps step = {steps.step} stepsCount = {steps.stepsCount}/>
        </Grid>
      </Grid>
      {activeStep[step]}
    </Box>
  );
}
