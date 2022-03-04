import React from 'react';
import style from './smallBtn.module.css';
export default function SmallBtn(props) {
    return <>
    <button type="button" className="btn btn-light me-2">
        <a href={`/DoctorCall?doc=${props.data}`} className={`text-decoration-none ${style.link}`}>
            {props.data}
        </a>
    </button>
    </>;
}
