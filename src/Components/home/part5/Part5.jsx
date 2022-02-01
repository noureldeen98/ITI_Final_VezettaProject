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
        {pic: pic1, title:'كل احتياجاتك على فيزيتا', body:'ابحث و احجز كشف مع دكتور في عيادة، مستشفى، زيارة منزلية، أو عبر مكالمة. ممكن كمان تطلب أدوية، أو تحجز خدمة أو عملية بأحسن سعر.'}
        ,{pic: pic2, title: 'تقييمات حقيقية من المرضى' , body: 'تقييمات الدكاترة من مرضى حجزوا على فيزيتا و زاروا الدكتور بالفعل.'},
        {pic: pic3, title: 'حجزك مؤكد مع الدكتور', body: 'حجزك مؤكد بمجرد اختيارك من المواعيد المتاحة للدكتور.'},
        {pic: pic4, title: 'احجز مجاناً، و ادفع في العيادة', body: 'سعر الكشف على فيزيتا نفس سعر الكشف في العيادة، بدون أي مصاريف إضافية.'}
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
