
import React from 'react';
import './App.css';
import Doctorcard from './Components/Card/DoctorCard'
import NavbarComponent from './Components/home/header/NavbarComponent';
import HomeSlider from './Components/home/homeSlider/HomeSlider';
import TabToggle from './Components/home/tabToggle/TabToggle';
import CovidPage from './Components/CovidComponent/CovidPage'
import HealthOfTeethUI from './Components/healthOfComponentUI/healthOfTeethUI'

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
