import React, { useState } from "react";
import { Col, Collapse, Row, Table } from "react-bootstrap";
import { useDataContext } from "../contexts/DataContext";
import { usePlayerContext } from "../contexts/PlayerContext";
import { loadRelics } from "../utils";

export default ({team, member}) => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();
  const [open, setOpen] = useState(false);

  const stats = calculateMemberStats(member, team, playerContext, dataContext);

console.log(member.name, stats);

  return (
    <Table striped size="sm" className="mb-0">
      <thead className="thead-dark">
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {stats
          .filter(stat => stat.scope !== "team")
          .map(stat =>
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
      <tbody>
        <tr className="table-dark" onClick={() => setOpen(!open)}>
          <th colspan="2">Team Stats</th>
        </tr>
      </tbody>
      <Collapse in={open}>
        <tbody>
          {stats
            .filter(stat => stat.scope === "team")
            .map(stat =>
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
    </Table>
  );
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

      return relic.scope !== "character";
    })
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

    default:
      return new Intl.NumberFormat(navigator.language).format(stat.value);
  }
};