import React from "react";
import { Container, Dropdown, Navbar, Nav } from "react-bootstrap";
import { useDataContext } from "../contexts/NewDataContext";

export default ({onSelect}) => {
  const dataContext = useDataContext();

  return (
    <Navbar variant="dark" bg="dark" onSelect={onSelect}>
      {/* `className="px-sm-3"`, keeps the Navbar content aligned with the page content */}
      <Container className="px-sm-3">
        <Navbar.Brand>
          <img 
            src={dataContext.images.skills.burp} 
            alt="Burp" 
            className="d-inline-block align-top"
            style={{width: "30px", height: "30px"}} />
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Item><Nav.Link eventKey="home">Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="player">Player</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="teams">Teams</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="relics">Relics</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="characters" className="d-none d-md-block">Characters</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="pets" className="d-none d-md-block">Pets</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="items" className="d-none d-md-block">Items</Nav.Link></Nav.Item>

            <Dropdown as={Nav.Item} className="d-md-none">
              <Dropdown.Toggle as={Nav.Link}>Other</Dropdown.Toggle>
              <Dropdown.Menu align="right">
                <Dropdown.Item eventKey="characters">Characters</Dropdown.Item>
                <Dropdown.Item eventKey="pets">Pets</Dropdown.Item>
                <Dropdown.Item eventKey="items">Items</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
