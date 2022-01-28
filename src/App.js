
import React from 'react';
import './App.css';
import Doctorcard from './Components/Card/DoctorCard'
import NavbarComponent from './Components/home/header/NavbarComponent';
import TabToggle from './Components/home/tabToggle/TabToggle';

function App() {
  return (
    <React.Fragment>
      <NavbarComponent />
      <TabToggle />
    {/* <h1>Vezeeta website</h1>
    <button className='btn btn-danger'>HI</button>
    <Doctorcard/> */}
    </React.Fragment>
  )
}

export default App;
