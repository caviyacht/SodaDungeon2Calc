// TODO: Find a better way.
const getSlotIcon = (slot, dataContext) => {
  const baseSlotType = slot.id.split('_')[0];

  switch (baseSlotType) {
    case "pet":
    case "character":
      return dataContext.images.portraits["mystery"];

    default:
      return dataContext.images.icons["craft_" + baseSlotType];
  }
}

export { getSlotIcon };