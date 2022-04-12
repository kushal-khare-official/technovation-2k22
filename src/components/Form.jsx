import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {
  TextField,
  Radio,
  RadioGroup,
  Button,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material'

import { auth } from '../firebase.js'

// const validate = (values) => {
//   const errors = {}
//   const requiredFields = [
//     'firstName',
//     'lastName',
//     'email',
//     'favoriteColor',
//     'notes',
//   ]
//   requiredFields.forEach((field) => {
//     if (!values[field]) {
//       errors[field] = 'Required'
//     }
//   })
//   if (
//     values.email &&
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//   ) {
//     errors.email = 'Invalid email address'
//   }
//   return errors
// }

const Form = ({ classes, setLoader, prev, next }) => {
  const [user] = useAuthState(auth)

  const [collegeName, setCollegeName] = useState('')
  const [collegeType, setCollegeType] = useState('school')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [branch, setBranch] = useState('')
  const [year, setYear] = useState('')

  const onSubmitHandler = async () => {
    try {
      setLoader(true)
      const userData = {
        uid: user?.uid,
        collegeType: collegeType,
        college: collegeName,
        branch: branch,
        year: year,
        mobile_number: phoneNumber,
      }
      await fetch(process.env.REACT_APP_BACKEND_URL + '/users/form', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      next()
      setLoader(false)
    } catch (e) {
      console.log(e)
      setLoader(false)
    }
  }

  return (
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
              <MenuItem value={1}>First</MenuItem>
              <MenuItem value={2}>Second</MenuItem>
              <MenuItem value={3}>Third</MenuItem>
              <MenuItem value={4}>Fourth</MenuItem>
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
            <MenuItem value={9}>IX</MenuItem>
            <MenuItem value={10}>X</MenuItem>
            <MenuItem value={11}>XI</MenuItem>
            <MenuItem value={12}>XII</MenuItem>
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
  )
}

export default Form
