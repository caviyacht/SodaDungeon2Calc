import { atom } from "recoil";
import { playerData } from "../data/player";

export const playerDataAtom = atom({
  key: "playerDataAtom",
  default: playerData
});