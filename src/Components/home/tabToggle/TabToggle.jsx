import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDepts} from '../../../ReactRedux/Actions/DeparmentsAction';
export default function TabToggle() {
    const dispatch = useDispatch();
    const depts = useSelector((state) => state.deptRed);
    useEffect(() => {
        dispatch(getDepts());
    }, [])
    console.log('my data', depts);
    return <>
        <div className="sliderContent">
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
                <div className="second tab-content">
                    {/* da goz2 awel tab h7od component here bta3 labToggle*/}

                    {/* wara b3d */}
                    
                    {/* da goz2 tani tab h7od component here bta3 smallToggle*/}
                    
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
