import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo2 from '../../../Images/pharmacy/logo-blue'
import './PFooter.css'

export default function PFooter() {
    const { t } = useTranslation();
    return (
        <>
            <footer className="footer row pt-1 pb-1 ps-5 pe-5">
                <div className="footer-container">
                    <div className="footer-right can-hide">
                        <img src={Logo2} alt="logo" />
                        <ul>
                            <li>
                                {t('Footer_Element1')}
                            </li>
                            <li>
                                {t('Footer_Element2')}
                            </li>
                            <li>
                                {t('Footer_Element3')}
                            </li>
                            <li>
                                {t('Footer_Element4')}
                            </li>
                        </ul>
                    </div>
                    <span className="can-show footer-rule">
                        {t('Footer_Title')}
                    </span>
                    <span className="can-show footer-rule" style={{ fontSize: "13px", textAlign: "center" }}>
                        {t('Footer_SubTitle')}
                    </span>
                    <div className="social-media-container">
                        <a rel="noreferrer" target="_blank" href="https://www.facebook.com/Vezeeta/">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                        <a rel="noreferrer" target="_blank" href="https://twitter.com/VEZEETA_Egypt">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/vezeeta/">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
