import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDataContext } from "../contexts/DataContext";
import TeamPet from "./TeamPet";
import TeamCharacter from "./TeamCharacter";

export default ({team, ...props}) => {
  const dataContext = useDataContext();

  return (
    <Row xs={1} lg={2}>
      {getSlots(team, "pets", dataContext).map(slot =>
        <Col className={["mb-4"]}>
          <TeamPet team={team} slot={slot} />
        </Col>
      )}

      {getSlots(team, "characters", dataContext).map(slot =>
        <Col className={["mb-4"]}>
          <TeamCharacter team={team} slot={slot} />
        </Col>
      )}
    </Row>
  );
}

const getSlots = (team, collection, dataContext) =>
  Object
    .keys(team[collection])
    .map(id => {
      const slot = team[collection][id];
      const slotType = dataContext.types.slots[id];
      const item = dataContext[slotType.collection][slot.itemId];

      return {
        id,
        item: {
          ...item,
          image: dataContext.images[slotType.collection][slot.itemId],
          ...slot
        },
        ...slotType
      };
    });