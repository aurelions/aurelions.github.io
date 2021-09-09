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

                              <SidebarLink to='about' onClick={toggle}
                              smooth={true}
                              duration={1000}
                              spy={true}
                              exact='true'
                              offset={-80}>
                                    About
                              </SidebarLink>

                        </SidebarMenu>

                        <SidebarMenu>

                              <SidebarLink to='projects' onClick={toggle}
                              smooth={true}
                              duration={1000}
                              spy={true}
                              exact='true'
                              offset={-80}>
                                    Projects
                              </SidebarLink>

                        </SidebarMenu>

                        <SidebarMenu>

                              <SidebarLink to='contact' onClick={toggle}
                              smooth={true}
                              duration={1000}
                              spy={true}
                              exact='true'
                              offset={-80}>
                                    Contact Me
                              </SidebarLink>

                        </SidebarMenu>

                        

                  </SidebarWrapper>

            </SidebarContainer>
      )
}

export default Sidebar
