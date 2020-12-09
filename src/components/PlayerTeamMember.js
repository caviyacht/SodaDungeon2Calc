import React, { useState } from "react";
import { Badge, Card, Collapse, Form, InputGroup, Nav, Tab, Table } from "react-bootstrap";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { entitiesOfTypeSelector } from "../selectors/entitiesOfTypeSelector";
import { equipmentSlotSlotSelector } from "../selectors/equipmentSlotSlotSelector";
import { memberEquipmentSlotSelector } from "../selectors/memberEquipmentSlotSelector";
import { memberSkillsSelector } from "../selectors/memberSkillsSelector";
import { memberStatsSelector } from "../selectors/memberStatsSelector";
import { playerTeamMemberSelector } from "../selectors/playerTeamMemberSelector";
import { formatStat } from "../utils";

export default ({ member }) => {
  return (
    <Card className="custom-card">
      <Tab.Container defaultActiveKey={member.id}>
        <Card.Header className="bg-transparent">
          <Nav justify variant="tabs">
            <SlotNavItem slot={member} />

            {Object.entries(member.slots).map(([_, slot]) =>
              <SlotNavItem key={slot.id} slot={slot} />
            )}
          </Nav>
        </Card.Header>

        <Card.Body>
          <Tab.Content>
            <Tab.Pane eventKey={member.id}>
              <MemberSlot member={member} />
            </Tab.Pane>

            {Object.entries(member.slots).map(([_, equipmentSlot]) =>
              <Tab.Pane key={equipmentSlot.id} eventKey={equipmentSlot.id}>
                <MemberEquipmentSlot member={member} equipmentSlot={equipmentSlot} />

                {Object.entries(equipmentSlot.slots).map(([_, slot]) =>
                  <MemberEquipmentSlotSlot
                    key={slot.id}
                    member={member}
                    equipmentSlot={equipmentSlot}
                    slot={slot} 
                    className="pt-2" />
                )}
              </Tab.Pane>
            )}
          </Tab.Content>
        </Card.Body>

        <Card.Footer className="p-0">
          <Stats member={member} />
        </Card.Footer>
      </Tab.Container>
    </Card>
  );
};

const MemberEquipmentSlotSlot = ({ member, equipmentSlot, slot, ...props }) => {
  const setTeamMemberEquipmentSlotSlot = useSetRecoilState(equipmentSlotSlotSelector({
    memberName: member.name,
    equipmentSlotName: equipmentSlot.name,
    slotName: slot.name
  }));

  const handleSetTeamMemberEquipmentSlotSlot = ({ target: { value } }) => {
    setTeamMemberEquipmentSlotSlot(value);
  };

  return (
    <SlotItemSelect 
    slot={slot} 
    onChange={handleSetTeamMemberEquipmentSlotSlot}
    className={props.className} />
  );
};

const MemberEquipmentSlot = ({ member, equipmentSlot }) => {
  const setTeamMemberEquipmentSlot = useSetRecoilState(memberEquipmentSlotSelector({
    memberName: member.name,
    equipmentSlotName: equipmentSlot.name
  }));

  const handleSetTeamMemberEquipmentSlot = ({ target: { value } }) => {
    setTeamMemberEquipmentSlot(value);
  };

  return (
    <SlotItemSelect 
    slot={equipmentSlot} 
    onChange={handleSetTeamMemberEquipmentSlot}
    isDisabled={member.value.subtype === "special" && equipmentSlot.valueType === "weapon"} />
  );
};

const MemberSlot = ({ member }) => {
  const setTeamMember = useSetRecoilState(playerTeamMemberSelector(member.name));

  const handleSetTeamMember = ({ target: { value } }) => {
    setTeamMember(value);
  };

  return (
    <SlotItemSelect slot={member} onChange={handleSetTeamMember} />
  );
};

const Image = ({ src, size }) => {
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
};

const SlotNavItem = ({ slot }) => {
  return (
    <Nav.Item>
      <Nav.Link eventKey={slot.id} className="px-0 pb-1">
        <Image src={slot.value.image || slot.image } size="38px" />
      </Nav.Link>
    </Nav.Item>
  );
};

const SlotItemSelect = ({ slot, onChange, isDisabled, ...props }) => {
  const entities = useRecoilValue(entitiesOfTypeSelector(slot.valueType));

  return (
    <InputGroup className={props.className}>
      <InputGroup.Prepend className="mr-2">
        <Image src={slot.image} size="38px" />
      </InputGroup.Prepend>

      <Form.Control 
        as="select" 
        defaultValue={slot.value.id}
        onChange={onChange} 
        disabled={isDisabled}>

        <option value="">None</option>

        {entities.map(entity =>
          <option 
            key={entity.id}
            value={entity.id} 
            disabled={entity.type !== "character" && entity.subtype === "special"}>
            
            {entity.displayName}
          </option>
        )}
      </Form.Control>
    </InputGroup>
  );
};

const Stats = ({ member }) => {
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

  const stats = useRecoilValue(memberStatsSelector(member.name));
  const skills = useRecoilValue(memberSkillsSelector(member.name));

  return (
    <Table borderless size="sm" className="mb-0">
      <thead>
        <tr 
          style={{
            //backgroundColor: "var(--gray)",
            borderBottom: "1px solid var(--gray-dark)"
          }}
          onClick={handleSetOpen("stats")}>

          <th>
            Stats <Badge variant="info" className="ml-2">{Object.keys(stats).length}</Badge>
          </th>

          <th className="text-right">
            {open.stats ? "-" : "+"}
          </th>
        </tr>
      </thead>

      <Collapse in={open.stats}>
        <tbody>
          {Object.entries(stats).map(([_, stat]) =>
            <tr key={stat.id} style={{borderBottom: "1px solid var(--gray)"}}>
              <th className="bg-dark">
                {stat.displayName}
                {stat.scope === "team" && 
                  <Badge variant="info" className="ml-2">Team</Badge>
                }
              </th>
              <td className="text-right">{formatStat(stat)}</td>
            </tr>
          )}
        </tbody>
      </Collapse>

      {member.valueType === "character" &&
        <>
          <tbody>
            <tr 
              style={{
                //backgroundColor: "var(--gray)",
                //borderBottom: "1px solid var(--gray-dark)"
              }}
              onClick={handleSetOpen("skills")}>

              <th>
                Skills <Badge variant="info" className="ml-2">{Object.keys(member.skills).length}</Badge>
              </th>
              <th className="text-right">
                {open.skills ? "-" : "+"}
              </th>
            </tr>
          </tbody>

          <Collapse in={open.skills}>
            <tbody>
              {Object.entries(skills).map(([_, skill]) =>
                <React.Fragment key={skill.id}>
                  <tr style={{backgroundColor: "var(--gray-dark)"}}>
                    <th colSpan="2">
                      {skill.displayName}
                      <Badge variant="info" className="ml-2">{skill.category}</Badge>
                    </th>
                  </tr>
                  {Object.entries(skill.stats).map(([_, stat]) =>
                    <tr key={stat.id} style={{borderBottom: "1px solid var(--gray)"}}>
                      <th className="bg-dark">{stat.displayName}</th>
                      <td className="text-right">{formatStat(stat)}</td>
                    </tr>
                  )}
                </React.Fragment>
              )}
            </tbody>
          </Collapse>
        </>
      }
    </Table>
  );
};
