// React
import { Typography } from "@mui/material";
import React from "react";

function Steps({step , stepsCount}){
    return (
        <Typography sx = {{
            fontSize : "19px",
            color : "#0F1419",
            fontWeight : "700"
        }}>Step {step} of {stepsCount}</Typography>
    )
}

export default Steps