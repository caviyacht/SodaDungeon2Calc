import React from "react";
import { Container } from "react-bootstrap";
import PlayerRelics from "./components/PlayerRelics";
import Team from "./components/Team";
import { PlayerProvider, usePlayerContext } from "./contexts/PlayerContext";
import "./styles.css";

export default (props) => {
  return (
    <Container>
      <PlayerProvider>
        <PlayerRelics/>
        <PlayerTeam/>
      </PlayerProvider>
    </Container>
  );
}

const PlayerTeam = ({...props}) => {
  const playerContext = usePlayerContext();

  return (
    <Team team={getTeam("default", playerContext)}/>
  );
}

const getTeam = (teamId, playerContext) => ({
  id: teamId, ...playerContext.state.teams[teamId]
});