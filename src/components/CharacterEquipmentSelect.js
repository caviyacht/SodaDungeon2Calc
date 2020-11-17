/* eslint-disable no-undef, no-unused-vars */
import h from '../hyperappjsx';
import CharacterEquipmentSelectItem from './CharacterEquipmentSelectItem';

export default ({characterNumber, teamCharacter, character, ...props}) =>
  <ul class="list-group list-group-flush">
    {teamCharacter.equipmentSlots.map((equipmentSlot, slotNumber) =>
      <CharacterEquipmentSelectItem
        characterNumber={characterNumber}
        equipmentSlotId={slotNumber}
        equipmentSlot={equipmentSlot}
        characterEquipmentSlot={character.equipmentSlots[slotNumber]}
        {...props}
      />
    )}
  </ul>;