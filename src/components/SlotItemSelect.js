import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { useDataContext } from "../contexts/DataContext";
import { getSlotIcon } from "../utils";

export default ({slot, setItem, ...props}) => {
  const dataContext = useDataContext();

  return (
    <InputGroup className={["mb-3"]}>
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

      <FormControl as="select" onChange={e => setItem(e.target.value)}>
        <option value="">{`<Empty>`}</option>

        {getItemsForSlot(slot, dataContext).map(item =>
          <option value={item.id} selected={item.id === slot.item.itemId}>{item.name}</option>
        )}
      </FormControl>
    </InputGroup>
  );
}

const getItemsForSlot = (slot, dataContext) =>
  Object
    .keys(dataContext[slot.collection])
    .map(id => ({
      id,
      ...dataContext[slot.collection][id]
    }));