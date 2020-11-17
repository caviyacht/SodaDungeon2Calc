/* eslint-disable no-undef, no-unused-vars */
import h from '../hyperappjsx';

export default ({equipmentItems, slotId, itemId, icon, ...props}) =>
  <div class="input-group input-group-sm">
    <div class="input-group-prepend">
      <span class="input-group-text">
        <div style={{
          width: "20px",
          height: "20px",
          backgroundColor: "black",
            "-webkit-mask-box-image": `url(${icon})`
        }}/>
      </span>
    </div>

    <select 
      class="form-control form-control-sm" 
      disabled={!!itemId}>

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