import React, { useState } from "react";
import { Badge, Card, Collapse, Form, InputGroup, Nav, Tab, Table } from "react-bootstrap";
import { useDataContext } from "../contexts/DataContext";
import { usePlayerContext } from "../contexts/NewPlayerContext";
import { 
  calculateMemberStats, 
  formatStat, 
  flattenMemberSkills, 
  loadStat,
  map } from "../utils";

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

            {map(member.slots, ([_, slot]) =>
              <SlotNavItem slot={slot} />
            )}
          </Nav>
        </Card.Header>

        <Card.Body>
          <Tab.Content>
            <Tab.Pane eventKey={member.id}>
              <SlotItemSelect slot={member} onSelect={setTeamMember} />
            </Tab.Pane>

            {map(member.slots, ([_, equipmentSlot]) =>
              <Tab.Pane eventKey={equipmentSlot.id}>
                <SlotItemSelect 
                  slot={equipmentSlot} 
                  onSelect={setTeamMemberEquipmentSlot(equipmentSlot.id)} />

                {map(equipmentSlot.slots, ([_, slot]) =>
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
          {/*<Stats member={member} team={team} />*/}
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
  return (
    <Nav.Item>
      <Nav.Link eventKey={slot.id} className="px-0 pb-1">
        <Image src={slot.value.image || slot.image } size="38px" />
      </Nav.Link>
    </Nav.Item>
  );
}

const SlotItemSelect = ({slot, onSelect, ...props}) => {
  const dataContext = useDataContext();

  return (
    <InputGroup className={props.className}>
      <InputGroup.Prepend className="mr-2">
        <Image src={slot.image} size="38px" />
      </InputGroup.Prepend>

      <Form.Control 
        as="select" 
        onChange={e => onSelect(e.target.value)} 
        disabled={slot.value.subtype === "special"}>

        <option value="">None</option>

        {map(dataContext.getEntitiesOfType(slot.valueType), ([_, entity]) =>
          <option 
            value={entity.id} 
            selected={entity.id === slot.value.id} 
            disabled={entity.subtype === "special"}>
            
            {entity.name}
          </option>
        )}
      </Form.Control>
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

          <th>Stats <Badge variant="info" className="ml-2">{stats.length}</Badge></th>
          <th class="text-right">
          {open.stats ? "-" : "+"}
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

              <th>Skills <Badge variant="info" className="ml-2">{skills.length}</Badge></th>
              <th class="text-right">
                {open.skills ? "-" : "+"}
              </th>
            </tr>
          </tbody>
          <Collapse in={open.skills}>
            <tbody>
              {skills.map(skill =>
                <>
                <tr style={{backgroundColor: "var(--gray-dark)"}}>
                  <th colSpan="2">
                    {skill.name}
                    <Badge variant="info" className="ml-2">{skill.category}</Badge>
                  </th>
                </tr>
                {calculateSkillStats(stats, skill, dataContext).map(stat =>
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

// TODO: Possibly do this during load?
const calculateSkillStats = (memberStats, skill, dataContext) => {
  const memberAtkTotal = memberStats.filter(stat => stat.id === "atk_total")[0];
  const memberBoost = memberStats.filter(stat => stat.id === `${skill.category}_boost`)[0];
  const skillAtkMultiplier = skill.stats.filter(stat => stat.id === "atk_multiplier")[0];
  
  if (!skillAtkMultiplier) {
    return skill.stats;
  }

  return [].concat(
    {
      ...loadStat("atk_total", dataContext),
      value: Math.floor(
        memberAtkTotal.value 
          * (1 + memberBoost.value) 
          * (skillAtkMultiplier || { value: 1 }).value
      )
    },
    ...skill.stats
  );
}