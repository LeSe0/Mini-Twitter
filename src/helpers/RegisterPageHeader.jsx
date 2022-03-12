// React
import React from "react";
// MUI
import { Typography } from "@mui/material";

function RegisterPageHeader({title}){
    return (
        <Typography sx={{
            fontSize : "23px",
            color : "#0F1419",
            fontWeight : "700",
            marginTop : "10px",
            marginBottom : "10px"
        }}>{title}</Typography>
    )
}

export default RegisterPageHeader