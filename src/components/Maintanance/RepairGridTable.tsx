import React from 'react';

interface RepairRecord {
  id: number;
  description: string;
  building: string;
  floor: string;
}

interface RepairGridTableProps {
  records: RepairRecord[];
}

const RepairGridTable: React.FC<RepairGridTableProps> = ({ records }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Building</th>
          <th>Floor</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record) => (
          <tr key={record.id}>
            <td>{record.id}</td>
            <td>{record.description}</td>
            <td>{record.building}</td>
            <td>{record.floor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RepairGridTable;
