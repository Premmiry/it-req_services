import React, { useState } from 'react';
import RequestForm from '../Maintanance/RequestForm';
import LocationSelector from '../Maintanance/LocaltionSelector';
import RepairGridTable from '../Maintanance/RepairGridTable';
import '../CSS/Maintanance_Client.css';

interface RepairRecord {
  id: number;
  description: string;
  building: string;
  floor: string;
}

const Maintanance_Client: React.FC = () => {
  const [records, setRecords] = useState<RepairRecord[]>([]);
  const [building, setBuilding] = useState('');
  const [floor, setFloor] = useState('');

  const handleFormSubmit = (description: string) => {
    const newRecord = {
      id: records.length + 1,
      description,
      building,
      floor,
    };
    setRecords([...records, newRecord]);
  };

  const handleLocationChange = (newBuilding: string, newFloor: string) => {
    setBuilding(newBuilding);
    setFloor(newFloor);
  };

  return (
    <div className="maintanance-client">
    <div className="row">
      <div className="request-form">
        <RequestForm onSubmit={handleFormSubmit}  />
      </div>
      <div className="location-selector">
        <LocationSelector onLocationChange={handleLocationChange} />
      </div>
    </div>
    <div className="repair-grid-table">
      <RepairGridTable records={records} />
    </div>
  </div>
  );
};

export default Maintanance_Client;
