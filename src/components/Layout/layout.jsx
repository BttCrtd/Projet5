import { Link, useLocation } from 'react-router-dom'
import KasaLogo from '../../assets/LOGO.png'
import KasaLogoFooter from '../../assets/LogoFooter.png'

import '../../style/style.css'

function Layout({ children }) {
  const activeLink = useLocation()
  return (
    <div>
      <header>
        <img src={KasaLogo} />
        <nav>
          <Link to="/" className={activeLink.pathname === '/' ? 'active' : ''}>
            Accueil
          </Link>
          <Link
            to="/about"
            className={activeLink.pathname === '/about' ? 'active' : ''}
          >
            A Propos
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <img src={KasaLogoFooter} />
        <div>
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
