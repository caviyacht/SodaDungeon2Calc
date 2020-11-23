import React from "react";
import { FormControl } from "react-bootstrap";
import DataContext from "../contexts/DataContext";

export default ({slot, ...props}) => {
  return (
    <FormControl as="select">
      <option value="">{`<Empty>`}</option>

      <DataContext.Consumer>
        {context =>
          getItemsForSlot(slot, context).map(item =>
            <option value={item.id} selected={item.id === slot.item.itemId}>{item.name}</option>
          )
        }
      </DataContext.Consumer>
    </FormControl>
  );
}

const getItemsForSlot = (slot, context) =>
  Object
    .keys(context[slot.collection])
    .map(id => ({
      id,
      ...context[slot.collection][id]
    }));