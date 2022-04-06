import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { TextField, Box, Button, FormGroup } from '@mui/material'
import { auth, sendPasswordReset } from '../firebase'

// import './Reset.css'

function Reset({ classes }) {
  const [email, setEmail] = useState('')
  const [user, loading, error] = useAuthState(auth)

  const navigate = useNavigate()

  useEffect(() => {
    if (loading) return
    if (error) return
    if (user) navigate('/dashboard')
  }, [user, loading, error, navigate])

  return (
    <>
      <FormGroup>
        <TextField
          name="E-mail Address"
          label="E-mail Address"
          variant="filled"
          value={email}
          className={classes.textfield}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button id="submitBtn" onClick={() => sendPasswordReset(email)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Reset email
        </Button>
      </FormGroup>
      <Box style={{ margin: 'auto', padding: '20px', textAlign: 'center' }}>
        <div id="register">
          Don't have an account?{' '}
          <Link id="link" to="/register">
            Register
          </Link>{' '}
          now.
        </div>
        <div style={{ marginTop: '20px' }}>
          Go back to{'  '}
          <Link id="link" to="/">
            Login
          </Link>{' '}
        </div>
      </Box>
    </>
  )
}
export default Reset
