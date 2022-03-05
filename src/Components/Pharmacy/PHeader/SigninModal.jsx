import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button, InputGroup, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
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

    const { t } = useTranslation();

    return (
        <>
            <Modal show={show} onHide={setShow}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Title className="text-center fs-3">
                        {t('Modal_Title')}
                    </Modal.Title>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className="formStyle">
                        <Row className="mb-3">
                            <Form.Group controlId="validationCustomUsername">
                                <Form.Label className="fs-4">
                                    {t('Form_Label1')}
                                    <sup> *</sup>
                                </Form.Label>
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
                                        {t('Form_Feedback1')}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group controlId="validationCustom01">
                                <Form.Label className="fs-4">
                                    {t('Form_Label2')}
                                    <sup> *</sup>
                                </Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder={t('Form_Placeholder2')}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {t('Form_Feedback2')}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="d-flex justify-content-center">
                            <Button className="mb-5 mt-3 d-flex justify-content-center" style={{ width: "60%" }} type="submit">
                                {t('Modal_Button')}
                            </Button>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
};