import React, { useState } from "react";
import { Badge, Col, Collapse, Row, Table } from "react-bootstrap";
import { useDataContext } from "../contexts/DataContext";
import { usePlayerContext } from "../contexts/PlayerContext";
import { loadPlayerItem, loadRelics } from "../utils";

export default ({team, member}) => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();
  const [open, setOpen] = useState({
    character: false,
    team: false,
    skills: false
  });

  const handleSetOpen = type => () => {
    setOpen({
      ...open,
      [type]: !open[type]
    })
  };

  const stats = calculateMemberStats(member, team, playerContext, dataContext);
  const characterStats = stats.filter(stat => stat.scope !== "team");
  const teamStats = stats.filter(stat => stat.scope === "team");
  const skills = flattenMemberSkills(member);

  return (
    <Table borderless striped size="sm" className="mb-0" style={{width: "100.1%"}}>
      <thead className="thead-dark" onClick={handleSetOpen("character")}>
        <tr>
          <th>Character Stats <Badge variant="light">{characterStats.length}</Badge></th>
          <th className="text-right">{open.character ? "-" : "+"}</th>
        </tr>
      </thead>
      <Collapse in={open.character}>
        <tbody>
          {characterStats.map(stat =>
              <tr>
                {/* TODO: Figure out a better way */}
                <th className="table-secondary">
                  <Row noGutters>
                    <Col xs="auto">{stat.name}</Col>
                    <Col className="text-right">
                      {stat.sources.map(source =>
                        <img 
                          src={source.image || source.item.image} 
                          alt={source.name || source.item.name}
                          className="rounded ml-1"
                          style={{height: "22.4px"}} />
                      )}
                    </Col>
                  </Row>
                </th>
                <td className="text-right align-middle">{formatStat(stat)}</td>
              </tr>
            )
          }
        </tbody>
      </Collapse>
      <tbody className="border-top-0">
        <tr className="thead-dark" onClick={handleSetOpen("team")}>
          <th>Team Stats <Badge variant="light">{teamStats.length}</Badge></th>
          <th className="text-right">{open.team ? "-" : "+"}</th>
        </tr>
      </tbody>
      <Collapse in={open.team}>
        <tbody>
          {teamStats.map(stat =>
              <tr>
                <th className="table-secondary">
                  <Row>
                    <Col xs="auto">{stat.name}</Col>
                    <Col className="text-right">
                      {stat.sources.map(source =>
                        <img 
                          src={source.image || source.item.image} 
                          alt={source.name || source.item.name}
                          className="rounded ml-1"
                          style={{height: "22.4px"}} />
                      )}
                    </Col>
                  </Row>
                </th>
                <td className="text-right align-middle">{formatStat(stat)}</td>
              </tr>
            )
          }
        </tbody>
      </Collapse>
      <tbody className="border-top-0">
        <tr className="thead-dark" onClick={handleSetOpen("skills")}>
          <th>Character Skills <Badge variant="light">{skills.length}</Badge></th>
          <th className="text-right">{open.skills ? "-" : "+"}</th>
        </tr>
      </tbody>
      <Collapse in={open.skills}>
        <tbody>
          {skills.map(skill =>
            <>
              <tr>
                <th colSpan="2">
                  <img src={skill.image} alt={skill.name} className="mr-1" style={{height: "22.4px"}} />{skill.name}
                </th>
              </tr>
              {skill.stats.map(stat =>
                <tr>
                  <th className="table-secondary">{stat.name}</th>
                  <td className="text-right">{formatStat(stat)}</td>
                </tr>
              )}
            </>
          )}
        </tbody>
      </Collapse>
    </Table>
  );
}

const flattenMemberSkills = (member) => {
  return [].concat(...flattenMember(member).map(slot => slot.item.skills));
}

// TODO: Find a more generic way.
const flattenMember = (member) => {
  return [].concat(
    member,
    ...member.equipmentSlots,
    ...(member.equipmentSlots || []).map(equipmentSlot => equipmentSlot.slots)
  );
}

const calculateMemberStats = (member, team, playerContext, dataContext) => {
  const sources = [].concat(
    ...flattenMember(member),
    ...team.members.filter(member => member.itemType === "pet").map(pet => flattenMember(pet)),
    ...loadRelics(playerContext, dataContext).filter(relic => {
      if (relic.level < 1) {
        return false;
      }
      
      if (relic.scope === "character" && relic.id === member.item.id) {
        return true;
      }

      return relic.scope !== "character" && relic.scope !== "team";
    }),
    loadPlayerItem("kitchen", playerContext, dataContext)
  );

  const stats = sources.reduce((result, source) =>
    (source.stats || source.item.stats || []).reduce((_, stat) => {
      if (result[stat.id] && stat.valueType !== "boolean") {
        result[stat.id] = {
          ...result[stat.id],
          value: result[stat.id].value + stat.value,
          sources: [...result[stat.id].sources, source]
        };
      }
      else {
        result[stat.id] = {...stat, sources: [source]};
      }

      return result;
    }, result), {});

  return Object.entries(stats).map(([id, value]) => ({
    id,
    ...value
  }));
}

const formatStat = (stat) => {
  switch (stat.valueType) {
    case "percent":
      return new Intl.NumberFormat(navigator.language, {
        style: 'percent',
        maximumFractionDigits: 2
      }).format(stat.value);

    case "boolean":
      return stat.value.toString();

    case "multiplier":
      return `${stat.value}x`;

    default:
      return new Intl.NumberFormat(navigator.language).format(stat.value);
  }
};