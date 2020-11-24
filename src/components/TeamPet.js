import React from "react";
import { Card, Nav, Tab } from "react-bootstrap";
import ItemStats from "./ItemStats";
import ItemNavItem from "./ItemNavItem";
import { useDataContext } from "../contexts/DataContext";
import SlotItemTabPane from "./SlotItemTabPane";

export default ({team, slot, ...props}) => {
  const dataContext = useDataContext();

  return (
    <Card>
      <Tab.Container defaultActiveKey={slot.id}>
        <Card.Header className={["bg-dark"]}>
          <Nav justify variant="tabs">
            <ItemNavItem eventKey={slot.id} item={slot.item}/>
            <ItemNavItem eventKey={`${slot.id}-allsight`} item={getUpgradeItem("allsight", dataContext)}/>
          </Nav>
        </Card.Header>

        <Card.Body>
          <Tab.Content>
            <SlotItemTabPane eventKey={slot.id} slot={slot}/>

            <Tab.Pane eventKey={`${slot.id}-allsight`}>
              <ItemStats id={`${slot.id}-allsight`} item={slot.item}/>
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