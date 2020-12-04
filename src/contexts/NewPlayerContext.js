import React, { createContext, useContext, useReducer, useState } from "react";
import produce from "immer";
import { useImmerReducer } from "use-immer";
import { withContext } from "../utils";
import { useDataContext } from "./DataContext";

const PlayerContext = createContext();

const PlayerProvider = ({player, children}) => {
  const [state, dispatch] = useImmerReducer(withContext(dataContext, reducer), player);
  const value = { player: state, dispatch };

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
};

const usePlayerContext = () => {
  const dataContext = useDataContext();
  const playerContext = useContext(PlayerContext);

  if (!playerContext) {
    throw new Error('PlayerContext must be used with PlayerProvider!');
  }

  return initContext(playerContext, {
    getTeam,
    loadTeam: withContext(dataContext, loadTeam),
  });
};

const initContext = (context, funcs) => {
  return Object.entries(funcs).reduce((result, [name, func]) => {
    result[name] = withContext(context, func);

    return result;
  }, context);
};

const getTeam = playerContext => id => ({
  entityId: "team-" + id, // TODO: Handle null?
  type: "team",
  id,
  ...playerContext.player.teams[id]
});

const loadTeam = dataContext => playerContext => id => {
  return dataContext.loadEntity(playerContext.getTeam(id));
};

const reducer = dataContext => (draft, action) => {
  const { type, ...payload } = action;

  switch (type) {
    case "SET_FLOOR":
      return void handleSetFloor(draft, payload);

    case "SET_ENTITY_LEVEL":
      return void handleSetEntityLevel(draft, payload);

    case "SET_MEMBER":
      return void handleSetMember(draft, payload, dataContext);

    case "SET_MEMBER_SLOT":
      return void handleSetMemberSlot(draft, payload, dataContext);

    default:
      return;
  }
};

const handleSetMemberSlot = (draft, { teamId, memberId, equipmentSlotId, value }, dataContext) => {
  const slot = draft.teams[teamId].slots[memberId].slots[equipmentSlotId];

  // TODO: This method.
};

const handleSetMember = (draft, { teamId, slotId, value }, dataContext) => {
  const slot = draft.teams[teamId].slots[slotId];

  slot.value = value;

  const entity = dataContext.getEntityOfType("character", value);

  if (entity.slots === undefined) {
    return;
  }

  // Update the member's slots.
  slot.slots = Object.entries(slot.slots).reduce((result, [id, slot]) => {
    if (result[id] && !result[id].value) {
      result[id] = { ...slot };
    }

    return result;
  }, dataContext.getEntitySlots(entity));
};

const handleSetFloor = (draft, { floor }) => {
  draft.floor = floor;
};

const handleSetEntityLevel = (draft, { entityId, level }) => {
  draft.entities[entityId].level = level;
};

export { PlayerProvider, usePlayerContext };