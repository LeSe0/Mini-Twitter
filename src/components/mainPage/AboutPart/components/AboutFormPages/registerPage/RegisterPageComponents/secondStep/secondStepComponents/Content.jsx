// React
import React from "react";
// MUI
import { Checkbox, Grid, InputLabel } from "@mui/material";

function Content({accept , setAccept}) {
  return (
    <Grid container flex flexWrap="nowrap">
      <Grid item>
        <InputLabel
          htmlFor="for-register-second-step"
          sx={{
            color: "rgb(15, 20, 25)",
            fontSize: "15px",
            marginBottom: "11px",
            marginTop: "15px",
            paddingRight: "25px",
            whiteSpace: "break-spaces",
          }}
        >
          Twitter uses this data to personalize your experience. This web
          browsing history will never be stored with your name, email, or phone
          number.
        </InputLabel>
      </Grid>
      <Grid item flex="true" alignItems="center">
        <Checkbox
          id="for-register-second-step"
          checked={accept}
          onClick={(e) => {
            setAccept(!accept);
          }}
          sx={{
            padding: "8px",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Content;