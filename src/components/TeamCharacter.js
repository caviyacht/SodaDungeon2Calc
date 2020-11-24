import React from "react";
import { Card, Nav, Tab } from "react-bootstrap";
import ItemStats from "./ItemStats";
import ItemNavItem from "./ItemNavItem";
import SlotItemTabPane from "./SlotItemTabPane";
import SlotItemInputGroup from "./SlotItemInputGroup";
import { useDataContext } from "../contexts/DataContext";

export default ({team, slot, ...props}) => {
  const dataContext = useDataContext();

  return (
    <Card>
      <Tab.Container defaultActiveKey={slot.id}>
        <Card.Header className={["bg-dark"]}>
          <Nav justify variant="tabs">
            <ItemNavItem eventKey={slot.id} item={slot.item}/>

            {getSlots(slot.item, dataContext).map(equipmentSlot =>
              <ItemNavItem eventKey={`${slot.id}-${equipmentSlot.id}`} item={equipmentSlot.item}/>
            )}

            <ItemNavItem eventKey={`${slot.id}-allsight`} item={getUpgradeItem("allsight", dataContext)}/>
          </Nav>
        </Card.Header>

        <Card.Body>
          <Tab.Content>
            <SlotItemTabPane eventKey={slot.id} slot={slot}/>

            {getSlots(slot.item, dataContext).map(equipmentSlot =>
              <SlotItemTabPane eventKey={`${slot.id}-${equipmentSlot.id}`} slot={equipmentSlot}>
                {getSlots(equipmentSlot.item, dataContext).map(resourceSlot =>
                  <SlotItemInputGroup slot={resourceSlot}/>
                )}
              </SlotItemTabPane>
            )}

            <Tab.Pane eventKey={`${slot.id}-allsight`}>
              <ItemStats item={slot.item}/>
            </Tab.Pane>
          </Tab.Content>
        </Card.Body>
      </Tab.Container>
    </Card>
  );
}

const getUpgradeItem = (itemId, dataContext) =>
  ({
    itemId,
    ...dataContext.upgrades[itemId],
    image: dataContext.images.upgrades[itemId]
  });

const getSlots = (character, dataContext) =>
  Object
    .keys(character.slots || {})
    .map(id => {
      const slot = character.slots[id];
      const slotType = dataContext.types.slots[id];
      const item = dataContext[slotType.collection][slot.itemId];

      return {
        id,
        item: {
          ...item,
          image: dataContext.images[slotType.collection][slot.itemId],
          ...slot
        },
        ...slotType
      };
    });