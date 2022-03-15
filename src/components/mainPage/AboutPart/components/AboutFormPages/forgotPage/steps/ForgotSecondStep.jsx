// React
import React from "react";
// components
import CustomTextField from "../../loginPage/loginComponents/customTextField";
import StepsHeader from "../../../../../../../helpers/StepsHeader";
import NextButton from "../../../../../../../helpers/NextButton";
// MUI
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
// button data
import { nextButton } from "../../../../../../../constant/btnDatas";

function ForgotSecondStep({ setActivePage, setStep, setIdentify, identify }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setStep(3);
      }}
    >
      <Box>
        <StepsHeader title="Verify your personal information" />
        <Typography
          sx={{
            color: "#536471",
            fontSize: "15px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          Verify your identity by entering the username associated with your
          Twitter account.
        </Typography>
      </Box>
      <CustomTextField labelText="" value={identify} setValue={setIdentify} />
      <NextButton
        name="Next"
        btnData={nextButton}
        disabled={identify.length > 0 ? false : true}
      />
    </form>
  );
}

export default ForgotSecondStep;
