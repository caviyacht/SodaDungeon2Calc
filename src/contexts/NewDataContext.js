import { createContext, useContext } from "react";
import { isEmpty, withContext } from "../utils";
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

const DataContext = createContext({
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
  });
}

const initContext = (context, funcs) => {
  return Object.entries(funcs).reduce((result, [name, func]) => ({
    ...result,
    [name]: withContext(result, func)
  }), { data: context });
}

const getEntity = context => entityId => ({
  entityId,
  ...context.data.entities[entityId]
});

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

  return {
    ...entity,
    image,
    stats,
    skills,
    slots,
    isLoaded: true,
    hasStats: !isEmpty(stats),
    hasSkills: !isEmpty(skills),
    hasSlots: !isEmpty(slots)
  };
};

const getCollectionIdForEntityId = entityId => {
  const [type] = entityId.split('-');

  if (/y$/.test(type)) {
    return type.replace(/y$/, "ies");
  }

  return type + "s";
};

const getImage = context => (collectionId, id) => {
  return context.data.images[collectionId][id];
};

const loadEntityImage = context => entity => {
  return context.getImage(getCollectionIdForEntityId(entity.entityId), entity.id);
};

const loadEntitySkills = context => entity => {
  return (entity.skills || [])
    .map(id => context.loadEntity(context.getSkillEntity(id)))
    .reduce((result, skill) => ({...result, [skill.id]: skill}), {});
};

const loadEntitySlots = context => entity => {
  return (entity.slots || [])
    .map(id => context.loadEntity(context.getSlotEntity(id)))
    .reduce((result, slot) => ({...result, [slot.id]: slot}), {});
};

const loadEntityStats = context => entity => {
  return Object
    .entries(entity.stats || {})
    .map(([id, stat]) => ({...context.getStatEntity(id), value: stat}))
    .reduce((result, value) => ({...result, [value.id]: value}), {});
};

export { useDataContext };