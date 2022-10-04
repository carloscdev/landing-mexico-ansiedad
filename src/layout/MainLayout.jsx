import React from 'react';
import { Navbar, Footer } from '../components';
import './MainLayout.css'

export function MainLayout({ children }) {

  return (
    <>
      <Navbar />
      <section>
        { children }
      </section>
      <footer className='footer'>
        <Footer />
      </footer>
    </>
  )
}