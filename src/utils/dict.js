const setObjectOfAchievement = (
  name = "Achievement",
  description,
  complete = false
) =>
  typeof description === "string" &&
  description !== "" && { name, description, complete };

export const dict = {
  sizeOfBoard: "400px",
  SIGNS: {
    X: "X",
    O: "O",
  },
  emptyBoardMatrix: [
    [
      { index: 1, value: "" },
      { index: 2, value: "" },
      { index: 3, value: "" },
    ],
    [
      { index: 4, value: "" },
      { index: 5, value: "" },
      { index: 6, value: "" },
    ],
    [
      { index: 7, value: "" },
      { index: 8, value: "" },
      { index: 9, value: "" },
    ],
  ],
  COLORS: {
    MAIN: "#5CD2E6",
    SECONDARY: "#F4E869",
    TEXT1: "#1A1A1A",
    TEXT2: "#3F3F3F",
    BLACK: "#000",
    WHITE: "#FAF2D3",
    RED: "#E3515B",
    BOARDBG: "#7F7F7F",
  },
  nameOfData: "usersOfTicTacToe",
  achievements: {
    createAnAccount: setObjectOfAchievement(
      "Welcome!",
      "Create your first account!",
      true
    ),
    playFirstGameEver: setObjectOfAchievement(
      "Easy does it",
      "Play your first game ever!"
    ),
    playFirstGameAgainsBot: setObjectOfAchievement(
      "Bot Challenger",
      "Play your first game ever against a bot!"
    ),
    winRandom5: setObjectOfAchievement(
      "Low 5's",
      "Beat 'Normal Mode' 5 times in a row"
    ),
    winRandom10: setObjectOfAchievement(
      "First 10's",
      "Beat 'Normal Mode' 10 times in a row"
    ),
    winSmart10: setObjectOfAchievement(
      "Hard Mode Hero",
      "Beat 'Hard Mode' 10 times in a row"
    ),
  },
};
