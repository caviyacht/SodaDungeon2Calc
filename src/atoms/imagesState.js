import { atom } from "recoil";
import images from "../data/images";

export const imagesState = atom({
  key: "imagesState",
  default: images
});