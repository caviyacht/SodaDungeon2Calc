import React from "react";
import { Nav } from "react-bootstrap";

export default ({eventKey, item, defaultIcon, ...props}) => {
  return (
    <Nav.Item>
      <Nav.Link eventKey={eventKey} className={["px-0"]}>
        <img class="rounded" src={item.image || defaultIcon} alt={item.name} height="48"/>
      </Nav.Link>
    </Nav.Item>
  );
}