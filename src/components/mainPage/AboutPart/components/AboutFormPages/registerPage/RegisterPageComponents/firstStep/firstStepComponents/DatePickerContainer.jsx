// React
import React, { useState } from "react";
// components
import DatePickerComponent from "./DatePicker";
// MUI
import { Box } from "@mui/material";

function DatePickerContainer({
  selectDay,
  selectMonth,
  selectYear,
  selectedMonth,
  selectedYear,
  selectedDay,
}) {
  //  Months
  const months = [
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

  //  Start Options
  const newDate = new Date();
  let startYear = 1902;
  let currentYear = newDate.getFullYear();
  let lastDayInMonth = new Date(
    selectedYear,
    months.indexOf(selectedMonth),
    0
  ).getDate();

  //  Years
  const yearsForChoose = [" "];
  for (let i = currentYear; i >= startYear - 1; i--) {
    if (currentYear >= startYear) {
      yearsForChoose.push(currentYear);
    }
    currentYear -= 1;
  }

  //  Days
  const daysForChoose = [" "];
  if (selectedMonth && selectedYear) {
    for (let i = 1; i <= lastDayInMonth; i++) {
      daysForChoose.push(i);
    }
  } else {
    for (let i = 1; i <= 31; i++) {
      daysForChoose.push(i);
    }
  }

  return (
    <Box className="datePickerContainer">
      <DatePickerComponent
        data={months}
        selectMonth={selectMonth}
        selectType="Month"
        selectedMonth={selectedMonth}
      />
      <DatePickerComponent
        data={daysForChoose}
        selectDay={selectDay}
        selectType="Day"
        selectedDay={selectedDay}
      />
      <DatePickerComponent
        data={yearsForChoose}
        selectYear={selectYear}
        selectType="Year"
        selectedYear={selectedYear}
      />
    </Box>
  );
}

export default DatePickerContainer;