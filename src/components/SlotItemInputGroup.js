import React from "react";
import { InputGroup } from "react-bootstrap";
import { useDataContext } from "../contexts/DataContext";
import SlotItemSelect from "./SlotItemSelect";

export default ({slot, ...props}) => {
  const dataContext = useDataContext();

  return (
    <InputGroup className={["mb-3"]}>
      <InputGroup.Prepend>
        <InputGroup.Text className={["bg-dark"]}>
          <img src={getSlotIcon(slot, dataContext)} style={{width: "20px", height: "20px"}} alt=""/>
        </InputGroup.Text>
      </InputGroup.Prepend>

      <SlotItemSelect slot={slot}/>
    </InputGroup>
  );
}

// TODO: Find a better way.
const getSlotIcon = (slot, dataContext) => {
  const slotType = slot.id.split('_')[0];

  switch (slotType) {
    case "pet":
    case "character":
      return dataContext.images.portraits["mystery"];

    default:
      return dataContext.images.icons["craft_" + slotType];
  }
}