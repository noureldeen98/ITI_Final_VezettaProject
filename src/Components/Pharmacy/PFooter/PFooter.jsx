import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo2 from '../../../Images/pharmacy/logo-blue'
import './PFooter.css'

export default function PFooter() {
    const { t } = useTranslation();
    return (
        <>
            <footer className="footer-container">

                <div className="footer-logo">
                    <img src={Logo2} alt="logo" />
                </div>

                <span className="footer-rule">
                    {t('Footer_Title')}
                </span>

                <span className="footer-rule" style={{ fontSize: "13px", textAlign: "center", fontWeight: 100 }}>
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
            </footer>
        </>
    );
}
