import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@mui/material'

import './Home.css'

function Home({ classes, home }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={11} md={6}>
        <div className="home-box">
          <Link
            to="/dashboard"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <h3>DASHBOARD</h3>
          </Link>
        </div>
        <div className="home-box">
          <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>
            <h3>ABOUT US</h3>
          </Link>
        </div>
        <div className="home-box">
          <Link to="/events" style={{ textDecoration: 'none', color: 'white' }}>
            <h3>EVENTS</h3>
          </Link>
        </div>
        <div className="home-box">
          <Link
            to="/schedule"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <h3>SCHEDULE</h3>
          </Link>
        </div>
        <div className="home-box">
          <Link
            to="/contact"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <h3>CONTACT</h3>
          </Link>
        </div>
      </Grid>
      <Grid item xs={11} md={6}>
        <div className="login-box"></div>
      </Grid>
    </Grid>
  )
}
export default Home
