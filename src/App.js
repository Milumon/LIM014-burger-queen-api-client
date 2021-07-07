import React from 'react'; 
import Navbar from './pages/Navbar';
import Home from './pages/Home'; 
import Orders from './pages/Orders';
import Products from './pages/Products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route path='/' exact component={Login} />
          <Route path='/home' exact component={Home} />
          <Route path='/orders' component={Orders} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
