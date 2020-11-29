import React, { useState } from "react";
import { Col,  Form, InputGroup, Row } from "react-bootstrap";
import FormGroupImage from "./FormGroupImage";
import { useDataContext } from "../contexts/DataContext";
import { usePlayerContext } from "../contexts/PlayerContext";
import { useTeamContext } from "../contexts/TeamContext";
import Team from "./Team";
import { loadTeam } from "../utils";

export default ({...props}) => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();
  const teamContext = useTeamContext();
  const [teamId, setTeamId] = useState(null);

  const setTeam = teamId => {
    setTeamId(teamId);
    teamContext.setTeam(playerContext.player.teams[teamId]);
  };

  return (
    <>
      <Row>
        <Col xs={12} lg={6} className="d-flex">
          <div className="mr-2" style={{flex: "0 0 70px"}}>
            <FormGroupImage src={dataContext.images.buttons.swords}/>
          </div>

          <Form.Group className="w-100">
            <Form.Label htmlFor="player-teams">Team</Form.Label>
            <InputGroup>
              <Form.Control 
                as="select" 
                id="player-teams" onChange={e => setTeam(e.target.value)}>

                <option value="">{"<Empty>"}</option>

                {Object.entries(playerContext.player.teams).map(([id, value]) =>
                  <option value={id} selected={id === teamId}>{value.name}</option>
                )}
              </Form.Control>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
        <Team team={loadTeam(teamId, playerContext, dataContext)} />
        </Col>
      </Row>
    </>
  );
}