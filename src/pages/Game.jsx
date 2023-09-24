import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import SquaresComp from "./game/SquaresComp";
import COLORS from "../COLORS";

const Game = () => {
  return (
    <Container sx={{ display: "flex" }}>
      <Box component="div">
        <Typography component="h1" variant="h1">
          Welcome to the game!
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
          <ListItem>
            <b> rule no. 1:</b> Each player has his turn to choose, 1 choice for
            each player for each turn
          </ListItem>
          <ListItem>
            <b> rule no. 2:</b> Once a player has chosen his spot, the turn
            passes to the next player and there are no "go-backs"!
          </ListItem>
          <ListItem>
            <b> rule no. 3:</b> The goal can be as a row, a column or even a
            diagonal line
          </ListItem>
          <ListItem>
            <b> no. 4:</b>rule Have fun!
          </ListItem>
        </List>
      </Box>
      <SquaresComp />
    </Container>
  );
};

export default Game;
