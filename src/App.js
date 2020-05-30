import React, { Component } from 'react';
import './App.css';
import './GT.css';
import Header from './components/header';
import About from './components/about';
import Research from './components/research';
import Banking from './components/banking';
import QCF from './components/qcf';
import Events from './components/events';
import CorporateAffiliates from './components/corporateaffiliates';
import News from './components/news';
import People from './components/people';
import Footer from './components/footer';
import {BrowserRouter,Router, Route, Switch} from 'react-router-dom';
import history from './components/history';

function App() {
    return (
      <div className="App">
      <Router history = {history}>
        <Header />
        <Switch>
          <Route path = '/gtfintech' component = {About} exact />
          <Route path = '/gtfintech/people' component = {People} exact />
          <Route path = '/gtfintech/research' component = {Research} exact />
          <Route path = '/gtfintech/research/covid' component = {Banking} exact />
          <Route path = '/gtfintech/events' component = {Events} exact />
          <Route path = '/gtfintech/corporateaffiliates' component = {CorporateAffiliates} exact />
          <Route path = '/gtfintech/qcf' component = {QCF} exact />
          <Route path = '/gtfintech/news' component = {News} exact />
        </Switch>
        <Footer />
      </Router>
     </div>
    );
  }

export default App;
