// React
import { React } from "react";
// components
import PrevPages from "../../../../../../helpers/PrevPages";
import DatePickerContainer from "./RegisterPageComponents/DatePickerContainer";
import CustomTextField from "../../../../../../constant/CustomTextField";

export default function RegisterPage({ setActivePage }) {
  const data = [
    {
      prevPage: "defaultPage",
      name: "Main Page",
    },
  ];

  return (
    <div className="mt-[12px]">
      <CustomTextField labelText={"Name"} errorText={"What’s your name?"} />
      <DatePickerContainer />
      <PrevPages setActivePage={setActivePage} data={data} />
    </div>
  );
}
