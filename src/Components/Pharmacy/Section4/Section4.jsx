import React from 'react';
import { Row } from 'react-bootstrap';
import './Section4.css';
import AppStoreLogo from '../../../Images/pharmacy/app-store'
import GooglePlayLogo from '../../../Images/pharmacy/google-play'

export default function Section4() {
    return (
        <>
            <Row className="section4">
                <h3>نزل تطبيق فيزيتا</h3>
                <p>هتقدر تتابع طلبك و اعادة طلب المنتجات السابقة بسهولة و البحث عن المنتجات المختلفة و اكتر</p>
                <div>
                    <a href="https://itunes.apple.com/eg/app/vezeeta/id1010281314?" rel="noreferrer" target="_blank">
                        <img src={AppStoreLogo} alt="icon" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.ionicframework.vezeetapatientsmobile694843&hl"
                        target="_blank" rel="noreferrer" >
                        <img src={GooglePlayLogo} alt="icon" />
                    </a>
                </div>
            </Row >
        </>
    );
}
