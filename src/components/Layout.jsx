import React from 'react'

import BgLeft from './BgLeft'
import BgRight from './BgRight'
import './Layout.css'
import './Forms.css'

function Layout({ tl, tl2, children }) {
  return (
    <>
      <BgLeft />
      <BgRight />
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
