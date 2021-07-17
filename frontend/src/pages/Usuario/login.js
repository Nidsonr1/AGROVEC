import {React, useState} from 'react'; 
import { MdEmail, MdLock } from "react-icons/md";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.minimal.css';
import api from '../../services/api';
import "./css/login.css";
import { Link, Redirect, useHistory } from 'react-router-dom';

import userFunctions from '../../assets/functions/userFunctions';
// import handleLogin from '../../assets/functions/userFunctions';

export default function Register() {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  toast.configure();
  const history = useHistory();

  return (
    <section>
      <div className="backGround">
        <div className="loginmae">
          <div className="login">
           <form onSubmit={(e) => {
              e.preventDefault();
              const res = userFunctions.handleLogin(email, password);
              if(res) {
                <Redirect to="../Home/home.js" />
              }
              }
            }>
           <h1>LOGIN</h1>
            <div className="loginInputEmail">
              <MdEmail />
              <input 
                placeholder="Digite um email" 
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="loginInputPassword">
              <MdLock />
              <input 
                placeholder="Digite sua senha" 
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}  
              />
            </div>

            <button type="submit">ENTRAR</button>
            <h4>Não Possui uma conta?</h4>
            <button type="submit">CADASTRE-SE</button>
            <Link to="" className="link">ESQUEÇEU A SENHA?</Link>
           </form>
          </div>
        </div>
      </div>
    </section>
  )
}
