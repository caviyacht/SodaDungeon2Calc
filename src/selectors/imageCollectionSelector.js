import { selectorFamily } from "recoil";
import { imagesAtom } from "../atoms/imagesAtom";

export const imageCollectionSelector = selectorFamily({
  key: "imageCollectionSelector",
  get: id => ({ get }) => {
    return get(imagesAtom)[id] || {};
  }
});