import React from 'react';
import './Section2.css';
import { Row, Col, Button } from 'react-bootstrap';
import bills from '../../../Images/pharmacy/bills'
import write from '../../../Images/pharmacy/write'


export default function Section2() {
    const style = {
        'fontSize': '36px',
        'fontWeight': '700',
        'textAlign': 'center',
    }
    const iconStyle = {
        'position': 'absolute',
        'right': '20px',
        'bottom': '20px',
        'fontSize': '20px',
        'color': 'rgb(128, 129, 132)',
    }
    return (
        <>
            <Row className="section2">
                <h2 style={style}>اطلب ادويتك و كل اللي تحتاجه من الصيدلية</h2>

                <div className="search-container">

                    <div className="internal-search-container">
                        <Button style={{ outline: "0", border: "0" }} type="button" id="search-close">
                            <i className="fas fa-times-circle"></i>
                        </Button>
                        <Button style={{ outline: "0", border: "0" }} type="button">
                            <i style={iconStyle} className="fas fa-search"></i>
                        </Button>
                        <input type="search" id="input-text" placeholder="ابحث عن طلبك" />
                    </div>

                    <div id="search-box" className="result-search-box">
                        <ul style={{ listStyle: "none" }} className="m-0 p-0">
                        </ul>
                    </div>

                </div>

                <div className="section2-icons">
                    <Col>
                        <div className="icon-holder">
                            <img alt="icon" src={write} />
                            <input type="file" accept="image/*" />
                        </div>
                        <div>الطلب بالروشتة</div>
                    </Col>

                    <Col>
                        <div className="icon-holder">
                            <img alt="icon" src={bills} />
                            <input type="file" accept="image/*" />
                        </div>
                        <div>الطلب بصورة المنتج</div>
                    </Col>

                    <Col>
                        <div className="icon-holder">
                            <button type="button" className="btn btn-mod" data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop">
                                <i className="fas fa-phone-alt"></i>
                            </button>
                        </div>
                        <div>تواصل مع صيدلي</div>
                    </Col>
                </div>
            </Row >
        </>
    );
}
