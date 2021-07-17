import api from '../../services/api';
import { Redirect, useHistory } from 'react-router-dom';
// import Redirect from 'react-router'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.minimal.css';

const userFunctions = {
  
  async handleLogin(email, password) {
    toast.configure();

    try { 
      const response = await api.post('/user/login', {email, password});
      
      localStorage.setItem('userId', response.data.id);
      localStorage.setItem('userName', response.data.name);
      localStorage.setItem('sessionToken', response.data.token);

      toast.success(`${response.data.msg}`, {
        style: { background: 'forestgreen' }
      })
      
    } catch (error) {
        toast.error(`${error.response.data.error}`)
      }
  },

}

export default userFunctions