import React from "react";
import { Col, Row } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { playerTeamSelector } from "../selectors/playerTeamSelector";
import PlayerTeamMember from "./PlayerTeamMember";

export default () => {
  const team = useRecoilValue(playerTeamSelector);

  return (
    <Row xs={1} lg={2}>
      {Object.entries(team.slots).filter(([_, slot]) => slot.valueType === "character").map(([_, slot]) =>
        <Col key={slot.id} lg={{order: getTeamMemberOrder(slot)}} className="pb-4">
          <PlayerTeamMember member={slot} />
        </Col>
      )}

      {Object.entries(team.slots).filter(([_, slot]) => slot.valueType === "pet").map(([_, slot]) =>
        <Col key={slot.id} lg={{order: getTeamMemberOrder(slot)}} className="pb-4">
          <PlayerTeamMember member={slot} />
        </Col>
      )}
    </Row>
  );
}

// TODO: Move this somewhere else.
const getTeamMemberOrder = (member) => {
  if (member.valueType === "pet") {
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