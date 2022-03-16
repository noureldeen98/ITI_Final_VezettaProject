import React, { useState } from 'react';
import style from './part5.module.css';
import VezeetaApp from './VezeetaApp';
import pic1 from '../../../Images/part5/part5p1.svg';
import pic2 from '../../../Images/part5/part5p2.svg';
import pic3 from '../../../Images/part5/part5p3.svg';
import pic4 from '../../../Images/part5/part5p4.svg';
import SingleItem from './SingleItem';
import { useTranslation } from 'react-i18next';

export default function Part5() {
    const [t, i18n] = useTranslation();
    const picOne = [pic1, pic2, pic3, pic4];
    const info = t('part5.arr', {returnObjects: true }) ;

    return <>
    <div className={style.part5} style={{'width': '100%', 'overflow': 'hidden'}}>
            <div className="row justify-content-center my-5">
                <div className="col-lg-8 col-md-12">
                    <div className={`row ${style.part5row} flex-md-column flex-lg-row`}>
                        {/* repete */}
                        {info.map((data, index) => (
                            <SingleItem key={index} info={{...data, pic: picOne[index]}}/>
                        ))}
                    </div>
                </div>
            </div>
            {/* hena l vezzetaApp */}
            <VezeetaApp />
        </div>
    </>;
}
