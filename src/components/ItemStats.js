import React from "react";
import { Table } from "react-bootstrap";
import { DataContext } from "../contexts/DataContext";

export default ({id, itemId, ...props}) => {
  return (
    <Table striped size="sm">
      <thead className="thead-dark">
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <DataContext.Consumer>
          {context =>
            getItemStats(itemId, context)
              .filter(stat => !stat.isOptional)
              .map(stat =>
                <tr>
                  <th className="table-secondary">{context.statTypes[stat.id].name}</th>
                  <td>{formatStat(stat, context)}</td>
                </tr>
              )
          }
        </DataContext.Consumer>
      </tbody>
      <tbody>
        <tr className="table-dark clickable" data-toggle="collapse" data-target={`#${id}-stats-other`}>
          <th colspan="2">Other Stats</th>
        </tr>
      </tbody>
      <tbody className="collapse" id={`${id}-stats-other`}>
        <DataContext.Consumer>
          {context =>
            getItemStats(itemId, context)
              .filter(stat => stat.isOptional)
              .map(stat =>
                <tr>
                  <th className="table-secondary">{context.statTypes[stat.id].name}</th>
                  <td>{formatStat(stat)}</td>
                </tr>
              )
          }
        </DataContext.Consumer>
      </tbody>
    </Table>
  );
}

const formatStat = (stat) => {
  switch (stat.valueType) {
    case "percentage":
      return `${(100 * stat.value).toFixed(2)}%`;

    default: return `${stat.value}`;
  }
};

const getItemStats = (id, context) =>
  Object
    .keys(context.items[id].stats)
    .map(statId => {
      let statType = getStatType(statId, context);
      let item = context.items[id];

      return {
        ...statType,
        value: item.stats[statId],
        isOptional: item.type === "accessory"
          ? false
          : statType.isOptional
      }
    });

const getStatType = (id, context) => ({id, ...context.statTypes[id]});