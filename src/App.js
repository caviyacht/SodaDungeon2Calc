import React, { useState } from "react";
import { Col, Container, Tab } from "react-bootstrap";
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
      <Navigation setActiveKey={onSelect} />
      
      <Container>
        <Tab.Content>
          <Tab.Pane eventKey="home">
            <PlayerWrapper/>
          </Tab.Pane>

          <Tab.Pane eventKey="relics">
            <PlayerRelics/>
          </Tab.Pane>

          <Tab.Pane eventKey="team">
            <TeamWrapper teamId={teamId} />
          </Tab.Pane>
        </Tab.Content>
      </Container>
    </Tab.Container>
  );
}

const PlayerWrapper = ({...props}) => {
  const playerContext = usePlayerContext();

  return (
    <Col className="mb-4">
        <Player player={playerContext.player} />
    </Col>
  );
};

const TeamWrapper = ({teamId, ...props}) => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();

  return (
    <Team team={loadTeam(teamId, playerContext, dataContext)} />
  );
};

const loadPlayer = () => playerData;