import React, { Component } from 'react';
import NavbarComponent from '../../home/header/NavbarComponent';
import Footer from '../../home/footer/Footer';
import BigTab from '../../home/tabToggle/BigTab';
import "../style/style.css";
import { Link } from 'react-router-dom';

//اتصل بنا 
export default function ContactUS() {
    return (
        <>
            <NavbarComponent />
            <BigTab />
            <div className="container-fluid">
                <div className="row my-4" id="thirdDiv">
                    <div className="container col-lg-6 col-sm-12 my-3">
                        <h2 style={{ color: "#0d6efd" }}>اتصل بنا</h2>
                        <p> نحن سعداء لتلقي استفساراتكم واقتراحاتكم.</p>
                        <form className="needs-validation" noValidate>
                            {/* first colome */}

                            <div className="row " style={{ margin: "auto", marginTop: "1rem" }}>
                                <div className="col-lg-3  col-sm-12">
                                    <label htmlFor="validationCustom01">الاسم</label>
                                    <sup style={{ color: "red" }}> *</sup>
                                </div>

                                <div className="col-lg-9">
                                    <input type="text" className="form-control container-fluid" id="validationCustom01" required
                                        placeholder="الاسم بالكامل" />
                                    <div className="valid-feedback">يرجى ادخال الاسم</div>
                                </div>
                            </div>

                            <div className="row " style={{ margin: "auto", marginTop: "1rem" }}>
                                <div className="col-lg-3  col-sm-12">
                                    <label htmlFor="validationCustom01">رقم الموبايل</label>
                                    <sup style={{ color: "red" }}> *</sup>
                                </div>

                                <div className="col-lg-9">
                                    <input type="text" className="form-control container-fluid" id="validationCustom01" required
                                        placeholder="الاسم بالكامل" />
                                    <div className="valid-feedback">يرجى ادخال رقم الموبايل</div>
                                </div>
                            </div>
                            <div className="row " style={{ margin: "auto", marginTop: "1rem" }}>
                                <div className="col-lg-3  col-sm-12">
                                    <label htmlFor="validationCustomUsername">البريدالالكتروني</label>
                                    <sup style={{ color: "red" }}> *</sup>
                                </div>
                                <div className="col-lg-9">
                                    <input type="text" className="form-control container-fluid" id="validationCustomUsername"
                                        aria-describedby="inputGroupPrepend" required placeholder="البريد الالكتروني" />
                                    <div className="invalid-feedback">
                                        يرجى ادخال البريدالالكتروني
                                    </div>
                                </div>
                            </div>
                            <div className="row " style={{ margin: "auto", marginTop: "1rem" }}>
                                <div className="col-lg-3  col-sm-12">
                                    <label htmlFor="validationCustom05" className="form-label">تعليقات</label>
                                    <sup style={{ color: "red" }}> *</sup>
                                </div>
                                <div className="col-lg-9">
                                    <textarea type="text" className="form-control container-fluid" id="validationCustom05"
                                        required></textarea>
                                    <div className="invalid-feedback">
                                        يرجى كتابه تعليق
                                    </div>

                                    <Link to={"/home"}>
                                        <button className="btn btn-danger my-2 " type="submit"> ارسال </button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div id="sec-line" className="col-lg-1 col-md-block"></div>
                    <div className="col-lg-5 col-sm-12 my-3">
                        <div className="container" id="sec-col">
                            <div className="row">
                                <h2 style={{ color: "#0d6efd" }}>اتصل بنا</h2>
                                <p>١٦٦٧٦ سعر مكالمة عادية</p>
                            </div>
                            <div className="row">
                                <p>من خارج مصر اتصل ب:</p>
                                <p> +2 02 259 83 999</p>
                            </div>
                            <div className="row">
                                <h3 style={{ color: "#0d6efd" }}>العنوان</h3>
                                <p>١٢٤ شارع عثمان بن عفان خلف الكليه الحربيه - مصر الجديدة</p>
                            </div>
                            <div>
                                <h3 style={{ color: "#0d6efd" }}>راسلنا على</h3>
                                <p>customercare@vezeeta.com</p>
                                <ul>
                                    <li className="col itemSec">
                                        <a href="https://www.facebook.com/Vezeeta/"><i className="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li className="col itemSec ">
                                        <a href="https://www.instagram.com/vezeeta/">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li className="col itemSec">
                                        <a href="https://twitter.com/VEZEETA_Egypt"><i className="fab fa-twitter"></i></a>
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