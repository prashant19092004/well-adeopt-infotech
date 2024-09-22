import React, { useRef, useState } from 'react';
import './Navbar.css'; // Importing the CSS file
import logo from '../assets/logo.png';

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navMenu = useRef();
  const hamburger = useRef();

  const mobileMenu = () => {
    hamburger.current.classList.toggle("active");
    navMenu.current.classList.toggle("active");
  }

  const closeMenu = () =>{
    hamburger.current.classList.remove("active");
    navMenu.current.classList.remove("active");
  }

  return (
    <header class="header">
        <nav class="navbar">
            <a href="#" class="nav-logo">
              <img className='h-12 logo' src={logo} alt='logo' />
            </a>
            <ul class="nav-menu" ref={navMenu}>
                <li class="nav-item">
                    <a href="#" class="nav-link hover:text-[#22b5f3]" onClick={closeMenu}>Home</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link hover:text-[#22b5f3]" onClick={closeMenu}>About</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link hover:text-[#22b5f3]" onClick={closeMenu}>Projects</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link hover:text-[#22b5f3]" onClick={closeMenu}>Contact</a>
                </li>
            </ul>
            <div class="hamburger" ref={hamburger} onClick={mobileMenu}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    </header>
  );
};

export default Navbar;
