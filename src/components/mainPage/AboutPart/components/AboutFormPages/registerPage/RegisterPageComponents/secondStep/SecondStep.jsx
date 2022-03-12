// React
import React, { useState } from "react";
// MUI
import { Box } from "@mui/material";
// components
import NextButton from "../../../../../../../../helpers/NextButton";
import Header from "./secondStepComponents/Header";
import Content from './secondStepComponents/Content'
import Footer from './secondStepComponents/Footer'

function SecondStep({step , setStep}){

    const [accept , setAccept] = useState(false)

    const btnData = {
        color : "white",
        borderColor : "rgba(0,0,0,0)",
        backgroundColor : "rgb(15, 20, 25)",
        focusedColor : "white",
        focusedBackground : "rgb(39, 44, 48)",
        focusedBorder : "rgba(0,0,0,0)",
        disabledColor : "white",
        disabledBackground : "gray",
        disabledBorder : "blue"
    }

    return (
        <form onSubmit={(e) =>{
            e.preventDefault()
            setStep(3)
        }}>
            <Box sx = {{
                marginBottom : "50px"
            }}>
                <Header />
                <Content accept = {accept} setAccept = {setAccept}/>
                <Footer />
            </Box>
            <NextButton disabled = {false} name = "Next" btnData = {btnData}/>    
        </form>
    )
}

export default SecondStep