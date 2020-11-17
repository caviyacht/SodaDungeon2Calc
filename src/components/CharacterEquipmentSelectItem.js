/* eslint-disable no-undef, no-unused-vars */
import h from '../hyperappjsx';
import EquipmentSelect from './EquipmentSelect';

export default ({characterNumber, equipmentSlotId, equipmentSlot, characterEquipmentSlot, ...props}) =>
  <li class="list-group-item py-1 px-0">
    <EquipmentSelect
      type={equipmentSlot.type}
      equipmentItems={props.items[props.equipmentSlotTypes[equipmentSlot.type].itemsPath]} 
      characterNumber={characterNumber}
      slotId={equipmentSlotId}
      itemId={equipmentSlot.itemId}
      staticItemId={characterEquipmentSlot.itemId}
      icon={props.ui.icons[equipmentSlot.type]} 
      {...props}/>

    {props.items[props.equipmentSlotTypes[equipmentSlot.type].itemsPath][equipmentSlot.itemId].hasGemSlot &&
      <EquipmentSelect
        type="gem"
        equipmentItems={props.items.gems} 
        characterNumber={characterNumber}
        slotId={equipmentSlotId}
        itemId={equipmentSlot.itemId}
        staticItemId={null}
        icon={props.ui.icons.gem} 
        {...props}/>}

    {!props.items[props.equipmentSlotTypes[equipmentSlot.type].itemsPath][equipmentSlot.itemId].isCharacterSpecific && equipmentSlot.type !== "accessory" &&
      <EquipmentSelect
        type="ore"
        equipmentItems={props.items.ores} 
        characterNumber={characterNumber}
        slotId={equipmentSlotId}
        itemId={equipmentSlot.itemId}
        staticItemId={null}
        icon={props.ui.icons.ore} 
        {...props}/>}
    
  </li>;