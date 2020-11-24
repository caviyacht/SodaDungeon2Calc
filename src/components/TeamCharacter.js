import React from "react";
import { Card, Nav, Tab } from "react-bootstrap";
import ItemStats from "./ItemStats";
import ItemNavItem from "./ItemNavItem";
import SlotItemTabPane from "./SlotItemTabPane";
import SlotItemInputGroup from "./SlotItemInputGroup";
import { useDataContext } from "../contexts/DataContext";
import { usePlayerContext } from "../contexts/PlayerContext";
import { getSlotIcon } from "../utils";

export default ({team, character, ...props}) => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();

  const setCharacter = slot => (itemId) => playerContext.dispatch({
    type: "SET_CHARACTER",
    payload: { team, character: { itemId }, slot }
  });

  const setEquipment = slot => (itemId) => playerContext.dispatch({
    type: "SET_CHARACTER_EQUIPMENT",
    payload: { team, character, equipment: { itemId }, slot }
  });

  const setEquipmentExtra = (equipment, slot) => (itemId) => playerContext.dispatch({
    type: "SET_CHARACTER_EQUIPMENT_EXTRA",
    payload: { team, character, equipment, extra: { itemId }, slot }
  });

  return (
    <Card>
      <Tab.Container defaultActiveKey={character.id}>
        <Card.Header className={["bg-dark"]}>
          <Nav justify variant="tabs">
            <ItemNavItem eventKey={character.id} item={character.item} defaultIcon={getSlotIcon(character, dataContext)} />

            {getSlots(character.item, dataContext).map(equipmentSlot =>
              <ItemNavItem
                eventKey={`${character.id}-${equipmentSlot.id}`} 
                item={equipmentSlot.item}
                defaultIcon={getSlotIcon(equipmentSlot, dataContext)} />
            )}

            <ItemNavItem eventKey={`${character.id}-allsight`} item={getUpgradeItem("allsight", dataContext)}/>
          </Nav>
        </Card.Header>

        <Card.Body>
          <Tab.Content>
            <SlotItemTabPane eventKey={character.id} slot={character} setItem={setCharacter(character)} />

            {getSlots(character.item, dataContext).map(equipmentSlot =>
              <SlotItemTabPane 
                eventKey={`${character.id}-${equipmentSlot.id}`} 
                slot={equipmentSlot} 
                setItem={setEquipment(equipmentSlot)}>

                {getSlots(equipmentSlot.item, dataContext).map(equipmentExtraSlot =>
                  <SlotItemInputGroup slot={equipmentExtraSlot} setItem={setEquipmentExtra(equipmentSlot, equipmentExtraSlot)} />
                )}
              </SlotItemTabPane>
            )}

            <Tab.Pane eventKey={`${character.id}-allsight`}>
              <ItemStats item={character.item}/>
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