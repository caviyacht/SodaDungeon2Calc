import { selector } from "recoil";
import { playerDataAtom } from "../atoms/playerDataAtom";
import { playerTeamIdAtom } from "../atoms/playerTeamIdAtom";
import { entityId } from "../utils";
import { entitySelector } from "./entitySelector";
import { playerEntitySelector } from "./playerEntitySelector";

// TODO: Also in `entitySelector`.
const getEntityOfType = get => (type, name) => get(entitySelector(entityId(type, name)));

// TODO: Put this somewhere common?
const getPlayerEntityOfType = get => (type, name) => get(playerEntitySelector(entityId(type, name)));

// TODO: Find a new home for this?
const getSlots = get => slots => {
  const getEntity = getEntityOfType(get);
  const getPlayerEntity = getPlayerEntityOfType(get);

  return Object
    .entries(slots || {})
    .map(([name, slot]) => {
      const slotEntity = getEntity("slot", name);
      const valueEntity = getPlayerEntity(slotEntity.valueType, slot.value);

      return {
        ...slotEntity,
        value: valueEntity,
        slots: getSlots(get)(slot.slots) // TODO: Ew.
      };
    });
};

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

    // TODO: This seems ugly with the double call.
    const slots = getSlots(get)(team.slots);

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