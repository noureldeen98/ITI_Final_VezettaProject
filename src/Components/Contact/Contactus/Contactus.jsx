import React, { Component } from 'react';
import NavbarComponent from '../../home/header/NavbarComponent';
import Footer from '../../home/footer/Footer';
import BigTab from '../../home/tabToggle/BigTab';
import "../style/style.css";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

//اتصل بنا 
export default function ContactUS() {
    const [t, i18n] = useTranslation();

    return (
        <>
            <NavbarComponent />
            <BigTab />
            <div className="container-fluid">
                <div className="row my-4" id="thirdDiv">
                    <div className="container col-lg-6 col-sm-12 my-3">
                        <h2 style={{ color: "#0d6efd" }}>{t('CotactUS')}</h2>
                        <p> {t('pContactUs')}</p>
                        <form className="needs-validation" noValidate>
                            {/* first colome */}

                            <div className="row " style={{ margin: "auto", marginTop: "1rem" }}>
                                <div className="col-lg-3  col-sm-12">
                                    <label htmlFor="validationCustom01">{t('userName')}</label>
                                    <sup style={{ color: "red" }}> *</sup>
                                </div>

                                <div className="col-lg-9">
                                    <input type="text" className="form-control container-fluid" id="validationCustom01" required
                                        placeholder={t('placeHolderName')}/>
                                    <div className="valid-feedback">{t('validName')}</div>
                                </div>
                            </div>

                            <div className="row " style={{ margin: "auto", marginTop: "1rem" }}>
                                <div className="col-lg-3  col-sm-12">
                                    <label htmlFor="validationCustom01">{t('phoneNumber')}</label>
                                    <sup style={{ color: "red" }}> *</sup>
                                </div>

                                <div className="col-lg-9">
                                    <input type="text" className="form-control container-fluid" id="validationCustom01" required
                                        placeholder={t('placeHolderPhone')}/>
                                    <div className="valid-feedback">{t('validPhone')}</div>
                                </div>
                            </div>
                            <div className="row " style={{ margin: "auto", marginTop: "1rem" }}>
                                <div className="col-lg-3  col-sm-12">
                                    <label htmlFor="validationCustomUsername">{t('Emaile')}</label>
                                    <sup style={{ color: "red" }}> *</sup>
                                </div>
                                <div className="col-lg-9">
                                    <input type="text" className="form-control container-fluid" id="validationCustomUsername"
                                        aria-describedby="inputGroupPrepend" required placeholder={t('Emaile')} />
                                    <div className="invalid-feedback">
                                       {t('validEmail')}
                                    </div>
                                </div>
                            </div>
                            <div className="row " style={{ margin: "auto", marginTop: "1rem" }}>
                                <div className="col-lg-3  col-sm-12">
                                    <label htmlFor="validationCustom05" className="form-label">{t('commit')}</label>
                                    <sup style={{ color: "red" }}> *</sup>
                                </div>
                                <div className="col-lg-9">
                                    <textarea type="text" className="form-control container-fluid" id="validationCustom05"
                                        required></textarea>
                                    <div className="invalid-feedback">{t('validCommit')}
                                    </div>

                                    <Link to={"/home"}>
                                        <button className="btn btn-danger my-2 " type="submit"> {t('Send')} </button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div id="sec-line" className="col-lg-1 col-md-block"></div>
                    <div className="col-lg-5 col-sm-12 my-3">
                        <div className="container" id="sec-col">
                            <div className="row">
                                <h2 style={{ color: "#0d6efd" }}>{t('CotactUS')}</h2>
                                <p> {t('callSalary')}</p>
                            </div>
                            <div className="row">
                                <p>{t('abroad')} </p>
                                <p> +2 02 259 83 999</p>
                            </div>
                            <div className="row">
                                <h3 style={{ color: "#0d6efd" }}>{t('Adress')}</h3>
                                <p>{t('AdressContactus')}</p>
                            </div>
                            <div>
                                <h3 style={{ color: "#0d6efd" }}>{t('sendUs')}</h3>
                                <p>customercare@vezeeta.com</p>
                                <ul>
                                    <li className="col itemSec">
                                        <Link to="https://www.facebook.com/Vezeeta/"><i className="fab fa-facebook-f"></i></Link>
                                    </li>
                                    <li className="col itemSec ">
                                        <Link to="https://www.instagram.com/vezeeta/">
                                            <i className="fab fa-instagram"></i>
                                        </Link>
                                    </li>
                                    <li className="col itemSec">
                                        <Link to="https://twitter.com/VEZEETA_Egypt"><i className="fab fa-twitter"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )


}