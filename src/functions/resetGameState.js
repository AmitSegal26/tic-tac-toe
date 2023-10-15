import { emptyBoardMatrix } from "../utils/emptyBoardMatrix";

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
