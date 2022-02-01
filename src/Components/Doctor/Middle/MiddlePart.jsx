import AsideBooking from './../AsideBooking/AsideBooking'
import DctorInfo from './../DctorInfo/DctorInfo'
import './middlePartStyle.css'
const MiddlePart=()=>{

return(
    <>
     <div className="row second " style={{"margin":"0"}}>
        <nav aria-label="breadcrumb" id="brcrumb">
          <ol className="breadcrumb ">
            <li className="breadcrumb-item mt-2 me-5 ms-1"><a href="#" className="text-decoration-none">فيزيتا</a></li>
            <li className="breadcrumb-item active mt-2" aria-current="page">دكتورة آمال صبري</li>
          </ol>
        </nav>
    <DctorInfo/>
    <AsideBooking/>
    </div>
    </>
  )


   }

export default MiddlePart