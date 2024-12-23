import styled from 'styled-components'
import KasaLogo from '../../assets/LogoFooter.png'

const FooterContainer = styled.footer`
  height: 129px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: black;
`

const P = styled.p`
  margin-top: 45.56px;
  color: white;
  font-weight: 500px;
  font-size: 24px;
`

const Kasa_Logo = styled.img`
  width: 122px;
  margin-top: 26px;
`

function Footer() {
  return (
    <FooterContainer>
      <Kasa_Logo src={KasaLogo} />
      <P>© 2020 Kasa. All rights reserved</P>
    </FooterContainer>
  )
}

export default Footer
