import React, { useState } from 'react';
import "./PHeader.css";
import Logo from '../../../Images/pharmacy/logo'
import {
    Navbar,
    Nav,
    Button,
} from "react-bootstrap";
import PAlert from "./PAlert"
import SigninModal from './SigninModal';

export default function PHeader() {
    const [btn, setBtn] = useState(false);

    return (
        <>
            <Navbar style={{ backgroundColor: 'rgb(1, 114, 203)' }} expand="lg" className="d-flex flex-row-reverse pt-3 pb-3">
                <div className="justify-content-end ms-5 ps-4">
                    <Navbar.Brand href="#home"><img src={Logo} alt="" /></Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="justify-content-start me-5 pe-4">
                        <Nav className="me-auto d-flex flex-row-reverse ">
                            <Nav.Link className="me-3 text-light fs-6">اتصل بنا: 16676</Nav.Link>
                            <Nav.Link className="me-5 text-light fs-6">English</Nav.Link>
                            <Button style={{ color: 'rgb(1, 114, 203)' }} variant="light" onClick={() => setBtn(!btn)}>دخول</Button>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Navbar>
            <SigninModal btn={btn} />
            <PAlert message="جميع الأدوية يتم صرفها من صيدليات مرخصة من وزارة الصحة بجمهورية مصر العربية" />
        </>
    );
}