/* eslint-disable no-undef, no-unused-vars */
import h from '../hyperappjsx';
import CharacterEquipmentSelectItem from './CharacterEquipmentSelectItem';

export default ({position, teamCharacter, character, ...props}) =>
  <ul class="list-group list-group-flush">
    {character.equipmentSlots.map((slot, slotPosition) =>
      <CharacterEquipmentSelectItem
        type={slot.type}
        itemId={slot.itemId}
        {...props}
      />
    )}
  </ul>;