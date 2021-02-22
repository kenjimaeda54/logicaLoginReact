import React, { Component } from 'react';
import {BrowserRouter,Switch,Route, Redirect} from 'react-router-dom';


import Home   from './Pages/Home';
import Painel from  './Pages/Painel';
import {autenticado} from './autenti';


const Private=({component:Component, ...rest })=>(
    <Route {...rest} render={props =>(
        autenticado()?(
         <Component {...props}/>
        ):(
         <Redirect to={{pathname:"/", state:{from: props.location}}}/>
        )

    )}/>
)

const Rotas=() => {
    return(
      <BrowserRouter>
      
         <Switch>
            <Route exact path="/" component={Home}/>
            <Private path="/painel" component={Painel}/> 
         </Switch>     
      </BrowserRouter>
  
      );
}
export default Rotas;