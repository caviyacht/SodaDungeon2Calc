import React from "react";
import { Dropdown, Navbar, Nav, NavItem, NavLink } from "react-bootstrap";
import { useDataContext } from "../contexts/DataContext";

export default ({setActiveKey}) => {
  const dataContext = useDataContext();

  return (
    <Navbar 
      bg="dark" 
      variant="dark"
      onSelect={setActiveKey}
      className="flex-md-column flex-row align-items-start py-2">

      <Navbar.Brand>
        <img src={dataContext.images.skills.burp} alt="Burp" style={{width: "30px", height: "30px"}}/>
      </Navbar.Brand>

      <Navbar.Collapse>
        <Nav className="flex-md-column flex-row w-100 justify-content-between">
          <Nav.Link eventKey="home" className="pl-0">Home</Nav.Link>
          <Nav.Link eventKey="teams" className="pl-0">Teams</Nav.Link>
          <Nav.Link eventKey="relics" className="pl-0">Relics</Nav.Link>

          <Dropdown as={NavItem} id="data-dropdown" className="d-md-none">
            <Dropdown.Toggle as={NavLink} className="pl-0">Data</Dropdown.Toggle>
            <Dropdown.Menu align={{md: "left"}}>
              <Dropdown.Item eventKey="characters">Characters</Dropdown.Item>
              <Dropdown.Item eventKey="pets">Pets</Dropdown.Item>
              <Dropdown.Item eventKey="items">Items</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav.Link eventKey="characters" className="pl-0 d-none d-md-block">Characters</Nav.Link>
          <Nav.Link eventKey="pets" className="pl-0 d-none d-md-block">Pets</Nav.Link>
          <Nav.Link eventKey="items" className="pl-0 d-none d-md-block">Items</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
