/* eslint-disable no-undef, no-unused-vars */
import h from '../hyperappjsx';
import EquipmentSelect from './EquipmentSelect';

const getEquipmentItems = (type, props) => 
  type === "ore"
    ? props.items.ores
    : type === "gem"
      ? props.items.gems
      : props.items[props.equipmentSlotTypes[type].itemsPath];

const getEquipment = ({type, itemId}, props) => props.items[props.equipmentSlotTypes[type].itemsPath][itemId];
const isAccessorySlot = ({type}) => type === "accessory";

const EquipmentSelect2 = ({...props}) =>
  <div class="input-group input-group-sm">
    <div class="input-group-prepend">
      <span class="input-group-text">
        <div style={/gem|ore/i.test(type)
          ? {
              width: "20px",
              height: "20px",
              backgroundImage: `url(${icon})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain"
            }
          : {
              width: "20px",
              height: "20px",
              backgroundColor: "black",
              "-webkit-mask-box-image": `url(${icon})`
            }
        }/>
      </span>
    </div>

    <select 
      class="form-control form-control-sm" 
      disabled={!isEnabled || (!isEnabled && !!staticItemId)}>

      <option value="">Empty</option>
      
      {Object.keys(equipmentItems).map(equipmentId => 
      {
        let equipment = equipmentItems[equipmentId];
        let isSelected = equipmentId === itemId;

        return <option value={equipmentId} selected={isSelected} disabled={!!equipment.isCharacterSpecific}>
          {equipment.name}
        </option>;
      })}
    </select>
  </div>;

export default ({characterNumber, equipmentSlotId, equipmentSlot, characterEquipmentSlot, ...props}) =>
  <li class="list-group-item py-1 px-0">
    <EquipmentSelect
      type={equipmentSlot.type}
      equipmentItems={getEquipmentItems(equipmentSlot.type, props)} 
      characterNumber={characterNumber}
      slotId={equipmentSlotId}
      itemId={equipmentSlot.itemId}
      staticItemId={characterEquipmentSlot.itemId}
      icon={props.ui.icons[equipmentSlot.type]} 
      itemImage={props.images.items[equipmentSlot.itemId]}
      isEnabled={!getEquipment(equipmentSlot, props).isCharacterSpecific}
      {...props}/>

    <div class="form-row mt-1">
      <div class="col">
        <EquipmentSelect
          type="ore"
          equipmentItems={getEquipmentItems("ore", props)} 
          characterNumber={characterNumber}
          slotId={equipmentSlotId}
          itemId={equipmentSlot.itemId}
          staticItemId={null}
          icon={props.ui.icons.ore} 
          itemImage={props.images.items[equipmentSlot.itemId]}
          isEnabled={!getEquipment(equipmentSlot, props).isCharacterSpecific && !isAccessorySlot(equipmentSlot)}
          {...props}/>
      </div>

      <div class="col">
        <EquipmentSelect
          type="gem"
          equipmentItems={getEquipmentItems("gem", props)} 
          characterNumber={characterNumber}
          slotId={equipmentSlotId}
          itemId={equipmentSlot.itemId}
          staticItemId={null}
          icon={props.ui.icons.gem} 
          itemImage={props.images.items[equipmentSlot.itemId]}
          isEnabled={getEquipment(equipmentSlot, props).hasGemSlot}
          {...props}/>
      </div>
    </div>
  </li>;