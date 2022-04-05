import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
import { makeStyles } from '@mui/styles'

import payQR from '../assets/images/payQR.jpg'

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
    modal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      backgroundColor: '#333',
      border: '2px solid #000',
      boxShadow: 24,
      color: '#fff',
      padding: '30px',
    },
  })

  const classes = useStyles()
  const navigate = useNavigate()

  const [tSize, setTSize] = useState('')
  const [txnId, setTxnId] = useState('')
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Box className={classes.root} ref={form}>
        <div className="login-box">
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
            <Button id="submitBtn" onClick={() => navigate('/dashboard')}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Pay Now
            </Button>
          </FormGroup>
          {/* <ThankYou></ThankYou> */}
        </div>
      </Box>
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
