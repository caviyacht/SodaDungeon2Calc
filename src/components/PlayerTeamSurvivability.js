import React from "react";
import { Card, Col, Nav, Row, Tab, Table } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { memberStatsSelector } from "../selectors/memberStatsSelector";
import { playerFloorSelector } from "../selectors/playerFloorSelector";
import { playerTeamSelector } from "../selectors/playerTeamSelector";
import { formatStat } from "../utils";

export default () => {
  const team = useRecoilValue(playerTeamSelector);

  if (Object.entries(team.slots).length === 0) {
    return <></>;
  }

  const characters = Object.entries(team.slots).filter(([name, slot]) => slot.valueType === "character");
  const firstCharacter = characters[0] ? characters[0][1] : {};

  return (
    <Row>
      <Col xs={12} lg={6}>
        <Card className="custom-card">
          <Tab.Container defaultActiveKey={firstCharacter.id}>
            <Card.Header className="bg-transparent">
              <Nav justify variant="tabs">
                {characters.map(([name, slot]) =>
                  <SlotNavItem key={slot.id} slot={slot} />
                )}
              </Nav>
            </Card.Header>

            <Card.Body>
              <Tab.Content>
                {characters.map(([name, slot]) =>
                  <Tab.Pane key={slot.id} eventKey={slot.id}>
                    <Survivability member={slot} />
                  </Tab.Pane>
                )}
              </Tab.Content>
            </Card.Body>
          </Tab.Container>
        </Card>
      </Col>
    </Row>
  )
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

const Survivability = ({ member }) => {
  const stats = useRecoilValue(memberStatsSelector(member.name));

  const showBackAtk = !hasBackAtkBonusPrevention(stats);
  const showBurn = !hasBurnPrevention(stats);

  return (
    <Table borderless size="sm" className="mb-0" style={{backgroundColor: "rgba(255,255,255,.075)"}}>
      <thead>
        <tr style={{borderBottom: "1px solid var(--gray)"}}>
          <th></th>
          <th className="text-right">Dmg %</th>
          {showBackAtk && <th className="text-right">Back Dmg %</th>}
        </tr>
      </thead>
      <tbody>
        <SurvivabilityRow title="Attack" type="strike" stats={stats} showBackAtk={showBackAtk} />
        <SurvivabilityRow title="Poison" type="psn" stats={stats} showBackAtk={showBackAtk} />
        {showBurn &&
          <SurvivabilityRow title="Burn" type="burn" stats={stats} showBackAtk={showBackAtk} />
        }
        <SurvivabilityRow title="Dark Slash" type="dark_slash" stats={stats} showBackAtk={showBackAtk}  />
      </tbody>
    </Table>
  );
};

const SurvivabilityRow = ({stats, title, type, showBackAtk}) => {
  const floor = useRecoilValue(playerFloorSelector);
  const value = calculateAttackDamagePercent(type, false, stats, floor);
  const backAtkValue = calculateAttackDamagePercent(type, true, stats, floor);

  return (
    <tr style={{borderBottom: "1px solid var(--gray)"}}>
      <th className="bg-dark">{title}</th>
      <td className="text-right">
        {formatStat({ // TODO: Abuse of the method.
          valueType: "percent",
          value
        })}
      </td>
      {showBackAtk &&
        <td className="text-right">
          {formatStat({ // TODO: Abuse of the method.
            valueType: "percent",
            value: backAtkValue
          })}
        </td>
      }
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