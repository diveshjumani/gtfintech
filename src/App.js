import React, { Component } from 'react';
import './App.css';
import './GT.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Header from './components/header';
import About from './components/about';
import Research from './components/research';
import Banking from './components/banking';
import QCF from './components/qcf';
import CorporateAffiliates from './components/corporateaffiliates';
import News from './components/news';
import People from './components/people';
import Footer from './components/footer';

class App extends Component {
    render(){
        return (
      <div className="App">
      <HashRouter basename = '/'>
        <Header />
        <Switch>  
          <Route exact path = '/' component = {About} />
          <Route path = '/gtfintech/people' component = {People} exact />
          <Route path = '/gtfintech/research' component = {Research} exact />
          <Route path = '/gtfintech/research/covid' component = {Banking} exact />
          <Route path = '/gtfintech/corporateaffiliates' component = {CorporateAffiliates} exact />
          <Route path = '/gtfintech/qcf' component = {QCF} exact />
          <Route path = '/gtfintech/news' component = {News} exact />
        </Switch>
        <Footer />
      </HashRouter>
     </div>
    );
  }
}

export default App;
