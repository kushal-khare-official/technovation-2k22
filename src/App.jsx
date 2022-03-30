import React, { useEffect, useState, useRef } from 'react'
import gsap, { Elastic } from 'gsap'

import './App.css'
import BgLeft from './components/BgLeft'
import BgRight from './components/BgRight'
import Form from './components/Form'
import './components/form.css'

function App() {
  const main = useRef()
  const [tl, setTl] = useState(() => gsap.timeline())
  const [tl2, setTl2] = useState(() => gsap.timeline())
  const [tl3, setTl3] = useState(() => gsap.timeline())

  useEffect(() => {
    tl2.staggerFromTo(
      main.current,
      2,
      {
        y: '40vh',
        transformOrigin: 'center center',
        force3D: true,
      },
      {
        y: 0,
        ease: Elastic.easeInOut,
        force3D: true,
      },
      1
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
      <main>
        <header ref={main}>
          <h1>Technovation</h1>
        </header>
        <Form timeline={tl2} />
      </main>
    </div>
  )
}

export default App
