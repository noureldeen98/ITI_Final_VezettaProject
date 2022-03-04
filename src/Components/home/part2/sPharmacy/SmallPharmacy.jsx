import React, { useContext } from 'react';
import style from './smallPharmacy.module.css';
import pic1 from '../../../../Images/part2/part2Img1.png';
import pic2 from '../../../../Images/part2/part2Img2.png';
import CallVisitLink from '../call-visit-link/CallVisitLink';
import { Link } from 'react-router-dom';
import Pharmacy from '../../../Pharmacy/Pharmacy';
import { langContext } from '../../../../Context/LangContext';


export default function SmallPharmacy() {
    const {lang, setLang} = useContext(langContext)
    let data = [
        {
            titleAR: 'مكالمة دكتور', id: 1,
            bodyAR: 'للمتابعه عبر مكالمة صوتية او فيديو', img: pic1,
            title: 'Teleconsultation',
            body: 'Schedule a voice or video call with a specialized doctor.'
            
        },
        {
            titleAR: 'زيارة منزلية', id: 2,
            bodyAR: 'اختار التخصص والدكتور هيجيلك البيت', img: pic2,
            title: 'Home Visit',
            body: 'Choose the specialty, and the doctor will visit you at home.'
        }
    ]
    return <>
        <div className={`${style.p} row g-0`}>
            <div className={`row ${style.part2} justify-content-center mx-0 my-4`}>
                <div className={`col-lg-9 col-md-12 col-sm-12`}>
                    <h1 className={`py-4 ${style.part2Head}`}>
                        {lang=='en'? 'حلول جديدة لرعاية افضل اليك' : 
                        'New services for better healthcare'}
                    </h1>
                    <div className={`card ${style.part2Card} flex-sm-row`}>
                        <div className="d-md-none">
                        
                        </div>
                        <div className="card-body" id="pCard">
                            <h2 className={`card-title ${style.cT}`}>
                            {lang=='en'? 'صيدلية': 'Pharmacy'}
                            </h2>
                            <p className="card-text">
                                {lang=='en'? ' اطلب ادويتك وكل اللى تحتاجه من الصيدلية'
                                : 'Get your medicine and all your pharmacy needs'}
                            </p>
                            <Link to='/pharmacy'
                                className={`btn btn-light px-5`}> 
                                {lang=='en'? 'اطلب الان' : 'Place Order'}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`row ${style.part2b} justify-content-center mx-0 my-4`}>
                {/* hena ba2i l components */}
                {data.map(d => (
                    <CallVisitLink data={d} key={d.id} />
                ))}
            </div>
        </div>
    </>
}
