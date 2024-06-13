import React, { useState } from 'react';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import '../CSS/LocationSelector.css';

interface LocationSelectorProps {
  onLocationChange: (building: string, floor: string, department: string) => void;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({ onLocationChange }) => {
  const buildings = [
    { name: 'ยันฮี', floors: ['ใต้ดิน', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] },
    { name: 'Inter1', floors: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'] },
    { name: 'Inter2', floors: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] },
    { name: 'Inter3', floors: ['ใต้ดิน', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'] },
  ];

  const departments = [
    { id_dep: 1, dep_name: 'พัฒนาโปรแกรม' },
    { id_dep: 2, dep_name: 'ซ่อมบำรุงอาคาร' },
    { id_dep: 3, dep_name: 'ซ่อมบำรุงคอมพิวเตอร์' }
  ];

  const [building, setBuilding] = useState<string>('');
  const [floor, setFloor] = useState<string>('');
  const [department, setDepartment] = useState<string>('');

  const handleBuildingChange = (e: DropdownChangeEvent) => {
    setBuilding(e.value);
    setFloor('');
    onLocationChange(e.value, '', department);
  };

  const handleFloorChange = (e: DropdownChangeEvent) => {
    setFloor(e.value);
    onLocationChange(building, e.value, department);
  };

  const handleDepartmentChange = (e: DropdownChangeEvent) => {
    setDepartment(e.value);
    onLocationChange(building, floor, e.value);
  };

  const selectedBuilding = buildings.find(b => b.name === building);

  return (
    <div className="location-selector">
      <label>
        ตึก:
        <br />
        <Dropdown
          value={building}
          options={buildings.map(b => ({ label: b.name, value: b.name }))}
          onChange={handleBuildingChange}
          placeholder="เลือกตึก"
          className="dropdown-half-width"
        />
      </label>
      <label>
        ชั้น:
        <br  />
        <Dropdown
          value={floor}
          options={selectedBuilding ? selectedBuilding.floors.map(f => ({ label: f, value: f })) : []}
          onChange={handleFloorChange}
          placeholder="เลือกชั้น"
          className="dropdown-half-width"
          disabled={!selectedBuilding}
        />
      </label>
      <label>
        แผนก:
        <br  />
        <Dropdown
          value={department}
          options={departments.map(z => ({ label: z.dep_name, value: z.dep_name }))}
          onChange={handleDepartmentChange}
          placeholder="เลือกแผนก"
          className="dropdown-half-width"
        />
      </label>
    </div>
  );
};

export default LocationSelector;
