/* eslint-disable no-undef, no-unused-vars */
import h from '../hyperappjsx';
import EquipmentSelect from './EquipmentSelect';

export default ({characterNumber, equipmentSlotId, equipmentSlot, characterEquipmentSlot, ...props}) =>
  <li class="list-group-item py-0 px-0">
    <EquipmentSelect
      equipmentItems={props.items[props.equipmentSlotTypes[equipmentSlot.type].itemsPath]} 
      characterNumber={characterNumber}
      slotId={equipmentSlotId}
      itemId={equipmentSlot.itemId}
      staticItemId={characterEquipmentSlot.itemId}
      icon={props.ui.icons[equipmentSlot.type]} 
      {...props}
    />
  </li>;