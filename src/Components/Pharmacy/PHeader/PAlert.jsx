import React, { useState } from "react";
import { Alert } from "react-bootstrap"


export default function PAlert(props) {
    const [alert, setAlert] = useState(true);
    const style = {
        'backgroundColor': 'rgb(1, 114, 203)',
        'color': 'rgb(229, 229, 229)',
        'boxShadow': '0px 0px 3px hsla(0, 0%, 0%, 0.3)',
        'border': '0',
        'textAlign': 'center',
        'fontSize': '20px',
        'margin': '0',
        'padding': '15px',
    }

    if (alert) {
        return (
            <>
                <Alert style={style} show={alert} onClose={() => setAlert(false)} dismissible>
                    <p>
                        {props.message}
                    </p>
                </Alert>
            </>
        )
    }
};
