import React from 'react';
import style  from './offerBtn.module.css';
export default function OfferBtn() {
    return <>
        <button className={`carousel-control-prev position-absolute`} 
            type="button" id={style.sliderBtn}
            data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <i className="fas fa-chevron-left"></i>
        </button>
        <button className={`carousel-control-next position-absolute`}
            type="button" id={style.sliderBtn2}
            data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <i className="fas fa-chevron-right"></i>
        </button>
    </>;
}
