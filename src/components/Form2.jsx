import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db, logout } from '../firebase.js'
import {
  TextField,
  Button,
  FormGroup,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Modal,
} from '@mui/material'

import payQR from '../assets/images/payQR.jpg'

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

const MaterialUiForm = ({ classes }) => {
  
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()

  const [tSize, setTSize] = useState('')
  const [txnId, setTxnId] = useState('')
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const onSubmitHandler = async () => {
    try{
      
      const userData = {
        uid:user?.uid,
        kitTxnId:txnId,
        kitTxnStatus:'pending',
        tshirtSize:tSize
      }
      const res = await axios.put(process.env.REACT_APP_BACKEND_URL+'/users',userData)
      console.log(res);
      navigate('/dashboard')
    }catch(e){
      console.log(e)
    }
  }
  return (
    <>
      <Typography
        id="modal-modal-title"
        variant="h4"
        component="h2"
        align="center"
      >
        Welcome Kit Registration
      </Typography>
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h3"
        align="left"
      >
        Welcome Kit includes:
      </Typography>
      <ul>
        <li>A Tecnovation Themed T-Shirt</li>
        <li>Fest ID Card</li>
        <li>A few free event passes</li>
      </ul>
      <FormGroup>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="shirt-label" style={{ color: '#fff' }}>
            T-Shirt Size
          </InputLabel>
          <Select
            labelId="shirt-label"
            id="shirt"
            value={tSize}
            label="T-Shirt Size"
            variant="filled"
            className={classes.select}
            onChange={(e) => setTSize(e.target.value)}
          >
            <MenuItem value={0}>S</MenuItem>
            <MenuItem value={1}>M</MenuItem>
            <MenuItem value={2}>L</MenuItem>
            <MenuItem value={3}>XL</MenuItem>
            <MenuItem value={4}>XXL</MenuItem>
          </Select>
        </FormControl>
        <TextField
          name="Transaction ID"
          label="Transaction ID"
          variant="filled"
          className={classes.textfield}
          value={txnId}
          onChange={(e) => setTxnId(e.target.value)}
        />
        <Button
          style={{
            marginTop: '40px',
            marginLeft: '40px',
            background: '#1C0926',
          }}
          onClick={handleOpen}
          variant="filled"
        >
          Show Payment Info
        </Button>
        <Button id="submitBtn" onClick={onSubmitHandler}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Pay Now
        </Button>
      </FormGroup>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Payment Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <img src={payQR} alt="BHIM Pay QR Code" width="100%" />
          </Typography>
        </Box>
      </Modal>
    </>
  )
}

export default MaterialUiForm
