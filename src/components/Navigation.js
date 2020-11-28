import React from "react";
import { Dropdown, Navbar, Nav, NavItem, NavLink } from "react-bootstrap";
import { useDataContext } from "../contexts/DataContext";
import { usePlayerContext } from "../contexts/PlayerContext";

export default ({setActiveKey}) => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();

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


          <Dropdown as={NavItem} id="teams-dropdown">
            <Dropdown.Toggle as={NavLink} className="pl-0">Teams</Dropdown.Toggle>
            <Dropdown.Menu>
              {getPlayerTeams(playerContext).map(team =>
                <Dropdown.Item eventKey={`team-${team.id}`}>{team.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown as={NavItem} id="data-dropdown">
            <Dropdown.Toggle as={NavLink} className="pl-0">Data</Dropdown.Toggle>
            <Dropdown.Menu align={{md: "left"}}>
              <Dropdown.Item eventKey="relics">Relics</Dropdown.Item>
              <Dropdown.Item eventKey="characters">Characters</Dropdown.Item>
              <Dropdown.Item eventKey="pets">Pets</Dropdown.Item>
              <Dropdown.Item eventKey="items">Items</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const getPlayerTeams = (playerContext) =>
  Object
    .keys(playerContext.player.teams)
    .map(id => ({
      id,
      ...playerContext.player.teams[id]
    }));