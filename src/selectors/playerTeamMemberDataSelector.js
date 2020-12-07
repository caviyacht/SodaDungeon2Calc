import { selectorFamily } from "recoil";
import { playerTeamDataSelector } from "./playerTeamDataSelector";

export const playerTeamMemberDataSelector = selectorFamily({
  key: "playerTeamMemberDataSelector",
  get: name => ({ get }) => {
    const playerTeamData = get(playerTeamDataSelector);

    return playerTeamData.slots[name] || {};
  },
  // `value` will be the exact object that needs to be saved.
  set: name => ({ get, set }, value) => {
    console.log(name, value);
    set(playerTeamDataSelector, state => ({
      ...state,
      slots: {
        ...state.slots,
        [name]: value
      }
    }));
  }
});