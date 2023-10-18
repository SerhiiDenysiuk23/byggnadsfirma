import React from 'react';
import {ReactComponent as Logo} from "../../assets/logo.svg";

const Header = () => {
  return (
    // <header>
    //   <div className='logo'>
    //     <Logo/>
    //   </div>
    //   <div className='container'>
    //     <nav>
    //       <ul>
    //         <li><a href="">Tjänster</a></li>
    //         <li><a href="">Kontorsanpassning</a></li>
    //         <li><a href="">Lokalanpassning</a></li>
    //         <li><a href="">Fastighetsförädling</a></li>
    //         <li><a href="">Om INC</a></li>
    //         <li><a href="">Projekt</a></li>
    //         <li><a href="">Kontakt</a></li>
    //       </ul>
    //     </nav>
    //   </div>
    // </header>
    <header>
      <div className='logo'>
        <Logo/>
      </div>
      <div className={'burger-menu'}>
        <div/>
      </div>

      <nav>
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