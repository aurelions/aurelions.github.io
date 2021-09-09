import React from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './Navbar'
import {FaBars} from 'react-icons/fa'


const Navbar = ({toggle}) => {


      return (

            <>
                  <Nav>

                        <NavbarContainer>

                              <NavLogo to="home" 
                              smooth={true}
                              duration={1000}
                              spy={true}
                              exact='true'
                              offset={-80}>
                                    TMWEBITECHTURE
                              </NavLogo>

                              <MobileIcon onClick={toggle}>
                                    <FaBars />
                              </MobileIcon>

                              <NavMenu>

                                    <NavItem>

                                          <NavLinks to='about' smooth={true}
                                                duration={1000}
                                                spy={true}
                                                exact='true'
                                                offset={-80}
                                                >
                                                About
                                          </NavLinks>

                                    </NavItem>

                                    <NavItem>

                                          <NavLinks to='projects'
                                          smooth={true}
                                          duration={1000}
                                          spy={true}
                                          exact='true'
                                          offset={-80}>
                                                Projects
                                          </NavLinks>

                                    </NavItem>

                                    <NavItem>

                                          <NavLinks to='contact'
                                          smooth={true}
                                          duration={1000}
                                          spy={true}
                                          exact='true'
                                          offset={-80}>
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