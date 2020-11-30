import React, { useEffect, useRef, useState } from "react";
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
  const [showAddTeamModal, setShowAddTeamModal] = useState(false);
  const [showRemoveTeamModal, setShowRemoveTeamModal] = useState(false);

  const setTeam = teamId => {
    setTeamId(teamId);
    teamContext.setTeam(playerContext.player.teams[teamId]);
  };

  const addTeam = name => {
    const teamId = nanoid();

    playerContext.dispatch({
      type: "ADD_TEAM",
      payload: { id: teamId, name }
    });

    handleHideAddTeamModal();
    setTeam(teamId);
  };

  const removeTeam = teamId => {
    playerContext.dispatch({
      type: "REMOVE_TEAM",
      payload: { id: teamId }
    });

    handleHideRemoveTeamModal();
    setTeam(null);
  };

  const handleShowAddTeamModal = () => setShowAddTeamModal(true);
  const handleHideAddTeamModal = () => setShowAddTeamModal(false);
  const handleShowRemoveTeamModal = () => setShowRemoveTeamModal(true);
  const handleHideRemoveTeamModal = () => setShowRemoveTeamModal(false);

  return (
    <>
      <Row>
        <Col xs={12} lg={6} className="d-flex">
          <div className="mr-2" style={{flex: "0 0 70px"}}>
            <FormGroupImage rounded src={dataContext.images.char_portraits.recruiter}/>
          </div>

          <Form.Group className="w-100 mb-4">
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

                  <Dropdown.Item onClick={handleShowAddTeamModal}>New Team</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleShowRemoveTeamModal}>Delete Team</Dropdown.Item>
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

      <AddTeamModal show={showAddTeamModal} onHide={handleHideAddTeamModal} addTeam={addTeam} />
      <RemoveTeamModal show={showRemoveTeamModal} onHide={handleHideRemoveTeamModal} removeTeam={removeTeam} teamId={teamId} teamName={""} />
    </>
  );
}

const AddTeamModal = ({show, onHide, addTeam, ...props}) => {
  const nameRef = useRef();
  const [teamName, setTeamName] = useState("");

  useEffect(() => nameRef.current && nameRef.current.focus());

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header>
        <Modal.Title>Add Team</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="player-teams-add-team-name">
          <Form.Label>Name</Form.Label>
          <Form.Control ref={nameRef} value={teamName} onChange={e => setTeamName(e.target.value)} />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="primary" onClick={() => addTeam(teamName)}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

const RemoveTeamModal = ({teamId, teamName, show, onHide, removeTeam, ...props}) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header>
        <Modal.Title>Remove Team</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to remove the team <strong>{teamName}</strong>?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>No</Button>
        <Button variant="primary" onClick={() => removeTeam(teamId)}>Yes</Button>
      </Modal.Footer>
    </Modal>
  );
}