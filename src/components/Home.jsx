import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@mui/material'

import './Home.css'

function Home({ classes, home }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={11} md={6}>
        <div className="home-box">
          <h3>
            <Link
              to="/dashboard"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              DASHBOARD
            </Link>
          </h3>
        </div>
        <div className="home-box">
          <h3>
            <Link
              to="/about"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              ABOUT US
            </Link>
          </h3>
        </div>
        <div className="home-box">
          <h3>
            <Link
              to="/events"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              EVENTS
            </Link>
          </h3>
        </div>
        <div className="home-box">
          <h3>
            <Link
              to="/schedule"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              SCHEDULE
            </Link>
          </h3>
        </div>
        <div className="home-box">
          <h3>
            <Link
              to="/contact"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              CONTACT
            </Link>
          </h3>
        </div>
      </Grid>
      <Grid item xs={11} md={6}>
        <div className="login-box"></div>
      </Grid>
    </Grid>
  )
}
export default Home
