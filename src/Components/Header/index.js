import React from 'react'
import Video from '../../videos/video.mp4'
import { HeaderContainer, HeaderBg, VideoBg, HeaderContent, HeaderH1, HeaderP} from './Header'
import Button from '../Button'

const Header = () => {
      return (
            <HeaderContainer>

                  <HeaderBg>

                        <VideoBg autoPlay loop muted src={Video} type='video/mp4'>

                        </VideoBg>

                  </HeaderBg>

                  <HeaderContent>

                        <HeaderH1>New Found Passion</HeaderH1>

                        <HeaderP>
                              Hello! I am a full-stack web developer. I am extremely passionate and love building amazing websites with my mind!
                        </HeaderP>

                  </HeaderContent>

            </HeaderContainer>
      )
}

export default Header
