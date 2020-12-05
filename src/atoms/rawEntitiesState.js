import { atom } from "recoil";
import data from "../data";

export const rawEntitiesState = atom({
  key: "rawEntitiesState",
  default: data.entities
});