import styled from 'styled-components'

export const HeaderContainer = styled.div `
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;
`

export const HeaderBg = styled.div `
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const VideoBg = styled.video `
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`

export const HeaderContent = styled.div `
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`

export const HeaderH1 = styled.h1 `
color: #fce77d;
font-size: 48px;
text-align: center;
font-family: 'Raleway';
text-shadow: 2px 1px white;

@media screen and (max-width: 768px) {
      font-size: 40px;
}

@media screen and (max-width: 480px) {
      font-size: 32px;
}
`

export const HeaderP = styled.p `
margin-top: 24px;
color: white;
font-size: 24px;
text-align: center;
max-width: 600px;
font-family: 'Raleway';
text-shadow: 1px 1px black;

@media screen and (max-width: 768px) {
      font-size: 24px;
}

@media screen and (max-width: 480px) {
      font-size: 18px;
}

`