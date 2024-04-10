import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

// BEM -> Block Element Modifier

const Menu = () => (
  <>
   <p><a href="#home">Home</a></p>
        <p><a href="#whatgodgonecrazy">What is GPT?</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case studies</a></p>
        <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="godgonecrazy__navbar">
      <div className="godgonecrazy__navbar-links">
        <div className="godgonecrazy__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="godgonecrazy__navbar-links_container">
       <Menu />
        </div>
       </div>
       <div className="godgonecrazy__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign Up</button>
       </div>
       <div className="godgonecrazy__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff"  size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff"  size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="godgonecrazy__navbar-menu_container scale-up-center">
            <div className="godgonecrazy__navbar-menu_container-links">
             <Menu />
             <div className="godgonecrazy__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign Up</button>
             </div>
            </div>
          </div>
        )}
        </div>
    </div>
  )
}

export default Navbar
