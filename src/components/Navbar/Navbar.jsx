import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {

  const menu = [
    {
      path: '/identificacion',
      title: 'Identificacion'
    }
  ]

  return (
    <div>
      <h2>djcadaniel</h2>
      <ul>
        {
          menu.map((item, index) => (
            <li key={index}>
              <Link to={item.path }>
                { item.title }
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
