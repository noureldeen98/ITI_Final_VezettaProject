import React, { useState } from 'react';
import NavbarComponent from "../../home/header/NavbarComponent";
import Footer from "../../home/footer/Footer";
import style from "../style/style.css";
import { Link } from 'react-router-dom';

// الدخول
export default function Signin() {

    return (
        <>
            <NavbarComponent />
            <div className="row w-75" id="form">
                <form className="needs-validation" action="./اتصل بنا1.html" onsubmit="LoginForm(event)" novalidate>
                    <div id="one" className="row">
                        <p style={{ marginBottom: " 0%" }}>انضم الان</p>
                    </div>
                    <div className="row">
                        <button type="submit" id="butt">
                            فعل حسابك من الفيسبوك
                        </button>
                    </div>
                    <hr />
                    {/* one */}
                    <div className="row iteam-form">
                        <div className="col-lg-3  col-sm-12">
                            <label for="validationCustom01">الموبايل او البريد الالكتروني</label>
                            <sup style={{ color: "red" }}> *</sup>
                        </div>
                        <div className="col-lg-9">
                            <input type="text" className="form-control container-fluid" id="Email" required
                                placeholder="الموبايل" />
                            <div className="valid-feedback">الموبايل او البريد الالكتروني</div>
                        </div>
                    </div>
                    {/* two */}
                    <div className="row iteam-form">
                        <div className="col-lg-3  col-sm-12">
                            <label for="validationCustom02">كلمة المرور</label>
                            <sup style={{ color: "red" }}> *</sup>
                        </div>

                        <div className="col-lg-9">
                            <input type="password" className="form-control container-fluid" placeholder="كلمة المرور" id="password" required />
                            <div className="valid-feedback">كلمة المرور</div>
                        </div>
                    </div>
                    <hr className="mx-2" />

                    <div className="iteam-form">
                        <div className="row p-2" style={{textAlign:"center"}}>
                            <div className="form-check">

                                <label className="form-check-label ms-5" for="gridCheck1">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                        تذكرني
                                </label>
                                <label className="form-check-label me-5" for="gridCheck1">
                                    <a href="#"> نسيت كلمةالمرور</a>
                                </label>
                            </div>
                        </div>

                        <div style={{width:"30%", margin:"auto"}} className="row my-2">
                            <button type="submit" className="btn btn-danger">دخول</button>
                        </div>
                        <div className="row"style={{textAlign:"center"}}>
                            <p> لست مسجل في فيزيتا؟ <Link to="/Signup" style={{textDecoration:"underline"}}>انضم الان</Link></p>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}