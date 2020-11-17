/* eslint-disable no-undef, no-unused-vars */
import h from '../hyperappjsx';
import CharacterEquipmentSelectItem from './CharacterEquipmentSelectItem';

export default ({position, teamCharacter, character, ...props}) =>
  <ul class="list-group list-group-flush">
    {character.equipmentSlots.map((equipmentSlot, index) =>
      <CharacterEquipmentSelectItem
        equipmentSlotId={index}
        equipmentSlot={equipmentSlot}
        {...props}
      />
    )}
  </ul>;