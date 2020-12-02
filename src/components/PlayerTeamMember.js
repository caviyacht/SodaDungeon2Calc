import React, { useState } from "react";
import { Badge, Card, Collapse, Form, InputGroup, Nav, Tab, Table } from "react-bootstrap";
import { useDataContext } from "../contexts/DataContext";
import { usePlayerContext } from "../contexts/PlayerContext";
import { getIconForSlot, getItemsForSlot, calculateMemberStats, formatStat, flattenMemberSkills } from "../utils";

export default ({member, team}) => {
  const playerContext = usePlayerContext();

  const setTeamMember = itemId => playerContext.dispatch({
    type: "SET_TEAM_MEMBER",
    payload: { teamId: team.id, memberId: member.id, itemId }
  });

  const setTeamMemberEquipmentSlot = equipmentSlotId => itemId => playerContext.dispatch({
    type: "SET_TEAM_MEMBER_EQUIPMENT_SLOT",
    payload: { teamId: team.id, memberId: member.id, equipmentSlotId, itemId }
  });

  const setTeamMemberEquipmentSlotSlot = (equipmentSlotId, slotId) => itemId => playerContext.dispatch({
    type: "SET_TEAM_MEMBER_EQUIPMENT_SLOT_SLOT",
    payload: { teamId: team.id, memberId: member.id, equipmentSlotId, slotId, itemId }
  });

  return (
    <Card className="team-member">
      <Tab.Container defaultActiveKey={member.id}>
        <Card.Header className="bg-transparent">
          <Nav justify variant="tabs">
            <SlotNavItem slot={member} />

            {member.equipmentSlots.map(equipmentSlot =>
              <SlotNavItem slot={equipmentSlot} />
            )}
          </Nav>
        </Card.Header>

        <Card.Body>
          <Tab.Content>
            <Tab.Pane eventKey={member.id}>
              <SlotItemSelect slot={member} onSelect={setTeamMember} />
            </Tab.Pane>

            {member.equipmentSlots.map(equipmentSlot =>
              <Tab.Pane eventKey={equipmentSlot.id}>
                <SlotItemSelect 
                  slot={equipmentSlot} 
                  onSelect={setTeamMemberEquipmentSlot(equipmentSlot.id)} />

                {equipmentSlot.slots.map(slot =>
                  <SlotItemSelect 
                    slot={slot} 
                    onSelect={setTeamMemberEquipmentSlotSlot(equipmentSlot.id, slot.id)} 
                    className="mt-2" />
                )}
              </Tab.Pane>
            )}
          </Tab.Content>
        </Card.Body>

        <Card.Footer className="p-0">
          <Stats member={member} team={team} />
        </Card.Footer>
      </Tab.Container>
    </Card>
  );
}

const Image = ({src, size}) => {
  return(
    <span className="d-inline-block align-top" style={{
        width: size,
        height: size,
        backgroundImage: `url(${src})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%"
      }}/>
  );
}

const SlotNavItem = ({slot}) => {
  const dataContext = useDataContext();

  return (
    <Nav.Item>
      <Nav.Link eventKey={slot.id} className="px-0 pb-1">
        <Image src={slot.item.image || getIconForSlot(slot, dataContext)} size="38px" />
      </Nav.Link>
    </Nav.Item>
  );
}

const ItemSelect = ({items, selectedItem, onSelect}) => {
  return (
    <Form.Control as="select" onChange={e => onSelect(e.target.value)} disabled={selectedItem.isLocked}>
      <option value="">None</option>

      {items.map(item =>
        <option value={item.id} selected={item.id === selectedItem.id} disabled={item.isLocked}>{item.name}</option>
      )}
    </Form.Control>
  );
}

const SlotItemSelect = ({slot, onSelect, ...props}) => {
  const dataContext = useDataContext();

  return (
    <InputGroup className={props.className}>
      <InputGroup.Prepend className="mr-2">
        <Image src={getIconForSlot(slot, dataContext)} size="38px" />
      </InputGroup.Prepend>

      <ItemSelect 
        items={getItemsForSlot(slot, dataContext)} 
        selectedItem={slot.item} 
        onSelect={onSelect} />
    </InputGroup>
  );
}

const Stats = ({member, team}) => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();
  const [open, setOpen] = useState({
    stats: false,
    skills: false
  });

  const handleSetOpen = type => () => {
    setOpen({
      ...open,
      [type]: !open[type]
    })
  };

  const stats = calculateMemberStats(member, team, playerContext, dataContext);
  const skills = flattenMemberSkills(member);

  return (
    <Table borderless size="sm" className="mb-0">
      <thead>
        <tr 
          style={{
            backgroundColor: "var(--gray)",
            borderBottom: "1px solid var(--gray-dark)"
          }}
          onClick={handleSetOpen("stats")}>

          <th>Stats <Badge variant="info">{stats.length}</Badge></th>
          <th class="text-right">
            <Badge variant="primary">{open.stats ? "Hide" : "Show"}</Badge>
          </th>
        </tr>
      </thead>
      <Collapse in={open.stats}>
        <tbody>
          {stats.map(stat =>
            <tr style={{borderBottom: "1px solid var(--gray)"}}>
              <th className="bg-dark">
                {stat.name}
                {stat.scope === "team" && 
                  <Badge variant="info" className="ml-2">Team</Badge>
                }
              </th>
              <td className="text-right">{formatStat(stat)}</td>
            </tr>
          )}
        </tbody>
      </Collapse>
      {member.itemType === "character" &&
        <>
          <tbody>
            <tr 
              style={{
                backgroundColor: "var(--gray)",
                borderBottom: "1px solid var(--gray-dark)"
              }}
              onClick={handleSetOpen("skills")}>

              <th>Skills <Badge variant="info">{skills.length}</Badge></th>
              <th class="text-right">
                <Badge variant="primary">{open.skills ? "Hide" : "Show"}</Badge>
              </th>
            </tr>
          </tbody>
          <Collapse in={open.skills}>
            <tbody>
              {skills.map(skill =>
                <>
                <tr style={{backgroundColor: "var(--gray-dark)"}}>
                  <th colSpan="2">{skill.name}</th>
                </tr>
                {skill.stats.map(stat =>
                  <tr style={{borderBottom: "1px solid var(--gray)"}}>
                    <th className="bg-dark">{stat.name}</th>
                    <td className="text-right">{formatStat(stat)}</td>
                  </tr>
                )}
                </>
              )}
            </tbody>
          </Collapse>
        </>
      }
    </Table>
  );
}
