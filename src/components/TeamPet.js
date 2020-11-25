import React from "react";
import { Card, Nav, Tab } from "react-bootstrap";
import ItemStats from "./ItemStats";
import ItemNavItem from "./ItemNavItem";
import { useDataContext } from "../contexts/DataContext";
import { usePlayerContext } from "../contexts/PlayerContext";
import { getSlotIcon, getUpgradeItem } from "../utils";
import SlotItemSelect from "./SlotItemSelect";

export default ({team, pet, ...props}) => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();

  const setPet = slot => (itemId) => playerContext.dispatch({
    type: "SET_PET",
    payload: { team, pet: { itemId }, slot }
  });

  return (
    <Card>
      <Tab.Container defaultActiveKey={pet.id}>
        <Card.Header className={["bg-dark"]}>
          <Nav justify variant="tabs">
            <ItemNavItem eventKey={pet.id} item={pet.item} defaultIcon={getSlotIcon(pet, dataContext)} />
            <ItemNavItem eventKey={`${pet.id}-allsight`} item={getUpgradeItem("allsight", dataContext)} />
          </Nav>
        </Card.Header>

        <Card.Body>
          <Tab.Content>
            <Tab.Pane eventKey={pet.id}>
              <SlotItemSelect slot={pet} setItem={setPet(pet)} />
            </Tab.Pane>

            <Tab.Pane eventKey={`${pet.id}-allsight`}>
              <ItemStats item={pet.item} />
            </Tab.Pane>
          </Tab.Content>
        </Card.Body>
      </Tab.Container>
    </Card>
  );
}