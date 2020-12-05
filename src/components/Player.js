import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { useRecoilState, useRecoilValue } from "recoil";
import { imagesState } from "../atoms/imagesState";
import { rawPlayerState } from "../atoms/rawPlayerState";
import { playerEntityState } from "../selectors/playerEntityState";
import { entityId } from "../utils";
import FormGroupImage from "./FormGroupImage";

export default () => {
  return (
    <>
      <Row>
        <Col>
          <h1>Dungeon</h1>
          <p className="lead">
            Don't forget to set your floor!
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col xs={12} lg={6} className="d-flex">
          <DungeonFloorInput /*onInput={setFloor}*/ />
        </Col>
      </Row>

      <Row>
        <Col>
          <h1>Upgrades</h1>
          <p className="lead">
            Upgrades? We've got those.
          </p>
        </Col>
      </Row>

      <Row>
        <Col xs={12} lg={6} className="d-flex">
          <KitchenLevelSelect />
        </Col>
      </Row>
    </>
  );
}

const DungeonFloorInput = () => {
  const images = useRecoilValue(imagesState);
  const [player, setPlayer] = useRecoilState(rawPlayerState);

  const setFloor = ({ target: { value } }) => {
    setPlayer(state => ({
      ...state,
      floor: value
    }));
  };

  return (
    <>
      <div className="mr-2" style={{flex: "0 0 70px"}}>
        <FormGroupImage src={images.icons.stairs}/>
      </div>

      <Form.Group controlId="player-dungeon-floor" className="w-100">
        <Form.Label>Dungeon Floor</Form.Label>
        <InputGroup>
          <Form.Control 
            type="number" 
            min="1" 
            value={player.floor}
            onChange={setFloor} />
        </InputGroup>
      </Form.Group>
    </>
  );
};

const KitchenLevelSelect = () => {
  const [kitchen, setKitchen] = useRecoilState(playerEntityState(entityId("upgrade", "kitchen")));

  const setKitchenLevel = ({ target: { value } }) => {
    setKitchen(value);
  };

  return (
    <>
      <div className="mr-2" style={{flex: "0 0 70px"}}>
        <FormGroupImage src={kitchen.image}/>
      </div>

      <Form.Group controlId="player-upgrades-kitchen-level" className="w-100">
        <Form.Label>Kitchen Level</Form.Label>
        <InputGroup>
          <Form.Control as="select" onChange={setKitchenLevel}>
            {[...Array(kitchen.maxLevel + 1).keys()].map(level =>
              <option value={level} selected={level === kitchen.level}>{level}</option>
            )}
          </Form.Control>
        </InputGroup>
      </Form.Group>
    </>
  );
}