import React from 'react'

import { Button } from '../Button'

import { AboutContainer, AboutWrapper, AboutRow, TextWrapper, Column1, TopLine, Heading, Subtitle, Column2, BtnWrap, ImgWrap, Img } from './About'

const About = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary}) => {
      return (

            <AboutContainer lightBg={lightBg} id={id}>

                  

                  <AboutWrapper>

                        <AboutRow imgStart={imgStart}>

                              <Column1>

                                    <TextWrapper>

                                          <TopLine>

                                                {topLine}

                                          </TopLine>

                                          <Heading lightText={lightText}> 
                                                {headline}
                                          </Heading>

                                          <Subtitle darkText={darkText}>
                                                {description}
                                          </Subtitle>

                                          <BtnWrap>

                                                {/* <Button 
                                                to="https://linktr.ee/tmwebitechture"
                                                smooth={true}
                                                duration={1000}
                                                spy={true}
                                                exact='true'
                                                offset={-80}
                                                primary={primary ? 'true' : 'false'}
                                                >
                                                      {buttonLabel}
                                                </Button> */}

                                          </BtnWrap>

                                    </TextWrapper>
                              
                              </Column1>

                              <Column2>
                              
                                    <ImgWrap>
                                    
                                          <Img src={img} alt={alt}/>

                                    </ImgWrap>
                              
                              </Column2>

                              

                        </AboutRow>

                  </AboutWrapper>

            </AboutContainer>
      )
}

export default About
