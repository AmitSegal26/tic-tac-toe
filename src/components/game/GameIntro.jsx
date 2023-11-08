import {
  Box,
  Divider,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { dict } from "../../utils/dict";
const { COLORS } = dict;
const GameIntro = ({ welcomeText, rulesArr }) => {
  const theme = useTheme();
  const mediaXLDown = useMediaQuery(theme.breakpoints.down("xl"));
  const mediaMDDown = useMediaQuery(theme.breakpoints.down("md"));
  const sizeOfRuleText = {
    fontSize: mediaXLDown ? (mediaMDDown ? "0.75rem" : "1rem") : "1.25rem",
  };
  return (
    <Box component="div" sx={{ mr: { xs: 0, md: 5 }, mb: 5 }}>
      <Typography
        component="h1"
        variant={mediaXLDown ? (mediaMDDown ? "h5" : "h4") : "h2"}
      >
        {welcomeText}
      </Typography>
      <Divider />
      <Typography
        component="h3"
        variant={mediaXLDown ? (mediaMDDown ? "h5" : "h4") : "h2"}
      >
        The rules are simple really:
      </Typography>

      <Divider />
      <Typography
        component="h3"
        variant={mediaXLDown ? (mediaMDDown ? "h6" : "h5") : "h3"}
      >
        The goal: to get your shape into 3 adjacent cells.
      </Typography>
      <hr />
      <List
        component="h3"
        variant="h4"
        sx={{ backgroundColor: COLORS.WHITE, borderRadius: "30px" }}
      >
        {rulesArr.map((item, index) => (
          <ListItem key={index} sx={sizeOfRuleText}>
            <b> rule no. {index + 1}:</b>
            {item}
          </ListItem>
        ))}
        <ListItem sx={sizeOfRuleText}>
          <b>rule no. {rulesArr.length + 1}:</b> Have fun!
        </ListItem>
      </List>
    </Box>
  );
};

export default GameIntro;
