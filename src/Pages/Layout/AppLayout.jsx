import React from 'react';
import BarSup from '../../Components/BarSup';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer'
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <>
      <BarSup />
      <header className='sticky top-0 w-full z-50'>
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
