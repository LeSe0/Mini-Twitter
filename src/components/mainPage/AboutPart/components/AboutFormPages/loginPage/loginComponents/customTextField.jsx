// React
import React, { useState } from "react";
// MUI
import { TextField , InputAdornment, IconButton} from "@mui/material";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { TextField, InputAdornment, IconButton } from "@mui/core";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function CustomTextField({labelText, value, setValue , disabled, type}) {
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


  // password show or hidden
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <Box
      sx={{
        height: "100px",
      }}
    >
      <TextField
        disabled = {disabled ? disabled : false}
        value={value}
        className={formControl}
        fullWidth
        type = {type && showPassword ? type : "text"}
        variant="filled"
        onChange = {(e) =>{
            setValue(e.target.value)
        }}
        label={labelText}
        sx={{
          backgroundColor: "#fff",
        }}
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            type == "password" ? 
              <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
            : ''
          )
      
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
