import { atom } from "recoil";
import data from "../data";

export const entitiesState = atom({
  key: "entitiesState",
  default: data.entities
});