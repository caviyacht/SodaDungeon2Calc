import { entitySelector } from "./selectors/entitySelector";
import { playerEntitySelector } from "./selectors/playerEntitySelector";

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

  // TODO: Possibly find a new way to convey this.
  const stats = aggregateStats(valueEntity, slots);
  const skills = aggregateSkills(valueEntity, slots);

  return {
    ...slotEntity,
    value: valueEntity,
    stats,
    skills,
    slots
  };
};





const loadRelics = (playerContext, dataContext) =>
  Object
    .keys(dataContext.relics)
    .map(relicId => loadRelic(relicId, dataContext, playerContext));

const loadRelic = (relicId, dataContext, playerContext) => {
  const relic = { id: relicId, type: null, ...dataContext.relics[relicId] };
  const playerRelic = playerContext.player.relics[relic.id] || { level: 0 };

  return {
    ...relic,
    name: (dataContext.stats[relicId] || dataContext.items[relicId]).name, // TODO: Maybe put this somewhere else?
    stats: loadRelicStats(relic, playerRelic, dataContext),
    image: dataContext.images.relics[relicId],
    ...playerRelic
  };
}

const loadRelicStats = (relic, playerRelic, dataContext) =>
  Object
    .entries((relic || {}).stats || {})
    .map(([statId, stat]) => {
      let { value, scope } = stat;

      if (value === undefined) {
        value = stat;
      }

      return {
        id: statId,
        ...dataContext.stats[statId],
        value: value * playerRelic.level,
        scope: scope || dataContext.stats[statId].scope
      };
    });

const flattenMemberSkills = (member) => {
  return [].concat(...flattenMember(member).map(slot => slot.item.skills));
}

const flattenMember = (member) => {
  return [].concat(
    member,
    ...member.equipmentSlots,
    ...(member.equipmentSlots || []).map(equipmentSlot => equipmentSlot.slots)
  );
}

const getMemberStatsSources = (member, team, playerContext, dataContext) => {
  if (member.itemType === "pet") {
    return [].concat(...flattenMember(member));
  }

  return [].concat(
    ...flattenMember(member),
    ...team.members.filter(member => member.itemType === "pet").map(pet => flattenMember(pet)),
    ...loadRelics(playerContext, dataContext).filter(relic => {
      if (relic.level < 1) {
        return false;
      }
      
      if (relic.scope === "character" && relic.id === member.item.id) {
        return true;
      }

      return relic.scope !== "character" && relic.scope !== "team";
    }),
    loadPlayerItem("kitchen", playerContext, dataContext)
  );
}



const aggregateStats = (entity, slots) => {
  const sources = [entity, ...Object.entries(slots).map(([_, slot]) => slot)];

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


const aggregateSkills = (entity, slots) => {
  const sources = [entity, ...Object.entries(slots).map(([_, slot]) => slot)];

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


// TODO: Old.
const calculateMemberStats = (member, team, playerContext, dataContext) => {
  const sources = getMemberStatsSources(member, team, playerContext, dataContext);

  const stats = sources.reduce((result, source) =>
    (source.stats || source.item.stats || []).reduce((_, stat) => {
      if (result[stat.id] && stat.valueType !== "boolean") {
        result[stat.id] = {
          ...result[stat.id],
          value: result[stat.id].value + stat.value,
          sources: [...result[stat.id].sources, source]
        };
      }
      else {
        result[stat.id] = {...stat, sources: [source]};
      }

      return result;
    }, result), {});

  if (member.itemType === "pet") {
    return Object.entries(stats).map(([id, value]) => ({id, ...value}));
  }

  return [].concat(
    {
      ...loadStat("hp_total", dataContext),
      value: Math.floor(stats["hp"].value * (1 + stats["hp_boost"].value) * (1 + stats["hp_boost_kitchen"].value))
    },
    {
      ...loadStat("atk_total", dataContext),
      value: Math.floor(stats["atk"].value * (1 + stats["atk_boost"].value))
    },
    ...Object.entries(stats).map(([id, value]) => ({id, ...value }))
  );
}

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

const getItemsForSlot = (slot, dataContext) =>
  Object
    .entries(dataContext.items)
    .filter(([id, item]) => item.type === slot.itemType)
    .map(([id, item]) => ({
      id,
      ...item
    }));

export {
  isEmpty,
  isObject,
  entityId,
  pluralize,

  getEntityOfType,
  getPlayerEntityOfType,
  getSlotEntity,

  loadRelics,

  formatStat,
  flattenMember,
  flattenMemberSkills,
  calculateMemberStats,
  calculateTeamStats,

  getItemsForSlot
};