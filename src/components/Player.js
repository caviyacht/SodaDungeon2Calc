import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import FormGroupImage from "./FormGroupImage";
import { useDataContext } from "../contexts/DataContext";
import { usePlayerContext } from "../contexts/PlayerContext";
import { loadPlayerItem } from "../utils";

export default () => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();
  
  const setFloor = floor => playerContext.dispatch({
    type: "SET_FLOOR",
    payload: { floor }
  })

  const setItemLevel = itemId => level => playerContext.dispatch({
    type: "SET_ITEM_LEVEL",
    payload: { itemId, level }
  })

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
          <DungeonFloorInput onInput={setFloor} />
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
          <KitchenLevelSelect 
            item={loadPlayerItem("kitchen", playerContext, dataContext)} 
            onSelect={setItemLevel("kitchen")} />
        </Col>
      </Row>
    </>
  );
}

const DungeonFloorInput = ({onInput}) => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();

  return (
    <>
      <div className="mr-2" style={{flex: "0 0 70px"}}>
        <FormGroupImage src={dataContext.images.icons.stairs}/>
      </div>

      <Form.Group controlId="player-dungeon-floor" className="w-100">
        <Form.Label>Dungeon Floor</Form.Label>
        <InputGroup>
          <Form.Control 
            type="number" 
            min="1" 
            value={playerContext.player.floor}
            onChange={e => onInput(e.target.value)} />
        </InputGroup>
      </Form.Group>
    </>
  );
}

const KitchenLevelSelect = ({item, onSelect}) => {
  return (
    <>
      <div className="mr-2" style={{flex: "0 0 70px"}}>
        <FormGroupImage src={item.image}/>
      </div>

      <Form.Group controlId="player-upgrades-kitchen-level" className="w-100">
        <Form.Label>Kitchen Level</Form.Label>
        <InputGroup>
          <Form.Control as="select" onChange={e => onSelect(e.target.value)}>
            {[...Array(item.maxLevel + 1).keys()].map(level =>
              <option value={level} selected={level === item.level}>{level}</option>
            )}
          </Form.Control>
        </InputGroup>
      </Form.Group>
    </>
  );
}