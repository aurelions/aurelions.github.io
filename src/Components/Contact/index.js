import React from 'react'
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa'

import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLink, FooterLinkTitle } from './Contact'

function Contact() {
      return (


            <FooterContainer>

                  <FooterWrap>

                        <FooterLinksContainer>

                              <FooterLinksWrapper>

                                    <FooterLinkItems>

                                          <FooterLinkTitle> TMWEBITECHTURE

                                                <FooterLink href="https://github.com/aurelions" target="#">Github</FooterLink>
                                                <FooterLink href="www.linkedin.com/in/trevor-mandina" target="#">Linkedin</FooterLink>
                                                <FooterLink href="mailto: tmwebitechture@gmail.com" target="#">Email</FooterLink>


                                          </FooterLinkTitle>


                                    </FooterLinkItems>


                              </FooterLinksWrapper>


                        </FooterLinksContainer>


                  </FooterWrap>


            </FooterContainer>



            
      )
}

export default Contact
