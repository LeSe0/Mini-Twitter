// React
import React from "react";
// MUI
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

function NextButton({ disabled, name, btnData }) {
  const useStyles = makeStyles({
    button: {
      width: "100% !important",
      color: `${btnData.color} !important`,
      fontWeight: "700 !important",
      fontSize: "15px !important",
      minHeight: "44px !important",
      borderRadius: "9999px !important",
      paddingTop: "12px !important",
      backgroundColor: `${btnData.backgroundColor} !important`,
      borderColor: `${btnData.borderColor} !important`,
      textTransform: "none !important",
      "&:hover": {
        backgroundColor: `${btnData.focusedBackground} !important`,
        borderColor: `${btnData.focusedBorder} !important`,
      },
      "&.css-sghohy-MuiButtonBase-root-MuiButton-root.Mui-disabled": {
        backgroundColor: `${btnData.disabledBackground} !important`,
      },
    },
  });

  const { button } = useStyles();

  return (
    <Button
      type="submit"
      variant="contained"
      className={button}
      disabled={disabled}
    >
      {name}
    </Button>
  );
}

export default NextButton;
