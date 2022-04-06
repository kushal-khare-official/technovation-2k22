import React, { useState, useRef } from 'react'
import gsap, { Elastic } from 'gsap'
import { Box, Button } from '@mui/material'

import BgLeft from './BgLeft'
import BgRight from './BgRight'
import './Layout.css'
import './Forms.css'

function Layout({ classes, children }) {
  const main = useRef()
  const registerBtn = useRef()
  const home = useRef()

  const [tl] = useState(() => gsap.timeline())
  const [tl2] = useState(() => gsap.timeline())
  const [tl3] = useState(() => gsap.timeline())

  const animateMain = () => {
    tl.staggerFromTo(
      registerBtn.current,
      1,
      {
        opacity: 1,
        scale: 1,
        transformOrigin: 'center center',
        force3D: true,
      },
      {
        opacity: 0,
        scale: 0,
        ease: Elastic.easeInOut,
        force3D: true,
      },
      0.09
    )
    tl3.staggerFromTo(
      home.current,
      2,
      {
        y: '40vh',
        transformOrigin: 'center center',
        force3D: true,
      },
      {
        y: '0',
        ease: Elastic.easeInOut,
        force3D: true,
      },
      0.1
    )
    tl2.staggerFromTo(
      main.current,
      2,
      {
        y: '35vh',
        transformOrigin: 'center center',
        force3D: true,
      },
      {
        y: '0',
        ease: Elastic.easeInOut,
        force3D: true,
      },
      0.1
    )
  }

  return (
    <>
      <BgLeft timeline={tl} />
      <BgRight timeline={tl2} />
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <main ref={main}>
        <header>
          <h1>Technovation</h1>
          <h4>27th-30th April, 2K22</h4>
        </header>
        <Button
          style={{
            position: 'absolute',
            top: '45vh',
            height: '200px',
            marginLeft: '50%',
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
          <div className="login-box">{children}</div>
        </Box>
      </main>
    </>
  )
}

export default Layout
