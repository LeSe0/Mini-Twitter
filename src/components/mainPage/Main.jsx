// React
import React from "react";
// components
import BigIconPart from "./BigIconPart";
import AuthPart from "./AboutPart/AuthPart";
import MainPageFooter from "./footer/Footer";

function Main(){
    return (
        <div className="">
            <div className="flex lg:flex-row flex-col">
                <div className="bigIconContainer flex-[1.61] 2xl:flex-1 lg:order-1 order-2">
                    <BigIconPart />
                </div>
                <div className="authPartContainer flex-[2] 2xl:flex-[1.18] lg:order-2 order-1">
                    <AuthPart />
                </div>
            </div> 
            <MainPageFooter />           
        </div>
    )
}

export default Main;