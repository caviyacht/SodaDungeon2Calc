import React from "react";
import { Col, Row } from "react-bootstrap";
import TeamPet from "./TeamPet";
import TeamCharacter from "./TeamCharacter";

export default ({team}) => {
  return (
    <Row xs={1} lg={2}>
      {getTeamMembersForItemType("character", team).map(character =>
        <Col className="mb-4">
          <TeamCharacter team={team} character={character} />
        </Col>
      )}

      {getTeamMembersForItemType("pet", team).map(pet =>
        <Col className="mb-4">
          <TeamPet team={team} pet={pet} />
        </Col>
      )}
    </Row>
  );
}

const getTeamMembersForItemType = (itemType, team) => 
  (team.members || []).filter(member => member.itemType === itemType);