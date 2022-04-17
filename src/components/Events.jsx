import React, { useRef, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Grid } from '@mui/material'
import { CancelOutlined } from '@mui/icons-material'

import Nav from './Nav'
import eventData from '../utils/eventsDetails'
import './Events.css'

function Events({ classes }) {
  const eventRef = useRef()

  const navigate = useNavigate()

  let { category } = useParams()

  category = category ? category : 'category'

  const [searchParams] = useSearchParams()

  const [currentEvent, setCurrentEvent] = useState(
    eventData[category][searchParams.get('eventId')]
  )

  const triggerEventDetails = (category, i) => {
    if (category === 'category') {
      navigate(eventData[category][i].link)
    } else {
      if (i >= 0) {
        setCurrentEvent(eventData[category][i])
      } else {
        setCurrentEvent(null)
      }
    }
  }

  return (
    <>
      <Nav />
      <Grid container spacing={0} className="grid cs-style-4">
        {Object.keys(eventData[category]).map((eventId) => {
          const event = eventData[category][eventId]
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="eventCont"
              key={eventId}
            >
              <figure>
                <div
                  className="img"
                  style={{ backgroundImage: `url(${event.image})` }}
                ></div>
                <figcaption>
                  <div className="label">
                    <h3 className="heading">{event.name}</h3>
                    <p className="heading">{event.category}</p>
                  </div>
                  <div
                    className="openBtn"
                    onClick={() => triggerEventDetails(category, eventId)}
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 129 129"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      enableBackground="new 0 0 129 129"
                      height="20px"
                      width="20px"
                      fill="white"
                    >
                      <g>
                        <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z" />
                      </g>
                    </svg>
                  </div>
                </figcaption>
              </figure>
            </Grid>
          )
        })}
      </Grid>
      <Grid
        container
        className={`eventInfoTab ${currentEvent ? 'ng-enter' : 'ng-leave'}`}
        ref={eventRef}
      >
        {currentEvent ? (
          <>
            <div className="closeBtn" onClick={triggerEventDetails}>
              <CancelOutlined
                fontSize="large"
                style={{ color: currentEvent.color1 }}
              />
            </div>

            <Grid item xs={12} sm={12} md={12} id="phone-eventHeadingCont">
              <div
                className="eventHeading"
                style={{ backgroundColor: currentEvent.color2, height: 'auto' }}
              >
                <h1 id="eventHeading">{currentEvent.name}</h1>
              </div>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              className="event-leftPane"
              id="event-leftPane"
              style={{ backgroundColor: currentEvent.color1 }}
            >
              <img
                className="eventImg"
                src={currentEvent.image}
                alt={currentEvent.name}
              />

              {currentEvent.coordinators.map((c, i) => (
                <div className="coordiantor" key={i}>
                  <p>
                    Event Co-ordinator :<br /> {c.name}
                  </p>

                  <p>
                    Phone :<br /> +91 {c.mobile}
                  </p>
                  <p>
                    Email :<br /> {c.email}
                  </p>
                  <a href={`mailto: ${c.email}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Capa_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 31.012 31.012"
                      style={{ enableBackground: 'new 0 0 31.012 31.012' }}
                      xmlSpace="preserve"
                      width="512px"
                      height="512px"
                    >
                      <g>
                        <g>
                          <path
                            d="M25.109,21.51c-0.123,0-0.246-0.045-0.342-0.136l-5.754-5.398c-0.201-0.188-0.211-0.505-0.022-0.706    c0.189-0.203,0.504-0.212,0.707-0.022l5.754,5.398c0.201,0.188,0.211,0.505,0.022,0.706C25.375,21.457,25.243,21.51,25.109,21.51z    "
                            fill="#FFFFFF"
                          />
                          <path
                            d="M5.902,21.51c-0.133,0-0.266-0.053-0.365-0.158c-0.189-0.201-0.179-0.518,0.022-0.706l5.756-5.398    c0.202-0.188,0.519-0.18,0.707,0.022c0.189,0.201,0.179,0.518-0.022,0.706l-5.756,5.398C6.148,21.465,6.025,21.51,5.902,21.51z"
                            fill="#FFFFFF"
                          />
                        </g>
                        <path
                          d="M28.512,26.529H2.5c-1.378,0-2.5-1.121-2.5-2.5V6.982c0-1.379,1.122-2.5,2.5-2.5h26.012c1.378,0,2.5,1.121,2.5,2.5v17.047   C31.012,25.408,29.89,26.529,28.512,26.529z M2.5,5.482c-0.827,0-1.5,0.673-1.5,1.5v17.047c0,0.827,0.673,1.5,1.5,1.5h26.012   c0.827,0,1.5-0.673,1.5-1.5V6.982c0-0.827-0.673-1.5-1.5-1.5H2.5z"
                          fill="#FFFFFF"
                        />
                        <path
                          d="M15.506,18.018c-0.665,0-1.33-0.221-1.836-0.662L0.83,6.155C0.622,5.974,0.6,5.658,0.781,5.449   c0.183-0.208,0.498-0.227,0.706-0.048l12.84,11.2c0.639,0.557,1.719,0.557,2.357,0L29.508,5.419   c0.207-0.181,0.522-0.161,0.706,0.048c0.181,0.209,0.16,0.524-0.048,0.706L17.342,17.355   C16.835,17.797,16.171,18.018,15.506,18.018z"
                          fill="#FFFFFF"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
              ))}
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <div
                className="eventHeading"
                id="eventHeadingCont"
                style={{ backgroundColor: currentEvent.color2 }}
              >
                <h1 id="eventHeading">{currentEvent.name}</h1>
                <h2
                  className="subHeading"
                  style={{ backgroundColor: currentEvent.color1 }}
                >
                  {currentEvent.category}
                </h2>
              </div>

              <div className="event-rules" id="event-rules">
                {currentEvent.rules.map((rule, i) => (
                  <ul key={i}>
                    <li>{rule}</li>
                  </ul>
                ))}
              </div>
            </Grid>
          </>
        ) : null}
      </Grid>
    </>
  )
}

export default Events
