import { selector } from "recoil";
import { playerDataAtom } from "../atoms/playerDataAtom";

export const playerFloorSelector = selector({
  key: "playerFloorSelector",
  get: ({ get }) => {
    return get(playerDataAtom).floor;
  },
  set: ({ set }, value) => {
    set(playerDataAtom, state => ({
      ...state,
      floor: value
    }))
  }
});