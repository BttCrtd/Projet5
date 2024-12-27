import { Link } from 'react-router-dom'
import styled from 'styled-components'
import KasaLogo from '../../assets/LOGO.png'
import KasaLogoFooter from '../../assets/LogoFooter.png'
import PropTypes from 'prop-types'

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 57px;
`
const StyledLink = styled(Link)`
  color: black;
  font-size: 24px;
  font-weight: 500;
`

const Kasa_Logo = styled.img`
  height: 68px;
`

const Head = styled.header`
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
`

const FooterContainer = styled.footer`
  height: 129px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: black;
  max-width: 1240px;
`

const P = styled.p`
  margin-top: 45.56px;
  color: white;
  font-weight: 500;
  font-size: 24px;
`

const Kasa_Logo_Footer = styled.img`
  width: 122px;
  margin-top: 26px;
`

function Layout({ children }) {
  return (
    <div>
      <Head>
        <Kasa_Logo src={KasaLogo} />
        <NavContainer>
          <StyledLink to="/">Accueil</StyledLink>
          <StyledLink to="/about">A Propos</StyledLink>
        </NavContainer>
      </Head>
      <main>{children}</main>
      <FooterContainer>
        <Kasa_Logo_Footer src={KasaLogoFooter} />
        <P>© 2020 Kasa. All rights reserved</P>
      </FooterContainer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
