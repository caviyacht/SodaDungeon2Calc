import { atom } from "recoil";
import data from "../data";

export const entities = atom({
  key: "entities",
  default: data.entities
});