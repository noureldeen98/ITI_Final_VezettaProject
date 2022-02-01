import React from 'react';
import NavbarComponent from '../Components/home/header/NavbarComponent';
import HomeSlider from '../Components/home/homeSlider/HomeSlider';
import SmallPharmacy from '../Components/home/part2/sPharmacy/SmallPharmacy';
import Corona from '../Components/home/part3/corona/Corona';
import DeptSlider from '../Components/home/part4/DeptSlider';
import Part5 from '../Components/home/part5/Part5';
import Part6 from '../Components/home/part6/Part6';
import Footer from '../Components/home/footer/Footer';
export default function HomePage() {
    return <>
        <NavbarComponent />
        <HomeSlider />
        <SmallPharmacy />
        <Corona />
        <DeptSlider />
        <Part5 />
        <Part6 />
        <Footer />
    </>;
}
