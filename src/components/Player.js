import React from "react";
import { Col, Form } from "react-bootstrap";
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

  return (
    <Form>
      <Form.Row>
        <Col md={4} lg={2}>
          <Form.Group>
            <Form.Label>Dungeon Floor</Form.Label>
            <Form.Control type="number" min="1" value={player.floor} onChange={e => setFloor(e.target.value)} />
          </Form.Group>
        </Col>
      </Form.Row>

      <Form.Row>
        <Col md={4} lg={2}>
          <Form.Group>
            <Form.Label>Kitchen Level</Form.Label>
            <Form.Control as="select" onChange={e => setItemLevel("kitchen", e.target.value)}>
              {[...Array(dataContext.items.kitchen.maxLevel + 1).keys()].map(level =>
                <option value={level}>{level}</option>
              )}
            </Form.Control>
          </Form.Group>
        </Col>
      </Form.Row>
    </Form>
  );
}
