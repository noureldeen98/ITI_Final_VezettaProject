import React, { useState } from "react";
import { Alert } from "react-bootstrap"
import './PHeader.css';


export default function PAlert(props) {
    const style = {
        'backgroundColor': 'rgb(1, 114, 203)',
        'color': 'rgb(229, 229, 229)',
        'boxShadow': '0px 0px 3px hsla(0, 0%, 0%, 0.3)',
        'border': '0',
        'borderRadius': '0',
        'textAlign': 'center',
        'margin': '0px',
        'padding': '24px 0',
        'height': '70px',
        'lineHeight': '24px',
    }

    const [show, setShow] = useState(true);

    return (
        <>
            <Alert style={style} show={show} onClose={() => setShow(!show)} dismissible>
                <p className="fs-4">
                    {props.message}
                </p>
            </Alert>
        </>
    )
}
;
