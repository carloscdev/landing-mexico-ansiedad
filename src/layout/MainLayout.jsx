import React from 'react';
import { Navbar, Footer } from '../components';
import './MainLayout.css'

export function MainLayout({ children }) {

  return (
    <>
      <Navbar />
      <div className="mainLayout">
        { children }
      </div>
      <Footer />
    </>
  )
}