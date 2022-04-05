import React, { useRef, useState } from 'react'

import {
  TextField,
  Radio,
  RadioGroup,
  Button,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useNavigate } from 'react-router-dom'

const validate = (values) => {
  const errors = {}
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'favoriteColor',
    'notes',
  ]
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const MaterialUiForm = () => {
  const form = useRef()

  const navigate = useNavigate()

  const useStyles = makeStyles({
    root: {
      border: 0,
      borderRadius: 3,
      color: 'white',
      padding: '30px',
      maxWidth: '500px',
      margin: 'auto',
    },
    textfield: {
      margin: '10px !important',
      '& label': {
        color: '#e3f2fd !important',
      },
      '& div': {
        '& input': {
          color: '#fff',
        },
        backgroundColor: 'rgb(242 115 115 / 6%)',
      },
      '& div:hover::before': {
        borderBottom: '1px solid #e3f2fd !important',
      },
      '& div::after': {
        borderBottom: '3px solid #e3f2fd !important',
      },
    },
    select: {
      '& div': {
        backgroundColor: 'rgb(242 115 115 / 6%)',
        color: '#fff',
      },
      '& svg': {
        color: '#fff',
      },
      '&:hover::before': {
        borderBottom: '1px solid #e3f2fd !important',
      },
      '&::after': {
        borderBottom: '3px solid #e3f2fd !important',
      },
    },
    label: {
      margin: '10px !important',
      color: '#e3f2fd !important',
    },
    radio: {
      margin: '5px 10px !important',
      color: '#e3f2fd !important',
      '& span': {
        color: '#fff',
      },
    },
    buttonPrimary: {
      margin: '20px auto !important',
      background: '#004D40 !important',
      color: '#e3f2fd !important',
      maxWidth: '100px',
      fontWeight: 'bold',
    },
  })

  const classes = useStyles()
  const [collegeName, setCollegeName] = useState('')
  const [collegeType, setCollegeType] = useState('school')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [branch, setBranch] = useState('')
  const [year, setYear] = useState('')

  const onSubmitHandler = () => {
    navigate('/form2')
  }

  return (
    <Box className={classes.root} ref={form}>
      <div className="login-box">
        <FormGroup>
          <TextField
            name="Institute Name"
            label="Institute Name"
            variant="filled"
            className={classes.textfield}
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
          />
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            className={classes.label}
          >
            Institute Type
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={collegeType}
            onChange={(e) => setCollegeType(e.target.value)}
          >
            <FormControlLabel
              value="school"
              control={<Radio />}
              label="School"
              className={classes.radio}
            />
            <FormControlLabel
              value="college"
              control={<Radio />}
              label="College"
              className={classes.radio}
            />
          </RadioGroup>
          <TextField
            name="phone number"
            label="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            variant="filled"
            className={classes.textfield}
          />
          {collegeType === 'college' ? (
            <>
              <TextField
                name="branch"
                label="Branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                variant="filled"
                className={classes.textfield}
              />
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="year-label" style={{ color: '#fff' }}>
                  Year
                </InputLabel>
                <Select
                  labelId="year-label"
                  id="year"
                  value={year}
                  label="Year"
                  variant="filled"
                  className={classes.select}
                  onChange={(e) => setYear(e.target.value)}
                >
                  <MenuItem value="">First</MenuItem>
                  <MenuItem value={10}>Second</MenuItem>
                  <MenuItem value={20}>Thrid</MenuItem>
                  <MenuItem value={30}>Fourth</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="year-label" style={{ color: '#fff' }}>
                Grade
              </InputLabel>
              <Select
                labelId="year-label"
                id="year"
                value={year}
                label="Year"
                variant="filled"
                className={classes.select}
                onChange={(e) => setYear(e.target.value)}
              >
                <MenuItem value="">IX</MenuItem>
                <MenuItem value={10}>X</MenuItem>
                <MenuItem value={20}>XI</MenuItem>
                <MenuItem value={30}>XII</MenuItem>
              </Select>
            </FormControl>
          )}

          <Button id="submitBtn" onClick={onSubmitHandler}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </Button>
        </FormGroup>
        {/* <ThankYou></ThankYou> */}
      </div>
    </Box>
  )
}

export default MaterialUiForm
