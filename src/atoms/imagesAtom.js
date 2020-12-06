import { atom } from "recoil";
import { images } from "../data";

export const imagesAtom = atom({
  key: "imagesAtom",
  default: images
});