import { Link } from 'react-router-dom'
import KasaLogo from '../../assets/LOGO.png'
import KasaLogoFooter from '../../assets/LogoFooter.png'
import PropTypes from 'prop-types'
import '../../style/style.css'

function Layout({ children }) {
  return (
    <div>
      <header>
        <img src={KasaLogo} />
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">A Propos</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <img src={KasaLogoFooter} />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
