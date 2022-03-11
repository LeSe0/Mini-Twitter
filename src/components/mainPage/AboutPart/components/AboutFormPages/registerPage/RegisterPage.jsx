// React
import { React, useState } from "react";
// components
import PrevPages from "../../../../../../helpers/PrevPages";
import DatePickerContainer from "./RegisterPageComponents/DatePickerContainer";
import TextFieldContainer from "./RegisterPageComponents/TextFieldContainer";
// MUI
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  button: {
    width: "100%",
    background: "0F1419",
    color: "white",
    fontWeight: "700",
    fontSize: "15px",
    minHeight: "44px",
    borderRadius: "9999px",
    paddingTop: "12px",
  },
});

export default function RegisterPage({ setActivePage }) {
  const data = {
    prevPage: "defaultPage",
    key: "firstRegPage",
  };

  const { button } = useStyles();

  const [name, setNameValue] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedYear, selectYear] = useState("");
  const [selectedMonth, selectMonth] = useState("");
  const [selectedDay, selectDay] = useState("");
  const [error, addError] = useState();

  const validationAll =
    name && email && phone && selectedYear && selectedMonth && selectedDay && !error;

  return (
    <div className="mt-[12px]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <PrevPages setActivePage={setActivePage} data={data} icon={"close"} />
        <TextFieldContainer
          required
          setNameValue={setNameValue}
          setEmail={setEmail}
          setPhone={setPhone}
          addError={addError}
          name = {name}
          email = {email}
          phone = {phone}
        />
        <DatePickerContainer
          required
          selectYear={selectYear}
          selectedYear={selectedYear}
          selectMonth={selectMonth}
          selectedMonth={selectedMonth}
          selectedDay={selectedDay}
          selectDay={selectDay}
          addError = {addError}
        />
        <Button
          type="submit"
          variant="contained"
          className={button}
          disabled={!validationAll}
        >
          Next
        </Button>
      </form>
    </div>
  );
}
