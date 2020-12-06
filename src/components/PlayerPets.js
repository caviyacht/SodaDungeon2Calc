import React from "react";
import { Col, Row } from "react-bootstrap";
import PlayerEntities from "./PlayerEntities";

export default () => {
  return (
    <div>
      <Row className="mb-4">
        <Col>
          <h1>Pets</h1>
          <p className="lead">
            Awww, look at them!
          </p>
        </Col>
      </Row>

      <Row xs={1} lg={2}>
        <Col>
          <PlayerEntities type="pet" />
        </Col>
      </Row>
    </div>
  );
};