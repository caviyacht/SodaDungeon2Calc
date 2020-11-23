import React from "react";
import { InputGroup } from "react-bootstrap";
import DataContext from "../contexts/DataContext";
import SlotItemSelect from "./SlotItemSelect";

export default ({slot, ...props}) => {
  return (
    <InputGroup className={["mb-3"]}>
      <InputGroup.Prepend>
        <InputGroup.Text className={["bg-dark"]}>
          <DataContext.Consumer>
            {context =>
              <img src={getSlotIcon(slot, context)} style={{width: "20px", height: "20px"}} alt=""/>
            }
          </DataContext.Consumer>
        </InputGroup.Text>
      </InputGroup.Prepend>

      <SlotItemSelect slot={slot}/>
    </InputGroup>
  );
}

// TODO: Find a better way.
const getSlotIcon = (slot, context) => {
  const slotType = slot.id.split('_')[0];

  switch (slotType) {
    case "pet":
    case "character":
      return context.images.portraits["mystery"];

    default:
      return context.images.icons["craft_" + slotType];
  }
}