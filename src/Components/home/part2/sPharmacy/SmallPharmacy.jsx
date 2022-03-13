import React, { useContext } from 'react';
import style from './smallPharmacy.module.css';
import pic1 from '../../../../Images/part2/part2Img1.png';
import pic2 from '../../../../Images/part2/part2Img2.png';
import CallVisitLink from '../call-visit-link/CallVisitLink';
import { Link } from 'react-router-dom';
import Pharmacy from '../../../Pharmacy/Pharmacy';
import { langContext } from '../../../../Context/LangContext';
import { useTranslation } from 'react-i18next';
import { type } from '@testing-library/user-event/dist/type';


export default function SmallPharmacy() {
    const {lang, setLang} = useContext(langContext);
    const [t, i18n] = useTranslation();
    let data = [
        {
            title: t('part2.title1'), id: 1,
            body: t('part2.body1'), img: pic1,
        },
        {
            title: t('part2.title2'), id: 2,
            body: t('part2.body2'), img: pic2,
        }
    ];
    return <>
        <div className={`${style.p} row g-0`}>
            <div className={`row ${style.part2} justify-content-center mx-0 my-4`}>
                <div className={`col-lg-9 col-md-12 col-sm-12`}>
                    <h1 className={`py-4 ${style.part2Head}`}>
                        {t('part2.sol')}
                    </h1>
                    <div className={`card ${style.part2Card} flex-sm-row`}>
                        <div className="d-md-none">
                        
                        </div>
                        <div className="card-body" id="pCard">
                            <h2 className={`card-title ${style.cT}`}>
                                {t('part2.pharmacy')}
                            </h2>
                            <p className="card-text">
                                {t('part2.needs')}
                            </p>
                            <Link to='/pharmacy'
                                className={`btn btn-light px-5`}> 
                                    {t('part2.order')}
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

            <div>
                
            </div>
        </div>
    </>
}
