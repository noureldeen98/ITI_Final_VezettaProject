import React, { useState } from 'react';
import style from './part5.module.css';
import VezeetaApp from './VezeetaApp';
import pic1 from '../../../Images/part5/part5p1.svg';
import pic2 from '../../../Images/part5/part5p2.svg';
import pic3 from '../../../Images/part5/part5p3.svg';
import pic4 from '../../../Images/part5/part5p4.svg';
import SingleItem from './SingleItem';

export default function Part5() {
    let arr = [
        {pic: pic1, 
            titleAR:'كل احتياجاتك على فيزيتا', bodyAR:'ابحث و احجز كشف مع دكتور في عيادة، مستشفى، زيارة منزلية، أو عبر مكالمة. ممكن كمان تطلب أدوية، أو تحجز خدمة أو عملية بأحسن سعر.',
        title: 'All your healthcare needs', 
        body:'Search and book a clinic visit, home visit, or a teleconsultation. Order your medicine and book a service or operation.'}
        ,{pic: pic2, 
            titleAR: 'تقييمات حقيقية من المرضى' , title: 'Verified patient reviews',
            bodyAR: 'تقييمات الدكاترة من مرضى حجزوا على فيزيتا و زاروا الدكتور بالفعل.',
            body:'Doctor ratings are from patients who booked and visited the doctor through Vezeeta.'},
        {pic: pic3, 
            titleAR: 'حجزك مؤكد مع الدكتور', title: 'Your booking is confirmed',
            bodyAR: 'حجزك مؤكد بمجرد اختيارك من المواعيد المتاحة للدكتور.',
            body:'Your booking is automatically confirmed, as the doctor specifies his working hours and is notified of the booking details.'},
        {pic: pic4, 
            titleAR: 'احجز مجاناً، و ادفع في العيادة', title: 'Book for free, and pay in the clinic',
            bodyAR: 'سعر الكشف على فيزيتا نفس سعر الكشف في العيادة، بدون أي مصاريف إضافية.',
            body: "The consultation fees stated on Vezeeta are the actual doctor's fees with no extra charges."}
    ]
    const [info, setInfo] = useState(arr);
    return <>
    <div className={style.part5} style={{'width': '100%', 'overflow': 'hidden'}}>
            <div className="row justify-content-center my-5">
                <div className="col-lg-8 col-md-12">
                    <div className={`row ${style.part5row} flex-md-column flex-lg-row`}>
                        {/* repete */}
                        {info.map((data, index) => (
                            <SingleItem key={index} info={data}/>
                        ))}
                    </div>
                </div>
            </div>
            {/* hena l vezzetaApp */}
            <VezeetaApp />
        </div>
    </>;
}
