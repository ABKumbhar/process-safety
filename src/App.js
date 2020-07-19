import React, { Fragment, useState,Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import IndustryComponent from './Components/IndustryComponent';
import NavbarComponent from './Components/NavbarComponent'
import {HashRouter, BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomeComponent from './Components/HomeComponent'
import {Provider} from 'react-redux'
import {store} from './redux/store'
import DetailComponent from './Components/DetailComponent'
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.css';

import EquipmentComponent from './Components/EquipmentComponent'
import Sitemap from 'react-router-sitemap';


class App extends Component {
  
  render() {
    return (
      <div>
          <Fragment>
       <HeaderComponent/> 
      <div>
          
          <Router >
          <Switch>
               <Route exact path="/" component={HomeComponent}/>  
            <Route path='/industry' component={IndustryComponent}/>
            <Route path='/equipment' component={EquipmentComponent}/>
            <Route path='/industry-question/:slug' component={DetailComponent}/>

          </Switch>
          
            </Router>
     </div>
     <Footer/>

     </Fragment>
      </div>
    )
  }
}



export default App;
