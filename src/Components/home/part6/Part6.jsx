import React, { useEffect, useState } from 'react';
import style from './Part6.module.css';
import SmallBtn from './SmallBtn';
export default function Part6() {
    const docs = ['دكتور جلدية', 'دكتور اسنان', 'دكتور نفسي', 'دكتور اطفال وحديثي الولادة', 
                    'دكتور مخ واعصاب', 'دكتور عظام', 'دكتور نساء وتوليد', 
                    'دكتور انف واذن وحنجرة', 'دكتور قلب واوعية دموية',
                    'عرض المزيد...'];
    const cities = ['القاهرة', 'الجيزة', 'الاسكندرية', 'الساحل الشمالى', 'القليوبية', 
                    'الغربية', 'المنوفية', 'الفيوم', 
                    'الدقهلية', 'عرض المزيد...'];
    const [docsState, setDocsState] = useState(docs);
    const [citiesState, setCitiesState] = useState(cities);

    return <>
    <div className={style.part6} style={{'width': '100%', 'overflow':'hidden'}}>
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="row py-5">
                    <div className="col-md-6 col-12">
                        <h3 className='py-1'>إختار التخصص وإحجز كشف دكتور</h3>
                        <div>
                            {/* hena l buttons bta3 l doc */}
                            {docsState.map((data, index) => (
                                <SmallBtn key={index} data={data} />
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <h3 className='py-1'>إختار المحافظة وإحجز كشف دكتور</h3>
                        <div id={style.citiesSpan}>
                            {/* hena l buttons bta3 l doc */}
                            {citiesState.map((data, index) => (
                                <SmallBtn key={index} data={data} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>;
}
