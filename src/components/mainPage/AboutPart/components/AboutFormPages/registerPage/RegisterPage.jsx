// React
import { React, useState } from "react";
// components
import FirstStep from "./RegisterPageComponents/firstStep/FirstStep";
// MUI
import {Box} from "@mui/material";

export default function RegisterPage({ setActivePage }) {

  const months = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  }

  const [name, setNameValue] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedYear, selectYear] = useState("");
  const [selectedMonth, selectMonth] = useState("");
  const [selectedDay, selectDay] = useState("");
  const [error, addError] = useState(false);
  const [errorForPhone, setErrorForPhone] = useState(false);
  const [errorForEmail, setErrorForEmail] = useState(false);

  let day = new Date(selectedYear , months[selectedMonth.slice(0,3)] - 1 ,1)
  console.log(day);

  return (
    <div className="mt-[12px]">
      <FirstStep 
        setActivePage = {setActivePage}
        name = {name}
        setNameValue = {setNameValue}
        email = {email}
        setEmail = {setEmail}
        phone = {phone}
        setPhone = {setPhone}
        selectedYear = {selectedYear}
        selectYear = {selectYear}
        selectedMonth = {selectedMonth}
        selectMonth = {selectMonth}
        selectedDay = {selectedDay}
        selectDay = {selectDay}
        error = {error}
        addError = {addError}
        errorForPhone = {errorForPhone}
        errorForEmail = {errorForEmail}
        setErrorForEmail = {setErrorForEmail}
        setErrorForPhone = {setErrorForPhone}
      />
    </div>
  );
}
