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

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
  ...theme.typography['body-sm'],
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
}));

const steps = [
  { label: 'Request', path: '/it-services' },
  { label: 'IT Admin', path: '/it-manager' },
  { label: 'Manager Approve', path: '/it-admin' },
  { label: 'Director Approved', path: '/director-approved' }
];

function Services() {
  const [value1, setValue1] = useState<string | null>('approve');
  const [value2, setValue2] = useState<string | null>('approve');
  const action: SelectStaticProps['action'] = React.useRef(null);
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

  // const steps = ['Request', 'IT Admin', 'Manager Approve', 'Director Approved'];
  const [activeStep, setActiveStep] = useState<number>(0);

  

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      <Stepper>
      {steps.map((step, index) => (
        <Step
          key={step.label}
          indicator={
            <StepIndicator
              variant={activeStep <= index ? 'soft' : 'solid'}
              color={activeStep < index ? 'neutral' : 'primary'}
            >
              {activeStep <= index ? index + 1 : <Check />}
            </StepIndicator>
          }
          sx={{
            '&::after': {
              ...(activeStep > index && index !== 2 && { bgcolor: 'primary.solidBg' }),
            },
          }}
        >
          <StepButton onClick={() => setActiveStep(index)} component={Link} to={step.path}>
            {step.label}
          </StepButton>
        </Step>
      ))}
    </Stepper>
        <br />

        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid xs={6}>
            <Box><h2>IT Request</h2></Box>
          </Grid>
          <Grid xs={6}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <FormLabel>
                <h5>Request No.</h5>
                <Input placeholder="67/0001"
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
              <Input placeholder="พัฒนาโปรแกรม" variant="outlined" color="primary" type="text" />
            </Box>

            <Box>
              <Box sx={{ my: 1 }}>
                <FormLabel>Manager Approve</FormLabel>
                <Input placeholder="Manager name" variant="outlined" color="success" type="text" />
              </Box>
              <Box sx={{ my: 1 }}>
                <FormLabel>Manager Email</FormLabel>
                <Input placeholder="Manager@Email.com" variant="outlined" color="success" type="email" />
              </Box>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Box sx={{ my: 1 }}>
                  <FormLabel>Manager Approve Status</FormLabel>
                  <Select
                    action={action}
                    value={value1}
                    placeholder="Status"
                    onChange={(e, newValue) => setValue1(newValue)}
                    variant="outlined" color="success"
                    {...(value1 && {
                      endDecorator: (
                        <IconButton
                          size="sm"
                          variant="plain"
                          color="neutral"
                          onMouseDown={(event) => {
                            event.stopPropagation();
                          }}
                          onClick={() => {
                            setValue1(null);
                            action.current?.focusVisible();
                          }}
                        >
                          <CloseRounded />
                        </IconButton>
                      ),
                      indicator: null,
                    })}
                  >
                    <Option value="approve">อนุมัติ</Option>
                    <Option value="unapprove">ไม่อนุมัติ</Option>
                    <Option value="discuss">พิจารณา</Option>
                    <Option value="cancel">ยกเลิก</Option>
                  </Select>
                </Box>

                <Box sx={{ my: 1 }}>
                  <FormLabel>Manager Approve Date</FormLabel>
                  <Input variant="outlined" color="success" type="date" />
                </Box>
              </Box>

              <Box sx={{ my: 1 }}>
                <FormLabel>Director Approve</FormLabel>
                <Input placeholder="Director name" variant="outlined" color="warning" type="text" />
              </Box>

              <Box sx={{ my: 1 }}>
                <FormLabel>Director Email</FormLabel>
                <Input placeholder="Director@Email.com" variant="outlined" color="warning" type="email" />
              </Box>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Box sx={{ my: 1 }}>
                  <FormLabel>Director Approve Status</FormLabel>
                  <Select
                    action={action}
                    value={value2}
                    placeholder="Status"
                    onChange={(e, newValue) => setValue2(newValue)}
                    variant="outlined" color="warning"
                    {...(value2 && {
                      endDecorator: (
                        <IconButton
                          size="sm"
                          variant="plain"
                          color="neutral"
                          onMouseDown={(event) => {
                            event.stopPropagation();
                          }}
                          onClick={() => {
                            setValue2(null);
                            action.current?.focusVisible();
                          }}
                        >
                          <CloseRounded />
                        </IconButton>
                      ),
                      indicator: null,
                    })}
                  >
                    <Option value="approve">อนุมัติ</Option>
                    <Option value="unapprove">ไม่อนุมัติ</Option>
                    <Option value="discuss">พิจารณา</Option>
                    <Option value="cancel">ยกเลิก</Option>
                  </Select>
                </Box>

                <Box sx={{ my: 1 }}>
                  <FormLabel>Director Approve Date</FormLabel>
                  <Input variant="outlined" color="warning" type="date" />
                </Box>
              </Box>
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

            <Box>
              <FormLabel>วัตถุประสงค์</FormLabel>
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

            <Box sx={{ my: 1 }}>
              <FormLabel>ความต้องการ</FormLabel>
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

export default Services;
