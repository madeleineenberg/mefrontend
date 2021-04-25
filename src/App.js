import React, { Fragment } from 'react';
import './App.scss';
import "./fontello/css/fontello.css";

import { Switch, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Navigation from './components/Navigation';
import Checkout from './pages/Checkout';

function App() {

  return (
    <Fragment>
      <Switch >
      
        <Route path="/checkout" >
          <Navigation props=":page"/>
          <Checkout/>
        </Route>

        <Route path="/shop" >
          <Navigation props=":page"/>
          <Shop/>
        </Route>

        <Route path="/contact">
          <Navigation props=":page"/>
          <Contact/>
        </Route>
        
        <Route path="/about">
          <Navigation props=":page"/>
          <About/>
        </Route>

        <Route path="/portfolio">
          <Navigation props=":page"/>
          <Portfolio/>
        </Route>
      
        <Route path="/">
          <Navigation props=":page"/>
          <StartPage/>
        </Route>
      
      </Switch>
    </Fragment>
  );
}

export default App;
