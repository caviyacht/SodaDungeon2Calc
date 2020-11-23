import React from "react";
import { Card, Nav, Tab } from "react-bootstrap";
import ItemStats from "./ItemStats";
import ItemNavItem from "./ItemNavItem";
import SlotItemTabPane from "./SlotItemTabPane";
import SlotItemInputGroup from "./SlotItemInputGroup";
import DataContext from "../contexts/DataContext";

export default ({team, slot, ...props}) => {
  return (
    <Card>
      <Tab.Container defaultActiveKey={slot.id}>
        <Card.Header className={["bg-dark"]}>
          <Nav justify variant="tabs">
            <ItemNavItem eventKey={slot.id} item={slot.item}/>

            <DataContext.Consumer>
              {context => getSlots(slot.item, context).map(equipmentSlot =>
                <ItemNavItem eventKey={`${slot.id}-${equipmentSlot.id}`} item={equipmentSlot.item}/>
              )}
            </DataContext.Consumer>

            <DataContext.Consumer>
              {context =>
                <ItemNavItem eventKey={`${slot.id}-allsight`} item={getUpgradeItem("allsight", context)}/>
              }
            </DataContext.Consumer>
          </Nav>
        </Card.Header>

        <Card.Body>
          <Tab.Content>
            <SlotItemTabPane eventKey={slot.id} slot={slot}/>

            <DataContext.Consumer>
              {context => getSlots(slot.item, context).map(equipmentSlot =>
                <SlotItemTabPane eventKey={`${slot.id}-${equipmentSlot.id}`} slot={equipmentSlot}>
                  {getSlots(equipmentSlot.item, context).map(resourceSlot =>
                    <SlotItemInputGroup slot={resourceSlot}/>
                  )}
                </SlotItemTabPane>
              )}
            </DataContext.Consumer>

            <Tab.Pane eventKey={`${slot.id}-allsight`}>
              <ItemStats item={slot.item}/>
            </Tab.Pane>
          </Tab.Content>
        </Card.Body>
      </Tab.Container>
    </Card>
  );
}

const getUpgradeItem = (itemId, context) =>
  ({
    itemId,
    ...context.upgrades[itemId],
    image: context.images.upgrades[itemId]
  });

const getSlots = (character, context) =>
  Object
    .keys(character.slots || {})
    .map(id => {
      const slot = character.slots[id];
      const slotType = context.types.slots[id];
      const item = context[slotType.collection][slot.itemId];

      return {
        id,
        item: {
          ...item,
          image: context.images[slotType.collection][slot.itemId],
          ...slot
        },
        ...slotType
      };
    });