import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { query, collection, getDocs, where } from 'firebase/firestore'
import { Avatar, Box, Stepper, Step, StepLabel } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'

import { auth, db, logout } from '../firebase.js'
import Login from './login'
import Form from './Form'
import Form2 from './Form2'
import './Dashboard.css'
import Register from './Register.jsx'
import Reset from './Reset.jsx'
import Loader from './Loader.jsx'

const steps = ['Register/Login', 'Additional Info', 'Pay for Welcome Kit']

function Dashboard({ classes, home }) {
  const [user, loading, error] = useAuthState(auth)
  const [loader, setLoader] = useState(false)
  const [name, setName] = useState('')
  const [photoURL, setPhotoURL] = useState('')
  const [activeStep, setActiveStep] = React.useState(0)
  const [activeScreen, setActiveScreen] = React.useState(0)

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        setLoader(true)
        const q = query(collection(db, 'users'), where('uid', '==', user?.uid))
        const doc = await getDocs(q)
        const data = doc.docs[0].data()
        setName(data.name)
        setPhotoURL(user.providerData[0].photoURL)
        setLoader(false)
      } catch (err) {
        console.error(err)
        alert('An error occured while fetching user data')
        setLoader(false)
      }
    }

    if (loading) return
    if (error) return
    if (user) {
      fetchUserName()
      setActiveStep(1)
    }
  }, [user, error, loading])

  return (
    <div className="login-box">
      {loader ? (
        <Loader />
      ) : (
        <>
          {user ? (
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 20px 16px 20px',
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  alt={name}
                  src={photoURL}
                  style={{ display: 'inline-block' }}
                />
                <span style={{ marginLeft: '20px' }}>{name}</span>
              </span>
              <button
                className="dashboard__btn"
                onClick={() => logout(() => setActiveStep(0))}
              >
                <LogoutIcon />
              </button>
            </Box>
          ) : null}
          <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {}
              const labelProps = {}
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              )
            })}
          </Stepper>
          {activeStep === 0 ? (
            <>
              {activeScreen === 0 ? (
                <Login
                  classes={classes}
                  next={() => setActiveStep(1)}
                  setActiveScreen={setActiveScreen}
                />
              ) : activeScreen === 1 ? (
                <Register
                  classes={classes}
                  next={() => setActiveStep(1)}
                  setActiveScreen={setActiveScreen}
                />
              ) : (
                <Reset
                  classes={classes}
                  next={() => setActiveStep(1)}
                  setActiveScreen={setActiveScreen}
                />
              )}
            </>
          ) : null}
          {activeStep === 1 ? (
            <Form
              classes={classes}
              setLoader={setLoader}
              prev={() => setActiveStep(0)}
              next={() => setActiveStep(2)}
            />
          ) : null}
          {activeStep === 2 ? (
            <Form2
              classes={classes}
              setLoader={setLoader}
              next={() => setActiveStep(3)}
            />
          ) : null}
        </>
      )}
    </div>
  )
}
export default Dashboard
