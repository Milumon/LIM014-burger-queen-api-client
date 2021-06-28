import React from 'react';
import Home from './Home/Home';
import MainNav from './Common/MainNav';
import Login from './Home/Login';
import Register from './Home/Register';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter> 
    <div className="App">

        <MainNav/>

        <div className="auth-wrapper">
          <div className="auth-inner">
              <Switch>
                  <Route exact path="/" component= { Home } />
                  <Route exact path="/login" component= { Login } />
                  <Route exact path="/register" component= { Register } />
              </Switch> 
          </div>
        </div>


      </div>
     </BrowserRouter>
  );
}

export default App;
