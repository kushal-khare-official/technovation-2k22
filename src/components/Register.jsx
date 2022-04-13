import React, { useState } from 'react'
import GoogleButton from 'react-google-button'
import { TextField, Button, FormGroup } from '@mui/material'

import {
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '../firebase'

function Register({ classes, setActiveScreen }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const register = () => {
    if (!name) alert('Please enter name')
    registerWithEmailAndPassword(name, email, password)
  }

  return (
    <>
      <FormGroup>
        <TextField
          name="Name"
          label="Name"
          variant="filled"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={classes.textfield}
        />
        <TextField
          name="email"
          label="Email"
          value={email}
          variant="filled"
          onChange={(e) => setEmail(e.target.value)}
          className={classes.textfield}
        />
        <TextField
          name="Password"
          label="Password"
          variant="filled"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className={classes.textfield}
        />

        <Button id="submitBtn" onClick={register}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Register
        </Button>
        <GoogleButton
          onClick={() => signInWithGoogle()}
          style={{ margin: 'auto', marginTop: '40px' }}
        >
          Register with Google
        </GoogleButton>
      </FormGroup>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        Already have an account?{' '}
        <Button variant="text" id="link" onClick={() => setActiveScreen(0)}>
          Login
        </Button>{' '}
        now.
      </div>
    </>
  )
}
export default Register
