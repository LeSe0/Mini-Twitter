// React
import React, { useEffect } from "react";
// MUI
import { TextField, useMediaQuery } from "@mui/material";
import { MobileDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Box } from "@mui/system";
// components
import DatePickerContainer from "../firstStepComponents/DatePickerContainer";

function DatePickerDiffDevices({
  selectYear,
  selectedYear,
  selectMonth,
  selectedMonth,
  selectedDay,
  selectDay,
  addError,
  mobilePicker,
  setMobilePicker,
}) {
  const datePicker = useMediaQuery("(min-width : 600px)");

  const picker = datePicker ? (
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
  ) : (
    <Box
      fullWidth
      sx={{
        "& .css-1u3bzj6-MuiFormControl-root-MuiTextField-root": {
          width: "100%",
        },
      }}
    >
      <MobileDatePicker
        value={mobilePicker}
        onChange={(newValue) => {
          setMobilePicker(newValue);
        }}
        renderInput={(props) => {
          return <TextField {...props} />;
        }}
      />
    </Box>
  );

  const monthss = [
    " ",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  datePicker
    ? useEffect(() => {
        if (selectedYear && selectedMonth && selectedDay) {
          setMobilePicker(
            new Date(
              selectedYear,
              monthss.indexOf(selectedMonth) - 1,
              selectedDay
            )
          );
        }
      }, [selectedDay, selectedYear, selectedMonth])
    : useEffect(() => {
        if (mobilePicker) {
          selectDay(mobilePicker.getDate());
          selectYear(mobilePicker.getFullYear());
          selectMonth(monthss[mobilePicker.getMonth() + 1]);
        }
      }, [
        mobilePicker.getDay(),
        mobilePicker.getFullYear(),
        monthss[mobilePicker.getMonth()],
      ]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {picker}
    </LocalizationProvider>
  );
}

export default DatePickerDiffDevices;
