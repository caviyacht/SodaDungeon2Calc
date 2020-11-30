import React from "react";
import { Card, Nav, Tab } from "react-bootstrap";
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
        <Card.Header className="bg-dark text-light text-center py-1 border-bottom-0">
          Position {character.id.split('_').pop()}
        </Card.Header>
        <Card.Header className="bg-dark pt-0">
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
          </Nav>
        </Card.Header>

        <Card.Body>
          <Tab.Content>
            <Tab.Pane eventKey={`${character.id}`}>
              <SlotItemSelect slot={character} setItem={setMember} />
            </Tab.Pane>

            {character.equipmentSlots.map((equipmentSlot, index) =>
              <Tab.Pane eventKey={`${character.id}-${equipmentSlot.id}`}>
                <SlotItemSelect 
                  slot={equipmentSlot} 
                  setItem={setMemberEquipmentSlot(equipmentSlot.id)} />

                {equipmentSlot.slots.map(slot =>
                  <SlotItemSelect 
                    slot={slot} 
                    setItem={setMemberEquipmentSlotSlot(equipmentSlot.id, slot.id)}
                    className="mt-4" />
                )}
              </Tab.Pane>
            )}
          </Tab.Content>
        </Card.Body>

        <Card.Footer className="p-0">
          <TeamMemberStats team={team} member={character} />
        </Card.Footer>
      </Tab.Container>
    </Card>
  );
}
