import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import getDepts from '../../../ReactRedux/Actions/DeparmentsAction';
export default function TabToggle() {
    const dispatch = useDispatch();
    const depts = useSelector((state) => state.deptRed);
    useEffect(() => {
        dispatch(getDepts());
    }, [])
    console.log('my data', depts);
    return <>
        <div className="sliderContent">
                <div className="top row justify-content-end my-5">
                    <div className="col-lg-11 col-lg-12">
                        <h1>رعاية صحيه لحياه افضل ليك</h1>
                        <h2 className="d-none d-md-flex"> احجز اونلاين او كلم <span> 
                            <i className="fas fa-phone text-danger"></i></span> 16676</h2>
                    </div>
                </div>
                <div className="bottom row border rounded-5 card d-none d-md-flex"
                style="border-radius: 10px;">
                    <div className="col-12 nav nav-tabs">
                        <div className="first col-12 row">
                            <a className="reserve col-6 d-flex align-items-center active"
                                data-toggle="tab" href="#reserve">
                                <div><i className="far fa-calendar-check"></i></div>
                                <div>
                                    <h1>احجز دكتور</h1>
                                    <h4>الفحص او الاجراء</h4>
                                </div>
                            </a>
                            <a className="call col-6 d-flex align-items-center"
                            data-toggle="tab" href="#call">
                                <div> <i className="fas fa-headphones"></i></div>
                                <div>
                                    <h1> مكالمة دكتور</h1>
                                    <h4> المتابعة عبر مكالمة مع الدكتور </h4>
                                </div>
                            </a>
                        </div>
                    </div>
                    {/* <!--here--> */}
                    <div className="second tab-content">
                        <div className="d-flex align-items-center
                        tab-pane fade in active" id="reserve">
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" 
                                type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <h5>انا ابحث عن دكتور</h5>
                                    <h3>
                                        <i className="fas fa-stethoscope"></i>
                                        <span className="deptTitle">اختار التخصص</span>
                                    </h3>
                                </button>
                                <ul className="dropdown-menu deptMenu"
                                aria-labelledby="dropdownMenuButton1">
                                    <div className="ulContainer">
                                        <div className="right">
                                            <span>
                                                <li>
                                                    الاكثر اختيارا
                                                </li>
                                            </span>
                                            {/* <!----awel part x el-t5sosat------> */}
                                        </div>
                                        <div className="left">
                                            <span>
                                            <li>
                                                تخصصات اخري
                                            </li>
                                        </span>
                                            {/* <!----awel part x el-t5sosat------> */}
                                        </div>
                                    </div>
                                        {/* <div className="footer" 
                                        style="padding: 0em 2em; ">
                                            <p>صفحة 1\3</p>
                                        </div> */}
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" 
                                type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <h5>في محافظة</h5>
                                    <h3>
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span className="deptTitle">اختار المحافظة</span>
                                    </h3>
                                </button>
                                <ul className="dropdown-menu deptMenu"
                                aria-labelledby="dropdownMenuButton1">
                                    <div className="ulContainer" id="cities">
                                        <div className="right">
                                            <li>
                                                الاكثر اختيارا
                                            </li>
                                            {/* here */}
                                        </div>
                                        <div className="left ms-5">
                                            <li>
                                                محاففظات اخري
                                            </li>
                                            {/* here */}
                                        </div>
                                    </div>
                                    {/* <!-- <div className="footer" style="padding: 0em 2em; ">
                                        <p>صفحة 1\2</p>
                                    </div> --> */}
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" 
                                type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <h5>في منطقة</h5>
                                    <h3>
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span className="deptTitle">اختار المنطقة</span>
                                        {/* <!--here--> */}
                                    </h3>
                                </button>
                                <ul className="dropdown-menu deptMenu" 
                                aria-labelledby="dropdownMenuButton1">
                                <div className="ulContainer" id="areas">
                                        <div className="right">
                                            <li id="commonAreas" style="display: block;">
                                                الاكثر اختيارا
                                            </li>
                                            <span id="commonSpan">

                                            </span>
                                        </div>
                                        <div className="left">
                                            <li id="otherAreas" style="display: block;">
                                                مناطق اخري
                                            </li>
                                            <span id='otherSpan'>
                                            </span>
                                        </div>
                                </div>
                                    {/* <!-- <div className="footer" style="padding: 0em 2em; ">
                                        <p>صفحة 1\2</p>
                                    </div> --> */}
                                </ul>
                            </div>
                            <div className="doc">
                                <h5>او اكتب اسم الدكتور</h5>
                                <h3>
                                    <i className="fas fa-user-md"></i>
                                    <span> الدكتور او المستشفى</span>
                                </h3>
                            </div>
                            <div className=" bg-danger text-light" style="align-self: stretch; border-radius:10px">
                                <h3 style="text-align: center;
                                padding: 1em;">
                                    <i className="fas fa-search"></i>
                                    <span> ابحث</span>
                                </h3>
                            </div>
                        </div>
                        <div className="call1 col-6 d-flex align-items-center
                        tab-pane fade" id='call'>
                            <div className="c1 flex-3" style="flex: 3;">
                                <h5>انا ابحث عن دكتور</h5>
                                <h3>
                                    <i className="fas fa-stethoscope"></i>
                                    <span>اختار التخصص</span>
                                </h3>
                            </div>
                            <div className="c2 flex-2 bg-danger" style="flex: 1;">
                                <h3>
                                    <i className="fas fa-search"></i>
                                    <span> ابحث</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!------------layout for mobile-----------------> */}
            <div className="bottomMob row border rounded-5 d-md-none card" style="border-radius: 10px;">
                <div className="col-12 ">
                    <div className="firstMob col-12 row nav nav-tabs">
                        <a className="clinic active col-4 d-flex flex-column 
                            align-items-center"
                            data-toggle="tab" href="#clinic">
                            <h4><i className="fas fa-clinic-medical"></i></h4>
                            <h4>كشف عيادة</h4>
                        </a>
                        <a className="drug col-4 d-flex flex-column align-items-center"
                        data-toggle="tab" href="#drug">
                            <h4><i className="fas fa-pills"></i></h4>
                            <h4> اطلب ادوية</h4>
                        </a>
                        <a className="calldoc col-4 d-flex flex-column align-items-center"
                        data-toggle="tab" href="#calldoc">
                            <h4><i className="fas fa-phone"></i></h4>
                            <h4> مكالمة دكتور</h4>
                        </a>
                    </div>
                    <div className="secondMob row tab-content">
                        <div className="clinic1 col-12 d-flex align-items-center
                        tab-pane fade in" id="clinic">
                            <div className="col-12">
                                <div>
                                    <div className="mb-3">
                                        <input type="text" 
                                        className="form-control" 
                                        placeholder="ابحث بالتخصص, اسم الدكتور او المستشفى"/>
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" 
                                        className="form-control" placeholder="اختار المنطقة"/>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-danger mb-3"
                                style="width: inherit;">ابحث عن دكتور</button>
                                <h4>او اتصل علي <a>16676</a></h4>
                            </div>
                        </div>
                        <div className="drug1 col-12 d-flex flex-column align-items-center
                        tab-pane fade" id="drug">
                            <div className="input-group flex-nowrap position-relative"
                            style="border:1px solid rgb(0, 112, 205)">
                                <input type="text" className="form-control" 
                                placeholder="ابحث عن طلبك      ">
                                    <i className="fas fa-search position-absolute" 
                                    style="top: 0.8em;
                                    z-index: 100;
                                    right: 0.5em;"></i>
                                </input>
                            </div>
                            <h4>او اتصل علي <a>16676</a></h4>
                        </div>
                        <div className="calldoc1 col-12 d-flex flex-column align-items-center
                        tab-pane fade" id="calldoc">
                            <div className="mb-3" style="width: inherit;border: 1px solid rgb(0, 112, 205);;">
                                <input type="text" 
                                className="form-control" placeholder="ابحث بالتخصص, اسم الدكتور او المستشفى"/>
                            </div>
                            <button type="submit" className="btn btn-danger mb-3" style="width: inherit;">ابحث عن دكتور</button>
                            <h4>او اتصل علي <a>16676</a></h4>
                        </div>
                    </div>
                </div>
            </div>
    </>;
}
