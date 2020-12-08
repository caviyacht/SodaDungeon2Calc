import React from "react";
import { Col, Row } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { playerEntitiesOfTypeSelector } from "../selectors/playerEntitiesOfTypeSelector";
import PlayerEntity from "./PlayerEntity";

// TODO: There has to be a better way without having to pass in the
// pre-filtered items.
export default ({ type, predicate }) => {
  const entities = useRecoilValue(playerEntitiesOfTypeSelector(type));

  return (
    <Row xs={1} lg={2}>
      {entities.filter(predicate || (() => true)).map(character => 
        <Col key={character.id}>
          <PlayerEntity key={character.id} value={character} />
        </Col>
      )}
    </Row>
  );
};