import React from "react";
import { InputGroup } from "react-bootstrap";
import { useDataContext } from "../contexts/DataContext";
import { getSlotIcon } from "../utils";
import SlotItemSelect from "./SlotItemSelect";

export default ({slot, setItem, ...props}) => {
  const dataContext = useDataContext();

  return (
    <InputGroup className={["mb-3"]}>
      <InputGroup.Prepend>
        <InputGroup.Text className={["bg-dark"]}>
          <img src={getSlotIcon(slot, dataContext)} style={{width: "20px", height: "20px"}} alt=""/>
        </InputGroup.Text>
      </InputGroup.Prepend>

      <SlotItemSelect slot={slot} setItem={setItem} />
    </InputGroup>
  );
};