import React, { useState } from 'react';
import '../CSS/RequestForm.css';

interface RequestFormProps {
  onSubmit: (description: string) => void;
}

const RequestForm: React.FC<RequestFormProps> = ({ onSubmit }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(description);
    setDescription('');
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="กรอกรายละเอียดอาการเสียเบื้องต้น / สถานที่ให้ช่างไปซ่อม"
            rows={5}
          />
        </label>
      </div>
      <button type="submit">Submit Request</button>
    </form>
  );
};

export default RequestForm;
