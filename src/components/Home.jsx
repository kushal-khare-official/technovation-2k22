import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Grid } from '@mui/material'

import Dashboard from './Dashboard'
import './Home.css'

function Home({ classes, main, home, date, animateMain, registerBtn }) {
  return (
    <main ref={main}>
      <header>
        <h1>Technovation</h1>
        <h4 ref={date}>27th-30th April, 2K22</h4>
      </header>
      <Button
        style={{
          position: 'absolute',
          top: '45vh',
          height: '200px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        ref={registerBtn}
        onClick={animateMain}
        onTouchEnd={animateMain}
      >
        <div className="indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Button>
      <Box className={classes.root} ref={home}>
        <Grid container spacing={2}>
          <Grid item xs={11} md={6} style={{ maxWidth: '100%' }}>
            <div className="home-box">
              <Link
                to="/about"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <h3>ABOUT US</h3>
              </Link>
            </div>
            <div className="home-box">
              <Link
                to="/events"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <h3>EVENTS</h3>
              </Link>
            </div>
            <div className="home-box">
              <Link
                to="/team"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <h3>TEAM</h3>
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
          <Grid item xs={11} md={6} style={{ maxWidth: '100%' }}>
            {/* <div className="login-box"></div> */}
            <Dashboard classes={classes} />
          </Grid>
        </Grid>
      </Box>
    </main>
  )
}
export default Home
