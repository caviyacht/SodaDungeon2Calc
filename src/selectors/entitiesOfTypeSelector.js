import { selectorFamily } from "recoil";
import { entitiesAtom } from "../atoms/entitiesAtom";
import { entitySelector } from "./entitySelector";

export const entitiesOfTypeSelector = selectorFamily({
  key: "entitiesOfTypeSelector",
  get: type => ({ get }) => {
    const entities = get(entitiesAtom);

    return Object
      .entries(entities)
      .filter(([_, entity]) => entity.type === type)
      .map(([id, _]) => get(entitySelector(id)));
  }
});