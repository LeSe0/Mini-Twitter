// React
import React from "react";
// components
import DatePickerComponent from "../../../../../../../constant/DatePicker";
// MUI
import { Box } from "@mui/material";

function DatePickerContainer({
  selectDay,
  selectMonth,
  selectYear,
  selectedMonth,
  selectedYear,
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
  if (selectedMonth) {
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
      />
      <DatePickerComponent
        data={daysForChoose}
        selectDay={selectDay}
        selectType="Day"
      />
      <DatePickerComponent
        data={yearsForChoose}
        selectYear={selectYear}
        selectType="Year"
      />
    </Box>
  );
}

export default DatePickerContainer;
