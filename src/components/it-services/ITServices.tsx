import React, { useState } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Autocomplete from '@mui/joy/Autocomplete';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormLabel from '@mui/joy/FormLabel';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import IconButton from '@mui/joy/IconButton';
import SvgIcon from '@mui/joy/SvgIcon';
import Typography from '@mui/joy/Typography';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import Input from '@mui/joy/Input';
import Select, { SelectStaticProps, SelectOption } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import CloseRounded from '@mui/icons-material/CloseRounded';
import Textarea from '@mui/joy/Textarea';
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepButton from '@mui/joy/StepButton';
import StepIndicator from '@mui/joy/StepIndicator';
import Check from '@mui/icons-material/Check';
import Avatar from '@mui/joy/Avatar';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from 'react-router-dom';
import Switch from '@mui/joy/Switch';



import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';


const icon = (
  <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
    <svg>
      <Box
        component="polygon"
        points="0,100 50,00, 100,100"
        sx={(theme) => ({
          fill: theme.palette.common.white,
          stroke: theme.palette.divider,
          strokeWidth: 1,
        })}
      />
    </svg>
  </Paper>
);



function Services() {


  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = event.target.files;
    if (uploadedFiles) {
      setFiles((prevFiles) => [...prevFiles, ...Array.from(uploadedFiles)]);
    }
  };

  const handleFileDelete = (fileIndex: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, index) => index !== fileIndex));
  };



  // SwitchDecorators
  const [dark, setDark] = React.useState<boolean>(false);

  //
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };


  const renderStatusContent = (status: string) => {
    switch (status) {
      case '1':
        return
      case '2':
        return
      case '3':
        return
      case '4':
        return
      case '5':
        return
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">

        <br />

        <Box sx={{ height: 180 }}>
          <FormControlLabel
            control={
              <Switch
                color={dark ? 'primary' : 'danger'}
                slotProps={{ input: { 'aria-label': 'dark mode' } }}
                startDecorator={
                  <span style={{ color: dark ? 'gray' : 'red' }}>IT Request</span>
                }
                endDecorator={
                  <span style={{ color: dark ? 'blue' : 'gray' }}>IT Service</span>
                }
                checked={dark}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setDark(event.target.checked)
                }
              />
            }

          />
          <Box sx={{ display: 'flex' }}>
            <Fade in={dark}>{icon}</Fade>
          </Box>
        </Box>


        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid xs={6}>



          </Grid>
          <Grid xs={6}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <FormLabel>
                <h5>Request No.</h5>
                <Input placeholder="67-0001"
                  sx={{
                    width: 100, '--Input-radius': '0px',
                    borderBottom: '2px solid',
                    borderColor: 'neutral.outlinedBorder',
                    '&:hover': {
                      borderColor: 'neutral.outlinedHoverBorder',
                    },
                    '&::before': {
                      border: '1px solid var(--Input-focusedHighlight)',
                      transform: 'scaleX(0)',
                      left: 0,
                      right: 0,
                      bottom: '-2px',
                      top: 'unset',
                      transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                      borderRadius: 0,
                    },
                    '&:focus-within::before': {
                      transform: 'scaleX(1)',
                    },
                  }}
                  variant="outlined" color="primary" type="text"
                />
              </FormLabel>
            </Box>
          </Grid>

          <Grid xs={5}>
            <Box sx={{ my: 1 }}>
              <FormLabel>แผนกที่ร้องขอ</FormLabel>
              <Autocomplete
                placeholder="เลือกแผนก..."
                options={top100Films}
                variant="outlined" color="primary"
              />
            </Box>
            <Box sx={{ my: 1 }}>
              <FormLabel>ชื่อผู้ร้องขอ</FormLabel>
              <Input placeholder="ชื่อ" variant="outlined" color="primary" type="text" />
            </Box>
            <Box sx={{ my: 1 }}>
              <FormLabel>เบอร์ติดต่อ</FormLabel>
              <Input placeholder="57976" variant="outlined" color="primary" type="text" />
            </Box>

            <Box sx={{ my: 1 }}>
              <FormLabel>ประเภท</FormLabel>

              <Select defaultValue="1" variant="outlined" color="primary">
                <Option value="1">พัฒนาโปรแกรม</Option>
                <Option value="2">แก้ไขโปรแกรม</Option>
                <Option value="3">เพิ่มสิทธิ์</Option>
                <Option value="4">เพิ่ม Report</Option>
              </Select>
            </Box>



          </Grid>

          <Grid xs={7}>




            <Box sx={{ my: 1 }}>
              <FormLabel>หัวข้อเรื่อง</FormLabel>
              <Textarea
                size="md" name="Size" placeholder="Subject here…"
                variant="outlined" color="primary"
              />
            </Box>



            <Box sx={{ my: 1 }}>
              <FormLabel>รายละเอียด</FormLabel>
              <Textarea
                minRows={2}
                placeholder="Type in here…"
                variant="outlined"
                color="primary"
                sx={{
                  borderBottom: '2px solid',
                  borderColor: 'neutral.outlinedBorder',
                  borderRadius: 0,
                  '&:hover': {
                    borderColor: 'neutral.outlinedHoverBorder',
                  },
                  '&::before': {
                    border: '1px solid var(--Textarea-focusedHighlight)',
                    transform: 'scaleX(0)',
                    left: 0,
                    right: 0,
                    bottom: '-2px',
                    top: 'unset',
                    transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                    borderRadius: 0,
                  },
                  '&:focus-within::before': {
                    transform: 'scaleX(1)',
                  },
                }}
              />
            </Box>

            <Box sx={{ border: '1px dashed', borderColor: 'lightblue', borderRadius: 'sm', p: 2 }}>
              <FormLabel>แนบไฟล์</FormLabel>
              <Button
                component="label"
                role={undefined}
                tabIndex={-1}
                variant="outlined"
                color="primary"
                startDecorator={
                  <SvgIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </SvgIcon>
                }
              >
                Upload a file
                <input
                  type="file"
                  multiple
                  hidden
                  onChange={handleFileUpload}
                />
              </Button>

              <List>
                {files.map((file, index) => (
                  <ListItem
                    sx={{ border: '1px dashed', borderColor: 'lightblue', borderRadius: 'sm', margin: 1 }}
                    key={index}
                    endAction={
                      <IconButton edge="end" aria-label="delete" color="danger" onClick={() => handleFileDelete(index)}>
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <Typography variant="body2">{file.name}</Typography>
                  </ListItem>
                ))}
              </List>
            </Box>

          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', my: 2 }}>
          <Button color="danger" startDecorator={<CancelIcon />}>
            Cancel
          </Button>
          <Button sx={{ ml: 2 }} color="primary" startDecorator={<SaveIcon />}>
            Save
          </Button>
        </Box>

      </Container>
    </React.Fragment>
  );
}

const top100Films = [
  { label: 'พัฒนาโปรแกรม' },
  { label: 'จัดซื้อ' },
  { label: 'ทรัพยากรบุคคล' },
  { label: 'การเงิน' },
  { label: 'ศูนย์เทคโนโลยีสารสนเทศ' },
];

const top101Films = [
  { label: 'แจ้งซ่อมบำรุงคอมฯ' },
  { label: 'จัดซื้อ' },
  { label: 'ทรัพยากรบุคคล' },
  { label: 'การเงิน' },
  { label: 'ศูนย์เทคโนโลยีสารสนเทศ' },
];

const top102Films = [
  { label: 'แจ้งซ่อมบำรุงคอมฯ' },
  { label: 'จัดซื้อ' },
  { label: 'ทรัพยากรบุคคล' },
  { label: 'การเงิน' },
  { label: 'ศูนย์เทคโนโลยีสารสนเทศ' },
];

export default Services;
