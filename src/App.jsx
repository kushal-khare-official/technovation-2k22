import React, { useEffect, useState, useRef } from 'react'
import gsap, { Elastic } from 'gsap'

import './App.css'
import BgLeft from './components/BgLeft'
import BgRight from './components/BgRight'
import Form from './components/Form'
import './components/form.css'
import Home from './components/Home'
import ThankYou from './components/Thankyou'
import { Button } from '@mui/material'
import { Transform } from '@mui/icons-material'

function App() {
  const main = useRef()
  const registerBtn = useRef()
  const home = useRef()

  const [tl, setTl] = useState(() => gsap.timeline())
  const [tl2, setTl2] = useState(() => gsap.timeline())
  const [tl3, setTl3] = useState(() => gsap.timeline())
  const [displayForm, setDisplayForm] = useState('none')

  const animateMain = () => {
    tl2.staggerFromTo(
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
        y: '50%',
        transformOrigin: 'center center',
        force3D: true,
      },
      {
        y: 0,
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

  useEffect(() => {
    tl2.staggerFromTo(
      registerBtn.current,
      2,
      {
        opacity: 0,
        scale: 0,
        transformOrigin: 'center center',
        force3D: true,
      },
      {
        opacity: 1,
        scale: 1,
        ease: Elastic.easeInOut,
        force3D: true,
      },
      3
    )
  }, [tl2])

  return (
    <div className="App">
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
          <h4>Coming Soon</h4>
        </header>
        <Button
          variant="contained"
          style={{ marginLeft: '50%', transform: 'translateX(-50%)' }}
          ref={registerBtn}
          onClick={animateMain}
        >
          Register Now
        </Button>
        <Home home={home} />
        {/* <Form timeline={tl2} display={displayForm} /> */}
        {/* <ThankYou></ThankYou> */}
      </main>
    </div>
  )
}

export default App
