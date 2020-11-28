import React from "react";
import { Card, Nav, Tab } from "react-bootstrap";
import ItemStats from "./ItemStats";
import ItemNavItem from "./ItemNavItem";
import SlotItemSelect from "./SlotItemSelect";
import { useDataContext } from "../contexts/DataContext";
import { usePlayerContext } from "../contexts/PlayerContext";
import { getIconForSlot, loadItem } from "../utils";
import TeamMemberStats from "./TeamMemberStats";

export default ({team, character}) => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();

  const setMember = (itemId) => playerContext.dispatch({
    type: "SET_MEMBER",
    payload: { teamId: team.id, memberId: character.id, itemId }
  });

  const setMemberEquipmentSlot = (equipmentId) => (itemId) => playerContext.dispatch({
    type: "SET_MEMBER_EQUIPMENT_SLOT",
    payload: { teamId: team.id, memberId: character.id, equipmentId, itemId }
  });

  const setMemberEquipmentSlotSlot = (equipmentId, slotId) => (itemId) => playerContext.dispatch({
    type: "SET_MEMBER_EQUIPMENT_SLOT_SLOT",
    payload: { teamId: team.id, memberId: character.id, equipmentId, slotId, itemId }
  });

  return (
    <Card>
      <Tab.Container defaultActiveKey={character.id}>
        <Card.Header className="bg-dark">
          <Nav justify variant="tabs">
            <ItemNavItem 
              eventKey={character.id} 
              item={character.item} 
              defaultIcon={getIconForSlot(character, dataContext)} />

            {character.equipmentSlots.map(equipmentSlot =>
              <ItemNavItem
                eventKey={`${character.id}-${equipmentSlot.id}`} 
                item={equipmentSlot.item}
                defaultIcon={getIconForSlot(equipmentSlot, dataContext)} />
            )}

            <ItemNavItem 
              eventKey={`${character.id}-allsight`} 
              item={loadItem("allsight", dataContext)} />
          </Nav>
        </Card.Header>

        <Card.Body>
          <Tab.Content>
            <Tab.Pane eventKey={`${character.id}`}>
              <SlotItemSelect slot={character} setItem={setMember} />
            </Tab.Pane>

            {character.equipmentSlots.map(equipmentSlot =>
              <Tab.Pane eventKey={`${character.id}-${equipmentSlot.id}`}>
                <SlotItemSelect slot={equipmentSlot} setItem={setMemberEquipmentSlot(equipmentSlot.id)} />

                {equipmentSlot.slots.map(slot =>
                  <SlotItemSelect 
                    slot={slot} 
                    setItem={setMemberEquipmentSlotSlot(equipmentSlot.id, slot.id)} />
                )}
              </Tab.Pane>
            )}

            <Tab.Pane eventKey={`${character.id}-allsight`}>
              <TeamMemberStats team={team} member={character} />
            </Tab.Pane>
          </Tab.Content>
        </Card.Body>
      </Tab.Container>
    </Card>
  );
}
