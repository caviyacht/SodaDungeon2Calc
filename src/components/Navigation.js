import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useDataContext } from "../contexts/DataContext";
import { usePlayerContext } from "../contexts/PlayerContext";
import { useTeamContext } from "../contexts/TeamContext";

export default ({setActiveKey, currentTeamName}) => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();
  const teamContext = useTeamContext();

  return (
    <Navbar bg="dark" variant="dark" onSelect={setActiveKey}>
      <Navbar.Brand>
        <img
          src={dataContext.images.skills.burp}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Soda Calc"
        />
      </Navbar.Brand>
      <Navbar.Toggle/>
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link eventKey="home">Home</Nav.Link>
          <NavDropdown id="teams-dropdown" title={getTeamsDropdownTitle(teamContext)}>
            {getPlayerTeams(playerContext).map(team =>
              <NavDropdown.Item eventKey={`team-${team.id}`}>{team.name}</NavDropdown.Item>
            )}
            <NavDropdown.Divider/>
            <NavDropdown.Item eventKey="newTeam">New Team</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link eventKey="relics">Relics</Nav.Link>
          <Nav.Link eventKey="characters">Characters</Nav.Link>
          <Nav.Link eventKey="items">Items</Nav.Link>
          {/*<NavDropdown id="data-dropdown" title="Data">
            <NavDropdown.Item eventKey="relics">Relics</NavDropdown.Item>
            </NavDropdown>*/}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const getTeamsDropdownTitle = (teamContext) =>
  teamContext.team && teamContext.team.name
    ? `Teams (${teamContext.team.name})`
    : "Teams";

const getPlayerTeams = (playerContext) =>
  Object
    .keys(playerContext.player.teams)
    .map(id => ({
      id,
      ...playerContext.player.teams[id]
    }));