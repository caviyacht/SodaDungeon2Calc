import React, { useState } from "react";
import { Collapse, Table } from "react-bootstrap";
import { useDataContext } from "../contexts/DataContext";

export default ({id, item, ...props}) => {
  const dataContext = useDataContext();
  const stats = getItemStats(item, dataContext);
  const [open, setOpen] = useState(false);

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

const formatStat = (stat) => {
  switch (stat.valueType) {
    case "percent":
      return `${(100 * stat.value).toFixed(2)}%`;

    default: return `${stat.value}`;
  }
};

const getItemStats = (item, dataContext) =>
  Object
    .keys(item.stats || {})
    .map(id => ({
      id,
      ...dataContext.types.stats[id],
      value: item.stats[id],
      ...item.stats[id]
    }));