
import React from 'react';
import './App.css';
import Doctorcard from './Components/Card/DoctorCard'
import NavbarComponent from './Components/home/header/NavbarComponent';
import HomeSlider from './Components/home/homeSlider/HomeSlider';
import BigTab from './Components/home/tabToggle/BigTab';
import TabToggle from './Components/home/tabToggle/TabToggle';

function App() {
  return (
    <React.Fragment>
        <NavbarComponent />
        <HomeSlider />
      {/* <TabToggle /> */}
    {/* <h1>Vezeeta website</h1>
    <button className='btn btn-danger'>HI</button>
    <Doctorcard/> */}
    </React.Fragment>
  )
}

export default App;
