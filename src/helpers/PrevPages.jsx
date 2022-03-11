// React
import React from "react";
// MUI
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function PrevPages({ data, setActivePage, icon , setStep}) {
  const switchIcons = {
    close: (
      <CloseIcon
        sx={{
          cursor: "pointer",
        }}
        key={data.key}
        onClick={(e) => {
          e.preventDefault();
          setActivePage(data.prevPage);
        }}
      />
    ),
    prev: (
      <ArrowBackIcon
        sx={{
          cursor: "pointer",
        }}
        key={data.key}
        onClick={(e) => {
          e.preventDefault();
          setStep(data.prevPage);
        }}
      />
    ),
  };

  return <Box>{switchIcons[icon]}</Box>;
}
