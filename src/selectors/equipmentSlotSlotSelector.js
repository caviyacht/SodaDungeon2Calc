import { selectorFamily } from "recoil";
import { entitySelector } from "./entitySelector";
import { memberEquipmentSlotSelector } from "./memberEquipmentSlotSelector";
import { playerTeamMemberDataSelector } from "./playerTeamMemberDataSelector";

export const equipmentSlotSlotSelector = selectorFamily({
  key: "equipmentSlotSlotSelector",
  get: ({ memberName, equipmentSlotName, slotName }) => ({ get }) => {
    const equipmentSlot = get(memberEquipmentSlotSelector({ memberName, equipmentSlotName }));

    return equipmentSlot.slots[slotName];
  },
  // `value` will be the entity id.
  set: ({ memberName, equipmentSlotName, slotName }) => ({ get, set }, value) => {
    const entity = get(entitySelector(value));

    // TODO: Use a new `equipmentSlotSlotDataSelector` (name is too long for CodeSandbox???).
    set(playerTeamMemberDataSelector(memberName), state => ({
      ...state,
      slots: {
        ...state.slots,
        [equipmentSlotName]: {
          ...state.slots[equipmentSlotName],
          slots: {
            ...state.slots[equipmentSlotName].slots,
            [slotName]: { value: entity.name }
          }
        }
      }
    }));
  }
});