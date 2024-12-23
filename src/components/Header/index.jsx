import { Link } from 'react-router-dom'
import styled from 'styled-components'
import KasaLogo from '../../assets/LOGO.png'

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
  font-weight: 500px;
`

const Kasa_Logo = styled.img`
  height: 68px;
`

const Head = styled.header`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  return (
    <Head>
      <Kasa_Logo src={KasaLogo} />
      <NavContainer>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A Propos</StyledLink>
      </NavContainer>
    </Head>
  )
}

export default Header
