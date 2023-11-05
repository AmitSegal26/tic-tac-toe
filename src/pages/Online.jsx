import React from "react";
import constructionImg from "../assets/imgs/page-under-construction.jpeg";
import { Box, Container, Typography } from "@mui/material";

const Online = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        gutterBottom
        component="h1"
        variant="h1"
        sx={{ fontSize: { xs: "1.5rem", md: "3rem" } }}
      >
        We are still working on this feature, come back soon!
      </Typography>
      <Box
        component="img"
        src={constructionImg}
        alt="A builder for page under construction description"
        sx={{ width: "40%", borderRadius: "30px" }}
      />
    </Container>
  );
};

export default Online;
