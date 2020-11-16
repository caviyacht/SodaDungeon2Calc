/* eslint-disable no-undef, no-unused-vars */
import h from '../hyperappjsx';
import CharacterEquipmentSelectItem from './CharacterEquipmentSelectItem';

export default ({characterId, character, ...props}) =>
  <ul class="list-group list-group-flush">
    {character.equipmentSlots.map(slot =>
      <CharacterEquipmentSelectItem
        type={slot.type}
        itemId={slot.itemId}
        {...props}
      />
    )}
  </ul>;