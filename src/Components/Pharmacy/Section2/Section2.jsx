import React from 'react';
import './Section2.css' ;

export default function Section2() {
    return (
        <>
            <section className="section2 row">
                <h2>اطلب ادويتك و كل اللي تحتاجه من الصيدلية</h2>
                <div className="search-container">
                    <div className="internal-search-container">
                        <button style={{ outline: "0" }} type="button" id="search-close">
                            <i className="fas fa-times-circle"></i>
                        </button>
                        <button style={{ outline: "0" }} type="button" className="btn search-start">
                            <i className="fas fa-search"></i>
                        </button>
                        <input type="search" id="input-text" placeholder="ابحث عن طلبك" />
                    </div>
                    <div id="search-box" className="result-search-box">
                        <ul style={{ listStyle: "none" }} className="m-0 p-0">
                        </ul>
                    </div>
                </div>
                <div className="section2-icons">
                    <div className="icon-holder">
                        <img src="/Images/pharmacy/write" alt="icon" />
                        <input type="file" accept="image/*" />
                        <div>الطلب بالروشتة</div>
                    </div>

                    <div className="icon-holder">
                        <img src="src/Images/pharmacy/bills" alt="icon" />
                        <input type="file" accept="image/*" />
                        <div>الطلب بصورة المنتج</div>
                    </div>

                    <div className="icon-holder">
                        <button type="button" className="btn btn-mod" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop">
                            <i className="fas fa-phone-alt"></i>
                        </button>
                    </div>
                    <div>تواصل مع صيدلي</div>
                </div>
            </section >
        </>
    );
}
