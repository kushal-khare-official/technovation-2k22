import React from 'react'
import { Grid } from '@mui/material'

import './Contact.css'
import Nav from './Nav'

const Contact = () => {
  return (
    <>
      <Nav />
      <Grid container className="popups">
        <Grid item md={6} className="popCall">
          <div>
            <h1>About Us:</h1>
            <p>
              Institute of Engineering and Rural Technology, Prayagraj has been
              a pioneering educational strip for over 67 years. It facilitates
              students who have achieved par excellence in academics and
              organization. <br /> TECHNOVATION is the annual tech fest of IERT
              that portrays a forum for alike minds to immerse in the current
              happenings in the realm of Tech with a variety of fun activities
              and boosts the growth of Technology in India. <br />
              TECHNOVATION urges students on a big scale to participate in a
              variety of events like Robo War, C legacy, Rocket Propulsion,
              Shark Tank, Squid Game, Selfievation, Money Heist, so on.
            </p>
          </div>
          <div className="popMail">
            <h1>Email Id:</h1>
            <p>technovation@iert.ac.in</p>
          </div>
          <div className="popMail">
            <h1>Head Coordinator:</h1>
            <p>Khushvinder Singh Rajput (+91-63915 11267)</p>
          </div>
          <div className="popMail">
            <h1>Student Helpline</h1>
            <p>Kushal Khare (+91 95544 09188)</p>
            <p>Rohit Kumar (+91-63875 40764)</p>
          </div>
        </Grid>
        <Grid item md={6} className="popMap">
          <iframe
            title="GMaps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28815.609890972737!2d81.8683115!3d25.4733037!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aca86aaaaaaab%3A0x7fce282beaac48d1!2sInstitute%20of%20Engineering%20and%20Rural%20Technology%2C%20Prayagraj!5e0!3m2!1sen!2sin!4v1650563264139!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
      </Grid>
    </>
  )
}

export default Contact
