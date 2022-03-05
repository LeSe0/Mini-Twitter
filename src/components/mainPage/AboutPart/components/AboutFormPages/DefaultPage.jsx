// React
import React from "react";
// components
import FormAuthByButtons from "../components/formAuthByButtons";
import HaveAnAccount from '../components/haveAnAccount'

function DefaultPage({setActivePage}) {

    const buttonsSecondData = [
        {
            title : 'Sign up with phone or email',
            className : 'Phone',
            setPage : "registerPage"
        }
    ]

  return (
    <div>
      <FormAuthByButtons data={buttonsSecondData} setActivePage = {setActivePage}/>
      <div className="authAgreement">
        By signing up, you agree to the <span>Terms of Service</span> and
        <span> Privacy Policy</span>, including <span>Cookie Use</span>.
      </div>
      <div className="haveAnAccount">
        <HaveAnAccount />
      </div>
    </div>
  );
}

export default DefaultPage