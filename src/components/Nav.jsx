import React from 'react'
import { Apps, Call, Event, Home, Info } from '@mui/icons-material'

import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="menu" id="mainMenu">
      <div className="menuIcons" id="home">
        <Link to="/">
          <Home
            style={{
              color: 'white',
            }}
          />
        </Link>
      </div>
      <div className="menuIcons" id="about">
        <Link to="/about">
          <Info
            style={{
              color: 'white',
            }}
          />
        </Link>
      </div>
      <div className="menuIcons" id="events">
        <Link to="/events">
          <Apps
            style={{
              color: 'white',
            }}
          />
        </Link>
      </div>
      <div className="menuIcons" id="schedule">
        <Link to="/schedule">
          <Event
            style={{
              color: 'white',
            }}
          />
        </Link>
      </div>
      <div className="menuIcons" id="contact">
        <Link to="/contact">
          <Call
            style={{
              color: 'white',
            }}
          />
        </Link>
      </div>
    </div>
  )
}

export default Nav
