import React from 'react';
import style from './bigTab.module.css';
export default function BigTab() {
    // tab-pane fade in active 
    return <>
        <div className={`d-flex align-items-center
                    ${style.reserveID}`} id={style.reserve}>
            <div className="dropdown">
                <button className="btn dropdown-toggle" 
                type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" 
                aria-expanded="false">
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
                    <div className={style.ulContainer} id="cities">
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
                            <li id="commonAreas" style={{"display": "block"}}>
                                الاكثر اختيارا
                            </li>
                            <span id="commonSpan">

                            </span>
                        </div>
                        <div className="left">
                            <li id="otherAreas" style={{"display": "block"}}>
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
            <div className={style.doc}>
                <h5>او اكتب اسم الدكتور</h5>
                <h3>
                    <i className="fas fa-user-md"></i>
                    <span> الدكتور او المستشفى</span>
                </h3>
            </div>
            <div className=" bg-danger text-light" style={{"alignSelf": "stretch", "borderRadius":"10px" }}>
                <h3 style={{"textAlign": "center",
                "padding": "1em"}}>
                    <i className="fas fa-search"></i>
                    <span> ابحث</span>
                </h3>
            </div>
        </div>
    </>
}
