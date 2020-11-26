import React from "react";
import { Col, Row } from "react-bootstrap";
import TeamPet from "./TeamPet";
import TeamCharacter from "./TeamCharacter";
import { usePlayerContext } from "../contexts/PlayerContext";
import Player from "./Player";

export default ({team}) => {
  const playerContext = usePlayerContext();
console.log(team);
  return (
    <Row xs={1} lg={2}>
      <Col className="mb-4">
        <Player player={playerContext.player} />
      </Col>
    
      {getTeamMembersForItemType("pet", team).map(pet =>
        <Col className="mb-4">
          <TeamPet team={team} pet={pet} />
        </Col>
      )}

      {getTeamMembersForItemType("character", team).map(character =>
        <Col className="mb-4">
          <TeamCharacter team={team} character={character} />
        </Col>
      )}
    </Row>
  );
}

const getTeamMembersForItemType = (itemType, team) => 
  team.members.filter(member => member.itemType === itemType);