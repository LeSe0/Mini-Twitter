// React
import React from "react";
// MUI
import { Box, Typography } from "@mui/material";
// components
import StepsHeader from "../../../../../../../../../helpers/StepsHeader";

function Header(){
    return (
        <Box>
            <StepsHeader title="Customize your experience" />
            <Typography sx = {{
                color : "#0F1419",
                fontSize : "19px",
                fontWeight : "700",
                marginTop : "30px"
            }}>Track where you see Twitter content across the web</Typography>
        </Box>
    )
}

export default Header