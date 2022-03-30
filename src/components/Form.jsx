import React, { useEffect, useRef } from 'react'
import { Elastic } from 'gsap'

import {
  TextField,
  Radio,
  RadioGroup,
  Button,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Box,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import asyncValidate from '../utils/asyncValidate'

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

const MaterialUiForm = ({ timeline }) => {
  const form = useRef()
  const classes = useStyles()

  useEffect(() => {
    timeline.staggerFromTo(
      form.current,
      2,
      {
        // opacity: 0,
        // scale: 0,
        y: 1000,
        transformOrigin: 'center center',
        force3D: true,
      },
      {
        // opacity: 1,
        // scale: 1,
        y: 0,
        ease: Elastic.easeInOut,
        force3D: true,
      },
      3
    )
  }, [timeline])

  return (
    <Box className={classes.root} ref={form}>
      <div className="login-box">
        <FormGroup>
          <TextField
            name="Name"
            label="Name"
            variant="filled"
            className={classes.textfield}
          />
          <TextField
            name="email"
            label="Email"
            variant="filled"
            className={classes.textfield}
          />
          <TextField
            name="phone number"
            label="Phone Number"
            variant="filled"
            className={classes.textfield}
          />
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            className={classes.label}
          >
            Gender
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              className={classes.radio}
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Male"
              className={classes.radio}
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Other"
              className={classes.radio}
            />
          </RadioGroup>
          <TextField
            name="college"
            label="College"
            variant="filled"
            className={classes.textfield}
          />
          <Button id="submitBtn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </Button>
        </FormGroup>
      </div>
    </Box>
  )
}

export default MaterialUiForm
