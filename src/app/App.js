import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Rate from '../Rate/Rate';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const App = () => {

  return (
    <div className="site">
        <Router>
        <Header />
        <div className="container main-container">
          <main>          
            <Switch>
              <Route exact path="/" component={Rate}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/contact" component={Contact}></Route>
            </Switch>          
          </main>          
        </div> 
        <Footer />
      </Router>
    </div>
  );
}

export default App;
