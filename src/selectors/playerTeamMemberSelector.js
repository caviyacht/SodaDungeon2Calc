import { selectorFamily } from "recoil";
import { playerTeamIdAtom } from "../atoms/playerTeamIdAtom";
import { playerDataAtom } from "../atoms/playerDataAtom";
import { getSlotEntity } from "../utils";
import { playerTeamMemberDataSelector } from "./playerTeamMemberDataSelector";
import { entitySelector } from "./entitySelector";

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
  },
  // `value` will be the character entity id.
  set: name => ({ get, set }, value) => {
    const characterEntity = get(entitySelector(value));
    const playerTeamMember = get(playerTeamMemberSelector(name));
    const playerTeamMemberData = get(playerTeamMemberDataSelector(name));

    // When setting the character, need to:
    // - Create a template from the new character entity
    // - Copy any matching existing equipment
    const member = Object
      .entries(playerTeamMember.slots)
      .reduce((result, [name, slot]) => {
        // If the slot has a value associated, then it is considered "special".
        if (result.slots[slot.name] && !result.slots[slot.name].value) {
          result.slots[slot.name] = {
            value: slot.value.name
          };
          
         // Copy the slots from the existing slot.
          if (playerTeamMemberData.slots[slot.name].slots) {
            result.slots[slot.name].slots = {
              ...playerTeamMemberData.slots[slot.name].slots
            };
          }
        }

        return result;
      }, Object
        .entries(characterEntity.slots)
        .reduce((result, [name, slot]) => ({
          ...result,
          slots: {
            ...result.slots,
            [slot.name]: { value: slot.value }
          }
      }), { value: characterEntity.name, slots: {} }));

    set(playerTeamMemberDataSelector(name), member);
  }
});