// React
import { React } from "react";
// MUI
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  typography: {
    color: "#1D9BF0",
    fontSize: "15px",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

function Footer() {
  const { typography } = useStyles();
  return (
    <Box>
      <Typography
        sx={{
          color: "rgb(15, 20, 25)",
          fontSize: "14px",
          marginTop: "38px",
        }}
      >
        By signing up, you agree to our{" "}
        <Typography component="span" className={typography}>
          Terms
        </Typography>{" "}
        ,{" "}
        <Typography component="span" className={typography}>
          Privacy Policy
        </Typography>{" "}
        , and{" "}
        <Typography component="span" className={typography}>
          Cookie Use
        </Typography>
        . Twitter may use your contact information, including your email address
        and phone number for purposes outlined in our Privacy Policy.{" "}
        <Typography component="span" className={typography}>
          Learn more
        </Typography>
      </Typography>
    </Box>
  );
}

export default Footer;
