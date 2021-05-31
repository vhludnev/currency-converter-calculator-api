import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Rate from '../Rate/Rate';
import About from '../About/About';
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
              <Route exact path="/about" component={About}></Route>
            </Switch>          
          </main>          
        </div> 
        <Footer />
      </Router>
    </div>
  );
}

export default App;
