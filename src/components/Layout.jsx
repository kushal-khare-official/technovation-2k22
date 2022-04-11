import React from 'react'
import { Button, Box } from '@mui/material'

import BgLeft from './BgLeft'
import BgRight from './BgRight'
import './Layout.css'
import './Forms.css'

function Layout({
  polygons1,
  polygons2,
  children,
}) {
  return (
    <>
      <BgLeft polygons1={polygons1} />
      <BgRight polygons2={polygons2} />
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
      {children}
    </>
  )
}

export default Layout
