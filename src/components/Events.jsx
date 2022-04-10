import React, { useRef, useState } from 'react'
import { Grid } from '@mui/material'

import './Events.css'

const events = [
  {
    eventId: 63,
    name: 'Spell Bee',
    description:
      'A spell bee is a competition in which contestants are asked to spell a broad selection of words, usually with a varying degree of difficulty.Spell bee allows participants to compete in a supportive environment. The brain activity and excitement that goes with a spell bee is just as stimulating as physical competition, which means that the whole competition can pump up the adrenaline of the contestants and the audience alike.',
    image:
      'https://ik.imagekit.io/v7f424mhzsk/Technovation_2k22/bee_lchC19h14.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649352606235',
    coordinators: [
      {
        name: 'Akshaya Mishra',
        mobile: 9455689465,
        email: 'akshayamishra2319@gmail.com',
      },
      {
        name: 'saba Parvez',
        mobile: 8931926306,
        email: 'deparvezsaba16@gmail.com',
      },
      {
        name: 'saba Parvez',
        mobile: 8931926306,
        email: 'deparvezsaba16@gmail.com',
      },
    ],
    rules: [
      'The pronouncer discloses the word to be spelled. He recites gradually and clearly,without altering the regular pronunciation of the word.',
      'The speller listens carefully to the pronouncer and asks for the word to be repeated if necessary.',
      'The speller is given 1 minutes to spell the given word.',
      'When the speller is sure she/he comprehends the word, she/he pronounces it, spells it,and then says the word again. She/he must say it loud enough for the judge to hear it.',
      'The jury determines whether or not the word was spelled correctly.',
      'If the correct spelling was given, the speller stays in the competition.',
      'If the spelling was incorrect, that speller is eliminated from the competition. The judge gives the correct spelling of that word. Then the pronouncer reads a new word to the next participant.',
      'When there are only two spellers left, if one participant misspells a word, the other participant must spell that word correctly, plus one more word to be announced as the winner of the spell bee.',
    ],
    teamType: 'Solo',
    category: 'Literary',
    color1: '#0C4F39',
    color2: '#F8CC3E',
  },
  {
    eventId: 64,
    name: 'Tark-Vitark',
    description:
      'We are presenting Tark-Vitark, a stimulating debate competition as a part of our technical fest “Technovation 2022”. Debates are the vehicles of change in the society as by addressing, dialogue and management but also go the process of understanding, analysing , and acquisition. Do you have what it takes to be the best among the best? Are you the one who is bold and clear, then this is right event for you to participate. Come and get the taste of university level debate.',
    image:
      'https://ik.imagekit.io/v7f424mhzsk/Technovation_2k22/debate__SIoGDgSU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649352606612',
    coordinators: [
      {
        name: 'Mansi Singh',
        mobile: 8448312843,
        email: 'Singhmansi343@gmail.com',
      },
      {
        name: 'Sandeep Kumar Maurya',
        mobile: 6388600148,
        email: 'Sk0276200@gmail.com',
      },
    ],
    rules: [
      'Debate will be conducted in two rounds, that are following-',
      'First round()-',
      'Format will be conventional debate. In this round, students will be allowed to participate in a team of two; one speaker for the motion and the other against it.',
      'The topic of this round will be announced at least two days before the date of event.',
      'Only top-10 team will qualify for next round.',
      'Second round()-',
      'In this round, Turncoat debate will be held means participants have to speak first in for the motion then against the motion afterward conclusion .',
      'First round qualified team members have to participate individually in this round.',
      'Topic of this round will be announced at the time of debate.',
      'Rules and Regulations:-',
      'The competition will be bilingual, i.e., participants can speak either in Hindi or English. Mixing of languages will not be permitted.',
      'Participants are requested to kindly maintain the decorum during the event. Misbehave with coordinators, judges, and other participants will not be tolerated anymore.',
      'A confirmation will be sent to the participants a day before the event.',
      'In first round, each participant will be allowed to speak for two minutes. There will be a warning bell after 1 minute 30 seconds notifying the speaker to wind up the motion. Speakers must adhere to given time limit.',
      'In second round, total three minutes will be given to each participants ,one minute for for the motion of the topic ,other one minute for against the motion of the topic, & last one minute for conclusion.',
      'One interjection per participant will be allowed means no cross questions.',
      'The decision of the judges will be final, and binding.Performance will be judged in the following four criteria. Fluency of the speaker. Clarity of thought and topic as well. Ability to use logic and right fact to refute arguments of opponents. Confidence & Body language.',
    ],
    teamType: 'Team',
    category: 'Literary',
    color1: '#AD5D08',
    color2: '#8CBEB2',
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
                <img src={event.image} alt={event.name} />
              </div>
              <figcaption>
                <div className="label">
                  <h3 className="heading">{event.name}</h3>
                  <p className="heading">{event.category}</p>
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
