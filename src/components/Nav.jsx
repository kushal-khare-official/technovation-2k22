import React from 'react'
import { AppRegistration, Apps, Call, Event, Home } from '@mui/icons-material'

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
        <a
          href="https://ksr19101999.wixsite.com/technovation-2k22"
          target="_blank"
          rel="noreferrer"
        >
          <AppRegistration
            style={{
              color: 'white',
            }}
          />
        </a>
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
