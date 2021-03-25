import { selectorFamily } from "recoil";
import { getMemberStats } from "../utils";

// This name doesn't make total sense, but it is the stats
// for the member + relics + upgrades + team
export const memberStatsSelector = selectorFamily({
  key: "memberStatsSelector",
  get: name => ({ get }) => {
    const stats = getMemberStats(get)(name);

    return stats;
  }
});