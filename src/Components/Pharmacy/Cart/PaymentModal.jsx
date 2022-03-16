import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './PaymentModal.css';

export default function PaymentModal(props) {
    const [show, setShow] = useState(props.btn);
    useEffect(() => {
        setShow(props.btn)
    }, [props.btn])

    const { t } = useTranslation();
    const [totalPayment, setTotalPayment] = useState(props.totalPrice)
    useEffect(() => {
        setTotalPayment(props.totalPrice)
    }, [props.totalPrice])

    return (
        <>
            <Modal show={show} onHide={setShow}>
                <Modal.Header>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Title className="fw-bold fs-1 mb-5">
                        {t('Payment_Modal_Title')}
                    </Modal.Title>
                    <div className="d-flex justify-content-between p-3" style={{ backgroundColor: ' #f5f5f5' }}>
                        <div className='fs-4'>
                            {t('Payment_Modal_Row1')}
                        </div>
                        <div className='fs-4'>
                            {props.totalPrice - 10} {t('currency')}
                        </div>
                    </div>
                    <div className="d-flex justify-content-between p-3">
                        <div className='fs-4'>
                            {t('Payment_Modal_Row2')}
                        </div>
                        <div className='fs-4'>
                            10 {t('currency')}
                        </div>
                    </div>
                    <div className="d-flex justify-content-between p-3" style={{ backgroundColor: ' #f5f5f5' }}>
                        <div className='fw-bold fs-4'>
                            {t('Payment_Modal_Row3')}
                        </div>
                        <div className='fw-bold fs-4'>
                            {totalPayment} {t('currency')}
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <button className="payment-confirm-btn" onClick={() => setShow(!show)}>
                            {t('Payment_Modal_Btn')}
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
};