import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About.js'
import Home from './pages/Home.js'
import Products from './pages/Products.js';
import Registration from './pages/registration.js';



function App()
{
  return (
    <Router>
       <div className="App">
        <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route  path="/About" component={About}></Route>
              <Route  path="/Products" component={Products}></Route>
              <Route  path="/registration" component={Registration}></Route>
              
          </Switch>

      </div>
    </Router>


  );
   
  
}

export default App;
