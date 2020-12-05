import { atom } from "recoil";
import { playerData } from "../data/player";

export const rawPlayerState = atom({
  key: "rawPlayerState",
  default: playerData
});