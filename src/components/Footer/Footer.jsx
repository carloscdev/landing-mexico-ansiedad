import {Link} from 'react-router-dom';
import './Footer.css'
import logoFooter from '../../assets/img/logos/logo-uam.png';
import logoPrincipal from '../../assets/img/logos/logoprincipalansiedad.png'
import instagram from '../../assets/img/logos/instagram.png'

export const Footer = () => {
  return (
    <>
      <div className="containFooter">
        <div className='containFooter__logo'>
          <img src={logoFooter} alt="" />
        </div>
        <div className='containFooter__user'>
          <p>Luis Ricardo Casasola García</p>
        </div>
        <div className='containFooter__social'>
          <Link to="/">
            <img className='containFooter__social--logoPrincipal' src={logoPrincipal} alt="" />
          </Link>
          <img className='containFooter__social--instagram' src={instagram} alt="" />
        </div>
      </div>
    </>
  )
}