import React, { createContext, useContext, useReducer } from "react";
import { useDataContext } from "./DataContext";

const PlayerContext = createContext();

const getSlotsTemplateForItem = (item) =>
  (item.equipmentSlots || item.slots || []).reduce((result, value) => {
    if (value instanceof Object) {
      result[value.id] = { itemId: value.itemId };
    }
    else {
      result[value] = { itemId: null };
    }

    return result;
  }, {});

const createSlots = (currentSlots, item) =>
  Object.entries(currentSlots || {}).reduce((result, [id, value]) => {
    if (result[id] && !result[id].itemId) {
      result[id] = { ...value };
    }

    return result;
  }, getSlotsTemplateForItem(item));

const createMember = (currentMember, itemId, dataContext) => {
  const item = dataContext.items[itemId];

  // TODO: Find a better way without hardcoding this value.
  if (item.type === "pet") {
    return { itemId };
  }

  return {
    itemId,
    equipmentSlots: createSlots(currentMember.equipmentSlots, item)
  };
};

const createMemberEquipmentSlot = (currentEquipmentSlot, itemId, dataContext) => ({
  itemId,
  slots: createSlots(currentEquipmentSlot.slots, dataContext.items[itemId])
});

const createMemberEquipmentSlotSlot = (currentSlot, itemId, dataContext) => ({ itemId });

const setMember = (state, { teamId, memberId, itemId }, dataContext) => ({
  ...state,
  teams: {
    ...state.teams,
    [teamId]: {
      ...state.teams[teamId],
      members: {
        ...state.teams[teamId].members,
        [memberId]: createMember(state.teams[teamId].members[memberId], itemId, dataContext)
      }
    }
  }
});

const setMemberEquipmentSlot = (state, { teamId, memberId, equipmentId, itemId }, dataContext) => ({
  ...state,
  teams: {
    ...state.teams,
    [teamId]: {
      ...state.teams[teamId],
      members: {
        ...state.teams[teamId].members,
        [memberId]: {
          ...state.teams[teamId].members[memberId],
          equipmentSlots: {
            ...state.teams[teamId].members[memberId].equipmentSlots,
            [equipmentId]: createMemberEquipmentSlot(
              state.teams[teamId].members[memberId].equipmentSlots[equipmentId],
              itemId,
              dataContext)
          }
        }
      }
    }
  }
});

const setMemberEquipmentSlotSlot = (state, { teamId, memberId, equipmentId, slotId, itemId }, dataContext) => ({
  ...state,
  teams: {
    ...state.teams,
    [teamId]: {
      ...state.teams[teamId],
      members: {
        ...state.teams[teamId].members,
        [memberId]: {
          ...state.teams[teamId].members[memberId],
          equipmentSlots: {
            ...state.teams[teamId].members[memberId].equipmentSlots,
            [equipmentId]: {
              ...state.teams[teamId].members[memberId].equipmentSlots[equipmentId],
              slots: {
                ...state.teams[teamId].members[memberId].equipmentSlots[equipmentId].slots,
                [slotId]: createMemberEquipmentSlotSlot(
                  state.teams[teamId].members[memberId].equipmentSlots[equipmentId].slots[slotId],
                  itemId,
                  dataContext)
              }
            }
          }
        }
      }
    }
  }
});

const reducer = dataContext => (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_MEMBER":
      return setMember(state, payload, dataContext);

    case "SET_MEMBER_EQUIPMENT_SLOT":
      return setMemberEquipmentSlot(state, payload, dataContext);;

    case "SET_MEMBER_EQUIPMENT_SLOT_SLOT":
      return setMemberEquipmentSlotSlot(state, payload, dataContext);

    case "SET_FLOOR":
      return {
        ...state,
        floor: payload.floor
      };

    case "SET_ITEM_LEVEL":
      return {
        ...state,
        items: {
          ...state.items,
          [payload.itemId]: {
            ...state.items[payload.itemId],
            level: payload.level
          }
        }
      };

    case "SET_RELIC_LEVEL":
      return {
        ...state,
        relics: {
          ...state.relics,
          [payload.relicId]: {
            ...state.relics[payload.relicId],
            level: payload.level
          }
        }
      };

    default: throw new Error();
  }
};

const PlayerProvider = ({data, children}) => {
  const dataContext = useDataContext();
  const [player, dispatch] = useReducer(reducer(dataContext), data);
  const value = { player, dispatch };

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
}

const usePlayerContext = () => {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error('PlayerContext must be used with PlayerProvider!');
  }

  return context;
}

export { PlayerProvider, usePlayerContext };