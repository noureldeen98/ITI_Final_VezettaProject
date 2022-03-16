import React, { useEffect, useState } from "react";
import { auth } from "../../../FireBaseConfiguration/FirebaseConfiguration";
import NavbarComponent from "../../home/header/NavbarComponent";
import Footer from "../../home/footer/Footer";
import "../style/style.css";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';


// الدخول
export default function Signin() {

    const [Emaile, setUserEmaile] = useState("");
    const [pass, setPass] = useState("");
    const [user, setUser] = useState({});
    const history = useHistory();


    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const logInWithEmailAndPassword = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, Emaile, pass);
            localStorage.setItem("UserEmail", user.user.reloadUserInfo.email);
            history.push('/home');

            // console.log(user);
        } catch (err) {
            console.log(err);
        }
    };

    const logout = async () => {
        await signOut(auth);
        localStorage.removeItem("User")
    };

    return (
        <>
            <NavbarComponent />
            <div className="row w-75 py-4" id="form">
                <form className="needs-validation" noValidate>
                    <div id="one" className="row">
                        <p style={{ marginBottom: " 0%" }} className="text-center">انضم الان</p>
                    </div>
                    {/* <div className="row">
                        <button type="submit" id="butt">
                            فعل حسابك من الفيسبوك
                        </button>
                    </div> */}
                    <hr />
                    {/* one */}
                    <div className="row iteam-form ">
                        <div className="col-lg-3  col-sm-12">
                            <label htmlFor="validationCustom01">الموبايل او البريد الالكتروني</label>
                            <sup style={{ color: "red" }}> *</sup>
                        </div>
                        <div className="col-lg-9">
                            <input type="text" className="form-control container-fluid" id="Email" required
                                placeholder="الموبايل"
                                onChange={(event) => { setUserEmaile(event.target.value); }}
                                value={Emaile} />
                            <div className="valid-feedback">الموبايل او البريد الالكتروني</div>
                        </div>
                    </div>
                    {/* two */}
                    <div className="row iteam-form">
                        <div className="col-lg-3  col-sm-12">
                            <label htmlFor="validationCustom02">كلمة المرور</label>
                            <sup style={{ color: "red" }}> *</sup>
                        </div>

                        <div className="col-lg-9">
                            <input type="password" className="form-control container-fluid" placeholder="كلمة المرور" id="password" required
                                onChange={(event) => { setPass(event.target.value); }}
                                value={pass} />
                            <div className="valid-feedback">كلمة المرور</div>
                        </div>
                    </div>
                    <hr className="mx-2" />

                    <div className="iteam-form">
                        <div className="row" style={{ textAlign: "center" }}>
                            <div className="form-check">
                                {/* <label className="form-check-label ms-5" htmlFor="gridCheck1">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                    تذكرني
                                </label>
                                <label className="form-check-label me-5" htmlFor="gridCheck1">
                                    <a href="#"> نسيت كلمةالمرور</a>
                                </label> */}
                            </div>
                        </div>

                        <div className="row">
                            <button type="button" className="btn btn-danger"
                                onClick={() => logInWithEmailAndPassword(Emaile, pass)} style={{ width: "150px" }}>دخول</button>
                        </div>

                        <div className="row py-4" style={{ textAlign: "center" }}>
                            {user?.email}
                            <p> لست مسجل في فيزيتا؟ <Link to="/Signup" style={{ textDecoration: "underline" }}>انضم الان</Link></p>
                        </div>


                        <div>
                            <button onClick={logout}> Sign Out </button>
                        </div>

                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}