import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Grid } from '@mui/material'

import Dashboard from './Dashboard'
import './Home.css'

function Home({
  classes,
  main,
  ea,
  pres,
  home,
  date,
  animateMain,
  registerBtn,
}) {
  return (
    <main ref={main}>
      <header>
        <img
          src="https://ik.imagekit.io/v7f424mhzsk/Technovation_2k22/EA_F56B6FVVp.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649745490501"
          ref={ea}
          alt="Engineer\'s Academy"
          style={{
            width: '400px',
            marginLeft: '50%',
            transform: 'translateX(-50%)',
          }}
        />
        <h4 ref={pres}>Presents</h4>
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
        // onTouchEnd={animateMain}
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
