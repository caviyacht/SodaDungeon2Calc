import { selectorFamily } from "recoil";
import { playerDataAtom } from "../atoms/playerDataAtom";
import { playerEntitySelector } from "./playerEntitySelector";

export const playerEntityLevelSelector = selectorFamily({
  key: "playerEntityLevelSelector",
  get: id => ({ get }) => {
    const entity = get(playerEntitySelector(id));

    return entity.level;
  },
  set: id => ({ set }, value) => {
    set(playerDataAtom, state => ({
      ...state,
      entities: {
        ...state.entities,
        [id]: {
          ...state.entities[id],
          level: value
        }
      }
    }));
  }
});