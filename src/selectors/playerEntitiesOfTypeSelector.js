import { selectorFamily } from "recoil";
import { entitiesOfTypeSelector } from "./entitiesOfTypeSelector";
import { playerEntitySelector } from "./playerEntitySelector";

export const playerEntitiesOfTypeSelector = selectorFamily({
  key: "playerEntitiesOfTypeSelector",
  get: type => ({ get }) => {
    const entities = get(entitiesOfTypeSelector(type));

    return entities.map(entity => get(playerEntitySelector(entity.id)));
  }
});