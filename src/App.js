import React from "react";
import "./App.css";
import Pharmacy from "./Components/Pharmacy/Pharmacy";
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './pages/homePage';
import ModalPage from './pages/ModalPage';
import NotFound from './Components/ui/NotFound.jsx'
import BookVisitPage from './pages/BookVisitPage';
import DoctorCallPage from './Components/DoctorCall/DoctorCallPage'
import MergeDoctor from './Components/Doctor/MergeDoctor'
import Doctorcard from './Components/Card/DoctorCard'
import Footer from './Components/home/footer/Footer';
import NavbarComponent from './Components/home/header/NavbarComponent';
import HomeSlider from './Components/home/homeSlider/HomeSlider';
import SmallPharmacy from './Components/home/part2/sPharmacy/SmallPharmacy';
import Corona from './Components/home/part3/corona/Corona';
import DeptSlider from './Components/home/part4/DeptSlider';
import Part5 from './Components/home/part5/Part5';
import Part6 from './Components/home/part6/Part6';



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
        <Route path='/bookvisit' component={BookVisitPage} />
        <Route path='/DoctorCall' component={DoctorCallPage}/>
        <Route path='/MergeDoctor/:name' component={MergeDoctor}/>
        {/* <DoctorCallPage/> */}
        {/* <MergeDoctor/> */}
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
