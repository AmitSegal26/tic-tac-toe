import { Box, Container } from "@mui/material";
import React from "react";
import COLORS from "../../COLORS";

const SquaresComp = () => {
  const cellStyleObj = {
    width: "10vw",
    height: "10vw",
    border: "3px solid black",
    transition: "all 0.1s linear",
    ":hover": { backgroundColor: COLORS.WHITE },
  };
  const rowStyleObj = { width: "fit-content", display: "flex" };
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 3,
        mb: 3,
      }}
    >
      <Box component="div" sx={rowStyleObj}>
        <Box component="div" sx={cellStyleObj}></Box>
        <Box component="div" sx={cellStyleObj}></Box>
        <Box component="div" sx={cellStyleObj}></Box>
      </Box>
      <Box component="div" sx={rowStyleObj}>
        <Box component="div" sx={cellStyleObj}></Box>
        <Box component="div" sx={cellStyleObj}></Box>
        <Box component="div" sx={cellStyleObj}></Box>
      </Box>
      <Box component="div" sx={rowStyleObj}>
        <Box component="div" sx={cellStyleObj}></Box>
        <Box component="div" sx={cellStyleObj}></Box>
        <Box component="div" sx={cellStyleObj}></Box>
      </Box>
    </Container>
  );
};

export default SquaresComp;
