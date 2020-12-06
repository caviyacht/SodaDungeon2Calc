import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { useRecoilState, useRecoilValue } from "recoil";
import { imageCollectionSelector } from "../selectors/imageCollectionSelector";
import { playerFloorSelector } from "../selectors/playerFloorSelector";
import { entityId } from "../utils";
import FormGroupImage from "./FormGroupImage";
import PageSection from "./PageSection";
import PlayerEntity from "./PlayerEntity";

export default () => {
  return (
    <div>
      <PageSection title="Dungeon" description="Where you at?">
        <Row>
          <Col xs={12} lg={6}>
            <DungeonFloorInput />
          </Col>
        </Row>
      </PageSection>

      <PageSection title="Upgrades" description="Upgrades? We've got those." className="pt-4">
        <Row>
          <Col xs={12} lg={6}>
            <PlayerEntity id={entityId("upgrade", "kitchen")} controlType="select" />
          </Col>
        </Row>
      </PageSection>
    </div>
  );
}

const DungeonFloorInput = () => {
  const images = useRecoilValue(imageCollectionSelector("icons"));
  const [floor, setFloor] = useRecoilState(playerFloorSelector);

  const handleSetFloor = ({ target: { value } }) => setFloor(value);

  return (
    <div className="d-flex">
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
    </div>
  );
};
