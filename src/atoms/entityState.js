import { atomFamily, selectorFamily } from "recoil";
import { rawEntitiesState } from "./rawEntitiesState";
import { entityId, isObject, pluralize } from "../utils";
import { imagesState } from "./imagesState";

export const entityState = atomFamily({
  key: "entityState",
  default: selectorFamily({
    key: "entityState/default",
    get: id => ({ get }) => {
      const getEntityOfType = (type, name) => get(entityState(entityId(type, name)));

      // Get the raw entity.
      const entity = { id, ...get(rawEntitiesState)[id] };

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

      // Image
      const imageCollectionId = pluralize(entity.type); // TODO: Possibly do this another way?
      const imageCollection = get(imagesState)[imageCollectionId];

      const image = imageCollection
          ? imageCollection[entity.internalId || entity.name]
          : null;

      return {
        ...entity,
        image,
        stats,
        skills,
        slots,
        value
      };
    }
  })
});