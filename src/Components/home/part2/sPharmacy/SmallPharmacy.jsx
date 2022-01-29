import React from 'react';
import style from './smallPharmacy.module.css';
import pic1 from '../../../../Images/part2/part2Img1.png';
import pic2 from '../../../../Images/part2/part2Img2.png';
import CallVisitLink from '../call-visit-link/CallVisitLink';
export default function SmallPharmacy() {
    let data = [
        {title: 'مكالمة دكتور', id: 1,
        body: 'للمتابعه عبر مكالمة صوتية او فيديو', img: pic1},
        {title: 'زيارة منزلية', id: 2,
        body: 'اختار التخصص والدكتور هيجيلك البيت', img: pic2}
    ]
    return <>
        <div className={`${style.p} row`}>
            <div className={`row ${style.part2} justify-content-center mx-0 my-4`}>
                <div className={`col-lg-9 col-md-12 col-sm-12`}>
                    <h1 className={`py-4 ${style.part2Head}`}>حلول جديدة لرعاية أفضل ليك</h1>
                    <div className={`card ${style.part2Card} flex-sm-row`}>
                        <div className="d-md-none">
                            
                        </div>
                        <div className="card-body">
                            <h2 className={`card-title ${style.cT}`}>صيدلية</h2> 
                            <p className="card-text">
                                اطلب ادويتك وكل اللى تحتاجه من الصيدلية
                            </p>
                            <a href="./pharmacy.html" 
                            className={`btn btn-light px-5`}>اطلب الان</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`row ${style.part2b} justify-content-center mx-0 my-4`}>
                {/* hena ba2i l components */}
                {data.map(d=> (
                    <CallVisitLink data={d} key={d.id} />
                ))}
            </div>
        </div>
    </>
}
