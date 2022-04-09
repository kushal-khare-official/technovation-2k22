import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { query, collection, getDocs, where } from 'firebase/firestore'
import { Avatar, Box, Stepper, Step, StepLabel, Grid } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'

import { auth, db, logout } from '../firebase.js'
import Login from './login'
import Form from './Form'
import Form2 from './Form2'
import Register from './Register.jsx'
import Reset from './Reset.jsx'
import Loader from './Loader.jsx'
import './Home.css'

const steps = ['Register/Login', 'Additional Info', 'Pay for Welcome Kit']

function Home({ classes, home }) {
  const [loader, setLoader] = useState(false)

  return (
    <Grid container spacing={2}>
      <Grid item xs={11} md={6}>
        {loader ? (
          <Loader />
        ) : (
          <>
            <div className="home-box">
              <h3>
                <Link to="/dashboard">DASHBOARD</Link>
              </h3>
            </div>
            <div className="home-box">
              <h3>EVENTS</h3>
            </div>
            <div className="home-box">
              <h3>EVENTS</h3>
            </div>
            <div className="home-box">
              <h3>EVENTS</h3>
            </div>
            <div className="home-box">
              <h3>EVENTS</h3>
            </div>
          </>
        )}
      </Grid>
      <Grid item xs={11} md={6}>
        <div className="login-box">{loader ? <Loader /> : <></>}</div>
      </Grid>
    </Grid>
  )
}
export default Home
