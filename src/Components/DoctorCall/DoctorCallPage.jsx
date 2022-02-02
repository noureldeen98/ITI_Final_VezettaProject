import NavbarComponent from './../home/header/NavbarComponent'
import Footer from './../home/footer/Footer'
import TopHeader from './TopHeader/TopHeader'
import Accordion from './Accordion/Accordion'
import './DoctorcallPage.css'
import DoctorPartMerge from './DoctorPartMerge/DoctorPartMerge'


const DoctorCallPage=()=>{
  

return(
    <>
    <NavbarComponent />
        <TopHeader/>
        <DoctorPartMerge/>
        <Accordion/>
        <Footer />
    </>
)

}
export default DoctorCallPage;