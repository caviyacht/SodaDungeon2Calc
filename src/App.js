import React, { useState } from "react";
import { Container, Tab } from "react-bootstrap";
import Navigation from "./components/Navigation";
import PlayerRelics from "./components/PlayerRelics";
import Team from "./components/Team";
import { PlayerProvider, usePlayerContext } from "./contexts/PlayerContext";
import { TeamProvider } from "./contexts/TeamContext";
import "./styles.css";

export default (props) => {
  const [activeKey, setActiveKey] = useState("home");
  const [currentTeamId, setCurrentTeamId] = useState(undefined);

  const onSelect = key => {
    if (/^team-/.test(key)) {
      setCurrentTeamId(key.split('-')[1]);
      setActiveKey("team");
    }
    else {
      setActiveKey(key);
    }
  };

  return (
    <PlayerProvider>
      <TeamProvider>
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
                <PlayerTeam teamId={currentTeamId} />
              </Tab.Pane>
            </Tab.Content>
          </Container>
        </Tab.Container>
      </TeamProvider>
    </PlayerProvider>
  );
}

const PlayerTeam = ({teamId, ...props}) => {
  const playerContext = usePlayerContext();

  return (
    <Team team={getTeam(teamId, playerContext)}/>
  );
}

const getTeam = (teamId, playerContext) => ({
  id: teamId, ...playerContext.state.teams[teamId]
});