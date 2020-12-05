import { atomFamily, selectorFamily } from "recoil";
import { entitiesState } from "./entitiesState";
import { entityId, isObject } from "../utils";

const entityState = atomFamily({
  key: "entityState",
  default: selectorFamily({
    key: "entityState/default",
    get: id => ({ get }) => {
      const getEntityOfType = (type, name) => get(entityState(entityId(type, name)));

      // Get the raw entity.
      const entity = { id, ...get(entitiesState)[id] };

      // Load the entity properties.
      // Stats
      // - { "statName": statValue, ... }
      // - { "statName": { value: statValue, scope: statScope, turns: statTurns } }
      const stats = Object
        .entries(entity.stats || {})
        .map(([name, stat]) => ({
          ...getEntityOfType("stat", name), 
          value: stat,
          ...(isObject(stat) && stat)
        }))
        .reduce((result, value) => ({ ...result, [value.name]: value }), {});

      // Skills
      // - ["skillName", ...]
      const skills = (entity.skills || [])
        .map(name => getEntityOfType("skill", name))
        .reduce((result, value) => ({ ...result, [value.name]: value }), {});

      // Slots
      // - ["slotName", ...]
      // - [{ "slotName": slotValue }, ...]
      // - { "slotName": { value: slotValue } }
      const slots = (
        Array.isArray(entity.slots)
          ? entity.slots.map(name => {
            if (isObject(name)) {
              return { ...getEntityOfType("slot", name), ...name };
            }

            return { ...getEntityOfType("slot", name), value: null };
          })
          : Object
            .entries(entity.slots || {})
            .map(([name, slot]) => ({ ...getEntityOfType("slot", name), ...slot }))
      ).reduce((result, value) => ({ ...result, [value.name]: value }), {});

      // Value
      const value = entity.value !== undefined
        ? getEntityOfType(entity.valueType, entity.value)
        : {};

      return {
        ...entity,
        stats,
        skills,
        slots,
        value
      };
    }
  })
});