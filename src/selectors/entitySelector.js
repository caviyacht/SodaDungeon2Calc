import { selectorFamily } from "recoil";
import { entitiesAtom } from "../atoms/entitiesAtom";
import { isObject, pluralize, getEntityOfType } from "../utils";
import { imageCollectionSelector } from "./imageCollectionSelector";

export const entitySelector = selectorFamily({
  key: "entitySelector",
  get: id => ({ get }) => {
    const getEntity = getEntityOfType(get);

    // Get the raw entity.
    const entity = { id, ...get(entitiesAtom)[id] };

    // Load the entity properties.
    // Stats
    // - { "statName": statValue, ... }
    // - { "statName": { value: statValue, scope: statScope, turns: statTurns } }
    const stats = Object
      .entries(entity.stats || {})
      .map(([name, stat]) => ({
        ...getEntity("stat", name), 
        value: stat,
        ...(isObject(stat) && stat)
      }))
      .reduce((result, value) => ({ ...result, [value.name]: value }), {});

    // Skills
    // - ["skillName", ...]
    const skills = (entity.skills || [])
      .map(name => getEntity("skill", name))
      .reduce((result, value) => ({ ...result, [value.name]: value }), {});

    // Slots
    // - ["slotName", ...]
    // - [{ "slotName": slotValue }, ...]
    // - { "slotName": { value: slotValue } }
    const slots = (
      Array.isArray(entity.slots)
        ? entity.slots.map(name => {
          if (isObject(name)) {
            return { ...getEntity("slot", name.name), ...name };
          }

          return { ...getEntity("slot", name), value: null };
        })
        : Object
          .entries(entity.slots || {})
          .map(([name, slot]) => ({ ...getEntity("slot", name), ...slot }))
    ).reduce((result, value) => ({ ...result, [value.name]: value }), {});

    // Value
    const value = entity.value !== undefined
      ? getEntity(entity.valueType, entity.value)
      : {};

    // Image
    const imageCollectionId = pluralize(entity.type); // TODO: Possibly do this another way?
    const imageCollection = get(imageCollectionSelector(imageCollectionId));
    const image = imageCollection[entity.internalId || entity.name];

    // Special Case: Load the display name for relics.
    const displayName = entity.displayName || (
      entity.type === "relic"
        ? getEntity(entity.subtype || "stat", entity.name).displayName
        : null // TODO: Can this happen?
    );

    return {
      ...entity,
      displayName,
      image,
      stats,
      skills,
      slots,
      value
    };
  }
});