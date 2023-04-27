import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        height: "10%",
        backgroundColor: "black",
        position: "fixed",
        bottom: "0",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          color: "white",
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        Projet done by : Achraf Ameur - Abdelhaq Mahmoudi - Rafik Cherrak
      </Typography>
    </Box>
  );
}
