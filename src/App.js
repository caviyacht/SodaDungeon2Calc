import React from "react";
import { Container } from "react-bootstrap";
import Team from "./components/Team";
import "./styles.css";

export default (props) => {
  return (
    <Container>
      <Team team={props.data.teams["default"]} data={props.data}/>
    </Container>
  );
}
