import React from "react";
import { Col,  FormControl, FormGroup, FormLabel, InputGroup, Nav, Row, Tab } from "react-bootstrap";
import FormGroupImage from "./FormGroupImage";
import { useDataContext } from "../contexts/NewDataContext";
import { usePlayerContext } from "../contexts/NewPlayerContext";
import { loadRelics } from "../utils";

export default ({...props}) => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();

  const relics = loadRelics(playerContext, dataContext);

  const setRelicLevel = (relicId, level) => playerContext.dispatch({
    type: "SET_RELIC_LEVEL",
    payload: { relicId, level }
  })

  return (
    <>
      <Row className="mb-4">
        <Col>
          <h1>Relics</h1>
          <p className="lead">
            Take these, you'll need them.
          </p>
        </Col>
      </Row>

      <Tab.Container defaultActiveKey="favorites">
        <Row xs={1} lg={2}>
          <Col lg={2} className="mb-4">
            <Nav justify variant="pills" className="flex-lg-column">
              <Nav.Link eventKey="favorites">Favorites</Nav.Link>
              <Nav.Link eventKey="1">Main</Nav.Link>
              <Nav.Link eventKey="2">Other</Nav.Link>
              <Nav.Link eventKey="3">Character</Nav.Link>
            </Nav>
          </Col>
          <Col lg={10}>
            <Tab.Content>
              <RelicTabPane relics={relics.filter(relic => relic.isFavorite)} eventKey="favorites" setRelicLevel={setRelicLevel} />
              <RelicTabPane relics={relics.filter(relic => relic.groupId === "1")} eventKey="1" setRelicLevel={setRelicLevel} />
              <RelicTabPane relics={relics.filter(relic => relic.groupId === "2")} eventKey="2" setRelicLevel={setRelicLevel} />
              <RelicTabPane relics={relics.filter(relic => relic.groupId === "3")} eventKey="3" setRelicLevel={setRelicLevel} />
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}

const RelicTabPane = ({relics, eventKey, setRelicLevel}) => {
  return (
    <Tab.Pane eventKey={eventKey}>
      <Row xs={1} lg={2}>
        {relics.map(relic =>
          <Col className="d-flex">
            <div className="mr-2" style={{flex: "0 0 70px"}}>
              <FormGroupImage src={relic.image}/>
            </div>

            <FormGroup className="w-100">
              <FormLabel htmlFor={`relic-${relic.id}`}>{relic.name}</FormLabel>
              <InputGroup>
                <FormControl id={`relic-${relic.id}`} type="number" min="1" value={relic.level} onChange={e => setRelicLevel(relic.id, e.target.value)}/>

                {relic.hasOwnProperty("maxLevel") &&
                  <InputGroup.Append>
                    <InputGroup.Text className="bg-dark text-light">{"/" + relic.maxLevel}</InputGroup.Text>
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
