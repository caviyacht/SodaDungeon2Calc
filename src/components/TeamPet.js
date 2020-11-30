import React from "react";
import { Card, Nav, Tab } from "react-bootstrap";
import ItemStats from "./ItemStats";
import ItemNavItem from "./ItemNavItem";
import { useDataContext } from "../contexts/DataContext";
import { usePlayerContext } from "../contexts/PlayerContext";
import { getIconForSlot, loadItem } from "../utils";
import SlotItemSelect from "./SlotItemSelect";

export default ({team, pet}) => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();

  const setMember = (itemId) => playerContext.dispatch({
    type: "SET_MEMBER",
    payload: { teamId: team.id, memberId: pet.id, itemId }
  });

  return (
    <Card>
      <Tab.Container defaultActiveKey={pet.id}>
        <Card.Header className="bg-dark text-light text-center py-1 border-bottom-0">
          Pet
        </Card.Header>
        <Card.Header className="bg-dark pt-0">
          <Nav justify variant="tabs">
            <ItemNavItem eventKey={pet.id} item={pet.item} defaultIcon={getIconForSlot(pet, dataContext)} />
            <ItemNavItem eventKey={`${pet.id}-allsight`} item={loadItem("allsight", dataContext)} />
          </Nav>
        </Card.Header>

        <Card.Body>
          <Tab.Content>
            <Tab.Pane eventKey={pet.id}>
              <SlotItemSelect slot={pet} setItem={setMember} />
            </Tab.Pane>

            <Tab.Pane eventKey={`${pet.id}-allsight`} className="m-n3">
              <ItemStats item={pet.item} />
            </Tab.Pane>
          </Tab.Content>
        </Card.Body>
      </Tab.Container>
    </Card>
  );
}