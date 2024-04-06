import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import defaultPic from "../../assets/imgs/page-under-construction.jpeg";

const ExpositionsGridBox = ({ imgToRight, imgSrc, imgAlt, paragraph }) => {
  // imgToRight: true / false
  const GridStyleObj = {
    alignItems: "center",
    p: 3,
  };
  if (imgToRight) {
    return (
      <Grid container spacing={2} sx={GridStyleObj}>
        <Grid item xs={8}>
          <Typography sx={{ textAlign: "justify" }}>{paragraph}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Box
            component="img"
            sx={{ maxWidth: "20vw" }}
            src={imgSrc || defaultPic}
            alt={imgAlt || "under construction pic"}
          />
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid container spacing={2} sx={GridStyleObj}>
        <Grid item xs={4}>
          <Box
            component="img"
            sx={{ maxWidth: "20vw" }}
            src={imgSrc || defaultPic}
            alt={imgAlt || "under construction pic"}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography sx={{ textAlign: "justify" }}>{paragraph}</Typography>
        </Grid>
      </Grid>
    );
  }
};

export default ExpositionsGridBox;
