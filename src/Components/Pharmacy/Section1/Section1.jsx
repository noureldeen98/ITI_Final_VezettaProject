import React from 'react';
import './Section1.css';
import { Row } from "react-bootstrap";
import bolt from '../../../Images/pharmacy/bolt.png';
import calender from '../../../Images/pharmacy/calender.png'
import doctor from '../../../Images/pharmacy/doctor.png'
import delivery from '../../../Images/pharmacy/delivery.png'
import { useTranslation } from "react-i18next";

export default function Section1() {
    const { t } = useTranslation();

    return (
        <Row className="section1">

            <img alt="icon" src={delivery} className="delivery-image" />

            <div>
                <h1 className="section1-title">
                    {t('Section1_Title')}
                </h1>
            </div>

            <div className="main-banner">

                <div className="main-banner-icons">
                    <img alt="icon" src={bolt} />
                    <div>
                        {t('Section1_Element1')}
                    </div>
                </div>

                <div className="main-banner-icons">
                    <img alt="icon" src={calender} />
                    <div>
                        {t('Section1_Element2')}
                    </div>
                </div>

                <div className="main-banner-icons">
                    <img alt="icon" src={doctor} />
                    <div>
                        {t('Section1_Element3')}
                    </div>
                </div>

            </div>
        </Row>
    );
}
