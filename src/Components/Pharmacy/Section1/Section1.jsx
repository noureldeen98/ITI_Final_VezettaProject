import React from 'react';
import './Section1.css';
import {
    Row,
    Col,
} from "react-bootstrap";
import bolt from '../../../Images/pharmacy/bolt.png';
import calender from '../../../Images/pharmacy/calender.png'
import doctor from '../../../Images/pharmacy/doctor.png'
import { useTranslation } from "react-i18next";

export default function Section1() {
    const { t } = useTranslation();
    return (
        <Row className="section1">
            <Row className="d-flex justify-content-center">
                <img alt="icon" src="/src/Images/pharmacy/delivery.png" className="can-show" />
                <h1>
                    {t('Section1_Title')}
                </h1>
            </Row>
            <Row className="main-banner pe-5 ps-5">
                <Col className="main-banner-icons me-5">
                    <img alt="icon" src={bolt} />
                    <div>
                        {t('Section1_Element1')}
                    </div>
                </Col>
                <Col className="main-banner-icons">
                    <img alt="icon" src={calender} />
                    <div>
                        {t('Section1_Element2')}
                    </div>
                </Col>
                <Col className="main-banner-icons ms-5">
                    <img alt="icon" src={doctor} />
                    <div>
                        {t('Section1_Element3')}
                    </div>
                </Col>
            </Row>
        </Row>
    );
}
