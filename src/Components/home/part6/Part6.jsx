import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { langContext } from '../../../Context/LangContext';
import style from './Part6.module.css';
import SmallBtn from './SmallBtn';
export default function Part6() {
    const {lang, setLang} = useContext(langContext);
    const docsAR = ['دكتور جلدية', 'دكتور اسنان', 'دكتور نفسي', 'دكتور اطفال وحديثي الولادة', 
                    'دكتور مخ واعصاب', 'دكتور عظام', 'دكتور نساء وتوليد', 
                    'دكتور انف واذن وحنجرة', 'دكتور قلب واوعية دموية',
                    'عرض المزيد...'];
    const docs = ['Dermatologist', 'Dentist', 'Psychiatrist', 'Pediatrician',
                    'Neurologist', 'Orthopedist', 'Gynecologist', 'ENT Doctor',
                    'Cardiologist', 'View More ...']
    const citiesAR = ['القاهرة', 'الجيزة', 'الاسكندرية', 'الساحل الشمالى', 'القليوبية', 
                    'الغربية', 'المنوفية', 'الفيوم', 
                    'الدقهلية', 'عرض المزيد...'];
    const cities = ['Cairo', 'Giza', 'Alexandria', 'North Coast', 'Qalyubia',
                    'Gharbia', 'Menoufia', 'Fayoum', 'El-Dakahlia', 'View More ...']
    const [docsState, setDocsState] = useState(lang==='en'?docsAR:docs);
    const [citiesState, setCitiesState] = useState(lang==='en'?citiesAR:cities);

    return <>
    <div className={style.part6} style={{'width': '100%', 'overflow':'hidden'}}>
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="row py-5">
                    <div className="col-md-6 col-12">
                        <h3 className='py-1'>
                            {lang=='en'? 'إختار التخصص وإحجز كشف دكتور' : 
                            'Choose and book from top specialties'}
                        </h3>
                        <div>
                            {/* hena l buttons bta3 l doc */}
                            {docsState.map((data, index) => (
                                <SmallBtn key={index} data={data} />
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <h3 className='py-1'>
                            {lang=='en'? 'إختار المحافظة وإحجز كشف دكتور' : 'Choose and book from top cities'}
                        
                        </h3>
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
