// TODO: Find a better way.
const getSlotIcon = (slot, dataContext) => {
  const baseSlotType = slot.id.split('_')[0];

  switch (baseSlotType) {
    case "pet":
    case "character":
      return dataContext.images.char_portraits["mystery"];

    default:
      return dataContext.images.icons["craft_" + baseSlotType];
  }
}

const getUpgradeItem = (itemId, dataContext) =>
  ({
    itemId,
    ...dataContext.upgrades[itemId],
    image: dataContext.images.upgrades[itemId]
  });

export { getSlotIcon, getUpgradeItem };