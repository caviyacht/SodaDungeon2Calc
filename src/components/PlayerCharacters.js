import React from "react";
import { Col,  FormControl, FormGroup, FormLabel, InputGroup, Row } from "react-bootstrap";
import FormGroupImage from "./FormGroupImage";
import { useDataContext } from "../contexts/DataContext";
import { usePlayerContext } from "../contexts/PlayerContext";

export default ({...props}) => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();

  const characters = getCharacters(playerContext, dataContext);

  return (
    <Row xs={1} lg={2}>
      {characters.map(character =>
        <Col className="d-flex">
          <div className="mr-2" style={{flex: "0 0 70px"}}>
            <FormGroupImage src={character.item.image} rounded />
          </div>

          <FormGroup className="w-100">
            <FormLabel htmlFor={`character-${character.id}`}>{character.item.name}</FormLabel>
            <InputGroup>
              <FormControl id={`character-${character.id}`} type="number" min="1" max="50" value={character.item.level} />

              <InputGroup.Append>
                <InputGroup.Text className="bg-dark text-light">{"/50"}</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </FormGroup>
        </Col>
      )}
    </Row>
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