import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import gsap, { Elastic } from 'gsap'
import { makeStyles } from '@mui/styles'

import Layout from './components/Layout'
import Home from './components/Home'
import Events from './components/Events'
import './App.css'

function App() {
  const polygons1 = useRef()
  const polygons2 = useRef()
  const main = useRef()
  const ea = useRef()
  const pres = useRef()
  const registerBtn = useRef()
  const home = useRef()
  const date = useRef()

  const [tl] = useState(() => gsap.timeline())
  const [tl2] = useState(() => gsap.timeline())
  const [tl3] = useState(() => gsap.timeline())

  const animateMain = () => {
    tl.staggerFromTo(
      [registerBtn.current, date.current, ea.current, pres.current],
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
        height: 0,
        ease: Elastic.easeInOut,
        force3D: true,
      },
      0
    )
    tl3.staggerFromTo(
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
      margin: 'auto',
      transform: 'translateY(55vh)',
      overflow: 'auto',
      height: '75vh',
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

  useEffect(() => {
    tl.staggerFromTo(
      polygons1.current.children,
      0.7,
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
      0.009
    )
    tl2.staggerFromTo(
      polygons2.current.children,
      0.7,
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
      0.009
    )
  }, [tl, tl2])

  return (
    <div className="App">
      <Layout polygons1={polygons1} polygons2={polygons2}>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  classes={classes}
                  main={main}
                  ea={ea}
                  pres={pres}
                  home={home}
                  date={date}
                  registerBtn={registerBtn}
                  animateMain={animateMain}
                />
              }
            />
            <Route
              exact
              path="/events"
              element={<Events classes={classes} />}
            />
          </Routes>
        </Router>
      </Layout>
    </div>
  )
}

export default App
