import { selectorFamily } from "recoil";
import { getMemberSkills } from "../utils";

// This name doesn't make total sense, but it is the skills
// for the member + stats for the member (from the other confusing one).
export const memberSkillsSelector = selectorFamily({
  key: "memberSkillsSelector",
  get: name => ({ get }) => {
    return getMemberSkills(get)(name);
  }
});