import React from 'react'
import { Button, Box } from '@mui/material'

import BgLeft from './BgLeft'
import BgRight from './BgRight'
import './Layout.css'
import './Forms.css'

function Layout({
  classes,
  main,
  home,
  registerBtn,
  tl,
  tl2,
  animateMain,
  children,
}) {
  return (
    <>
      <BgLeft timeline={tl} />
      <BgRight timeline={tl2} />
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <main ref={main}>
        <header>
          <h1>Technovation</h1>
          <h4>27th-30th April, 2K22</h4>
        </header>
        <Button
          style={{
            position: 'absolute',
            top: '45vh',
            height: '200px',
            marginLeft: '50%',
            transform: 'translateX(-50%)',
          }}
          ref={registerBtn}
          onClick={animateMain}
        >
          <div className="indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Button>
        <Box className={classes.root} ref={home}>
          {children}
        </Box>
      </main>
    </>
  )
}

export default Layout
