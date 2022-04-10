import React, { useRef, useState } from 'react'
import { Grid } from '@mui/material'

import './Events.css'

const events = [
  {
    eventName: 'Code-a-Line',
    realEventName: 'Programming',
    head: 'Ritik Gupta',
    img: 'https://tech--vista.web.app/images/events/CodeALine.jpg',
    contact: {
      phone: '8052789627',
      mail: 'ritikgupta4@gmail.com',
      fb: 'https://www.messenger.com/t/ritik.gupta.7965',
    },
    data: [
      'Each school will be represented by a team of <strong>two</strong> participants.',
      'The participants will have to write a program for a given set of problems.',
      'The participants are only allowed to use <strong>either Java or C++ </strong>to solve the given problems. ( Participants can choose their prefered language. )',
      'This will be a <strong>two-round</strong> event. Top <strong>6 teams</strong> will be selected for final round based on their performance in the first round.',
      'The duration for both the rounds will be <strong>1 hour</strong>.',
    ],
    about:
      'The feeling of instructing a computer to do your job is an amazing one. But are you the best at it?<br>Find out at <strong>Code-a-Line</strong>, a <strong>Programming</strong> event designed to test your skills against other coders and a ticking clock.',
    color1: 'black',
    color2: 'black',
  },
  {
    eventName: 'BrainBug',
    realEventName: 'Debugging',
    head: 'Shikhar Vaish',
    img: 'https://tech--vista.web.app/images/events/BrainBug.jpg',
    contact: {
      phone: '8127730749',
      mail: 'shikhar.vaish90@gmail.com',
      fb: 'https://www.messenger.com/t/svr8svr8',
    },
    timings: '',
    data: [
      'Each school will be represented by a team of <strong>two</strong> participants.',
      'All codes in the question will be in <strong>JAVA</strong> or in <strong>C++</strong>.( Participants can choose their prefered language. )',
      'The questions mentioned will be of the following types-<br><ul><li><strong>Error rectification:</strong> The participants will have to rectify the errors in the program so as to get the desired output.</li><li><strong>Hidden code:</strong> Participants are to fill the missing code so as to get the desired output.</li><li><strong>Rearrangement:</strong>  Participants are to rearrange the disordered parts in correct order to get the desired output.</li><li><strong>Predict the Output:</strong> Participants are to predict the desired output.</li></ul>',
      'The duration of this event is 1 hour.',
    ],
    about:
      ' Everybody makes mistakes and so did we, intentionally. You don’t know what they are, but you will find them, and kill them (or maybe just correct them).',
    color1: '#57C2B2',
    color2: '#57C2B2',
  },
]

function Events({ classes }) {
  const eventRef = useRef()

  const [currentEvent, setCurrentEvent] = useState()

  const triggerEventDetails = (i) => {
    if (i >= 0) {
      setCurrentEvent(events[i])
    } else {
      setCurrentEvent(null)
    }
  }

  return (
    <>
      <Grid container spacing={0} className="grid cs-style-4">
        {events.map((event, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} className="eventCont" key={i}>
            <figure>
              <div className="img" onClick={() => triggerEventDetails(i)}>
                <img src={event.img} alt={event.eventName} />
              </div>
              <figcaption>
                <div className="label">
                  <h3 className="heading">{event.eventName}</h3>
                  <p className="heading">{event.eventCatagory}</p>
                </div>
                <div className="openBtn" onClick={() => triggerEventDetails(i)}>
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
        ))}
      </Grid>
      <Grid
        container
        className={`eventInfoTab ${currentEvent ? 'ng-enter' : 'ng-leave'}`}
        ref={eventRef}
      >
        {currentEvent ? (
          <>
            <div className="closeBtn" onClick={triggerEventDetails}></div>

            <Grid item xs={12} sm={12} md={12} id="phone-eventHeadingCont">
              <div
                className="eventHeading"
                style={{ backgroundColor: currentEvent.color2, height: 'auto' }}
              >
                <h1 id="eventHeading">{currentEvent.eventName}</h1>
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
                src={currentEvent.img}
                alt={currentEvent.eventName}
              />

              <div className="coordiantor">
                <p>
                  Event Co-ordinator :<br /> {currentEvent.head}
                </p>

                <p>
                  Phone :<br /> +91 {currentEvent.contact.phone}
                </p>
                <p>
                  Email :<br /> {currentEvent.contact.mail}
                </p>
                <a href={currentEvent.contact.fb}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 48.605 48.605"
                    style={{ enableBackground: 'new 0 0 48.605 48.605' }}
                    xmlSpace="preserve"
                    width="512px"
                    height="512px"
                  >
                    <g>
                      <path
                        d="M34.094,8.688h4.756V0.005h-8.643c-0.721-0.03-9.51-0.198-11.788,8.489c-0.033,0.091-0.761,2.157-0.761,6.983l-7.903,0.024   v9.107l7.913-0.023v24.021h12.087v-24h8v-9.131h-8v-2.873C29.755,10.816,30.508,8.688,34.094,8.688z M35.755,17.474v5.131h-8v24   h-8.087V22.579l-7.913,0.023v-5.107l7.934-0.023l-0.021-1.017c-0.104-5.112,0.625-7.262,0.658-7.365   c1.966-7.482,9.473-7.106,9.795-7.086l6.729,0.002v4.683h-2.756c-4.673,0-6.338,3.054-6.338,5.912v4.873L35.755,17.474   L35.755,17.474z"
                        fill="#FFFFFF"
                      />
                    </g>
                  </svg>
                </a>
                <a href={`mailto: ${currentEvent.contact.mail}`}>
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
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <div
                className="eventHeading"
                id="eventHeadingCont"
                style={{ backgroundColor: currentEvent.color2 }}
              >
                <h1 id="eventHeading">{currentEvent.eventName}</h1>
                <h2
                  className="subHeading"
                  style={{ backgroundColor: currentEvent.color1 }}
                >
                  {currentEvent.realEventName}
                </h2>
              </div>

              <div className="event-rules" id="event-rules">
                {currentEvent.data.map((rule, i) => (
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
