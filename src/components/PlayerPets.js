import React from "react";
import { Col, Row } from "react-bootstrap";
import PlayerEntities from "./PlayerEntities";

export default () => {
  return (
    <div>
      <Row xs={1} lg={2}>
        <Col>
          <PlayerEntities type="pet" />
        </Col>
      </Row>
    </div>
  );
};