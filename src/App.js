import React, { useState } from "react";
import { Container, Tab } from "react-bootstrap";
import Navigation from "./components/Navigation";
import PlayerRelics from "./components/PlayerRelics";
import Team from "./components/Team";
import { useDataContext } from "./contexts/DataContext";
import { PlayerProvider, usePlayerContext } from "./contexts/PlayerContext";
import { TeamProvider, useTeamContext } from "./contexts/TeamContext";
import "./styles.css";
import { loadTeam } from "./utils";
import playerData from "./data/player";

export default ({...props}) => {
  const [activeKey, setActiveKey] = useState("home");
  const [currentTeamId, setCurrentTeamId] = useState(null);

  const onSelect = key => {
    if (/^team-/.test(key)) {
      setCurrentTeamId(key.split('-').pop());
      setActiveKey("team");
    }
    else {
      setActiveKey(key);
    }
  };

  return (
    <PlayerProvider data={loadPlayer()}>
      <TeamProviderWrapper teamId={currentTeamId}>
        <Tab.Container activeKey={activeKey}>
          <Navigation setActiveKey={onSelect} />
          
          <Container>
            <Tab.Content>
              <Tab.Pane eventKey="home">
              </Tab.Pane>

              <Tab.Pane eventKey="relics">
                <PlayerRelics/>
              </Tab.Pane>

              <Tab.Pane eventKey="team">
                <TeamWrapper teamId={currentTeamId} />
              </Tab.Pane>
            </Tab.Content>
          </Container>
        </Tab.Container>
      </TeamProviderWrapper>
    </PlayerProvider>
  );
}

const TeamWrapper = ({teamId, ...props}) => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();

  return (
    <Team team={loadTeam(teamId, playerContext, dataContext)} />
  );
}

const TeamProviderWrapper = ({teamId, children}) => {
  const playerContext = usePlayerContext();

  return (
    <TeamProvider data={playerContext.player.teams[teamId]}>
      {children}
    </TeamProvider>
  );
}

const loadPlayer = () => playerData;