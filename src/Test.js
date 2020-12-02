import React, { useState } from "react";
import { Badge, Card, Col, Container, Dropdown, Form, InputGroup, Nav, Navbar, Row, Tab, Table } from "react-bootstrap";
import { useDataContext } from "./contexts/DataContext";
import { usePlayerContext } from "./contexts/PlayerContext";
import { getIconForSlot, loadTeam, calculateMemberStats, formatStat } from "./utils";

export default ({...props}) => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();

  const [activeKey, setActiveKey] = useState("home");

  const team = loadTeam("default", playerContext, dataContext);

  return (
    <>
      <BreakpointViewer/>
      <Tab.Container activeKey={activeKey}>
        <Navbar variant="dark" bg="dark" onSelect={key => setActiveKey(key)}>
          <Container className="px-sm-3">{/* Keeps the Navbar content aligned with the page content */}
            <Navbar.Brand>
              <img 
                src={dataContext.images.skills.burp} 
                alt="Burp" 
                className="d-inline-block align-top"
                style={{width: "30px", height: "30px"}} />
            </Navbar.Brand>
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <Nav.Link eventKey="home">Home</Nav.Link>
                <Nav.Link eventKey="player">Player</Nav.Link>
                <Nav.Link eventKey="teams">Teams</Nav.Link>
                <Nav.Link eventKey="relics">Relics</Nav.Link>
                <Nav.Link eventKey="characters" className="d-none d-md-block">Characters</Nav.Link>
                <Nav.Link eventKey="pets" className="d-none d-md-block">Pets</Nav.Link>
                <Nav.Link eventKey="items" className="d-none d-md-block">Items</Nav.Link>

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
        <Container className="pt-4">
          <Tab.Content>
            <Tab.Pane eventKey="home">
              <Row>
                <Col><h1>Home</h1></Col>
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="teams">
              <Row xs={1} lg={2}>
                {team.members.map(member =>
                  <Col>
                    <Card className="mb-3 team-member">
                      <Tab.Container defaultActiveKey={member.id}>
                        <Card.Header className="bg-transparent">
                          <Nav justify variant="tabs">
                            <Nav.Item>
                              <Nav.Link eventKey={member.id} className="px-0">
                                <img src={member.item.image} alt={member.item.name} style={{height: "38px"}} />
                              </Nav.Link>
                            </Nav.Item>

                            {member.equipmentSlots.map(equipmentSlot =>
                              <Nav.Item>
                                <Nav.Link eventKey={equipmentSlot.id} className="px-0">
                                  <img src={equipmentSlot.item.image} alt={equipmentSlot.item.name} style={{height: "38px"}} />
                                </Nav.Link>
                              </Nav.Item>
                            )}
                          </Nav>
                        </Card.Header>
                        <Card.Body>
                          <Tab.Content>
                            <Tab.Pane eventKey={member.id}>
                              <InputGroup className={props.className}>
                                <InputGroup.Prepend>
                                  <span className="mr-2" style={{
                                    width: "38px",//"calc(1.5em + 1rem + 8px)",
                                    height: "38px",//"calc(1.5em + 1rem + 8px)",
                                    backgroundImage: `url(${getIconForSlot(member, dataContext)})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "50% 50%"
                                  }}/>
                                </InputGroup.Prepend>

                                <Form.Control as="select" onChange={e => setItem(e.target.value)} disabled={member.item.isLocked}>
                                  <option value="">{`<Empty>`}</option>

                                  {getItemsForSlot(member, dataContext).map(item =>
                                    <option value={item.id} selected={item.id === member.item.id} disabled={item.isLocked}>{item.name}</option>
                                  )}
                                </Form.Control>
                              </InputGroup>
                            </Tab.Pane>
                          </Tab.Content>
                        </Card.Body>
                        <Card.Footer className="p-0">
                          <Table borderless size="sm" className="mb-0">
                            <thead>
                              <tr style={{borderBottom: "1px solid var(--gray-dark)"}}>
                                <th colSpan="2" style={{backgroundColor: "var(--gray)"}}>Stats</th>
                              </tr>
                            </thead>
                            <tbody>
                              {calculateMemberStats(member, team, playerContext, dataContext).map(stat =>
                                <tr style={{borderBottom: "1px solid var(--gray)"}}>
                                  <th className="bg-dark">{stat.name}</th>
                                  <td>{formatStat(stat)}</td>
                                </tr>
                              )}
                            </tbody>
                            <tbody>
                              <tr>
                                <th colSpan="2" style={{backgroundColor: "var(--gray)"}}>Skills</th>
                              </tr>
                            </tbody>
                            <tbody>
                              {member.item.skills.map(skill =>
                                <>
                                <tr>
                                  <th colSpan="2">{skill.name}</th>
                                </tr>
                                {skill.stats.map(stat =>
                                  <tr>
                                    <th className="bg-dark">{stat.name}</th>
                                    <td>{stat.value}</td>
                                  </tr>
                                )}
                                </>
                              )}
                            </tbody>
                          </Table>
                        </Card.Footer>
                      </Tab.Container>
                    </Card>
                  </Col>
                )}
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </>
  );
}

const BreakpointViewer = ({...props}) => {
  return (
    <Container fluid className="bg-info">
      <div className="d-block d-sm-none">Breakpoint: XS</div>
      <div className="d-none d-sm-block d-md-none">Breakpoint: SM</div>
      <div className="d-none d-md-block d-lg-none">Breakpoint: MD</div>
      <div className="d-none d-lg-block d-xl-none">Breakpoint: LG</div>
      <div className="d-none d-xl-block">Breakpoint: XL</div>
    </Container>
  );
}

const getItemsForSlot = (slot, dataContext) =>
  Object
    .entries(dataContext.items)
    .filter(([itemId, item]) => item.type === slot.itemType)
    .map(([itemId, item]) => ({
      id: itemId,
      ...item
    }));