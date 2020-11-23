import React from "react";
import { Nav } from "react-bootstrap";

export default ({eventKey, item, ...props}) => {
  return (
    <Nav.Item>
      <Nav.Link eventKey={eventKey} className={["px-0"]}>
        <img class="rounded" src={item.image} alt={item.name} height="40"/>
      </Nav.Link>
    </Nav.Item>
  );
}