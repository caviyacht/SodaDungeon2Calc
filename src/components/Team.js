import React from "react";
import { Col, Row } from "react-bootstrap";
import TeamCharacter from "./TeamCharacter";

export default (props) => {
  return (
    <Row xs={1} lg={2}>
      {getSlots(props.team).map(slot =>
        <Col className={["mb-4"]}>
          <TeamCharacter slot={slot} data={props.data}/>
        </Col>
      )}
    </Row>
  );
}

const getSlots = (item) =>
  Object
    .keys(item.slots)
    .map(id => ({id, ...item.slots[id]}));