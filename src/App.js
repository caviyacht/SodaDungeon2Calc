import React, { useState } from "react";
import { Col, Container, Jumbotron, Row, Tab } from "react-bootstrap";
import Navigation from "./components/Navigation";
import PlayerRelics from "./components/PlayerRelics";
import Team from "./components/Team";
import { useDataContext } from "./contexts/DataContext";
import { PlayerProvider, usePlayerContext } from "./contexts/PlayerContext";
import { TeamProvider, useTeamContext } from "./contexts/TeamContext";
import "./styles.css";
import { loadTeam } from "./utils";
import playerData from "./data/player";
import Player from "./components/Player";
import PlayerCharacters from "./components/PlayerCharacters";
import PlayerPets from "./components/PlayerPets";

export default ({...props}) => {
  return (
    <PlayerProvider data={loadPlayer()}>
      <TeamProvider>
        <AppContent/>
      </TeamProvider>
    </PlayerProvider>
  );
}

const AppContent = ({...props}) => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();
  const teamContext = useTeamContext();
  const [activeKey, setActiveKey] = useState("home");
  const [teamId, setTeamId] = useState(null);

  const onSelect = key => {
    if (/^team-/.test(key)) {
      const teamId = key.split('-').pop();

      teamContext.setTeam(playerContext.player.teams[teamId]);

      setTeamId(teamId);
      setActiveKey("team");
    }
    else {
      setActiveKey(key);
    }
  };

  return (
    <Tab.Container activeKey={activeKey}>
      <Container fluid className="px-0">
        <Row noGutters className="min-vh-100 flex-column flex-md-row">
          <Col as="aside" sm={12} md="auto" className="p-0 bg-dark flex-shrink-1">
            <Navigation setActiveKey={onSelect} />
          </Col>
        
          <Col as="main" className="bg-faded flex-grow-1">
            <Jumbotron className="py-3 px-3">
              <h1 className="display-4">{getTitle(activeKey)}</h1>
            </Jumbotron>

            <Tab.Content className="px-3">
              <Tab.Pane eventKey="home">
                <PlayerWrapper/>
              </Tab.Pane>

              <Tab.Pane eventKey="relics">
                <PlayerRelics/>
              </Tab.Pane>

              <Tab.Pane eventKey="characters">
                <PlayerCharacters/>
              </Tab.Pane>

              <Tab.Pane eventKey="pets">
                <PlayerPets/>
              </Tab.Pane>

              <Tab.Pane eventKey="team">
                <Team team={loadTeam(teamId, playerContext, dataContext)} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Container>
    </Tab.Container>
  );
}

const PlayerWrapper = ({...props}) => {
  const playerContext = usePlayerContext();

  return (
    <Player player={playerContext.player} />
  );
};


const loadPlayer = () => playerData;

// TODO: This feels wrong...
const getTitle = (activeKey) => {
  switch (activeKey) {
    case "home": return "Player";
    case "relics": return "Relics";
    case "characters": return "Characters";
    case "pets": return "Pets";
    default:
      if (/^team/.test(activeKey)) {
        return "Teams";
      }
  }
}