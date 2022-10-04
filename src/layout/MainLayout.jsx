import React from 'react';
import { Navbar, Footer } from '../components';
import './MainLayout.css'

export function MainLayout({ children }) {

  return (
    <>
      <header className='header'>
        <Navbar />
      </header>
      <section>
        { children }
      </section>
      <footer className='footer'>
        <Footer />
      </footer>
    </>
  )
}