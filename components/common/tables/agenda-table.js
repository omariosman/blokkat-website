import React from 'react';

const AgendaTable = ({ agenda }) => {
  const agendaItems = agenda
    .trim()
    .split("\n")
    .map((item) => {
      const [time, ...details] = item.split("|");
      return { time: time.trim(), details: details.join("|").trim() };
    });

  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th style={{ whiteSpace: "nowrap" }}>Time</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {agendaItems.map((item, index) => (
          <tr key={index}>
            <td style={{ whiteSpace: "nowrap", minWidth: "80px" }}>{item.time}</td>
            <td>{item.details}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AgendaTable;
