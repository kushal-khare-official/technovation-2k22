import React, { useRef, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import gsap, { Elastic } from 'gsap'
import { makeStyles } from '@mui/styles'

import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
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

  const useStyles = makeStyles({
    root: {
      border: 0,
      borderRadius: 3,
      color: 'white',
      padding: '30px',
      maxWidth: '500px',
      margin: 'auto',
      transform: 'translateY(40vh)',
    },
    FormGroup: {
      padding: '20px',
    },
    textfield: {
      margin: '10px !important',
      '& label': {
        color: '#e3f2fd !important',
      },
      '& div': {
        '& input': {
          color: '#fff',
        },
        backgroundColor: 'rgb(242 115 115 / 6%)',
      },
      '& div:hover::before': {
        borderBottom: '1px solid #e3f2fd !important',
      },
      '& div::after': {
        borderBottom: '3px solid #e3f2fd !important',
      },
    },
    select: {
      '& div': {
        backgroundColor: 'rgb(242 115 115 / 6%)',
        color: '#fff',
      },
      '& svg': {
        color: '#fff',
      },
      '&:hover::before': {
        borderBottom: '1px solid #e3f2fd !important',
      },
      '&::after': {
        borderBottom: '3px solid #e3f2fd !important',
      },
    },
    label: {
      margin: '10px !important',
      color: '#e3f2fd !important',
    },
    radio: {
      margin: '5px 10px !important',
      color: '#e3f2fd !important',
      '& span': {
        color: '#fff',
      },
    },
    buttonPrimary: {
      margin: '20px auto !important',
      background: '#004D40 !important',
      color: '#e3f2fd !important',
      maxWidth: '100px',
      fontWeight: 'bold',
    },
    modal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      backgroundColor: '#333',
      border: '2px solid #000',
      boxShadow: 24,
      color: '#fff',
      padding: '30px',
    },
  })

  const classes = useStyles()

  return (
    <div className="App">
      <Layout
        classes={classes}
        main={main}
        registerBtn={registerBtn}
        tl={tl}
        tl2={tl2}
        animateMain={animateMain}
      >
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={<Dashboard classes={classes} home={home} />}
            />
          </Routes>
        </Router>
      </Layout>
    </div>
  )
}

export default App
