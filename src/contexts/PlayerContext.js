import React, { createContext, useContext, useReducer, useState } from "react";
import { useDataContext } from "./DataContext";

const playerData = {
  floor: 6000000,
  pets: {
    "rock": { level: 8, isFavorite: true }
  },
  characters: { 
    "nurse": { level: 50 }
  },
  items: {
    "103": { level: 10, isFavorite: true }
  },
  relics: {
    "hp": { level: 210000, isFavorite: true },
    "nurse": { level: 100000, isFavorite: true }
  },
  teams: {
    "default": {
      name: "Default",
      pets: {
        "pet_1": { itemId: "rock" }
      },
      characters: {
        "character_1": {
          itemId: "nurse",
          slots: {
            "weapon_1": { itemId: "120", slots: { "resource_ore_1": { itemId: null } } },
            "shield_1": { itemId: "167", slots: { "resource_ore_1": { itemId: null } } },
            "armor_1": { itemId: "162", slots: { "resource_ore_1": { itemId: null } } },
            "accessory_1": { itemId: "130" }
          }
        },
        "character_2": {
          itemId: "thief",
          slots: {
            "weapon_1": { itemId: "120", slots: { "resource_ore_1": { itemId: null } } },
            "shield_1": { itemId: "167", slots: { "resource_ore_1": { itemId: null } } },
            "armor_1": { itemId: "162", slots: { "resource_ore_1": { itemId: null } } },
            "accessory_1": { type: "accessory", itemId: "130" }
          }
        },
        "character_3": {
          itemId: "dual_wield",
          slots: {
            "weapon_1": { itemId: "103", slots: { "resource_ore_1": { itemId: null } } },
            "weapon_2": { itemId: "103", slots: { "resource_ore_1": { itemId: null } } },
            "armor_1": { itemId: "143", slots: { "resource_ore_1": { itemId: null } } },
            "accessory_1": { type: "accessory", itemId: "127" }
          }
        },
        "character_4": {
          itemId: "dual_wield",
          slots: {
            "weapon_1": { itemId: "103",  slots: { "resource_ore_1": { itemId: null } } },
            "weapon_2": { itemId: "103", slots: { "resource_ore_1": { itemId: null } } },
            "armor_1": { itemId: "143", slots: { "resource_ore_1": { itemId: null } } },
            "accessory_1": { itemId: "127" }
          }
        },
        "character_5": {
          itemId: "dual_wield",
          slots: {
            "weapon_1": { itemId: "103", slots: { "resource_ore_1": { itemId: null } } },
            "weapon_2": { itemId: "103", slots: { "resource_ore_1": { itemId: null } } },
            "armor_1": { itemId: "143", slots: { "resource_ore_1": { itemId: null } } },
            "accessory_1": { itemId: "127" }
          }
        },
        "character_6": {
          itemId: "dark_lord",
          slots: {
            "weapon_special_1": { itemId: "99" },
            "accessory_1": { itemId: "100" },
            "accessory_2": { itemId: "129" },
            "accessory_3": { itemId: "130" }
          }
        }
      }
    }
  }
};

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
  const [state, dispatch] = useReducer(reducer(dataContext), playerData);

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