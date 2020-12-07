import { selector } from "recoil";
import { playerDataAtom } from "../atoms/playerDataAtom";
import { playerTeamIdAtom } from "../atoms/playerTeamIdAtom";
import { playerTeamMemberSelector } from "../selectors/playerTeamMemberSelector";

export const playerTeamSelector = selector({
  key: "playerTeamSelector",
  get: ({ get }) => {
    const teamId = get(playerTeamIdAtom);
    const team = get(playerDataAtom).teams[teamId] || {};

    // The format of a team is below.
    // `slots` is an object
    // `slotName` is the entity name of the slot
    // `value` is the entity name of the entity configured for the slot (see `valueType` on the slot entity )
    // 
    // { displayName, slots: { slotName: { value, slots: { slowName: { value } } } } }

    const slots = Object
      .entries(team.slots || {})
      .map(([name, _]) => get(playerTeamMemberSelector(name)))
      .reduce((result, slot) => ({...result, [slot.name]: slot}), {});

    // The team is not an entity, but treat it like one.
    return {
      type: "team",
      // TODO: Possibly change what this means.
      id: "team-" + teamId,
      name: teamId,
      displayName: team.name, // TODO: Ugh.
      ...team,
      slots
    };
  }
});

