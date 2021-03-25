import { selectorFamily } from "recoil";
import { playerDataAtom } from "../atoms/playerDataAtom";
import { entitySelector } from "./entitySelector";

export const playerEntitySelector = selectorFamily({
  key: "playerEntitySelector",
  get: id => ({ get }) => {
    const playerEntity = get(playerDataAtom).entities[id] || {};
    const entity = get(entitySelector(id));

    // Calculate stats.
    const stats = Object.fromEntries(Object
      .entries(entity.stats || {})
      .map(([name, stat]) => [
        name,
        {
          ...stat,
          value: levelUpStat(entity.type, stat, playerEntity.level || 0)
        }
      ]));

if (/character/.test(id)) console.log(entity);

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

// TODO: Handle every scenario, currently handles:
// - Relics
const levelUpStat = (entityType, stat, level) => {
  switch (entityType) {
    case "upgrade":
      return stat.value * level;
      
    case "relic":
      return stat.value * level;

    default:
      return stat.value;
  }
};