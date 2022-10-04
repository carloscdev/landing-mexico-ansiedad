import {Link} from 'react-router-dom';
import './Footer.css'
import LogoUniversidad from '../../assets/img/logos/logo-uam.png';
import LogoPrincipal from '../../assets/img/logos/logoprincipalansiedad.png'
import LogoInstagram from '../../assets/img/logos/instagram.png'

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="content footer__container">
        <div className='footer__logo'>
          <img src={LogoUniversidad} alt="Logo Universidad" width="260" />
        </div>
        <div className='footer__user'>
          <p>Luis Ricardo Casasola García</p>
        </div>
        <div className='footer__social'>
          <Link to="/">
            <img className='footer__social--logoPrincipal' src={LogoPrincipal} alt="Logo Ansiedad" width="220" />
          </Link>
          <a href="https://instagram.com/como_te_habla_la_ansiedad" target="_blank" rel="noreferrer noopener">
            <img className='footer__social--instagram' src={LogoInstagram} alt="Logo Instagram" width="50" />
          </a>
        </div>
      </section>
    </footer>
  )
}