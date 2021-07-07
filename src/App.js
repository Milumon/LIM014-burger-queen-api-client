import React from 'react'; 
import Navbar from './pages/Navbar';
import Home from './pages/Home'; 
import Notification from './pages/Notification';
import Configuration from './pages/Configuration';
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
          <Route path='/notification' component={Notification} />
          <Route path='/configuration' component={Configuration} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
