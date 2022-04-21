import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Grid } from '@mui/material'
import gsap, { Elastic } from 'gsap'

import Notification from './Notification'
import './Home.css'

function Home({ classes, mainOpen, setMainOpen }) {
  const main = useRef()
  const ea = useRef()
  const pres = useRef()
  const registerBtn = useRef()
  const home = useRef()
  const date = useRef()

  const [tl3] = useState(() => gsap.timeline())
  const [tl4] = useState(() => gsap.timeline())
  const [tl5] = useState(() => gsap.timeline())

  const animateMain = () => {
    tl3.staggerFromTo(
      [registerBtn.current, date.current, ea.current, pres.current],
      1,
      {
        opacity: 1,
        scale: 1,
        transformOrigin: 'center center',
        force3D: true,
      },
      {
        marginTop: 0,
        opacity: 0,
        scale: 0,
        height: 0,
        ease: Elastic.easeInOut,
        force3D: true,
      },
      0
    )
    tl4.staggerFromTo(
      home.current,
      2,
      {
        y: '55vh',
        transformOrigin: 'center center',
        force3D: true,
      },
      {
        y: '0',
        ease: Elastic.easeInOut,
        force3D: true,
      },
      0
    )
    tl5.staggerFromTo(
      main.current,
      2,
      {
        y: '15vh',
        transformOrigin: 'center center',
        force3D: true,
      },
      {
        y: '0',
        ease: Elastic.easeInOut,
        force3D: true,
      },
      0
    )
    setMainOpen(true)
  }

  useEffect(() => {
    if (mainOpen) return

    setTimeout(animateMain, 5000)
  })

  return (
    <main ref={main}>
      <header>
        <h1>Technovation</h1>
        <h4 ref={date}>29th April - 1st May 2022</h4>
        <h4 ref={pres} style={{ marginTop: '50px' }}>
          Presented By
        </h4>
        <img
          src="https://ik.imagekit.io/v7f424mhzsk/Technovation_2k22/EA-min_4dmeT-U5H.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649839137093"
          ref={ea}
          alt="Engineer\'s Academy"
          style={{
            width: '400px',
            marginLeft: '50%',
            transform: 'translateX(-50%)',
          }}
        />
      </header>
      <Button
        style={{
          position: 'absolute',
          top: '65vh',
          height: '200px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        ref={registerBtn}
        onClick={animateMain}
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
              <a
                href="https://ksr19101999.wixsite.com/technovation-2k22"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <h3>REGISTER</h3>
              </a>
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
            <Notification />
          </Grid>
        </Grid>
      </Box>
    </main>
  )
}
export default Home
