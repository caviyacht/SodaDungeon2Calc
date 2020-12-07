import React, { useState } from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import Player from "./components/Player";
import PlayerTeams from "./components/PlayerTeams";
import PlayerRelics from "./components/PlayerRelics";
import PlayerCharacters from "./components/PlayerCharacters";
import PlayerPets from "./components/PlayerPets";
import AppNavigation from "./components/AppNavigation";
import AppPageHeader from "./components/AppPageHeader";
import PageSection from "./components/PageSection";

export default () => {
  return (
    <>
      <BreakpointViewer/>
      <AppContent/>
    </>
  );
}

// TODO: Move most of the stuff out of here.
const AppContent = () => {
  const [pageName, setPageName] = useState("home");

  return (
    <>
      <Tab.Container activeKey={pageName}>
        <AppNavigation onSelect={setPageName} />
        <AppPageHeader name={pageName} />

        <Container>
          <Tab.Content>
            <Tab.Pane eventKey="home">
              <PageSection 
                title="Getting Started" 
                description="Setup your player, teams, and relics (don't forget the relics)." />
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
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
      
      <Container fluid className="bg-dark mt-auto p-0">
        <Container className="p-2">Created by caviyacht</Container>
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