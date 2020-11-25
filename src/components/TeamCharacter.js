import React from "react";
import { Card, Nav, Tab } from "react-bootstrap";
import ItemStats from "./ItemStats";
import ItemNavItem from "./ItemNavItem";
import SlotItemSelect from "./SlotItemSelect";
import { useDataContext } from "../contexts/DataContext";
import { usePlayerContext } from "../contexts/PlayerContext";
import { getSlotIcon, getUpgradeItem } from "../utils";

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

            {character.item.slots.map(equipmentSlot =>
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
            <Tab.Pane eventKey={`${character.id}`}>
              <SlotItemSelect slot={character} setItem={setCharacter(character)} />
            </Tab.Pane>

            {character.item.slots.map(equipmentSlot =>
              <Tab.Pane eventKey={`${character.id}-${equipmentSlot.id}`}>
                <SlotItemSelect slot={equipmentSlot} setItem={setEquipment(equipmentSlot)} />

                {equipmentSlot.item.slots.map(equipmentExtraSlot =>
                  <SlotItemSelect slot={equipmentExtraSlot} setItem={setEquipmentExtra(equipmentSlot, equipmentExtraSlot)} />
                )}
              </Tab.Pane>
            )}

            <Tab.Pane eventKey={`${character.id}-allsight`}>
              <ItemStats item={character.item} shouldAggregate={true} />
            </Tab.Pane>
          </Tab.Content>
        </Card.Body>
      </Tab.Container>
    </Card>
  );
}