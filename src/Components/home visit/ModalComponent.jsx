import React from 'react';
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
import { useTranslation } from 'react-i18next';
export default function ModalComponent() {
    const [t, i18n] = useTranslation();
    const pics = [pic1, pic2, pic3, pic4, pic5, pic6, pic7,
        pic8, pic9, pic10, pic11, pic12];
    const dpts = t('modal', {returnObjects: true });
   
    return <>
    
    <NavbarComponent />
    <div className={`${style.content}`} style={{'width': '100%', 
        'backgroundImage': `url(${bg})`, 'marginTop': '-7%', 'height': '31.5rem'}}>
            {/* <!-- Modal --> */}
            <div className={`${style.staticBackdrop}`} id="staticBackdrop" 
            // data-bs-backdrop="static"
                data-bs-keyboard="false" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                id={style.mod}>
                    <div className="modal-content my-5 px-0" style={{'alignSelf': 'baseline'}}>
                        <div className="modal-header" id={style.modalHeader}>
                            <h5 className="modal-title">
                                {t('part7.specialty2')}
                            </h5>
                        </div>
                        <div className="modal-body " id={style.modalBody}>
                            {/* <!-- hena l dynamic code --> */}
                            <div className="modal-body" id={style.modalBody}>
                            {dpts.map((el, index) => (
                                <SingleDept key={index} data={{...el, pic: pics[index]}} />
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
