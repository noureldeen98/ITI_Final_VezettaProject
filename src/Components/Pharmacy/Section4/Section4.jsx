import React from 'react';
import './Section4.css';

export default function Section4() {
    return (
        <>
            <section className="section4 row">
                <h3>نزل تطبيق فيزيتا</h3>
                <p>هتقدر تتابع طلبك و اعادة طلب المنتجات السابقة بسهولة و البحث عن المنتجات المختلفة و اكتر</p>
                <div>
                    <a className="can-hide" href="https://itunes.apple.com/eg/app/vezeeta/id1010281314?" rel="noreferrer" target="_blank">
                        <img src="src/Images/pharmacy/app-store" alt="icon" />
                    </a>
                    <a className="can-hide"
                        href="https://play.google.com/store/apps/details?id=com.ionicframework.vezeetapatientsmobile694843&hl"
                        target="_blank" rel="noreferrer" >
                        <img src="src/Images/pharmacy/google-play" alt="icon" />
                    </a>
                </div>
            </section >
        </>
    );
}
