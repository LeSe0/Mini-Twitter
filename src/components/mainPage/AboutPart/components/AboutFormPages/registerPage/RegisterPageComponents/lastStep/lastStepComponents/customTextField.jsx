// React
import React from "react";
// MUI
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

function CustomTextField({ labelText, value, setStep , goX , goY }) {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      "& .MuiInputBase-root:before": {
        border: "none !important",
      },
      "& .MuiInputBase-root:after": {
        border: "none !important",
      },
      "& .MuiInput-formControl": {
        color: "#536471 !important",
      },
      "& .MuiInputBase-root": {
        border: "1px solid #536471",
        background: "none",
      },
      "& .Mui-focused input": {
        color: "#000000 !important",
      },
      "& .Mui-focused": {
        border: "1px solid #536471",
        background: "none",
        color: "#536471 !important"
      },
    },

    label: {
      marginTop: "5px",
      marginLeft: "5px",
      border: "none !important",
      color: "#536471 !important",
    },
  }));

  const { label, formControl } = useStyles();

    const onClickTextField = () => {
        setStep && setStep(1);
        window.scroll(goX , goY)
    };

  return (
    <Box
      sx={{
        height: "100px",
      }}
    >
      <TextField
        value={value}
        className={formControl}
        fullWidth
        variant="filled"
        label={labelText}
        sx={{
          backgroundColor: "#fff",
        }}
        InputProps={{
          disableUnderline: true,
        }}
        inputProps={{
          maxLength: 50,
          onClick : (onClickTextField)
        }}
        InputLabelProps={{
          className: label,
          sx: {
            color: "#1D9BF0",
          },
        }}
        margin="normal"
      />
    </Box>
  );
}

export default CustomTextField;