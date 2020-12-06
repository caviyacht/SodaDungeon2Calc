import { selectorFamily } from "recoil";
import { playerDataAtom } from "../atoms/playerDataAtom";
import { entitySelector } from "./entitySelector";

export const playerEntitySelector = selectorFamily({
  key: "playerEntitySelector",
  get: id => ({ get }) => {
    const playerEntity = get(playerDataAtom).entities[id] || { level: 0 };
    const entity = get(entitySelector(id));

    // Calculate stats.
    const stats = Object.fromEntries(Object
      .entries(entity.stats || {})
      .map(([statId, stat]) => [
        statId,
        {
          ...stat,
          value: stat.value * playerEntity.level
        }
      ]));

    return {
      ...entity,
      stats,
      ...playerEntity
    };
  },
  set: id => ({ set }, value) => {
    set(playerDataAtom, state => ({
      ...state,
      entities: {
      ...state.entities,
        [id]: {
          ...state.entities[id],
          ...value
        }
      }
    }));
  }
});