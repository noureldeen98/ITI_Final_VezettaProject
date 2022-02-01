import React from "react";
import "./App.css";
import Pharmacy from "./Components/Pharmacy/Pharmacy";



function App() {
  return (
    <React.Fragment>
      <Pharmacy />

import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './pages/homePage';
import ModalPage from './pages/ModalPage';
import NotFound from './Components/ui/NotFound.jsx'
function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home'/>
        </Route>
        <Route path='/home' component={HomePage}/>
        <Route path='/visiting' component={ModalPage} />
        <Route path='**' component={NotFound} />
      </Switch>
      {/* <TabToggle /> */}
    {/* <h1>Vezeeta website</h1>
    <button className='btn btn-danger'>HI</button>
    <Doctorcard/> */}

    </React.Fragment>
  );
}

export default App;
