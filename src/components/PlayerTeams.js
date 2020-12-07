import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Dropdown, DropdownButton, Form, InputGroup, Modal, Nav, Row, Tab } from "react-bootstrap";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { playerDataAtom } from "../atoms/playerDataAtom";
import { playerTeamIdAtom } from "../atoms/playerTeamIdAtom";
import { imageCollectionSelector } from "../selectors/imageCollectionSelector";
import FormGroupImage from "./FormGroupImage";
import PlayerTeam from "./PlayerTeam";

export default () => {
  return (
    <div>
      <Row>
        <Col xs={12} lg={{ span: 5, offset: 2 }}>
          <TeamSelector />
        </Col>
      </Row>

      <Row xs={1} lg={2}>
        <Col>
          <SelectedTeam />
        </Col>
      </Row>
    </div>
  );
};

const SelectedTeam = () => {
  return (
    <Tab.Container defaultActiveKey="team">
      <Row>
        <Col lg={2} className="mb-4">
          <Nav justify variant="pills" className="flex-lg-column">
            <Nav.Link eventKey="team">Team</Nav.Link>
            <Nav.Link eventKey="survivability">Survivability</Nav.Link>
          </Nav>
        </Col>

        <Col lg={10}>
          <Tab.Content>
            <Tab.Pane eventKey="team">
              <PlayerTeam />
            </Tab.Pane>

            <Tab.Pane eventKey="survivability">
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

const TeamSelector = () => {
  const images = useRecoilValue(imageCollectionSelector("char_portraits"));
  const player = useRecoilValue(playerDataAtom);
  const [teamId, setTeamId] = useRecoilState(playerTeamIdAtom);
  const [openModals, setOpenModals] = useState({ add: false, remove: false });

  const handleSetTeamId = ({ target: { value } }) => setTeamId(value);

  const handleModalShow = name => () => setOpenModals(state => ({ ...state, [name]: true }));
  const handleModalHide = name => () => setOpenModals(state => ({ ...state, [name]: false }));

  return (
    <div className="d-flex">
      <div className="mr-2" style={{flex: "0 0 70px"}}>
        <FormGroupImage rounded src={images.recruiter} />
      </div>

      <Form.Group controlId="player-teams" className="w-100">
        <Form.Label>Team</Form.Label>
        <InputGroup>
          <Form.Control as="select" defaultValue={teamId} onChange={handleSetTeamId}>
            <option value="">None</option>

            {/* TODO: Possibly find a way to load a "light" team */}
            {Object.entries(player.teams).map(([id, value]) =>
              <option key={id} value={id}>{value.name}</option>
            )}
          </Form.Control>

          <InputGroup.Append>
            <DropdownButton
              as={InputGroup.Append}
              variant="dark"
              title="Actions"
              id="player-teams-actions-dropdown">

              <Dropdown.Item onClick={handleModalShow("add")}>Add Team</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleModalShow("remove")}>Remove Team</Dropdown.Item>
            </DropdownButton>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>

      {/* TODO: Possibly move this somewhere else? */}
      <AddTeamModal show={openModals.add} onHide={handleModalHide("add")} />
      <RemoveTeamModal show={openModals.remove} onHide={handleModalHide("remove")} />
    </div>
  );
};

const AddTeamModal = ({ show, onHide }) => {
  const nameRef = useRef();
  const [teamName, setTeamName] = useState("");
  const setPlayer = useSetRecoilState(playerDataAtom);

  const handleSetTeamName = ({ target: { value } }) => setTeamName(value);

  const handleAddTeam = () => {
    // TODO: Put this somewhere else.
    setPlayer(state => ({
      ...state,
      teams: {
        ...state.teams,
        [teamName]: {
          // TODO: Figure out a way to configure this.
          "pet_1": { value: null },
          "character_1": { value: null },
          "character_2": { value: null },
          "character_3": { value: null },
          "character_4": { value: null },
          "character_5": { value: null },
          "character_6": { value: null },
        }
      }
    }));

    onHide();
  };

  useEffect(() => {
    if (show) {
      nameRef.current.focus()
    }
  }, [show]);

  // TODO: This seems wrong.
  if (!show) {
    return null;
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header>
        <Modal.Title>Add Team</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="player-teams-add-team-name">
          <Form.Label>Name</Form.Label>
          <Form.Control ref={nameRef} value={teamName} onChange={handleSetTeamName} />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="primary" onClick={handleAddTeam}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

const RemoveTeamModal = ({ show, onHide }) => {
  const teamId = useRecoilValue(playerTeamIdAtom);
  const [player, setPlayer] = useRecoilState(playerDataAtom); // TODO: Try not to use the player this way.

  const handleRemoveTeam = () => {
    setPlayer(state => {
      const { teams: { [teamId]: team, ...rest } } = state;

      return {
        ...state,
        teams: rest
      };
    });

    onHide();
  };

  // TODO: This seems wrong.
  if (!show) {
    return null;
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header>
        <Modal.Title>Remove Team</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to remove the team <strong>{player.teams[teamId].name}</strong>?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>No</Button>
        <Button variant="primary" onClick={handleRemoveTeam}>Yes</Button>
      </Modal.Footer>
    </Modal>
  );
};