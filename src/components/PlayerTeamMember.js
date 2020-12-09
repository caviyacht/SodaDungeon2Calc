import React, { useState } from "react";
import { Badge, Card, Col, Collapse, Form, InputGroup, Nav, Row, Tab, Table } from "react-bootstrap";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { entitiesOfTypeSelector } from "../selectors/entitiesOfTypeSelector";
import { equipmentSlotSlotSelector } from "../selectors/equipmentSlotSlotSelector";
import { memberEquipmentSlotSelector } from "../selectors/memberEquipmentSlotSelector";
import { memberSkillsSelector } from "../selectors/memberSkillsSelector";
import { memberStatsSelector } from "../selectors/memberStatsSelector";
import { playerFloorSelector } from "../selectors/playerFloorSelector";
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

const Image = ({ src, size}) => {
  return(
    <span 
      className="d-inline-block"
      style={{
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
  const isEquipmentWithSlots = slot.subtype === "equipment" 
    && Object.entries(slot.slots).length > 0;

  return (
    <Nav.Item>
      <Nav.Link eventKey={slot.id} className="px-0 pb-1" style={{fontSize: "0"}}>
        {!isEquipmentWithSlots &&
          <Image src={slot.value.image || slot.image } size="38px" />
        }

        {isEquipmentWithSlots &&
          <Row noGutters className="justify-content-around px-1">
            <Col>
              <Image src={slot.value.image || slot.image } size="38px" />
            </Col>

            <Col>
              <Row noGutters xs={1}>
                {Object.entries(slot.slots).map(([name, slot]) =>
                  <Col>
                    <Image block src={slot.value.image || slot.image} size="19px" />
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        }
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
    survivability: false,
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
          onClick={handleSetOpen("survivability")}>

          <th>
            Survivability
          </th>

          <th className="text-right">
            {open.survivability ? "-" : "+"}
          </th>
        </tr>
      </thead>

      <Collapse in={open.survivability}>
        <tbody>
          <SurvivabilityRow title="Attack" type="strike" isBackAttack={false} stats={stats} />
          <SurvivabilityRow title="Poison (3 ticks)" type="psn" isBackAttack={false} stats={stats} />
          {!hasBurnPrevention(stats) &&
            <SurvivabilityRow title="Burn (3 ticks)" type="burn" isBackAttack={false} stats={stats} />
          }
          <SurvivabilityRow title="Dark Slash" type="dark_slash" isBackAttack={false} stats={stats} />
          {!hasBackAtkBonusPrevention(stats) &&
            <SurvivabilityRow title="Back Attack" type="strike" isBackAttack={true} stats={stats} />
          }
          {!hasBackAtkBonusPrevention(stats) &&
            <SurvivabilityRow title="Poison Back Attack" type="psn" isBackAttack={true} stats={stats} />
          }
          {(!hasBurnPrevention(stats) && !hasBackAtkBonusPrevention(stats)) &&
            <SurvivabilityRow title="Burn Back Attack" type="burn" isBackAttack={true} stats={stats} />
          }
          {!hasBackAtkBonusPrevention(stats) &&
            <SurvivabilityRow title="Dark Slash Back Attack" type="dark_slash" isBackAttack={true} stats={stats} />
          }
        </tbody>
      </Collapse>

      <tbody>
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
      </tbody>

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

// TODO: This is entirely copied from `PlayerTeamSurvivabiliity`
const SurvivabilityRow = ({stats, title, type, isBackAttack}) => {
  const floor = useRecoilValue(playerFloorSelector);
  const value = calculateAttackDamagePercent(type, isBackAttack, stats, floor);

  return (
    <tr style={{borderBottom: "1px solid var(--gray)"}}>
      <th className="bg-dark">{title}</th>
      <td className="text-right">
        {formatStat({ // TODO: Abuse of the method.
          valueType: "percent",
          value
        })}
      </td>
    </tr>
  );
};

const getStatOrDefault = (name, stats, defaultValue) => {
  const stat = stats[name];

  return stat
    ? stat.value
    : defaultValue;
};

const hasBackAtkBonusPrevention = stats => {
  return getStatOrDefault("prevents_back_atk_bonus", stats, false);
};

const hasBurnPrevention = stats => {
  return getStatOrDefault("prevents_burn", stats, false);
};

const calculateAttackDamagePercent = (type, isBackAttack, stats, floor) => {
  // TODO: Remove this logic later.
  const preventsBackAtkBonus = hasBackAtkBonusPrevention(stats);
  const preventsBurn = hasBurnPrevention(stats);

  // TODO: I hate this.
  const enemyAttack = 10.1 + Math.floor(
    floor 
      * (type === "dark_slash" ? 0.156 : 0.12) 
      * (isBackAttack && !preventsBackAtkBonus ? 1.5 : 1.0));
      
  const dmgReduction = getStatOrDefault("dmg_reduction", stats, 0.00);
  const hpTotal = getStatOrDefault("hp_total", stats, 1);

  let damagePercent = (enemyAttack * (1 - dmgReduction)) / hpTotal;

  if (type === "psn") {
    damagePercent += 3 * (Math.ceil(hpTotal * 0.1) / hpTotal);
  }

  if (type === "burn" && !preventsBurn) {
    damagePercent += (Math.ceil(hpTotal * 0.06) / hpTotal)
      + (Math.ceil(hpTotal * 0.06 * 2) / hpTotal)
      + (Math.ceil(hpTotal * 0.06 * 3) / hpTotal);
  }

  return damagePercent;
}