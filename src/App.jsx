import React, { useState } from 'react'
import gsap from 'gsap'

import './App.css'
import BgLeft from './components/BgLeft'
import BgRight from './components/BgRight'
import Form from './components/form1'

function App() {
  const [tl, setTl] = useState(() => gsap.timeline())
  const [tl2, setTl2] = useState(() => gsap.timeline())

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
        <header>
          <h1>Technovation</h1>
        </header>
        {/* <Form timeline={tl2} /> */}
        <Form></Form>
      </main>
    </div>
  )
}

export default App
