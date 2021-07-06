import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import Logo from '../../assets/img/LOGOAGROVEC.jpg'
import produtos from '../../assets/img/produtox.png'
import logofooter from '../../assets/img/logofooter.png'
import { FiMapPin, FiMail, FiPhone, FiFacebook, FiInstagram } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import Logopng from '../../assets/img/agrovecpng.png'



export default function Home() {

  return (

    <section>

<div style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(https://i.pinimg.com/originals/21/1f/04/211f04d43dee3856c5c152d7b16d4a3c.jpg)`, width: "1351px", height: "658px" }}>

      {/* NAVBAR */}
      <div className="divmae">
        {/* LOGO NAVBAR */}
        <img src={Logopng} alt="" />
        {/* MENU NAVBAR */}
        <nav className="container-nav">
          <ul>
            <li>
              <Link className="nav-link" to="">INÍCIO</Link>
            </li>
            <li>
              <Link className="nav-link" to="">PRODUTOS</Link>
            </li>
            <li>
              <Link className="nav-link" to="/Empresa">EMPRESA</Link>
            </li>
            <li>
              <Link className="nav-link" to="/Contato">CONTATO</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* APRESENTAÇÃO */}
      <div className="apresentacao">
        <h2>- Bem-vindo a Agrovec -</h2>
        <h1>FÁBRICA DE RAÇÃO PARA ANIMAIS</h1>
      </div>
      {/* LOGO APRESENTAÇÃO */}
      <div className="midpage">
        <div className="logos">
          <img src={Logopng} alt="" />
        </div>
        {/* TEXTO APRESENTAÇÃO */}
        <div className="fabricacao">
          <h2>Nossa Filosofia</h2>
          <h1>FABRICAÇÃO COM EXELÊNCIA</h1>
          <p>AGROVEC (Fábrica de alimentos para animais) visa a excelência<br></br>
            na prestação de serviços, inovação e satisfação dos clientes<br></br>
            assegurando nossa expansão e desenvolvimento.</p>
          {/* BOTÃO APRESENTAÇÃO */}
          <button className="button" type="subtmit">LEIA MAIS</button>
        </div>
      </div>

      {/* PRODUTOS */}
      <div className="produtos">
        <h1>NOSSOS PRINCIPAIS PRODUTOS</h1>
      </div>
      {/* LISTA DE PRODUTOS */}
      <div className="produtosv">
        <div className="produto">
          <img src={produtos} alt="" />
          <h3>PRODUTO 1</h3>
          <h4>Descrição do produto</h4>
          <li>
            <Link to="">Confira mais sobre ➔ </Link>
          </li>
        </div>

        <div className="produto">
          <img src={produtos} alt="" />
          <h3>PRODUTO 2</h3>
          <h4>Descrição do produto</h4>
          <li>
            <Link to="">Confira mais sobre ➔  </Link>
          </li>
        </div>

        <div className="produto">
          <img src={produtos} alt="" />
          <h3>PRODUTO 3</h3>
          <h4>Descrição do produto</h4>
          <li>
            <Link to="">Confira mais sobre ➔ </Link>
          </li>
        </div>



        {/* ENDPAGE */}
      </div>
      <div className="endpagemae">
        <div className="endpage">
          <div className="textos">
            <h2>Diretamente da nossa fábrica</h2>
            <p>"Todos os nossos produtos sempre passam por um longo, completo e primoroso<br></br> processo de produção, com objetivo de entregar sempre o melhor para<br></br> nossos clientes, e garantindo a  maior qualidade já vista no mercado."
            </p>
          </div>
        </div>
        <div class="textos2">
          <h1>O MELHOR PARA O <br></br>
            NOSSO CLIENTE!
          </h1>
          {/* BOTAO ENDPAGE */}
          <button className="button2" type="subtmit">PRODUTOS</button>
        </div>
      </div>



      {/* RODAPÉ*/}
      <div className="main-footer">
        <div className="container-footer">
          <div className="row">
            {/* coluna 0 */}
            <div className="col">
              <h4 className="list-unstyled">
                <img src={logofooter} alt="" />
                <li className="endereco">
                  <FiMapPin size={25} color="b87333" style={{ padding: 5 }} />
                  AV. Davi Araújo Nobre – 45
                  <li className="bairro">Barro Branco. Crato-CE</li>
                </li>
                <li className="email">
                  <FiMail size={25} color="b87333" style={{ padding: 5 }} />
                  agrovecdobrasil@gmail.com
                </li>
              </h4>
            </div>
            {/* coluna 1 */}
            <div className="col">
              <ui className="list-unstyled">
                <div className="contatos">
                  <li className="numero">
                    <FiPhone size={65} color="b87333" style={{ paddingRight: 13, marginTop: 12, }} />
                    Fábrica<br></br>
                    (88)99999-9999
                  </li>
                  <li className="numero">
                    <FaWhatsapp size={70} color="b87333" style={{ padding: 10, marginLeft: -10 }} />
                    WhatsApp<br></br>
                    (88)99999-9999
                  </li>
                </div>
              </ui>
            </div>
            {/* coluna 2 */}
            <div className="col">
              <ui className="list-unstyled">
                <div className="bar">
                  <ul>
                    <li>
                      <Link>INÍCIO</Link>
                    </li>
                    <li>
                      <Link>PRODUTOS</Link>
                    </li>
                    <li>
                      <Link to="/Empresa">EMPRESA</Link>
                    </li>
                    <li>
                      <Link>CONTATO</Link>
                    </li>
                  </ul>
                </div>
              </ui>
            </div>
            {/* Coluna 3 */}
            <div className="col-3">
              <h5>SIGA NOSSAS<br></br> REDES SOCIAIS</h5>
              <ui className="list-unstyled">
                <div className="redesociais">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/elojobimprove">
                        <FiFacebook
                          className="facebook-icon"
                          size={40} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FiInstagram className="instagram-icon" size={40} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FiMail className="email-icon" size={40} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FaWhatsapp className="whatsapp-icon" size={40} />
                      </a>
                    </li>
                  </ul>
                </div>
              </ui>
            </div>
          </div>
          {/* DIREITOS RESERVADOS */}
          <hr />
          <div className="row">
            <p className="col-sm" style={{ textAlign: 'center' }}>
              ©2021 Agrovec do Brasil. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
      </div>

    </section >

  )
}
