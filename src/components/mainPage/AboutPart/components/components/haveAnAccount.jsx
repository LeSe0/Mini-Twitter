// React
import React from "react";
// components
import FormAuthByButtons from "./formAuthByButtons";

function HaveAnAccount(){

    const buttonData = [
        {
            title : 'Sign in',
            className : 'haveAnAccountButton'
        }
    ]

    return (
        <div className="haveAccountContainer">
            <div className="haveAccountTitle">
                Already have an account?
            </div>
            <FormAuthByButtons data = {buttonData}/>
        </div>
    )
}

export default HaveAnAccount