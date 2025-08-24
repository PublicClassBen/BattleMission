import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

export function useGameData() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("useGameData must be used within a GameProvider");
  }

  return context;
}

export default useGameData;
