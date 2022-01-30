
import React from 'react';
import './App.css';
import Doctorcard from './Components/Card/DoctorCard'
import Footer from './Components/home/footer/Footer';
import NavbarComponent from './Components/home/header/NavbarComponent';
import HomeSlider from './Components/home/homeSlider/HomeSlider';
import SmallPharmacy from './Components/home/part2/sPharmacy/SmallPharmacy';
import Corona from './Components/home/part3/corona/Corona';
import DeptSlider from './Components/home/part4/DeptSlider';
import Part5 from './Components/home/part5/Part5';
import Part6 from './Components/home/part6/Part6';
import DoctorCallPage from './Components/DoctorCall/DoctorCallPage'
function App() {
  return (
    <React.Fragment>
        <NavbarComponent />
        <HomeSlider />
        <SmallPharmacy />
        <Corona />
        <DeptSlider />
        <Part5 />
        <Part6 />
        <Footer />
        {/* <DoctorCallPage/> */}
      {/* <TabToggle /> */}
    {/* <h1>Vezeeta website</h1>
    <button className='btn btn-danger'>HI</button>
    <Doctorcard/> */}
    </React.Fragment>
  )
}

export default App;
