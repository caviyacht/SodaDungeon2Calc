import React from "react";
import { Col, Row } from "react-bootstrap";
import DataContext from "../contexts/DataContext";
import TeamPet from "./TeamPet";
import TeamCharacter from "./TeamCharacter";

export default ({team, ...props}) => {
  return (
    <DataContext.Consumer>
      {context =>
        <Row xs={1} lg={2}>
          {getSlots(team, "pets", context).map(slot =>
            <Col className={["mb-4"]}>
              <TeamPet team={team} slot={slot} />
            </Col>
          )}

          {getSlots(team, "characters", context).map(slot =>
            <Col className={["mb-4"]}>
              <TeamCharacter team={team} slot={slot} />
            </Col>
          )}
        </Row>
      }
    </DataContext.Consumer>
  );
}

const getSlots = (team, collection, context) =>
  Object
    .keys(team[collection])
    .map(id => {
      const slot = team[collection][id];
      const slotType = context.types.slots[id];
      const item = context[slotType.collection][slot.itemId];

      return {
        id,
        item: {
          ...item,
          image: context.images[slotType.collection][slot.itemId],
          ...slot
        },
        ...slotType
      };
    });