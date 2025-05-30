import React from 'react';
import Logo from '../Assets/logo.png';
import { NavLink } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';


export default function NavBar() {
  return (
    <div className='bg-white px-10 border border-b-2 border-wine flex justify-between items-center'>
      <img src={Logo} alt="Logo de l'entreprise le point express" className='w-32 h-auto' />
      <nav>
        <ul className="flex space-x-10 font-bold align-middle">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-wine underline underline-offset-8'
                  : 'text-black hover:text-wine'
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-wine underline underline-offset-8'
                  : 'text-black hover:text-wine'
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apropos"
              className={({ isActive }) =>
                isActive
                  ? 'text-wine underline underline-offset-8'
                  : 'text-black hover:text-wine'
              }
            >
              À propos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? 'text-wine underline underline-offset-8'
                  : 'text-black hover:text-wine'
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/traquer"
              className={({ isActive }) =>
                isActive
                  ? 'text-wine underline underline-offset-8'
                  : 'text-black hover:text-wine'
              }
            >
              Traquer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recruitement"
              className={({ isActive }) =>
                isActive
                  ? 'text-wine underline underline-offset-8'
                  : 'text-black hover:text-wine'
              }
            >
              Recrutement
            </NavLink>
          </li>
          <li>
            <NavLink to="/clientregistration">
              <PrimaryButton>
                INSCRIPTION
              </PrimaryButton>
            </NavLink>
          </li>
        </ul>
      </nav>

    </div>
  )
}
