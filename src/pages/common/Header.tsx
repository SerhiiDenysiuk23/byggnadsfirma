import React from 'react';
import {ReactComponent as Logo} from "../../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <Logo/>
      </div>
      <nav className='container'>
        <ul>
          <li><a href="">Tjänster</a></li>
          <li><a href="">Kontorsanpassning</a></li>
          <li><a href="">Lokalanpassning</a></li>
          <li><a href="">Fastighetsförädling</a></li>
          <li><a href="">Om INC</a></li>
          <li><a href="">Projekt</a></li>
          <li><a href="">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;