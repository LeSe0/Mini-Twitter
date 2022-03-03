// React
import React from "react";
// images
import {ReactComponent as Svg} from '../../../images/twitterLogo.svg'
import AboutForm from "./components/AboutForm";

function AuthPart(){
    return (
        <div>
            <div className="authPart">
                <div className="authPartIcon">
                    <Svg />
                </div>
                <div className="authPartTitle">
                    Happening now
                </div>
                <div className="authPartDescription">
                    Join Twitter today.
                </div>
                <div className="aboutPartFormContainer">
                    <AboutForm />
                </div>
            </div>
        </div>
    )
}

export default AuthPart