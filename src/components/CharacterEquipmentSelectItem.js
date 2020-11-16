/* eslint-disable no-undef, no-unused-vars */
import h from '../hyperappjsx';
import EquipmentSelect from './EquipmentSelect';

export default ({type, itemId, ...props}) =>
  <li class="list-group-item py-0 px-0">
    <EquipmentSelect
      equipmentItems={props.items[type.replace(/(y)$/, "ie") + "s"]} 
      itemId={itemId}
      icon={props.ui.icons[type]} 
      {...props}
    />
  </li>;