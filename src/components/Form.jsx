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
    // background: '#7341C0',
    border: 0,
    borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
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
    '& span.Mui-checked': {
      color: '#e3f2fd !important',
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
      0.7,
      {
        opacity: 0,
        scale: 0,
        transformOrigin: 'center center',
        force3D: true,
      },
      {
        opacity: 1,
        scale: 1,
        ease: Elastic.easeInOut,
        force3D: true,
      },
      0.009
    )
  }, [timeline])

  return (
    <Box className={classes.root} ref={form}>
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
        <Button
          type="submit"
          className={classes.buttonPrimary}
          variant="contained"
        >
          Submit
        </Button>
      </FormGroup>
    </Box>
  )
}

export default MaterialUiForm
