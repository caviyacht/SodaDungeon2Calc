import React from "react";
import { Col,  FormControl, FormGroup, FormLabel, InputGroup, Row } from "react-bootstrap";
import FormGroupImage from "./FormGroupImage";
import { useDataContext } from "../contexts/DataContext";
import { usePlayerContext } from "../contexts/NewPlayerContext";

export default () => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();

  const pets = getpets(playerContext, dataContext);

  const setPetLevel = (itemId, level) => playerContext.dispatch({
    type: "SET_ITEM_LEVEL",
    payload: { itemId, level }
  })

  return (
    <>
      <Row className="mb-4">
        <Col>
          <h1>Pets</h1>
          <p className="lead">
            Awww, look at them!
          </p>
        </Col>
      </Row>

      <Row xs={1} lg={2}>
        {pets.map(pet =>
          <Col className="d-flex">
            <div className="mr-2" style={{flex: "0 0 70px"}}>
              <FormGroupImage src={pet.item.image} rounded />
            </div>

            <FormGroup className="w-100">
              <FormLabel htmlFor={`pet-${pet.id}`}>{pet.item.name}</FormLabel>
              <InputGroup>
                <FormControl id={`pet-${pet.id}`} type="number" min="1" max="50" value={pet.item.level} onChange={e => setPetLevel(pet.id, e.target.value)} />

                <InputGroup.Append>
                  <InputGroup.Text className="bg-dark text-light">{"/" + pet.item.maxLevel}</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </FormGroup>
          </Col>
        )}
      </Row>
    </>
  );
}

const getpets = (playerContext, dataContext) =>
  Object
    .entries(dataContext.items)
    .filter(([id, item]) => item.type === "pet")
    .map(([id, item]) => {
      const playerPet = playerContext.player.items[id] || {};

      return {
        id,
        item: {
          ...item,
          image: dataContext.images.pets[id],
          ...playerPet
        }
      };
    });