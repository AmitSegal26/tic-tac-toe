import { dict } from "../utils/dict";
const { emptyBoardMatrix } = dict;
export const handleReset = (
  setMatrixXO,
  setVictoryOpt,
  setTurnOfX,
  setIsGameEnd,
  setIsTie,
  isBotPage = false
) => {
  setMatrixXO(emptyBoardMatrix);
  setVictoryOpt(0);
  // *setting turn to false (O) because of the useEffect that inverts the value of turnOfX (in Game.jsx)
  setTurnOfX(isBotPage ? true : false);
  setIsGameEnd(false);
  setIsTie(false);
};
