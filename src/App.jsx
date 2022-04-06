import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { makeStyles } from '@mui/styles'

import Layout from './components/Layout'
import Login from './components/login'
import Register from './components/Register'
import Reset from './components/Reset'
import Dashboard from './components/Dashboard'
import Form from './components/Form'
import Form2 from './components/Form2'
import './App.css'

function App() {
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
      border: '2px solid #fff',
      borderRadius: '0.35em',
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
      <Layout classes={classes}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login classes={classes} />} />
            <Route
              exact
              path="/register"
              element={<Register classes={classes} />}
            />
            <Route exact path="/reset" element={<Reset classes={classes} />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/form" element={<Form classes={classes} />} />
            <Route exact path="/form2" element={<Form2 classes={classes} />} />
          </Routes>
        </Router>
      </Layout>
    </div>
  )
}

export default App
