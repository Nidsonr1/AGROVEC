import {React, useState} from 'react'; 
import { MdEmail, MdLock } from "react-icons/md";
import api from '../../services/api'
import "./css/login.css";
import { Link, useHistory } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try { 
      const response = await api.post('/user/login', {email, password});

      localStorage.setItem('userId', response.data.id)
      localStorage.setItem('userName', response.data.name)
      
      alert(response.data.msg)
      history.push('/');
    } catch (error) {
      alert(`[${error.response.status}] ${error.response.data.error}`)
    }
  }

  return (
    <section>
      <div className="backGround">
        <div className="loginmae">
          <div className="login">
           <form onSubmit={handleLogin}>
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
