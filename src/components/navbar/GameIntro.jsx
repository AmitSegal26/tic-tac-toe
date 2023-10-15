import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import React from "react";
import COLORS from "../../utils/COLORS";

const GameIntro = ({ welcomeText, rulesArr }) => {
  return (
    <Box component="div">
      <Typography component="h1" variant="h2">
        {welcomeText}
      </Typography>
      <Divider />
      <Typography component="h3" variant="h2">
        The rules are simple really:
      </Typography>

      <Divider />
      <Typography component="h3" variant="h3">
        The goal: to get your shape into 3 adjacent cells.
      </Typography>
      <hr />
      <List
        component="h3"
        variant="h4"
        sx={{ backgroundColor: COLORS.WHITE, borderRadius: "30px" }}
      >
        {rulesArr.map((i, index) => (
          <ListItem key={index}>
            <b> rule no. {index + 1}:</b>
            {i}
          </ListItem>
        ))}
        <ListItem>
          <b>rule no. {rulesArr.length + 1}:</b> Have fun!
        </ListItem>
      </List>
    </Box>
  );
};

export default GameIntro;
