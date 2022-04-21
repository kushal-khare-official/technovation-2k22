import React, { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { makeStyles } from '@mui/styles'

import Loader from './components/Loader'
import { subscribe } from './firebase'
import './App.css'
import Contact from './components/Contact'

const Layout = lazy(() => import('./components/Layout'))
const Home = lazy(() => import('./components/Home'))
const Events = lazy(() => import('./components/Events'))
// const Dashboard = lazy(() => import('./components/Dashboard'))

function App() {
  const [mainOpen, setMainOpen] = useState(false)

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
    subscribe()
  }, [])

  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Layout>
          <Router>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Home
                    classes={classes}
                    mainOpen={mainOpen}
                    setMainOpen={setMainOpen}
                  />
                }
              />
              {/* <Route
                exact
                path="/register"
                element={<Dashboard classes={classes} />}
              /> */}
              <Route
                exact
                path="/contact"
                element={<Contact classes={classes} />}
              />
              <Route
                exact
                path="/events"
                element={<Events classes={classes} />}
              />
              <Route
                exact
                path="/events/:category"
                element={<Events classes={classes} />}
              />
            </Routes>
          </Router>
        </Layout>
      </Suspense>
    </div>
  )
}

export default App
