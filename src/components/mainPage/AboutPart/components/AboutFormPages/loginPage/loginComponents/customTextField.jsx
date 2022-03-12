// React
import React from "react";
// MUI
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

function CustomTextField({labelText, fStepvalue, setfStepvalue}) {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      "& .MuiInputBase-root:before": {
        border: "none !important",
      },
      "& .MuiInputBase-root:after": {
        border: "none !important",
      },
      "& .MuiInput-formControl": {
        color: "black !important",
      },
      "& .MuiInputBase-root": {
        border: "1px solid black",
        background: "none",
      },
      "& .Mui-focused input": {
        color: "black !important",
      },
      "& .Mui-focused": {
        border: "2px solid rgb(29, 155, 240)",
        background: "none",
        color: "rgb(29, 155, 240) !important",
      },
    },

    label: {
      marginTop: "5px",
      marginLeft: "5px",
      border: "none !important",
      color: "black !important",
    },
  }));

  const { label, formControl } = useStyles();

  return (
    <Box
      sx={{
        height: "100px",
      }}
    >
      <TextField
        value={fStepvalue}
        className={formControl}
        fullWidth
        variant="filled"
        onChange = {(e) =>{
            setfStepvalue(e.target.value)
        }}
        label={labelText}
        sx={{
          backgroundColor: "#fff",
        }}
        InputProps={{
          disableUnderline: true,
        }}
        inputProps={{
          maxLength: 50,
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
