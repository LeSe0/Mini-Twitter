// React
import React, { useState } from "react";
// MUI
import { Box } from "@mui/material";
// components
import NextButton from "../../../../../../../../helpers/NextButton";
import Header from "./secondStepComponents/Header";
import Content from './secondStepComponents/Content'
import Footer from './secondStepComponents/Footer'
import RegisterPageHeader from "../../../../../../../../helpers/RegisterPageHeader";

function SecondStep({step , setStep}){

    const [accept , setAccept] = useState(false)

    return (
        <form onSubmit={(e) =>{
            e.preventDefault()
            setStep(3)
        }}>
            <RegisterPageHeader title = 'Customize your experience'/>
            <Box sx = {{
                marginBottom : "50px"
            }}>
                <Header />
                <Content accept = {accept} setAccept = {setAccept}/>
                <Footer />
            </Box>
            <NextButton disabled = {false} name = "Next"/>    

        </form>
    )
}

export default SecondStep