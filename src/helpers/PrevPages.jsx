// React
import React from "react";
// MUI
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

export default function PrevPages({ data, setActivePage, icon }) {
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
    prev: null,
  };

  return <Box>{switchIcons[icon]}</Box>;
}
