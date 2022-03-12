// React
import { React, useEffect, useState } from "react";
// components
import FirstStep from "./RegisterPageComponents/firstStep/FirstStep";
import SecondStep from "./RegisterPageComponents/secondStep/SecondStep";
import PrevPages from "../../../../../../helpers/PrevPages";
import Steps from "../../../../../../helpers/Steps";
import LastStep from "./RegisterPageComponents/lastStep/LastStep";
// MUI
import { Box, Grid, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  signInButton : {
      width: "100% !important",
      color: "white !important",
      fontWeight: "700 !important",
      fontSize: "15px !important",
      minHeight: "44px !important",
      borderRadius: "9999px !important",
      paddingTop: "12px !important",
      backgroundColor: "white !important",
      border: "1px solid rgb(207, 217, 222) !important",
      boxShadow : "none !important",
      textTransform: "none !important",
      color : "#1D9BF0",
      "&:hover": {
        backgroundColor: "rgba(29, 155, 240, 0.1) !important",
        border: "1px solid rgb(207,217,222) !important",
      },
  },
});

export default function RegisterPage({ setActivePage }) {
  
  const { signInButton } = useStyles()

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
  const [step, setStep] = useState(1);
  const [mobilePicker , setMobilePicker] = useState(selectedMonth && selectedDay && selectedYear
    ? new Date(selectedYear, selectedMonth - 1, selectedDay)
    : new Date(2022 , 8 , 1))

    
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
    step: step,
    stepsCount: 3,
  };

  const activeStep = {
    1: (
      <FirstStep
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
        setStep={setStep}
        step={step}
        mobilePicker = {mobilePicker}
        setMobilePicker = {setMobilePicker}
      />
    ),
    2: <SecondStep setStep={setStep} step={step} />,
    3: (
      <LastStep
        months={months}
        selectedYear={selectedYear}
        selectYear={selectYear}
        selectedMonth={selectedMonth}
        selectedDay = {selectedDay}
        setStep={setStep}
        step={step}
        name = {name}
        phone = {phone}
        email = {email}
      />
    ),
  };

  return (
    <Box className="mt-[12px]">
      <Grid container justifyContent={"space-between"}>
        <Grid item>
          <PrevPages
            setActivePage={setActivePage}
            setStep={setStep}
            data={
              step == 1
                ? data
                : {
                    key: "goBackIcon",
                    prevPage: step - 1,
                  }
            }
            icon={step == 1 ? "close" : "prev"}
          />
        </Grid>
        <Grid item>
          <Steps step={steps.step} stepsCount={steps.stepsCount} />
        </Grid>
      </Grid>
      {activeStep[step]}

      <Box>
          <Typography sx = {{
              color : "#0F1419 !important",
              fontWeight : "700",
              marginTop : "25px",
              marginBottom : "10px"
          }}>Already have an account?</Typography>
        <Button type="button" variant="contained" className={signInButton} onClick = {() =>{
            setActivePage("defaultPage")
        }}>Sign in</Button>
      </Box>
    </Box>
  );
}
