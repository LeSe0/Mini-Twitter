// React
import React, { useState } from "react";
// React Code Input
import ReactCodeInput from "react-code-input";
// components
import NextButton from "../../../../../../../helpers/NextButton";
import { nextButton } from "../../../../../../../constant/btnDatas";
import { Grid, Typography } from "@mui/material";
import StepsHeader from "../../../../../../../helpers/StepsHeader";

function ForgotThirdStep({ setActivePage, setStep }) {
  const props = {
    inputStyle: {
      margin: "4px",
      MozAppearance: "textfield",
      width: "40px",
      borderRadius: "3px",
      fontSize: "14px",
      height: "40px",
      paddingLeft: "7px",
      border: "1px solid gray",
      marginBottom: "30px",
      marginTop: "30px",
    },
    inputStyleInvalid: {
      margin: "4px",
      MozAppearance: "textfield",
      width: "40px",
      borderRadius: "3px",
      fontSize: "14px",
      height: "40px",
      paddingLeft: "7px",
      border: "1px solid gray",
    },
  };

  const [code, setCode] = useState("");

  let codeText = code + "";
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setStep(4);
      }}
    >
      <StepsHeader title="Enter code" />
      <Typography
        sx={{
          color: "#436571",
          fontSize: "14px",
        }}
      >
        Enter Code from your Email/Phone
      </Typography>
      <Grid flex justifyContent="center" container>
        <Grid item>
          <ReactCodeInput
            type="number"
            fields={6}
            value={code}
            onChange={(val) => {
              setCode(val);
            }}
            {...props}
          />
        </Grid>
      </Grid>
      <NextButton
        disabled={codeText.length == 6 ? false : true}
        btnData={nextButton}
        name="Next"
      />
    </form>
  );
}

export default ForgotThirdStep;
