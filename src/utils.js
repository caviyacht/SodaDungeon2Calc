// TODO: Figure out another way to configure this.
const getIconForSlot = (slot, dataContext) => {
  switch (slot.itemType) {
    case "pet":
    case "character":
      return dataContext.images.char_portraits["mystery"];

    case "resource_ore":
      return dataContext.images.icons["craft_resource"];

    default:
      return dataContext.images.icons["craft_" + slot.itemType];
  }
}

const loadTeam = (teamId, playerContext, dataContext) => ({
  id: teamId,
  ...playerContext.player.teams[teamId],
  members: loadTeamMembers((playerContext.player.teams[teamId] || {}).members, dataContext)
})

const loadTeamMembers = (members, dataContext) =>
  Object
    .entries(members || {})
    .map(([memberId, member]) => ({
      id: memberId,
      type: "member_slot",
      ...member,
      item: loadItem(member.itemId, dataContext),
      itemType: dataContext.slots[memberId].itemType,
      equipmentSlots: loadTeamMemberEquipmentSlots(member.equipmentSlots, dataContext)
    }));

const loadTeamMemberEquipmentSlots = (equipmentSlots, dataContext) =>
  Object
    .entries(equipmentSlots || {})
    .map(([equipmentSlotId, equipmentSlot]) => {
      const item = loadItem(equipmentSlot.itemId, dataContext);

      return {
        id: equipmentSlotId,
        type: "equipment_slot", // Do we need this?
        ...equipmentSlot,
        slots: loadTeamMemberEquipmentSlotSlots(equipmentSlot.slots, dataContext),
        item,
        itemType: dataContext.slots[equipmentSlotId].itemType
      };
    });

const loadItem = (itemId, dataContext) => {
  const item = { id: itemId, type: null, ...dataContext.items[itemId] };

  return {
    ...item,
    stats: loadItemStats(item, dataContext),
    image: item.type
      ? dataContext.images[getImageCollectionIdForItem(item)][item.id]
      : null
  };
}

const getImageCollectionIdForItem = (item) => {
  if (/y$/.test(item.type)) {
    return item.type.replace(/y$/, "ies");
  }

  return item.type + "s";
}

// TODO: This is the same as `loadTeamMemberEquipmentSlots`, make something common.
const loadTeamMemberEquipmentSlotSlots = (slots, dataContext) =>
  Object
    .entries(slots || {})
    .map(([slotId, slot]) => {
      const item = loadItem(slot.itemId, dataContext);

      return {
        id: slotId,
        type: "slot", // TODO: Do we really need this?
        ...slot,
        item,
        itemType: dataContext.slots[slotId].itemType
      };
    });

const loadItemStats = (item, dataContext) =>
  Object
    .entries((item || {}).stats || {})
    .map(([statId, stat]) => ({
      id: statId,
      ...dataContext.stats[statId],
      value: stat,
      ...stat // Handle { value: <>, scope: <> }
    }));

export {
  loadTeam,
  loadTeamMembers,
  loadTeamMemberEquipmentSlots,
  loadItem,
  loadItemStats,

  getIconForSlot
};