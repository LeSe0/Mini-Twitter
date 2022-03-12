// React
import React, {useState} from "react";
// images
import FormAuthByButtons from "./components/formAuthByButtons";
import { ReactComponent as GoogleLogo } from "../../../../images/googleLogo.svg";
import { ReactComponent as AppleLogo } from "../../../../images/appleLogo.svg";
// components
import DefaultPage from "./AboutFormPages/DefaultPage";
import RegisterPage from "./AboutFormPages/registerPage/RegisterPage"
import Login from "./AboutFormPages/loginPage/Login";

function AboutForm() {
  const buttonsFirstData = [
    {
      img: GoogleLogo,
      title: "Sign up with  Google",
      className: "Google",
    },
    {
      img: AppleLogo,
      title: "Sign up with  Apple",
      className: "Apple",
    },
  ];

  let [activePage, setActivePage] = useState('defaultPage')

  const Tabs = {
    defaultPage : <DefaultPage setActivePage = {setActivePage}/>,
    registerPage : <RegisterPage setActivePage = {setActivePage}/>,
    loginPage : <Login setActivePage = {setActivePage}/>
  }

  return (
    <div>
      <FormAuthByButtons data={buttonsFirstData} />
      <div className="otherVariantsForAuth">
        <div className="leftBorderAuth borderAuth"></div>
        <span>or</span>
        <div className="rightBorderAuth borderAuth"></div>
      </div>
      {Tabs[activePage]}
    </div>
  );
}

export default AboutForm;
