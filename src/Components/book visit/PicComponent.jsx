import React from 'react';
import logo from '../../Images/logo.jpg';
import bg from '../../Images/Modal/visitForm.png';
import style from './Pic.module.css';
export default function PicComponent() {
    return <>
    <div className={`col-lg-5 ${style.left} col-md-6 col-12 order-1 order-md-2`}>
        <div>
            <img src={logo} className="img-fluid"/>
        </div>
        <div>
            <h4>احجز زيارة منزلية</h4>
            <h5>
                الآن من خلال فيزيتا يمكنك حجز زيارة منزلية مع دكتور متخصص.
            </h5>
        </div>
        <div>
            <img src={bg} className="img-fluid"/>
        </div>
    </div>
</>;
}
