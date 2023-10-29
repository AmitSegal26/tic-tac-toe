import { dict } from "../utils/dict";
const { emptyBoardMatrix } = dict;
export const handleReset = (
  setMatrixXO,
  setVictoryOpt,
  setTurnOfX,
  setIsGameEnd,
  setIsTie
) => {
  setMatrixXO(emptyBoardMatrix);
  setVictoryOpt(0);
  setTurnOfX(true);
  setIsGameEnd(false);
  setIsTie(false);
};
