import React, { Component } from 'react';
import './App.css';
import './GT.css';
import Header from './components/header';
import About from './components/about';
import Research from './components/research_card';
import QCF from './components/qcf';
import Events from './components/events';
import CorporateAffiliates from './components/corporateaffiliates';
import News from './components/news';
import People from './components/people';
import Footer from './components/footer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path = '/' component = {About} exact />
          <Route path = '/people' component = {People} exact />
          <Route path = '/research' component = {Research} exact />
          <Route path = '/events' component = {Events} exact />
          <Route path = '/corporateaffiliates' component = {CorporateAffiliates} exact />
          <Route path = '/qcf' component = {QCF} exact />
          <Route path = '/news' component = {News} exact />
        </Switch>
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
