import React, { Component } from 'react';
import './App.css';
import './GT.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Header from './components/header/header';
import About from './components/about/about';
import Research from './components/miscellaneous/research';
import COVID from './components/research/covid';
import HouseholdFinance from './components/research/householdfinance';
import FinTech from './components/research/fintech';
import ResponsibleFinance from './components/research/responsiblefinance';
import Trading from './components/research/trading';
import CreditRisk from './components/research/creditrisk';
import MLandFinance from './components/research/MLandFinance';
import NLPandFinance from './components/research/NLPandFinance';
import FixedIncome from './components/research/fixedincome';
import Banking from './components/research/banking';
import QCF from './components/qcf/qcf';
import CorporateAffiliates from './components/corporateaffiliate/corporateaffiliates';
import News from './components/news/news';
import People from './components/people/people';
import Footer from './components/footer/footer';

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
          <Route path = '/gtfintech/research/covid' component = {COVID} exact />
          <Route path = '/gtfintech/research/householdfinance' component = {HouseholdFinance} exact />
          <Route path = '/gtfintech/research/fintech' component = {FinTech} exact />
          <Route path = '/gtfintech/research/responsiblefinance' component = {ResponsibleFinance} exact />
          <Route path = '/gtfintech/research/trading' component = {Trading} exact />
          <Route path = '/gtfintech/research/creditrisk' component = {CreditRisk} exact />
          <Route path = '/gtfintech/research/MLandFinance' component = {MLandFinance} exact />
          <Route path = '/gtfintech/research/NLPandFinance' component = {NLPandFinance} exact />
          <Route path = '/gtfintech/research/fixedincome' component = {FixedIncome} exact />
          <Route path = '/gtfintech/research/banking' component = {Banking} exact />
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
