import { atomFamily, selectorFamily } from "recoil";
import { rawPlayerState } from "./rawPlayerState";

export const rawPlayerEntityState = atomFamily({
  key: "rawPlayerEntityState",
  default: selectorFamily({
    key: "rawPlayerEntityState/default",
    get: id => ({ get }) => {
      return get(rawPlayerState).entities[id];
    }
  })
});