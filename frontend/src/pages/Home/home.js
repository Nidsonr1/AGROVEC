import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import Logo from '../../assets/img/LOGOAGROVEC.jpg'
import Logos from '../../assets/img/logo.jpg'



export default function Home() {
  return (
    <section>
      <div className="divmae">    
        <img src={Logo} alt="" />
        <nav className="container-nav">
          <ul>
            <li>
              <Link className="nav-link" to="">INÍCIO</Link>
            </li>
            <li>
              <Link className="nav-link" to="">PRODUTOS</Link>
            </li>
            <li>
              <Link className="nav-link" to="">EMPRESA</Link>
            </li>
            <li>
              <Link className="nav-link" to="">CONTATO</Link>
            </li>           
          </ul>
        </nav>
       
      </div>

      <div className="apresentacao">
        <h2>- Bem-vindo a Agrovec -</h2>
        <h1>FÁBRICA DE RAÇÃO PARA ANIMAIS</h1>
      </div>
      <div className="logos">
        <img src={Logos} alt="" />
      </div> <br></br>

      <div className="fabricacao">
        <h2>Nossa Filosofia</h2>
        <h1>FABRICAÇÃO COM EXELÊNCIA</h1>
        <p>AGROVEC (Fábrica de alimentos para animais) visa a excelência<br></br>
          na prestação de serviços, inovação e satisfação dos clientes<br></br>
          assegurando nossa expansão e desenvolvimento.</p>

        <button className="button" type="subtmit">LEIA MAIS</button>

        <div className="produtos">
          <h1>NOSSOS PRINCIPAIS PRODUTOS</h1>
        </div>

      </div>






    </section >

  )
}
