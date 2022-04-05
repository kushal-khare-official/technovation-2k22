import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField, Button, FormGroup, Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import GoogleButton from 'react-google-button'
import { useAuthState } from 'react-firebase-hooks/auth'

import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from '../firebase.js'
import './login.css'
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, loading, error] = useAuthState(auth)
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
    FormGroup: {
      border: '2px solid #fff',
      borderRadius: '0.35em',
      padding: '20px',
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

  const classes = useStyles()

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return
    }
    if (error) {
      // maybe trigger a 404 screen
      return
    }
    if (user) navigate('/dashboard')
  }, [user, loading, error, navigate])
  return (
    <Box className={classes.root}>
      <div className="login-box">
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
              // background: '#1C0926',
            }}
            id="submitBtn"
            variant="filled"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </Button>
          <GoogleButton
            onClick={signInWithGoogle}
            style={{ margin: 'auto', marginTop: '40px' }}
          >
            Login with Google
          </GoogleButton>

          <Box style={{ margin: 'auto' }}>
            <Button
              style={{
                marginTop: '40px',
                background: '#1C0926',
              }}
              variant="filled"
              onClick={() => navigate('/reset')}
            >
              Forgot Password
            </Button>
            <Button
              style={{
                marginTop: '40px',
                marginLeft: '40px',
                background: '#1C0926',
              }}
              onClick={() => navigate('/register')}
              variant="filled"
            >
              Register Now
            </Button>
          </Box>
        </FormGroup>
      </div>
    </Box>
  )
}
export default Login
