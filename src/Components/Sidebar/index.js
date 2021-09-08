import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarWrapper } from './SidebarStyled'

const Sidebar = ({isOpen, toggle}) => {
      return (

            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                  
                  <Icon onClick={toggle}>
                        <CloseIcon />
                  </Icon>

                  <SidebarWrapper>

                        <SidebarMenu>

                              <SidebarLink to='about' onClick={toggle}>
                                    About
                              </SidebarLink>

                        </SidebarMenu>

                        <SidebarMenu>

                              <SidebarLink to='projects' onClick={toggle}>
                                    Projects
                              </SidebarLink>

                        </SidebarMenu>

                        <SidebarMenu>

                              <SidebarLink to='contact' onClick={toggle}>
                                    Contact Me
                              </SidebarLink>

                        </SidebarMenu>

                        

                  </SidebarWrapper>

            </SidebarContainer>
      )
}

export default Sidebar
