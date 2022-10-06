import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from '../../assets/img/logos/bar.svg';
import CloseMenu from '../../assets/img/logos/close.svg';
import './Navbar.css';
import Logo from '../../assets/img/logos/logoprincipalansiedad.png';

export function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () =>{
    const viewport = window.matchMedia("(max-width: 960px)")
    if (viewport.matches) {
      setToggleMenu((prev) => {
        if (!prev) document.body.classList.add('active');
        else document.body.classList.remove('active')
        return !prev
      });
    }
  }

  const menu = [
    {
      path: '/identificacion',
      title: 'Identificación'
    },
    {
      path: '/primeros-auxilios',
      title: 'Primeros Auxilios'
    },
    {
      path: '/tecnicas',
      title: 'Técnicas y ejercicios'
    },
    {
      path: '/recomendaciones',
      title: 'Recomendaciones'
    }
  ];

  return (
    <header className='navbar'>
      <nav className="content navbar__container">
        <div className="navbar__generic">
          <Link to="/">
            <img width="240" className='navbar__logo' src={Logo} alt="Logo Ansiedad" />
          </Link>
          <ul className={(toggleMenu && 'active') + ' navbar__list'}>
            {
              menu.map((item, index) => (
                <li onClick={handleToggleMenu} key={index}>
                  <Link to={item.path}>
                    { item.title }
                  </Link>
                </li>
              ))
            }
          </ul>
          <div className='navbar__icon' onClick={handleToggleMenu}>
            <img src={toggleMenu ? CloseMenu : BurgerMenu} alt="Burger Menu" />
          </div>
        </div>
      </nav>
    </header>
  )
}
