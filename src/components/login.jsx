import React, { useEffect, useState } from 'react'
import { TextField, Button, FormGroup, Box } from '@mui/material'
import GoogleButton from 'react-google-button'
import { useAuthState } from 'react-firebase-hooks/auth'

import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from '../firebase.js'

function Login({ classes, next, setActiveScreen }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, loading, error] = useAuthState(auth)

  useEffect(() => {
    if (loading) return
    if (error) return
    if (user) next()
  }, [user, loading, error, next])

  return (
    <FormGroup className={classes.FormGroup}>
      <TextField
        name="email"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail Address"
        variant="filled"
        className={classes.textfield}
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        variant="filled"
        className={classes.textfield}
      />
      <Button
        style={{
          marginTop: '20px',
        }}
        id="submitBtn"
        variant="filled"
        onClick={() => logInWithEmailAndPassword(email, password, next)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </Button>
      <GoogleButton
        onClick={() => signInWithGoogle(next)}
        style={{ margin: 'auto', marginTop: '40px' }}
      >
        Login with Google
      </GoogleButton>

      <Box style={{ margin: 'auto' }}>
        <Button
          style={{
            marginTop: '20px',
            marginLeft: '50%',
            transform: 'translateX(-50%)',
            background: '#1C0926',
            fontSize: '0.75rem',
          }}
          variant="filled"
          onClick={() => setActiveScreen(2)}
        >
          Forgot Password
        </Button>
        <div style={{ marginTop: '20px' }}>
          Don't Have an account Yet?{' '}
          <Button variant="text" id="link" onClick={() => setActiveScreen(1)}>
            Register Now
          </Button>{' '}
        </div>
      </Box>
    </FormGroup>
  )
}
export default Login
