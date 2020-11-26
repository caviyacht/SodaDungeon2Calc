import React from "react";
import { Card, Col, FormControl, InputGroup, Nav, Row, Tab } from "react-bootstrap";
import { useDataContext } from "../contexts/DataContext";
import { usePlayerContext } from "../contexts/PlayerContext";
import ItemNavItem from "./ItemNavItem";

export default ({...props}) => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();

  return (
    <Row xs={1} lg={2}>
      <Col className={["mb-4"]}>
        <PlayerRelicCollection relics={getRelics(playerContext, dataContext)}/>
      </Col>
    </Row>
  );
}

// TEMP
const PlayerRelicCollection = ({relics}) => {
  const dataContext = useDataContext();

  return (
    <Card>
      <Tab.Container defaultActiveKey="1">
        <Card.Header className="bg-dark">
          <Nav justify variant="tabs">
            <ItemNavItem eventKey="1" item={getRelicTabAsItem("stat", dataContext)} />
            <ItemNavItem eventKey="2" item={getRelicTabAsItem("stat", dataContext)} />
            <ItemNavItem eventKey="3" item={getRelicTabAsItem("class", dataContext)} />
          </Nav>
        </Card.Header>

        <Card.Body>
          <Tab.Content>
            <RelicTabPane relics={relics} groupId="1" />
            <RelicTabPane relics={relics} groupId="2" />
            <RelicTabPane relics={relics} groupId="3" />
          </Tab.Content>
        </Card.Body>
      </Tab.Container>
    </Card>
  );
}

const RelicTabPane = ({relics, groupId, ...props}) => {
  return (
    <Tab.Pane eventKey={groupId}>
      {relics.filter(relic => relic.item.groupId === groupId).map(relic =>
        <InputGroup  className="mb-3">
          <InputGroup.Prepend>
            <span className="mr-2" style={{
              width: "38px",//"calc(1.5em + 1rem + 8px)",
              height: "38px",//"calc(1.5em + 1rem + 8px)",
              backgroundImage: `url(${relic.item.image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "50% 50%"
            }}/>
          </InputGroup.Prepend>
          
          <FormControl type="number" min="1" value={relic.item.level} />

          {relic.item.type === "maxable" &&
            <InputGroup.Append>
              <InputGroup.Text className="bg-dark text-light">{"/" + relic.item.maxLevel}</InputGroup.Text>
            </InputGroup.Append>
          }
        </InputGroup>
      )}
    </Tab.Pane>
  );
}

const getRelicTabAsItem = (itemId, dataContext) =>
  ({
    itemId,
    image: dataContext.images.relic_tabs[itemId]
  });

const getRelics = (playerContext, dataContext) =>
  Object
    .keys(dataContext.relics)
    .map(id => {
      const item = dataContext.relics[id];
      const playerRelic = playerContext.player.relics[id] || {};

      return {
        id,
        item: {
          ...item,
          image: dataContext.images.relics[id],
          ...playerRelic
        }
      };
    });