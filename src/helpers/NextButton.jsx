// React
import React from "react";
// MUI
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    button: {
      width: "100% !important",
      color: "white !important",
      fontWeight: "700 !important",
      fontSize: "15px !important",
      minHeight: "44px !important",
      borderRadius: "9999px !important",
      paddingTop: "12px !important",
      backgroundColor: "rgb(15, 20, 25) !important",
      borderColor: "rgba(0,0,0,0) !important",
      textTransform: "none !important",
      "&:hover": {
        backgroundColor: "rgb(39, 44, 48) !important",
        borderColor: "rgba(0,0,0,0) !important",
      },
      "&.css-sghohy-MuiButtonBase-root-MuiButton-root.Mui-disabled": {
        backgroundColor: "gray !important",
      },
    }
})

function NextButton({disabled}){

    const {button} = useStyles()

    return (
        <Button
        type="submit"
        variant="contained"
        className={button}
        disabled={disabled}
      >
        Next
      </Button>
    )
}

export default NextButton