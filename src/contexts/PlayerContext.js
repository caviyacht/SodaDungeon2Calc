import React, { createContext, useContext, useReducer, useState } from "react";
import { useDataContext } from "./DataContext";
import player from "../data/player";

const PlayerContext = createContext();

const createTeamCharacter = (slot, itemId, dataContext) => {
  const item = dataContext.characters[itemId];
  const slots = item.slots || [];
  const currentSlots = slot.item.slots || {};

  return {
    itemId,
    slots: slots.reduce((o, slotId) => {
      o[slotId] = copyCharacterEquipment(slotId, currentSlots[slotId]);

      return o;
    }, {})
  };
};

const copyCharacterEquipment = (slotId, currentSlot) => {
  if (!currentSlot) {
    return { itemId: null };
  }

  return {
    ...currentSlot
  };
};

const createCharacterEquipment = (slot, itemId, dataContext) => {
  const item = dataContext[slot.collection][itemId];
  const slots = item.slots || [];
  const currentSlots = slot.item.slots || {};

  console.log(slot, currentSlots);

  return {
    itemId,
    slots: slots.reduce((o, slotId) => {
      o[slotId] = {
        itemId: currentSlots[slotId]
          ? currentSlots[slotId].itemId
          : null
      };

      return o;
    }, {})
  };
};

// TODO: Figure out some other way to handle super nested state.
const reducer = dataContext => (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_PET":
      return {
        ...state,
        teams: {
          ...state.teams,
          [payload.team.id]: {
            ...state.teams[payload.team.id],
            pets: {
              [payload.slot.id]: {
                itemId: payload.pet.itemId
              }
            }
          }
        }
      };

    case "SET_CHARACTER":
      return {
        ...state,
        teams: {
          ...state.teams,
          [payload.team.id]: {
            ...state.teams[payload.team.id],
            characters: {
              ...state.teams[payload.team.id].characters,
              [payload.slot.id]: createTeamCharacter(
                payload.slot,
                payload.character.itemId, 
                dataContext
              )
            }
          }
        }
      };

    case "SET_CHARACTER_EQUIPMENT":
        return {
          ...state,
          teams: {
            ...state.teams,
            [payload.team.id]: {
              ...state.teams[payload.team.id],
              characters: {
                ...state.teams[payload.team.id].characters,
                [payload.character.id]: {
                  ...state.teams[payload.team.id].characters[payload.character.id],
                  slots: {
                    ...state.teams[payload.team.id].characters[payload.character.id].slots,
                    [payload.slot.id]: createCharacterEquipment(
                      payload.slot,
                      payload.equipment.itemId,
                      dataContext
                    )
                  }
                }
              }
            }
          }
        };

    case "SET_CHARACTER_EQUIPMENT_EXTRA":
      return {
        ...state,
        teams: {
          ...state.teams,
          [payload.team.id]: {
            ...state.teams[payload.team.id],
            characters: {
              ...state.teams[payload.team.id].characters,
              [payload.character.id]: {
                ...state.teams[payload.team.id].characters[payload.character.id],
                slots: {
                  ...state.teams[payload.team.id].characters[payload.character.id].slots,
                  [payload.equipment.id]: {
                    ...state.teams[payload.team.id].characters[payload.character.id].slots[payload.equipment.id],
                    slots: {
                      ...state.teams[payload.team.id].characters[payload.character.id].slots[payload.equipment.id].slots,
                      [payload.slot.id]: {
                        itemId: payload.extra.itemId
                      }
                    }
                  }
                }
              }
            }
          }
        }
      };

    default: throw new Error();
  }
};

const PlayerProvider = ({children}) => {
  const dataContext = useDataContext();
  const [state, dispatch] = useReducer(reducer(dataContext), player);

  return (
    <PlayerContext.Provider value={{state, dispatch}}>
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