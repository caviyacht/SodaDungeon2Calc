import React from "react";
import { Table } from "react-bootstrap";

export default (props) => {
  return (
    <Table striped size="sm">
      <thead className="thead-dark">
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {getStats(props.item)
          .filter(stat => !props.data.statTypes[stat.id].isOptional)
          .map(stat =>
            <tr>
              <th className="table-secondary">{props.data.statTypes[stat.id].name}</th>
              <td>{formatStat(stat, props.data)}</td>
            </tr>
          )
        }
      </tbody>
      <tbody>
        <tr className="table-dark clickable" data-toggle="collapse" data-target={`#${props.item.id}-stats-other`}>
          <th colspan="2">Other Stats</th>
        </tr>
      </tbody>
      <tbody className="collapse" id={`${props.item.id}-stats-other`}>
        {getStats(props.item)
          .filter(stat => props.data.statTypes[stat.id].isOptional)
          .map(stat =>
            <tr>
              <th className="table-secondary">{props.data.statTypes[stat.id].name}</th>
              <td>{formatStat(stat, props.data)}</td>
            </tr>
          )
        }
      </tbody>
    </Table>
  );
}

const formatStat = (stat, state) => {
  switch (state.statTypes[stat.id].valueType) {
    case "percentage":
      return `${(100 * stat.value).toFixed(2)}%`;

    default: return stat.value;
  }
};

const getStats = (item) =>
  Object
    .keys(item.stats)
    .map(id => ({id, value: item.stats[id]}));