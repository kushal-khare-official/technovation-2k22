import React, { useEffect, useState, useRef } from 'react'
import gsap, { Elastic } from 'gsap'
import { Box, Button } from '@mui/material'

import BgLeft from './BgLeft'
import BgRight from './BgRight'
import './Layout.css'
import './form.css'

function Layout({ classes, children }) {
  const main = useRef()
  const registerBtn = useRef()
  const home = useRef()

  const [tl, setTl] = useState(() => gsap.timeline())
  const [tl2, setTl2] = useState(() => gsap.timeline())
  const [tl3, setTl3] = useState(() => gsap.timeline())

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
        y: '35%',
        transformOrigin: 'center center',
        force3D: true,
      },
      {
        y: '-20%',
        ease: Elastic.easeInOut,
        force3D: true,
      },
      0.1
    )
    tl2.staggerFromTo(
      main.current,
      2,
      {
        y: '45%',
        transformOrigin: 'center center',
        force3D: true,
      },
      {
        y: '10%',
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
            top: '40vh',
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
