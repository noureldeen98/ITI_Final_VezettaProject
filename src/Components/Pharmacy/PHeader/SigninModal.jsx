/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import { Form, Row, Button, Modal, ModalTitle } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { pharmacyAuth } from "../../../FireBaseConfiguration/FirebaseConfiguration";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useFormik } from "formik";
import OtpInput from "react-otp-input";
import { db } from "../../../FireBaseConfiguration/FirebaseConfiguration";
import { useHistory } from 'react-router-dom';
import userServices from "../userServices";
import "./SigninModal.css";

export default function SigninModal(props) {
    const { t } = useTranslation();
    const [confirmation, setConfirmation] = useState(false);
    const [otp, setOtp] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [userStatus, setUserStatus] = useState(false);
    const history = useHistory();

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                localStorage.setItem('authUserID', uid)
                setUserStatus(true);
            }
        });
    }, [props])

    const validate = (values) => {
        const errors = {};
        if (!values.userName) {
            errors.userName = "Required";
        }
        if (!values.phoneNumber) {
            errors.phoneNumber = "Required";
        } else if (/^(\+\20)(0|1|2|5)[0-9]*$/.test(values.phoneNumber)) {
            errors.phoneNumber = "Invalid Phone Number";
        } else if (values.phoneNumber.length !== 13) {
            errors.phoneNumber = "Invalid Phone Number";
        }
        return errors;
    };

    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {
                size: "invisible",
                callback: () => { },
            },
            pharmacyAuth
        );
    };

    const formik = useFormik({
        initialValues: {
            phoneNumber: "+20",
            userName: "",
        },
        validate,
        onSubmit: (values) => {
            generateRecaptcha();
            let phoneNumber = formik.values.phoneNumber;
            let appVerifier = window.recaptchaVerifier;
            signInWithPhoneNumber(pharmacyAuth, phoneNumber, appVerifier)
                .then((confirmationResult) => {
                    window.confirmationResult = confirmationResult;
                })
                .then(setConfirmation(true))
                .catch((error) => {
                    console.log(error);
                });
        },
    });

    const handleChange = (otp) => {
        setOtp(otp);
        if (otp.length === 6) {
            setDisabled(false);
        }
    };

    let phone = formik.values.phoneNumber;

    const verifyOTP = () => {
        let confirmationResult = window.confirmationResult;
        confirmationResult
            .confirm(otp)
            .then((result) => {
                const user = result.user;
                const userID = user.uid;
                const checkUser = async () => {
                    const user = await userServices.getUser(userID)
                    const userData = user.data();
                    const userPhone = userData.phone;
                    if (userPhone === formik.values.phoneNumber) {
                        history.push('/deliveryinfo')
                    } else {
                        const userRef = db.doc(`PharmacyUsers/${userID}`);
                        userRef.set({
                            phone: formik.values.phoneNumber,
                            Name: formik.values.userName,
                            Street: "",
                            Building: "",
                            Flat: "",
                            landmark: "",
                            Label: "",
                            LabelOther: "",
                        });
                        setShow(false);
                        setConfirmation(false);
                    }
                }
                checkUser()
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const [show, setShow] = useState(props.btn);
    useEffect(() => {
        setShow(props.btn);
    }, [props.btn]);

    const [seconds, setSeconds] = useState(59);
    useEffect(() => {
        let timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                clearInterval(timer);
            }
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    });

    return (
        <>
            <Modal show={show} onHide={setShow}>
                <Modal.Header></Modal.Header>
                <Modal.Body>
                    {confirmation ? (
                        <>
                            <div className="d-flex flex-column align-items-center justify-content-around otp-modal">
                                <div className="fw-bold">{t("Phone_Check")}</div>
                                <div>{t("Code_Send")}</div>
                                <div>
                                    <span className="phone-number">
                                        {phone.replace("+20", "")}
                                        <span
                                            className="change-phone"
                                            onClick={() => setConfirmation(false)}
                                        >
                                            {t("Change")}
                                        </span>
                                    </span>
                                </div>
                                <div>
                                    <OtpInput
                                        className="otp-input"
                                        value={otp}
                                        onChange={handleChange}
                                        numInputs={6}
                                        separator={<span>-</span>}
                                    />
                                </div>
                                <div>{t("Phone_Code", { seconds })}</div>
                                <div>
                                    <Button
                                        className="otp-btn"
                                        disabled={disabled}
                                        onClick={verifyOTP}
                                    >
                                        {t("Signup_Btn")}
                                    </Button>
                                </div>
                                <div className="otp-footer">{t("Sinup_Msg")}</div>
                                <div className="otp-footer">{t("Sinup_Law")}</div>
                            </div>
                        </>
                    ) : (
                        <>
                            <ModalTitle className="fw-bold">{t("Modal_Title")}</ModalTitle>
                            <form onSubmit={formik.handleSubmit} className="formStyle">
                                <Row className="mb-3">
                                    <Form.Label htmlFor="phoneNumber" className="fs-4">
                                        {t("Form_Label1")}
                                        <sup> *</sup>
                                    </Form.Label>
                                    <Form.Control
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        type="text"
                                        placeholder="+20 xx xxxx xxxx"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.phoneNumber}
                                    />
                                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                                        <div style={{ color: "red" }}>
                                            {formik.errors.phoneNumber}
                                        </div>
                                    ) : null}
                                </Row>

                                <Row className="mb-3">
                                    <Form.Label htmlFor="userName" className="fs-4">
                                        {t("Form_Label2")}
                                        <sup> *</sup>
                                    </Form.Label>
                                    <Form.Control
                                        id="userName"
                                        name="userName"
                                        type="text"
                                        placeholder={t("Form_Placeholder2")}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.userName}
                                    />
                                    {formik.touched.userName && formik.errors.userName ? (
                                        <div style={{ color: "red" }}>{formik.errors.userName}</div>
                                    ) : null}
                                </Row>

                                <Row className="d-flex justify-content-center">
                                    <Button
                                        className="mb-5 mt-3 d-flex justify-content-center"
                                        style={{ width: "60%", background: "#0071CD" }}
                                        type="submit"
                                    >
                                        {t("Modal_Button")}
                                    </Button>
                                </Row>
                            </form>
                        </>
                    )}
                    <div id="recaptcha-container"></div>
                </Modal.Body>
            </Modal>
        </>
    );
}
