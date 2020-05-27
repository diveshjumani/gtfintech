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

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Router history = {history}>
      <div className="App">
        <Header />
        <Switch>
          <Route path = '/' component = {About} exact />
          <Route path = '/people' component = {People} exact />
          <Route path = '/research' component = {Research} exact />
          <Route path = '/research/banking' component = {Banking} exact />
          <Route path = '/events' component = {Events} exact />
          <Route path = '/corporateaffiliates' component = {CorporateAffiliates} exact />
          <Route path = '/qcf' component = {QCF} exact />
          <Route path = '/news' component = {News} exact />
        </Switch>
        <Footer />
      </div>
      </Router>
      </BrowserRouter>
    );
  }
}

export default App;
