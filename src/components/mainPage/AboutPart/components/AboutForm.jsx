// React
import React from "react";
// images
import FormAuthByButtons from "./components/formAuthByButtons";
import { ReactComponent as GoogleLogo } from "../../../../images/googleLogo.svg";
import { ReactComponent as AppleLogo } from "../../../../images/appleLogo.svg";
// components
import HaveAnAccount from "./components/haveAnAccount";

function AboutForm() {

    const buttonsFirstData = [
        {
          img: GoogleLogo,
          title: "Sign up with  Google",
          className : 'Google'
        },
        {
          img: AppleLogo,
          title: "Sign up with  Apple",
          className : 'Apple'
        },
      ];


    const buttonsSecondData = [
        {
            title : 'Sign up with phone or email',
            className : 'Phone'
        }
    ]

  return (
    <form>
        <FormAuthByButtons data = {buttonsFirstData}/>
        <div className="otherVariantsForAuth">
            <div className="leftBorderAuth borderAuth"></div>
            <span>or</span>
            <div className="rightBorderAuth borderAuth"></div>
        </div>
        <FormAuthByButtons data = {buttonsSecondData} />
        <div className="authAgreement">
            By signing up, you agree to the <span>Terms of Service</span> and 
            <span> Privacy Policy</span>, including <span>Cookie Use</span>.
        </div>
        <div className="haveAnAccount">
            <HaveAnAccount />
        </div>
    </form>
  );
}

export default AboutForm;
