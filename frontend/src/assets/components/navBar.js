import React from 'react';
import { Link } from 'react-router-dom';

import Logopng from '../../assets/img/agrovecpng.png'

export default function NavBar(props) {
  return(
    <div className="divmae">
    {/* LOGO NAVBAR */}
    <img src={Logopng} alt="" />
    {/* MENU NAVBAR */}
    <nav className="container-nav">
      <ul>
        <li>
          <Link 
            className="nav-link" 
            style={{ color: props.cor }} 
            to="/">INÍCIO</Link>
        </li>
        <li>
          <Link 
            className="nav-link" 
            style={{ color: props.cor }} 
            to="">PRODUTOS</Link>
        </li>
        <li>
          <Link 
            className="nav-link" 
            style={{ color: props.cor }} 
            to="/Empresa">EMPRESA</Link>
        </li>
        <li>
          <Link 
            className="nav-link" 
            style={{ color: props.cor }} 
            to="/Contato">CONTATO</Link>
        </li>
      </ul>
    </nav>
  </div>
  );
}