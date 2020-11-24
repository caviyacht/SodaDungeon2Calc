import React from "react";
import { InputGroup } from "react-bootstrap";
import { useDataContext } from "../contexts/DataContext";
import { getSlotIcon } from "../utils";
import SlotItemSelect from "./SlotItemSelect";

export default ({slot, setItem, ...props}) => {
  const dataContext = useDataContext();

  return (
    <InputGroup  className={["mb-3"]}>
      <InputGroup.Prepend>
        <span className="mr-2" style={{
          width: "38px",//"calc(1.5em + 1rem + 8px)",
          height: "38px",//"calc(1.5em + 1rem + 8px)",
          backgroundImage: `url(${getSlotIcon(slot, dataContext)})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%"
        }}/>
      </InputGroup.Prepend>

      <SlotItemSelect slot={slot} setItem={setItem} />
    </InputGroup>
  );
};