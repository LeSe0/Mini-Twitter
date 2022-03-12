// React
import React from "react";
// images
import {ReactComponent as Svg} from '../../../../../../../images/twitterLogo.svg'
// components
import PrevPages from "../../../../../../../helpers/PrevPages";
import Steps from "../../../../../../../helpers/Steps";
// MUI
import { Grid } from "@mui/material";

function LoginHeader({step , setStep , steps , data, setActivePage}) {
  return (
    <Grid container justifyContent={"space-between"} alignItems="center">
      <Grid item>
        <PrevPages
          setActivePage={setActivePage}
          setStep={setStep}
          data={
            step == 1
              ? data
              : {
                  key: "goBackIcon",
                  prevPage: step - 1,
                }
          }
          icon={step == 1 ? "close" : "prev"}
        />
      </Grid>
      <Grid item>
        <Svg fill="rgb(29, 155, 240)" width="40px" height="53px" />
      </Grid>
      <Grid item>
        <Steps step={steps.step} stepsCount={steps.stepsCount} />
      </Grid>
    </Grid>
  );
}

export default LoginHeader