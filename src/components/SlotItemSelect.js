import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { useDataContext } from "../contexts/DataContext";
import { getIconForSlot } from "../utils";

export default ({slot, setItem, ...props}) => {
  const dataContext = useDataContext();

  return (
    <InputGroup className={props.className}>
      <InputGroup.Prepend>
        <span className="mr-2" style={{
          width: "38px",//"calc(1.5em + 1rem + 8px)",
          height: "38px",//"calc(1.5em + 1rem + 8px)",
          backgroundImage: `url(${getIconForSlot(slot, dataContext)})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%"
        }}/>
      </InputGroup.Prepend>

      <FormControl as="select" onChange={e => setItem(e.target.value)} disabled={slot.item.isLocked}>
        <option value="">{`<Empty>`}</option>

        {getItemsForSlot(slot, dataContext).map(item =>
          <option value={item.id} selected={item.id === slot.item.id} disabled={item.isLocked}>{item.name}</option>
        )}
      </FormControl>
    </InputGroup>
  );
}

const getItemsForSlot = (slot, dataContext) =>
  Object
    .entries(dataContext.items)
    .filter(([itemId, item]) => item.type === slot.itemType)
    .map(([itemId, item]) => ({
      id: itemId,
      ...item
    }));