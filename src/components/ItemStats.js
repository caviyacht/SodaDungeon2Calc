import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import DataContext from "../contexts/DataContext";

export default ({id, item, ...props}) => {
  const context = useContext(DataContext);
  const stats = getItemStats(item, context);

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
        <tr className="table-dark clickable" data-toggle="collapse" data-target={`#${id}-${item.itemId}-stats-team`}>
          <th colspan="2">Other Stats</th>
        </tr>
      </tbody>
      <tbody className="collapse" id={`${id}-${item.itemId}-stats-team`}>
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
    </Table>
  );
}

const formatStat = (stat) => {
  switch (stat.valueType) {
    case "percent":
      return `${(100 * stat.value).toFixed(2)}%`;

    default: return `${stat.value}`;
  }
};

const getItemStats = (item, context) =>
  Object
    .keys(item.stats || {})
    .map(id => ({
      id,
      ...context.types.stats[id],
      value: item.stats[id],
      ...item.stats[id]
    }));