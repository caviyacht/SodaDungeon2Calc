const isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }

  return true;
}

const isObject = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

const withContext = (context, func) => func(context);

const filter = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(predicate));

const map = (obj, selector) => Object.entries(obj).map(([key, value]) => selector([key, value]));

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
  withContext,
  filter,
  map,

  loadTeam,
  loadTeamMembers,
  loadTeamMemberEquipmentSlots,
  loadItem,
  loadItemStats,
  loadRelics,
  loadPlayerItem,
  loadStat,

  formatStat,
  flattenMember,
  flattenMemberSkills,
  calculateMemberStats,
  calculateTeamStats,

  getIconForSlot,
  getItemsForSlot
};