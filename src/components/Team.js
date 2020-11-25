import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDataContext } from "../contexts/DataContext";
import TeamPet from "./TeamPet";
import TeamCharacter from "./TeamCharacter";

export default ({team, ...props}) => {
  const dataContext = useDataContext();

  return (
    <Row xs={1} lg={2}>
      {getSlots(team.pets, dataContext).map(pet =>
        <Col className={["mb-4"]}>
          <TeamPet team={team} pet={pet} />
        </Col>
      )}

      {getSlots(team.characters, dataContext).map(character =>
        <Col className={["mb-4"]}>
          <TeamCharacter team={team} character={character} />
        </Col>
      )}
    </Row>
  );
}

const getItem = (collection, itemId, dataContext) => 
{
  const item = dataContext[collection][itemId];

  return {
    ...item,
    stats: getItemStats(item, dataContext),
    image: dataContext.images[collection][itemId]
  };
}

const getItemStats = (item, dataContext) =>
  Object
    .keys((item || {}).stats || {})
    .map(id => ({
      id,
      ...dataContext.types.stats[id],
      value: item.stats[id],
      ...item.stats[id]
    }));

const getSlots = (slots, dataContext) =>
  Object
    .keys(slots || {})
    .map(id => {
      const slot = slots[id];
      const slotType = dataContext.types.slots[id];

      return {
        id,
        item: {
          ...getItem(slotType.collection, slot.itemId, dataContext),
          ...slot,
          slots: getSlots(slot.slots, dataContext)
        },
        ...slotType
      };
    });