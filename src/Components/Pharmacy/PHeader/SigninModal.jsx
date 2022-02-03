import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button, InputGroup, Modal } from 'react-bootstrap';
import './PHeader.css';

export default function SigninModal(props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    const [show, setShow] = useState(props.btn);
    useEffect(() => {
        setShow(props.btn)
    }, [props.btn])

    return (
        <>
            <Modal show={show} onHide={setShow}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Title className="text-center fs-3">تسجيل الدخول</Modal.Title>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className="formStyle">
                        <Row className="mb-3">
                            <Form.Group controlId="validationCustomUsername">
                                <Form.Label className="fs-4">رقم الموبايل<sup> *</sup></Form.Label>
                                <InputGroup hasValidation style={{ direction: "ltr" }}>
                                    <InputGroup.Text id="inputGroupPrepend">+20</InputGroup.Text>
                                    <Form.Control
                                        style={{ direction: "ltr" }}
                                        type="text"
                                        placeholder="01x xxxx xxxx"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        برجاء إدخال رقم الموبايل
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group controlId="validationCustom01">
                                <Form.Label className="fs-4">الإسم بالكامل<sup> *</sup></Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="أدخل اسمك بالكامل"
                                />
                                <Form.Control.Feedback type="invalid">برجاء إدخال الاسم بالكامل</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="d-flex justify-content-center">
                            <Button className="mb-5 mt-3 d-flex justify-content-center" style={{ width: "60%" }} type="submit">تحقق من رقم هاتفك</Button>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
};