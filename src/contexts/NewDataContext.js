import { createContext, useContext } from "react";
import { isEmpty, withContext, filter } from "../utils";
import accessories from "../data/entities/accessories";
import armors from "../data/entities/armors";
import characters from "../data/entities/characters";
import gems from "../data/entities/gems";
import pets from "../data/entities/pets";
import relics from "../data/entities/relics";
import resource_ores from "../data/entities/resource_ores";
import shields from "../data/entities/shields";
import skills from "../data/entities/skills";
import slots from "../data/entities/slots";
import stats from "../data/entities/stats";
import upgrades from "../data/entities/upgrades";
import weapons from "../data/entities/weapons";

import images from "../data/images";

const DataContext = createContext({
  images,
  entities: {
    ...accessories,
    ...armors,
    ...characters,
    ...gems,
    ...pets,
    ...relics,
    ...resource_ores,
    ...shields,
    ...skills,
    ...slots,
    ...stats,
    ...upgrades,
    ...weapons
  }
});

const useDataContext = () => {
  const context = useContext(DataContext);

  return initContext(context, {
    getImage,
    getEntity,
    getEntityOfType,
    getEntitiesOfType,
    getCharacterEntity,
    getPetEntity,
    getRelicEntity,
    getStatEntity,
    getSkillEntity,
    getSlotEntity,
    loadEntity,
    loadEntityImage,
    loadEntityStats,
    loadEntitySlots,
    loadEntitySkills,
    loadEntityValue,
  });
};

const initContext = (context, funcs) => {
  return Object.entries(funcs).reduce((result, [name, func]) => {
    result[name] = withContext(result, func);

    return result;
  }, context);
}

const getEntity = context => entityId => ({
  entityId,
  ...context.entities[entityId]
});

const getEntitiesOfType = context => type => {
  return filter(context.entities, ([_, entity]) => entity.type === type);
};

const getEntityOfType = context => (type, id) => context.getEntity(type + "-" + id);
const getCharacterEntity = context => id => context.getEntity("character-" + id);
const getPetEntity = context => id => context.getEntity("pet-" + id);
const getRelicEntity = context => id => context.getEntity("relic-" + id);
const getStatEntity = context => id => context.getEntity("stat-" + id);
const getSkillEntity = context => id => context.getEntity("skill-" + id);
const getSlotEntity = context => id => context.getEntity("slot-" + id);

const loadEntity = context => entity => {
  const image = context.loadEntityImage(entity);
  const stats = context.loadEntityStats(entity);
  const slots = context.loadEntitySlots(entity);
  const skills = context.loadEntitySkills(entity);
  const value = context.loadEntityValue(entity);

  return {
    ...entity,
    image,
    stats,
    skills,
    slots,
    value,
    isLoaded: true,
    hasStats: !isEmpty(stats),
    hasSkills: !isEmpty(skills),
    hasSlots: !isEmpty(slots),
    hasValue: !isEmpty(value)
  };
};

const getCollectionIdForEntityId = entityId => {
  const [type] = entityId.split('-');

  if (/y$/.test(type)) {
    return type.replace(/y$/, "ies");
  }

  return type + "s";
};

const getImage = context => (collectionId, imageId) => {
  const imageCollection = context.images[collectionId];

  if (imageCollection === undefined) {
    return null;
  }

  return imageCollection[imageId];
};

const loadEntityImage = context => entity => {
  const imageId = entity.internalId || entity.id;

  return context.getImage(getCollectionIdForEntityId(entity.entityId), imageId);
};

const loadEntityValue = context => entity => {
  if (entity.value === undefined) {
    return {};
  }

  // entity.value = "id"
  // entity.valueType = "type"
  return context.loadEntity(context.getEntityOfType(entity.valueType, entity.value));
}

const loadEntitySkills = context => entity => {
  if (entity.skills === undefined) {
    return {};
  }

  // entity.skills = ["skillId"]
  return (entity.skills)
    .map(id => context.loadEntity(context.getSkillEntity(id)))
    .reduce((result, skill) => ({...result, [skill.id]: skill}), {});
};

const loadEntitySlots = context => entity => {
  if (entity.slots === undefined) {
    return {};
  }

  // entity.slots = ["slotId"]
  if (Array.isArray(entity.slots)) {
    return (entity.slots)
      .map(id => context.loadEntity(context.getSlotEntity(id)))
      .reduce((result, slot) => ({...result, [slot.id]: slot}), {});
  }

  // entity.slots = { slotId: { value: "id" } }
  return Object
    .entries(entity.slots)
    // TODO: Figure out a different way?
    .map(([id, slot]) => context.loadEntity({...context.getSlotEntity(id), ...slot}))
    .reduce((result, slot) => ({...result, [slot.id]: slot}), {});
};

const loadEntityStats = context => entity => {
  if (entity.stats === undefined) {
    return {};
  }

  // entity.stats = { statId: value }
  // TODO: Handle `entity.stats = { statId: { value: _, ... } }`
  return Object
    .entries(entity.stats)
    .map(([id, stat]) => ({...context.getStatEntity(id), value: stat}))
    .reduce((result, value) => ({...result, [value.id]: value}), {});
};

export { useDataContext };