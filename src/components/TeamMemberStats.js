import React, { useState } from "react";
import { Collapse, Table } from "react-bootstrap";
import { useDataContext } from "../contexts/DataContext";
import { usePlayerContext } from "../contexts/PlayerContext";
import { loadRelics } from "../utils";

export default ({team, member}) => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();
  const [open, setOpen] = useState(false);

  const stats = getAggregatedStats(team, member, playerContext, dataContext);

  return (
    <Table striped size="sm">
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
              <th className="table-secondary">{stat.name}</th>
              <td>{formatStat(stat)}</td>
            </tr>
          )
        }
      </tbody>
      <tbody>
        <tr className="table-dark" onClick={() => setOpen(!open)}>
          <th colspan="2">Other Stats</th>
        </tr>
      </tbody>
      <Collapse in={open}>
        <tbody>
          {stats
            .filter(stat => stat.scope === "team")
            .map(stat =>
              <tr>
                <th className="table-secondary">{stat.name}</th>
                <td>{formatStat(stat)}</td>
              </tr>
            )
          }
        </tbody>
      </Collapse>
    </Table>
  );
}

const getAggregatedStats = (team, slot, playerContext, dataContext) => {
  let petsStats = [];
  let relicsStats = [];

  const childStats = [].concat(...(slot.equipmentSlots || slot.slots || []).map(slot => 
    getAggregatedStats(team, slot, playerContext, dataContext)));

  if (slot.itemType === "character") {
    petsStats = [].concat(...team.members.filter(member => member.itemType === "pet").map(slot => 
      getAggregatedStats(team, slot, playerContext, dataContext)));

    relicsStats = loadRelics(playerContext, dataContext)
      .filter(relic => {
        if (relic.level < 1) {
          return false;
        }
        
        if (relic.type === "character" && relic.id === slot.item.id) {
          return true;
        }

        return relic.type !== "character";
      }).map(relic => relic.stats);
  }

  const stats = petsStats.concat(...childStats, ...relicsStats);

  if (slot.itemType === "character") {
    console.log(stats);
  }

  const aggregatedStats = stats.reduce((result, stat) => {
    if (result[stat.id] && stat.valueType !== "boolean") {
      result[stat.id] = {
        ...result[stat.id],
        value: result[stat.id].value + stat.value
      };
    }
    else {
      result[stat.id] = {...stat};
    }

    return result;
  }, slot.item.stats.reduce((result, stat) => {
    const {id, ...statData} = stat;

    result[stat.id] = {...statData};

    return result;
  }, {}))

  return Object.keys(aggregatedStats).map(id => ({
    id,
    ...aggregatedStats[id]
  }));
}

const formatStat = (stat) => {
  switch (stat.valueType) {
    case "percent":
      return `${(100 * stat.value).toFixed(2)}%`;

    default: return `${stat.value}`;
  }
};