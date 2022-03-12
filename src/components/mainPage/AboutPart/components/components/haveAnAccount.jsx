// React
import React from "react";
// components
import FormAuthByButtons from "./formAuthByButtons";

function HaveAnAccount({setActivePage}){

    const buttonData = [
        {
            title : 'Sign in',
            className : 'haveAnAccountButton',
            setPage : "loginPage"
        }
    ]

    return (
        <div className="haveAccountContainer">
            <div className="haveAccountTitle">
                Already have an account?
            </div>
            <FormAuthByButtons data = {buttonData} setActivePage = {setActivePage}/>
        </div>
    )
}

export default HaveAnAccount