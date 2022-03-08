import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import bills from '../../../Images/pharmacy/bills'
import write from '../../../Images/pharmacy/write'
import CallModal from './CallModal';
import { useTranslation } from "react-i18next";
import Search from '../Search/Search'
import './Section2.css';

export default function Section2() {
    const { t } = useTranslation();
    const [call, setCall] = useState(false);

    return (
        <>
            <Row className="section2">
                <h2>
                    {t('Section2_Title')}
                </h2>

                <Search />

                <div className="section2-icons">
                    <div className="icon-container">
                        <div className="icon-holder">
                            <button className="callBtn" onClick={() => setCall(!call)} >
                                <i className="fas fa-phone-alt"></i>
                            </button>
                        </div>
                        <div>
                            {t('Section2_Element3')}
                        </div>

                        <CallModal call={call} />

                    </div>
                    <div className="icon-container">
                        <div className="icon-holder">
                            <img alt="icon" src={bills} />
                            <input type="file" accept="image/*" />
                        </div>
                        <div>
                            {t('Section2_Element2')}
                        </div>
                    </div>
                    <div className="icon-container">
                        <div className="icon-holder">
                            <img alt="icon" src={write} />
                            <input type="file" accept="image/*" />
                        </div>
                        <div>
                            {t('Section2_Element1')}
                        </div>
                    </div>
                </div>
            </Row>
        </>)
}
