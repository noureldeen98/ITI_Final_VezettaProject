import React from 'react';
import Logo2 from '../../../Images/pharmacy/logo-blue'
import './PFooter.css'

export default function PFooter() {
    return (
        <>

            <footer className="footer row pt-1 pb-1 ps-5 pe-5">
                <div className="footer-container">
                    <div className="footer-right can-hide">
                        <img src={Logo2} alt="logo" />
                        <ul>
                            <li>
                                من نحن
                            </li>
                            <li>
                                فريق فيزيتا
                            </li>
                            <li>
                                وظائف
                            </li>
                            <li>
                                الصحافة
                            </li>
                        </ul>
                    </div>

                    <span className="can-show footer-rule">تطبق الشروط والاحكام</span>
                    <span className="can-show footer-rule" style={{ fontSize: "13px", textAlign: "center" }}>سعداء لتلقي استفساراتكم واقتراحاتكم</span>

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
