// React
import React from "react";
// MUI
import { Box, Checkbox, Grid, InputLabel, Typography } from "@mui/material";

function Header(){
    return (
        <Box>
            <Typography sx = {{
                color : "#0F1419",
                fontSize : "22px",
                fontWeight : "700",
                marginBottom : "11px"
            }}>Customize your experience</Typography>
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