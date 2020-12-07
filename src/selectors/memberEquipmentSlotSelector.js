import { selectorFamily } from "recoil";
import { entitySelector } from "./entitySelector";
import { playerTeamMemberDataSelector } from "./playerTeamMemberDataSelector";
import { playerTeamMemberSelector } from "./playerTeamMemberSelector";

export const memberEquipmentSlotSelector = selectorFamily({
  key: "memberEquipmentSlotSelector",
  get: ({ memberName, equipmentSlotName }) => ({ get }) => {
    const member = get(playerTeamMemberSelector(memberName));

    return member.slots[equipmentSlotName];
  },
  // `value` will be the entity id.
  set: ({ memberName, equipmentSlotName }) => ({ get, set }, value) => {
    const entity = get(entitySelector(value));
    const memberEquipmentSlot = get(memberEquipmentSlotSelector({ memberName, equipmentSlotName }));
    
    // When setting the equipment, need to:
    // - Create a template from the new equipment entity
    // - Copy any matching equipment slots
    const equipmentSlot = Object
      .entries(memberEquipmentSlot.slots)
      .reduce((result, [name, slot]) => {
        // If the slot has a value associated, then it is considered "special".
        if (result.slots[slot.name] && !result.slots[slot.name].value) {
          result.slots[slot.name] = {
            value: slot.value.name
          };
        }

        return result;
      }, Object
        .entries(entity.slots)
        .reduce((result, [name, slot]) => ({
          ...result,
          slots: {
            ...result.slots,
            [slot.name]: { value: slot.value }
          }
      }), { value: entity.name, slots: {} }));

    // TODO: Use a new `memberEquipmentSlotDataSelector` (name is too long for CodeSandbox???).
    set(playerTeamMemberDataSelector(memberName), state => ({
      ...state,
      slots: {
        ...state.slots,
        [equipmentSlotName]: equipmentSlot
      }
    }));
  }
});