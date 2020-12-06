import React, { useState } from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import Player from "./components/Player";
import PlayerTeams from "./components/PlayerTeams";
import PlayerRelics from "./components/PlayerRelics";
import PlayerCharacters from "./components/PlayerCharacters";
import PlayerPets from "./components/PlayerPets";
import AppNavigation from "./components/AppNavigation";

export default () => {
  return (
    <>
      <BreakpointViewer/>
      <AppContent/>
    </>
  );
}

const AppContent = () => {
  const [activeKey, setActiveKey] = useState("home");

  return (
    <>
      <Tab.Container activeKey={activeKey}>
        <AppNavigation onSelect={setActiveKey} />

        <Container className="pt-4">
          <Tab.Content>
            <Tab.Pane eventKey="home">
              <Row className="mb-4">
                <Col>
                  <h1>Yet Another Soda Dungeon 2 Calculator</h1>
                  <p className="lead">
                    How much harm could another calculator do?
                  </p>
                </Col>
              </Row>

              <Row>
                <Col>
                  <h2>Getting Started</h2>
                  <p className="lead">
                    Setup your player and team, but don't forget about your relics!
                  </p>
                </Col>
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="player">
              <Player/>
            </Tab.Pane>

            <Tab.Pane eventKey="teams">
              <PlayerTeams />
            </Tab.Pane>

            <Tab.Pane eventKey="relics">
              <PlayerRelics />
            </Tab.Pane>

            <Tab.Pane eventKey="characters">
              <PlayerCharacters />
            </Tab.Pane>

            <Tab.Pane eventKey="pets">
              <PlayerPets />
            </Tab.Pane>

            <Tab.Pane eventKey="items">
              <Row className="mb-4">
                <Col>
                  <h1>Items</h1>
                  <p className="lead">
                    Weapons, shields, armor, oh my! (Coming Soon!)
                  </p>
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
      
      <Container fluid className="bg-dark mt-auto">
        <Container className="text-right p-2">Created by caviyacht</Container>
      </Container>
    </>
  );
}

const BreakpointViewer = () => {
  const prefixCopy = "Hey developer, you're at breakpoint: ";

  return (
    <Container fluid className="bg-info">
      <div className="d-block d-sm-none">{prefixCopy} XS</div>
      <div className="d-none d-sm-block d-md-none">{prefixCopy} SM</div>
      <div className="d-none d-md-block d-lg-none">{prefixCopy} MD</div>
      <div className="d-none d-lg-block d-xl-none">{prefixCopy} LG</div>
      <div className="d-none d-xl-block">{prefixCopy} XL</div>
    </Container>
  );
}