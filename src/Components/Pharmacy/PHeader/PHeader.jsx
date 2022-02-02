import React, { useState } from 'react';
import "./PHeader.css";
import Logo from '../../../Images/pharmacy/logo'
import {
    Navbar,
    Nav,
    Button,
    Dropdown,
    Modal,
} from "react-bootstrap";
import PAlert from "./PAlert"
import SideNavbar from './SideNavbar';

export default function PHeader() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const style = {
        'backgroundColor': 'rgb(1, 114, 203)',
    }
    return (
        <>
            <Navbar style={style} expand="lg" className="d-flex flex-row-reverse">
                <Navbar.Brand href="#home"><img src={Logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex flex-row-reverse ">
                        <Nav.Link href="#home">ِEnglish</Nav.Link>
                        <Dropdown.Divider />
                        <Nav.Link href="#link">اتصل بنا:16676</Nav.Link>
                        <Nav.Link href="#link">اتصل الآن :16676</Nav.Link>
                        <Dropdown.Divider />
                        <Button variant="light" onClick={handleShow}>دخول</Button>
                    </Nav>
                </Navbar.Collapse>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Navbar>
            <PAlert message="جميع الأدوية يتم صرفها من صيدليات مرخصة من وزارة الصحة بجمهورية مصر العربية" />
            {/* <SideNavbar /> */}
        </>
    );
}

{/* <button type="button" className="btn login btn-light can-hide" data-bs-toggle="modal"
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
</div> */}