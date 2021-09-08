import React from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './Navbar'
import {FaBars} from 'react-icons/fa'


const Navbar = ({toggle}) => {


      return (

            <>
                  <Nav>

                        <NavbarContainer>

                              <NavLogo to="/">
                                    TMWEBITECHTURE
                              </NavLogo>

                              <MobileIcon onClick={toggle}>
                                    <FaBars />
                              </MobileIcon>

                              <NavMenu>

                                    <NavItem>

                                          <NavLinks to='about'>
                                                About
                                          </NavLinks>

                                    </NavItem>

                                    <NavItem>

                                          <NavLinks to='projects'>
                                                Projects
                                          </NavLinks>

                                    </NavItem>

                                    <NavItem>

                                          <NavLinks to='contact'>
                                                Contact Me
                                          </NavLinks>

                                    </NavItem>

                              </NavMenu>

                              

                        </NavbarContainer>

                  </Nav>   
            </>
      )
}

export default Navbar;