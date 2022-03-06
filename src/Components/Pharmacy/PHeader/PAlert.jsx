import React, { useState } from "react";
import { Alert } from "react-bootstrap"
import './PHeader.css';

export default function PAlert(props) {

    const [show, setShow] = useState(true);

    return (
        <>
            <Alert className="alert-msg" show={show} onClose={() => setShow(!show)} dismissible closeVariant='white'>
                <p>
                    {props.message}
                </p>
            </Alert>
        </>
    )
}
;
