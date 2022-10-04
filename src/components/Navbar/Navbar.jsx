import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bar from '../../assets/img/logos/bar.svg';
import close from '../../assets/img/logos/close.svg';
import './Navbar.css';
import logo from '../../assets/img/logos/logoprincipalansiedad.png';

export function Navbar() {

  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const handleToggle = () =>{
    setToggle(!toggle);
  }
  const handleToggle2 = () =>{
    setToggle2(!toggle2)
  }
  const menu = [
    {
      path: '/identificacion',
      title: 'Identificación'
    },
    {
      path: '/primerosAuxilios',
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
  ]

  return (
    <>
      <div className={toggle ? 'navbar__expanded' : 'navbar'}>
        <Link to="/">
          <img  className='navbar__logo' src={logo} alt="" />
        </Link>
        <ul>
          {
            menu.map((item, index) => (
              <li onClick={handleToggle} key={index}>
                <Link to={item.path}>
                  { item.title }
                </Link>
              </li>
            ))
          }
        </ul>
        <div className='navbar__menu' onClick={handleToggle}>
          {toggle ? <img src={close} alt="" /> : <img src={bar} alt="" />}
        </div>
      </div>
    </>
  )
}