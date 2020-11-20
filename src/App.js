import React from "react";
import { Container } from "react-bootstrap";
import Team from "./components/Team";
import { DataContext } from "./contexts/DataContext";
import "./styles.css";

export default (props) => {
  return (
    <Container>
      <DataContext.Consumer>
        {context =>
          <Team team={getTeam("default", context)}/>
        }
      </DataContext.Consumer>
    </Container>
  );
}

const getTeam = (id, context) => ({id, ...context.teams[id]});