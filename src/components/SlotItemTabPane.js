import React from "react";
import { Tab } from "react-bootstrap";
import SlotItemInputGroup from "./SlotItemInputGroup";
import ItemStats from "./ItemStats";

export default ({eventKey, slot, setItem, ...props}) => {
  return (
    <Tab.Pane eventKey={eventKey}>
      <SlotItemInputGroup slot={slot} setItem={setItem} />

      {/* TODO: This seems wrong */}
      {props.children}

      <ItemStats id="default" item={slot.item}/>
    </Tab.Pane>
  );
}