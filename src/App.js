import React, { useState } from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import { PlayerProvider } from "./contexts/PlayerContext";
import { TeamProvider } from "./contexts/TeamContext";
import PlayerTeams from "./components/PlayerTeams";
import AppNavigation from "./components/AppNavigation";
import playerData from "./data/player"; // TODO: Load this from somewhere else

export default () => {
  return (
    <PlayerProvider data={playerData}>
      <TeamProvider>
        <BreakpointViewer/>
        <AppContent/>
      </TeamProvider>
    </PlayerProvider>
  );
}

const AppContent = () => {
  const [activeKey, setActiveKey] = useState("home");

  return (
    <Tab.Container activeKey={activeKey}>
      <AppNavigation onSelect={setActiveKey} />

      <Container className="pt-4">
        <Tab.Content>
          <Tab.Pane eventKey="home">
            <Row>
              <Col>
                <h1>Home</h1>
                <p className="lead">
                  Welcome to the Soda Dungeon 2 Calculator!
                </p>
              </Col>
            </Row>
          </Tab.Pane>

          <Tab.Pane eventKey="teams">
            <PlayerTeams />
          </Tab.Pane>
        </Tab.Content>
      </Container>
    </Tab.Container>
  );
}

const BreakpointViewer = () => {
  return (
    <Container fluid className="bg-info">
      <div className="d-block d-sm-none">Breakpoint: XS</div>
      <div className="d-none d-sm-block d-md-none">Breakpoint: SM</div>
      <div className="d-none d-md-block d-lg-none">Breakpoint: MD</div>
      <div className="d-none d-lg-block d-xl-none">Breakpoint: LG</div>
      <div className="d-none d-xl-block">Breakpoint: XL</div>
    </Container>
  );
}