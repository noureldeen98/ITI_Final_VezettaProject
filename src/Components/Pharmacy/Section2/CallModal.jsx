import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './Section2.css';

export default function CallModal(props) {

    const [show, setShow] = useState(props.call);
    useEffect(() => {
        setShow(props.call);
    }, [props.call])

    const style = {
        'textDecoration': 'none',
        'color': 'rgb(0, 112, 205)',
        'fontSize': '30px'
    }

    const { t } = useTranslation();
    return (
        <>
            <Modal show={show} onHide={setShow}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-center fw-bold fs-1">
                        {t('Modal_Call_Title')}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ direction: 'ltr' }} className="shadow p-3 d-flex justify-content-end flex-row mb-5 rounded">
                        <a style={style} className="me-3 modal-a" href="http://16676">
                            {t('Modal_Call_SubTitle')}
                        </a>
                        <i style={style} className="fas fa-phone"></i>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
