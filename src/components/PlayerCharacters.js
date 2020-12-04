import React from "react";
import { Col,  FormControl, FormGroup, FormLabel, InputGroup, Row } from "react-bootstrap";
import FormGroupImage from "./FormGroupImage";
import { useDataContext } from "../contexts/NewDataContext";
import { usePlayerContext } from "../contexts/NewPlayerContext";

export default () => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();

  const characters = getCharacters(playerContext, dataContext);

  const setCharacterLevel = (itemId, level) => playerContext.dispatch({
    type: "SET_ITEM_LEVEL",
    payload: { itemId, level }
  })

  return (
    <>
      <Row className="mb-4">
        <Col>
          <h1>Characters</h1>
          <p className="lead">
            You're not here to make friends.
          </p>
        </Col>
      </Row>

      <Row xs={1} lg={2}>
        {characters.map(character =>
          <Col className="d-flex">
            <div className="mr-2" style={{flex: "0 0 70px"}}>
              <FormGroupImage src={character.item.image} rounded />
            </div>

            <FormGroup controlId={`character-${character.id}`} className="w-100">
              <FormLabel>{character.item.name}</FormLabel>
              <InputGroup>
                <FormControl type="number" min="1" max="50" value={character.item.level} onChange={e => setCharacterLevel(character.id, e.target.value)} />

                <InputGroup.Append>
                  <InputGroup.Text className="bg-dark text-light">{"/" + character.item.maxLevel}</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </FormGroup>
          </Col>
        )}
      </Row>
    </>
  );
}

const getCharacters = (playerContext, dataContext) =>
  Object
    .entries(dataContext.items)
    .filter(([id, item]) => item.type === "character")
    .map(([id, item]) => {
      const playerCharacter = playerContext.player.items[id] || {};

      return {
        id,
        item: {
          ...item,
          image: dataContext.images.characters[id],
          ...playerCharacter
        }
      };
    });