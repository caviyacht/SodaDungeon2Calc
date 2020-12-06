import React, { useState } from "react";
import { Col, Nav, Row } from "react-bootstrap";
import PlayerEntities from "./PlayerEntities";

export default () => {
  const [activeKey, setActiveKey] = useState("favorites");

  const handleNavSelect = key => {
    setActiveKey(key);
  };

  return (
    <div>
      <Row className="mb-4">
        <Col>
          <h1>Relics</h1>
          <p className="lead">
            Take these, you'll need them.
          </p>
        </Col>
      </Row>

      <Row xs={1} lg={2}>
        <Col lg={2} className="mb-4">
          <Nav justify variant="pills" activeKey={activeKey} onSelect={handleNavSelect} className="flex-lg-column">
            <Nav.Link eventKey="favorites">Favorites</Nav.Link>
            <Nav.Link eventKey="1">Main</Nav.Link>
            <Nav.Link eventKey="2">Other</Nav.Link>
            <Nav.Link eventKey="3">Character</Nav.Link>
          </Nav>
        </Col>

        <Col lg={10}>
          <PlayerEntities 
            type="relic" 
            predicate={entity => 
              entity.groupId === activeKey 
              || entity.isFavorite === (activeKey === "favorites")
            } />
        </Col>
      </Row>
    </div>
  );
};
