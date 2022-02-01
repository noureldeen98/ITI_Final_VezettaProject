import React from 'react';
import "./PHeader.css";
import Logo from '../../../Images/pharmacy/logo'

export default function PHeader() {
    return <>
        (
        <header className="row">
            <nav className="navbar navbar-expand-md navbar-dark header1">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="/offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end offcanvas-style" tabIndex="-1" id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close btn-close-white text-reset"
                                data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body can-spaces">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item can-style">
                                    <a className="nav-link active nav-element pe-4 can-hide" href="tel://16676">اتصل بنا:
                                        16676
                                    </a>
                                    <a className="nav-link active nav-element can-show" href="tel://16676">اتصل الآن :
                                        16676
                                    </a>
                                </li>
                                <li className="nav-item can-style">
                                    <a className="nav-link active nav-element pe-5" aria-current="page" href="/">English</a>
                                </li>
                                <li className="nav-item can-style">
                                    <button type="button" className="btn login btn-light can-hide" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">
                                        دخول
                                    </button>
                                    <a className="nav-link active nav-element can-show" data-bs-target="#exampleModal"
                                        data-bs-toggle="modal" aria-current="page" href="/">دخول</a>
                                    <div className="modal fade" id="exampleModal" tabIndex="-1"
                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content mcs">
                                                <div className="modal-header ">
                                                    <h5 className="modal-title text-dark modal-h"
                                                        id="exampleModalLabel">تسجيل
                                                        الدخول</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        )   </>;
}