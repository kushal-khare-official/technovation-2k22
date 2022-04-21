import React, { lazy, Suspense, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {
  Avatar,
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material'
import { Pending, CheckCircle, Cancel } from '@mui/icons-material'
import LogoutIcon from '@mui/icons-material/Logout'

import Loader from './Loader.jsx'
import { auth, logout } from '../firebase.js'
import eventData from '../utils/eventsDetails'
import './Dashboard.css'

const Nav = lazy(() => import('./Nav.jsx'))
const Login = lazy(() => import('./Login'))
const Form = lazy(() => import('./Form'))
const Form2 = lazy(() => import('./Form2'))
const Register = lazy(() => import('./Register'))
const Reset = lazy(() => import('./Reset'))
const EventForm = lazy(() => import('./EventForm'))

const steps = ['Register/Login', 'Additional Info', 'Pay for Welcome Kit']

function Dashboard({ classes, home }) {
  const [user, loading, error] = useAuthState(auth)
  const [loader, setLoader] = useState(false)
  const [name, setName] = useState('')
  const [photoURL, setPhotoURL] = useState('')
  const [paymentStatus, setPaymentStatus] = useState('')
  const [kitNo, setKitNo] = useState('')
  const [activeStep, setActiveStep] = React.useState(0)
  const [activeScreen, setActiveScreen] = React.useState(0)
  const [open, setOpen] = useState(false)
  const [txnId, setTxnId] = useState('')
  const [price, setPrice] = useState(0)
  const [selectedEvents, setSelectedEvents] = useState([])
  const [category, setCategory] = useState()

  const handleOpen = (c) => {
    setCategory(c)
    setOpen(true)
  }
  const handleClose = () => {
    setCategory(null)
    setOpen(false)
  }

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        setLoader(true)
        const response = await fetch(
          process.env.REACT_APP_BACKEND_URL + '/users',
          {
            method: 'GET',
            headers: {
              rid: user.uid,
            },
          }
        )
        const data = await response.json()

        let newStep = 0

        if (!data.error) newStep++

        if (data.mobile_number !== 1000000000) newStep++

        if (data.kitTxnId) {
          setPaymentStatus(data.kitTxnStatus)
          newStep++
        }

        if (data.kitNo) setKitNo(data.kitNo)

        setActiveStep(newStep)
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
    if (user) fetchUserName()
  }, [user, error, loading])

  return (
    <>
      <Nav />
      <div
        className="login-box"
        style={{
          height: 'auto',
          marginTop: '50vh',
          transform: 'translateY(-50%)',
          color: 'white',
          maxHeight: '95vh',
        }}
      >
        <Suspense fallback={<Loader />}>
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
                      setActiveScreen={setActiveScreen}
                    />
                  ) : activeScreen === 1 ? (
                    <Register
                      classes={classes}
                      setActiveScreen={setActiveScreen}
                    />
                  ) : (
                    <Reset
                      classes={classes}
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
              {activeStep === 3 ? (
                <div>
                  <h3 style={{ textAlign: 'center' }}>
                    Payment Status:{' '}
                    {paymentStatus === 'pending' ? (
                      <Pending style={{ transform: 'translateY(25%)' }} />
                    ) : null}
                    {paymentStatus === 'failed' ? (
                      <Cancel
                        style={{
                          transform: 'translateY(25%)',
                          color: '#ff0000',
                        }}
                      />
                    ) : null}
                    {paymentStatus === 'success' ? (
                      <CheckCircle
                        style={{
                          transform: 'translateY(25%)',
                          color: '#1ad81a',
                        }}
                      />
                    ) : null}
                  </h3>
                  {kitNo ? (
                    <>
                      <h3 style={{ textAlign: 'center' }}>
                        Welcome Kit Number: {kitNo}
                      </h3>
                      <TextField
                        name="Transaction ID"
                        label="Transaction ID"
                        variant="filled"
                        className={classes.textfield}
                        value={txnId}
                        onChange={(e) => setTxnId(e.target.value)}
                        style={{ width: '100%' }}
                      />
                      <h3 style={{ textAlign: 'center' }}>Register Below :</h3>
                      <div
                        style={{
                          display: 'flex',
                          flexFlow: 'wrap',
                          justifyContent: 'space-around',
                        }}
                      >
                        <Button
                          style={{
                            margin: '20px 10px',
                            padding: '10px',
                            background: '#1C0926',
                          }}
                          onClick={() => handleOpen('nontechnical')}
                          variant="filled"
                        >
                          Non-Technical Events
                        </Button>
                        <Button
                          style={{
                            margin: '20px 10px',
                            padding: '10px',
                            background: '#1C0926',
                          }}
                          onClick={() => handleOpen('technical')}
                          variant="filled"
                        >
                          Technical Events
                        </Button>
                        <Button
                          style={{
                            margin: '20px 10px',
                            padding: '10px',
                            background: '#1C0926',
                          }}
                          onClick={() => handleOpen('cybernated')}
                          variant="filled"
                        >
                          Cybernated Events
                        </Button>
                        <Button
                          style={{
                            margin: '20px 10px',
                            padding: '10px',
                            background: '#1C0926',
                          }}
                          onClick={() => handleOpen('gaming')}
                          variant="filled"
                        >
                          Gaming Events
                        </Button>
                        <Button
                          style={{
                            margin: '20px 10px',
                            padding: '10px',
                            background: '#1C0926',
                          }}
                          onClick={() => handleOpen('literary')}
                          variant="filled"
                        >
                          Literary Events
                        </Button>
                        <Button
                          style={{
                            margin: '20px 10px',
                            padding: '10px',
                            background: '#1C0926',
                          }}
                          onClick={() => handleOpen('combo')}
                          variant="filled"
                        >
                          Combo Pack
                        </Button>
                        <Button
                          style={{
                            marginTop: '40px',
                            background: '#1C0926',
                          }}
                          onClick={() => handleOpen()}
                          variant="filled"
                        >
                          Show Payment QR
                        </Button>
                      </div>
                    </>
                  ) : null}
                </div>
              ) : null}
            </>
          )}
        </Suspense>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {category === 'nontechnical' ? 'Non Technical Events' : null}
            {category === 'technical' ? 'Technical Events' : null}
            {category === 'cybernated' ? 'Cybernated Events' : null}
            {category === 'gaming' ? 'Gaming Events' : null}
            {category === 'literary' ? 'Literary Events' : null}
            {category === 'combo' ? 'Combo Pack' : null}
          </Typography>
          <EventForm
            eventList={eventData[category]}
            selectedEvents={selectedEvents}
            setSelectedEvents={setSelectedEvents}
            price={price}
            setPrice={setPrice}
          />
        </Box>
      </Modal>
    </>
  )
}
export default Dashboard
