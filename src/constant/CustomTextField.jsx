// React
import React, { useState } from "react";
// MUI
import { TextField } from "@material-ui/core";
import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

function CustomTextField({ labelText, errorText }) {
  const [error, setError] = useState(false);

  const useStyles = makeStyles((theme) =>
    error
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
            },
            "& .Mui-focused input": {
              color: "black",
            },
            "& .Mui-focused": {
              border: "2px solid rgb(244, 33, 46)",
              color: "rgb(244, 33, 46)",
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
              color: "black",
            },
            "& .Mui-focused": {
              border: "2px solid #1D9BF0",
              color: "#1D9BF0",
            },
          },

          label: {
            marginTop: "5px",
            marginLeft: "5px",
            border: "none !important",
          },
        }
  );

  const { label, formControl } = useStyles();
  return (
    <Box>
      <TextField
        className={formControl}
        fullWidth
        variant="filled"
        label={labelText}
        error={error}
        helperText={error ? errorText : ""}
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
          if (e.target.value.length == 0) {
            setError(true);
          } else {
            setError(false);
          }
        }}
      />
    </Box>
  );
}

export default CustomTextField;
