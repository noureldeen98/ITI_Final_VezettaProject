import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Row, Col, InputGroup } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { useTranslation } from "react-i18next";
import { useHistory, useLocation } from "react-router-dom";
import userServices from "../userServices";
import "./DeliveryModal.css";

export default function DeliveryModal(props) {
    const history = useHistory();
    const location = useLocation();

    const [other, setOther] = useState(false);
    const [landmarkInput, setLandmarkInput] = useState(false);
    const [validated, setValidated] = useState(false);

    const [user] = useState(localStorage.getItem("authUserID"));

    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [building, setBuilding] = useState("");
    const [flat, setFlat] = useState("");
    const [landmark, setLandmark] = useState("");
    const [label, setLabel] = useState("");
    const [labelOther, setLabelOther] = useState("");

    useEffect(() => {
        const getUserData = async () => {
            const userData = await userServices.getUser(user);
            const userAdress = userData.data();
            setPhone(userAdress.phone)
            setName(userAdress.Name)
            setStreet(userAdress.Street)
            setBuilding(userAdress.Building)
            setFlat(userAdress.Flat)
            setLandmark(userAdress.landmark)
            setLabel(userAdress.Label)
            setLabelOther(userAdress.LabelOther)
        }
        getUserData()
    }, [user])

    const [address, setAddress] = useState(props.show);
    useEffect(() => {
        setAddress(props.show);
    }, [props.show]);

    const handleUpdate = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        }
        userServices.updateUser(user, {
            Street: street,
            Building: building,
            Flat: flat,
            landmark: landmark,
            Label: label,
            LabelOther: labelOther,
        })
        history.push("/deliveryinfo");
        // .then(
        //     () => {
        //         if (location.pathname === '/deliveryinfo') {
        //             window.location.reload()
        //         } else {
        //         }
        //     }
        // )
    };

    const { t } = useTranslation();

    return (
        <>
            <Modal show={address} backdrop="static" keyboard={false}>
                <ModalHeader>
                </ModalHeader>
                <Modal.Body>
                    <h1 className="modal-tittle">{t("Delivery_Data")}</h1>
                    <Form
                        className="form"
                        noValidate
                        validated={validated}
                        onSubmit={handleUpdate}
                    >
                        <Row>
                            <Col>
                                <Form.Group controlId="validationCustom03">
                                    <Form.Label>
                                        {t("Street")}
                                        <sup> *</sup>
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder={t("Street_Example")}
                                        required
                                        value={street}
                                        onChange={(e) => setStreet(e.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {t("Street_Error")}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Row>
                                    <Col>
                                        <Form.Group controlId="validationCustom03">
                                            <Form.Label>
                                                {t("Building")}
                                                <sup> *</sup>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder={t("Building_Example")}
                                                required
                                                value={building}
                                                onChange={(e) => setBuilding(e.target.value)}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {t("Building_Error")}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="validationCustom03">
                                            <Form.Label>
                                                {t("Flat")}
                                                <sup> *</sup>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder={t("Flat_Example")}
                                                required
                                                value={flat}
                                                onChange={(e) => setFlat(e.target.value)}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {t("Flat_Error")}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group>
                                    <Form.Label>
                                        <span
                                            className="landmark"
                                            onClick={() => setLandmarkInput(!landmark)}
                                        >
                                            {landmark ? (
                                                <i className="fas fa-minus ms-2"></i>
                                            ) : (
                                                <i className="fas fa-plus ms-2"></i>
                                            )}
                                            {t("Landmark")}
                                        </span>
                                    </Form.Label>
                                    {landmarkInput && (
                                        <Form.Control
                                            type="text"
                                            placeholder={t("Landmark_Example")}
                                            value={landmark}
                                            onChange={(e) => setLandmark(e.target.value)}
                                        />
                                    )}
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>{t("Label")}</Form.Label>
                                    <Row>
                                        <div className="radio-container">
                                            <input
                                                type="radio"
                                                name="address_Label"
                                                id="option-1"
                                                onClick={() => setOther(false)}
                                            />
                                            <label htmlFor="option-1" className="option">
                                                {t("Label_1")}
                                            </label>
                                            <input
                                                type="radio"
                                                name="address_Label"
                                                id="option-2"
                                                onClick={() => setOther(false)}
                                            />
                                            <label htmlFor="option-2" className="option">
                                                {t("Label_2")}
                                            </label>
                                            <input
                                                type="radio"
                                                name="address_Label"
                                                id="option-3"
                                                onClick={() => setOther(false)}
                                            />
                                            <label htmlFor="option-3" className="option">
                                                {t("Label_3")}
                                            </label>
                                            <input
                                                type="radio"
                                                name="address_Label"
                                                id="option-4"
                                                onClick={() => setOther(true)}
                                            />
                                            <label htmlFor="option-4" className="option">
                                                {t("Label_4")}
                                            </label>
                                        </div>
                                    </Row>
                                    <Row>
                                        {other && (
                                            <Form.Control
                                                type="text"
                                                placeholder={t("Label_4_Example")}
                                                value={labelOther}
                                                onChange={(e) => setLabelOther(e.target.value)}
                                            />
                                        )}
                                    </Row>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group controlId="validationCustomUsername">
                                    <Form.Label>
                                        {t("Number")}
                                        <sup> *</sup>
                                    </Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            type="text"
                                            placeholder="01x xxxx xxxx"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                            disabled
                                            value={phone}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {t("Form_Feedback1")}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group controlId="validationCustom01">
                                    <Form.Label>
                                        {t("Name")}
                                        <sup> *</sup>
                                    </Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder={t("Form_Placeholder2")}
                                        disabled
                                        value={name}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {t("Form_Feedback2")}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="address-btn">
                            <Button
                                variant="primary"
                                type="submit"
                            >
                                {t("Save_Address")}
                            </Button>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    setAddress(!address);
                                    history.push("/cart");
                                }}
                            >
                                {t("Edit_Order")}
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}
