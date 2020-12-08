import { entitySelector } from "./selectors/entitySelector";
import { playerEntitiesOfTypeSelector } from "./selectors/playerEntitiesOfTypeSelector";
import { playerEntitySelector } from "./selectors/playerEntitySelector";
import { playerTeamMemberSelector } from "./selectors/playerTeamMemberSelector";

const isEmpty = (c) => {
  if (Array.isArray(collection)) {
    return collection.length === 0;
  }

  for (_ of collection) {
    return false;
  }

  return true;
};

const isObject = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

const entityId = (type, name) => type + "-" + name;

const pluralize = (word) => {
  if (/y$/.test(word)) {
    return word.replace(/y$/, "ies");
  }

  return word + "s";
};

const getEntityOfType = get => (type, name) => get(entitySelector(entityId(type, name)));

const getPlayerEntityOfType = get => (type, name) => get(playerEntitySelector(entityId(type, name)));

const getSlotEntity = get => (name, slot) => {
  const slotEntity = getEntityOfType(get)("slot", name);
  const valueEntity = getPlayerEntityOfType(get)(slotEntity.valueType, slot.value);

  const slots = Object
    .entries(slot.slots || {})
    .map(([name, slot]) => getSlotEntity(get)(name, slot))
    .reduce((result, slot) => ({...result, [slot.name]: slot}), {});

  const stats = aggregateStats([
    valueEntity, 
    ...Object.entries(slots).map(([_, slot]) => slot)
  ]);

  const skills = aggregateSkills([
    valueEntity, 
    ...Object.entries(slots).map(([_, slot]) => slot)
  ]);

  return {
    ...slotEntity,
    value: valueEntity,
    stats,
    skills,
    slots
  };
};

const getMemberStats = get => (name) => {
  const member = get(playerTeamMemberSelector(name));

  if (member.valueType === "pet") {
    return member.stats;
  }

  const sources = [].concat(
    // Self.
    member,

    // TODO: Make a new selector just because.
    // Pet.
    get(playerTeamMemberSelector("pet_1")),

    // Relics.
    get(playerEntitiesOfTypeSelector("relic"))
      .filter(relic => relic.level > 0 && relic.scope !== "team" && relic.subtype !== "character"),
    
    // Character relic.
    getPlayerEntityOfType(get)("relic", member.value.name),

    // Upgrades (aka, kitchen).
    getPlayerEntityOfType(get)("upgrade", "kitchen")
  );

  console.log(name, sources);

  const stats = aggregateStats(sources);

  return [].concat(
    {
      ...getEntityOfType(get)("stat", "hp_total"),
      value: Math.floor(stats["hp"].value 
        * (1 + stats["hp_boost"].value) 
        * (1 + stats["hp_boost_kitchen"].value))
    },
    {
      ...getEntityOfType(get)("stat", "atk_total"),
      value: Math.floor(stats["atk"].value * (1 + stats["atk_boost"].value))
    },
    ...Object.entries(stats).map(([id, value]) => ({id, ...value }))
  ).reduce((result, stat) => ({ ...result, [stat.name]: stat }), {});
};

const aggregateStats = (sources) => {
  return sources.reduce((result, source) => {
    return Object.entries(source.stats).reduce((_, [name, stat]) => {
      if (result[stat.name] && stat.valueType !== "boolean") {
        result[stat.name] = {
          ...result[stat.name],
          value: result[stat.name].value + stat.value,
          sources: [...result[stat.name].sources, source]
        };
      }
      else {
        result[stat.name] = {...stat, sources: [source]};
      }

      return result;
    }, result);
  }, {});
};

const aggregateSkills = (sources) => {
  return sources.reduce((result, source) => {
    return Object.entries(source.skills).reduce((_, [name, skill]) => {
      if (result[skill.name]) {
        result[skill.name] = {
          ...result[skill.name],
          sources: [...result[skill.name].sources, source]
        };
      }
      else {
        result[skill.name] = {...skill, sources: [source]};
      }

      return result;
    }, result);
  }, {});
};

// TODO: This isn't consistent with the other functions.
const calculateTeamStats = (team, playerContext, dataContext) =>
  team.members.map(member => ({
    member,
    stats: calculateMemberStats(member, team, playerContext, dataContext)
  }));

const formatStat = (stat) => {
  switch (stat.valueType) {
    case "percent":
      return new Intl.NumberFormat(navigator.language, {
        style: 'percent',
        maximumFractionDigits: 2
      }).format(stat.value);

    case "boolean":
      return stat.value.toString();

    case "multiplier":
      return `${stat.value}x`;

    default:
      return new Intl.NumberFormat(navigator.language).format(stat.value);
  }
};

export {
  isEmpty,
  isObject,
  entityId,
  pluralize,

  getEntityOfType,
  getPlayerEntityOfType,
  getSlotEntity,

  getMemberStats,

  formatStat
};