import React, {useEffect, useState} from 'react';
import pic1 from '../../Images/Modal/1.png';
import pic2 from '../../Images/Modal/2.png';
import pic3 from '../../Images/Modal/3.png';
import pic4 from '../../Images/Modal/4.png';
import pic5 from '../../Images/Modal/5.png';
import pic6 from '../../Images/Modal/6.png';
import pic7 from '../../Images/Modal/7.png';
import pic8 from '../../Images/Modal/8.png';
import pic9 from '../../Images/Modal/9.png';
import pic10 from '../../Images/Modal/10.png';
import pic11 from '../../Images/Modal/11.png';
import pic12 from '../../Images/Modal/12.png';
import bg from '../../Images/Modal/map.png';
import style from './Modal.module.css';
import SingleDept from './SingleDept';
import NavbarComponent from '../home/header/NavbarComponent';
import Footer from '../home/footer/Footer';
import $ from 'jquery';
export default function ModalComponent() {
    const deptName = [
        {name: 'جلدية', pic: pic1},
        {name: 'نفسي', pic: pic2},
        {name: 'اطفال وحديثي الولادة', pic: pic3},
        {name: 'مخ واعصاب', pic: pic4},
        {name: 'عظام', pic: pic5},
        {name: 'انف واذن وحنجرة', pic: pic6},
        {name: 'قلب واوعية دموية', pic: pic7},
        {name: 'باطنة', pic: pic8},
        {name: 'جراحة واوعية دموية', pic: pic9},
        {name: 'جراحة عامة', pic: pic10},
        {name: 'صدر وجهاز تنفسي', pic: pic11},
        {name: 'علاج طبيعي واصابات ملاعب', pic: pic12},

    ]
    const [deptState, setDeptState] = useState(deptName);
    // useEffect(() => {
    //     // $(document).(function() {
    //     //     $("#staticBackdrop").modal('show');
    //     // });
    //     $('#staticBackdrop').modal('show');
    //     // window.$
    // }, [])
    return <>
    
    <NavbarComponent />
    <div className={`${style.content}`} style={{'width': '100%', 
        'backgroundImage': `url(${bg})`, 'marginTop': '-2%'}}>
            {/* <!-- Modal --> */}
            <div className={`${style.staticBackdrop}`} id="staticBackdrop" 
            // data-bs-backdrop="static"
                data-bs-keyboard="false" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content my-5">
                        <div className="modal-header" id={style.modalHeader}>
                            <h5 className="modal-title">
                                اختار التخصص
                            </h5>
                        </div>
                        <div className="modal-body" id={style.modalBody}>
                            {/* <!-- hena l dynamic code --> */}
                            <div className="modal-body" id={style.modalBody}>
                            {deptState.map((el, index) => (
                                <SingleDept key={index} data={el} />
                            ))}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <Footer />
    </>;
}
