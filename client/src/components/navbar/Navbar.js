import React from 'react'
import { Nav, NavMenu, NavLink, Bars } from './NavbarElements'

export const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavLink to='/'>REPORTS-SISM</NavLink>
      <NavMenu>
        {/* <p>Menu</p> */}
        <Bars onClick={toggle} />

      </NavMenu>
    </Nav>
  )
}

