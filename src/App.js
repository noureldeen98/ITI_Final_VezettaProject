import React from "react";
import "./App.css";
   

import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './pages/homePage';
import ModalPage from './pages/ModalPage';
import NotFound from './Components/ui/NotFound.jsx'

import ContactUS from './Components/Contact/Contactus/Contactus';
import Signup from './Components/Contact/Signup/signup';
import Signin from './Components/Contact/Signin/signin';


import BookVisitPage from './pages/BookVisitPage';
import CovidPage from './Components/CovidComponent/CovidPage'

import DoctorCallPage from './Components/DoctorCall/DoctorCallPage'
import MergeDoctor from './Components/Doctor/MergeDoctor'


function App() {
  return (
    // <React.Fragment>
    //   <Pharmacy />
    <React.Fragment>
      <Switch>
      <Route path='/' exact>
          <Redirect to='/home'/>
        </Route>
        <Route path='/home' component={HomePage}/>
        <Route path='/visiting' component={ModalPage} />

        <Route path='/Contactus' component={ContactUS}/>
        <Route path='/Signup' component={Signup}/>
        <Route path='/Signin' component={Signin}/>

        <Route path='/bookvisit' component={BookVisitPage} />
        <Route path='/covid' component={CovidPage}/>

        <Route path='/DoctorCall' component={DoctorCallPage}/>
        <Route path='/MergeDoctor/:name' component={MergeDoctor}/>
        
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
