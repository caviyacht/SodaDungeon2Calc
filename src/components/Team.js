import React from "react";
import { Col, Row } from "react-bootstrap";
import TeamPet from "./TeamPet";
import TeamCharacter from "./TeamCharacter";

export default ({team}) => {
  return (
    <Row xs={1} lg={2}>
      {getTeamMembersForItemType("character", team).map(character =>
        <Col lg={{order: getTeamMemberOrder(character)}} className="mb-4">
          <TeamCharacter team={team} character={character} />
        </Col>
      )}

      {getTeamMembersForItemType("pet", team).map(pet =>
        <Col lg={{order: getTeamMemberOrder(pet)}} className="mb-4">
          <TeamPet team={team} pet={pet} />
        </Col>
      )}
    </Row>
  );
}

const getTeamMembersForItemType = (itemType, team) => 
  (team.members || []).filter(member => member.itemType === itemType);

// TODO: Move this somewhere else.
const getTeamMemberOrder = (member) => {
  if (member.itemType === "pet") {
    return 7;
  }

  /*
    [1, 4]
    [2, 5]
    [3, 6]
    [7, -]
  */
  switch (member.id.split('_').pop()) {
    case "1": return 1;
    case "2": return 3;
    case "3": return 5;
    case "4": return 2;
    case "5": return 4;
    case "6": return 6;
    default: return null;
  }
}