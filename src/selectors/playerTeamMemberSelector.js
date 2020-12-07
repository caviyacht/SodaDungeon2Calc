import { selectorFamily } from "recoil";
import { playerTeamIdAtom } from "../atoms/playerTeamIdAtom";
import { playerDataAtom } from "../atoms/playerDataAtom";
import { getSlotEntity } from "../utils";

export const playerTeamMemberSelector = selectorFamily({
  key: "playerTeamMemberSelector",
  get: name => ({ get }) => {
    const teamId = get(playerTeamIdAtom);
    const team = get(playerDataAtom).teams[teamId] || {};
    const slot = team.slots[name];

    const entity = getSlotEntity(get)(name, slot);

    return {
      ...entity,

    };
  }
});