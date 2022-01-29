
import React from 'react';
import './App.css';
import Doctorcard from './Components/Card/DoctorCard'
import NavbarComponent from './Components/home/header/NavbarComponent';
import HomeSlider from './Components/home/homeSlider/HomeSlider';
import SmallPharmacy from './Components/home/part2/sPharmacy/SmallPharmacy';
import Corona from './Components/home/part3/corona/Corona';
import BigTab from './Components/home/tabToggle/BigTab';
import TabToggle from './Components/home/tabToggle/TabToggle';

function App() {
  return (
    <React.Fragment>
        <NavbarComponent />
        <HomeSlider />
        <SmallPharmacy />
        <Corona />
      {/* <TabToggle /> */}
    {/* <h1>Vezeeta website</h1>
    <button className='btn btn-danger'>HI</button>
    <Doctorcard/> */}
    </React.Fragment>
  )
}

export default App;
