import React from 'react'
import { CloseIcon, Icon, SidebarContainer } from './SidebarElements'

export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      EN CONSTRUCCION
    </SidebarContainer>
  )
}
