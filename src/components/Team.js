import React from "react";
import { Col, Row } from "react-bootstrap";
import { TeamContext } from "../contexts/TeamContext";
import TeamCharacter from "./TeamCharacter";

export default ({team, ...props}) => {
  return (
    <TeamContext.Provider value={team}>
      <Row xs={1} lg={2}>
        {getSlots(team).map(slot =>
          <Col className={["mb-4"]}>
            <TeamCharacter teamCharacter={slot}/>
          </Col>
        )}
      </Row>
    </TeamContext.Provider>
  );
}

const getSlots = (item) =>
  Object
    .keys(item.slots)
    .map(id => ({id, ...item.slots[id]}));