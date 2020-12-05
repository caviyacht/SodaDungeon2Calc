import { selectorFamily } from "recoil";
import { entityState } from "../atoms/entityState";
import { rawPlayerEntityState } from "../atoms/rawPlayerEntityState";

export const playerEntityState = selectorFamily({
  key: "playerEntityState",
  get: id => ({ get }) => {
    const entity = get(entityState(id));
    const rawPlayerEntity = get(rawPlayerEntityState(id));

    return {
      ...entity,
      ...rawPlayerEntity
    };
  },
  set: id => ({ set }, value) => {
    set(rawPlayerEntityState(id), state => ({
      ...state,
      level: value
    }));
  }
});