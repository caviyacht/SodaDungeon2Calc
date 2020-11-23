import React from "react";
import { Container } from "react-bootstrap";
import Team from "./components/Team";
import DataContext from "./contexts/DataContext";
import "./styles.css";

export default (props) => {
  return (
    <Container>
      <DataContext.Consumer>
        {context =>
          <Team team={getTeam("default", context.player)}/>
        }
      </DataContext.Consumer>
    </Container>
  );
}

const getTeam = (id, player) => ({id, ...player.teams[id]});