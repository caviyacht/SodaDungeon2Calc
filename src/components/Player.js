import React from "react";
import { Card, FormControl, InputGroup } from "react-bootstrap";
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
    <Card>
      <Card.Body>
        <FormControlContainer image={dataContext.images.icons.stairs}>
          <FormControl type="number" min="1" value={player.floor} onChange={e => setFloor(e.target.value)} />
        </FormControlContainer>

        <FormControlContainer image={dataContext.images.upgrades.kitchen}>
          <FormControl as="select" onChange={e => setItemLevel("kitchen", e.target.value)}>
            {[...Array(dataContext.items.kitchen.maxLevel + 1).keys()].map(level =>
              <option value={level}>{level}</option>
            )}
          </FormControl>
        </FormControlContainer>
      </Card.Body>
    </Card>
  );
}

const FormControlContainer = ({image, children}) => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <span className="mr-2" style={{
          width: "38px",//"calc(1.5em + 1rem + 8px)",
          height: "38px",//"calc(1.5em + 1rem + 8px)",
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%"
        }}/>
      </InputGroup.Prepend>

      {children}
    </InputGroup>
  );
}