import React from 'react'
import { Home } from '@mui/icons-material'

import './Nav.css'

const Nav = () => {
  return (
    <div class="menu" ng-controller="menuCtrl" id="mainMenu">
      <div class="menuIcons" id="dashboard" ng-click="clickIcon(menu.label)">
        <Home
          style={{
            color: 'white',
            position: 'absolute',
          }}
        />
        {/* <p class="menuLabel" ng-if="menu.label!='expand'">
          DASHBOARD
        </p> */}
      </div>
    </div>
  )
}

export default Nav
