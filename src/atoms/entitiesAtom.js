import { atom } from "recoil";
import { entities } from "../data";

export const entitiesAtom = atom({
  key: "entitiesAtom",
  default: entities
});