import React from 'react'
import Appointment from '../Components/Appointements/Appointment'
import DocHeader from '../Components/Doctor/DocHeader/DocHeader'
import Footer from '../Components/home/footer/Footer'
import NavbarComponent from '../Components/home/header/NavbarComponent'

export default function AppointmentsPages() {
  return (
    <>
        <NavbarComponent/>
        <DocHeader />
        <Appointment/>
        <Footer/>
    </>
  )
}
