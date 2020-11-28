import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import FormGroupImage from "./FormGroupImage";
import { useDataContext } from "../contexts/DataContext";
import { usePlayerContext } from "../contexts/PlayerContext";

export default ({player, ...props}) => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();
  
  const setFloor = floor => playerContext.dispatch({
    type: "SET_FLOOR",
    payload: { floor }
  })

  const setItemLevel = (itemId, level) => playerContext.dispatch({
    type: "SET_ITEM_LEVEL",
    payload: { itemId, level }
  })

  // TODO: Make more components.
  return (
    <Row xs={1} lg={2}>
      <Col className="d-flex">
        <div className="mr-2" style={{flex: "0 0 70px"}}>
          <FormGroupImage src={dataContext.images.icons.stairs}/>
        </div>

        <Form.Group className="w-100">
          <Form.Label htmlFor="player-dungeon-floor">Dungeon Floor</Form.Label>
          <InputGroup>
            <Form.Control id="player-dungeon-floor" type="number" min="1" value={player.floor} onChange={e => setFloor(e.target.value)} />
          </InputGroup>
        </Form.Group>
      </Col>

      <Col className="d-flex">
        <div className="mr-2" style={{flex: "0 0 70px"}}>
          <FormGroupImage src={dataContext.images.upgrades.kitchen}/>
        </div>

        <Form.Group className="w-100">
          <Form.Label htmlFor="player-upgrades-kitchen-level">Kitchen Level</Form.Label>
          <InputGroup>
            <Form.Control as="select" id="player-upgrades-kitchen-level" onChange={e => setItemLevel("kitchen", e.target.value)}>
              {[...Array(dataContext.items.kitchen.maxLevel + 1).keys()].map(level =>
                <option value={level}>{level}</option>
              )}
            </Form.Control>
          </InputGroup>
        </Form.Group>
      </Col>
    </Row>
  );
}

