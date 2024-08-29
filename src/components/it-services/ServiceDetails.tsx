import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

// Mock data - for demonstration purposes only
const serviceData = {
  IT67001: {
    name: 'โครงการลด 50%(โปรแกรมลงชื่อเจ้าหน้าที่ที่ร่วมโครงการ)',
    description: 'รายละเอียดของโครงการลด 50%',
    assignee: 'thaweep',
    datecreated: '2024-10-01',
    status: 'Request',
  },
  IT67002: {
    name: 'โครงการปรับปรุงระบบ IT',
    description: 'รายละเอียดของโครงการปรับปรุงระบบ IT',
    assignee: 'somchai',
    datecreated: '2024-10-02',
    status: 'IT Admin',
  },
  // Add more data as needed
};

export default function ServiceDetails() {
  const { id } = useParams<{ id: string }>(); // Extract the id from the URL
  const navigate = useNavigate();

  const service = serviceData[id];

  if (!service) {
    return (
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Service Not Found
          </Typography>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
        
      <Box sx={{ my: 4 }}>
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{ mb: 2 }}
        >
          Back
        </Button>
        <Typography variant="h4" component="h1" gutterBottom>
          {service.name}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Status: {service.status}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Assignee: {service.assignee}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Date Created: {service.datecreated}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Description: {service.description}
        </Typography>
      </Box>
    </Container>
  );
}
