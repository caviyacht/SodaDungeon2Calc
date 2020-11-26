import React, { useState } from "react";
import { Collapse, Table } from "react-bootstrap";

export default ({item, shouldAggregate, ...props}) => {
  const [open, setOpen] = useState(false);

  const stats = item.stats;

  //const stats = shouldAggregate
    //? getAggregatedStats(item)
    //: item.stats;

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

const getAggregatedStats = (item) => {
  const childStats = [].concat(...item.slots.map(slot => getAggregatedStats(slot.item)));

  const aggregatedStats = childStats.reduce((result, stat) => {
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
  }, item.stats.reduce((result, stat) => {
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