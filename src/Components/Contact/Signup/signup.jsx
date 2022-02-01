import React, { useState } from 'react';
import NavbarComponent from "../../home/header/NavbarComponent";
import Footer from "../../home/footer/Footer";
import style from "../style/style.css"
import {Link} from 'react-router-dom'
// انضم الان 
export default function Signup() {



    return (

        <div>
            <NavbarComponent />
            <div className='row w-75' id="form">
                <form className="needs-validation" action="./Home.html" onsubmit="Done(event)" novalidate>
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
                            <label for="validationCustom01">الاسم</label>
                            <sup style={{ color: "red" }}> *</sup>
                        </div>
                        <div className="col-9">
                            <input type="text" className="form-control container-fluid" id="FullName" required
                                placeholder="الاسم بالكامل" itemid="" />
                            <div className="valid-feedback">يرجى ادخال الاسم</div>
                        </div>
                    </div>
                    {/* two */}
                    <div className="row iteam-form">
                        <div className="col-lg-3  col-sm-12">
                            <label for="validationCustom02">رقم الموبايل</label>
                            <sup style={{ color: "red" }}> *</sup>
                        </div>

                        <div className="col-lg-9">
                            <input type="text" class="form-control container-fluid" required placeholder="رقم الموبايل" id="Phone" />
                            <div className="valid-feedback">يرجى ادخال رقم الموبايل</div>
                        </div>
                    </div>
                    {/* three */}
                    <div className="row iteam-form">
                        <div className="col-lg-3  col-sm-12">
                            <label for="validationCustomUsername">البريدالالكتروني</label>
                            <sup style={{ color: "red" }}> *</sup>
                        </div>
                        <div class="col-lg-9">
                            <input type="text" class="form-control container-fluid" aria-describedby="inputGroupPrepend"
                                required placeholder="البريد الالكتروني" id="Email" />
                            <div className="invalid-feedback">
                                يرجى ادخال البريدالالكتروني
                            </div>
                        </div>
                        {/* four */}
                        <div className="row iteam-form">
                            <div className="col-lg-3  col-sm-12">
                                <label for="validationCustomUsername">النوع</label>
                                <sup style={{ color: "red" }}> *</sup>
                            </div>
                            <div className="col-lg-9">
                                <label style={{ paddingLeft: "2rem" }}>
                                    انثي
                                    <input type="radio" name="type" id="male" autocomplete="off" />
                                </label>
                                <label style={{ paddingLeft: "2rem;" }}>
                                    ذكر
                                    <input type="radio" name="type" id="female" autocomplete="off" />
                                </label>
                            </div>

                        </div>
                        {/* five */}
                        <div className="row iteam-form">
                            <div className="col-lg-3  col-sm-12">
                                <label for="validationCustom01"> تاريخ الميلاد</label>
                            </div>

                            <div className="col-lg-9">
                                <input type="text" className="form-control container-fluid" placeholder="تاريخ الميلاد" id="DateBirth" />
                            </div>
                        </div>
                        {/* six */}
                        <div className="row iteam-form">
                            <div className="col-lg-3  col-sm-12">
                                <label for="validationCustom01">كلمه المرور</label>
                                <sup style={{ color: "red" }}> *</sup>
                            </div>

                            <div className="col-lg-9">
                                <input type="password" className="form-control container-fluid" required placeholder="كلمه المرور" id="Password" />
                                <div className="valid-feedback">يرجى ادخال كلمه المرور </div>
                            </div>
                        </div>
                        {/* seven */}
                        <div className="row iteam-form">
                            <div className="col-lg-3 col-md-12"></div>
                            <div className="form-check form-switch col-lg-9 col-md-12">
                                <label clclassNameass="form-check-label" for="flexSwitchCheckDefault">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                    إضافة التأمين الطبي
                                </label>
                                <p>بقيامك بالتسجيل فانت توافق على الشروط و القوانين</p>
                                <a href="./دخول.html"><button type="submit" className="btn btn-danger" id="sign-up" onclick="Save()">اشترك الان</button></a>
                            </div>

                        </div>

                        <div style={{clear:"both", margin:"0%"}}></div>
                        <hr className="mx-2" />
                        <div className="row" style={{textAlign:"center"}}>
                            <p>مسجل بالفعل في فيزيتا؟ <Link to="/Signin" style={{textDecoration:"underline"}}>دخول</Link></p>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}
