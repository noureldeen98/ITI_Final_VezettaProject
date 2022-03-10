import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import bills from '../../../Images/pharmacy/bills'
import write from '../../../Images/pharmacy/write'
import './Section2.css';
import CallModal from './CallModal';


export default function Section2() {
    const style = {
        'fontSize': '36px',
        'fontWeight': '700',
        'textAlign': 'center',
        'paddingTop': '40px',
    }

    const [call, setCall] = useState(false);

    return (
        <>
            <Row className="section2">
                <h2 style={style}>اطلب ادويتك و كل اللي تحتاجه من الصيدلية</h2>
                <div className="internal-search-container">
                    <div className="search-input">
                        <input type="search" id="input-text" placeholder="ابحث عن طلبك" />
                        <i className="fas fa-search"></i>
                        <i className="fas fa-times-circle"></i>
                    </div>
                </div>
                <div id="search-box" className="result-search-box">
                    <ul style={{ listStyle: "none" }} className="m-0 p-0">
                    </ul>
                </div>
                <div className="section2-icons">
                    <Col className="d-flex flex-column align-items-start mt-4">
                        <div className="icon-holder me-4">
                            <button className="callBtn" onClick={() => setCall(!call)} >
                                <i className="fas fa-phone-alt"></i>
                            </button>
                        </div>
                        <div>تواصل مع صيدلي</div>
                        <CallModal call={call} />
                    </Col>
                    <Col className="d-flex flex-column align-items-center mt-4">
                        <div className="icon-holder">
                            <img alt="icon" src={bills} />
                            <input type="file" accept="image/*" />
                        </div>
                        <div>الطلب بصورة المنتج</div>
                    </Col>
                    <Col className="d-flex flex-column align-items-end mt-4">
                        <div className="icon-holder ms-4">
                            <img alt="icon" src={write} />
                            <input type="file" accept="image/*" />
                        </div>
                        <div>الطلب بالروشتة</div>
                    </Col>
                </div>
            </Row >
        </>
    );
}
