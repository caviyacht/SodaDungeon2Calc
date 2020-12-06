import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { useRecoilState, useRecoilValue } from "recoil";
import { imageCollectionSelector } from "../selectors/imageCollectionSelector";
import { playerEntitySelector } from "../selectors/playerEntitySelector";
import { playerFloorSelector } from "../selectors/playerFloorSelector";
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
  const images = useRecoilValue(imageCollectionSelector("icons"));
  const [floor, setFloor] = useRecoilState(playerFloorSelector);

  const handleSetFloor = ({ target: { value } }) => setFloor(value);

  return (
    <>
      <div className="mr-2" style={{flex: "0 0 70px"}}>
        <FormGroupImage src={images.stairs}/>
      </div>

      <Form.Group controlId="player-dungeon-floor" className="w-100">
        <Form.Label>Dungeon Floor</Form.Label>
        <InputGroup>
          <Form.Control 
            type="number" 
            min="1" 
            value={floor}
            onChange={handleSetFloor} />
        </InputGroup>
      </Form.Group>
    </>
  );
};

const KitchenLevelSelect = () => {
  const [kitchen, setKitchen] = useRecoilState(playerEntitySelector(entityId("upgrade", "kitchen")));

  const handleSetKitchenLevel = ({ target: { value } }) => setKitchen({ level: value });

  return (
    <>
      <div className="mr-2" style={{flex: "0 0 70px"}}>
        <FormGroupImage src={kitchen.image}/>
      </div>

      <Form.Group controlId="player-upgrades-kitchen-level" className="w-100">
        <Form.Label>Kitchen Level</Form.Label>
        <InputGroup>
          <Form.Control as="select" defaultValue={kitchen.level} onChange={handleSetKitchenLevel}>
            {[...Array(kitchen.maxLevel + 1).keys()].map(level =>
              <option key={level} value={level}>{level}</option>
            )}
          </Form.Control>
        </InputGroup>
      </Form.Group>
    </>
  );
}