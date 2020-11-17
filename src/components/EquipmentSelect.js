/* eslint-disable no-undef, no-unused-vars */
import h from '../hyperappjsx';
import {withPayload} from '../utilities';

const setCharacterEquipment = (state, {characterNumber, slotId, itemId}) => ({
  ...state,
  teams: state.teams.map((team, teamNumber) => {
    if (teamNumber === 0) {
      return {
        ...team,
        characters: team.characters.map((character, teamCharacterNumber) => {
          if (teamCharacterNumber === characterNumber) {
            return {
              ...character,
              equipmentSlots: character.equipmentSlots.map((equipmentSlot, equipmentSlotNumber) => {
                if (equipmentSlotNumber === slotId) {
                  return {
                    ...equipmentSlot,
                    itemId
                  };
                }

                return equipmentSlot;
              })
            };
          }

          return character;
        })
      };
    }

    return team;
  })
});

export default ({type, equipmentItems, characterNumber, slotId, itemId, staticItemId, icon, ...props}) =>
  <div class="input-group input-group-sm">
    <div class="input-group-prepend">
      <span class="input-group-text">
        <div style={/gem|ore/i.test(type)
          ? {
              width: "20px",
              height: "20px",
              backgroundImage: `url(${icon})`,
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
      oninput={withPayload(e => [setCharacterEquipment, {characterNumber, slotId, itemId: e.target.value}])}
      disabled={!!staticItemId}>

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