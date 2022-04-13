import React, { useState } from 'react'
import { TextField, Box, Button, FormGroup } from '@mui/material'
import { sendPasswordReset } from '../firebase'

function Reset({ classes, setActiveScreen }) {
  const [email, setEmail] = useState('')

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
          <Button variant="text" id="link" onClick={() => setActiveScreen(1)}>
            Register
          </Button>{' '}
          now.
        </div>
        <div style={{ marginTop: '20px' }}>
          Go back to{'  '}
          <Button variant="text" id="link" onClick={() => setActiveScreen(0)}>
            Login
          </Button>{' '}
        </div>
      </Box>
    </>
  )
}
export default Reset
