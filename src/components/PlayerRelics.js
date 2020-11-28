import React from "react";
import { Col,  FormControl, FormGroup, FormLabel, InputGroup, Nav, Row, Tab } from "react-bootstrap";
import FormGroupImage from "./FormGroupImage";
import { useDataContext } from "../contexts/DataContext";
import { usePlayerContext } from "../contexts/PlayerContext";

export default ({...props}) => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();

  const relics = getRelics(playerContext, dataContext);

  return (
    <Tab.Container defaultActiveKey="1">
      <Row xs={1} lg={2}>
        <Col lg={2} className="mb-4">
          <Nav justify variant="pills" className="flex-lg-column">
            <Nav.Link eventKey="1">Main</Nav.Link>
            <Nav.Link eventKey="2">Other</Nav.Link>
            <Nav.Link eventKey="3">Character</Nav.Link>
          </Nav>
        </Col>
        <Col lg={10}>
          <Tab.Content>
            <RelicTabPane relics={relics} groupId="1" />
            <RelicTabPane relics={relics} groupId="2" />
            <RelicTabPane relics={relics} groupId="3" />
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

const RelicTabPane = ({relics, groupId}) => {
  return (
    <Tab.Pane eventKey={groupId}>
      <Row xs={1} lg={2}>
        {relics.filter(relic => relic.item.groupId === groupId).map(relic =>
          <Col className="d-flex">
            <div className="mr-2" style={{flex: "0 0 70px"}}>
              <FormGroupImage src={relic.item.image}/>
            </div>

            <FormGroup className="w-100">
              <FormLabel htmlFor={`relic-${relic.id}`}>{relic.item.name}</FormLabel>
              <InputGroup>
                <FormControl id={`relic-${relic.id}`} type="number" min="1" value={relic.item.level} />

                {relic.item.type === "maxable" &&
                  <InputGroup.Append>
                    <InputGroup.Text className="bg-dark text-light">{"/" + relic.item.maxLevel}</InputGroup.Text>
                  </InputGroup.Append>
                }
              </InputGroup>
            </FormGroup>
          </Col>
        )}
      </Row>
    </Tab.Pane>
  );
}

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
          name: (dataContext.stats[id] || dataContext.items[id]).name, // TODO: Maybe put this somewhere else?
          image: dataContext.images.relics[id],
          ...playerRelic
        }
      };
    });