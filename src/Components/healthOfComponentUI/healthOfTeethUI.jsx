import './HealthTeethStyle.css'
import { useState } from "react"
import NavbarComponent from "../home/header/NavbarComponent"
import CardOfTeeth from "../CardHealthOfTeeth/teethCard"



const HealthOfTeethUI = ()=>{

   let dataOfEachCard=[
        {id:1 , Describtion:"1 جلسة تنظيف و تلميع الاسنان" ,Image:""  ,Price:300  ,Reservation:6629  , TitleOfCard:"تنظيف و تلميع الاسنان"},
        {id:2 , Describtion:"1 جلسة تنظيف و تلميع الاسنان" ,Image:""  ,Price:300 ,Reservation:6629  , TitleOfCard:"تنظيف و تلميع الاسنان"},
        {id:3 , Describtion:"1 جلسة تنظيف و تلميع الاسنان" ,Image:""  ,Price:300  ,Reservation:6629  , TitleOfCard:"تنظيف و تلميع الاسنان"},
        {id:4 , Describtion:"1 جلسة تنظيف و تلميع الاسنان" ,Image: "" ,Price:300  ,Reservation:6629  , TitleOfCard:"تنظيف و تلميع الاسنان"},
    ]

    const [theCard]=useState(dataOfEachCard)
    return (
        <>
        <NavbarComponent/>
        <div className="navOfLgScreen justify-content-center d-none d-md-none d-lg-flex flex-lg-row " style={{textAlign: "center"}} >
    <ul className="d-lg-flex flex-lg-row" style={{listStyle: "none"}}>
           <li className="p-3 ms-3 mb-3" style={{color: "rgb(0, 112, 205)",backgroundColor: "rgb(214, 214, 214)"}}>جميع العروض</li>
           <li className="p-3 ms-3" style={{color: "black"}}> الليزر</li>
           <li className="p-3 ms-3 " style={{color: "black"}}>الشعر  </li>
           <li className="p-3 ms-3" style={{color: "black"}}>البشره </li>
           <li className="p-3 ms-3" style={{color: "black"}}> التجميل </li>
           <li className="p-3 ms-3" style={{color: "black"}}> تحاليل </li>
           <li className="p-3 ms-3" style={{color: "black"}}> رشاقه </li>
           <li className="p-3 ms-3" style={{color: "black"}}> عيون </li>
           <li className="p-3 ms-3" style={{color: "black"}}> نساءوتوليد </li>
    </ul>
  </div>

   <div className="col-8 me-1" style={{width:"100%"}}>
      <div className="d-flex flex-row row-cols-6" style={{textAlign: "center"}}>
        
        <div style={{background: "white",textAlign: "center"}} className="me-1"><img style={{width: "80%"}}  src="../Images/افضل عروض صحة الاسنان في مصر - احجز الآن _ Vezeeta.com_files/lizar.png" alt="..."/>
          <label>ليزر</label>
        </div>
        <div className="me-1"><img style={{width: "80%"}}  src="../Images/افضل عروض صحة الاسنان في مصر - احجز الآن _ Vezeeta.com_files/b4ra.png" alt="..."/></div>
        <div className="me-1"><img style={{width: "80%"}}   src="../Images/افضل عروض صحة الاسنان في مصر - احجز الآن _ Vezeeta.com_files/t7alil.png" alt="..."/></div>
        <div className="me-1"><img style={{width: "80%"}}   src="../Images/افضل عروض صحة الاسنان في مصر - احجز الآن _ Vezeeta.com_files/3ion.png" alt="..."/></div>
        <div className="me-1"><img style={{width: "80%"}}   src="../Images/افضل عروض صحة الاسنان في مصر - احجز الآن _ Vezeeta.com_files/2nf.png" alt="..."/></div>
        <div className="me-1"><img style={{width: "80%"}}   src="../Images/افضل عروض صحة الاسنان في مصر - احجز الآن _ Vezeeta.com_files/ghaz.png" alt="..."/></div>

      </div>

      <div className="d-flex flex-row row-cols-6 mt-2" style={{textAlign: "center"}}>
        <div className="me-1"><img style={{width: "80%"}}   src="../Images/افضل عروض صحة الاسنان في مصر - احجز الآن _ Vezeeta.com_files/الشعر.png" alt="..."/>
          <label>الشعر</label>
        </div>
        <div className="me-1"><img style={{width: "80%"}}   src="../Images/افضل عروض صحة الاسنان في مصر - احجز الآن _ Vezeeta.com_files/Tagmel.png" alt="..."/>
          <label>تجميل</label>
        </div>
        <div className="me-1"><img style={{width: "80%"}}   src="../Images/افضل عروض صحة الاسنان في مصر - احجز الآن _ Vezeeta.com_files/r4aqa.png" alt="..."/>
          <label>رشاقه</label>
        </div>
        <div className="me-1"><img style={{width: "80%"}}   src="../Images/افضل عروض صحة الاسنان في مصر - احجز الآن _ Vezeeta.com_files/nsa.png" alt="..."/>
          <label>نساء و توليد</label>
        </div>
        <div className="me-1"><img style={{width: "80%"}}   src="../Images/افضل عروض صحة الاسنان في مصر - احجز الآن _ Vezeeta.com_files/32546716520191125105822752.png" alt="..."/>
          <label>جراحه عامه</label></div>
        <div className="me-1"><img style={{width: "80%"}}   src="../Images/افضل عروض صحة الاسنان في مصر - احجز الآن _ Vezeeta.com_files/32546716520200127231250535.png" alt="..."/>
          <label> تناسليه و ذكوره </label></div>

      </div>
     </div>
      

        <CardOfTeeth theDataOfAdvitisement ={theCard}/>
         
        </>
    )
}
export default HealthOfTeethUI