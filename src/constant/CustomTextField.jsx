// React
import React, { useRef, useState } from "react";
// MUI
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

function CustomTextField({
  labelText,
  errorText,
  setEmail,
  setPhone,
  setNameValue,
  addError,
  email,
  phone,
  name,
  setErrorForEmail,
  setErrorForPhone,
  errorForEmail,
  errorForPhone
}) {
  const [error, setError] = useState(false);
  const emailValidate = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const phoneValidate = new RegExp(
    "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$"
  );


  let getErrorForComponent = error && labelText == "Name" || errorForEmail && labelText == "Email" || errorForPhone && labelText == "Phone"

  const useStyles = makeStyles((theme) =>
    getErrorForComponent
      ? {
          formControl: {
            "& .MuiInputBase-root:before": {
              border: "1px solid rgb(244, 33, 46) !important",
            },
            "& .MuiInputBase-root:after": {
              border: "1px solid rgb(244, 33, 46) !important",
            },
            "& .MuiInput-formControl": {
              color: "black !important",
              border: "1px solid rgb(244, 33, 46)",
            },
            "& .MuiInputBase-root": {
              border: "1px solid rgb(244, 33, 46)",
              background: "none",
              color: "black !important",
            },
            "& .Mui-focused input": {
              color: "black !important",
            },
            "& .Mui-focused": {
              border: "2px solid rgb(244, 33, 46)",
              color: "rgb(244, 33, 46) !important",
            },
            "& .MuiFormHelperText-root": {
              border: "none",
              color: "rgb(244, 33, 46)",
            },
          },

          label: {
            marginTop: "5px",
            marginLeft: "5px",
            border: "none !important",
            color: "black !important",
          },
        }
      : {
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
              border: "1px solid gray",
              background: "none",
            },
            "& .Mui-focused input": {
              color: "black !important",
            },
            "& .Mui-focused": {
              border: "2px solid #1D9BF0",
              color: "#1D9BF0 !important",
            },
          },

          label: {
            marginTop: "5px",
            marginLeft: "5px",
            border: "none !important",
            color: "black !important",
          },
        }
  );

  const { label, formControl } = useStyles();
  // console.log(errorForEmail + " this is for Email");
  // console.log(errorForPhone + " this is for Phone");
  return (
    <Box
      sx={{
        height: "100px",
      }}
    >
      <TextField
        value={labelText == "Name" ? name : labelText == "Phone" ? phone : email}
        defaultValue = {''}
        className={formControl}
        fullWidth
        variant="filled"
        label={labelText}
        error={error}
        helperText={getErrorForComponent ? errorText : ""}
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
        onChange={(e) => {
          const validate =
            labelText == "Name" && e.target.value.length != 0
              ? false
              : labelText == "Phone" && phoneValidate.test(e.target.value)
              ? false
              : labelText == "Email" && emailValidate.test(e.target.value)
              ? false
              : true;
          if (validate) {
            addError(true);
            setError(true);
            setErrorForEmail && setErrorForEmail(true);
            setErrorForPhone && setErrorForPhone(true)
          } else {
            addError(false);
            setError(false);
            setErrorForEmail && setErrorForEmail(false);
            setErrorForPhone && setErrorForPhone(false)
          }

          if (setNameValue) {
            setNameValue(e.target.value);
          } else if (setEmail) {
            setEmail(e.target.value);
          } else {
            setPhone(e.target.value);
          }
        }}
      />
    </Box>
  );
}

export default CustomTextField;