// React
import React, { useState } from "react";
// components
import CustomTextField from "../../../../../../../constant/CustomTextField";
// MUI
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

function TextFieldContainer({
  setEmail,
  setNameValue,
  addError,
  setPhone,
  email,
  phone,
  name,
  errorForEmail,
  errorForPhone,
  setErrorForEmail,
  setErrorForPhone
}) {
  const [registerBy, setRegisterBy] = useState("phone");

  let toggleButton = registerBy == "phone" ? "email" : "phone";

  const activeRegisterBy = {
    phone: (
      <CustomTextField
        labelText={"Phone"}
        errorText={"Please enter a valid phone number."}
        setPhone={setPhone}
        addError={addError}
        phone={phone}
        setErrorForPhone={setErrorForPhone}
        errorForPhone={errorForPhone}
      />
    ),
    email: (
      <CustomTextField
        labelText={"Email"}
        errorText={"Please enter a valid email."}
        setEmail={setEmail}
        addError={addError}
        email={email}
        setErrorForEmail={setErrorForEmail}
        errorForEmail={errorForEmail}
      />
    ),
  };

  return (
    <Box className="textFieldContainer">
      <CustomTextField
        labelText={"Name"}
        errorText={"What’s your name?"}
        setNameValue={setNameValue}
        addError={addError}
        name={name}
      />
      {activeRegisterBy[registerBy]}
      <Typography
        component="span"
        sx={{
          color: "#1D9BF0",
          cursor: "pointer",
        }}
        onClick={() => {
          setRegisterBy(toggleButton);
          setPhone("");
          setEmail("");
          setErrorForEmail(false);
          setErrorForPhone(false);
        }}
      >
        Use {toggleButton} instead
      </Typography>
    </Box>
  );
}

export default TextFieldContainer;
