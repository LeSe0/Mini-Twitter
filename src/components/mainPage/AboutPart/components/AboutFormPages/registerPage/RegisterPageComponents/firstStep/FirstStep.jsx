// React
import React, { useState } from "react";
// components
import DatePickerContainer from "../DatePickerContainer";
import TextFieldContainer from "../TextFieldContainer";
// MUI
import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

function FirstStep({
  setActivePage,
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
  step 
}) {

  const useStyles = makeStyles({
    button: {
      width: "100% !important",
      color: "white !important",
      fontWeight: "700 !important",
      fontSize: "15px !important",
      minHeight: "44px !important",
      borderRadius: "9999px !important",
      paddingTop: "12px !important",
      backgroundColor: "rgb(15, 20, 25) !important",
      borderColor: "rgba(0,0,0,0) !important",
      textTransform: "none !important",
      "&:hover": {
        backgroundColor: "rgb(39, 44, 48) !important",
        borderColor: "rgba(0,0,0,0) !important",
      },
      "&.css-sghohy-MuiButtonBase-root-MuiButton-root.Mui-disabled": {
        backgroundColor: "gray !important",
      },
    },

    secondButton : {
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

    fieldContainer: {
      marginBottom: "64px",
    },
  });

  const { button, fieldContainer, secondButton } = useStyles();
  const validationAll =
    name &&
    (email || phone) &&
    selectedYear &&
    selectedMonth &&
    selectedDay &&
    !error &&
    (!errorForEmail || !errorForPhone);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setStep(2)
      }}
    >
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
        <DatePickerContainer
          required
          selectYear={selectYear}
          selectedYear={selectedYear}
          selectMonth={selectMonth}
          selectedMonth={selectedMonth}
          selectedDay={selectedDay}
          selectDay={selectDay}
          addError={addError}
        />
      </div>
      <Button
        type="submit"
        variant="contained"
        className={button}
        disabled={!validationAll}
      >
        Next
      </Button>
      <Box>
          <Typography sx = {{
              color : "#0F1419 !important",
              fontWeight : "700",
              marginTop : "25px",
              marginBottom : "10px"
          }}>Already have an account?</Typography>
        <Button type="button" variant="contained" className={secondButton} onClick = {() =>{
            setActivePage("defaultPage")
        }}>Sign in</Button>
      </Box>
    </form>
  );
}

export default FirstStep;
