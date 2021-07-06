import React from 'react';
import { MdEmail, MdLock } from "react-icons/md";
import "./css/register.css";
import { Link } from 'react-router-dom';




export default function Register() {



  return (

    <section>

      <div style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(https://i.pinimg.com/originals/21/1f/04/211f04d43dee3856c5c152d7b16d4a3c.jpg)`, width: "1366px", height: "658px" }}>




        <div className="loginmae">

          <div className="login">

            <h1>LOGIN</h1>

            <div className="loginInputEmail">
              <MdEmail /><input placeholder="Digite um email" />
            </div>

            <div className="loginInputPassword">
              <MdLock /><input placeholder="Digite sua senha" />
            </div>

            <button type="submit">ENTRAR</button>
            <h4>Não Possui uma conta?</h4>
            <button type="submit">CADASTRE-SE</button>
            <Link to="" className="link">ESQUEÇEU A SENHA?</Link>
          
          </div>

        </div>

      </div>

    </section>
  )
}
