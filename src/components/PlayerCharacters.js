import React from "react";
import { Col, Row } from "react-bootstrap";
import PlayerEntities from "./PlayerEntities";

export default () => {
  return (
    <div>
      <Row className="mb-4">
        <Col>
          <h1>Characters</h1>
          <p className="lead">
            You're not here to make friends.
          </p>
        </Col>
      </Row>

      <Row xs={1} lg={2}>
        <Col>
          <PlayerEntities type="character" />
        </Col>
      </Row>
    </div>
  );
};