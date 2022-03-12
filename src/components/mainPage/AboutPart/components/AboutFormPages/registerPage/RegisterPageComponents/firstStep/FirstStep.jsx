// React
import React from "react";
// components
import TextFieldContainer from "./firstStepComponents/TextFieldContainer";
import StepsHeader from "../../../../../../../../helpers/StepsHeader";
import NextButton from "../../../../../../../../helpers/NextButton";
// MUI
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DatePickerDiffDevices from "./datePickerForDevices/DatePickerDiffDevices";

function FirstStep({
  name,
  setNameValue,
  email,
  setEmail,
  phone,
  setPhone,
  selectedYear,
  selectYear,
  selectedMonth,
  selectMonth,
  selectedDay,
  selectDay,
  error,
  addError,
  errorForPhone,
  errorForEmail,
  setErrorForEmail,
  setErrorForPhone,
  setStep,
  mobilePicker,
  setMobilePicker,
}) {
  const useStyles = makeStyles({
    fieldContainer: {
      marginBottom: "64px",
    },
  });

  const { fieldContainer } = useStyles();
  const validationAll =
    name &&
    (email || phone) &&
    ((selectedYear && selectedMonth && selectedDay) ||
      (mobilePicker && mobilePicker != "Invalid Date")) &&
    !error &&
    (!errorForEmail || !errorForPhone);

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
      }}
    >
      <StepsHeader title="Create your account" />
      <div className={fieldContainer}>
        <TextFieldContainer
          required
          setNameValue={setNameValue}
          setEmail={setEmail}
          setPhone={setPhone}
          addError={addError}
          name={name}
          email={email}
          phone={phone}
          setErrorForPhone={setErrorForPhone}
          setErrorForEmail={setErrorForEmail}
          errorForEmail={errorForEmail}
          errorForPhone={errorForPhone}
        />
        <Box
          sx={{
            marginTop: "32px",
          }}
        >
          <Typography
            sx={{
              color: "#0F1419",
              fontWeight: "700",
              fontSize: "15px !important",
            }}
          >
            Date of birth
          </Typography>
          <Typography
            sx={{
              color: "#536471",
              fontSize: "15px !important",
            }}
          >
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </Typography>
        </Box>
        <DatePickerDiffDevices
          selectYear={selectYear}
          selectedYear={selectedYear}
          selectMonth={selectMonth}
          selectedMonth={selectedMonth}
          selectedDay={selectedDay}
          selectDay={selectDay}
          addError={addError}
          mobilePicker={mobilePicker}
          setMobilePicker={setMobilePicker}
        />
      </div>
      <NextButton disabled={!validationAll} name="Next" btnData = {btnData}/>
    </form>
  );
}

export default FirstStep;
