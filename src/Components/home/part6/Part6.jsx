import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './Part6.module.css';
import SmallBtn from './SmallBtn';
export default function Part6() {
    const [t, i18n] = useTranslation();
    const docs = t('part6.docs', {returnObjects: true }) ;
    const cities = t('part6.cities', {returnObjects: true }) ;
    return <>
    
    <div className={style.part6} style={{'width': '100%', 'overflow':'hidden'}}>
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="row py-5">
                    <div className="col-md-6 col-12">
                        <h3 className='py-1'>
                            {t('part6.book')}
                        </h3>
                        <div>
                            {
                            docs.map((data, index) => (
                                <SmallBtn key={index} data={data} />
                            ))
                            }                            
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <h3 className='py-1'>
                            {t('part6.book2')}
                        
                        </h3>
                        <div id={style.citiesSpan}>
                            {
                            cities.map((data, index) => (
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
