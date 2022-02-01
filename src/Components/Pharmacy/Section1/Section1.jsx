import React from 'react';
import './Section1.css';



export default function Section1() {
    return (
        <div>
            <section className="section1 row">
                <div className="d-flex justify-content-center">
                    <img alt="icon" src="/src/Images/pharmacy/delivery.png" className="can-show" />
                    <h1>طلب و متابعة شهرية لأدويتك بأسهل طريقة</h1>
                </div>
                <div className="main-banner">
                    <div className="main-banner-icons">
                        <img alt="icon" src="/src/Images/pharmacy/bolt.png" />
                        <div style={{ width: "99%" }}>توصيل فورى</div>
                    </div>
                    <div className="main-banner-icons">
                        <img alt="icon" src="/src/Images/pharmacy/calender.png" />
                        <div>تذكرة بمواعيد تجديد الدواء</div>
                    </div>
                    <div className="main-banner-icons">
                        <img alt="icon" src="/src/Images/pharmacy/doctor.png" />
                        <div>تواصل مع صيدلي</div>
                    </div>
                </div>
            </section>
        </div>
    );
}
