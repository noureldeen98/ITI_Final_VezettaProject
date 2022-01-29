
import React from 'react';
import './App.css';
import Doctorcard from './Components/Card/DoctorCard'
import NavbarComponent from './Components/home/header/NavbarComponent';
import HomeSlider from './Components/home/homeSlider/HomeSlider';
import SmallPharmacy from './Components/home/part2/sPharmacy/SmallPharmacy';
import Corona from './Components/home/part3/corona/Corona';
import DeptSlider from './Components/home/part4/DeptSlider';

function App() {
  return (
    <React.Fragment>
        <NavbarComponent />
        <HomeSlider />
        <SmallPharmacy />
        <Corona />
        <DeptSlider />
      {/* <TabToggle /> */}
    {/* <h1>Vezeeta website</h1>
    <button className='btn btn-danger'>HI</button>
    <Doctorcard/> */}
    </React.Fragment>
  )
}

export default App;
