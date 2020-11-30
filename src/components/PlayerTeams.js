import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Button, Col, Dropdown, DropdownButton, Form, InputGroup, Modal, Row } from "react-bootstrap";
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
  const [showAddModal, setShowAddModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [teamName, setTeamName] = useState("");

  const setTeam = teamId => {
    setTeamId(teamId);
    teamContext.setTeam(playerContext.player.teams[teamId]);
  };

  const addTeam = (name) => {
    setShowAddModal(false);

    playerContext.dispatch({
      type: "ADD_TEAM",
      payload: { id: nanoid(), name }
    });
  };

  const removeTeam = teamId => {
    setShowRemoveModal(false);

    playerContext.dispatch({
      type: "REMOVE_TEAM",
      payload: { id: teamId }
    });
  }

  return (
    <>
      <Row>
        <Col xs={12} lg={6} className="d-flex">
          <div className="mr-2" style={{flex: "0 0 70px"}}>
            <FormGroupImage rounded src={dataContext.images.char_portraits.recruiter}/>
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

              <InputGroup.Append>
                <DropdownButton
                  as={InputGroup.Append}
                  variant="dark"
                  title=""
                  id="player-teams-actions-dropdown">

                  <Dropdown.Item onClick={() => setShowAddModal(true)}>New Team</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={() => setShowRemoveModal(true)}>Delete Team</Dropdown.Item>
                </DropdownButton>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Team team={loadTeam(teamId, playerContext, dataContext)} />
        </Col>
      </Row>

      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header>
          <Modal.Title>Add Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label htmlFor="player-teams-add-team-name">Name</Form.Label>
            <Form.Control id="player-teams-add-team-name" value={teamName} onChange={e => setTeamName(e.target.value)} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>Close</Button>
          <Button variant="primary" onClick={() => addTeam(teamName)}>Save</Button>
        </Modal.Footer>
      </Modal>

      {showRemoveModal && <Modal show={showRemoveModal} onHide={() => setShowRemoveModal(false)}>
        <Modal.Header>
          <Modal.Title>Remove Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are  you sure you want to remove the team <strong>{playerContext.player.teams[teamId].name}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowRemoveModal(false)}>No</Button>
          <Button variant="primary" onClick={() => removeTeam(teamId)}>Yes</Button>
        </Modal.Footer>
      </Modal>}
    </>
  );
}