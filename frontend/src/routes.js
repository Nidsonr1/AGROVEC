import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/home';
import Produtos from './pages/Produtos/produtos';
import Contato from './pages/Contato/contato';
import Empresa from './pages/Empresa/empresa';
import Login from './pages/Usuario/login';
import Register from './pages/Usuario/register'

export default function Routes() {
  return(
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/produtos" component={Produtos}/>
      <Route path="/empresa" component={Empresa}/>
      <Route path="/contato" component={Contato}/> 
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>  
    </Switch>
  </BrowserRouter>
  );
}